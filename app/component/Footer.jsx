"use client";
import Link from "next/link";
import { Facebook, Twitter, Linkedin, Github, Instagram } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-10 mt-10">
      <div className="container mx-auto px-6 md:px-12 grid md:grid-cols-3 gap-8">
        
        {/* Company Info */}
        <div className="flex flex-col space-y-3">
        <img src="/Images/image.png" alt="logo" className="h-12 w-15 transition-all duration-300 ease-in-out hover:scale-105" />
          <h2 className="text-2xl font-bold">EMS</h2>
          <p className="text-gray-400">Efficiently manage your workforce with our modern Employee Management System.</p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-2xl font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2 text-gray-300">
            <li><Link href="/" className="hover:text-orange-500 transition-all">Home</Link></li>
            <li><Link href="/about" className="hover:text-orange-500 transition-all">About</Link></li>
            <li><Link href="/contact" className="hover:text-orange-500 transition-all">Contact</Link></li>
            <li><Link href="/pricing" className="hover:text-orange-500 transition-all">Pricing</Link></li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-2xl font-semibold mb-3">Follow Us</h3>
          <div className="flex space-x-4">
            <Link href="https://facebook.com" target="_blank">
              <Facebook className=" transition-all hover:animate-pulse" fill="blue" color="blue" size={30} />
            </Link>
            <Link href="" target="_blank">
              <Twitter className="hover:text-blue-500 transition-all hover:animate-pulse" size={30} />
            </Link>
            <Link href="https://linkedin.com" target="_blank">
              <Linkedin className=" transition-all hover:animate-pulse" color="blue" fill="blue" size={30} />
            </Link>
            <Link href="https://linkedin.com" target="_blank">
              <Instagram className="transition-all hover:animate-pulse" color="red" size={30} />
            </Link>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="mt-8 text-center text-gray-300 text-sm border-t border-gray-700 pt-4">
        &copy; EMS. All Rights Reserved.
      </div>
    </footer>
  );
}
