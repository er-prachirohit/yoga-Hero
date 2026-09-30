import React from 'react';
import SectionTitle from '../common/SectionTitle';
import { testimonials } from '@/data/testimonials';

export default function Testimonials() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle 
          title="Student Experiences" 
          subtitle="Hear what our community has to say about their journey."
        />
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="bg-[#F6F1E7] p-8 rounded-2xl relative">
              <div className="text-6xl text-[#DDE5D3] absolute top-4 left-4 font-serif leading-none opacity-50">"</div>
              <p className="text-[#354A3E] relative z-10 italic mb-6">
                {testimonial.text}
              </p>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-[#C9A24B] flex items-center justify-center text-white font-bold">
                  {testimonial.name.charAt(0)}
                </div>
                <h4 className="font-bold text-[#354A3E]">{testimonial.name}</h4>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
