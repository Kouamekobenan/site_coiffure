"use client";
import React from "react";
import { Coifures } from "@/app/data/db";
import { whatsappLink } from "@/app/whattsap/api";
import Image from "next/image";
import { AlarmClock } from "lucide-react";

export const Service = () => {
  const phone = "2250747235898"; // Ton numéro WhatsApp (sans +)

  return (
    <section className="py-12 md:py-16 lg:py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* En-tête de section */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-4">
            Nos <span className="text-orange-600">Services</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Découvrez notre gamme complète de services de coiffure
            professionnels, adaptés à tous vos besoins et styles.
          </p>
          <div className="w-24 h-1 bg-orange-600 mx-auto mt-6 rounded-full"></div>
        </div>

        {/* Grille de cartes */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
          {Coifures.map((item, index) => {
            const message = `Bonjour, je souhaite prendre rendez-vous pour la coiffure ${item.name}`;
            const whatsappLink = `https://wa.me/${phone}?text=${encodeURIComponent(
              message
            )}`;

            return (
              <div
                key={item.id}
                className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden transform hover:-translate-y-2 hover:rotate-1"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Container image */}
                <div className="relative overflow-hidden rounded-t-2xl">
                  <div className="relative h-48 md:h-52 lg:h-48">
                    <Image
                      src={item.image}
                      fill
                      alt={`Service ${item.name}`}
                      className="object-cover object-center group-hover:scale-110 transition-transform duration-700"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                    {index % 3 === 0 && (
                      <div className="absolute top-3 right-3 bg-orange-600 text-white px-2 py-1 rounded-full text-xs font-semibold shadow-lg">
                        Populaire
                      </div>
                    )}
                  </div>

                  <div className="absolute -bottom-6 left-6 w-12 h-12 bg-orange-600 rounded-full flex items-center justify-center shadow-lg group-hover:bg-orange-700 transition-colors duration-300">
                    <svg
                      className="w-6 h-6 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z"
                      />
                    </svg>
                  </div>
                </div>

                {/* Contenu de la carte */}
                <div className="p-6 pt-8">
                  <div className="mb-4">
                    <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-2 group-hover:text-orange-600 transition-colors duration-300">
                      {item.name}
                    </h3>
                    <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                      Service professionnel de qualité supérieure
                    </p>
                  </div>

                  <div className="flex items-center justify-between mb-6">
                    <div className="flex flex-col">
                      <span className="text-2xl md:text-3xl font-bold text-orange-600">
                        {item.price} FCFA
                      </span>
                      <span className="text-xs text-gray-500">À partir de</span>
                    </div>
                    <div className="text-right">
                      <div className="text-sm text-gray-600 flex items-center">
                        <AlarmClock />
                        ~45 min
                      </div>
                    </div>
                  </div>

                  {/* Bouton WhatsApp */}
                  <a
                    href={whatsappLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-4 rounded-lg transition-all duration-300 transform group-hover:scale-105 shadow-md hover:shadow-lg block text-center"
                  >
                    Prendre RDV via WhatsApp
                  </a>
                </div>

                {/* Étoiles */}
                <div className="px-6 pb-4">
                  <div className="flex items-center justify-center space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        className={`w-4 h-4 ${
                          i < 4 ? "text-yellow-400" : "text-gray-300"
                        }`}
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                    <span className="text-sm text-gray-600 ml-2">4.8/5</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <div className="text-center mt-12 md:mt-16">
          <p className="text-lg text-gray-600 mb-6">
            Vous ne trouvez pas le service qui vous convient ?
          </p>
          <button
            onClick={() => window.open(whatsappLink, "_blank")}
            className="bg-white border-2 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 shadow-md hover:shadow-lg"
          >
            Contactez-nous pour un devis personnalisé
          </button>
        </div>
      </div>
    </section>
  );
};
