"use client";

import Image from "next/image";

export default function OrganisationCVPD() {
  return (
    <section className=" bg-gray-900 text-white flex flex-col items-center justify-center px-4 py-20">
      <div className="max-w-6xl text-center">
        <h2 className="text-2xl md:text-3xl font-bold leading-relaxed">
          Organisation de la CVPD
        </h2>
        <p className="text-xs text-gray-400 mt-2 font-light mb-8">
          La structure organisationnelle de la CVPD se présente de la manière suivante :
        </p>

        {/* Image de l’organigramme */}
        <div className="relative w-full max-w-4xl mx-auto rounded-xl overflow-hidden shadow-2xl border border-gray-700 bg-gray-800 p-4">
          <Image
            src="/img/org.jpg" // 🔹 place ton image ici dans /public/images/
            alt="Organigramme de la CVPD"
            width={1200}
            height={900}
            className="w-full h-auto object-contain rounded-lg"
          />
        </div>

        {/* Légende ou note éventuelle */}
      </div>
    </section>
  );
}
