import React from "react";
import {
  MapPin,
  Users,
  Clock,
  Star,
  Phone,
  Mail,
  House,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function AboutMe() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-r from-orange-600 to-orange-700 text-white">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-6xl mx-auto px-4 py-20">
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-white/20 rounded-full mb-6">
              <Link
                href="/home"
                className="relative inline-block w-[50px] h-[50px]"
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
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              À Propos de Nous
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
              Votre destination de confiance pour des coiffures masculines
              d&apos;exception
            </p>
          </div>
        </div>
      </div>
      <div className="max-w-6xl mx-auto px-4 py-16">
        {/* Qui sommes-nous Section */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          <div className="space-y-6">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                <Users className="w-6 h-6 text-orange-600" />
              </div>
              <h2 className="text-3xl font-bold text-gray-900">
                Qui sommes-nous ?
              </h2>
            </div>
            <p className="text-lg text-gray-700 leading-relaxed">
              Nous sommes une équipe passionnée de professionnels de la coiffure
              masculine, dédiée à vous offrir une expérience de coiffure
              exceptionnelle. Notre mission est de sublimer votre style avec des
              coupes modernes et personnalisées.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Que vous recherchiez une coupe classique, tendance ou totalement
              unique, nous maîtrisons tous les styles de coiffures pour hommes.
              Notre expertise et notre créativité sont à votre service pour
              révéler le meilleur de votre personnalité.
            </p>
            {/* Services highlights */}
            <div className="grid sm:grid-cols-2 gap-4 mt-8">
              <div className="flex items-center gap-3 p-4 bg-white rounded-lg shadow-md">
                <Star className="w-5 h-5 text-yellow-500" />
                <span className="font-semibold text-gray-800">
                  Coupes modernes
                </span>
              </div>
              <div className="flex items-center gap-3 p-4 bg-white rounded-lg shadow-md">
                <Star className="w-5 h-5 text-yellow-500" />
                <span className="font-semibold text-gray-800">
                  Styles personnalisés
                </span>
              </div>
              <div className="flex items-center gap-3 p-4 bg-white rounded-lg shadow-md">
                <Star className="w-5 h-5 text-yellow-500" />
                <span className="font-semibold text-gray-800">
                  Conseils experts
                </span>
              </div>
              <div className="flex items-center gap-3 p-4 bg-white rounded-lg shadow-md">
                <Star className="w-5 h-5 text-yellow-500" />
                <span className="font-semibold text-gray-800">
                  Ambiance conviviale
                </span>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="bg-gradient-to-br from-orange-600 to-orange-700 rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-6">Notre Engagement</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-sm font-bold">✓</span>
                  </div>
                  <p className="text-blue-100">
                    Satisfaction client garantie à 100%
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-sm font-bold">✓</span>
                  </div>
                  <p className="text-blue-100">
                    Produits de qualité professionnelle
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-sm font-bold">✓</span>
                  </div>
                  <p className="text-blue-100">
                    Hygiène et propreté irréprochables
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-sm font-bold">✓</span>
                  </div>
                  <p className="text-blue-100">
                    Conseils personnalisés selon votre morphologie
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Localisation Section */}
        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-red-600" />
                </div>
                <h2 className="text-3xl font-bold text-gray-900">
                  Notre Localisation
                </h2>
              </div>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Vous nous trouverez facilement à Bondoukou, dans le quartier du
                Jardin, près de la célèbre maison ronde. Un emplacement central
                et accessible pour votre commodité.
              </p>

              <div className="space-y-4">
                <div className="flex items-start gap-3 p-4 bg-gray-50 rounded-lg">
                  <MapPin className="w-5 h-5 text-red-600 flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold text-gray-900">
                      Adresse complète
                    </p>
                    <p className="text-gray-600">
                      Quartier Jardin, près de la Maison Ronde
                      <br />
                      Bondoukou, Côte d&apos;Ivoire
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-4 bg-gray-50 rounded-lg">
                  <Clock className="w-5 h-5 text-orange-600 flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold text-gray-900">
                      Horaires d&apos;ouverture
                    </p>
                    <p className="text-gray-600">
                      Lundi - Samedi: 8h00 - 19h00
                      <br />
                      Dimanche: 10h00 - 17h00
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              {/* Contact Info */}
              <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl p-6 text-white">
                <h3 className="text-xl font-bold mb-4">Contactez-nous</h3>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <Phone className="w-5 h-5 text-green-400" />
                    <span>+2250506832678</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Mail className="w-5 h-5 text-blue-400" />
                    <span>contact@coiffure-bondoukou.ci</span>
                  </div>
                </div>
              </div>

              {/* Map placeholder */}
              <div className="bg-gray-200 rounded-xl h-64 flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="w-12 h-12 text-gray-400 mx-auto mb-2" />
                  <p className="text-gray-600 font-medium">Carte Interactive</p>
                  <p className="text-sm text-gray-500">
                    Cliquez pour voir notre localisation
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-orange-600 to-orange-700 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">
              Prêt pour une nouvelle coupe ?
            </h3>
            <p className="text-blue-100 mb-6">
              Venez découvrir notre savoir-faire et repartez avec le style qui
              vous ressemble
            </p>
            <button className="bg-white text-gray-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors duration-300">
              Prendre rendez-vous
            </button>
          </div>
        </div>
      </div>
      <Link
        href="/home"
        className="fixed bottom-6 right-6 z-50 bg-orange-600 hover:bg-orange-700 text-white p-4 rounded-full shadow-lg transition duration-300 ease-in-out"
        aria-label="Retour à l'accueil"
      >
        <House />
      </Link>
    </div>
  );
}
