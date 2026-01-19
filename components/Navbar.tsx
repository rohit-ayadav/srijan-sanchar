// components/Navbar.tsx
'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-200' 
          : 'bg-white border-b border-gray-100'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo with icon */}
          <Link 
            href="/"
            className="flex items-center gap-3 group"
          >
            {/* Logo Icon */}
            <div className="w-10 h-10 bg-linear-to-br from-emerald-300 to-emerald-200 rounded-xl flex items-center justify-center shadow-md group-hover:shadow-lg transition-all group-hover:scale-105">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"/>
              </svg>
            </div>
            
            {/* Logo Text */}
            <span className="text-2xl font-bold bg-linear-to-r from-emerald-300 to-emerald-200 bg-clip-text text-transparent">
              Story Portal
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            
            {/* Nav Links */}
            <Link 
              href="/explore"
              className="text-gray-700 hover:text-emerald-300 font-medium transition-colors relative group"
            >
              Explore
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-emerald-300 group-hover:w-full transition-all duration-300"></span>
            </Link>

            {/* CTA Button */}
            <Link 
              href="/write"
              className="group relative inline-flex items-center gap-2 bg-linear-to-r from-emerald-300 to-emerald-200 hover:from-orange-700 hover:to-emerald-300 text-white font-semibold px-6 py-3 rounded-xl shadow-lg hover:shadow-xl transition-all hover:scale-105"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"/>
              </svg>
              Write Story
              <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6"/>
              </svg>
            </Link>

          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
            aria-label="Toggle menu"
          >
            <svg 
              className="w-6 h-6 text-gray-700" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12"/>
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16"/>
              )}
            </svg>
          </button>

        </div>

        {/* Mobile Menu */}
        <div 
          className={`md:hidden overflow-hidden transition-all duration-300 ${
            isOpen ? 'max-h-96 pb-6' : 'max-h-0'
          }`}
        >
          <div className="space-y-3 pt-4 border-t border-gray-100">
            <Link 
              href="/explore"
              onClick={() => setIsOpen(false)}
              className="block px-4 py-3 text-gray-700 hover:bg-orange-50 hover:text-emerald-300 rounded-lg font-medium transition-colors"
            >
              Explore Stories
            </Link>

            <Link 
              href="/about"
              onClick={() => setIsOpen(false)}
              className="block px-4 py-3 text-gray-700 hover:bg-orange-50 hover:text-emerald-300 rounded-lg font-medium transition-colors"
            >
              About Us
            </Link>

            <Link 
              href="/write"
              onClick={() => setIsOpen(false)}
              className="block bg-linear-to-r from-emerald-300 to-emerald-200 text-white font-semibold px-4 py-3 rounded-lg text-center shadow-md"
            >
              ✍️ Write Story
            </Link>
          </div>
        </div>

      </div>
    </nav>
  );
}
