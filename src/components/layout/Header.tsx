// src/components/layout/Header.tsx
import React from 'react';

export const Header: React.FC = () => (
  <div className="relative bg-gray-900">
    {/* Wave shape divider */}
    <div className="absolute bottom-0 left-0 w-full overflow-hidden">
      <svg 
        className="relative block w-full h-[100px]" 
        viewBox="0 0 1200 120" 
        preserveAspectRatio="none"
      >
        <path 
          d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
          className="fill-gray-900"
        ></path>
      </svg>
    </div>
    
    {/* Content */}
    <div className="relative z-10 px-6 pt-16 pb-32 max-w-7xl mx-auto">
      <h1 className="text-4xl md:text-5xl font-light tracking-tight text-white mb-4">
        Gift Finder
      </h1>
      <p className="text-lg text-gray-300 font-light max-w-2xl">
        Discover perfect gifts through AI-powered recommendations and price comparisons
      </p>
    </div>
  </div>
);