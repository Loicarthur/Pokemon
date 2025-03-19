'use client';

import Link from 'next/link';
import { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <span className="text-xl font-bold text-gray-800">PokéApp</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            <Link href="/" className="text-gray-600 hover:text-gray-900">
              Accueil
            </Link>
            <Link href="/pokemons" className="text-gray-600 hover:text-gray-900">
              Pokémons
            </Link>
            <Link href="/types" className="text-gray-600 hover:text-gray-900">
              Types
            </Link>
            <Link href="/about" className="text-gray-600 hover:text-gray-900">
              À propos
            </Link>
          </div>

          {/* Mobile Navigation Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-600 hover:text-gray-900 focus:outline-none"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isOpen ? (
                  <path d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <Link
                href="/"
                className="block px-3 py-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-100"
              >
                Accueil
              </Link>
              <Link
                href="/pokemons"
                className="block px-3 py-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-100"
              >
                Pokémons
              </Link>
              <Link
                href="/types"
                className="block px-3 py-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-100"
              >
                Types
              </Link>
              <Link
                href="/about"
                className="block px-3 py-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-100"
              >
                À propos
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
