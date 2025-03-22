"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-white shadow-sm fixed w-full z-50">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex-shrink-0">
          <Image
            src="/images/logo.png"
            alt="Queen Dental Logo"
            width={200}
            height={50}
            className="h-12 w-auto"
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-6">
          <Link href="/" className="text-gray-700 hover:text-primary-500 font-medium">
            Home
          </Link>
          <Link href="/turismo-dentale" className="text-gray-700 hover:text-primary-500 font-medium">
            Turismo Dentale
          </Link>
          <Link href="/servizi/implantologia" className="text-gray-700 hover:text-primary-500 font-medium">
            Implantologia
          </Link>
          <Link href="/servizi/chirurgia" className="text-gray-700 hover:text-primary-500 font-medium">
            Chirurgia
          </Link>
          <Link href="/servizi/ortopedia" className="text-gray-700 hover:text-primary-500 font-medium">
            Ortopedia
          </Link>
          <Link href="/servizi/cosmetica" className="text-gray-700 hover:text-primary-500 font-medium">
            Cosmetica
          </Link>
          <Link href="/servizi" className="text-primary-500 hover:text-primary-600 font-medium">
            Più Servizi
          </Link>
          <Link href="/our-staff" className="text-gray-700 hover:text-primary-500 font-medium">
            Nostro Staff
          </Link>
          <Link href="/prezzi" className="text-gray-700 hover:text-primary-500 font-medium">
            Prezzi
          </Link>
          <Link href="/chi-siamo" className="text-gray-700 hover:text-primary-500 font-medium">
            Chi Siamo
          </Link>

          {/* Language Selector */}
          <div className="relative group">
            <button className="flex items-center text-gray-700 hover:text-primary-500 font-medium">
              <Image src="/images/italian-flag.png" alt="Italian" width={16} height={16} className="mr-2" />
              Italian
            </button>
            <div className="hidden group-hover:block absolute mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-40">
              <Link href="/en" className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                <Image src="/images/english-flag.png" alt="English" width={16} height={16} className="mr-2" />
                English
              </Link>
              <Link href="/al" className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                <Image src="/images/albanian-flag.png" alt="Albanian" width={16} height={16} className="mr-2" />
                Albanian
              </Link>
            </div>
          </div>
        </nav>

        {/* Appointment Button */}
        <Button className="hidden lg:flex bg-primary-500 hover:bg-primary-600 text-white rounded-md">
          Appuntamenti
        </Button>

        {/* Mobile Menu Button */}
        <button className="lg:hidden" onClick={toggleMenu}>
          {isMenuOpen ? (
            <X className="h-6 w-6 text-gray-700" />
          ) : (
            <Menu className="h-6 w-6 text-gray-700" />
          )}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-200 py-2">
          <div className="container mx-auto px-4 flex flex-col space-y-2">
            <Link
              href="/"
              className="py-2 text-gray-700 hover:text-primary-500 font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/turismo-dentale"
              className="py-2 text-gray-700 hover:text-primary-500 font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Turismo Dentale
            </Link>
            <Link
              href="/servizi/implantologia"
              className="py-2 text-gray-700 hover:text-primary-500 font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Implantologia
            </Link>
            <Link
              href="/servizi/chirurgia"
              className="py-2 text-gray-700 hover:text-primary-500 font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Chirurgia
            </Link>
            <Link
              href="/servizi/ortopedia"
              className="py-2 text-gray-700 hover:text-primary-500 font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Ortopedia
            </Link>
            <Link
              href="/servizi/cosmetica"
              className="py-2 text-gray-700 hover:text-primary-500 font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Cosmetica
            </Link>
            <Link
              href="/servizi"
              className="py-2 text-primary-500 hover:text-primary-600 font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Più Servizi
            </Link>
            <Link
              href="/our-staff"
              className="py-2 text-gray-700 hover:text-primary-500 font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Nostro Staff
            </Link>
            <Link
              href="/prezzi"
              className="py-2 text-gray-700 hover:text-primary-500 font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Prezzi
            </Link>
            <Link
              href="/chi-siamo"
              className="py-2 text-gray-700 hover:text-primary-500 font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Chi Siamo
            </Link>

            <div className="py-2 space-y-2">
              <div className="font-medium text-gray-700">Language:</div>
              <div className="flex space-x-4 pl-2">
                <Link href="/en" className="flex items-center text-sm text-gray-700 hover:text-primary-500">
                  <Image src="/images/english-flag.png" alt="English" width={16} height={16} className="mr-1" />
                  English
                </Link>
                <Link href="/al" className="flex items-center text-sm text-gray-700 hover:text-primary-500">
                  <Image src="/images/albanian-flag.png" alt="Albanian" width={16} height={16} className="mr-1" />
                  Albanian
                </Link>
              </div>
            </div>

            <Button
              className="w-full bg-primary-500 hover:bg-primary-600 text-white rounded-md mt-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Appuntamenti
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
