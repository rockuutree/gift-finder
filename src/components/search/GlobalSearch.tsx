// src/components/search/GlobalSearch.tsx
import React from 'react';
import { Search } from 'lucide-react';

interface GlobalSearchProps {
  value: string;
  onChange: (value: string) => void;
}

export const GlobalSearch: React.FC<GlobalSearchProps> = ({ value, onChange }) => (
  <div className="card-base shadow-xl mb-12">
    <div className="relative">
      <input
        type="text"
        placeholder="What gift are you looking for?"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="input-base px-6 py-4"
      />
      <Search className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-500 w-5 h-5" />
    </div>
  </div>
);