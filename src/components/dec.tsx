"use client";
import Image from "next/image";

export default function MapSection() {
  return (
    <section className="py-10 bg-white">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        {/* Left: Map */}
        <div className="flex justify-center">
          <Image
            src="/img/stat.jpg" 
            alt="Carte des opérations"
            width={600}
            height={500}
            className="w-full max-w-md rounded-xl"
          />
        </div>

        {/* Right: Text & Stats */}
        <div>
          <p className="mb-3 inline-flex items-center rounded-full bg-indigo-50 px-5 py-2 text-[#017dbf] font-light">
            <span className="mr-2 block h-1.5 w-1.5 rounded-full bg-[#017dbf]"></span>
            <span className="text-xs font-bold">Pourquoi-Nous ?</span>
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mt-2">
            Dotée d&apos;un statut consultatif Spécial à l&apos;ECOSOC aux Nations Unies dépuis 2021
          </h2>
          <div className="w-16 h-1 bg-orange-200 mt-3 mb-6"></div>

          <p className="text-gray-600 text-sm font-light mb-10 max-w-lg">
            Nous intervient actuellement dans 4 provinces, apportant des soins
            médicaux de qualité aux populations les plus vulnérables, tout en
            développant des solutions durables pour améliorer les systèmes de
            soins locaux.
          </p>

          {/* Stats */}
          <div className="grid grid-cols-2 gap-8">
            <div>
              <h3 className="text-4xl font-bold text-[#017dbf]">52</h3>
              <p className="text-gray-800 text-sm font-medium">projets en cours</p>
            </div>
            <div>
              <h3 className="text-4xl font-bold text-[#017dbf]">5.9 M</h3>
              <p className="text-gray-800 text-sm  font-medium">
                de bénéficiaires en 2024
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
