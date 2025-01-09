// src/App.tsx
import React, { useState } from 'react';
import { Header } from './components/layout/Header';
import { Navigation } from './components/layout/Navigation';
import { GlobalSearch } from './components/search/GlobalSearch';
import { UploadSection } from './components/upload/UploadSection';
import { RecipientCard } from './components/cards/RecipientCard';
import type { Recipient } from './types';

const MOCK_RECIPIENTS: Recipient[] = [
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
  const [activeSection, setActiveSection] = useState('discover');

  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      
      <main className="max-w-7xl mx-auto px-6 -mt-8 relative z-20">
        <GlobalSearch 
          value={searchQuery} 
          onChange={setSearchQuery} 
        />
        
        <Navigation 
          activeSection={activeSection}
          onSectionChange={setActiveSection}
        />
        
        <UploadSection />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 pb-12">
          {MOCK_RECIPIENTS.map((recipient, index) => (
            <RecipientCard key={index} {...recipient} />
          ))}
        </div>
      </main>
    </div>
  );
};

export default App;