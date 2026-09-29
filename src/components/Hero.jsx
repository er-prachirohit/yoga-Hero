import React, { useEffect, useState } from 'react';

export default function Hero() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  return (
    <section className="relative w-full h-screen overflow-hidden bg-gradient-to-b from-[#DDE5D3] to-[#F6F1E7]">
      
      {/* Noise Texture Overlay */}
      <div className="absolute inset-0 pointer-events-none opacity-40 mix-blend-multiply z-0">
        <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
          <filter id="noiseFilter">
            <feTurbulence type="fractalNoise" baseFrequency="0.85" numOctaves="3" stitchTiles="stitch" />
          </filter>
          <rect width="100%" height="100%" filter="url(#noiseFilter)" />
        </svg>
      </div>

      {/* Central Glow Blob */}
      <div className="absolute top-[60%] left-[48.5%] w-[70vmin] h-[70vmin] bg-[#FFE3D3] rounded-full blur-[80px] opacity-60 -translate-x-1/2 -translate-y-1/2 pointer-events-none z-0"></div>

      {/* Custom Styles for Animation */}
      <style>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translate(-50%, 30px); }
          to { opacity: 1; transform: translate(-50%, 0); }
        }
        @keyframes spinSlow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}</style>

      {/* Massive Mandala Image (Wrapper with static vertical fade) */}
      <div 
        className="absolute z-0 pointer-events-none"
        style={{ 
          bottom: '40%',
          left: '48.5%',
          transform: 'translate(-50%, 50%)',
          width: '120vh',
          height: '120vh',
          WebkitMaskImage: 'linear-gradient(to bottom, black 0%, black 50%, transparent 95%)',
          maskImage: 'linear-gradient(to bottom, black 0%, black 50%, transparent 95%)'
        }}
      >
        <img 
          src="/mandala_design.png"
          alt="Mandala Background"
          className="w-full h-full object-contain opacity-80"
          style={{ 
            animation: mounted ? 'spinSlow 120s linear infinite' : 'none',
            WebkitMaskImage: 'radial-gradient(circle at center, transparent 18vmin, black 18.5vmin)',
            maskImage: 'radial-gradient(circle at center, transparent 18vmin, black 18.5vmin)'
          }}
        />
      </div>

      {/* Inner Dotted Circle */}
      <div 
        className="absolute z-0 pointer-events-none"
        style={{ 
          bottom: '40%',
          left: '48.5%',
          transform: 'translate(-50%, 50%)',
          width: '55vmin',
          height: '55vmin'
        }}
      >
        <div 
          className="w-full h-full border-[1.5px] border-dotted border-[#C9A24B] rounded-full opacity-60"
          style={{ 
            animation: mounted ? 'spinSlow 60s linear infinite reverse' : 'none'
          }}
        ></div>
      </div>

      {/* YOGA Text with Gradient Fill and Stroke using SVG */}
      <div
        className="absolute bottom-[14%] left-[50%] w-full h-[50vmin] flex justify-center items-center z-10 pointer-events-none"
        style={{
          animation: mounted ? 'fadeUp 1.5s ease-out forwards' : 'none',
          opacity: 0,
          transform: 'translateX(-50%)',
        }}
      >
        <svg width="100%" height="100%" viewBox="0 0 1000 400" className="overflow-visible">
          <defs>
            <linearGradient id="strokeGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#5B7A65" />
              <stop offset="100%" stopColor="#C9A24B" />
            </linearGradient>
          </defs>
          <text
            x="50%"
            y="65%"
            dominantBaseline="middle"
            textAnchor="middle"
            fill="url(#strokeGradient)"
            stroke="url(#strokeGradient)"
            strokeWidth="1.5"
            letterSpacing="0.15em"
            style={{ fontFamily: '"Cormorant Garamond", serif', fontSize: '280px', fontWeight: '700' }}
          >
            YOGA
          </text>
        </svg>
      </div>

      {/* Tagline */}
      <div
        className="absolute bottom-[4%] left-[50%] w-full text-center z-10 pointer-events-none"
        style={{
          transform: 'translateX(-50%)',
          animation: mounted ? 'fadeUp 1.2s ease-out 0.8s forwards' : 'none',
          opacity: 0,
        }}
      >
        <p className="font-serif italic text-xl md:text-2xl lg:text-3xl text-[#5B7A65] tracking-[0.2em] drop-shadow-sm">
          Breathe. Balance. Be.
        </p>
      </div>

      {/* Meditation Pose (Center) */}
      <img
        src="/center.png"
        alt="Meditation Pose"
        className="absolute bottom-[5%] left-[50%] h-[65vmin] object-contain z-20 drop-shadow-2xl"
        style={{
          transform: 'translateX(-50%)',
          animation: mounted ? 'fadeUp 1.2s cubic-bezier(0.2, 0.8, 0.2, 1) 0.5s forwards' : 'none',
          opacity: 0,
        }}
      />
    </section>
  );
}