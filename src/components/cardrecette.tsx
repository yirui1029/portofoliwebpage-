"use client";

import { useState } from "react";
import Recettecardmodal from "@/components/cardrecettemodal";

export default function Recettecard({recettes}) {
    
  const [selectedRecette, setSelectedRecette] = useState(null);

  const openModal = (recette) => setSelectedRecette(recette);
  const closeModal = () => setSelectedRecette(null);

  console.log(selectedRecette)

    return(
        <>
            {recettes.map((recette) => (
                <div key={recette.id} onClick={() => openModal(recette)}  className="cursor-pointer flex flex-col items-center justify-center  outline-orange-500 rounded-lg p-10 mt-10 w-100 h-80 bg-[linear-gradient(to_right,_#f88e55,_#ffffff)] scroll-auto backgroundcardmodal transition-all duration-700 ease-out delay-200 hover:scale-103">
                    <h2 className="text-xl font-bold mb-2">{recette.title}</h2>
                    <img
                        src={recette.img[0]?.src}
                        alt={recette.img[0]?.alt || recette.title}
                        className="w-full h-50 object-cover rounded"
                    />
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
    )
}
