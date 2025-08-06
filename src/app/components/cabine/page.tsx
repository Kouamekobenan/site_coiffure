"use client";
import Image from "next/image";
import React, { useState } from "react";
import {
  Phone,
  Smartphone,
  CheckCircle,
  Clock,
  Shield,
  QrCode,
} from "lucide-react";
export default function MaCabine() {
  const [isTransferStarted, setIsTransferStarted] = useState<boolean>(false);
  const phone = "+2250769241128";
  const message = `Bonjour, Monsieur K pouvez-vous me recharger sur ce numéro (entre le numéro et le montant) :`;
  const handleTransferClick = () => {
    setIsTransferStarted(true);
    setTimeout(() => {
      window.open(
        `https://wa.me/${phone}?text=${encodeURIComponent(message)}`,
        "_blank"
      );
    }, 500);
  };

  return (
    <div className="min-h-screen bg-white pt-16">
      <div className="max-w-6xl mx-auto px-4 py-8">
        {/* Header Section */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full mb-6">
            <Image
              src="/logo.png"
              alt="Logo Monsieur K"
              width={40}
              height={40}
              className="rounded-full object-cover sm:w-[50px] sm:h-[50px]"
              priority
            />{" "}
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Transfert d&apos;Unités en Ligne
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Simple, rapide et sécurisé - Effectuez vos transferts d&apos;unités
            directement via WhatsApp
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Left Column - Image and CTA */}
          <div className="space-y-8">
            <div className="relative overflow-hidden rounded-2xl shadow-2xl">
              <Image
                src="/cabine/m1.jpg"
                alt="Interface de transfert d'unités"
                width={600}
                height={400}
                className="w-full h-80 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>

            <div className="text-center">
              <button
                onClick={handleTransferClick}
                disabled={isTransferStarted}
                className={`
                  inline-flex items-center gap-3 px-8 py-4 text-lg font-semibold rounded-full
                  transition-all duration-300 transform hover:scale-105 shadow-lg
                  ${
                    isTransferStarted
                      ? "bg-green-600 text-white cursor-not-allowed"
                      : "bg-gradient-to-r from-orange-600 to-orange-600 text-white hover:from-orange-700 hover:to-orange-700"
                  }
                `}
              >
                {isTransferStarted ? (
                  <>
                    <CheckCircle className="w-6 h-6" />
                    Transfert initié
                  </>
                ) : (
                  <>
                    <Phone className="w-6 h-6" />
                    Commencer le transfert
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Right Column - Features */}
          <div className="space-y-8">
            <div className="bg-white rounded-2xl p-8 shadow-xl">
              <div className="flex items-start gap-4 mb-6">
                <div className="flex-shrink-0 w-12 h-12 bg-orange-300 rounded-full flex items-center justify-center">
                  <Clock className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    Rapide et Simple
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    C&apos;est fou comme c&apos;est facile ! Juste deux minutes
                    et votre transaction est effectuée. Pas besoin de vous
                    déplacer, tout se fait en ligne.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-orange-300 rounded-full flex items-center justify-center">
                  <Shield className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    100% Sécurisé
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    Vos transactions sont protégées par des protocoles de
                    sécurité avancés. Transferez en toute confiance.
                  </p>
                </div>
              </div>
            </div>
            {/* QR Code Section */}
            <div className="bg-gradient-to-r from-orange-600 to-orange-600 rounded-2xl p-8 text-white">
              <div className="flex items-center gap-6">
                <div className="flex-shrink-0">
                  <div className="flex-1/2 w-20 h-20 bg-white rounded-xl flex items-center justify-center p-1">
                    <Image
                      src="/qrcode.jpg"
                      alt="Code QR de confirmation"
                      width={200}
                      height={80}
                      className="w-full h-full object-contain"
                      priority
                    />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 flex items-center gap-2">
                    <QrCode className="w-6 h-6" />
                    Confirmation
                  </h3>
                  <p className="text-indigo-100 leading-relaxed">
                    Revenez scanner ce QR code après votre transfert pour
                    confirmer et finaliser votre transaction.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Process Steps */}
        <div className="bg-white rounded-2xl p-8 shadow-xl">
          <h2 className="text-2xl font-bold text-center text-gray-900 mb-8">
            Comment ça marche ?
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-300 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-white">1</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Cliquez sur `Commencer`
              </h3>
              <p className="text-gray-600">
                Appuyez sur le bouton pour initier votre transfert d&apos;unités
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-300 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-white">2</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                WhatsApp s&apos;ouvre
              </h3>
              <p className="text-gray-600">
                Suivez les instructions dans la conversation WhatsApp
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-300 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-white">3</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Scannez le QR
              </h3>
              <p className="text-gray-600">
                Confirmez votre transaction en scannant le code QR
              </p>
            </div>
          </div>
        </div>

        {/* Support Section */}
        <div className="mt-12 text-center">
          <p className="text-gray-600 mb-4">
            Besoin d&apos;aide ? Notre équipe est disponible 24h/7j
          </p>
          <button className="inline-flex items-center gap-2 text-orange-600 hover:text-orange-700 font-medium">
            <Phone className="w-4 h-4" />
            Contacter le support
          </button>
        </div>
      </div>
    </div>
  );
}
