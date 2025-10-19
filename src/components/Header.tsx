"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Header() {
  const menu = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
    { name: "T&C", href: "/tnc" },
  ];

  return (
    <header className="fixed top-0 left-0 w-full bg-white/80 backdrop-blur-md shadow-md z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center py-3 px-4 sm:px-6 md:px-12">
        
        {/* Logo */}
        <Link href="/">
          <Image
            src="/logo.png"
            alt="Nirvant Logo"
            width={140}
            height={40}
            priority
            className="object-contain"
          />
        </Link>

        {/* Menu */}
        <nav>
          <ul className="hidden md:flex gap-4 md:gap-6 text-gray-700 font-medium">
            {menu.map((item) => (
              <motion.li
                key={item.name}
                whileHover={{ scale: 1.05 }}
                className="relative px-3 py-1 rounded-full hover:bg-sky-400/30 transition-colors duration-200"
              >
                <Link href={item.href}>{item.name}</Link>
              </motion.li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
