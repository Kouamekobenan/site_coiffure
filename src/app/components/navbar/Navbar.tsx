"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { Menu, X } from "lucide-react"; 
export default function Navbar() {
 
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);
  return (
    <header className="bg-white shadow-md fixed top-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/logo.png"
              alt="Logo Monsieur K"
              width={50}
              height={50}
              className="rounded-full object-cover"
              priority
            />
            <span className="text-xl font-bold text-orange-600 hidden sm:inline">
              Monsieur K
            </span>
          </Link>
          <button
            className="md:hidden text-orange-600"
            onClick={toggleMenu}
            aria-label="Menu"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
          {/* Navigation Desktop */}
          <nav className="hidden md:flex space-x-6">
            {navLinks.map(({ label, href }) => (
              <Link
                key={href}
                href={href}
                className="text-gray-700 hover:text-orange-600 font-medium transition-colors"
              >
                {label}
              </Link>
            ))}
          </nav>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden bg-white shadow-md px-4 pb-4 pt-2 space-y-2">
          {navLinks.map(({ label, href }) => (
            <Link
              key={href}
              href={href}
              onClick={() => setIsOpen(false)} // Ferme le menu après clic
              className="block text-gray-700 hover:text-orange-600 font-medium transition-colors"
            >
              {label}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
};
const navLinks = [
  { label: "Accueil", href: "/home" },
  { label: "Ma cabine", href: "/cabine" },
  { label: "Autres services", href: "/parfurm" },
  { label: "Galerie photo", href: "/galerie" },
  { label: "À propos", href: "/about" },
];
