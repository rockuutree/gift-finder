// src/components/search/GlobalSearch.tsx
import React from 'react';
import { Search } from 'lucide-react';

interface GlobalSearchProps {
  value: string;
  onChange: (value: string) => void;
}

export const GlobalSearch: React.FC<GlobalSearchProps> = ({ value, onChange }) => (
  <div className="relative">
    <div className="relative">
      <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
      <input
        type="text"
        placeholder="What gift are you looking for?"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full pl-12 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
      />
    </div>
  </div>
);