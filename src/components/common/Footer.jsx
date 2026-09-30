import React from 'react';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-[#354A3E] text-[#DDE5D3] py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <h3 className="font-serif text-2xl font-bold text-white mb-4">Escape in Yoga</h3>
            <p className="mb-4 max-w-sm text-sm">
              Discover peace, strength, and mindfulness through guided yoga practice. Join us on a journey to wellness.
            </p>
          </div>
          <div>
            <h4 className="font-bold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="#home" className="hover:text-white transition-colors">Home</Link></li>
              <li><Link href="#about" className="hover:text-white transition-colors">About Trainer</Link></li>
              <li><Link href="#services" className="hover:text-white transition-colors">Services</Link></li>
              <li><Link href="#timings" className="hover:text-white transition-colors">Timings</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-white mb-4">Contact</h4>
            <ul className="space-y-2 text-sm">
              <li>Email: hello@escapeinyoga.demo</li>
              <li>Phone: +1 (555) 123-4567</li>
              <li>Location: Wellness Studio, CA</li>
            </ul>
            <div className="mt-4 flex space-x-4">
              <span className="w-8 h-8 rounded-full bg-[#5B7A65] flex items-center justify-center cursor-pointer hover:bg-white hover:text-[#354A3E] transition-colors">IG</span>
              <span className="w-8 h-8 rounded-full bg-[#5B7A65] flex items-center justify-center cursor-pointer hover:bg-white hover:text-[#354A3E] transition-colors">FB</span>
            </div>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-[#5B7A65] text-center text-sm">
          <p>&copy; {new Date().getFullYear()} Escape in Yoga. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
