"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import HeaderP from "./headerP";


// Définition des liens de navigation
const navItems = [
    { label: "Accueil", href: "/" },
    { label: "Découvrir C.V.P.D", href: "/about" },
    { label: "Agir avec nous", href: "/service" },
    { label: "Nos actualités", href: "/blog" },
    { label: "Contacts", href: "/contact" },
];

export default function Header() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section>
        
        <header
            className={`fixed w-full z-50 transition-colors duration-300 ${
                scrolled ? "bg-gray-100 shadow-md" : "bg-transparent"
            }`}
            >
            <HeaderP/>
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-2">
                <div className="flex justify-between items-center h-16">
                {/* Logo + Nom */}
                <Link href="/" className="flex items-center space-x-2">
                    <Image
                    src="/logos/logo.png"
                    alt="Logo"
                    width={48}
                    height={48}
                    className="rounded-full object-cover"
                    />
                    
                </Link>

                {/* Menu Desktop */}
                <nav className="hidden md:flex items-center space-x-7">
                    {navItems.map((item) => (
                    <Link
                        key={item.href}
                        href={item.href}
                        className={`text-sm font-light hover:text-orange-200 transition-colors duration-200 ${
                        pathname === item.href
                            ? "text-[#017dbf]"
                            : scrolled
                            ? "text-gray-700"
                            : "text-white"
                        } `}
                    >
                        {item.label}
                    </Link>
                    ))}

                    {/* Language Switcher Desktop */}
                    <Link
                    href="/quote"
                    className={`ml-4 inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200 ${
                        scrolled
                        ? "border-1 border-[#017dbf] text-[#017dbf] hover:bg-[#017dbf]/20"
                        : "border-1 border-orange-200 text-orange-200 hover:bg-orange-200/20"
                    }`}
                    >
                    Faire un don 
                    </Link>
                </nav>
                    
                {/* Bouton Menu Mobile */}
                <button
                    onClick={() => setMenuOpen(!menuOpen)}
                    aria-label="Toggle menu"
                    aria-expanded={menuOpen}
                    className={`md:hidden p-2 transition-all duration-300 ${
                    scrolled
                        ? "bg-white text-[#017dbf] border border-[#017dbf]"
                        : "bg-[#017dbf] text-white"
                    }`}
                >
                    {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
                </button>
                </div>
            </div>

            {/* Menu Mobile */}
            <AnimatePresence>
                {menuOpen && (
                <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="md:hidden bg-gray-100 border-b-1 border-[#017dbf]/20 px-4 py-6 space-y-6 text-center overflow-hidden"
                >
                    {navItems.map((item) => (
                    <Link
                        key={item.href}
                        href={item.href}
                        onClick={() => setMenuOpen(false)}
                        className={`block text-base font-medium transition-colors duration-200 ${
                        pathname === item.href ? "text-[#017dbf]" : "text-gray-700"
                        } `}
                    >
                        {item.label}
                    </Link>
                    ))}

                    {/* Language Switcher Mobile */}
                    <Link
                    href="/quote"
                    onClick={() => setMenuOpen(false)}
                    className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-full border-1 border-[#017dbf] text-[#017dbf] text-sm font-semibold hover:bg-[#017dbf] transition mx-auto"
                    >
                    Faire un don 
                    </Link>
                </motion.div>
                )}
            </AnimatePresence>
            </header>
    </section>
  );
}
