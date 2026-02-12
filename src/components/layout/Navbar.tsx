"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const NAV_LINKS = [
        { name: "Proyectos", href: "/proyectos" },
        { name: "Modelo", href: "/modelo" },
        { name: "Inversionistas", href: "/inversionistas" },
    ];

    return (
        <nav className="sticky top-0 z-50 bg-white shadow-sm border-b border-gray-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-20 items-center">
                    {/* Logo Section */}
                    <Link href="/" className="flex-shrink-0 flex items-center gap-2 group">
                        <div className="relative w-44 h-16 transition-transform duration-300 group-hover:scale-105">
                            <Image
                                src="/assets/branding/matriz_color.svg"
                                alt="Inmobiliaria Matriz"
                                fill
                                className="object-contain object-left"
                                priority
                            />
                        </div>
                    </Link>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex space-x-8 items-center">
                        {NAV_LINKS.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className="text-gray-600 hover:text-matriz-blue px-3 py-2 text-sm font-bold uppercase tracking-wide transition-colors"
                            >
                                {link.name}
                            </Link>
                        ))}
                        <Link
                            href="/contacto"
                            className="bg-gray-900 text-white px-6 py-2 matriz-cut-sm font-bold uppercase text-xs tracking-widest hover:bg-matriz-red hover:text-white transition-all transform duration-200"
                        >
                            Contactar
                        </Link>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden flex items-center">
                        <button onClick={() => setIsOpen(!isOpen)} className="text-gray-900 hover:text-matriz-blue focus:outline-none">
                            {isOpen ? <X size={28} strokeWidth={1.5} /> : <Menu size={28} strokeWidth={1.5} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu Dropdown */}
            {isOpen && (
                <div className="md:hidden bg-white border-b border-gray-100 absolute w-full shadow-lg">
                    <div className="px-4 pt-2 pb-6 space-y-2">
                        {NAV_LINKS.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className="block px-3 py-3 text-base font-bold text-gray-700 hover:text-matriz-blue hover:bg-gray-50 uppercase tracking-wide"
                                onClick={() => setIsOpen(false)}
                            >
                                {link.name}
                            </Link>
                        ))}
                        <Link
                            href="/contacto"
                            className="block mt-4 px-3 py-3 text-base font-bold text-white bg-matriz-blue uppercase tracking-widest matriz-cut-sm text-center"
                            onClick={() => setIsOpen(false)}
                        >
                            Contactar
                        </Link>
                    </div>
                </div>
            )}
        </nav>
    );
}
