"use client";
import React, { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY && window.scrollY > 80) {
        setIsVisible(false); // Scrolling down
      } else {
        setIsVisible(true); // Scrolling up
      }
      setLastScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  return (
    <nav className={`fixed w-full z-50 bg-transparent transition-transform duration-300 ${isVisible ? 'translate-y-0' : '-translate-y-full'}`}>
      <div className="w-full mx-auto px-6 sm:px-10 lg:px-16">
        <div className="flex justify-between items-center h-24">
          <div className="flex-shrink-0">
            <Link href="/" className="font-serif text-2xl font-bold text-[#354A3E]">
              Escape in Yoga
            </Link>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="#about" className="font-serif text-xl font-bold tracking-wide text-[#4A6252] hover:text-[#C9A24B] transition-colors">About</Link>
            <Link href="#yoga" className="font-serif text-xl font-bold tracking-wide text-[#4A6252] hover:text-[#C9A24B] transition-colors">Yoga</Link>
            <Link href="#benefits" className="font-serif text-xl font-bold tracking-wide text-[#4A6252] hover:text-[#C9A24B] transition-colors">Benefits</Link>
            <Link href="#services" className="font-serif text-xl font-bold tracking-wide text-[#4A6252] hover:text-[#C9A24B] transition-colors">Services</Link>
            <Link href="#timings" className="font-serif text-xl font-bold tracking-wide text-[#4A6252] hover:text-[#C9A24B] transition-colors">Timings</Link>
            <button className="bg-[#354A3E] text-white px-5 py-2 rounded-full font-serif text-lg font-bold hover:bg-[#25352c] transition-colors">
              Book Your Session
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="text-[#354A3E] hover:text-[#25352c] focus:outline-none"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-[#F6F1E7] border-t border-[#DDE5D3]">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 flex flex-col">
            <Link href="#about" className="block px-3 py-2 font-serif text-xl font-bold tracking-wide text-[#4A6252] hover:bg-[#DDE5D3] rounded-md">About</Link>
            <Link href="#yoga" className="block px-3 py-2 font-serif text-xl font-bold tracking-wide text-[#4A6252] hover:bg-[#DDE5D3] rounded-md">Yoga</Link>
            <Link href="#benefits" className="block px-3 py-2 font-serif text-xl font-bold tracking-wide text-[#4A6252] hover:bg-[#DDE5D3] rounded-md">Benefits</Link>
            <Link href="#services" className="block px-3 py-2 font-serif text-xl font-bold tracking-wide text-[#4A6252] hover:bg-[#DDE5D3] rounded-md">Services</Link>
            <Link href="#timings" className="block px-3 py-2 font-serif text-xl font-bold tracking-wide text-[#4A6252] hover:bg-[#DDE5D3] rounded-md">Timings</Link>
            <div className="px-3 py-2">
              <button className="w-full bg-[#354A3E] text-white px-5 py-2 rounded-full font-serif text-xl font-bold hover:bg-[#25352c] transition-colors">
                Book Your Session
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
