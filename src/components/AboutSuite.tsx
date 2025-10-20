"use client";

import React, { useState } from "react";
import Image from "next/image";
import { FiArrowRight } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";

const AboutSection = () => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const toggleExpand = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  const services = [
    {
      title: "• Notre Mission",
      imageSrc: "/img/img.jpg",
      alt: "Team discussing social media strategy",
      description:
        "Appuyer les initiatives locales œuvrant pour la promotion et la défense des droits de l’homme, la Promotion de la Paix et le développement intégral et intégré. Organiser des actions de promotion de la Paix, la résolution pacifique des conflits et la bonne gouvernance, Faire le plaidoyer et diverses actions auprès d’organisations et instances nationales et internationales pour les droits humains, l’édification de la Paix et le développement communautaire.",
      highlight: false,
    },
    {
      title: "• Nos Objectifs",
      description:
        "Identifier par des actions diverses les problèmes communautaires qui entravent la promotion des droits humains, la paix et le développement; Accompagner les victimes de la torture, des violences sexuelles et des violences basées sur le genre par des actions d’identification, traitement et références médicales, accompagnement psychologique, médiation sociale, actions en justice, réinsertion économique, Accompagner les organisations Communautaires de Base qui œuvrent dans la promotion et la défense des droits de l’homme, la paix et le développement par des formations y compris les organisations des victimes des violences basées sur le genre, de la torture et d’autres traitements dégradants et inhumains; Promouvoir et défendre les droits humains à travers les mécanismes nationaux, régionaux et internationaux.",
      imageSrc: "https://images.pexels.com/photos/3184457/pexels-photo-3184457.jpeg",
      alt: "Group collaborating on content ideas",
      highlight: true,
    },
    {
      title: "• Réconnaissance légale",
      description:
        "Elle est agrée sous les actes suivants : F92 : 20.283 du 16 Mai 2013 ministère national de la justice et droits humains, arrêté provincial du gouverneur : 01/224/CAB/GP-NK/2015, DIVAS : 08/DIVAS/N-K/AS/045/2015, Miniplan : 439/DPP/NK/2014, Ministère du genre, famille et enfant : 007/DIV-PRO/GEFAE-NK/2014, autorisation de fonctionnement commune de Goma : 5072/260/CG/D22/2014. Son numéro national d’impôts : A1518931U",
      imageSrc: "https://images.pexels.com/photos/3184305/pexels-photo-3184305.jpeg",
      alt: "Woman sending an email campaign",
      highlight: false,
    },
  ];

  return (
    <section className="bg-white text-gray-800">
      <div className="max-w-6xl mx-auto px-8 py-16">
        {/* En-tête */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-16">
          <div>
            <p className="text-orange-200 font-semibold mb-2 flex items-center gap-2 text-sm">
              <span className="w-2 h-2 bg-orange-200 rounded-full"></span>A propos
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-700 mt-2">
              C&apos;est qui nous Identifie <br /> de l&apos;exterieur
            </h2>
          </div>
        </div>

        {/* Grille des cartes */}
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const isExpanded = expandedIndex === index;
            const truncatedText =
              service.description.slice(0, 150) +
              (service.description.length > 150 ? "..." : "");

            return (
              <motion.div
                layout
                key={service.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`p-4 rounded-3xl transition-all duration-300 ${
                  service.highlight
                    ? "bg-[#017dbf] text-gray-100"
                    : "border border-[#017dbf]"
                }`}
              >
                {/* Image top */}
                <div
                  className={`relative w-full h-40 mb-4 rounded-2xl overflow-hidden ${
                    service.highlight ? "hidden md:block" : ""
                  }`}
                >
                  <Image
                    src={service.imageSrc}
                    alt={service.alt}
                    fill
                    className="object-cover rounded-xl"
                    style={{ filter: service.highlight ? "none" : "grayscale(100%)" }}
                  />
                </div>

                <motion.div layout className="p-3">
                    <span className="w-2 h-2 bg-orange-200 rounded-full"></span>
                    <h3
                        className={`text-xl font-bold mb-3 ${
                        service.highlight ? "text-orange-200" : "text-[#017dbf]"
                        }`}
                    >
                        {service.title}
                    </h3>

                  {/* Texte animé avec fondu */}
                  <AnimatePresence mode="wait">
                    <motion.p
                      key={isExpanded ? "expanded" : "collapsed"}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.3 }}
                      className={`text-sm font-light mb-4 ${
                        service.highlight ? "text-gray-300" : "text-gray-600"
                      }`}
                    >
                      {isExpanded ? service.description : truncatedText}
                    </motion.p>
                  </AnimatePresence>

                  {/* Bouton Lire plus / Lire moins */}
                  <button
                    onClick={() => toggleExpand(index)}
                    className={`flex space-x-2 uppercase cursor-pointer items-center text-[#017dbf] hover:underline transition-colors text-[11px] font-semibold ${
                      service.highlight
                        ? "text-white hover:text-orange-200"
                        : "text-[#017dbf] hover:text-orange-200"
                    }`}
                  >
                    {isExpanded ? "Lire moins" : "Lire plus"}
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-arrow-up-right size-4" aria-hidden="true"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
                  </button>

                  {/* Image bas (uniquement pour la carte highlight) */}
                  {service.highlight && (
                    <motion.div
                      layout
                      className="relative w-full h-40 mt-4 rounded-xl overflow-hidden"
                    >
                      <Image
                        src="https://images.pexels.com/photos/3184644/pexels-photo-3184644.jpeg"
                        alt="Bottom image for content marketing"
                        fill
                        className="object-cover rounded-xl"
                      />
                    </motion.div>
                  )}
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
