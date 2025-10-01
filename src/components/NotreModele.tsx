"use client";

import React from 'react';
import Image from 'next/image';
import { FaPlay } from 'react-icons/fa';

// Définition du type pour un Pilier
type Pillar = {
  number: number;
  title: string;
  description: string;
};

// Les données des trois piliers (JSON/Array de données)
const modelPillars: Pillar[] = [
  {
    number: 1,
    title: "Une alliance unique",
    description: "entre des acteurs locaux et internationaux",
  },
  {
    number: 2,
    title: "Un ancrage local",
    description: "avec 95% des équipes issues des pays d’intervention et un siège opérationnel à Dakar",
  },
  {
    number: 3,
    title: "Constante d'innover",
    description: "pour transformer la médecine humanitaire",
  },
];

// Composant pour un pilier unique
const PillarItem: React.FC<Pillar> = ({ number, title, description }) => (
  <div className="flex items-start space-x-4 mb-8">
    <div className="flex-shrink-0 size-10 md:size-14 rounded-full bg-[#017dbf] text-white flex items-center justify-center font-bold text-xl">
      {number}
    </div>
    <div>
      <h3 className="text-base md:text-[20px] font-bold text-gray-800 mb-1">{title}</h3>
      <p className="text-sm text-gray-600">{description}</p>
    </div>
  </div>
);

// Composant principal de la section
export default function OurModelSection() {
  return (
    <section className="py-10 md:py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center justify-between">

          {/* Colonne de Contenu (Texte et Bouton) */}
          <div className="lg:w-3/12 mb-12 lg:mb-0">
            <p className="mb-3 inline-flex items-center rounded-full bg-indigo-50 px-5 py-2 text-[#017dbf] font-light">
                <span className="mr-2 block h-1.5 w-1.5 rounded-full bg-[#017dbf]"></span>
                <span className="text-xs font-bold">Nous découvrir</span>
            </p>
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Notre modèle
            </h2>
            <div className="w-16 h-1 bg-yellow-600 mb-6"></div> {/* Ligne de séparation jaune */}
            
            <p className="text-gray-600 mb-6 font-light text-sm">
              Nous sommes une ONG médicale internationale créée en 2009 qui apporte des soins de santé de qualité aux personnes les plus vulnérables, reconnu pour son expertise en santé maternelle et infantile, malnutrition, épidémies et maladies émergentes, recherche et innovation.
            </p>
            
            <a 
              href="#" 
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm transition-colors duration-200 border-1 border-[#017dbf] text-[#017dbf] hover:bg-[#017dbf]/20"
                >
              <span>Découvrire C.V.P.D</span>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-up-right size-4" aria-hidden="true"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
            </a>
          </div>

          {/* Colonne de l'Image */}
          <div className="relative w-full lg:w-4/12 flex justify-center">
            {/* Conteneur de l'image avec un ratio d'aspect fixe */}
            <div className="relative w-full max-w-sm aspect-[4/5] rounded-xl bg-gray-800"> 
              <Image
                src="https://images.pexels.com/photos/13360140/pexels-photo-13360140.jpeg" // Remplacez par votre image locale
                alt="Personnel soignant en action"
                fill
                className="object-cover rounded-xl"
                priority
              />
              {/* Bouton Play au centre */}
              <button 
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 size-20 bg-[#017dbf] rounded-full flex items-center justify-center opacity-90 hover:opacity-100 transition-opacity cursor-pointer"
                aria-label="Regarder la vidéo"
              >
                {/* Icône de lecture SVG */}
                <FaPlay size={25} className='rounded'/>
              </button>
            </div>
          </div>

          {/* Colonne des Piliers */}
          <div className="lg:w-3/12 mt-20 lg:mt-0">
            {/* Utilisation de .map() pour afficher les piliers à partir du tableau de données */}
            {modelPillars.map((pillar) => (
              <PillarItem 
                key={pillar.number} 
                number={pillar.number} 
                title={pillar.title} 
                description={pillar.description} 
              />
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}