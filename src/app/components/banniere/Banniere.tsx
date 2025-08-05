"use client";
import { whatsappLink } from "@/app/whattsap/api";
import Image from "next/image";
import React, { useState, useEffect } from "react";

export const Banniere = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      image: "/coifures/coif1.jpg",
      title: "Coiffure Professionnelle",
      subtitle: "Chez de vrais coiffeurs expérimentés",
    },
    {
      image: "/coifures/coif2.jpg",
      title: "Style & Élégance",
      subtitle: "Des coupes tendances et personnalisées",
    },
    {
      image: "/coifures/coif3.jpg",
      title: "Expertise & Savoir-faire",
      subtitle: "Plus de 10 ans d'expérience à votre service",
    },
  ];

  // Défilement automatique
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 4000); // Change d'image toutes les 4 secondes

    return () => clearInterval(timer);
  }, [slides.length]);

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="relative w-full h-[400px] md:h-[500px] lg:h-[600px] overflow-hidden bg-gradient-to-r from-orange-100 to-orange-50 shadow-lg">
      {/* Conteneur des images */}
      <div className="relative w-full h-full">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-all duration-700 ease-in-out ${
              index === currentSlide
                ? "opacity-100 transform translate-x-0"
                : index < currentSlide
                ? "opacity-0 transform -translate-x-full"
                : "opacity-0 transform translate-x-full"
            }`}
          >
            {/* Image de fond */}
            <div className="relative w-full h-full">
              <Image
                src={slide.image}
                fill
                alt={slide.title}
                className="object-cover object-center"
                priority={index === 0}
              />
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-transparent"></div>
            </div>

            {/* Contenu textuel */}
            <div className="absolute inset-0 flex items-center justify-start">
              <div className="text-white px-6 md:px-12 lg:px-20 max-w-2xl">
                <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight">
                  <span className="text-orange-300">Monsieur K</span>
                </h1>
                <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold mb-4 text-orange-100">
                  {slide.title}
                </h2>
                <p className="text-base md:text-lg lg:text-xl mb-8 text-gray-200 leading-relaxed">
                  {slide.subtitle}
                </p>
                <button 
                 onClick={() => window.open(whatsappLink, "_blank")}
                className="bg-orange-600 hover:bg-orange-700 text-white px-6 md:px-8 py-3 md:py-4 rounded-lg text-base md:text-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                  Prendre Rendez-vous
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Boutons de navigation */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-2 md:p-3 rounded-full transition-all duration-300 backdrop-blur-sm"
        aria-label="Image précédente"
      >
        <svg
          className="w-5 h-5 md:w-6 md:h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 19l-7-7 7-7"
          />
        </svg>
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-2 md:p-3 rounded-full transition-all duration-300 backdrop-blur-sm"
        aria-label="Image suivante"
      >
        <svg
          className="w-5 h-5 md:w-6 md:h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 5l7 7-7 7"
          />
        </svg>
      </button>

      {/* Indicateurs de position */}
      <div className="absolute bottom-4 md:bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 md:w-4 md:h-4 rounded-full transition-all duration-300 ${
              index === currentSlide
                ? "bg-orange-500 scale-110"
                : "bg-white/50 hover:bg-white/70"
            }`}
            aria-label={`Aller à l'image ${index + 1}`}
          />
        ))}
      </div>

      {/* Badge "Nouveau" optionnel */}
      <div className="absolute top-4 right-4 bg-orange-600 text-white px-3 py-1 rounded-full text-sm font-semibold shadow-lg">
        Nouveau !
      </div>
    </div>
  );
};
