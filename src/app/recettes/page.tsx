"use client";
import Header from "../../components/Header";
import Recettecardmodal from "@/components/cardrecettemodal";
import Recettecard from "@/components/cardrecette";
import { useRef, useState } from "react";
import { useEffect } from "react";
import recettesdata from "@/data/recettes.json"; // Assurez-vous que le chemin est correct

export default function Recettes() {
  return (
    <main className="flex flex-col justify-center min-h-screen p-4 bg-[linear-gradient(to_right,_#f6a975,_#ffffff)] scroll-auto">
      <Header />
      <div className="flex-col flex-wrap items-start justify-center mt-70 mb-auto">
        <h1 className="text-3xl font-bold text-center">
          Mes meilleures recettes de plats asiatiques
        </h1>
        <p className="text-center text-lg text-shadow-2xs md:text-2xl p-4 md:p-6 rounded-2xl ">
          Parce qu’en plus de ma passion pour le code,
          <br />
          je suis aussi passionnée de cuisine.{" "}
          <br className="hidden md:inline" />
          Je vous partage ici mes meilleures recettes de plats asiatiques,{" "}
          <br />
          toutes testées et approuvées par mes proches et mes amis.
          <br />
          C’est un vrai plaisir de les partager avec vous,et j’espère qu’elles vous permettront d’épater ceux que vous aimez.
          <br />
          <span className="font-semibold text-pink-600">Régalez-vous !</span>
        </p>

        <Recettecard recettes={recettesdata} />
      </div>
    </main>
  );
}
