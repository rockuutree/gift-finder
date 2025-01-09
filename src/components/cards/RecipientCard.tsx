// src/components/cards/RecipientCard.tsx
import React from 'react';
import { User, Gift } from 'lucide-react';
import type { Recipient } from '../../types';

interface RecipientCardProps extends Recipient {}

export const RecipientCard: React.FC<RecipientCardProps> = ({ name, wishes, image }) => (
  <div className="bg-white rounded-lg shadow-lg overflow-hidden transition-shadow hover:shadow-xl">
    <div className="p-6">
      <div className="flex items-center gap-4 mb-6">
        <div className="w-16 h-16 bg-gray-100 rounded-full overflow-hidden flex items-center justify-center">
          {image ? (
            <img src={image} alt={name} className="w-full h-full object-cover" />
          ) : (
            <User className="w-8 h-8 text-gray-400" />
          )}
        </div>
        <div>
          <h3 className="text-lg font-medium text-gray-900">{name}</h3>
          <p className="text-sm text-gray-500">{wishes.length} items</p>
        </div>
      </div>

      <div className="space-y-3">
        {wishes.map((wish, index) => (
          <div key={index} className="flex items-center gap-3 text-gray-600">
            <Gift className="w-4 h-4 text-blue-500" />
            <span className="text-sm">{wish}</span>
          </div>
        ))}
      </div>
    </div>
  </div>
);