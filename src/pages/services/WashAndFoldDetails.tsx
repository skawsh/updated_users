import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ServiceDetailsLayout } from '../../components/services/ServiceDetailsLayout';
import { PricingToggle } from '../../components/services/PricingToggle';
import { ClothingItem } from '../../components/services/ClothingItem';
import { ClothingItemExpanded } from '../../components/services/ClothingItemExpanded';
import { CartFooter } from '../../components/services/CartFooter';

interface CartItem {
  name: string;
  quantity: number;
}

const clothingItems = [
  'T-Shirt',
  'Shirt',
  'Pants',
  'Jeans',
  'Dress',
  'Sweater',
  'Jacket',
  'Suit',
];

export function WashAndFoldDetails() {
  const navigate = useNavigate();
  const [pricingType, setPricingType] = useState<'kg' | 'item'>('kg');
  const [expandedItem, setExpandedItem] = useState<string | null>(null);
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  const handleItemClick = (item: string) => {
    setExpandedItem(item);
  };

  const handleQuantityChange = (item: string, quantity: number) => {
    setCartItems(prev => {
      const existingItem = prev.find(i => i.name === item);
      if (existingItem) {
        return prev.map(i => 
          i.name === item ? { ...i, quantity } : i
        ).filter(i => i.quantity > 0);
      }
      return [...prev, { name: item, quantity }];
    });
    setExpandedItem(null);
  };

  const totalAmount = cartItems.reduce((sum, item) => sum + (item.quantity * 50), 0);

  const handleCheckout = () => {
    navigate('/checkout', { 
      state: { 
        items: cartItems,
        totalAmount 
      }
    });
  };

  return (
    <ServiceDetailsLayout title="Wash & Fold">
      <div className="mb-20"> {/* Add bottom margin for cart footer */}
        <PricingToggle activeType={pricingType} onToggle={setPricingType} />

        <div className="bg-white rounded-xl overflow-hidden shadow-sm">
          {clothingItems.map(item => (
            expandedItem === item ? (
              <ClothingItemExpanded
                key={item}
                title={item}
                onQuantityChange={(quantity) => handleQuantityChange(item, quantity)}
                onClose={() => setExpandedItem(null)}
              />
            ) : (
              <ClothingItem
                key={item}
                title={item}
                onClick={() => handleItemClick(item)}
              />
            )
          ))}
        </div>
      </div>

      <CartFooter
        items={cartItems}
        totalAmount={totalAmount}
        onCheckout={handleCheckout}
      />
    </ServiceDetailsLayout>
  );
}