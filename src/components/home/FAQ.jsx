"use client";
import React, { useState } from 'react';
import SectionTitle from '../common/SectionTitle';

const faqs = [
  {
    question: "What is Escape in Yoga?",
    answer: "Escape in Yoga is a premium wellness brand offering guided yoga sessions focused on mindfulness, strength, and overall well-being. We cater to all levels of experience."
  },
  {
    question: "What should I bring to a session?",
    answer: "Please bring a yoga mat, a water bottle, and a towel. Wear comfortable, breathable clothing that allows for a full range of motion."
  },
  {
    question: "What are the available sessions?",
    answer: "We currently offer specialized morning and evening batches. We provide beginner, advanced flow, and mindfulness meditation sessions."
  },
  {
    question: "How can I book a session?",
    answer: "You can book a session by clicking any of the 'Book Your Session' buttons on our website and following the prompts to select your preferred time and package."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 bg-[#F6F1E7]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle 
          title="Frequently Asked Questions" 
          subtitle="Find answers to common questions about our sessions."
        />
        
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-white rounded-xl shadow-sm border border-[#DDE5D3] overflow-hidden">
              <button 
                className="w-full px-6 py-4 text-left flex justify-between items-center focus:outline-none"
                onClick={() => toggleFaq(index)}
              >
                <span className="font-medium text-[#354A3E]">{faq.question}</span>
                <svg 
                  className={`w-5 h-5 text-[#5B7A65] transform transition-transform duration-200 ${openIndex === index ? 'rotate-180' : ''}`} 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              <div 
                className={`px-6 overflow-hidden transition-all duration-300 ease-in-out ${openIndex === index ? 'max-h-40 py-4 border-t border-[#DDE5D3]' : 'max-h-0'}`}
              >
                <p className="text-[#5B7A65]">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
