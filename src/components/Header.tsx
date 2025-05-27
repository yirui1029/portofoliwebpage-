import Navbar from "./navbar";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Header() {
  const [showHeader, setShowHeader] = useState(true);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY <= 0) {
        setShowHeader(true);
      } else if (currentScrollY > lastScrollY.current) {
        setShowHeader(false);
      } else {
        setShowHeader(true);
      }
      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {showHeader && (
        <header className="fixed top-0 left-0 w-full bg-orange-300 text-white backdrop-blur-md z-50 overflow-hidden py-2 sm:py-4">
          {/* Background GIF */}
          <img
            src="/backgroundhome.gif"
            alt="GIF header"
            className="absolute inset-0 w-full h-full object-cover z-0 animate-fade-in"
          />

          {/* Ligne principale */}
          <div className="relative z-10 flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-0 px-4 sm:px-10">
            {/* Logo à gauche */}
            <div className="flex-shrink-0 mt-2 sm:mt-3">
              <Image
                src="/logo.png"
                alt="logo de mon portfolio"
                width={140}
                height={140}
                className="rounded-full shadow-lg object-cover hover:contrast-150 transition-all duration-300"
              />
            </div>

            {/* Texte centré */}
            <div className="text-center">
              <h1 className="text-2xl sm:text-4xl font-bold">Yirui DUPUY</h1>
              <p className="text-base sm:text-xl font-medium mt-1 sm:mt-2">
                Développeuse web fullstack React, React Native, Next.js & Node.js
              </p>
            </div>

            {/* Icônes à droite */}
            <div className="flex gap-4 text-2xl sm:text-4xl text-white mt-2 sm:mt-0">
              <a
                href="https://github.com/yirui1029"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-black transition-colors duration-200"
              >
                <FaGithub />
              </a>
              <a
                href="https://www.linkedin.com/in/yirui-dupuy-23078347"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-black transition-colors duration-200"
              >
                <FaLinkedin />
              </a>
            </div>
          </div>

          {/* Navbar en dessous */}
          <div className="flex justify-center sm:justify-end z-10 mt-2 sm:mt-4">
            <Navbar />
          </div>
        </header>
      )}
    </>
  );
}
