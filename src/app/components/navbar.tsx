import Link from "next/link";

export default function Navbar() {
  const links = [
    { href: "/", label: "Accueil" },
    { href: "/recettes", label: "Mes Recettes" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <nav className="relative items-center justify-center p-4 rounded-full">
      <ul className="flex gap-6 text-sm font-medium text-gray-700 dark:text-gray-400">
        {links.map((link) => (
          <li key={link.href} className="relative group">
            <Link
              href={link.href}
              className="relative dark:hover:text-white text-4xl"
            >
              {link.label}
              <span className="absolute inset-x-0 bottom-0 h-1 bg-black transform scale-x-0 transition-transform duration-300 ease-in-out group-hover:scale-x-100"></span>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

