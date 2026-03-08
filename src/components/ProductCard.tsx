import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, ShoppingCart, Star } from 'lucide-react';
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
    <div className="bg-card rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden group">
      <Link to={`/product/${product.id}`} className="block relative aspect-square bg-muted p-4">
        <img src={product.images[0]} alt={product.name} className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300" loading="lazy" />
        {product.discount > 0 && (
          <span className="absolute top-3 left-3 bg-secondary text-secondary-foreground text-xs font-bold px-2 py-1 rounded-full">
            -{product.discount}%
          </span>
        )}
        {product.tags.includes('trending') && (
          <span className="absolute top-3 right-10 bg-info text-info-foreground text-xs font-bold px-2 py-1 rounded-full">
            🔥 Trending
          </span>
        )}
      </Link>

      <button onClick={() => { toggleWishlist(product.id); toast(wishlisted ? 'Removed from wishlist' : 'Added to wishlist ❤️'); }}
        className="absolute top-3 right-3 p-1.5 bg-card/80 backdrop-blur rounded-full shadow">
        <Heart size={16} className={wishlisted ? 'fill-secondary text-secondary' : 'text-muted-foreground'} />
      </button>

      <div className="p-3 md:p-4 space-y-1.5">
        <span className="text-[10px] font-bold text-secondary bg-secondary/10 px-2 py-0.5 rounded-full">{product.ageRange}</span>
        <Link to={`/product/${product.id}`}>
          <h3 className="font-display font-bold text-sm md:text-base line-clamp-2 hover:text-secondary transition-colors">{product.name}</h3>
        </Link>
        <div className="flex items-center gap-1">
          <Star size={12} className="fill-primary text-primary" />
          <span className="text-xs font-semibold">{product.rating}</span>
          <span className="text-xs text-muted-foreground">({product.reviewCount})</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="font-display font-black text-lg">₹{product.price.toLocaleString()}</span>
          {product.originalPrice > product.price && (
            <span className="text-xs text-muted-foreground line-through">₹{product.originalPrice.toLocaleString()}</span>
          )}
        </div>
        <button
          onClick={() => { addToCart(product); toast.success(`${product.name} added to cart! 🛒`); }}
          className="w-full mt-2 bg-primary hover:bg-primary/90 text-primary-foreground font-bold text-sm py-2.5 rounded-xl transition-colors"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
