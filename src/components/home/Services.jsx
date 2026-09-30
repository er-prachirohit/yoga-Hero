import React from 'react';
import SectionTitle from '../common/SectionTitle';
import { services } from '@/data/services';

export default function Services() {
  return (
    <section id="services" className="py-20 bg-[#354A3E] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <h2 className="font-serif text-3xl md:text-4xl font-bold mb-3 text-[#F6F1E7]">
            Our Services & Packages
          </h2>
          <p className="text-[#DDE5D3] text-lg max-w-2xl mx-auto">
            Choose the perfect plan tailored to your wellness journey.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service) => (
            <div key={service.id} className="bg-[#25352c] rounded-2xl p-8 border border-[#5B7A65] flex flex-col h-full">
              <h3 className="font-serif text-2xl font-bold mb-2 text-[#C9A24B]">{service.title}</h3>
              <p className="text-[#DDE5D3] mb-6 flex-grow">{service.description}</p>
              
              <div className="border-t border-[#5B7A65] pt-6 mb-8">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-[#DDE5D3]">Duration</span>
                  <span className="font-semibold">{service.duration}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-[#DDE5D3]">Price</span>
                  <span className="font-semibold text-xl">{service.price}</span>
                </div>
              </div>
              
              <button className="w-full py-3 bg-[#F6F1E7] text-[#354A3E] rounded-full font-medium hover:bg-[#DDE5D3] transition-colors">
                Select Package
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
