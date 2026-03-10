import React, { useState, useEffect } from 'react';
import { products, Product } from '@/data/products';
import ProductCard from '@/components/ProductCard';
import QuickViewModal from '@/components/QuickViewModal';

const RecentlyViewed = ({ excludeId }: { excludeId?: string }) => {
  const [items, setItems] = useState<Product[]>([]);
  const [quickView, setQuickView] = useState<Product | null>(null);

  useEffect(() => {
    const ids: string[] = JSON.parse(localStorage.getItem('toystore-recent') || '[]');
    const viewed = ids
      .filter(id => id !== excludeId)
      .map(id => products.find(p => p.id === id))
      .filter(Boolean)
      .slice(0, 8) as Product[];
    setItems(viewed);
  }, [excludeId]);

  if (items.length === 0) return null;

  return (
    <section className="container py-6">
      <h2 className="font-display font-black text-xl md:text-2xl mb-4">Recently Viewed 👀</h2>
      <div className="flex gap-3 overflow-x-auto pb-3 scrollbar-hide -mx-1 px-1">
        {items.map(p => (
          <div key={p.id} className="min-w-[170px] max-w-[200px] shrink-0">
            <ProductCard product={p} onQuickView={setQuickView} />
          </div>
        ))}
      </div>
      <QuickViewModal product={quickView} onClose={() => setQuickView(null)} />
    </section>
  );
};

export default RecentlyViewed;
