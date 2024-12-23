import React from 'react';
import { ArrowRight } from 'lucide-react';

interface CartReviewProps {
  items: Array<{ name: string; quantity: number }>;
  totalAmount: number;
  onProceed: () => void;
}

export function CartReview({ items, totalAmount, onProceed }: CartReviewProps) {
  return (
    <div className="bg-white rounded-xl p-4 shadow-sm">
      <h2 className="text-xl font-bold mb-4">Order Summary</h2>
      
      <div className="space-y-3 mb-6">
        {items.map((item, index) => (
          <div key={index} className="flex justify-between items-center">
            <div>
              <span className="text-gray-800">{item.name}</span>
              <span className="text-gray-500 text-sm ml-2">×{item.quantity}</span>
            </div>
            <span className="font-medium">₹{item.quantity * 50}</span>
          </div>
        ))}
      </div>
      
      <div className="border-t border-gray-100 pt-4">
        <div className="flex justify-between items-center mb-6">
          <span className="font-bold">Total Amount</span>
          <span className="text-xl font-bold">₹{totalAmount}</span>
        </div>
        
        <button
          onClick={onProceed}
          className="w-full py-3 bg-emerald-500 text-white rounded-full font-medium hover:bg-emerald-600 transition-colors flex items-center justify-center gap-2"
        >
          Proceed to Payment
          <ArrowRight size={20} />
        </button>
      </div>
    </div>
  );
}