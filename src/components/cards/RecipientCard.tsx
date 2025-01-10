// src/components/cards/RecipientCard.tsx
import React, { useEffect, useState } from 'react';
import { User, Gift } from 'lucide-react';
import { _rocktreeNameChunks } from "@gift-searcher/sdk";
import { $ } from '../../client';
import { Osdk } from "@osdk/client";

interface Recipient {
  name: string;
  wishes: string[];
  characteristics: string;
  image?: string;
}

interface RecipientCardProps extends Recipient {}

export const RecipientCard: React.FC<RecipientCardProps> = ({ name, wishes, image }) => {
  const [nameData, setNameData] = useState<Osdk.Instance<typeof _rocktreeNameChunks> | null>(null);

  useEffect(() => {
    let mounted = true;

    const fetchNameData = async () => {
      try {
        const response = await $(_rocktreeNameChunks)
          .where({
            $or: [
              { content: { $containsAllTerms: name } },
              { summary: { $containsAllTerms: name } }
            ]
          })
          .fetchPageWithErrors({ $pageSize: 1 });

        if (mounted && response?.value?.data) {
          setNameData(response.value.data[0] || null);
        }
      } catch (error) {
        console.error('Error fetching name data:', error);
      }
    };

    fetchNameData();

    return () => {
      mounted = false;
    };
  }, [name]);

  return (
    <div className="bg-[#1f2937] rounded-lg p-6 transition-all duration-300 hover:shadow-xl border border-gray-800">
      <div className="flex items-center gap-4 mb-4">
        <div className="w-12 h-12 rounded-full bg-gray-800 flex items-center justify-center flex-shrink-0">
          {image ? (
            <img 
              src={image} 
              alt={name} 
              className="w-full h-full object-cover rounded-full" 
            />
          ) : (
            <User className="w-6 h-6 text-gray-400" />
          )}
        </div>
        <div className="min-w-0 flex-1">
          <div className="flex items-baseline justify-between">
            <h3 className="text-lg font-medium text-white truncate mr-2">
              {name}
            </h3>
            <span className="text-sm text-gray-400">
              {wishes.length} items
            </span>
          </div>
          {nameData && (
            <p className="text-sm text-gray-400 truncate">
              {nameData.summary}
            </p>
          )}
        </div>
      </div>

      <div className="space-y-3 mt-4">
        {wishes.map((wish, index) => (
          <div 
            key={index} 
            className="flex items-center gap-3 px-2 py-1.5 rounded-md hover:bg-gray-800 transition-colors group"
          >
            <Gift className="w-4 h-4 text-blue-400 flex-shrink-0" />
            <span className="text-sm text-gray-300 truncate group-hover:text-white">{wish}</span>
          </div>
        ))}
      </div>

      {nameData && nameData.content && (
        <div className="mt-4 pt-4 border-t border-gray-800">
          <p className="text-xs text-gray-500 line-clamp-2">
            {nameData.content}
          </p>
        </div>
      )}
    </div>
  );
};