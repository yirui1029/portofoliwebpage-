"use client";

import { useRef, useState } from "react";
import { useEffect } from "react";
import Header from "./Header";
import portofoliosdata from "@/data/projets.json";
import Portofolis from "@/components/cardportofolio";
import Footer from "./footer";

export default function Home() {
  return (
    <main className="flex flex-col justify-center min-h-screen p-4 bg-[linear-gradient(to_right,_#f6a975,_#ffffff)] scroll-auto overflow-y-auto">
      <Header />
      <section className="text-gray-800 py-10 px-6 md:px-20 mt-75">
        <div className=" mx-auto">
          {/* Titre */}
          <h2 className="text-4xl font-bold mb-8 text-start">
            👋 À propos de moi
          </h2>

          {/* Intro */}
          <p className="text-lg mb-6 leading-relaxed">
            D’origine chinoise et ancienne comptable reconvertie dans le
            développement web. Passionnée par la technologie et l’innovation,
            j’ai suivi une formation intensive dans le cadre de ma reconversion,
            où j’ai appris à maîtriser{" "}
            <span className="font-medium text-blue-700">
              React, React Native et Next.js
            </span>
            . J’ai également eu l’opportunité de développer une application
            mobile en utilisant React Native et Node.js, ce qui m’a permis de
            mettre en pratique mes compétences sur un projet concret.
          </p>

          {/* Particularité */}
          <h3 className="text-xl font-semibold mt-10 mb-3">
            📌 Ce qui me distingue
          </h3>
          <ul className="list-disc list-inside text-base space-y-1">
            <li>Autonome et rigoureux dans le développement</li>
            <li>Esprit d’analyse et sens pratique</li>
            <li>Bon sens du design et de l'expérience utilisateur</li>
            <li>À l’aise en travail d’équipe et communication</li>
            <li>Capacité à apprendre rapidement de nouvelles technologies</li>
          </ul>

          {/* Conclusion */}
          <p className="text-lg mt-6 leading-relaxed">
            🎯 Aujourd’hui, je suis à la recherche de{" "}
            <span className="font-medium text-orange-600">
              nouvelles opportunités
            </span>{" "}
            en tant que développeuse fullstack, afin de collaborer sur des
            projets innovants et à fort impact.
          </p>
          <p className="text-lg mt-2 leading-relaxed">
            📩 N’hésitez pas à me{" "}
            <a
              href="/contact"
              className="text-blue-600 underline hover:text-blue-800"
            >
              contacter
            </a>{" "}
            pour échanger ou découvrir mon portfolio !
          </p>
        </div>
        <div className="h-1 w-300 mx-auto my-8 mt-20 bg-gradient-to-r from-orange-400 via-red-500 to-pink-500 rounded-full"></div>
      </section>
      <section className="text-gray-800  md:px-20 ">
        <div className="flex flex-col items-start justify-center">
          <h2 className="text-4xl font-bold mb-8 text-start">
           🗂️Portfolio
          </h2>
        </div>
        <div className="flex flex-col items-center justify-between md:flex-col gap-30">
        <Portofolis portfolios={portofoliosdata} />
        </div>
      </section>
      <Footer></Footer>
    </main>
  );
}
