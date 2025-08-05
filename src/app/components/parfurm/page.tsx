"use client";
import Image from "next/image";
import React, { useState } from "react";
import { Star, MessageCircle, Sparkles, Crown, Gift } from "lucide-react";
import { Parfurms } from "@/app/data/db";
export default function ParfumSale() {
  const [selectedCategory, setSelectedCategory] = useState<string>("Tous");
  const categories = ["Tous", "Femme", "Homme", "Unisexe"];
  const filteredParfums =
    selectedCategory === "Tous"
      ? Parfurms
      : Parfurms.filter((item) => item.category === selectedCategory);
const phone = "2250769241128";

  const handleWhatsAppReservation = (parfum: {
    name: string;
    price: number;
  }) => {
    const message = encodeURIComponent(
      `Bonjour ! Je souhaite réserver le parfum "${parfum.name}" au prix de ${parfum.price} FCFA. Merci !`
    );

    //  URL correctement formatée
    const url = `https://wa.me/${phone}?text=${message}`;

    window.open(url, "_blank");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-purple-50 to-indigo-50">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-900/80 to-pink-900/80"></div>
        <Image
          src="/parfurms/images.jpg"
          width={1200}
          height={400}
          alt="Collection de parfums de luxe"
          className="w-full h-80 md:h-96 object-cover"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white px-4">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 rounded-full mb-6">
              <Sparkles className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-3xl md:text-5xl font-bold mb-4">
              Collection Parfums Premium
            </h1>
            <p className="text-lg md:text-xl text-purple-100 max-w-2xl mx-auto">
              Découvrez votre fragrance signature parmi notre sélection
              exclusive de parfums de luxe. Chaque essence raconte une histoire
              unique.
            </p>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="text-center p-6 bg-white rounded-2xl shadow-lg">
            <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Crown className="w-8 h-8 text-purple-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              Qualité Premium
            </h3>
            <p className="text-gray-600">
              Parfums authentiques des plus grandes marques internationales
            </p>
          </div>
          <div className="text-center p-6 bg-white rounded-2xl shadow-lg">
            <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <MessageCircle className="w-8 h-8 text-pink-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              Réservation Facile
            </h3>
            <p className="text-gray-600">
              Commandez directement via WhatsApp en un seul clic
            </p>
          </div>
          <div className="text-center p-6 bg-white rounded-2xl shadow-lg">
            <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Gift className="w-8 h-8 text-indigo-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              Livraison Rapide
            </h3>
            <p className="text-gray-600">
              Livraison gratuite dans la ville de Bondoukou en 24h
            </p>
          </div>
        </div>
        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                selectedCategory === category
                  ? "bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg"
                  : "bg-white text-gray-700 hover:bg-gray-100 shadow-md"
              }`}
            >
              {category}
            </button>
          ))}
        </div>
        {/* Products Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {filteredParfums.map((item, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
            >
              {/* Product Image */}
              <div className="relative overflow-hidden">
                <Image
                  src={item.image}
                  width={300}
                  height={300}
                  alt={`Parfum ${item.name}`}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    {item.category}
                  </span>
                </div>
              </div>
              {/* Product Info */}
              <div className="p-6">
                <div className="flex items-center gap-2 mb-2">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-4 h-4 ${
                          i < Math.floor(item.rating)
                            ? "text-yellow-400 fill-current"
                            : "text-gray-300"
                        }`}
                      />
                    ))}
                  </div>
                  <span className="text-sm text-gray-600">({item.rating})</span>
                </div>
                <h3 className="text-md font-bold text-gray-900 mb-2 group-hover:text-purple-600 transition-colors">
                  {item.name}
                </h3>
                <div className="flex items-center justify-between mb-4">
                  <div className="text-xl font-bold text-purple-600">
                    {item.price} Fcfa
                  </div>
                </div>
                {/* Action Buttons */}
                <div className="space-y-3">
                  <button
                    onClick={() => handleWhatsAppReservation(item)}
                    className="w-full bg-gradient-to-r from-green-500 to-green-600 text-white py-3 px-4 rounded-xl font-semibold hover:from-green-600 hover:to-green-700 transition-all duration-300 flex items-center justify-center gap-2"
                  >
                    <MessageCircle className="w-5 h-5" />
                    Réserver sur WhatsApp
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        {/* Call to Action */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Vous ne trouvez pas votre parfum favori ?
            </h3>
            <p className="text-purple-100 mb-6 text-lg">
              Contactez-nous directement ! Nous pouvons vous aider à trouver la
              fragrance parfaite selon vos préférences.
            </p>
            <button
              onClick={() =>
                window.open(
                  `https://wa.me/${phone}?text=Bonjour ! Je recherche un parfum spécifique...`,
                  "_blank"
                )
              }
              className="bg-white text-purple-600 px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition-colors duration-300 inline-flex items-center gap-3"
            >
              <MessageCircle className="w-6 h-6" />
              Demande personnalisée
            </button>
          </div>
        </div>
        {/* Trust Indicators */}
        <div className="mt-12 grid md:grid-cols-4 gap-6 text-center">
          <div className="p-4">
            <div className="text-3xl font-bold text-purple-600 mb-2">500+</div>
            <div className="text-gray-600">Clients satisfaits</div>
          </div>
          <div className="p-4">
            <div className="text-3xl font-bold text-pink-600 mb-2">50+</div>
            <div className="text-gray-600">Parfums disponibles</div>
          </div>
          <div className="p-4">
            <div className="text-3xl font-bold text-indigo-600 mb-2">24h</div>
            <div className="text-gray-600">Livraison rapide</div>
          </div>
          <div className="p-4">
            <div className="text-3xl font-bold text-green-600 mb-2">100%</div>
            <div className="text-gray-600">Produits authentiques</div>
          </div>
        </div>
      </div>
    </div>
  );
};
