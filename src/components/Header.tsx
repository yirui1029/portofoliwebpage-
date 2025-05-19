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
    <>
      {showHeader && (
        <header className="fixed top-0 left-0 w-full flex h-[28vh] items-center justify-between p-4 bg-orange-300 text-white backdrop-blur-md" >
          <img src="/backgroundhome.gif" alt="GIF header"
            className="absolute inset-0 w-full h-full object-cover z-0 animate-fade-in" />
          <div className="text-center">
            <Image
              src="/logo.png"
              alt="logo de mon portfolio"
              width={200}
              height={200}
              className="relative border-none rounded-full shadow-ig object-cover hover:contrast-150 transition-all duration-300 opacity-100 z-10"
            />
          </div>
          <Navbar />
          <div className="flex gap-6 align-middle justify-center items-center">
            <a
              href="https://github.com/yirui1029"
              target="_blank"
              rel="github noopener noreferrer"
              className=" relative text-gray-600 hover:text-black text-5xl z-20"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/yirui-dupuy-23078347"
              target="_blank"
              rel="linkedin noopener noreferrer"
              className="relative text-gray-600 hover:text-black text-5xl z-20"
            >
              <FaLinkedin />
            </a>
          </div>
        </header>
      )}
    </>
  );
}
