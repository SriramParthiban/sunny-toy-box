import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { Product } from '@/data/products';

export interface CartItem {
  product: Product;
  quantity: number;
  giftWrap: boolean;
}

interface CartContextType {
  items: CartItem[];
  addToCart: (product: Product, quantity?: number) => void;
  removeFromCart: (productId: string) => void;
  updateQuantity: (productId: string, quantity: number) => void;
  toggleGiftWrap: (productId: string) => void;
  clearCart: () => void;
  totalItems: number;
  subtotal: number;
  shipping: number;
  total: number;
  couponDiscount: number;
  applyCoupon: (code: string) => boolean;
  removeCoupon: () => void;
  appliedCoupon: string | null;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

const COUPONS: Record<string, number> = {
  'TOYS10': 10,
  'WELCOME20': 20,
  'PLAY15': 15,
};

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>(() => {
    const saved = localStorage.getItem('toystore-cart');
    return saved ? JSON.parse(saved) : [];
  });
  const [appliedCoupon, setAppliedCoupon] = useState<string | null>(null);

  useEffect(() => {
    localStorage.setItem('toystore-cart', JSON.stringify(items));
  }, [items]);

  const addToCart = (product: Product, quantity = 1) => {
    setItems(prev => {
      const existing = prev.find(i => i.product.id === product.id);
      if (existing) {
        return prev.map(i => i.product.id === product.id ? { ...i, quantity: i.quantity + quantity } : i);
      }
      return [...prev, { product, quantity, giftWrap: false }];
    });
  };

  const removeFromCart = (productId: string) => setItems(prev => prev.filter(i => i.product.id !== productId));
  const updateQuantity = (productId: string, quantity: number) => {
    if (quantity < 1) return removeFromCart(productId);
    setItems(prev => prev.map(i => i.product.id === productId ? { ...i, quantity } : i));
  };
  const toggleGiftWrap = (productId: string) => setItems(prev => prev.map(i => i.product.id === productId ? { ...i, giftWrap: !i.giftWrap } : i));
  const clearCart = () => { setItems([]); setAppliedCoupon(null); };

  const totalItems = items.reduce((sum, i) => sum + i.quantity, 0);
  const subtotal = items.reduce((sum, i) => sum + i.product.price * i.quantity, 0);
  const giftWrapCharges = items.filter(i => i.giftWrap).length * 50;
  const shipping = subtotal >= 999 ? 0 : 99;
  const couponDiscount = appliedCoupon ? Math.round(subtotal * (COUPONS[appliedCoupon] || 0) / 100) : 0;
  const total = subtotal + shipping + giftWrapCharges - couponDiscount;

  const applyCoupon = (code: string) => {
    const upper = code.toUpperCase();
    if (COUPONS[upper]) { setAppliedCoupon(upper); return true; }
    return false;
  };
  const removeCoupon = () => setAppliedCoupon(null);

  return (
    <CartContext.Provider value={{ items, addToCart, removeFromCart, updateQuantity, toggleGiftWrap, clearCart, totalItems, subtotal, shipping, total, couponDiscount, applyCoupon, removeCoupon, appliedCoupon }}>
      {children}
    </CartContext.Provider>
  );
}

export const useCart = () => {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error('useCart must be used within CartProvider');
  return ctx;
};
