// src/App.tsx
import React, { useState } from 'react';
import { Header } from './components/layout/Header';
import { Navigation } from './components/layout/Navigation';
import { GlobalSearch } from './components/search/GlobalSearch';
import { UploadSection } from './components/upload/UploadSection';
import { RecipientCard } from './components/cards/RecipientCard';

const MOCK_RECIPIENTS = [
  {
    name: 'Amanda',
    wishes: ['Lipstick', 'Makeup', 'Clothes'],
    characteristics: 'Asian, Woman, 5\'6"'
  },
  {
    name: 'John',
    wishes: ['Gaming Mouse', 'Headphones', 'Books'],
    characteristics: 'Caucasian, Man, 5\'10"'
  }
];

const App: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeSection, setActiveSection] = useState('search');

  return (
    <div className="min-h-screen bg-[#1a1e2e] text-gray-100">
      <Header />
      
      <main className="max-w-7xl mx-auto px-6 py-8">
        <Navigation 
          activeSection={activeSection}
          onSectionChange={setActiveSection}
        />

        {activeSection === 'search' ? (
          <div className="space-y-6">
            <GlobalSearch 
              value={searchQuery} 
              onChange={setSearchQuery} 
            />
            {/* Search results would go here */}
          </div>
        ) : (
          <div className="space-y-8">
            <UploadSection />
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {MOCK_RECIPIENTS.map((recipient, index) => (
                <RecipientCard key={index} {...recipient} />
              ))}
            </div>
          </div>
        )}
      </main>
    </div>
  );
};

export default App;