import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, Star } from 'lucide-react';
import { Product } from '@/data/products';
import { useCart } from '@/contexts/CartContext';
import { useWishlist } from '@/contexts/WishlistContext';
import { toast } from 'sonner';

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  const { addToCart } = useCart();
  const { isInWishlist, toggleWishlist } = useWishlist();
  const wishlisted = isInWishlist(product.id);

  return (
    <div className="bg-card rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden group relative">
      {/* Wishlist button */}
      <button onClick={() => { toggleWishlist(product.id); toast(wishlisted ? 'Removed from wishlist' : 'Added to wishlist ❤️'); }}
        className="absolute top-3 right-3 z-10 p-1.5 bg-card/80 backdrop-blur rounded-full shadow hover:scale-110 transition-transform">
        <Heart size={16} className={wishlisted ? 'fill-secondary text-secondary' : 'text-muted-foreground'} />
      </button>

      <Link to={`/product/${product.id}`} className="block relative aspect-square bg-muted p-4">
        <img src={product.images[0]} alt={product.name} className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300" loading="lazy" />
        {/* Discount badge */}
        {product.discount > 0 && (
          <span className="absolute top-3 left-3 bg-secondary text-secondary-foreground text-[10px] font-bold px-2 py-1 rounded-full">
            {product.discount}% OFF
          </span>
        )}
        {/* Special badge */}
        {product.badge && (
          <span className="absolute bottom-3 left-3 bg-info text-info-foreground text-[10px] font-bold px-2 py-0.5 rounded-full">
            {product.badge}
          </span>
        )}
        {product.tags.includes('trending') && !product.badge && (
          <span className="absolute bottom-3 left-3 bg-destructive/90 text-destructive-foreground text-[10px] font-bold px-2 py-0.5 rounded-full">
            🔥 Trending
          </span>
        )}
      </Link>

      <div className="p-3 space-y-1.5">
        <div className="flex items-center gap-1.5">
          <span className="text-[10px] font-bold text-secondary bg-secondary/10 px-2 py-0.5 rounded-full">{product.ageRange}</span>
          {product.tags.includes('bestseller') && (
            <span className="text-[10px] font-bold text-primary bg-primary/10 px-2 py-0.5 rounded-full">🏆 Best</span>
          )}
        </div>
        <Link to={`/product/${product.id}`}>
          <h3 className="font-display font-bold text-sm leading-tight line-clamp-2 hover:text-secondary transition-colors">{product.name}</h3>
        </Link>
        <div className="flex items-center gap-1">
          <Star size={11} className="fill-primary text-primary" />
          <span className="text-xs font-semibold">{product.rating}</span>
          <span className="text-[10px] text-muted-foreground">({product.reviewCount})</span>
        </div>
        <div className="flex items-baseline gap-2">
          <span className="font-display font-black text-base">₹{product.price.toLocaleString()}</span>
          {product.originalPrice > product.price && (
            <span className="text-[10px] text-muted-foreground line-through">₹{product.originalPrice.toLocaleString()}</span>
          )}
        </div>
        <button
          onClick={() => { addToCart(product); toast.success(`${product.name} added to cart! 🛒`); }}
          className="w-full mt-1 bg-primary hover:bg-primary/90 text-primary-foreground font-bold text-xs py-2.5 rounded-xl transition-colors active:scale-95"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
