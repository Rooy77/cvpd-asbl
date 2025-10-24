import React from 'react';
import Image from 'next/image';
import { FiCheck } from 'react-icons/fi'; // Icône de coche (à installer si besoin)

const MissionEcosoc = () => {
  return (
    <div className="container mx-auto px-6 py-1 flex flex-col lg:flex-row items-start gap-10">
      
      {/* Colonne de Gauche : Image */}
      <div className="relative w-full lg:w-1/2 h-96 lg:h-auto rounded-lg overflow-hidden">
        {/* Placeholder pour l'image. Remplacez 'votre-image.jpg' par le chemin réel. */}
        <Image
          src="/chemin/vers/votre-image-de-travail.jpg" // À remplacer par le chemin réel de l'image
          alt="Membres de l'organisation travaillant sur un tableau"
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Colonne de Droite : Texte et Mission */}
      <div className="w-full lg:w-1/2">
        
        {/* Encadré d'information principal (bleu) */}
        <div className="bg-blue-500 text-white p-6 mb-8 rounded-lg">
          <h2 className="text-2xl md:text-3xl font-bold leading-relaxed">
            Organisation dotée d&apos;un statut consultatif Spécial à l&apos;ECOSOC aux Nations Unies depuis 2021
          </h2>
        </div>

        <p className="text-gray-700 font-semibold mb-4">
          La CVPD a pour mission :
        </p>

        {/* Liste des Missions */}
        <ul className="space-y-4">
          {/* Mission 1 */}
          <li className="flex items-start text-gray-700">
            <FiCheck className="w-6 h-6 text-orange-600 mt-1 flex-shrink-0" />
            <p className="ml-3">
              D&apos;appuyer les initiatives locales œuvrant pour la promotion et la défense des droits de l&apos;homme, la Promotion de la Paix et le développement intégral et intégré.
            </p>
          </li>
          
          {/* Mission 2 */}
          <li className="flex items-start text-gray-700">
            <FiCheck className="w-6 h-6 text-orange-600 mt-1 flex-shrink-0" />
            <p className="ml-3">
              D&apos;organiser des actions de promotion de la Paix, la résolution pacifique des conflits et la bonne gouvernance
            </p>
          </li>
          
          {/* Mission 3 */}
          <li className="flex items-start text-gray-700">
            <FiCheck className="w-6 h-6 text-orange-600 mt-1 flex-shrink-0" />
            <p className="ml-3">
              Faire le plaidoyer et diverses actions auprès d&apos;organisations et instances nationales et internationales pour les droits humains, l&apos;édification de la Paix et le développement communautaire.
            </p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default MissionEcosoc;