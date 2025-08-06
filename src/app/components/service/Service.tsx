"use client";
import React from "react";
import { Coifures } from "@/app/data/db";
import { whatsappLink } from "@/app/whattsap/api";
import Image from "next/image";
import { AlarmClock } from "lucide-react";
export const Service = () => {
  const phone = "2250769241128";
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
                className="group bg-white rounded-2xl shadow-lg hover:shadow-md transition-all duration-500 overflow-hidden transform hover:-translate-y-0.5"
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
                    <div className="flex gap-1 flex-col">
                      <span className="text-xl md:text-xl font-bold text-orange-600">
                        {item.price} FCFA
                      </span>
                      <span className="text-xs text-gray-500">À partir de</span>
                    </div>
                    <div className="text-right">
                      <div className="text-sm text-gray-600 flex items-center">
                        <AlarmClock size={15} />
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
              </div>
            );
          })}
        </div>
        <div className="mt-12 md:mt-16">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            {/* Colonne gauche : texte + bouton */}
            <div className="text-center md:text-left space-y-6">
              <h3 className="text-2xl font-bold text-gray-800">
                Vous ne trouvez pas le service qui vous convient ?
              </h3>
              <p className="text-lg text-gray-600">
                Contactez-nous pour un devis personnalisé ou toute demande
                spéciale via WhatsApp.
              </p>
              <button
                onClick={() => window.open(whatsappLink, "_blank")}
                className="bg-white border-2 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 shadow-md hover:shadow-lg"
              >
                Écrire sur WhatsApp
              </button>
            </div>
            {/* Colonne droite : carte Google Maps */}
            <div className="w-full h-full rounded-xl overflow-hidden shadow-lg border border-gray-200">
              <iframe
                title="Localisation du salon"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1975.270249401624!2d-2.8098129030522956!3d8.046216167923676!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfcf950b8ad0cc27%3A0x70a864ded1156988!2sSalon%20de%20coiffure%20pour%20hommes!5e0!3m2!1sfr!2sci!4v1754440545589!5m2!1sfr!2sci"
                width="100%"
                height="350"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
