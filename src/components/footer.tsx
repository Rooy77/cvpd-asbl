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

                    
                    <div className="lg:w-1/2 mb-12 lg:mb-0">
                        <div className="flex items-center mb-6">
                            <div className="relative w-16 h-16 mr-3">
                                
                                <Image
                                    src="/logos/logo.png" 
                                    alt="Logo cvpd-asbl"
                                    fill
                                    className="object-contain"
                                />
                            </div>
                            <h3 className="text-xl font-bold text-gray-800">CPD - asbl</h3>
                        </div>
                        
                        <p className="text-xs font-light text-gray-700 mb-8 max-w-lg">
                            Elle a été initiée par l’un des défenseurs des droits humains le plus ancien et le plus engagé en RDC monsieur Arnold DJUMA BATUNDI en Novembre 2012 à Goma, chef-lieu de la Province du Nord Kivu. Il a été ensuite rejoins par d’autres membres(12) qui y ont adhéré.
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

                        <form className="space-y-4 text-gray-300 text-xs">
                            <div className="flex flex-col md:flex-row md:space-x-4 space-y-4 md:space-y-0">
                                {/* Prénom */}
                                <input 
                                    type="text" 
                                    placeholder="Prénom*" 
                                    required 
                                    className="flex-1 p-3 border border-gray-300 rounded-full focus:ring-[#017dbf] focus:border-[#017dbf]"
                                />
                                {/* Pays */}
                                <select 
                                    defaultValue=""
                                    required 
                                    className="flex-1 p-3 border border-gray-300 rounded-full focus:ring-[#017dbf] focus:border-[#017dbf] bg-white appearance-none"
                                >
                                    <option value="" disabled >Pays*</option>
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
                                className="w-full p-3 border border-gray-300 rounded-full focus:ring-[#017dbf] focus:border-[#017dbf]"
                            />
                            
                            {/* Bouton d'inscription */}
                            <button 
                                type="submit" 
                                className="w-full md:w-auto bg-[#017dbf] text-white font-semibold py-3 px-8 rounded-full hover:bg-[#017dbf] transition-colors"
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