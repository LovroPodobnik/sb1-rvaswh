import React from 'react';
import { ValueCircle } from './ValueCircle';
import { Ruler } from './Ruler';

interface MetricBarProps {
  value: number;
  maxValue: number;
  showCircle?: boolean;
  circleColor?: 'blue-500' | 'blue-600';
  showRuler?: boolean;
}

export function MetricBar({ 
  value, 
  maxValue, 
  showCircle = true, 
  circleColor = 'blue-500',
  showRuler = true 
}: MetricBarProps) {
  const percentage = (value / maxValue) * 100;

  return (
    <div className="relative mb-8">
      {/* Progress bar container */}
      <div className="relative h-2.5 rounded-full w-full overflow-hidden shadow-inner mb-2">
        {/* Background sections */}
        <div className="absolute inset-0 w-full h-full">
          {/* 0-50 Section */}
          <div 
            className="absolute inset-0"
            style={{ 
              background: '#FF3C3C',
              clipPath: 'polygon(0 0, 50% 0, 50% 100%, 0 100%)' 
            }} 
          />
          {/* 50-70 Section */}
          <div 
            className="absolute inset-0"
            style={{ 
              background: '#E6E6F0',
              clipPath: 'polygon(50% 0, 70% 0, 70% 100%, 50% 100%)' 
            }} 
          />
          {/* 70-100 Section */}
          <div 
            className="absolute inset-0"
            style={{ 
              background: '#3C96FF',
              clipPath: 'polygon(70% 0, 100% 0, 100% 100%, 70% 100%)' 
            }} 
          />
        </div>

        {/* Progress overlay */}
        <div 
          className="absolute h-full backdrop-blur-sm bg-white/50"
          style={{ width: `${100 - percentage}%`, right: 0 }}
        />
      </div>

      {/* Ruler */}
      {showRuler && (
        <div className="mt-1">
          <Ruler />
        </div>
      )}

      {/* Value circle */}
      {showCircle && (
        <ValueCircle 
          value={value} 
          color={circleColor} 
          position={percentage}
        />
      )}
    </div>
  );
}