"use client";

import React from 'react';
import Image from 'next/image';
import { Facebook, Twitter, Instagram, Linkedin, Youtube } from 'lucide-react'; 
// Note : Le composant 'Img' a été remplacé par 'Image' et un 'span' pour le texte.

// Composant pour la barre de liens du bas de page (Bottom Bar)
const FooterNav: React.FC = () => {
    
    return (
        <div className="border-t-1 border-gray-300 max-w-6xl mx-auto px-4 py-16 text-gray-800 md:py-6 text-sm">
            <div className="mx-auto px-4">
              {/* Contenu de la première ligne */}
              <div className="items-center justify-center sm:flex">
                <a className="mb-2 flex items-center justify-center space-x-2 sm:mb-0" href="https://www.witoxr.com" target="_blank" rel="noopener noreferrer">
                  {/* Utilisation de l'icône de logo simulée */}
                  <span className="text-[#017dbf]"> C.V.P.D Asbl </span>
                  </a>
                  <span className="ml-2 block text-sm font-light text-gray-600">© 2025.Tout droit reservé.</span>
              </div>
            </div>
        </div>
    );
};

// Composant principal du Footer
export default function Footer() {
    return (
        <footer className="bg-white">
            <div className="max-w-6xl mx-auto px-4 py-16">
                <div className="flex flex-col lg:flex-row justify-between lg:space-x-12">

                    {/* Bloc Gauche : Infos Légales et Réseaux Sociaux (ALIMA) */}
                    <div className="lg:w-1/2 mb-12 lg:mb-0">
                        {/* Logo ALIMA */}
                        <div className="flex items-center mb-6">
                            <div className="relative w-16 h-16 mr-3">
                                {/* Next.js Image Component */}
                                <Image
                                    src="/images/alima-logo.png" 
                                    alt="Logo ALIMA"
                                    fill
                                    className="object-contain"
                                />
                            </div>
                            <h3 className="text-xl font-bold text-gray-800">ALIMA</h3>
                        </div>
                        
                        {/* Texte Légal/Fiscal */}
                        <p className="text-sm text-gray-700 mb-6 max-w-lg">
                            Association loi 1901 - Inscription et numéro SIREN : 631 620 398.
                        </p>
                        <p className="text-sm text-gray-700 mb-8 max-w-lg">
                            Dans le cadre du régime fiscal français, vous bénéficiez d’une réduction d’impôt sur le revenu de 75% du montant de vos dons dans la limite de 1 000 euros. Au-delà de ce montant, les dons sont déductibles à 66% dans la limite d’un équivalent de 20% de votre revenu imposable.
                        </p>

                        {/* Icônes de Réseaux Sociaux */}
                        <div className="flex space-x-4 text-gray-600">
                            <a href="#" aria-label="Facebook" className="hover:text-blue-600 transition-colors"><Facebook className="w-5 h-5" /></a>
                            <a href="#" aria-label="Twitter" className="hover:text-blue-600 transition-colors"><Twitter className="w-5 h-5" /></a>
                            <a href="#" aria-label="Instagram" className="hover:text-pink-600 transition-colors"><Instagram className="w-5 h-5" /></a>
                            <a href="#" aria-label="LinkedIn" className="hover:text-blue-700 transition-colors"><Linkedin className="w-5 h-5" /></a>
                            <a href="#" aria-label="YouTube" className="hover:text-red-600 transition-colors"><Youtube className="w-5 h-5" /></a>
                        </div>
                    </div>

                    {/* Bloc Droit : Formulaire Newsletter */}
                    <div className="lg:w-1/2">
                        <h4 className="text-xl font-semibold text-gray-800 mb-6">
                            Inscrivez-vous à notre newsletter
                        </h4>

                        <form className="space-y-4">
                            <div className="flex flex-col md:flex-row md:space-x-4 space-y-4 md:space-y-0">
                                {/* Prénom */}
                                <input 
                                    type="text" 
                                    placeholder="Prénom*" 
                                    required 
                                    className="flex-1 p-3 border border-gray-300 rounded-full focus:ring-blue-500 focus:border-blue-500"
                                />
                                {/* Pays */}
                                <select 
                                    required 
                                    className="flex-1 p-3 border border-gray-300 rounded-full focus:ring-blue-500 focus:border-blue-500 bg-white appearance-none"
                                >
                                    <option value="" disabled selected>Pays*</option>
                                    <option value="France">France</option>
                                    <option value="Canada">Canada</option>
                                    {/* Ajoutez d'autres pays ici */}
                                </select>
                            </div>
                            
                            {/* Email */}
                            <input 
                                type="email" 
                                placeholder="E-mail*" 
                                required 
                                className="w-full p-3 border border-gray-300 rounded-full focus:ring-blue-500 focus:border-blue-500"
                            />
                            
                            {/* Bouton d'inscription */}
                            <button 
                                type="submit" 
                                className="w-full md:w-auto bg-blue-600 text-white font-semibold py-3 px-8 rounded-full hover:bg-blue-700 transition-colors"
                            >
                                Je m&apos;inscris
                            </button>
                        </form>
                    </div>
                </div>
            </div>
            
            {/* Barre de navigation inférieure (Pied de page de Wito XR Studio) */}
            <FooterNav />
        </footer>
    );
}