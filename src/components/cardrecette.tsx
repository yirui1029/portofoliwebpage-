"use client";

import { useState } from "react";
import Recettecardmodal from "@/components/cardrecettemodal";
import { Recette } from "../types/recette";

interface RecettecardProps {
  recettes: Recette[];
}

export default function Recettecard({ recettes }: RecettecardProps) {
  const [selectedRecette, setSelectedRecette] = useState<Recette | null>(null);

  const openModal = (recette: Recette) => setSelectedRecette(recette);
  const closeModal = () => setSelectedRecette(null);

  return (
    <>
      {recettes.map((recette) => (
        <div
          key={recette.id}
          role="button"
          tabIndex={0}
          onClick={() => openModal(recette)}
          onKeyDown={(e) => e.key === "Enter" && openModal(recette)}
          className="cursor-pointer flex flex-col items-center justify-center outline-orange-500 rounded-lg p-10 mt-10 w-full max-w-md h-80 bg-[linear-gradient(to_right,_#f88e55,_#ffffff)] scroll-auto transition-all duration-700 ease-out delay-200 hover:scale-105"
        >
          <h2 className="text-xl font-bold mb-2">{recette.title}</h2>
          {recette.img?.[0]?.src && (
            <img
              src={recette.img[0].src}
              alt={recette.img[0].alt || recette.title}
              className="w-full h-50 object-cover rounded"
            />
          )}
          <p className="text-sm mt-3.5 text-gray-600">
            ⏱ Préparation : {recette.temps_preparation} | Cuisson :{" "}
            {recette.temps_cuisson}
          </p>
        </div>
      ))}
      {selectedRecette && (
        <Recettecardmodal
          selectedRecette={selectedRecette}
          onClose={closeModal}
        />
      )}
    </>
  );
}
