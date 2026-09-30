import React from 'react';

export default function SectionTitle({ title, subtitle, centered = true }) {
  return (
    <div className={`mb-12 ${centered ? 'text-center' : 'text-left'}`}>
      <h2 className="font-serif text-3xl md:text-4xl font-bold text-[#354A3E] mb-3">
        {title}
      </h2>
      {subtitle && (
        <p className="text-[#5B7A65] text-lg max-w-2xl mx-auto">
          {subtitle}
        </p>
      )}
    </div>
  );
}
