"use client";
import React from 'react';
import SectionTitle from '../common/SectionTitle';
import { motion } from 'framer-motion';

export default function Benefits() {
  const benefits = [
    { title: "Flexibility", desc: "Increase your range of motion and reduce stiffness." },
    { title: "Strength", desc: "Build lean muscle and core stability." },
    { title: "Balance", desc: "Improve physical coordination and mental focus." },
    { title: "Focus", desc: "Sharpen your mind through breath awareness." },
    { title: "Stress Relief", desc: "Release tension and calm your nervous system." },
    { title: "Better Mobility", desc: "Move freely and comfortably in daily life." },
  ];

  return (
    <section id="benefits" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle 
          title="The Benefits of Yoga" 
          subtitle="Transform your body and mind with consistent practice."
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, index) => (
            <motion.div 
              key={index} 
              whileHover={{ scale: 1.02 }}
              transition={{ type: "tween", ease: "easeOut", duration: 0.3 }}
              className="p-8 rounded-2xl bg-[#F6F1E7] border border-[#DDE5D3] hover:border-[#C9A24B] transition-colors"
            >
              <div className="w-12 h-12 bg-[#354A3E] text-[#F6F1E7] rounded-full flex items-center justify-center mb-6">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="font-serif text-xl font-bold text-[#354A3E] mb-3">{benefit.title}</h3>
              <p className="text-[#5B7A65]">{benefit.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
