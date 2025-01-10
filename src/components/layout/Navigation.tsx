// src/components/layout/Navigation.tsx
import React from 'react';
import { Search, List } from 'lucide-react';

interface NavigationProps {
  activeSection: string;
  onSectionChange: (section: string) => void;
}

export const Navigation: React.FC<NavigationProps> = ({ 
  activeSection, 
  onSectionChange 
}) => (
  <nav className="flex items-center space-x-4 mb-8">
    <button
      onClick={() => onSectionChange('search')}
      className={`
        flex items-center px-4 py-2 rounded-lg transition-colors
        ${activeSection === 'search'
          ? 'bg-blue-600 text-white'
          : 'text-gray-400 hover:text-gray-300'
        }
      `}
    >
      <Search className="w-5 h-5 mr-2" />
      <span>Search</span>
    </button>
    
    <button
      onClick={() => onSectionChange('wishlists')}
      className={`
        flex items-center px-4 py-2 rounded-lg transition-colors
        ${activeSection === 'wishlists'
          ? 'bg-blue-600 text-white'
          : 'text-gray-400 hover:text-gray-300'
        }
      `}
    >
      <List className="w-5 h-5 mr-2" />
      <span>Wishlists</span>
    </button>
  </nav>
);