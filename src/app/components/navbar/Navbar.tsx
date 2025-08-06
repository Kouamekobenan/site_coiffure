"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Accueil", href: "/home" },
  { label: "Ma cabine", href: "/cabine" },
  { label: "Autres services", href: "/parfurm" },
  { label: "Galerie photo", href: "/galerie" },
  { label: "À propos", href: "/about" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Gérer le scroll pour effet dynamique
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Fermer le menu mobile quand on redimensionne vers desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Empêcher le scroll du body quand le menu mobile est ouvert
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const toggleMenu = () => setIsOpen(!isOpen);

  const closeMenu = () => setIsOpen(false);

  return (
    <>
      <header
        className={`bg-white fixed top-0 w-full z-50 transition-all duration-300 ${
          scrolled ? "shadow-lg backdrop-blur-sm bg-white/95" : "shadow-md"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 sm:h-20">
            {/* Logo */}
            <Link
              href="/"
              className="flex items-center gap-2 hover:opacity-80 transition-opacity"
              onClick={closeMenu}
            >
              <div className="relative">
                <Image
                  src="/logo.png"
                  alt="Logo Monsieur K"
                  width={40}
                  height={40}
                  className="rounded-full object-cover sm:w-[50px] sm:h-[50px]"
                  priority
                />
              </div>
              <span className="text-lg sm:text-xl font-bold text-orange-600 hidden xs:inline">
                Monsieur K
              </span>
            </Link>

            {/* Navigation Desktop */}
            <nav className="hidden md:flex items-center space-x-1 lg:space-x-2">
              {navLinks.map(({ label, href }) => (
                <Link
                  key={href}
                  href={href}
                  className="relative px-3 py-2 text-gray-700 hover:text-orange-600 font-medium transition-all duration-200 rounded-lg hover:bg-orange-50 group"
                >
                  {label}
                  <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-orange-600 transition-all duration-200 group-hover:w-full group-hover:left-0"></span>
                </Link>
              ))}
            </nav>

            {/* Bouton Menu Mobile */}
            <button
              className="md:hidden p-2 text-orange-600 hover:bg-orange-50 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-opacity-50"
              onClick={toggleMenu}
              aria-label={isOpen ? "Fermer le menu" : "Ouvrir le menu"}
              aria-expanded={isOpen}
            >
              <div className="relative w-6 h-6">
                <Menu
                  size={24}
                  className={`absolute transition-all duration-200 ${
                    isOpen ? "opacity-0 rotate-90" : "opacity-100 rotate-0"
                  }`}
                />
                <X
                  size={24}
                  className={`absolute transition-all duration-200 ${
                    isOpen ? "opacity-100 rotate-0" : "opacity-0 -rotate-90"
                  }`}
                />
              </div>
            </button>
          </div>
        </div>

        {/* Overlay pour mobile */}
        {isOpen && (
          <div
            className="md:hidden fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm"
            onClick={closeMenu}
            aria-hidden="true"
          />
        )}

        {/* Menu Mobile */}
        <div
          className={`md:hidden fixed top-16 sm:top-20 right-0 w-64 h-[calc(100vh-4rem)] sm:h-[calc(100vh-5rem)] bg-white shadow-xl transform transition-transform duration-300 ease-in-out ${
            isOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <nav className="flex flex-col h-full">
            <div className="flex-1 px-4 py-6 space-y-1">
              {navLinks.map(({ label, href }, index) => (
                <Link
                  key={href}
                  href={href}
                  onClick={closeMenu}
                  className={`block px-4 py-3 text-gray-700 hover:text-orange-600 hover:bg-orange-50 font-medium transition-all duration-200 rounded-lg transform hover:translate-x-1 animate-slideIn`}
                  style={{
                    animationDelay: `${index * 100}ms`,
                    animationFillMode: "both",
                  }}
                >
                  {label}
                </Link>
              ))}
            </div>

            {/* Footer du menu mobile */}
            <div className="px-4 py-4 border-t border-gray-100">
              <div className="flex items-center gap-2 text-sm text-gray-500">
                <Image
                  src="/logo.png"
                  alt="Logo"
                  width={24}
                  height={24}
                  className="rounded-full object-cover"
                />
                <span>Monsieur K</span>
              </div>
            </div>
          </nav>
        </div>
      </header>

      {/* Spacer pour éviter que le contenu soit masqué */}
      <div className="h-16 sm:h-20" />

      <style jsx global>{`
        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateX(20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        .animate-slideIn {
          animation: slideIn 0.3s ease-out;
        }

        @media (min-width: 475px) {
          .xs\\:inline {
            display: inline;
          }
        }
      `}</style>
    </>
  );
}
