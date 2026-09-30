import React from 'react';

export default function ContactCTA() {
  return (
    <section className="py-24 bg-[#354A3E] relative overflow-hidden">
      {/* Decorative background circle */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-[#5B7A65] rounded-full opacity-20 pointer-events-none"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-[#C9A24B] rounded-full opacity-20 pointer-events-none"></div>
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <h2 className="font-serif text-4xl md:text-5xl font-bold text-white mb-6">
          Ready to Begin Your Yoga Journey?
        </h2>
        <p className="text-xl text-[#DDE5D3] mb-10 max-w-2xl mx-auto">
          Step onto the mat and discover a stronger, calmer, and more balanced version of yourself.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="px-8 py-4 bg-[#F6F1E7] text-[#354A3E] rounded-full font-bold text-lg hover:bg-white transition-colors shadow-xl">
            Book Your Session
          </button>
          <button className="px-8 py-4 bg-transparent border-2 border-[#DDE5D3] text-[#DDE5D3] rounded-full font-bold text-lg hover:bg-[#DDE5D3] hover:text-[#354A3E] transition-colors">
            Contact Us
          </button>
        </div>
      </div>
    </section>
  );
}
