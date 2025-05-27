"use client";

import { useState } from "react";

interface RecetteImage {
  src: string;
  alt?: string;
}

interface Ingredient {
  nom: string;
  quantité: string;
}

interface Instruction {
  etape: string;
  texte: string;
}

interface Recette {
  title: string;
  img: RecetteImage[];
  temps_preparation: string;
  temps_cuisson: string;
  ingredients: Ingredient[];
  instructions: Instruction[];
}

interface RecetteCardModalProps {
  selectedRecette: Recette;
  onClose: () => void;
}

export default function Recettecardmodal({ selectedRecette, onClose }: RecetteCardModalProps) {
  const [showModal, setShowModal] = useState(true);
  
  const onclose = () => {
    setShowModal(false);
    onClose();
  };

  if (!showModal) return null;

  return (
    <div
      className="fixed inset-0 bg-[linear-gradient(to_right,_#f6a975,_#ffffff)] bg-opacity-50 flex items-center justify-center z-50 overflow-y-auto"
      onClick={onclose}
    >
      <div
        className="bg-white rounded-lg p-6 h-auto w-4xl relative mt-150 mb-10 overflow-y-auto"
        onClick={(e) => e.stopPropagation()} // Empêche la fermeture du modal quand on clique à l'intérieur
      >
        <h2 className="text-xl font-bold mb-2">{selectedRecette.title}</h2>

        <img
          src={selectedRecette.img[0]?.src}
          alt={selectedRecette.img[0]?.alt || selectedRecette.title}
          className="w-100 h-100 block mx-auto mt-10 mb-10 object-cover rounded hover:scale-105 transition-transform duration-300"
        />

        <p className="mt-2 text-sm text-gray-600">
          ⏱ Préparation : {selectedRecette.temps_preparation} | Cuisson : {selectedRecette.temps_cuisson}
        </p>

        <h3 className="font-semibold mt-3">Ingrédients :</h3>
        <ul className="list-disc list-inside text-shadow-current text-gray-700">
          {selectedRecette.ingredients.map((ing, index) => (
            <li key={index}>
              {ing.nom} : {ing.quantité}
            </li>
          ))}
        </ul>

        <h3 className="font-semibold mt-3">Instructions :</h3>
        <ol className="list-decimal list-inside text-base text-gray-700">
          {selectedRecette.instructions.map(({ etape, texte }) => (
            <li key={etape}>
              <strong>Étape {etape} :</strong> {texte}
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
}
