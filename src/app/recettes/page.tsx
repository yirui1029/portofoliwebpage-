"use client";
import Header from "../../components/Header";
import Recettecard from "@/components/cardrecette";
import recettesdata from "@/data/recettes.json";
import Footer from "@/components/footer";

export default function Recettes() {
  return (
    <main className="flex flex-col justify-center min-h-screen p-4 bg-[linear-gradient(to_right,_#f6a975,_#ffffff)] scroll-auto">
      <Header />
      <div className="flex-col flex-wrap items-start justify-center mt-70 px-6 md:px-20 mb-10">
        <h2 className="text-4xl font-bold mb-8 text-start">
          🍜{" "}
          Mes meilleures recettes de plats asiatiques
        </h2>
        <p className="text-lg mb-6 leading-relaxed">
          Parce qu’en plus de ma passion pour le code,
          <br />
          je suis aussi passionnée de cuisine.{" "}
          <br className="hidden md:inline" />
          Je vous partage ici mes meilleures recettes de plats asiatiques,{" "}
          <br />
          toutes testées et approuvées par mes proches et mes amis.
          <br />
          C’est un vrai plaisir de les partager avec vous,et j’espère qu’elles
          vous permettront d’épater ceux que vous aimez.
          <br />
          <span className="font-semibold text-pink-600">Régalez-vous !</span>
        </p>
        <div className="h-1 w-500 mx-auto my-8 bg-gradient-to-r from-orange-400 via-red-500 to-pink-500 rounded-full"></div>

        <div className="flex flex-row items-start justify-start mt-10 mb-10 flex-wrap gap-45">
          <Recettecard recettes={recettesdata} />
        </div>
        <p className="font-semibold text-pink-600 text-center">De nouvelles recettes seront ajoutées petit à petit. Elles sont en cours de rédaction, merci de votre patience !</p>
      </div>
      <Footer></Footer>
    </main>
  );
}
