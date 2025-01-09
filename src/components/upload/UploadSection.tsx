// src/components/upload/UploadSection.tsx
import React from 'react';
import { Upload, Gift } from 'lucide-react';

export const UploadSection: React.FC = () => (
  <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
    <h2 className="text-xl font-semibold text-gray-900 mb-6">Add New Wishlist</h2>
    <div className="grid md:grid-cols-2 gap-6">
      <button className="flex flex-col items-center justify-center p-8 border-2 border-dashed border-gray-300 rounded-lg hover:border-blue-500 transition-colors group">
        <div className="w-12 h-12 mb-4 rounded-full bg-gray-50 flex items-center justify-center group-hover:bg-blue-50 transition-colors">
          <Upload className="w-6 h-6 text-gray-400 group-hover:text-blue-500 transition-colors" />
        </div>
        <span className="text-sm text-gray-600 group-hover:text-blue-500 transition-colors">
          Upload wishlist image
        </span>
      </button>
      
      <button className="flex flex-col items-center justify-center p-8 border-2 border-dashed border-gray-300 rounded-lg hover:border-blue-500 transition-colors group">
        <div className="w-12 h-12 mb-4 rounded-full bg-gray-50 flex items-center justify-center group-hover:bg-blue-50 transition-colors">
          <Gift className="w-6 h-6 text-gray-400 group-hover:text-blue-500 transition-colors" />
        </div>
        <span className="text-sm text-gray-600 group-hover:text-blue-500 transition-colors">
          Create manual wishlist
        </span>
      </button>
    </div>
  </div>
);