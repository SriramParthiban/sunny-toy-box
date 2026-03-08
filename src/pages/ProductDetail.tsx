import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Star, Heart, ShoppingCart, Truck, RotateCcw, ShieldCheck, Minus, Plus, ChevronRight, Eye, Share2, Package } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { products, reviews as allReviews, Product } from '@/data/products';
import { useCart } from '@/contexts/CartContext';
import { useWishlist } from '@/contexts/WishlistContext';
import ProductCard from '@/components/ProductCard';
import QuickViewModal from '@/components/QuickViewModal';
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
  const [activeTab, setActiveTab] = useState<'features' | 'specs' | 'reviews'>('features');
  const [quickViewProduct, setQuickViewProduct] = useState<Product | null>(null);
  const [isAdding, setIsAdding] = useState(false);
  const [zoomActive, setZoomActive] = useState(false);

  // Track recently viewed
  useEffect(() => {
    if (product) {
      const recent = JSON.parse(localStorage.getItem('toystore-recent') || '[]');
      const updated = [product.id, ...recent.filter((id: string) => id !== product.id)].slice(0, 10);
      localStorage.setItem('toystore-recent', JSON.stringify(updated));
    }
  }, [product]);

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
  const related = products.filter(p => p.category === product.category && p.id !== product.id).slice(0, 8);
  const sameAge = products.filter(p => p.ageRange === product.ageRange && p.id !== product.id && p.category !== product.category).slice(0, 8);
  const recentIds = JSON.parse(localStorage.getItem('toystore-recent') || '[]') as string[];
  const recentlyViewed = recentIds.map(rid => products.find(p => p.id === rid)).filter(Boolean).filter(p => p!.id !== product.id).slice(0, 8) as Product[];
  const wishlisted = isInWishlist(product.id);
  const savings = product.originalPrice - product.price;

  const deliveryDate = new Date();
  deliveryDate.setDate(deliveryDate.getDate() + (product.price >= 999 ? 3 : 5));
  const deliveryStr = deliveryDate.toLocaleDateString('en-IN', { weekday: 'long', month: 'short', day: 'numeric' });

  // Rating breakdown (simulated)
  const ratingBreakdown = [
    { stars: 5, percent: 65 },
    { stars: 4, percent: 22 },
    { stars: 3, percent: 8 },
    { stars: 2, percent: 3 },
    { stars: 1, percent: 2 },
  ];

  const handleAddToCart = () => {
    setIsAdding(true);
    addToCart(product, quantity);
    toast.success('Added to cart! 🛒');
    setTimeout(() => setIsAdding(false), 800);
  };

  return (
    <div className="container py-6 pb-24 md:pb-6">
      {/* Breadcrumb */}
      <div className="flex items-center gap-1 text-xs text-muted-foreground mb-4 overflow-x-auto">
        <Link to="/" className="hover:text-foreground whitespace-nowrap">Home</Link>
        <ChevronRight size={12} className="shrink-0" />
        <Link to="/products" className="hover:text-foreground whitespace-nowrap">Toys</Link>
        <ChevronRight size={12} className="shrink-0" />
        <Link to={`/products?search=${encodeURIComponent(product.category)}`} className="hover:text-foreground whitespace-nowrap">{product.category}</Link>
        <ChevronRight size={12} className="shrink-0" />
        <span className="text-foreground font-semibold truncate">{product.name}</span>
      </div>

      <div className="grid md:grid-cols-2 gap-6 md:gap-8">
        {/* Images */}
        <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }}>
          <div
            className="bg-muted/50 rounded-2xl p-6 aspect-square flex items-center justify-center relative cursor-zoom-in overflow-hidden border border-border/50"
            onClick={() => setZoomActive(!zoomActive)}
          >
            <motion.img
              src={product.images[selectedImage]}
              alt={product.name}
              className="max-h-full object-contain"
              animate={{ scale: zoomActive ? 1.5 : 1 }}
              transition={{ duration: 0.3 }}
            />
            {product.discount > 0 && (
              <span className="absolute top-3 left-3 bg-destructive text-destructive-foreground text-xs font-black px-2.5 py-1 rounded-lg">
                {product.discount}% OFF
              </span>
            )}
            <div className="absolute bottom-3 right-3 text-[10px] text-muted-foreground bg-card/80 px-2 py-0.5 rounded-full">
              {zoomActive ? 'Click to zoom out' : 'Click to zoom in'} 🔍
            </div>
          </div>
          {/* Thumbnails */}
          <div className="flex gap-2 mt-3">
            {product.images.map((img, i) => (
              <button key={i} onClick={() => setSelectedImage(i)}
                className={`w-16 h-16 rounded-xl border-2 p-1 bg-muted/50 transition-all ${i === selectedImage ? 'border-primary shadow-md' : 'border-transparent hover:border-border'}`}>
                <img src={img} alt="" className="w-full h-full object-contain" />
              </button>
            ))}
          </div>
        </motion.div>

        {/* Info */}
        <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="space-y-4">
          <div className="flex items-center gap-2 flex-wrap">
            <span className="text-xs font-bold text-secondary bg-secondary/10 px-2 py-1 rounded-full">{product.ageRange}</span>
            <span className="text-xs font-semibold text-muted-foreground">{product.brand}</span>
            {product.tags.includes('bestseller') && (
              <span className="text-[10px] font-bold text-primary bg-primary/10 px-2 py-0.5 rounded-full">⭐ Bestseller</span>
            )}
            {product.tags.includes('trending') && (
              <span className="text-[10px] font-bold text-secondary bg-secondary/10 px-2 py-0.5 rounded-full">🔥 Trending</span>
            )}
          </div>

          <h1 className="font-display font-black text-2xl md:text-3xl leading-tight">{product.name}</h1>

          {/* Rating */}
          <div className="flex items-center gap-2">
            <div className="flex gap-0.5">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} size={16} className={i < Math.floor(product.rating) ? 'fill-primary text-primary' : 'text-muted'} />
              ))}
            </div>
            <span className="text-sm font-bold">{product.rating}</span>
            <span className="text-sm text-muted-foreground">({product.reviewCount} reviews)</span>
            <span className="text-xs text-muted-foreground">|</span>
            <span className="text-xs text-success font-bold">✓ {product.reviewCount > 100 ? '100+' : product.reviewCount} verified buyers</span>
          </div>

          {/* Price */}
          <div className="bg-muted/50 rounded-2xl p-4 border border-border/50">
            <div className="flex items-baseline gap-3">
              <span className="font-display font-black text-3xl">₹{product.price.toLocaleString()}</span>
              {product.originalPrice > product.price && (
                <>
                  <span className="text-lg text-muted-foreground line-through">MRP ₹{product.originalPrice.toLocaleString()}</span>
                  <span className="bg-success/10 text-success text-sm font-bold px-2 py-0.5 rounded-lg">{product.discount}% OFF</span>
                </>
              )}
            </div>
            {savings > 0 && (
              <p className="text-sm text-success font-bold mt-1">🎉 You save ₹{savings.toLocaleString()} on this order!</p>
            )}
            <p className="text-[10px] text-muted-foreground mt-1">Inclusive of all taxes</p>
          </div>

          {/* Description */}
          <div>
            <p className={`text-sm text-muted-foreground leading-relaxed ${showFullDesc ? '' : 'line-clamp-3'}`}>{product.description}</p>
            <button onClick={() => setShowFullDesc(!showFullDesc)} className="text-xs font-bold text-secondary mt-1 hover:underline">
              {showFullDesc ? 'Show less ↑' : 'Read more ↓'}
            </button>
          </div>

          {/* Trust indicators */}
          <div className="grid grid-cols-3 gap-2">
            <div className="bg-card border border-border/50 rounded-xl p-2.5 text-center">
              <Truck size={18} className="mx-auto text-success mb-1" />
              <p className="text-[10px] font-bold">Free Shipping</p>
              <p className="text-[9px] text-muted-foreground">Above ₹999</p>
            </div>
            <div className="bg-card border border-border/50 rounded-xl p-2.5 text-center">
              <RotateCcw size={18} className="mx-auto text-info mb-1" />
              <p className="text-[10px] font-bold">Easy Returns</p>
              <p className="text-[9px] text-muted-foreground">7-day policy</p>
            </div>
            <div className="bg-card border border-border/50 rounded-xl p-2.5 text-center">
              <ShieldCheck size={18} className="mx-auto text-success mb-1" />
              <p className="text-[10px] font-bold">Safety Certified</p>
              <p className="text-[9px] text-muted-foreground">{product.ageRange}</p>
            </div>
          </div>

          {/* Delivery estimate */}
          <div className="bg-success/5 border border-success/20 rounded-xl p-3 flex items-center gap-2">
            <Package size={18} className="text-success shrink-0" />
            <div>
              <p className="text-sm font-bold">Delivery by <span className="text-success">{deliveryStr}</span></p>
              <p className="text-[10px] text-muted-foreground">Order within 2 hours for fastest delivery</p>
            </div>
          </div>

          {/* Quantity & Actions */}
          <div className="flex items-center gap-3">
            <div className="flex items-center border rounded-xl bg-card">
              <button onClick={() => setQuantity(Math.max(1, quantity - 1))} className="p-2.5 hover:bg-muted rounded-l-xl transition-colors"><Minus size={16} /></button>
              <span className="px-4 font-bold">{quantity}</span>
              <button onClick={() => setQuantity(quantity + 1)} className="p-2.5 hover:bg-muted rounded-r-xl transition-colors"><Plus size={16} /></button>
            </div>
            <span className="text-sm text-muted-foreground">
              {product.stock <= 10 ? (
                <span className="text-destructive font-bold">⚡ Only {product.stock} left!</span>
              ) : (
                `${product.stock} in stock`
              )}
            </span>
          </div>

          <div className="flex gap-2">
            <motion.div className="flex-1" whileTap={{ scale: 0.97 }}>
              <Button onClick={handleAddToCart}
                className={`w-full font-bold rounded-xl h-12 text-base transition-all duration-300 ${isAdding ? 'bg-success text-success-foreground' : 'bg-primary text-primary-foreground'}`}>
                {isAdding ? '✓ Added to Cart!' : <><ShoppingCart size={18} /> Add to Cart</>}
              </Button>
            </motion.div>
            <Button onClick={() => { toggleWishlist(product.id); toast(wishlisted ? 'Removed from wishlist' : 'Added to wishlist ❤️'); }}
              variant="outline" className="rounded-xl h-12 px-4">
              <Heart size={18} className={wishlisted ? 'fill-destructive text-destructive' : ''} />
            </Button>
          </div>

          <Link to={`/checkout?buy=${product.id}&qty=${quantity}`}>
            <Button className="w-full bg-secondary text-secondary-foreground font-bold rounded-xl h-12 text-base hover:bg-secondary/90">
              ⚡ Buy Now
            </Button>
          </Link>
        </motion.div>
      </div>

      {/* Tabs Section */}
      <section className="mt-10">
        <div className="flex gap-1 border-b mb-6 overflow-x-auto">
          {(['features', 'specs', 'reviews'] as const).map(tab => (
            <button key={tab} onClick={() => setActiveTab(tab)}
              className={`px-4 py-2.5 text-sm font-bold whitespace-nowrap border-b-2 transition-colors ${
                activeTab === tab ? 'border-primary text-foreground' : 'border-transparent text-muted-foreground hover:text-foreground'
              }`}>
              {tab === 'features' && '✨ Features'}
              {tab === 'specs' && '📋 Specifications'}
              {tab === 'reviews' && `💬 Reviews (${reviews.length})`}
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div key={activeTab} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} transition={{ duration: 0.2 }}>
            {activeTab === 'features' && (
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <h3 className="font-display font-bold text-lg mb-3">Key Features</h3>
                  <ul className="space-y-2">
                    {product.features.map((f, i) => (
                      <motion.li key={i} initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.05 }}
                        className="text-sm flex items-start gap-2 bg-muted/50 rounded-xl p-3">
                        <span className="text-success text-base">✓</span>{f}
                      </motion.li>
                    ))}
                  </ul>
                </div>
                <div className="bg-muted/30 rounded-2xl p-5 border border-border/30">
                  <h3 className="font-display font-bold text-lg mb-3">Why Parents Love This</h3>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>✅ Safety certified for ages {product.ageRange}</li>
                    <li>✅ Premium quality materials</li>
                    <li>✅ Educational & fun combined</li>
                    <li>✅ Great gift option</li>
                    <li>✅ {product.reviewCount}+ happy customers</li>
                  </ul>
                </div>
              </div>
            )}

            {activeTab === 'specs' && (
              <div className="bg-card rounded-2xl overflow-hidden border border-border/50">
                {Object.entries(product.specifications).map(([key, val], i) => (
                  <div key={key} className={`flex justify-between py-3 px-4 text-sm ${i % 2 === 0 ? 'bg-muted/30' : ''}`}>
                    <span className="text-muted-foreground capitalize font-medium">{key}</span>
                    <span className="font-bold text-right">{val}</span>
                  </div>
                ))}
                <div className={`flex justify-between py-3 px-4 text-sm ${Object.keys(product.specifications).length % 2 === 0 ? 'bg-muted/30' : ''}`}>
                  <span className="text-muted-foreground font-medium">Brand</span>
                  <span className="font-bold">{product.brand}</span>
                </div>
                <div className="flex justify-between py-3 px-4 text-sm bg-muted/30">
                  <span className="text-muted-foreground font-medium">SKU</span>
                  <span className="font-bold">{product.sku}</span>
                </div>
              </div>
            )}

            {activeTab === 'reviews' && (
              <div className="grid md:grid-cols-3 gap-6">
                {/* Rating breakdown */}
                <div className="bg-card rounded-2xl p-5 border border-border/50">
                  <div className="text-center mb-4">
                    <p className="font-display font-black text-4xl">{product.rating}</p>
                    <div className="flex justify-center gap-0.5 my-1">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Star key={i} size={16} className={i < Math.floor(product.rating) ? 'fill-primary text-primary' : 'text-muted'} />
                      ))}
                    </div>
                    <p className="text-xs text-muted-foreground">{product.reviewCount} ratings</p>
                  </div>
                  <div className="space-y-2">
                    {ratingBreakdown.map(r => (
                      <div key={r.stars} className="flex items-center gap-2 text-xs">
                        <span className="w-4 font-bold">{r.stars}★</span>
                        <div className="flex-1 h-2 bg-muted rounded-full overflow-hidden">
                          <div className="h-full bg-primary rounded-full" style={{ width: `${r.percent}%` }} />
                        </div>
                        <span className="w-8 text-right text-muted-foreground">{r.percent}%</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Reviews */}
                <div className="md:col-span-2 space-y-3">
                  {reviews.length > 0 ? (
                    reviews.map((r, i) => (
                      <motion.div key={r.id} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.05 }}
                        className="bg-card rounded-2xl p-4 border border-border/50">
                        <div className="flex items-center gap-2 mb-2">
                          <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center text-xs font-black text-primary">
                            {r.userName.charAt(0)}
                          </div>
                          <div>
                            <span className="font-bold text-sm">{r.userName}</span>
                            <span className="text-[10px] text-success ml-2 font-bold">✓ Verified Purchase</span>
                          </div>
                          <span className="text-[10px] text-muted-foreground ml-auto">{r.date}</span>
                        </div>
                        <div className="flex gap-0.5 mb-1.5">
                          {Array.from({ length: r.rating }).map((_, i) => <Star key={i} size={11} className="fill-primary text-primary" />)}
                        </div>
                        <p className="text-sm text-muted-foreground leading-relaxed">{r.comment}</p>
                      </motion.div>
                    ))
                  ) : (
                    <div className="text-center py-10 bg-muted/30 rounded-2xl">
                      <p className="text-3xl mb-2">📝</p>
                      <p className="text-muted-foreground text-sm">No reviews yet. Be the first to review!</p>
                    </div>
                  )}
                </div>
              </div>
            )}
          </motion.div>
        </AnimatePresence>
      </section>

      {/* Recommendation sections */}
      <RecommendationRow title="Similar Toys 🎁" products={related} onQuickView={setQuickViewProduct} />
      <RecommendationRow title={`Recommended for ${product.ageRange} 👶`} products={sameAge} onQuickView={setQuickViewProduct} />
      {recentlyViewed.length > 0 && (
        <RecommendationRow title="Recently Viewed 👀" products={recentlyViewed} onQuickView={setQuickViewProduct} />
      )}

      <QuickViewModal product={quickViewProduct} onClose={() => setQuickViewProduct(null)} />
    </div>
  );
};

const RecommendationRow = ({ title, products: items, onQuickView }: { title: string; products: Product[]; onQuickView: (p: Product) => void }) => {
  if (items.length === 0) return null;
  return (
    <section className="mt-10">
      <h2 className="font-display font-black text-xl md:text-2xl mb-4">{title}</h2>
      <div className="flex gap-3 overflow-x-auto pb-3 scrollbar-hide -mx-1 px-1">
        {items.map(p => (
          <div key={p.id} className="min-w-[170px] max-w-[200px] shrink-0">
            <ProductCard product={p} onQuickView={onQuickView} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProductDetail;
