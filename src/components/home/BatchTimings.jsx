import React from 'react';
import SectionTitle from '../common/SectionTitle';

export default function BatchTimings() {
  return (
    <section id="timings" className="py-20 bg-[#F6F1E7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle 
          title="Batch Timings" 
          subtitle="Find a session that fits perfectly into your schedule."
        />
        
        <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-lg overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-[#DDE5D3]">
            <div className="p-10 text-center">
              <h3 className="font-serif text-2xl font-bold text-[#354A3E] mb-2">Morning Session</h3>
              <p className="text-[#5B7A65] mb-6">Start your day with energy and focus.</p>
              <div className="text-4xl font-bold text-[#C9A24B] mb-8">6:00 AM</div>
              <button className="px-6 py-2 bg-transparent border-2 border-[#354A3E] text-[#354A3E] rounded-full font-medium hover:bg-[#354A3E] hover:text-white transition-colors">
                Book Morning
              </button>
            </div>
            
            <div className="p-10 text-center">
              <h3 className="font-serif text-2xl font-bold text-[#354A3E] mb-2">Evening Session</h3>
              <p className="text-[#5B7A65] mb-6">Unwind and relax after a long day.</p>
              <div className="text-4xl font-bold text-[#C9A24B] mb-8">7:00 PM</div>
              <button className="px-6 py-2 bg-transparent border-2 border-[#354A3E] text-[#354A3E] rounded-full font-medium hover:bg-[#354A3E] hover:text-white transition-colors">
                Book Evening
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
