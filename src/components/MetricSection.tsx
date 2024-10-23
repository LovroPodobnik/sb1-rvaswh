import React from 'react';

interface MetricSectionProps {
  title: string;
  children: React.ReactNode;
}

export function MetricSection({ title, children }: MetricSectionProps) {
  return (
    <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
      <h2 className="text-xl font-bold mb-6 text-gray-800 flex items-center">
        {title}
      </h2>
      <div className="space-y-8 mt-2">
        {children}
      </div>
    </div>
  );
}