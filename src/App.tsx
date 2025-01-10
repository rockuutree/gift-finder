import React, { useState } from 'react';
import { Search, List } from 'lucide-react';
import { UploadSection } from './UploadSection';

const App = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeTab, setActiveTab] = useState('search');

  return (
    <div className="min-h-screen bg-white">
      <div className="relative bg-white">
        <div className="relative z-10 px-6 pt-8 max-w-7xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-black mb-4">
            Gift Finder
          </h1>
          <p className="text-lg text-gray-600">
            Discover perfect gifts through AI-powered recommendations and price comparisons
          </p>
        </div>
      </div>
      
      <main className="relative px-6 mt-8">
        <div className="max-w-7xl mx-auto space-y-6">
          {/* Navigation */}
          <div className="flex space-x-2 border-b">
            <button 
              onClick={() => setActiveTab('search')}
              className={`flex items-center px-4 py-2 border-b-2 ${
                activeTab === 'search' 
                  ? 'border-blue-500 text-blue-600' 
                  : 'border-transparent text-gray-500 hover:text-gray-700'
              }`}
            >
              <Search className="w-5 h-5 mr-2" />
              Search
            </button>
            <button 
              onClick={() => setActiveTab('wishlists')}
              className={`flex items-center px-4 py-2 border-b-2 ${
                activeTab === 'wishlists' 
                  ? 'border-blue-500 text-blue-600' 
                  : 'border-transparent text-gray-500 hover:text-gray-700'
              }`}
            >
              <List className="w-5 h-5 mr-2" />
              Wishlists
            </button>
          </div>

          {/* Content based on active tab */}
          {activeTab === 'search' ? (
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="What gift are you looking for?"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-lg text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
          ) : (
            <UploadSection />
          )}
        </div>
      </main>
    </div>
  );
};

export default App;