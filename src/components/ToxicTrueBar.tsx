import React from 'react';

interface ToxicTrueBarProps {
  toxic: number;
  true: number;
}

export function ToxicTrueBar({ toxic, true: trueValue }: ToxicTrueBarProps) {
  return (
    <div className="relative h-5 rounded-full w-full overflow-hidden shadow-inner">
      {/* Toxic section */}
      <div 
        className="absolute h-full bg-gradient-to-r from-red-600 via-red-500 to-red-600 left-0"
        style={{ width: `${toxic}%` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-white/20 to-transparent" />
      </div>

      {/* True section */}
      <div 
        className="absolute h-full bg-gradient-to-r from-blue-600 via-blue-500 to-blue-600 right-0"
        style={{ width: `${trueValue}%` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-white/20 to-transparent" />
      </div>

      {/* Percentage labels */}
      <div className="absolute inset-0 flex justify-between items-center px-3">
        <span className="text-xs font-semibold text-white drop-shadow">{toxic}%</span>
        <span className="text-xs font-semibold text-white drop-shadow">{trueValue}%</span>
      </div>
    </div>
  );
}