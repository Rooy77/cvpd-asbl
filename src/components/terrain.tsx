"use client";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";   

type Article = {
  id: number;
  title: string;
  description: string;
  image: string;
  tag?: string;
  background : string;
  date: string;
  link: string;
};

const articles: Article[] = [
  {
    id: 1,
    title:
      "Rapport synthese des activites organisees en Septembre 2024",
    description:
      "I.CONTEXTE ET JUSTIFICATION Le contexte politique, sécuritaire et humanitaire demeure très précaire en RDC et plus particulièrement au Nord-Kivu. Il s’observe de nombreux troubles dans certains coins et des multiples violations des droits de l’homme. Parailleurs, ...",
    image: "https://cvpd-asbl.org/img/users/cvpd2024.jpg",
    tag: "•",
    background : "#017dbf", // A deep blue color for Soudan
    date: "Le 11 septembre 2025",
    link: "#",
  },
  {
    id: 2,
    title:
      "Accompagnement des DDH dans l'élaboration des plans de sécurité",
    description:
      "Pour mieux promouvoir et protéger les droits humains, la #cvpd accompagne les défenseur.e.s des droits humains dans l'élaboration de leurs plans de sécurité. Le 19/5/2022, les membres de 5 organisations sélectionnées ont été formés. La sécurité et la protection de ceux qui défendent le droit de défendre les droits humains est notre préoccupation ! ",
    image: "https://cvpd-asbl.org/img/users/DDH_Goma4.jpg",
    tag: "•", // Corrected tag
    background : "#D97706", // An orange color for Tchad
    date: "Le 10 septembre 2025",
    link: "#",
  },
  {
    id: 3,
    title:
      "DDH: Renforcement des capapcites des clubs des Defenseurs des Droits de l'Homme",
    description:
      "La Coalition des Volontaires pour la Paix et le Développement CVPD asbl la cvpd dans son programme de sécurité et protection des défenseur.e.s des droits humains forme les DDH sur comment protéger leurs données et ....",
    image: "https://cvpd-asbl.org/img/users/20220506_135115.jpg",
    tag: "•",
    background : "#059669", // A green color for Ethiopie
    date: "Le 9 septembre 2025",
    link: "#",
  },
];

export default function NewsSection() {
  return (
    <section className="py-10">
      <div className="max-w-6xl mx-auto px-4">
        {/* Heading */}
        <div className="text-center mb-12">
          <p className="mb-3 inline-flex items-center rounded-full bg-indigo-50 px-5 py-2 text-[#017dbf] font-light">
            <span className="mr-2 block h-1.5 w-1.5 rounded-full bg-[#017dbf]"></span>
            <span className="text-xs font-bold">Sur Terrain</span>
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
            Toute l&apos;actualité de nos actions
          </h2>
          <div className="w-16 h-1 text-orange-200 mx-auto mt-3"></div>
        </div>

        {/* Articles grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {articles.map((article) => (
            <div key={article.id} className="flex flex-col rounded-lg overflow-hidden bg-white">
              {/* Image */}
              <div className="relative h-48 md:h-64">
                <Image
                  src={article.image}
                  alt={article.title}
                  fill
                  className="w-full h-full object-cover"
                />
                {article.tag && (
                  <span className="absolute top-4 right-4 text-xs font-semibold h-3 w-3 items-center justify-center flex "
                        style={{ backgroundColor: article.background , color: article.background }}>
                    {article.tag}
                  </span>
                )}
              </div>

              {/* Content */}
              <div className="mt-4 flex-1">
                <h3 className="text-lg md:text-xl font-bold mb-2 text-gray-600 hover:underline hover:text-[#017dbf] transition-colors cursor-pointer">
                  {article.title}
                </h3>
                <p className="text-sm text-gray-600 mb-4 font-light">{article.description}</p>
              </div>
                <div className="h-[0.8px] w-full bg-gray-400 px-4"></div>
              {/* Footer */}
              <div className="mt-4 pb-4">
                <a
                  href={article.link}
                  className="flex space-x-2 items-center text-[#017dbf] hover:underline transition-colors text-[11px] font-semibold"
                >
                  <span>LIRE LA SUITE</span> <ArrowUpRight className="size-4"/>
                </a>
                <p className="text-xs text-gray-400 mt-2">{article.date}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}