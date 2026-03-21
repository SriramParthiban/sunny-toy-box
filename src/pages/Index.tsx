import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Star, Truck, ShieldCheck, ChevronRight, Search, CreditCard, RotateCcw, Users, Award, Sparkles } from 'lucide-react';
import { products, popularSearches, themes, Product } from '@/data/products';
import ProductCard from '@/components/ProductCard';
import QuickViewModal from '@/components/QuickViewModal';
import TrustBadges from '@/components/TrustBadges';
import RecentlyViewed from '@/components/RecentlyViewed';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const ageCategories = [
  { range: '0-5', label: '0-5 Years', emoji: '🍼', desc: 'Babies & Toddlers', illustration: '🧸' },
  { range: '5-10', label: '5-10 Years', emoji: '🎮', desc: 'Kids', illustration: '🚀' },
  { range: '10-15', label: '10-15 Years', emoji: '🔬', desc: 'Pre-teens', illustration: '🤖' },
  { range: '15-18', label: '15-18 Years', emoji: '🎯', desc: 'Teens', illustration: '🎸' },
];

const shopCategories = [
  { name: 'Dolls', emoji: '🎀', link: '/products?search=Doll' },
  { name: 'Cars & Vehicles', emoji: '🏎️', link: '/products?search=Car' },
  { name: 'Board Games', emoji: '🎲', link: '/products?search=Board' },
  { name: 'Action Figures', emoji: '🦸', link: '/products?search=Action' },
  { name: 'Building Blocks', emoji: '🧱', link: '/products?search=Block' },
  { name: 'Educational', emoji: '📚', link: '/products?search=STEM' },
  { name: 'Soft Toys', emoji: '🧸', link: '/products?search=Plush' },
  { name: 'Art & Craft', emoji: '🎨', link: '/products?search=Art' },
  { name: 'Musical', emoji: '🎵', link: '/products?search=Music' },
  { name: 'Outdoor', emoji: '⚽', link: '/products?search=Cricket' },
];

const topBrands = [
  { name: "RoboGenius", emoji: "🤖" },
  { name: "SpeedKing", emoji: "🏎️" },
  { name: "BlockBuddies", emoji: "🧱" },
  { name: "ScienceWhiz", emoji: "🔬" },
  { name: "DreamHouse", emoji: "🏠" },
  { name: "GameMasters", emoji: "🎲" },
  { name: "ArtStar", emoji: "🎨" },
  { name: "MelodyKids", emoji: "🎵" },
];

const testimonials = [
  { name: 'Priya S.', text: 'My kids love every toy we ordered! Fast delivery and amazing quality.', rating: 5, city: 'Mumbai' },
  { name: 'Rahul K.', text: 'Best toy store online in India. The robotics kit was incredible for my son.', rating: 5, city: 'Delhi' },
  { name: 'Ananya M.', text: 'Beautiful gift wrapping and the coupon codes are a great bonus!', rating: 5, city: 'Bangalore' },
  { name: 'Vikram R.', text: 'Amazing RC car and super fast delivery. Will shop again!', rating: 5, city: 'Chennai' },
];

