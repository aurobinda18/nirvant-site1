"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { useState } from "react";
import { Menu, X } from "lucide-react"; // lightweight icons

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const menu = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/neet" },
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

        {/* Desktop Menu */}
        <nav className="hidden md:flex gap-4 md:gap-6 text-gray-700 font-medium">
          {menu.map((item) => (
            <motion.li
              key={item.name}
              whileHover={{ scale: 1.05 }}
              className="list-none relative px-3 py-1 rounded-full hover:bg-sky-400/30 transition-colors duration-200"
            >
              <Link href={item.href}>{item.name}</Link>
            </motion.li>
          ))}
        </nav>

        {/* Mobile Hamburger Button */}
        <button
          className="md:hidden text-gray-800"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          className="md:hidden bg-white shadow-lg border-t border-gray-100"
        >
          <ul className="flex flex-col items-center py-3 space-y-2 text-gray-700 font-medium">
            {menu.map((item) => (
              <li key={item.name}>
                <Link
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="block px-4 py-2 rounded-lg hover:bg-sky-100 transition"
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </motion.div>
      )}
    </header>
  );
}
