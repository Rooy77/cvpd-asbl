"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

interface TypewriterTextProps {
  texts: string[];              // Phrases à afficher
  speed?: number;               // Vitesse d’écriture (ms)
  delay?: number;               // Délai avant suppression (ms)
  textColor?: string;           // Couleur du texte (ex: "text-green-600")
  cursorColor?: string;         // Couleur du curseur (ex: "text-green-500")
  className?: string;           // Classes Tailwind supplémentaires
}

const TypewriterText: React.FC<TypewriterTextProps> = ({
  texts,
  speed = 80,
  delay = 1500,
  textColor = "text-orange-200",
  cursorColor = "text-orange-500",
  className = "",
}) => {
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    if (index === texts.length) setIndex(0); // boucle infinie

    const currentText = texts[index];
    let timeout: NodeJS.Timeout;

    if (!deleting && subIndex < currentText.length) {
      // écriture
      timeout = setTimeout(() => {
        setSubIndex((prev) => prev + 1);
      }, speed);
    } else if (deleting && subIndex > 0) {
      // effacement
      timeout = setTimeout(() => {
        setSubIndex((prev) => prev - 1);
      }, speed / 2);
    } else if (!deleting && subIndex === currentText.length) {
      // pause avant suppression
      timeout = setTimeout(() => setDeleting(true), delay);
    } else if (deleting && subIndex === 0) {
      // passer au texte suivant
      setDeleting(false);
      setIndex((prev) => (prev + 1) % texts.length);
    }

    return () => clearTimeout(timeout);
  }, [subIndex, deleting, index, texts, speed, delay]);

  return (
    <div
      className={`flex items-center text-2xl md:text-3xl font-semibold ${textColor} ${className}`}
    >
      {/* Texte animé */}
      <motion.span
        key={texts[index]}
        initial={{ opacity: 0.7 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.2 }}
        className="text-4xl md:text-5xl font-extrabold bg-clip-text"
      >
        {texts[index].substring(0, subIndex)}
      </motion.span>

      {/* Curseur clignotant */}
      <motion.span
        animate={{ opacity: [1, 0, 1] }}
        transition={{ duration: 0.8, repeat: Infinity }}
        className={`ml-1 ${cursorColor}`}
      >
        |
      </motion.span>
    </div>
  );
};

export default TypewriterText;
