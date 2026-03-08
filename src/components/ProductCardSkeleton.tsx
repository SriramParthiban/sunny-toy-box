import React from 'react';
import { motion } from 'framer-motion';

const ProductCardSkeleton = () => (
  <div className="bg-card rounded-2xl shadow-sm overflow-hidden border border-border/50 animate-pulse">
    <div className="aspect-square bg-muted/70" />
    <div className="p-3 space-y-2">
      <div className="flex gap-1">
        <div className="h-3 w-12 bg-muted rounded-md" />
        <div className="h-3 w-16 bg-muted rounded-md" />
      </div>
      <div className="h-4 w-full bg-muted rounded-md" />
      <div className="h-3 w-20 bg-muted rounded-md" />
      <div className="flex gap-2">
        <div className="h-5 w-16 bg-muted rounded-md" />
        <div className="h-4 w-12 bg-muted rounded-md" />
      </div>
      <div className="h-8 w-full bg-muted rounded-xl" />
    </div>
  </div>
);

export const ProductGridSkeleton = ({ count = 8 }: { count?: number }) => (
  <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 md:gap-4">
    {Array.from({ length: count }).map((_, i) => (
      <motion.div key={i} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: i * 0.05 }}>
        <ProductCardSkeleton />
      </motion.div>
    ))}
  </div>
);

export default ProductCardSkeleton;
