"use client";
import { useState } from "react";
import Link from "next/link";
import { CircleUser, Contact, Menu, UserPlus, X, Info, HomeIcon } from "lucide-react";

const links = [
    { href: "/", icon:<HomeIcon size={25} className="mx-2" color="yellow"/>, name: "Home" },
    { href: "/about", icon: <Info size={25} className="mx-2" color="yellow" />, name: "About" },
    { href: "/contact", icon: <Contact size={25} className="mx-2" color="yellow" />, name: "Contact" },
    { href: "/login", icon: <CircleUser size={25} className="mx-2" color="yellow" />, name: "Login" },
    { href: "/register", icon: <UserPlus size={25} className="mx-2" color="yellow" />, name: "Register" }
];

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header className="bg-gradient-to-r from-gray-900 to-blue-800 text-white shadow-md fixed top-0 w-full z-10">
            <div className="container mx-auto flex justify-between items-center p-4">
                {/* Logo */}
                <Link href="/" className="text-2xl font-bold flex items-center gap-4">
                    <img src="/Images/image.png" alt="logo" className="h-12 w-15 transition-all duration-300 ease-in-out hover:scale-105" />
                    EMS
                </Link>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex space-x-6 font-bold text-lg">
                    {links.map((item) => (
                        <Link 
                            key={item.href} 
                            href={item.href} 
                            className="flex items-center transition-all duration-300 ease-in-out hover:text-gray-300 hover:scale-105"
                        >
                            {item.icon}{item.name}
                        </Link>
                    ))}
                </nav>

                {/* Mobile Menu Button */}
                <div className="md:hidden flex items-center">
                    <Link href="/login">
                        <UserPlus size={20} className="mr-4 hover:scale-110 transition-all duration-300 ease-in-out" />
                    </Link>
                    <button onClick={() => setIsOpen(!isOpen)} className="transition-all duration-300 ease-in-out hover:scale-110">
                        {isOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu with Smooth Slide Animation */}
            <div className={`fixed top-0 left-0 w-full h-full z-10 transition-all duration-500 ease-in-out ${isOpen ? "opacity-100 visible" : "opacity-0 invisible"}`}>
                <nav className={`fixed top-0 right-0 w-60
                     backdrop-blur-sm bg-black p-6 shadow-lg transform transition-transform duration-500 ease-in-out ${isOpen ? "translate-x-0" : "translate-x-full"}`}>
                    <button onClick={() => setIsOpen(false)} className="absolute top-4 right-4">
                        <X size={24} className="hover:scale-110 transition-all duration-300 ease-in-out" />
                    </button>
                    <ul className="mt-10 space-y-4">
                        {links.map((item) => (
                            <li key={item.href}>
                                <Link 
                                    href={item.href} 
                                    className="block text-white text-lg font-semibold hover:text-gray-300 transition-all duration-300 ease-in-out transform hover:scale-105"
                                    onClick={() => setIsOpen(false)}
                                >
                                    {item.icon}{item.name}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;
