"use client";

import { useState } from "react";

export default function Recettecardmodal({selectedRecette, onClose}) {
  
  const [showmodal, setShowModal] = useState(false);
  const onclose = () => {
    setShowModal(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-[linear-gradient(to_right,_#f6a975,_#ffffff)] bg-opacity-50 flex items-center justify-center z-50 overflow-y-auto " onClick={onclose}>
          <div className="bg-white rounded-lg p-6 max-w-md h-auto w-full relative mt-50 mb-10 overflow-y-auto ">
     
          <h2 className="text-xl font-bold mb-2">{selectedRecette.title}</h2>

          <img
            src={selectedRecette.img[0]?.src}
            alt={selectedRecette.img[0]?.alt || selectedRecette.title}
            className="w-full h-100 object-cover rounded"
          />

          <p className="mt-2 text-sm text-gray-600">
            ⏱ Préparation : {selectedRecette.temps_preparation} | Cuisson :{" "}
            {selectedRecette.temps_cuisson} 
          </p>

          <h3 className="font-semibold mt-3">Ingrédients :</h3>
          <ul className="list-disc list-inside text-sm text-gray-700">
            {selectedRecette.ingredients.map((ing, index) => (
              <li key={index}>
                {ing.nom} : {ing.quantité}
              </li>
            ))}
          </ul>

          <h3 className="font-semibold mt-3">Instructions :</h3>
          <ol className="list-decimal list-inside text-sm text-gray-700">
            {selectedRecette.instructions.map((etape, index) => {
              const numero = Object.keys(etape)[0] as keyof typeof etape;
              const texte = etape[numero];
              return <li key={index}>{texte}</li>;
            })}
          </ol>

          </div>
     
        </div>
  );
}
