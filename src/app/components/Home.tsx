"use client";

import { useRef, useState } from "react";
import { useEffect } from "react";
import Header from "./Header";

export default function Home() {
  const [showHeader, setShowHeader] = useState(true);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY <= 0) {
        setShowHeader(true); // tout en haut → montrer le header
      } else if (currentScrollY > lastScrollY.current) {
        setShowHeader(false); // défilement vers le bas → cacher le header
      } else {
        setShowHeader(true); // défilement vers le haut → montrer le header
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <main className="flex flex-col justify-center min-h-screen p-4 bg-[linear-gradient(to_right,_#f6a975,_#ffffff)] scroll-auto" >
        {showHeader && <Header />}
        <div className="h-[200vh] mt-4">
        <p>Fais défiler pour cacher le header...</p>
      </div>
    </main>
  );
}
