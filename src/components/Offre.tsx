"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, Heart, Users } from "lucide-react";

const carouselImages = [
  { id: 1, image: "https://images.pexels.com/photos/9841328/pexels-photo-9841328.jpeg", alt: "Panneaux solaires en action" },
  { id: 2, image: "https://images.pexels.com/photos/9841328/pexels-photo-9841328.jpeg", alt: "Vue aérienne de paysage sec" },
  { id: 3, image: "https://images.pexels.com/photos/9841328/pexels-photo-9841328.jpeg", alt: "Bétail avec des bergers" },
  { id: 4, image: "https://images.pexels.com/photos/9841328/pexels-photo-9841328.jpeg", alt: "Hélicoptère d'aide humanitaire" },
  { id: 5, image: "https://images.pexels.com/photos/9841328/pexels-photo-9841328.jpeg", alt: "Mère et enfant souriants" },
  { id: 6, image: "https://images.pexels.com/photos/9841328/pexels-photo-9841328.jpeg", alt: "Infirmières et patients" },
  { id: 7, image: "https://images.pexels.com/photos/9841328/pexels-photo-9841328.jpeg", alt: "Panneaux solaires en action" },
  { id: 8, image: "https://images.pexels.com/photos/9841328/pexels-photo-9841328.jpeg", alt: "Vue aérienne de paysage sec" },
  { id: 9, image: "https://images.pexels.com/photos/9841328/pexels-photo-9841328.jpeg", alt: "Bétail avec des bergers" },
  { id: 10, image: "https://images.pexels.com/photos/9841328/pexels-photo-9841328.jpeg", alt: "Hélicoptère d'aide humanitaire" },
  { id: 11, image: "https://images.pexels.com/photos/9841328/pexels-photo-9841328.jpeg", alt: "Mère et enfant souriants" },
  { id: 12, image: "https://images.pexels.com/photos/9841328/pexels-photo-9841328.jpeg", alt: "Infirmières et patients" },
];

export default function SoutenezNosActionsSection() {
  const [current, setCurrent] = useState(0);

  // Nombre d'images visibles selon la taille d'écran
  const itemsPerView = 10; // tu peux ajuster (3 desktop, 2 tablet, 1 mobile)

  const nextSlide = () => {
    setCurrent((prev) =>
      prev >= carouselImages.length - itemsPerView ? 0 : prev + 1
    );
  };

   const prevSlide = () => {
    setCurrent((prev) =>
      prev === 0 ? carouselImages.length - itemsPerView : prev - 1
    );
  };

  return (
    <section>
        <section className="relative py-24 md:py-32 overflow-hidden">
      {/* Background + Overlay */}
      <div className="absolute inset-0 h-auto">
        <Image
          src="https://images.pexels.com/photos/9841328/pexels-photo-9841328.jpeg"
          alt="Main tendue en gros plan"
          fill
          className="object-cover object-top"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/70 to-black/80"></div>
      </div>

      {/* Contenu principal */}
      <div className="relative max-w-6xl mx-auto px-4 text-white">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <p className="mb-4 inline-flex items-center rounded-full bg-yellow-200/20 px-5 py-2 text-[#017dbf] font-light">
                <span className="mr-2 block h-1.5 w-1.5 rounded-full bg-yellow-200"></span>
                <span className="text-xs font-bold text-yellow-200">Nos Offres</span>
            </p>
            <h2 className="text-4xl md:text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-gray-100 to-gray-100">
              Explorez <span className="text-orange-200">nos offres</span> d&apos;emplois et stages.
            </h2>
          </div>

          {/* Boutons */}
          <div className="flex mt-8 flex-col sm:flex-row gap-4">
            <button className="bg-yellow-200 cursor-pointer text-xs text-gray-900 font-semibold py-3 px-6 rounded-full hover:bg-yellow-200/80 transition-colors flex gap-2 items-center justify-center">
              <span>Explorez Nos Emplois</span>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-up-right size-4" aria-hidden="true"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
            </button>
            <button className="bg-transparent cursor-pointer border-1 border-white text-xs text-white font-semibold py-3 px-6 rounded-full hover:bg-gray-200 hover:text-gray-900 transition-colors flex gap-2 items-center justify-center">
              <span>Explorez Nos Stages</span>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-up-right size-4" aria-hidden="true"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
            </button>
          </div>
        </div>
      </div>
      {/* Carrousel avec boutons */}
    </section>
    <div className="relative mt-8 mb-8">
        <div className="overflow-hidden relative">
          {/* Bande des images */}
          <div
            className="flex transition-transform duration-700 ease-in-out"
            style={{
              transform: `translateX(-${(current * 100) / itemsPerView}%)`,
              width: `${(carouselImages.length * 100) / itemsPerView}%`,
            }}
          >
            {carouselImages.map((item) => (
              <div
                key={item.id}
                className="w-1/3 sm:w-1/2 md:w-1/3 lg:w-1/5 flex-shrink-0"
              >
                <div className="relative h-48 md:h-64 overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.alt}
                    fill
                    className="object-cover transition-transform duration-500 hover:scale-110"
                  />
                </div>
              </div>
            ))}
          </div>

          {/* Boutons gauche/droite */}
          <button
            onClick={prevSlide}
            className="absolute cursor-pointer left-2 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/40 text-white p-2 rounded-full transition"
            disabled={current === 0}
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute cursor-pointer right-2 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/40 text-white p-2 rounded-full transition"
            disabled={current >= carouselImages.length - itemsPerView}
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
      </div>
    </section>
  );
}
