"use client";
import React from "react";
import { MapPin, Users, Clock, Star, Phone, Mail, House } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { whatsappLink } from "@/app/whattsap/api";
export default function AboutMe() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-r from-orange-600 to-orange-700 text-white">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-6xl mx-auto px-4 py-16 sm:py-20">
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 bg-white/20 rounded-full mb-6">
              <Link
                href="/home"
                className="relative inline-block w-[40px] h-[40px] sm:w-[50px] sm:h-[50px]"
              >
                <Image
                  src="/logo.png"
                  alt="Logo Monsieur K"
                  width={50}
                  height={50}
                  className="rounded-full object-cover w-full h-full"
                  priority
                />
                <span className="absolute inset-0 flex items-center justify-center text-white text-xs font-bold bg-black/50 rounded-full">
                  Accueil
                </span>
              </Link>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-4 sm:mb-6 px-2">
              À Propos de Nous
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto leading-relaxed px-2">
              Votre destination de confiance pour des coiffures masculines
              d&apos;exception
            </p>
          </div>
        </div>
      </div>
      <div className="max-w-6xl mx-auto px-4 py-12 sm:py-16">
        {/* Qui sommes-nous Section */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center mb-16 sm:mb-20">
          <div className="space-y-6">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-blue-100 rounded-full flex items-center justify-center">
                <Users className="w-5 h-5 sm:w-6 sm:h-6 text-orange-600" />
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
                Qui sommes-nous ?
              </h2>
            </div>
            <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
              Nous sommes une équipe passionnée de professionnels de la coiffure
              masculine, dédiée à vous offrir une expérience de coiffure
              exceptionnelle. Notre mission est de sublimer votre style avec des
              coupes modernes et personnalisées.
            </p>
            <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
              Que vous recherchiez une coupe classique, tendance ou totalement
              unique, nous maîtrisons tous les styles de coiffures pour hommes.
              Notre expertise et notre créativité sont à votre service pour
              révéler le meilleur de votre personnalité.
            </p>
            {/* Services highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mt-8">
              <div className="flex items-center gap-3 p-3 sm:p-4 bg-white rounded-lg shadow-md">
                <Star className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-500 flex-shrink-0" />
                <span className="font-semibold text-gray-800 text-sm sm:text-base">
                  Coupes modernes
                </span>
              </div>
              <div className="flex items-center gap-3 p-3 sm:p-4 bg-white rounded-lg shadow-md">
                <Star className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-500 flex-shrink-0" />
                <span className="font-semibold text-gray-800 text-sm sm:text-base">
                  Styles personnalisés
                </span>
              </div>
              <div className="flex items-center gap-3 p-3 sm:p-4 bg-white rounded-lg shadow-md">
                <Star className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-500 flex-shrink-0" />
                <span className="font-semibold text-gray-800 text-sm sm:text-base">
                  Conseils experts
                </span>
              </div>
              <div className="flex items-center gap-3 p-3 sm:p-4 bg-white rounded-lg shadow-md">
                <Star className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-500 flex-shrink-0" />
                <span className="font-semibold text-gray-800 text-sm sm:text-base">
                  Ambiance conviviale
                </span>
              </div>
            </div>
          </div>
          <div className="relative mt-8 lg:mt-0">
            <div className="bg-gradient-to-br from-orange-600 to-orange-700 rounded-2xl p-6 sm:p-8 text-white">
              <h3 className="text-xl sm:text-2xl font-bold mb-6">
                Notre Engagement
              </h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-sm font-bold">✓</span>
                  </div>
                  <p className="text-blue-100 text-sm sm:text-base">
                    Satisfaction client garantie à 100%
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-sm font-bold">✓</span>
                  </div>
                  <p className="text-blue-100 text-sm sm:text-base">
                    Produits de qualité professionnelle
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-sm font-bold">✓</span>
                  </div>
                  <p className="text-blue-100 text-sm sm:text-base">
                    Hygiène et propreté irréprochables
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-sm font-bold">✓</span>
                  </div>
                  <p className="text-blue-100 text-sm sm:text-base">
                    Conseils personnalisés selon votre morphologie
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Localisation Section */}
        <div className="bg-white rounded-2xl shadow-xl p-6 sm:p-8 md:p-12">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
            <div className="order-2 lg:order-1">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-red-100 rounded-full flex items-center justify-center">
                  <MapPin className="w-5 h-5 sm:w-6 sm:h-6 text-red-600" />
                </div>
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
                  Notre Localisation
                </h2>
              </div>
              <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-6">
                Vous nous trouverez facilement à Bondoukou, dans le quartier du
                Jardin, près de la célèbre maison ronde. Un emplacement central
                et accessible pour votre commodité.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-3 p-4 bg-gray-50 rounded-lg">
                  <MapPin className="w-5 h-5 text-red-600 flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold text-gray-900 text-sm sm:text-base">
                      Adresse complète
                    </p>
                    <p className="text-gray-800 leading-relaxed text-sm sm:text-base">
                      Bondoukou, Quartier Zanzan
                      <br />
                      <span className="text-orange-600">
                        Derrière la maison ronde avant EPP Alliagui
                      </span>
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-4 bg-gray-50 rounded-lg">
                  <Clock className="w-5 h-5 text-orange-600 flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold text-gray-900 text-sm sm:text-base">
                      Horaires d&apos;ouverture
                    </p>
                    <p className="text-gray-600 text-sm sm:text-base">
                      Lundi - Jeudi: 9h00 - 21h00
                      <br />
                      Vendredi: 14h00 -22h00
                      <br />
                      Samedi-Dimanche: 8h00 - 22h00
                    </p>
                  </div>
                </div>
              </div>

              {/* Contact Info - Moved here for better mobile layout */}
              <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl p-4 sm:p-6 text-white mt-6">
                <h3 className="text-lg sm:text-xl font-bold mb-4">
                  Contactez-nous
                </h3>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <Phone className="w-4 h-4 sm:w-5 sm:h-5 text-green-400 flex-shrink-0" />
                    <span className="text-sm sm:text-base break-all">
                      {" "}
                      +225 07 69 24 11 28
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Mail className="w-4 h-4 sm:w-5 sm:h-5 text-blue-400 flex-shrink-0" />
                    <span className="text-sm sm:text-base break-all">
                      {" "}
                      tustylamarck@gmail.com
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Map Section - Better responsive handling */}
            <div className="order-1 lg:order-2">
              <div className="rounded-xl overflow-hidden shadow-lg w-full">
                <div className="relative w-full h-64 sm:h-80 lg:h-96">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1975.270249401624!2d-2.8098129030522956!3d8.046216167923676!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfcf950b8ad0cc27%3A0x70a864ded1156988!2sSalon%20de%20coiffure%20pour%20hommes!5e0!3m2!1sfr!2sci!4v1754440545589!5m2!1sfr!2sci"
                    className="absolute inset-0 w-full h-full"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12 sm:mt-16">
          <div className="bg-gradient-to-r from-orange-600 to-orange-700 rounded-2xl p-6 sm:p-8 text-white">
            <h3 className="text-xl sm:text-2xl font-bold mb-4">
              Prêt pour une nouvelle coupe ?
            </h3>
            <p className="text-blue-100 mb-6 text-sm sm:text-base">
              Venez découvrir notre savoir-faire et repartez avec le style qui
              vous ressemble
            </p>
            <button
              onClick={() => window.open(whatsappLink, "_blank")}
              className="bg-white text-gray-600 px-6 sm:px-8 py-3 cursor-pointer rounded-full font-semibold hover:bg-gray-100 transition-colors duration-300 text-sm sm:text-base"
            >
              Prendre rendez-vous
            </button>
          </div>
        </div>
      </div>

      {/* Floating Home Button */}
      <Link
        href="/home"
        className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 bg-orange-600 hover:bg-orange-700 text-white p-3 sm:p-4 rounded-full shadow-lg transition duration-300 ease-in-out"
        aria-label="Retour à l'accueil"
      >
        <House className="w-5 h-5 sm:w-6 sm:h-6" />
      </Link>
    </div>
  );
}
