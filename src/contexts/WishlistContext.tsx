import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

interface WishlistContextType {
  wishlist: string[];
  addToWishlist: (productId: string) => void;
  removeFromWishlist: (productId: string) => void;
  isInWishlist: (productId: string) => boolean;
  toggleWishlist: (productId: string) => void;
}

const WishlistContext = createContext<WishlistContextType | undefined>(undefined);

export function WishlistProvider({ children }: { children: ReactNode }) {
  const [wishlist, setWishlist] = useState<string[]>(() => {
    const saved = localStorage.getItem('toystore-wishlist');
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem('toystore-wishlist', JSON.stringify(wishlist));
  }, [wishlist]);

  const addToWishlist = (id: string) => setWishlist(prev => prev.includes(id) ? prev : [...prev, id]);
  const removeFromWishlist = (id: string) => setWishlist(prev => prev.filter(i => i !== id));
  const isInWishlist = (id: string) => wishlist.includes(id);
  const toggleWishlist = (id: string) => isInWishlist(id) ? removeFromWishlist(id) : addToWishlist(id);

  return (
    <WishlistContext.Provider value={{ wishlist, addToWishlist, removeFromWishlist, isInWishlist, toggleWishlist }}>
      {children}
    </WishlistContext.Provider>
  );
}

export const useWishlist = () => {
  const ctx = useContext(WishlistContext);
  if (!ctx) throw new Error('useWishlist must be used within WishlistProvider');
  return ctx;
};
