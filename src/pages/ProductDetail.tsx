import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Star, Heart, ShoppingCart, Truck, RotateCcw, ShieldCheck, Minus, Plus, ChevronRight } from 'lucide-react';
import { products, reviews as allReviews } from '@/data/products';
import { useCart } from '@/contexts/CartContext';
import { useWishlist } from '@/contexts/WishlistContext';
import ProductCard from '@/components/ProductCard';
import { Button } from '@/components/ui/button';
import { toast } from 'sonner';

const ProductDetail = () => {
  const { id } = useParams();
  const product = products.find(p => p.id === id);
  const { addToCart } = useCart();
  const { isInWishlist, toggleWishlist } = useWishlist();
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [showFullDesc, setShowFullDesc] = useState(false);

  if (!product) {
    return (
      <div className="container py-20 text-center">
        <div className="text-6xl mb-4">🔍</div>
        <h1 className="font-display font-bold text-2xl">Product not found</h1>
        <Link to="/products"><Button className="mt-4 rounded-xl">Browse Toys</Button></Link>
      </div>
    );
  }

  const reviews = allReviews.filter(r => r.productId === product.id);
  const related = products.filter(p => p.category === product.category && p.id !== product.id).slice(0, 4);
  const wishlisted = isInWishlist(product.id);

  return (
    <div className="container py-6 pb-24 md:pb-6">
      {/* Breadcrumb */}
      <div className="flex items-center gap-1 text-xs text-muted-foreground mb-4">
        <Link to="/" className="hover:text-foreground">Home</Link>
        <ChevronRight size={12} />
        <Link to="/products" className="hover:text-foreground">Toys</Link>
        <ChevronRight size={12} />
        <span className="text-foreground font-semibold truncate">{product.name}</span>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {/* Images */}
        <div>
          <div className="bg-muted rounded-2xl p-6 aspect-square flex items-center justify-center">
            <img src={product.images[selectedImage]} alt={product.name} className="max-h-full object-contain" />
          </div>
          <div className="flex gap-2 mt-3">
            {product.images.map((img, i) => (
              <button key={i} onClick={() => setSelectedImage(i)}
                className={`w-16 h-16 rounded-xl border-2 p-1 bg-muted ${i === selectedImage ? 'border-primary' : 'border-transparent'}`}>
                <img src={img} alt="" className="w-full h-full object-contain" />
              </button>
            ))}
          </div>
        </div>

        {/* Info */}
        <div className="space-y-4">
          <div>
            <span className="text-xs font-bold text-secondary bg-secondary/10 px-2 py-1 rounded-full">{product.ageRange}</span>
            <span className="text-xs font-semibold text-muted-foreground ml-2">{product.brand}</span>
          </div>
          <h1 className="font-display font-black text-2xl md:text-3xl">{product.name}</h1>

          <div className="flex items-center gap-2">
            <div className="flex gap-0.5">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} size={16} className={i < Math.floor(product.rating) ? 'fill-primary text-primary' : 'text-muted'} />
              ))}
            </div>
            <span className="text-sm font-bold">{product.rating}</span>
            <span className="text-sm text-muted-foreground">({product.reviewCount} reviews)</span>
          </div>

          <div className="flex items-baseline gap-3">
            <span className="font-display font-black text-3xl">₹{product.price.toLocaleString()}</span>
            {product.originalPrice > product.price && (
              <>
                <span className="text-lg text-muted-foreground line-through">₹{product.originalPrice.toLocaleString()}</span>
                <span className="bg-success/10 text-success text-sm font-bold px-2 py-0.5 rounded-full">{product.discount}% OFF</span>
              </>
            )}
          </div>

          <p className={`text-sm text-muted-foreground leading-relaxed ${showFullDesc ? '' : 'line-clamp-3'}`}>{product.description}</p>
          <button onClick={() => setShowFullDesc(!showFullDesc)} className="text-xs font-semibold text-secondary">
            {showFullDesc ? 'Show less' : 'Read more'}
          </button>

          {/* Features */}
          <div>
            <h3 className="font-display font-bold mb-2">Key Features</h3>
            <ul className="space-y-1">
              {product.features.map((f, i) => <li key={i} className="text-sm flex items-start gap-2"><span className="text-secondary">✓</span>{f}</li>)}
            </ul>
          </div>

          {/* Quantity & Actions */}
          <div className="flex items-center gap-3">
            <div className="flex items-center border rounded-xl">
              <button onClick={() => setQuantity(Math.max(1, quantity - 1))} className="p-2"><Minus size={16} /></button>
              <span className="px-4 font-bold">{quantity}</span>
              <button onClick={() => setQuantity(quantity + 1)} className="p-2"><Plus size={16} /></button>
            </div>
            <span className="text-sm text-muted-foreground">{product.stock} in stock</span>
          </div>

          <div className="flex gap-3">
            <Button onClick={() => { addToCart(product, quantity); toast.success('Added to cart! 🛒'); }}
              className="flex-1 bg-primary text-primary-foreground font-bold rounded-xl h-12 text-base">
              <ShoppingCart size={18} /> Add to Cart
            </Button>
            <Button onClick={() => { toggleWishlist(product.id); toast(wishlisted ? 'Removed from wishlist' : 'Added to wishlist ❤️'); }}
              variant="outline" className="rounded-xl h-12">
              <Heart size={18} className={wishlisted ? 'fill-secondary text-secondary' : ''} />
            </Button>
          </div>

          <Link to={`/checkout?buy=${product.id}&qty=${quantity}`}>
            <Button className="w-full bg-secondary text-secondary-foreground font-bold rounded-xl h-12 text-base">
              Buy Now
            </Button>
          </Link>

          {/* Delivery info */}
          <div className="bg-muted rounded-2xl p-4 space-y-2 text-sm">
            <div className="flex items-center gap-2"><Truck size={16} className="text-secondary" /> Free delivery on orders above ₹999</div>
            <div className="flex items-center gap-2"><RotateCcw size={16} className="text-info" /> 7-day easy returns</div>
            <div className="flex items-center gap-2"><ShieldCheck size={16} className="text-success" /> Safety certified for ages {product.ageRange}</div>
          </div>

          {/* Specifications */}
          <div>
            <h3 className="font-display font-bold mb-2">Specifications</h3>
            <div className="grid grid-cols-2 gap-2">
              {Object.entries(product.specifications).map(([key, val]) => (
                <div key={key} className="text-sm">
                  <span className="text-muted-foreground capitalize">{key}: </span>
                  <span className="font-semibold">{val}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Reviews */}
      <section className="mt-12">
        <h2 className="font-display font-black text-xl md:text-2xl mb-6">Customer Reviews 💬</h2>
        {reviews.length > 0 ? (
          <div className="space-y-4">
            {reviews.map(r => (
              <div key={r.id} className="bg-card rounded-2xl p-4 shadow-sm">
                <div className="flex items-center gap-2 mb-2">
                  <div className="flex gap-0.5">
                    {Array.from({ length: r.rating }).map((_, i) => <Star key={i} size={12} className="fill-primary text-primary" />)}
                  </div>
                  <span className="font-bold text-sm">{r.userName}</span>
                  <span className="text-xs text-muted-foreground">{r.date}</span>
                </div>
                <p className="text-sm text-muted-foreground">{r.comment}</p>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-muted-foreground text-sm">No reviews yet. Be the first to review!</p>
        )}
      </section>

      {/* Related */}
      {related.length > 0 && (
        <section className="mt-12">
          <h2 className="font-display font-black text-xl md:text-2xl mb-6">You May Also Like 🎁</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {related.map(p => <ProductCard key={p.id} product={p} />)}
          </div>
        </section>
      )}
    </div>
  );
};

export default ProductDetail;
