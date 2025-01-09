// src/components/layout/Header.tsx

import { WaveBackground } from '../backgrounds/WaveBackground';
import { GeometricPattern } from '../backgrounds/GeometricPattern';

export const Header: React.FC = () => (
  <header className="relative h-64 bg-gray-900 overflow-hidden">
    <WaveBackground />
    <GeometricPattern />
    <div className="relative z-10 h-full max-w-7xl mx-auto px-6 flex items-center">
      <div className="space-y-4">
        <h1 className="text-4xl font-light tracking-wide">Gift Finder</h1>
        <p className="text-gray-400 font-light tracking-wide max-w-xl">
          Discover perfect gifts through AI-powered recommendations and price comparisons
        </p>
      </div>
    </div>
  </header>
);