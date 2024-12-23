import React from 'react';

interface PricingToggleProps {
  activeType: 'kg' | 'item';
  onToggle: (type: 'kg' | 'item') => void;
}

export function PricingToggle({ activeType, onToggle }: PricingToggleProps) {
  return (
    <div className="flex rounded-full bg-gray-100 p-1 mb-6">
      <button
        onClick={() => onToggle('kg')}
        className={`flex-1 py-3 px-6 rounded-full text-sm font-medium transition-colors ${
          activeType === 'kg'
            ? 'bg-white text-gray-800 shadow-sm'
            : 'text-gray-600 hover:text-gray-800'
        }`}
      >
        Per kg - 50rs
      </button>
      <button
        onClick={() => onToggle('item')}
        className={`flex-1 py-3 px-6 rounded-full text-sm font-medium transition-colors ${
          activeType === 'item'
            ? 'bg-white text-gray-800 shadow-sm'
            : 'text-gray-600 hover:text-gray-800'
        }`}
      >
        Per item
      </button>
    </div>
  );
}