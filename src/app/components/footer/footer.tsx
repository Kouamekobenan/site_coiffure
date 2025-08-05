"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { whatsappLink } from "@/app/whattsap/api";
import { Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white">
      {/* Section principale */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {/* Section Logo et Description */}
          <div className="lg:col-span-1 space-y-6">
            <div className="flex items-center space-x-3">
              <Image
                src="/logo.png"
                alt="Logo Monsieur K"
                width={50}
                height={50}
                className="rounded-full shadow-lg"
              />
              <div>
                <h3 className="text-2xl font-bold text-orange-400">
                  Monsieur K
                </h3>
                <p className="text-sm text-gray-300">
                  Coiffure Professionnelle
                </p>
              </div>
            </div>
            <p className="text-gray-300 leading-relaxed text-sm md:text-base">
              Votre salon de coiffure de confiance à Bondoukou. Plus de 10 ans
              d&apos;expérience pour sublimer votre style avec passion et
              expertise.
            </p>

            {/* Réseaux sociaux */}
            <div className="flex space-x-4">
              <a
                href="#"
                className="w-10 h-10 bg-orange-600 hover:bg-orange-700 rounded-full flex items-center justify-center transition-colors duration-300 group"
                aria-label="Facebook"
              >
                <svg
                  className="w-5 h-5 group-hover:scale-110 transition-transform duration-300"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-orange-600 hover:bg-orange-700 rounded-full flex items-center justify-center transition-colors duration-300 group"
                aria-label="Instagram"
              >
                <svg
                  className="w-5 h-5 group-hover:scale-110 transition-transform duration-300"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.988 11.987c6.62 0 11.987-5.367 11.987-11.987C24.014 5.367 18.637.001 12.017.001zM8.449 16.988c-1.297 0-2.448-.73-3.016-1.8L7.583 14.1c.26.48.769.8 1.366.8.849 0 1.539-.69 1.539-1.539s-.69-1.539-1.539-1.539c-.597 0-1.106.32-1.366.8L5.433 11.53c.568-1.07 1.719-1.8 3.016-1.8 1.886 0 3.415 1.529 3.415 3.415S10.335 16.56 8.449 16.56z" />
                </svg>
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-orange-600 hover:bg-orange-700 rounded-full flex items-center justify-center transition-colors duration-300 group"
                aria-label="WhatsApp"
              >
                <svg
                  className="w-5 h-5 group-hover:scale-110 transition-transform duration-300"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.864 3.687" />
                </svg>
              </a>
            </div>
          </div>

          {/* Section Liens rapides */}
          <div className="space-y-6">
            <h4 className="text-xl font-bold text-orange-400 border-b-2 border-orange-600 pb-2 inline-block">
              Liens Rapides
            </h4>
            <ul className="space-y-3">
              {[
                { name: "Accueil", href: "/home" },
                { name: "Nos Services", href: "/services" },
                { name: "Galerie", href: "/gallery" },
                { name: "À Propos", href: "/about" },
                { name: "Témoignages", href: "/testimonials" },
              ].map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-orange-400 transition-colors duration-300 flex items-center group"
                  >
                    <svg
                      className="w-4 h-4 mr-2 group-hover:translate-x-1 transition-transform duration-300"
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
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Section Contact */}
          <div className="space-y-6">
            <h4 className="text-xl font-bold text-orange-400 border-b-2 border-orange-600 pb-2 inline-block">
              Nos Contacts
            </h4>
            <div className="space-y-4">
              {/* Adresse */}
              <div className="flex items-start space-x-3 group">
                <div className="w-8 h-8 bg-orange-600 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-orange-700 transition-colors duration-300">
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                </div>
                <div>
                  <p className="text-gray-300 leading-relaxed">
                    Bondoukou, Quartier Zanzan
                    <br />
                    <span className="text-orange-300">vers Jardin Public</span>
                  </p>
                </div>
              </div>

              {/* Téléphone */}
              <div className="flex items-center space-x-3 group">
                <div className="w-8 h-8 bg-orange-600 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-orange-700 transition-colors duration-300">
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                </div>
                <a
                  href="tel:+2250123456789"
                  className="text-gray-300 hover:text-orange-400 transition-colors duration-300"
                >
                  +225 01 23 45 67 89
                </a>
              </div>

              {/* Email */}
              <div className="flex items-center space-x-3 group">
                <div className="w-8 h-8 bg-orange-600 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-orange-700 transition-colors duration-300">
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <a
                  href="mailto:contact@monsieurk.ci"
                  className="text-gray-300 hover:text-orange-400 transition-colors duration-300"
                >
                  contact@monsieurk.ci
                </a>
              </div>
            </div>
          </div>

          {/* Section Horaires */}
          <div className="space-y-6">
            <h4 className="text-xl font-bold text-orange-400 border-b-2 border-orange-600 pb-2 inline-block">
              Horaires d&apos;Ouverture
            </h4>
            <div className="space-y-3">
              {[
                { day: "Lundi - Vendredi", hours: "8h00 - 18h00" },
                { day: "Samedi", hours: "8h00 - 20h00" },
                { day: "Dimanche", hours: "9h00 - 16h00" },
              ].map((schedule) => (
                <div
                  key={schedule.day}
                  className="flex justify-between items-center py-2 border-b border-gray-700 last:border-b-0"
                >
                  <span className="text-gray-300">{schedule.day}</span>
                  <span className="text-orange-300 font-semibold">
                    {schedule.hours}
                  </span>
                </div>
              ))}
            </div>

            {/* Bouton Contact */}
            <button
              onClick={() => window.open(whatsappLink, "_blank")}
              className="w-full bg-gradient-to-r from-orange-600 to-orange-700 hover:from-orange-700 hover:to-orange-800 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              <span className="flex items-center justify-center">
                <Phone />
                Contactez-nous
              </span>
            </button>
          </div>
        </div>
      </div>
      <div className="border-t border-gray-700 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-center md:text-left">
              <p className="text-gray-400 text-sm">
                © 2025{" "}
                <span className="text-orange-400 font-semibold">
                  Nelson12.Dev
                </span>
                . Tous droits réservés.
              </p>
            </div>
            <div className="flex flex-wrap justify-center md:justify-end space-x-6 text-sm">
              <Link
                href="/privacy"
                className="text-gray-400 hover:text-orange-400 transition-colors duration-300"
              >
                Politique de confidentialité
              </Link>
              <Link
                href="/terms"
                className="text-gray-400 hover:text-orange-400 transition-colors duration-300"
              >
                Conditions d&apos;utilisation
              </Link>
              <Link
                href="/sitemap"
                className="text-gray-400 hover:text-orange-400 transition-colors duration-300"
              >
                Plan du site
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
