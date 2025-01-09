// src/components/layout/Navigation.tsx
import React from 'react';

interface NavigationProps {
  activeSection: string;
  onSectionChange: (section: string) => void;
}

export const Navigation: React.FC<NavigationProps> = ({ activeSection, onSectionChange }) => (
  <nav className="flex space-x-8 mb-12">
    {['discover', 'wishlists', 'analytics'].map((section) => (
      <button
        key={section}
        onClick={() => onSectionChange(section)}
        className={`btn-base ${
          activeSection === section
            ? 'border-b-2 border-blue-500 text-white'
            : 'border-b-2 border-transparent text-gray-500 hover:text-gray-300'
        }`}
      >
        {section.charAt(0).toUpperCase() + section.slice(1)}
      </button>
    ))}
  </nav>
);