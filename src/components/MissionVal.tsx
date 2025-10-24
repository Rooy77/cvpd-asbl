import React from 'react';
import Image from 'next/image';
import { FiCheck } from 'react-icons/fi'; 
import { motion } from 'framer-motion'; 

const MissionEcosoc = () => {
  return (
    <section className='max-w-6xl mx-auto px-8 py-16'>
      <div className="grid md:grid-cols-2 gap-5  items-start">
        {/* Colonne de Droite : Texte et Mission */}
        <div className="w-full lg:w-[100%]">
          
          {/* Encadré d'information principal (bleu) */}
          <div className=" text-white mb-8 rounded-lg">
            <h2 className="text-2xl bg-[#017dbf] md:text-3xl font-bold leading-normal">
              Organisation dotée d&apos;un statut consultatif <span className='text-orange-200'> Spécial à l&apos;ECOSOC </span> aux Nations Unies depuis 2021.
            </h2>
          </div>

          <p className="text-gray-700 font-semibold mb-4">
            La CVPD a pour mission :
          </p>

          {/* Liste des Missions */}
          <ul className="space-y-4">
            {/* Mission 1 */}
            <li className="flex items-start text-gray-700">
              <FiCheck className="w-6 h-6 text-orange-200 mt-1 flex-shrink-0" />
              <p className="ml-3 font-light text-sm">
                D&apos;appuyer les initiatives locales œuvrant pour la promotion et la défense des droits de l&apos;homme, la Promotion de la Paix et le développement intégral et intégré.
              </p>
            </li>
            
            {/* Mission 2 */}
            <li className="flex items-start text-gray-700">
              <FiCheck className="w-6 h-6 text-orange-200 mt-1 flex-shrink-0" />
              <p className="ml-3 font-light text-sm">
                D&apos;organiser des actions de promotion de la Paix, la résolution pacifique des conflits et la bonne gouvernance
              </p>
            </li>
            
            {/* Mission 3 */}
            <li className="flex items-start text-gray-700">
              <FiCheck className="w-6 h-6 text-orange-200 mt-1 flex-shrink-0" />
              <p className="ml-3 font-light text-sm">
                Faire le plaidoyer et diverses actions auprès d&apos;organisations et instances nationales et internationales pour les droits humains, l&apos;édification de la Paix et le développement communautaire.
              </p>
            </li>
          </ul>
        </div>
        <div className="relative space-y-6"> {/* Utilisation de space-y-6 pour l'espace entre les images */}        
            {/* Image 1 (Top Left) */}
            <div className="w-[77%] h-56 relative rounded-xl overflow-hidden">
              <Image
                src="/img/about-b.png"
                alt="Team working together"
                fill
                className="object-cover rounded-2xl"
                
              />  
            </div>
            
            {/* Image 2 (Bottom Left) */}
            <div className="w-full h-56 relative rounded-xl overflow-hidden">
              <Image
                src="/img/img.jpg"
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
              className="absolute top-[35%] left-[72%] w-24 h-24 flex items-center justify-center rounded-2xl bg-orange-200/20 z-10"
              // J'ai enlevé les transformations dynamiques pour le coller dans la zone comme sur la maquette
            >
              <div className="relative w-full h-full flex items-center justify-center">
                <span className="text-green-700 font-bold text-base">
                    
                </span>
              </div>
            </motion.div>
          </div>
      </div>
    </section>
  );
};

export default MissionEcosoc;