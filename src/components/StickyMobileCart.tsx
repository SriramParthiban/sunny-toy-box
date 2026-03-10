import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ShoppingCart } from 'lucide-react';
import { Product } from '@/data/products';
import { useCart } from '@/contexts/CartContext';
import { toast } from 'sonner';

interface Props {
  product: Product;
  quantity: number;
}

const StickyMobileCart = ({ product, quantity }: Props) => {
  const { addToCart } = useCart();
  const [isAdding, setIsAdding] = React.useState(false);

  const handleAdd = () => {
    setIsAdding(true);
    addToCart(product, quantity);
    toast.success('Added to cart! 🛒');
    setTimeout(() => setIsAdding(false), 800);
  };

  return (
    <div className="fixed bottom-14 left-0 right-0 z-40 md:hidden bg-card/95 backdrop-blur-md border-t border-border/50 shadow-lg px-4 py-2.5">
      <div className="flex items-center gap-3">
        <div className="flex-1 min-w-0">
          <p className="text-xs font-bold truncate">{product.name}</p>
          <p className="font-display font-black text-lg">₹{(product.price * quantity).toLocaleString()}</p>
        </div>
        <motion.button
          whileTap={{ scale: 0.95 }}
          onClick={handleAdd}
          className={`px-6 py-3 rounded-xl font-bold text-sm flex items-center gap-2 transition-all duration-300 ${
            isAdding ? 'bg-success text-success-foreground' : 'bg-primary text-primary-foreground'
          }`}
        >
          <AnimatePresence mode="wait">
            {isAdding ? (
              <motion.span key="done" initial={{ scale: 0 }} animate={{ scale: 1 }} exit={{ scale: 0 }}>
                ✓ Added!
              </motion.span>
            ) : (
              <motion.span key="add" initial={{ scale: 0 }} animate={{ scale: 1 }} exit={{ scale: 0 }} className="flex items-center gap-1.5">
                <ShoppingCart size={16} /> Add to Cart
              </motion.span>
            )}
          </AnimatePresence>
        </motion.button>
      </div>
    </div>
  );
};

export default StickyMobileCart;
