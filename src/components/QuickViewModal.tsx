import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { X, Heart, Star, ShoppingCart, Truck, RotateCcw, ShieldCheck, ChevronLeft, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Product } from '@/data/products';
import { useCart } from '@/contexts/CartContext';
import { useWishlist } from '@/contexts/WishlistContext';
import { Button } from '@/components/ui/button';
import { toast } from 'sonner';
import { useIsMobile } from '@/hooks/use-mobile';

interface QuickViewModalProps {
  product: Product | null;
  onClose: () => void;
}

const QuickViewModal = ({ product, onClose }: QuickViewModalProps) => {
  const { addToCart } = useCart();
  const { isInWishlist, toggleWishlist } = useWishlist();
  const isMobile = useIsMobile();
  const [quantity, setQuantity] = useState(1);

  if (!product) return null;

  const wishlisted = isInWishlist(product.id);
  const savings = product.originalPrice - product.price;

  const deliveryDate = new Date();
  deliveryDate.setDate(deliveryDate.getDate() + (Math.random() > 0.5 ? 3 : 5));
  const deliveryStr = deliveryDate.toLocaleDateString('en-IN', { weekday: 'long', month: 'short', day: 'numeric' });

  const handleAdd = () => {
    addToCart(product, quantity);
    toast.success(`${product.name} added to cart! 🛒`);
    onClose();
  };

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[60] flex items-end md:items-center justify-center"
        onClick={onClose}
      >
        <div className="absolute inset-0 bg-foreground/40 backdrop-blur-sm" />

        <motion.div
          initial={isMobile ? { y: '100%' } : { scale: 0.9, opacity: 0 }}
          animate={isMobile ? { y: 0 } : { scale: 1, opacity: 1 }}
          exit={isMobile ? { y: '100%' } : { scale: 0.9, opacity: 0 }}
          transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          className={`relative bg-card z-10 overflow-y-auto ${
            isMobile
              ? 'w-full max-h-[85vh] rounded-t-3xl'
              : 'w-full max-w-2xl max-h-[80vh] rounded-3xl mx-4'
          }`}
          onClick={e => e.stopPropagation()}
        >
          {/* Close button */}
          <button onClick={onClose}
            className="absolute top-3 right-3 z-10 p-1.5 bg-muted rounded-full hover:bg-muted/80">
            <X size={18} />
          </button>

          {/* Mobile drag indicator */}
          {isMobile && (
            <div className="flex justify-center pt-2 pb-1">
              <div className="w-10 h-1 bg-muted-foreground/30 rounded-full" />
            </div>
          )}

          <div className="grid md:grid-cols-2 gap-4 p-5">
            {/* Image */}
            <div className="bg-muted/50 rounded-2xl p-6 aspect-square flex items-center justify-center relative">
              <img src={product.images[0]} alt={product.name} className="max-h-full object-contain" />
              {product.discount > 0 && (
                <span className="absolute top-3 left-3 bg-destructive text-destructive-foreground text-xs font-black px-2 py-0.5 rounded-lg">
                  {product.discount}% OFF
                </span>
              )}
            </div>

            {/* Info */}
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <span className="text-xs font-bold text-secondary bg-secondary/10 px-2 py-0.5 rounded-full">{product.ageRange}</span>
                <span className="text-xs text-muted-foreground">{product.brand}</span>
              </div>

              <h2 className="font-display font-black text-lg md:text-xl leading-tight">{product.name}</h2>

              <div className="flex items-center gap-1.5">
                <div className="flex gap-0.5">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} size={13} className={i < Math.floor(product.rating) ? 'fill-primary text-primary' : 'text-muted'} />
                  ))}
                </div>
                <span className="text-sm font-bold">{product.rating}</span>
                <span className="text-xs text-muted-foreground">({product.reviewCount} reviews)</span>
              </div>

              <div className="flex items-baseline gap-2">
                <span className="font-display font-black text-2xl">₹{product.price.toLocaleString()}</span>
                {product.originalPrice > product.price && (
                  <>
                    <span className="text-sm text-muted-foreground line-through">₹{product.originalPrice.toLocaleString()}</span>
                    <span className="text-xs font-bold text-success bg-success/10 px-1.5 py-0.5 rounded-md">
                      Save ₹{savings.toLocaleString()}
                    </span>
                  </>
                )}
              </div>

              <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3">{product.description}</p>

              {/* Trust indicators */}
              <div className="flex flex-wrap gap-3 text-[11px] text-muted-foreground">
                <span className="flex items-center gap-1"><Truck size={12} className="text-success" /> Free Delivery</span>
                <span className="flex items-center gap-1"><RotateCcw size={12} className="text-info" /> 7-day Returns</span>
                <span className="flex items-center gap-1"><ShieldCheck size={12} className="text-success" /> Certified Safe</span>
              </div>

              <p className="text-xs text-muted-foreground">
                🚚 Delivery by <strong className="text-foreground">{deliveryStr}</strong>
              </p>

              {/* Quantity & actions */}
              <div className="flex items-center gap-3">
                <div className="flex items-center border rounded-xl">
                  <button onClick={() => setQuantity(Math.max(1, quantity - 1))} className="px-3 py-1.5 text-sm font-bold">−</button>
                  <span className="px-3 font-bold text-sm">{quantity}</span>
                  <button onClick={() => setQuantity(quantity + 1)} className="px-3 py-1.5 text-sm font-bold">+</button>
                </div>
                <span className="text-xs text-muted-foreground">{product.stock} in stock</span>
              </div>

              <div className="flex gap-2">
                <Button onClick={handleAdd}
                  className="flex-1 bg-primary text-primary-foreground font-bold rounded-xl h-11">
                  <ShoppingCart size={16} /> Add to Cart
                </Button>
                <Button variant="outline" onClick={() => { toggleWishlist(product.id); toast(wishlisted ? 'Removed' : 'Added to wishlist ❤️'); }}
                  className="rounded-xl h-11 px-3">
                  <Heart size={16} className={wishlisted ? 'fill-destructive text-destructive' : ''} />
                </Button>
              </div>

              <Link to={`/product/${product.id}`} onClick={onClose}
                className="block text-center text-xs font-bold text-secondary hover:underline">
                View Full Details →
              </Link>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default QuickViewModal;
