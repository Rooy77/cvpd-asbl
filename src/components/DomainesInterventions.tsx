"use client";

import React from "react";
import {
  GraduationCap,
  Megaphone,
  ShieldCheck,
  Info,
  Link as LinkIcon,
} from "lucide-react";

const domaines = [
  {
    icon: GraduationCap,
    title: "Éducation",
    description:
      "L’éducation aux droits humains (accent particulier sur les DESC, la torture et violences sexuelles) et Bonne gouvernance.",
  },
  {
    icon: Megaphone,
    title: "Monitoring",
    description:
      "Le Monitoring des droits humains et plaidoyer (toutes les trois catégories).",
  },
  {
    icon: LinkIcon,
    title: "Protection et Sécurité",
    description:
      "La Protection et la sécurité des défenseurs des droits humains.",
  },
  {
    icon: Info,
    title: "Prévention",
    description:
      "La prévention de la torture et des violences basées sur le genre, la prise en charge des victimes, la réinsertion économique et l’accompagnement juridique et psychologique.",
  },
  {
    icon: ShieldCheck,
    title: "Résolution des conflits",
    description:
      "La résolution pacifique des conflits et la cohabitation pacifique entre les peuples.",
  },
];

export default function DomainesInterventions() {
  return (
    <section className="bg-white px-4">
      <div className="max-w-6xl mx-auto px-8 py-16">
            <div className="text-center mb-12 justify-center">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mt-2">
                    Domaines d’interventions
                </h2>
            <div className="w-16 h-1 bg-orange-200 mt-3 mb-6 justify-center mx-auto"></div>
            </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 justify-items-center">
          {domaines.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="group flex flex-col items-center text-center max-w-sm transition-all duration-300 hover:-translate-y-2"
              >
                <div
                  className="flex items-center justify-center w-16 h-16 mb-4 rounded-full border-1 border-[#017dbf] text-[#017dbf] transition-all duration-300 group-hover:bg-[#017dbf] group-hover:text-white"
                >
                  <Icon className="w-8 h-8 transition-all duration-300" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm font-light mb-10 max-w-lg text-justify leading-relaxed">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
