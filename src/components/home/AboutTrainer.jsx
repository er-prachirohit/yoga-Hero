import React from 'react';
import SectionTitle from '../common/SectionTitle';
import { getCloudinaryUrl } from '@/lib/cloudinary';

export default function AboutTrainer() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="w-full md:w-1/2">
            <div className="relative w-full aspect-square rounded-2xl overflow-hidden shadow-xl">
              <div className="absolute inset-0 bg-[#DDE5D3] mix-blend-multiply opacity-20 z-10"></div>
              <img 
                src={getCloudinaryUrl('_DSC5224.JPG')} 
                alt="Avani Jain - Yoga Trainer"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <div className="w-full md:w-1/2">
            <h3 className="font-serif text-3xl font-bold text-[#354A3E] mb-4">Meet Avani Jain</h3>
            <p className="text-[#5B7A65] text-lg mb-6 leading-relaxed">
              Hello, I am Avani Jain. Welcome to Escape in Yoga. My mission is to help you discover the transformative power of mindful movement. Through carefully crafted yoga sessions, I guide my students to build strength, enhance flexibility, and find inner peace.
            </p>
            <p className="text-[#5B7A65] text-lg mb-8 leading-relaxed">
              Whether you are taking your first step onto the mat or looking to deepen your existing practice, I am here to support your journey towards holistic wellness.
            </p>
            <button className="px-8 py-3 bg-[#354A3E] text-white rounded-full font-medium hover:bg-[#25352c] transition-colors shadow-lg">
              Read My Full Story
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
