"use client";

import { Coffee, Menu, X } from "lucide-react";
import Link from "next/link";
import { useState, useEffect } from "react";

const navLinks = [
    { name: "Qué incluye", href: "#features" },
    { name: "Cafés", href: "#cafes" },
    { name: "Prompts", href: "#prompts" },
    { name: "Audio", href: "#audio" },
    { name: "Modelo", href: "#model" },
];

export function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled || isMenuOpen
                ? "bg-[#fbf5ea]/90 backdrop-blur-md shadow-sm py-4"
                : "bg-transparent py-6"
                }`}
        >
            <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
                <Link href="#" className="flex items-center gap-2 group">
                    <div className="p-2 bg-[#7b4a12] rounded-lg text-white group-hover:scale-105 transition-transform">
                        <Coffee size={20} />
                    </div>
                    <span className="font-serif text-xl font-bold text-[#2c1810]">
                        CoffeeLab
                    </span>
                </Link>

                <div className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className="text-sm font-medium text-[#7b4a12] hover:text-[#2c1810] transition-colors"
                        >
                            {link.name}
                        </Link>
                    ))}
                </div>

                <button
                    className="md:hidden text-[#7b4a12]"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                    {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile Menu */}
            {isMenuOpen && (
                <div className="md:hidden absolute top-full left-0 right-0 bg-[#fbf5ea] border-t border-black/5 shadow-lg animate-in slide-in-from-top-4 duration-200">
                    <div className="flex flex-col p-6 gap-4">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                onClick={() => setIsMenuOpen(false)}
                                className="text-lg font-medium text-[#7b4a12] hover:text-[#2c1810] transition-colors py-2 border-b border-black/5 last:border-0"
                            >
                                {link.name}
                            </Link>
                        ))}
                    </div>
                </div>
            )}
        </nav>
    );
}
