// src/components/upload/UploadSection.tsx
import React from 'react';
import { Upload, Gift } from 'lucide-react';

export const UploadSection: React.FC = () => (
  <div className="card-base mb-12">
    <h2 className="heading-medium mb-6">Add New Wishlist</h2>
    <div className="grid md:grid-cols-2 gap-6">
      <UploadButton
        icon={<Upload className="w-8 h-8" />}
        text="Upload wishlist image"
      />
      <UploadButton
        icon={<Gift className="w-8 h-8" />}
        text="Create manual wishlist"
      />
    </div>
  </div>
);

interface UploadButtonProps {
  icon: React.ReactNode;
  text: string;
}

const UploadButton: React.FC<UploadButtonProps> = ({ icon, text }) => (
  <button className="group p-8 border-2 border-dashed border-gray-800 rounded-lg hover:border-blue-500 transition-colors">
    <div className="text-gray-500 group-hover:text-blue-500 transition-colors mb-4">
      {icon}
    </div>
    <p className="text-body group-hover:text-blue-500 transition-colors">
      {text}
    </p>
  </button>
);