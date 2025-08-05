import Image from "next/image";
import { Coifures } from "@/app/data/db";

export default function ListeCoiffures() {
  const phone = "2250747235898"; // ton numéro WhatsApp (sans +)

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4 py-6">
      {Coifures.map((coifure) => {
        const message = `Bonjour, je souhaite prendre rendez-vous pour la coiffure ${coifure.name}`;
        const whatsappLink = `https://wa.me/${phone}?text=${encodeURIComponent(
          message
        )}`;

        return (
          <div
            key={coifure.id}
            className="border rounded-lg p-4 shadow-md bg-white flex flex-col justify-between"
          >
            <Image
              src={coifure.image}
              alt={coifure.name}
              width={300}
              height={200}
              className="rounded-md object-cover w-full h-[200px]"
            />
            <h3 className="mt-3 font-semibold text-lg text-gray-800">
              {coifure.name}
            </h3>
            <p className="text-orange-600 font-bold mb-4">
              {coifure.price} FCFA
            </p>
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-auto inline-block bg-green-500 hover:bg-green-600 text-white font-medium py-2 px-4 rounded-lg text-center transition duration-300"
            >
              Prendre RDV sur WhatsApp
            </a>
          </div>
        );
      })}
    </div>
  );
}