const Index = () => {
  const featured = products.filter(p => p.tags.includes('featured'));
  const trending = products.filter(p => p.tags.includes('trending'));
  const bestsellers = products.filter(p => p.tags.includes('bestseller'));
  const deals = products.filter(p => p.discount >= 40);
  const [quickViewProduct, setQuickViewProduct] = useState<Product | null>(null);

  return (
    <div className="pb-4">
      {/* Brand Carousel */}
      <section className="bg-card border-b overflow-hidden">
        <div className="container py-3">
          <div className="flex items-center justify-center gap-6 md:gap-10 overflow-x-auto scrollbar-hide">
            {topBrands.map((b, i) => (
              <Link key={b.name} to={`/products?search=${encodeURIComponent(b.name)}`}
                className="flex items-center gap-1.5 shrink-0 hover:scale-110 transition-transform">
                <span className="text-2xl md:text-3xl">{b.emoji}</span>
                <span className="text-xs md:text-sm font-black text-foreground/70 hidden md:block">{b.name}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Hero Bento Grid - FunCorp Style */}
      <section className="container py-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-4">
          {/* Main Hero Banner */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="md:col-span-2 md:row-span-2 bg-gradient-to-br from-primary to-primary/80 rounded-2xl p-6 md:p-10 relative overflow-hidden flex flex-col justify-center min-h-[280px] md:min-h-[400px]"
          >
            <span className="inline-block bg-card/20 text-primary-foreground text-xs font-bold px-3 py-1 rounded-full mb-3 w-fit animate-sparkle">
              🎈 India's #1 Toy Store
            </span>
            <h1 className="font-display font-black text-3xl md:text-5xl text-primary-foreground leading-tight">
              Where Every Toy<br />Sparks <span className="text-secondary">Joy!</span> ✨
            </h1>
            <p className="mt-3 text-primary-foreground/80 text-sm md:text-base max-w-md">
              Discover 100+ amazing toys for kids aged 0-18. Safe, fun & educational. Up to 45% OFF!
            </p>
            <div className="flex gap-3 mt-5">
              <Link to="/products">
                <Button size="lg" className="bg-secondary text-secondary-foreground hover:bg-secondary/90 font-bold rounded-xl text-base shadow-lg">
                  Shop Now <ArrowRight size={18} />
                </Button>
              </Link>
            </div>
            <div className="absolute top-4 right-4 text-7xl md:text-9xl opacity-20 animate-float">🧸</div>
            <div className="absolute bottom-4 right-20 text-5xl md:text-7xl opacity-15 animate-wiggle">🎮</div>
          </motion.div>

          {/* Side Banner 1 */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 }}
          >
            <Link to="/products?tag=trending"
              className="block bg-gradient-to-br from-secondary to-secondary/80 rounded-2xl p-5 relative overflow-hidden min-h-[120px] md:min-h-[190px] hover:scale-[1.02] transition-transform">
              <h3 className="font-display font-black text-lg md:text-xl text-secondary-foreground">🔥 Trending Now</h3>
              <p className="text-xs text-secondary-foreground/70 mt-1">Hottest toys this week</p>
              <span className="inline-flex items-center gap-1 bg-card/20 text-secondary-foreground text-xs font-bold px-3 py-1 rounded-full mt-3">
                Shop Now <ChevronRight size={12} />
              </span>
              <div className="absolute bottom-2 right-2 text-5xl opacity-30 animate-float">🚀</div>
            </Link>
          </motion.div>

          {/* Side Banner 2 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25 }}
          >
            <Link to="/products?search=STEM"
              className="block bg-gradient-to-br from-accent to-accent/80 rounded-2xl p-5 relative overflow-hidden min-h-[120px] md:min-h-[190px] hover:scale-[1.02] transition-transform">
              <h3 className="font-display font-black text-lg md:text-xl text-accent-foreground">🔬 STEM Toys</h3>
              <p className="text-xs text-accent-foreground/70 mt-1">Learn while having fun</p>
              <span className="inline-flex items-center gap-1 bg-card/20 text-accent-foreground text-xs font-bold px-3 py-1 rounded-full mt-3">
                Explore <ChevronRight size={12} />
              </span>
              <div className="absolute bottom-2 right-2 text-5xl opacity-30 animate-wiggle">🤖</div>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="bg-card border-y">
        <div className="container py-3 grid grid-cols-2 md:grid-cols-4 gap-3 text-center">
          <div className="flex flex-col items-center gap-1 py-2">
            <Truck size={20} className="text-primary" />
            <span className="text-xs font-bold">Free Shipping</span>
            <span className="text-[10px] text-muted-foreground">On orders ₹999+</span>
          </div>
          <div className="flex flex-col items-center gap-1 py-2">
            <ShieldCheck size={20} className="text-success" />
            <span className="text-xs font-bold">100% Original</span>
            <span className="text-[10px] text-muted-foreground">Authentic products</span>
          </div>
          <div className="flex flex-col items-center gap-1 py-2">
            <RotateCcw size={20} className="text-accent" />
            <span className="text-xs font-bold">Easy Returns</span>
            <span className="text-[10px] text-muted-foreground">7-day return policy</span>
          </div>
          <div className="flex flex-col items-center gap-1 py-2">
            <CreditCard size={20} className="text-primary" />
            <span className="text-xs font-bold">Secure Payment</span>
            <span className="text-[10px] text-muted-foreground">100% safe checkout</span>
          </div>
        </div>
      </section>

      {/* Shop by Age - FunCorp circular style */}
      <section className="container py-8">
        <h2 className="font-display font-black text-2xl md:text-3xl text-center text-primary mb-2">SHOP BY AGE</h2>
        <p className="text-center text-sm text-muted-foreground mb-6">Find the perfect toy for every age!</p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {ageCategories.map((cat, i) => (
            <motion.div key={cat.range} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }}>
              <Link to={`/products?age=${cat.range}`}
                className="flex flex-col items-center gap-3 group">
                <div className="w-24 h-24 md:w-28 md:h-28 rounded-full bg-primary/10 border-4 border-primary/20 flex items-center justify-center text-5xl md:text-6xl group-hover:scale-110 group-hover:border-primary/50 transition-all duration-300 shadow-lg group-hover:shadow-xl">
                  {cat.illustration}
                </div>
                <div className="text-center">
                  <h3 className="font-display font-bold text-sm md:text-base">{cat.label}</h3>
                  <p className="text-[10px] md:text-xs text-muted-foreground">{cat.desc}</p>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Shop by Category - FunCorp circular icons */}
      <section className="bg-muted/50 py-8">
        <div className="container">
          <h2 className="font-display font-black text-2xl md:text-3xl text-center text-primary mb-2">SHOP BY CATEGORY</h2>
          <p className="text-center text-sm text-muted-foreground mb-6">Browse our wide collection</p>
          <div className="flex gap-4 md:gap-6 overflow-x-auto pb-3 scrollbar-hide justify-start md:justify-center">
            {shopCategories.map((cat, i) => (
              <motion.div key={cat.name} initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: i * 0.05 }}>
                <Link to={cat.link}
                  className="flex flex-col items-center gap-2 min-w-[80px] group">
                  <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-card border-2 border-border hover:border-primary flex items-center justify-center text-3xl md:text-4xl shadow-md group-hover:shadow-lg group-hover:scale-110 transition-all duration-300">
                    {cat.emoji}
                  </div>
                  <span className="text-[10px] md:text-xs font-bold text-center whitespace-nowrap">{cat.name}</span>
                </Link>
              </motion.div>
            ))}
          </div>
          <div className="text-center mt-4">
            <Link to="/products">
              <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground font-bold rounded-xl">
                VIEW ALL PRODUCTS <ArrowRight size={14} />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Popular Searches */}
      <section className="container py-4">
        <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-hide">
          <Search size={14} className="text-muted-foreground shrink-0" />
          <span className="text-xs font-bold text-muted-foreground whitespace-nowrap">Popular:</span>
          {popularSearches.map(term => (
            <Link key={term} to={`/products?search=${encodeURIComponent(term)}`}
              className="text-xs font-semibold bg-muted hover:bg-primary hover:text-primary-foreground px-3 py-1.5 rounded-full whitespace-nowrap transition-colors">
              {term}
            </Link>
          ))}
        </div>
      </section>

      {/* Hot Deals */}
      {deals.length > 0 && (
        <section className="container py-6">
          <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-2xl p-4 md:p-6">
            <div className="flex items-center justify-between mb-4">
              <h2 className="font-display font-black text-xl md:text-2xl">🔥 Hot Deals - Up to 45% OFF</h2>
              <Link to="/products" className="text-sm font-semibold text-primary flex items-center gap-1">
                All <ChevronRight size={14} />
              </Link>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {deals.slice(0, 4).map(p => <ProductCard key={p.id} product={p} onQuickView={setQuickViewProduct} />)}
            </div>
          </div>
        </section>
      )}

      {/* Featured Products */}
      <section className="container py-6">
        <div className="flex items-center justify-between mb-4">
          <h2 className="font-display font-black text-xl md:text-2xl">Featured Toys ⭐</h2>
          <Link to="/products" className="text-sm font-semibold text-primary flex items-center gap-1 hover:underline">
            View All <ChevronRight size={16} />
          </Link>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4">
          {featured.slice(0, 4).map((p, i) => (
            <motion.div key={p.id} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.08 }}>
              <ProductCard product={p} onQuickView={setQuickViewProduct} />
            </motion.div>
          ))}
        </div>
      </section>

      {/* Mega Banner */}
      <section className="container py-4">
        <div className="bg-gradient-to-r from-primary to-primary/80 rounded-2xl p-6 md:p-10 text-center text-primary-foreground relative overflow-hidden">
          <div className="relative z-10">
            <span className="inline-block bg-card/20 text-xs font-bold px-3 py-1 rounded-full mb-2">Limited Time</span>
            <h2 className="font-display font-black text-2xl md:text-4xl">🎉 Mega Toy Sale!</h2>
            <p className="mt-2 text-sm md:text-lg text-primary-foreground/80">
              Use code <span className="bg-card/20 px-2 py-0.5 rounded font-mono font-bold">TOYS10</span> for extra 10% off
            </p>
            <Link to="/products">
              <Button size="lg" className="mt-4 bg-secondary text-secondary-foreground hover:bg-secondary/90 font-bold rounded-xl shadow-lg">
                Shop Deals <ArrowRight size={16} />
              </Button>
            </Link>
          </div>
          <div className="absolute top-0 right-0 text-8xl opacity-10 rotate-12 animate-float">🎁</div>
          <div className="absolute bottom-0 left-4 text-6xl opacity-10 -rotate-12 animate-wiggle">🧸</div>
        </div>
      </section>

      {/* Trending */}
      <section className="container py-6">
        <div className="flex items-center justify-between mb-4">
          <h2 className="font-display font-black text-xl md:text-2xl">Trending Now 🔥</h2>
          <Link to="/products" className="text-sm font-semibold text-primary flex items-center gap-1 hover:underline">
            View All <ChevronRight size={16} />
          </Link>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4">
          {trending.slice(0, 4).map((p, i) => (
            <motion.div key={p.id} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.08 }}>
              <ProductCard product={p} onQuickView={setQuickViewProduct} />
            </motion.div>
          ))}
        </div>
      </section>

      {/* Shop by Theme */}
      <section className="container py-6">
        <h2 className="font-display font-black text-xl md:text-2xl mb-4">Shop by Theme 🎭</h2>
        <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-hide">
          {themes.map((t) => (
            <motion.div key={t.name} whileHover={{ scale: 1.08, rotate: 2 }} whileTap={{ scale: 0.95 }}>
              <Link to={`/products?search=${encodeURIComponent(t.name)}`}
                className="flex flex-col items-center gap-1 bg-card border border-border/50 rounded-2xl p-4 min-w-[90px] hover:border-primary hover:shadow-md transition-all">
                <span className="text-3xl">{t.emoji}</span>
                <span className="text-xs font-bold whitespace-nowrap">{t.name}</span>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Bestsellers */}
      <section className="container py-6">
        <div className="flex items-center justify-between mb-4">
          <h2 className="font-display font-black text-xl md:text-2xl">Bestsellers 🏆</h2>
          <Link to="/products" className="text-sm font-semibold text-primary flex items-center gap-1 hover:underline">
            View All <ChevronRight size={16} />
          </Link>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4">
          {bestsellers.slice(0, 4).map((p, i) => (
            <motion.div key={p.id} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.08 }}>
              <ProductCard product={p} onQuickView={setQuickViewProduct} />
            </motion.div>
          ))}
        </div>
      </section>

      {/* Trust Badges */}
      <TrustBadges />

      {/* Recently Viewed */}
      <RecentlyViewed />

      {/* Social Proof Bar */}
      <section className="bg-primary/5 border-y">
        <div className="container py-3 flex items-center justify-center gap-6 md:gap-10 text-xs font-bold">
          <span className="flex items-center gap-1"><Users size={14} className="text-primary" /> 5000+ Happy Parents</span>
          <span className="flex items-center gap-1"><Star size={14} className="fill-secondary text-secondary" /> 4.7 Average Rating</span>
          <span className="hidden sm:flex items-center gap-1"><Award size={14} className="text-success" /> 100% Original Toys</span>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-muted py-8">
        <div className="container">
          <h2 className="font-display font-black text-xl md:text-2xl text-center mb-6">Happy Parents 💛</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {testimonials.map((t, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }}
                whileHover={{ y: -4 }}
                className="bg-card rounded-2xl p-5 shadow-sm border border-border/30 hover:shadow-md transition-shadow">
                <div className="flex gap-0.5 mb-2">
                  {Array.from({ length: t.rating }).map((_, j) => <Star key={j} size={12} className="fill-secondary text-secondary" />)}
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">"{t.text}"</p>
                <div className="mt-3 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-7 h-7 bg-primary/10 rounded-full flex items-center justify-center text-[10px] font-black text-primary">
                      {t.name.charAt(0)}
                    </div>
                    <div>
                      <span className="font-bold text-sm">{t.name}</span>
                      <span className="text-[9px] text-muted-foreground ml-1">{t.city}</span>
                    </div>
                  </div>
                  <span className="text-[10px] text-success font-bold">✓ Verified</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="container py-8">
        <div className="bg-primary rounded-2xl p-6 md:p-10 text-center relative overflow-hidden">
          <div className="absolute top-2 left-6 text-4xl opacity-20 animate-float">📬</div>
          <div className="absolute bottom-2 right-6 text-4xl opacity-20 animate-wiggle">🎈</div>
          <h2 className="font-display font-black text-xl md:text-3xl text-primary-foreground relative z-10">Stay Updated! 📬</h2>
          <p className="mt-1 text-primary-foreground/80 text-sm relative z-10">Get notified about new arrivals, exclusive deals, and special offers.</p>
          <form className="flex gap-2 max-w-md mx-auto mt-4 relative z-10" onSubmit={e => e.preventDefault()}>
            <Input placeholder="Enter your email" className="rounded-xl bg-card border-none flex-1" />
            <Button className="bg-secondary text-secondary-foreground hover:bg-secondary/90 font-bold rounded-xl">Subscribe</Button>
          </form>
          <p className="text-[10px] text-primary-foreground/50 mt-2 relative z-10">Join 10,000+ happy parents. Unsubscribe anytime.</p>
        </div>
      </section>

      {/* Quick View */}
      <QuickViewModal product={quickViewProduct} onClose={() => setQuickViewProduct(null)} />
    </div>
  );
};

export default Index;
