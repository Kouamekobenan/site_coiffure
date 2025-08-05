"use client";
import React, { useState, useEffect } from "react";
import { Galeries } from "@/app/data/db";
import Image from "next/image";
import Link from "next/link";
import { House, ZoomIn } from "lucide-react";

export default function GalleryPage() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [filter, setFilter] = useState("all");
  const [loadedImages, setLoadedImages] = useState(new Set());
  // Catégories pour le filtrage
  const categories = [
    { id: "all", name: "Toutes", icon: "grid" },
    { id: "coupe", name: "Coupes", icon: "scissors" },
    { id: "coloration", name: "Colorations", icon: "palette" },
    { id: "style", name: "Styles", icon: "star" },
  ];

  // Simuler des catégories pour les images (vous pouvez adapter selon vos données)
  const getImageCategory = (index) => {
    const cats = ["coupe", "coloration", "style"];
    return cats[index % cats.length];
  };

  const filteredImages =
    filter === "all"
      ? Galeries
      : Galeries.filter((_, index) => getImageCategory(index) === filter);

  const openModal = (image, index) => {
    setSelectedImage({ ...image, index });
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    setSelectedImage(null);
    document.body.style.overflow = "unset";
  };

  const navigateImage = (direction) => {
    if (!selectedImage) return;

    const currentIndex = selectedImage.index;
    let newIndex;

    if (direction === "next") {
      newIndex = (currentIndex + 1) % filteredImages.length;
    } else {
      newIndex =
        (currentIndex - 1 + filteredImages.length) % filteredImages.length;
    }

    setSelectedImage({ ...filteredImages[newIndex], index: newIndex });
  };
  // Fermer modal avec Escape
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") closeModal();
      if (e.key === "ArrowRight") navigateImage("next");
      if (e.key === "ArrowLeft") navigateImage("prev");
    };

    if (selectedImage) {
      document.addEventListener("keydown", handleKeyDown);
    }

    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [selectedImage]);

  const handleImageLoad = (imageId) => {
    setLoadedImages((prev) => new Set([...prev, imageId]));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-orange-50">
      {/* En-tête */}
      <div className="bg-white shadow-lg border-b-2 border-orange-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 mb-4">
              Notre <span className="text-orange-600">Galerie</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Découvrez nos plus belles réalisations et laissez-vous inspirer
              par notre savoir-faire. Chaque coupe raconte une histoire, chaque
              style révèle une personnalité.
            </p>
            <div className="w-32 h-1 bg-gradient-to-r from-orange-500 to-orange-700 mx-auto mt-6 rounded-full"></div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Filtres */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setFilter(category.id)}
              className={`flex items-center space-x-2 px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                filter === category.id
                  ? "bg-orange-600 text-white shadow-lg transform scale-105"
                  : "bg-white text-gray-700 hover:bg-orange-50 hover:text-orange-600 shadow-md hover:shadow-lg"
              }`}
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {category.icon === "grid" && (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"
                  />
                )}
                {category.icon === "scissors" && (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z"
                  />
                )}
                {category.icon === "palette" && (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM21 5a2 2 0 00-2-2h-4a2 2 0 00-2 2v12a4 4 0 004 4h4a2 2 0 002-2V5z"
                  />
                )}
                {category.icon === "star" && (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
                  />
                )}
              </svg>
              <span>{category.name}</span>
            </button>
          ))}
        </div>

        {/* Compteur d'images */}
        <div className="text-center mb-8">
          <p className="text-gray-600">
            <span className="font-semibold text-orange-600">
              {filteredImages.length}
            </span>
            {filteredImages.length > 1 ? " réalisations" : " réalisation"}
            {filter !== "all" && (
              <span>
                {" "}
                dans la catégorie{" "}
                <span className="font-semibold text-orange-600">
                  {categories.find((c) => c.id === filter)?.name}
                </span>
              </span>
            )}
          </p>
        </div>

        {/* Grille d'images */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8">
          {filteredImages.map((item, index) => (
            <div
              key={`${item.id}-${filter}`}
              className="group relative bg-white rounded-2xl shadow-lg overflow-hidden transform transition-all duration-500 hover:scale-105 hover:shadow-2xl cursor-pointer"
              onClick={() => openModal(item, index)}
              style={{
                animationDelay: `${index * 100}ms`,
              }}
            >
              {/* Container image */}
              <div className="relative aspect-square overflow-hidden">
                {/* Skeleton loader */}
                {!loadedImages.has(item.id) && (
                  <div className="absolute inset-0 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 animate-pulse"></div>
                )}

                <Image
                  src={item.image}
                  fill
                  alt={`Galerie ${item.id}`}
                  className={`object-cover transition-all duration-700 group-hover:scale-110 ${
                    loadedImages.has(item.id) ? "opacity-100" : "opacity-0"
                  }`}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                  onLoad={() => handleImageLoad(item.id)}
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                {/* Icône zoom */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 transform group-hover:scale-110">
                  <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                    <ZoomIn />
                  </div>
                </div>
                {/* Badge catégorie */}
                <div className="absolute top-3 left-3 bg-orange-600 text-white px-2 py-1 rounded-full text-xs font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {
                    categories.find((c) => c.id === getImageCategory(index))
                      ?.name
                  }
                </div>
              </div>
            </div>
          ))}
        </div>
        {/* Message si aucune image */}
        {filteredImages.length === 0 && (
          <div className="text-center py-16">
            <div className="w-24 h-24 bg-gray-200 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg
                className="w-12 h-12 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-600 mb-2">
              Aucune image trouvée
            </h3>
            <p className="text-gray-500">
              Essayez de changer de catégorie ou revenez plus tard.
            </p>
          </div>
        )}
      </div>

      {/* Modal lightbox */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4">
          {/* Bouton fermer */}
          <button
            onClick={closeModal}
            className="absolute top-4 right-4 z-10 w-12 h-12 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white transition-colors duration-300"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>

          {/* Navigation précédent */}
          <button
            onClick={() => navigateImage("prev")}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 w-12 h-12 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white transition-colors duration-300"
          >
            <svg
              className="w-6 h-6"
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

          {/* Navigation suivant */}
          <button
            onClick={() => navigateImage("next")}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 w-12 h-12 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white transition-colors duration-300"
          >
            <svg
              className="w-6 h-6"
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

          {/* Image principale */}
          <div className="relative max-w-4xl max-h-full">
            <Image
              src={selectedImage.image}
              width={800}
              height={600}
              alt={`Galerie ${selectedImage.id}`}
              className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl"
              priority
            />

            {/* Compteur */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black/50 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm">
              {selectedImage.index + 1} / {filteredImages.length}
            </div>
          </div>

          {/* Overlay pour fermer */}
          <div className="absolute inset-0 -z-10" onClick={closeModal}></div>
        </div>
      )}
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
