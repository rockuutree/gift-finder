// src/components/cards/RecipientCard.tsx
import React from 'react';
import { User, Gift } from 'lucide-react';
import type { Recipient } from '../../types';

interface RecipientCardProps extends Recipient {}

export const RecipientCard: React.FC<RecipientCardProps> = ({ name, wishes, image }) => (
  <div className="card-base card-hover group">
    {/* Hover gradient overlay */}
    <div className="absolute inset-0 bg-gradient-to-br from-gray-800 to-transparent opacity-0 group-hover:opacity-100 fade-in"/>
    
    <div className="relative z-10">
      {/* Header with image and name */}
      <div className="flex items-center gap-4 mb-6">
        <div className="w-16 h-16 bg-gray-800 rounded-lg overflow-hidden">
          {image ? (
            <img src={image} alt={name} className="w-full h-full object-cover" />
          ) : (
            <div className="w-full h-full flex items-center justify-center bg-gray-800">
              <User className="w-8 h-8 text-gray-400" />
            </div>
          )}
        </div>
        <div>
          <h3 className="heading-medium">{name}</h3>
          <p className="text-body">{wishes.length} items</p>
        </div>
      </div>

      {/* Wishlist items */}
      <div className="space-y-3">
        {wishes.slice(0, 3).map((wish, index) => (
          <div key={index} className="flex items-center gap-3 text-gray-300">
            <Gift className="w-4 h-4" />
            <span className="text-body">{wish}</span>
          </div>
        ))}
      </div>
    </div>
  </div>
);