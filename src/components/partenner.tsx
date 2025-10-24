"use client";

import Image from "next/image";
import React from "react";

const partenaires = [
    {
        logo: "/logos/AMC.jpg",
        nom: "Africa Medical Corps",
    },
    {
        logo: "/logos/American_jewish.png",
        nom: "American Jewish World Service",
    },
    {
        logo: "/logos/amnesty_2.png",
        nom: "Amenesty International",
    },
    {
        logo: "/logos/ANU.png",
        nom: "Katembo group",
    },
    {
        logo: "/logos/civicus.png",
        nom: "Civicus",
    },
    {
        logo: "/logos/equitas.jpg",
        nom: "Equitas",
    },
    {
        logo: "/logos/freedom_house.png",
        nom: "Freedom House",
    },
    {
        logo: "/logos/fund_glob.jpg",
        nom: "Fund Global",
    },
    {
        logo: "/logos/gaamac.png",
        nom: "Gaamac",
    },
    {
        logo: "/logos/GlobalInitiative.png",
        nom: "Global Initiative",
    },
    {
        logo: "/logos/Namati.png",
        nom: "Namati",
    },
    {
        logo: "/logos/peace-direct.jpg",
        nom: "Peace Direct",
    },
    {
        logo: "/logos/protection_international.png",
        nom: "Protection International",
    },
];



export default function Partenaires() {
  return (
    <section className="bg-white py-20 px-4 text-center">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-16">
          Ils nous ont approuvés
        </h2>

        {/* Logos partenaires */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-10 justify-items-center mb-20">
          {partenaires.map((p, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center group hover:scale-105 transition-transform duration-300"
            >
              <div className="relative w-28 h-20 flex items-center justify-center">
                <Image
                  src={p.logo}
                  alt={p.nom}
                  width={120}
                  height={80}
                  className="object-contain w-auto h-full  transition duration-300"
                />
              </div>
              <p className="mt-3 text-sm text-gray-700 font-light group-hover:text-[#017dbf] transition duration-300">
                {p.nom}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
