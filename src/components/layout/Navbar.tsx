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
                <div className="flex justify-between items-center h-20">

                    {/* Logo */}
                    <div className="flex-shrink-0 flex items-center">
                        <Link href="/">
                            <div className="relative h-12 w-56">
                                <Image
                                    src="/assets/g22.png"
                                    alt="Inmobiliaria Matriz"
                                    fill
                                    className="object-contain object-left"
                                    priority
                                />
                            </div>
                        </Link>
                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center space-x-8">
                        {NAV_LINKS.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className="text-gray-700 hover:text-matriz-blue font-semibold uppercase text-sm tracking-wide transition-colors"
                            >
                                {link.name}
                            </Link>
                        ))}
                        <Link
                            href="/contacto"
                            className="bg-gray-900 text-white px-6 py-2.5 rounded-full font-semibold uppercase text-xs tracking-wider hover:bg-black hover:scale-105 transition-all transform duration-200"
                        >
                            Contactar
                        </Link>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden flex items-center">
                        <button onClick={() => setIsOpen(!isOpen)} className="text-gray-700 hover:text-matriz-blue focus:outline-none">
                            {isOpen ? <X size={28} /> : <Menu size={28} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu Dropdown */}
            {isOpen && (
                <div className="md:hidden bg-white border-t border-gray-100 absolute w-full">
                    <div className="px-4 pt-2 pb-6 space-y-2 shadow-lg">
                        {NAV_LINKS.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className="block px-3 py-3 text-base font-medium text-gray-700 hover:text-matriz-blue hover:bg-gray-50 uppercase tracking-wide"
                                onClick={() => setIsOpen(false)}
                            >
                                {link.name}
                            </Link>
                        ))}
                        <Link
                            href="/contacto"
                            className="block px-3 py-3 text-base font-medium text-matriz-blue hover:bg-gray-50 uppercase tracking-wide"
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
