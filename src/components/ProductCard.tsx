import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Heart, Star, Eye, ShoppingCart, Truck, Zap } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Product } from '@/data/products';
import { useCart } from '@/contexts/CartContext';
import { useWishlist } from '@/contexts/WishlistContext';
import { toast } from 'sonner';

interface ProductCardProps {
  product: Product;
  onQuickView?: (product: Product) => void;
}

const ProductCard = ({ product, onQuickView }: ProductCardProps) => {
  const { addToCart } = useCart();
  const { isInWishlist, toggleWishlist } = useWishlist();
  const wishlisted = isInWishlist(product.id);
  const [isAdding, setIsAdding] = useState(false);
  const savings = product.originalPrice - product.price;

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsAdding(true);
    addToCart(product);
    toast.success(`${product.name} added to cart! 🛒`);
    setTimeout(() => setIsAdding(false), 600);
  };

  const handleWishlist = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    toggleWishlist(product.id);
    toast(wishlisted ? 'Removed from wishlist' : 'Added to wishlist ❤️');
  };

  const handleQuickView = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    onQuickView?.(product);
  };

  return (
    <motion.div
      whileHover={{ y: -6, scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      transition={{ duration: 0.2 }}
      className="bg-card rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden group relative border border-border/50"
    >
      {/* Wishlist button */}
      <button onClick={handleWishlist}
        className="absolute top-2.5 right-2.5 z-10 p-1.5 bg-card/90 backdrop-blur-sm rounded-full shadow-md hover:scale-110 transition-transform">
        <Heart size={15} className={wishlisted ? 'fill-destructive text-destructive' : 'text-muted-foreground'} />
      </button>

      <Link to={`/product/${product.id}`} className="block relative aspect-square bg-muted/50 p-4 overflow-hidden">
        <motion.img
          src={product.images[0]} alt={product.name}
          className="w-full h-full object-contain"
          loading="lazy"
          whileHover={{ scale: 1.08 }}
          transition={{ duration: 0.3 }}
        />

        {/* Discount badge */}
        {product.discount > 0 && (
          <span className="absolute top-2.5 left-2.5 bg-destructive text-destructive-foreground text-[10px] font-black px-2 py-0.5 rounded-lg">
            {product.discount}% OFF
          </span>
        )}

        {/* Badge stack - bottom left */}
        <div className="absolute bottom-2.5 left-2.5 flex flex-col gap-1">
          {product.badge && (
            <span className="bg-info text-info-foreground text-[9px] font-bold px-1.5 py-0.5 rounded-md">
              {product.badge}
            </span>
          )}
          {product.tags.includes('trending') && (
            <span className="bg-secondary text-secondary-foreground text-[9px] font-bold px-1.5 py-0.5 rounded-md">
              🔥 Trending
            </span>
          )}
          {product.tags.includes('bestseller') && (
            <span className="bg-primary text-primary-foreground text-[9px] font-bold px-1.5 py-0.5 rounded-md">
              ⭐ Bestseller
            </span>
          )}
        </div>

        {/* Quick View overlay */}
        {onQuickView && (
          <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/10 transition-colors duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
            <button onClick={handleQuickView}
              className="bg-card text-foreground text-xs font-bold px-3 py-1.5 rounded-xl shadow-lg flex items-center gap-1 hover:bg-card/90 transition-colors transform translate-y-2 group-hover:translate-y-0 duration-300">
              <Eye size={13} /> Quick View
            </button>
          </div>
        )}
      </Link>

      <div className="p-3 space-y-1.5">
        {/* Tags row */}
        <div className="flex items-center gap-1 flex-wrap">
          <span className="text-[9px] font-bold text-secondary bg-secondary/10 px-1.5 py-0.5 rounded-md">{product.ageRange}</span>
          <span className="text-[9px] text-muted-foreground font-semibold">{product.brand}</span>
        </div>

        {/* Name */}
        <Link to={`/product/${product.id}`}>
          <h3 className="font-display font-bold text-sm leading-tight line-clamp-2 hover:text-secondary transition-colors">
            {product.name}
          </h3>
        </Link>

        {/* Rating */}
        <div className="flex items-center gap-1">
          <div className="flex gap-0.5">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} size={10} className={i < Math.floor(product.rating) ? 'fill-primary text-primary' : 'text-muted/60'} />
            ))}
          </div>
          <span className="text-[10px] font-bold">{product.rating}</span>
          <span className="text-[9px] text-muted-foreground">({product.reviewCount})</span>
        </div>

        {/* Price */}
        <div className="flex items-baseline gap-1.5">
          <span className="font-display font-black text-base">₹{product.price.toLocaleString()}</span>
          {product.originalPrice > product.price && (
            <>
              <span className="text-[10px] text-muted-foreground line-through">₹{product.originalPrice.toLocaleString()}</span>
              <span className="text-[10px] font-bold text-success">Save ₹{savings.toLocaleString()}</span>
            </>
          )}
        </div>

        {/* Micro indicators */}
        <div className="flex items-center gap-2 text-[9px] text-muted-foreground">
          {product.price >= 999 && (
            <span className="flex items-center gap-0.5"><Truck size={9} className="text-success" /> Free Delivery</span>
          )}
          {product.stock <= 10 && product.stock > 0 && (
            <span className="flex items-center gap-0.5 text-destructive font-bold"><Zap size={9} /> Only {product.stock} left</span>
          )}
        </div>

        {/* Add to Cart */}
        <motion.button
          onClick={handleAddToCart}
          whileTap={{ scale: 0.95 }}
          className={`w-full mt-1 font-bold text-xs py-2 rounded-xl transition-all duration-300 flex items-center justify-center gap-1.5 ${
            isAdding
              ? 'bg-success text-success-foreground'
              : 'bg-primary hover:bg-primary/90 text-primary-foreground'
          }`}
        >
          <AnimatePresence mode="wait">
            {isAdding ? (
              <motion.span key="added" initial={{ scale: 0 }} animate={{ scale: 1 }} exit={{ scale: 0 }} className="flex items-center gap-1">
                ✓ Added!
              </motion.span>
            ) : (
              <motion.span key="add" initial={{ scale: 0 }} animate={{ scale: 1 }} exit={{ scale: 0 }} className="flex items-center gap-1">
                <ShoppingCart size={12} /> Add to Cart
              </motion.span>
            )}
          </AnimatePresence>
        </motion.button>
      </div>
    </motion.div>
  );
};

export default ProductCard;
