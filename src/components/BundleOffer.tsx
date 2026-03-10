import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ShoppingCart, Sparkles } from 'lucide-react';
import { Product, products } from '@/data/products';
import { useCart } from '@/contexts/CartContext';
import { Button } from '@/components/ui/button';
import { toast } from 'sonner';

interface Bundle {
  products: Product[];
  savings: number;
  bundlePrice: number;
}

const bundleRules: { category1: string; category2: string; savings: number }[] = [
  { category1: 'Robotics', category2: 'Educational', savings: 300 },
  { category1: 'STEM', category2: 'Science', savings: 250 },
  { category1: 'Building Blocks', category2: 'Educational', savings: 200 },
  { category1: 'Arts & Crafts', category2: 'Educational', savings: 150 },
  { category1: 'Soft Toys', category2: 'Bath Toys', savings: 100 },
  { category1: 'Musical', category2: 'Educational', savings: 200 },
  { category1: 'Vehicles', category2: 'Action & Adventure', savings: 250 },
];

export const getBundlesForProduct = (product: Product): Bundle[] => {
  const bundles: Bundle[] = [];
  for (const rule of bundleRules) {
    const matchesCat1 = product.category.toLowerCase().includes(rule.category1.toLowerCase());
    const matchesCat2 = product.category.toLowerCase().includes(rule.category2.toLowerCase());
    const targetCat = matchesCat1 ? rule.category2 : matchesCat2 ? rule.category1 : null;
    if (!targetCat) continue;
    const partner = products.find(
      p => p.id !== product.id && p.category.toLowerCase().includes(targetCat.toLowerCase()) && p.inStock
    );
    if (partner) {
      const total = product.price + partner.price;
      bundles.push({ products: [product, partner], savings: rule.savings, bundlePrice: total - rule.savings });
    }
  }
  // Always offer a same-age bundle if no rule matches
  if (bundles.length === 0) {
    const partner = products.find(p => p.id !== product.id && p.ageRange === product.ageRange && p.category !== product.category && p.inStock);
    if (partner) {
      const savings = Math.round((product.price + partner.price) * 0.1);
      bundles.push({ products: [product, partner], savings, bundlePrice: product.price + partner.price - savings });
    }
  }
  return bundles.slice(0, 2);
};

const BundleOffer = ({ product }: { product: Product }) => {
  const bundles = getBundlesForProduct(product);
  const { addToCart } = useCart();

  if (bundles.length === 0) return null;

  return (
    <section className="mt-6">
      <h3 className="font-display font-bold text-lg flex items-center gap-2 mb-3">
        <Sparkles size={18} className="text-secondary" /> Bundle & Save 🎁
      </h3>
      <div className="space-y-3">
        {bundles.map((bundle, i) => {
          const partner = bundle.products.find(p => p.id !== product.id)!;
          return (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.1 }}
              className="bg-gradient-to-r from-secondary/10 to-primary/10 border border-secondary/30 rounded-2xl p-4"
            >
              <div className="flex items-center gap-3">
                <div className="flex -space-x-3">
                  {bundle.products.map(p => (
                    <img key={p.id} src={p.images[0]} alt={p.name} className="w-14 h-14 rounded-xl border-2 border-card object-contain bg-card" />
                  ))}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-bold truncate">
                    {product.name} + {partner.name}
                  </p>
                  <div className="flex items-center gap-2 mt-0.5">
                    <span className="font-display font-black text-base">₹{bundle.bundlePrice.toLocaleString()}</span>
                    <span className="text-xs line-through text-muted-foreground">₹{(bundle.bundlePrice + bundle.savings).toLocaleString()}</span>
                    <span className="text-xs font-bold text-success bg-success/10 px-1.5 py-0.5 rounded-md">
                      Save ₹{bundle.savings}
                    </span>
                  </div>
                </div>
              </div>
              <div className="flex gap-2 mt-3">
                <Button
                  size="sm"
                  className="flex-1 rounded-xl font-bold text-xs h-9"
                  onClick={() => {
                    bundle.products.forEach(p => addToCart(p));
                    toast.success('Bundle added to cart! 🎉');
                  }}
                >
                  <ShoppingCart size={14} /> Add Bundle
                </Button>
                <Link to={`/product/${partner.id}`}>
                  <Button size="sm" variant="outline" className="rounded-xl font-bold text-xs h-9">
                    View
                  </Button>
                </Link>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

export default BundleOffer;
