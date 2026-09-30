"use client";
import React from 'react';
import SectionTitle from '../common/SectionTitle';
import { yogaPoses } from '@/data/yogaPoses';
import { getCloudinaryUrl } from '@/lib/cloudinary';
import { motion } from 'framer-motion';

export default function YogaPoses() {
  return (
    <section id="yoga" className="py-20 bg-[#F6F1E7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle 
          title="Explore Yoga Postures" 
          subtitle="Discover fundamental poses to build your practice."
        />
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {yogaPoses.map((pose) => (
            <motion.div 
              key={pose.id} 
              whileHover={{ y: -10 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300"
            >
              <div className="relative h-64 w-full bg-[#DDE5D3]">
                <img 
                  src={getCloudinaryUrl(pose.image)} 
                  alt={pose.name}
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <div className="p-6">
                <h3 className="font-serif text-xl font-bold text-[#354A3E] mb-2">{pose.name}</h3>
                <p className="text-[#5B7A65] mb-4">{pose.benefit}</p>
                <button className="text-[#354A3E] font-medium hover:text-[#C9A24B] transition-colors flex items-center gap-2">
                  Explore Pose 
                  <motion.svg 
                    whileHover={{ x: 5 }}
                    className="w-4 h-4" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </motion.svg>
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
