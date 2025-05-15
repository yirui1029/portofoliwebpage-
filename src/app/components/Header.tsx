import Navbar from "./navbar";
import Image from "next/image";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Header()
 {
  return (
    <header className="fixed top-0 left-0 w-full flex h-[45vh] items-center justify-between p-4 bg-orange-300 text-white backdrop-blur-md" >
          <img src="/千库网_山川河流中国风粉色山水风景视频背景动图gif_GIF编号75882.gif" alt="GIF header"
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
  );
}
