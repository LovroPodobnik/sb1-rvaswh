import React from 'react';

interface RulerProps {
  points?: number[];
  height?: number;
  tickColor?: string;
  labelColor?: string;
  showLabels?: boolean;
}

export function Ruler({
  points = [0, 50, 70, 100],
  height = 4,
  tickColor = '#94A3B8',
  labelColor = '#64748B',
  showLabels = true
}: RulerProps) {
  return (
    <div className="relative w-full" style={{ height: `${height}px` }}>
      {/* Ruler line */}
      <div className="absolute inset-x-0 top-1/2 h-px bg-gray-200 transform -translate-y-1/2" />

      {/* Tick marks and labels */}
      {points.map((point) => {
        const position = `${point}%`;
        return (
          <div
            key={point}
            className="absolute top-0 flex flex-col items-center"
            style={{ left: position, transform: 'translateX(-50%)' }}
          >
            {/* Tick mark */}
            <div
              className="w-px h-full"
              style={{ backgroundColor: tickColor }}
            />

            {/* Label */}
            {showLabels && (
              <span
                className="absolute top-full pt-1 text-xs font-medium"
                style={{ color: labelColor }}
              >
                {point}
              </span>
            )}
          </div>
        );
      })}
    </div>
  );
}