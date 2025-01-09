// src/components/layout/Navigation.tsx
import React from 'react';

interface NavigationProps {
  activeSection: string;
  onSectionChange: (section: string) => void;
}

export const Navigation: React.FC<NavigationProps> = ({ activeSection, onSectionChange }) => (
  <nav className="flex border-b border-gray-200 mt-6">
    {['discover', 'wishlists', 'analytics'].map((section) => (
      <button
        key={section}
        onClick={() => onSectionChange(section)}
        className={`
          px-4 py-2 -mb-px text-sm font-medium transition-colors
          ${activeSection === section
            ? 'border-b-2 border-blue-500 text-blue-600'
            : 'text-gray-500 hover:text-gray-700 border-b-2 border-transparent'
          }
        `}
      >
        {section.charAt(0).toUpperCase() + section.slice(1)}
      </button>
    ))}
  </nav>
);