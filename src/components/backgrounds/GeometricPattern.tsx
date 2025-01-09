// src/components/backgrounds/GeometricPattern.tsx
export const GeometricPattern: React.FC = () => (
  <div className="absolute inset-0 opacity-5">
    <div className="grid grid-cols-12 h-full">
      {Array(48).fill(0).map((_, i) => (
        <div key={i} className="border-r border-t border-gray-500"></div>
      ))}
    </div>
  </div>
);