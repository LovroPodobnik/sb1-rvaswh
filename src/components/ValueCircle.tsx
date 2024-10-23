import React from 'react';

interface ValueCircleProps {
  value: number;
  color: 'blue-500' | 'blue-600';
  position: number;
}

export function ValueCircle({ value, color, position }: ValueCircleProps) {
  return (
    <div 
      className="absolute z-10"
      style={{
        right: `${Math.max(0, Math.min(100 - position, 96))}%`,
        top: '0',
        transform: 'translate(50%, -40%)'
      }}
    >
      <div className={`w-8 h-8 rounded-full ${
        color === 'blue-600' 
          ? 'bg-gradient-to-br from-blue-600 to-blue-700' 
          : 'bg-gradient-to-br from-blue-500 to-blue-600'
      } flex items-center justify-center shadow-lg ring-2 ring-white`}>
        <div className="text-white font-bold text-xs">{value}</div>
      </div>
      <div className={`absolute -inset-1 ${
        color === 'blue-600' ? 'bg-blue-600' : 'bg-blue-500'
      } rounded-full blur opacity-30 -z-10`} />
    </div>
  );
}