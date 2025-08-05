"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

export default function Loader() {
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      router.push("/home");
    }, 3000);
    return () => clearTimeout(timer);
  }, [router]);

  return (
    <div className="flex items-center justify-center min-h-screen bg-orange-100 px-4">
      <div className="text-center max-w-md w-full">
        <div className="flex justify-center mb-6">
          <Image
            src="/logo.png"
            alt="Image de bienvenue"
            width={180}
            height={180}
            className="rounded-full shadow-md w-40 h-40 object-cover"
            priority
          />
        </div>

        <h1 className="text-2xl md:text-4xl font-bold text-orange-700 mb-4">
          Bienvenue chez Monsieur K
        </h1>
        <p className="text-base md:text-lg text-gray-700">
          Chargement en cours...
        </p>

        <div className="mt-6">
          <div className="animate-spin rounded-full h-12 w-12 md:h-16 md:w-16 border-4 border-orange-600 border-t-transparent mx-auto"></div>
        </div>
      </div>
    </div>
  );
}
