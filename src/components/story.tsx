"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { FiArrowRight } from "react-icons/fi"; 

const AboutUs = () => {

  return (
    <section className="py-16 bg-white text-gray-800">
      <div className="max-w-6xl mx-auto px-8 py-16 ">

        {/* Section Principale - Grid layout: Images on the left, Text/Skills on the right */}
        <div className="grid md:grid-cols-2 gap-10 items-start">
          
          {/* LEFT SIDE: Images & Circular Badge */}
          <div className="relative space-y-6"> {/* Utilisation de space-y-6 pour l'espace entre les images */}
            
            {/* Image 1 (Top Left) */}
            <div className="w-[77%] h-56 relative rounded-xl overflow-hidden">
              <Image
                src="https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg"
                alt="Team working together"
                fill
                className="object-cover rounded-2xl"
                
              />
            </div>
            
            {/* Image 2 (Bottom Left) */}
            <div className="w-full h-56 relative rounded-xl overflow-hidden">
              <Image
                src="https://images.pexels.com/photos/3184644/pexels-photo-3184644.jpeg"
                alt="Business discussion"
                fill
                className="object-cover rounded-2xl"
                
              />
            </div>

            {/* Circular Badge - Positionné de manière plus précise pour la maquette */}
            <motion.div 
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 100, delay: 0.5 }}
              className="absolute top-[25%] left-[83%] w-24 h-24 flex items-center justify-center rounded-full bg-white shadow-sm  border-4 border-white z-10"
              // J'ai enlevé les transformations dynamiques pour le coller dans la zone comme sur la maquette
            >
              <div className="relative w-full h-full flex items-center justify-center">
                <span className="text-green-700 font-bold text-base">
                    <Image
                        src="/logos/logo.png"
                        alt="Business discussion"
                        fill
                        className="object-cover rounded-2xl"
                    />
                </span>
              </div>
            </motion.div>
          </div>

          {/* RIGHT SIDE: Text, Skills, and Button */}
          <div className="space-y-8">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mt-2">
                Notre Historique
            </h2>
            <div className="w-16 h-1 bg-orange-200 mt-3 mb-6"></div>
            {/* Introductory Text (Matches the image placement) */}
            <p className="text-gray-600 text-sm font-light mb-10 max-w-lg text-justify">
                Étant donné la persistance des violations des droits humains, des tortures et violences sexuelles et domestiques en particuliers,
                les menaces contre les défenseurs des droTENAREits humains, la présence des victimes des violations des droits humains, l’ignorance des droits humains par la population et les autorités locales, des lacunes dans la gouvernance locale et des conflits communautaires qui entravent le développement de la RDC, la CVPD a été créée pour apporter sa contribution à la résolution de ces problèmes.
                Elle a été initiée par l’un des défenseurs des droits humains le plus ancien et le plus engagé en RDC monsieur Arnold DJUMA BATUNDI en Novembre 2012 à Goma, chef-lieu de la Province du Nord Kivu. Il a été ensuite rejoins par d’autres membres(12) qui y ont adhéré.
            </p>
            {/* Button */}
            <motion.a
                href="#"
                whileHover={{ scale: 1.05, }} 
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm transition-colors duration-200 border-1 border-[#017dbf] text-[#017dbf] hover:bg-[#017dbf]/20"
            >
              Lire plus <FiArrowRight className="w-5 h-5" />
            </motion.a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs; 