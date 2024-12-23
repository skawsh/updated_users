export interface Offer {
  title: string;
  description: string;
  discount: string;
  type: 'new' | 'special' | 'limited';
  expiresIn?: string;
  image: string;
}

export const offers: Offer[] = [
  {
    title: "First Order Special",
    description: "Get 20% off on your first laundry service order",
    discount: "20% OFF",
    type: "new",
    image: "https://images.unsplash.com/photo-1582735689369-4fe89db7114c?auto=format&fit=crop&q=80&w=2070",
    expiresIn: "7 days"
  },
  {
    title: "Bundle & Save",
    description: "30% discount when you combine wash & dry cleaning",
    discount: "30% OFF",
    type: "special",
    image: "https://images.unsplash.com/photo-1567113463300-102a7eb3cb26?auto=format&fit=crop&q=80&w=2070"
  },
  {
    title: "Weekend Flash Sale",
    description: "15% off on all premium services this weekend",
    discount: "15% OFF",
    type: "limited",
    image: "https://images.unsplash.com/photo-1521656693074-0ef32e80a5d5?auto=format&fit=crop&q=80&w=2070",
    expiresIn: "2 days"
  }
];