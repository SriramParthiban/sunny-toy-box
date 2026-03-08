import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, ShoppingCart, Trash2 } from 'lucide-react';
import { products } from '@/data/products';
import { useWishlist } from '@/contexts/WishlistContext';
import { useCart } from '@/contexts/CartContext';
import { Button } from '@/components/ui/button';
import { toast } from 'sonner';

const Wishlist = () => {
  const { wishlist, removeFromWishlist } = useWishlist();
  const { addToCart } = useCart();
  const wishlistProducts = products.filter(p => wishlist.includes(p.id));

  if (wishlistProducts.length === 0) {
    return (
      <div className="container py-20 text-center pb-24">
        <div className="text-6xl mb-4">❤️</div>
        <h1 className="font-display font-black text-2xl">Your wishlist is empty</h1>
        <p className="text-muted-foreground mt-2">Save toys you love for later!</p>
        <Link to="/products"><Button className="mt-4 bg-primary text-primary-foreground font-bold rounded-xl">Browse Toys</Button></Link>
      </div>
    );
  }

  return (
    <div className="container py-6 pb-24 md:pb-6">
      <h1 className="font-display font-black text-2xl md:text-3xl mb-6">My Wishlist ❤️ ({wishlistProducts.length})</h1>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {wishlistProducts.map(product => (
          <div key={product.id} className="bg-card rounded-2xl shadow-sm overflow-hidden">
            <Link to={`/product/${product.id}`} className="block aspect-square bg-muted p-4">
              <img src={product.images[0]} alt={product.name} className="w-full h-full object-contain" />
            </Link>
            <div className="p-3 space-y-2">
              <h3 className="font-display font-bold text-sm line-clamp-2">{product.name}</h3>
              <span className="font-display font-black">₹{product.price.toLocaleString()}</span>
              <div className="flex gap-2">
                <Button size="sm" className="flex-1 bg-primary text-primary-foreground font-bold rounded-xl text-xs"
                  onClick={() => { addToCart(product); removeFromWishlist(product.id); toast.success('Moved to cart! 🛒'); }}>
                  <ShoppingCart size={12} /> Add to Cart
                </Button>
                <Button size="sm" variant="outline" className="rounded-xl"
                  onClick={() => { removeFromWishlist(product.id); toast('Removed from wishlist'); }}>
                  <Trash2 size={12} />
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Wishlist;
