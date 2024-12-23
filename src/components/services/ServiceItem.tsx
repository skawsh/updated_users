import React from 'react';
import { Shirt, ChevronRight } from 'lucide-react';

interface ServiceItemProps {
  title: string;
  onClick: () => void;
}

export function ServiceItem({ title, onClick }: ServiceItemProps) {
  return (
    <button
      onClick={onClick}
      className="w-full flex items-center justify-between p-4 bg-white dark:bg-gray-800 rounded-xl mb-3 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
    >
      <div className="flex items-center gap-4">
        <div className="w-12 h-12 bg-gray-100 dark:bg-gray-700 rounded-xl flex items-center justify-center">
          <Shirt className="w-6 h-6 text-gray-600 dark:text-gray-300" />
        </div>
        <span className="text-lg font-medium text-gray-800 dark:text-gray-200">{title}</span>
      </div>
      <ChevronRight className="w-5 h-5 text-gray-400" />
    </button>
  );
}