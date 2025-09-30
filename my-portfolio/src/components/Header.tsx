"use client";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Header() {
    const pathname = usePathname();
    const [isOpen, setIsOpen] = useState(false);

    const links = [
        { href: "/", label: "Home" },
        { href: "/about", label: "About" },
        { href: "/resume", label: "Resume" },
        { href: "/projects", label: "Portfolio" },
        { href: "/contact", label: "Contact" },
    ];

    return (
        <header className="fixed top-0 left-0 w-full z-50 bg-transparent backdrop-blur-md">
            <div className="flex items-center justify-between px-4 py-4 md:px-12 lg:px-32">
                {/* Logo or Name */}
                <div className="text-lg font-bold">Otgonbayar Bayansan</div>

                {/* Desktop Navigation */}
                <nav className="hidden md:block">
                    <ul className="flex items-center gap-2">
                        {links.map((link) => (
                            <li key={link.href}>
                                <a
                                    href={link.href}
                                    className={
                                        pathname === link.href ? "nav-link-active" : "nav-link"
                                    }
                                >
                                    {link.label}
                                </a>
                            </li>
                        ))}
                    </ul>
                </nav>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden"
                    onClick={() => setIsOpen(!isOpen)}
                    aria-label="Toggle Menu"
                >
                    {isOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </div>

            {/* Mobile Dropdown */}
            {isOpen && (
                <nav className="md:hidden bg-black/80 backdrop-blur-md px-6 py-4">
                    <ul className="flex flex-col gap-2 text-white">
                        <li>
                            <a
                                href="/"
                                className="px-3 py-2 rounded-md hover:bg-gray-700 transition-colors"
                                onClick={() => setIsOpen(false)}
                            >
                                Home
                            </a>
                        </li>
                        <li>
                            <a
                                href="#about"
                                className="px-3 py-2 rounded-md hover:bg-gray-700 transition-colors"
                                onClick={() => setIsOpen(false)}
                            >
                                About
                            </a>
                        </li>
                        <li>
                            <a
                                href="#resume"
                                className="px-3 py-2 rounded-md hover:bg-gray-700 transition-colors"
                                onClick={() => setIsOpen(false)}
                            >
                                Resume
                            </a>
                        </li>
                        <li>
                            <a
                                href="#projects"
                                className="px-3 py-2 rounded-md hover:bg-gray-700 transition-colors"
                                onClick={() => setIsOpen(false)}
                            >
                                Portfolio
                            </a>
                        </li>
                        <li>
                            <a
                                href="#contact"
                                className="px-3 py-2 rounded-md hover:bg-gray-700 transition-colors"
                                onClick={() => setIsOpen(false)}
                            >
                                Contact
                            </a>
                        </li>
                    </ul>
                </nav>
            )}
        </header>
    );
}
