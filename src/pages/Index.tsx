import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Star, Truck, ShieldCheck, Gift, ChevronRight, Search, Package, CreditCard, RotateCcw } from 'lucide-react';
import { products, popularSearches, themes } from '@/data/products';
import ProductCard from '@/components/ProductCard';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const ageCategories = [
  { range: '0-5', label: '0-5 Years', emoji: '🍼', desc: 'Babies & Toddlers', color: 'from-pink-300 to-pink-400' },
  { range: '5-10', label: '5-10 Years', emoji: '🎮', desc: 'Kids', color: 'from-blue-300 to-blue-400' },
  { range: '10-15', label: '10-15 Years', emoji: '🔬', desc: 'Pre-teens', color: 'from-green-300 to-green-400' },
  { range: '15-18', label: '15-18 Years', emoji: '🎯', desc: 'Teens', color: 'from-purple-300 to-purple-400' },
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
  { name: 'Priya S.', text: 'My kids love every toy we ordered! Fast delivery and amazing quality. The packaging was perfect too.', rating: 5, city: 'Mumbai' },
  { name: 'Rahul K.', text: 'Best toy store online in India. The robotics kit was incredible for my son. He learned so much!', rating: 5, city: 'Delhi' },
  { name: 'Ananya M.', text: 'Beautiful gift wrapping and the coupon codes are a great bonus! My daughter loves her doll house.', rating: 5, city: 'Bangalore' },
  { name: 'Vikram R.', text: 'Amazing RC car and super fast delivery. Customer service is top-notch. Will shop again!', rating: 5, city: 'Chennai' },
];

const Index = () => {
  const featured = products.filter(p => p.tags.includes('featured'));
  const trending = products.filter(p => p.tags.includes('trending'));
  const bestsellers = products.filter(p => p.tags.includes('bestseller'));
  const deals = products.filter(p => p.discount >= 40);

  return (
    <div className="pb-4">
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-primary via-primary to-secondary overflow-hidden">
        <div className="container py-10 md:py-20 relative z-10">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }}>
              <span className="inline-block bg-card/20 text-primary-foreground text-xs font-bold px-3 py-1 rounded-full mb-4">
                🎈 India's #1 Toy Store
              </span>
              <h1 className="font-display font-black text-3xl md:text-5xl lg:text-6xl text-primary-foreground leading-tight">
                Where Every Toy <br />Sparks <span className="text-card">Joy! ✨</span>
              </h1>
              <p className="mt-4 text-primary-foreground/80 text-sm md:text-lg max-w-md">
                Discover 100+ amazing toys for kids aged 0-18. Safe, fun, and educational toys delivered to your doorstep! Up to 45% OFF.
              </p>
              <div className="flex gap-3 mt-6">
                <Link to="/products">
                  <Button size="lg" className="bg-card text-foreground hover:bg-card/90 font-bold rounded-xl text-base shadow-lg">
                    Shop Now <ArrowRight size={18} />
                  </Button>
                </Link>
                <Link to="/products?tag=trending">
                  <Button size="lg" variant="outline" className="border-card text-card hover:bg-card/10 font-bold rounded-xl text-base">
                    Trending 🔥
                  </Button>
                </Link>
              </div>
              <div className="flex gap-4 mt-6 text-primary-foreground/70 text-xs">
                <span>✅ 100% Original</span>
                <span>✅ COD Available</span>
                <span>✅ Free Shipping 999+</span>
              </div>
            </motion.div>
            <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6, delay: 0.2 }}
              className="hidden md:flex justify-center text-8xl gap-4">
              <span className="animate-bounce-gentle">🧸</span>
              <span className="animate-bounce-gentle" style={{ animationDelay: '0.3s' }}>🎮</span>
              <span className="animate-bounce-gentle" style={{ animationDelay: '0.6s' }}>🎨</span>
              <span className="animate-bounce-gentle" style={{ animationDelay: '0.9s' }}>🤖</span>
            </motion.div>
          </div>
        </div>
        <div className="absolute top-0 right-0 w-72 h-72 bg-card/5 rounded-full -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-card/5 rounded-full translate-y-1/2 -translate-x-1/2" />
      </section>

      {/* Trust Badges */}
      <section className="bg-card border-b">
        <div className="container py-3 grid grid-cols-2 md:grid-cols-4 gap-3 text-center">
          <div className="flex flex-col items-center gap-1 py-2">
            <Truck size={20} className="text-secondary" />
            <span className="text-xs font-bold">Free Shipping</span>
            <span className="text-[10px] text-muted-foreground">On orders ₹999+</span>
          </div>
          <div className="flex flex-col items-center gap-1 py-2">
            <ShieldCheck size={20} className="text-success" />
            <span className="text-xs font-bold">100% Original</span>
            <span className="text-[10px] text-muted-foreground">Authentic products</span>
          </div>
          <div className="flex flex-col items-center gap-1 py-2">
            <RotateCcw size={20} className="text-info" />
            <span className="text-xs font-bold">Easy Returns</span>
            <span className="text-[10px] text-muted-foreground">7-day return policy</span>
          </div>
          <div className="flex flex-col items-center gap-1 py-2">
            <CreditCard size={20} className="text-secondary" />
            <span className="text-xs font-bold">Secure Payment</span>
            <span className="text-[10px] text-muted-foreground">100% safe checkout</span>
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

      {/* Age Categories */}
      <section className="container py-6">
        <h2 className="font-display font-black text-2xl md:text-3xl text-center mb-6">Shop by Age 🎂</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
          {ageCategories.map((cat, i) => (
            <motion.div key={cat.range} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }}>
              <Link to={`/products?age=${cat.range}`}
                className={`block bg-gradient-to-br ${cat.color} rounded-2xl p-5 md:p-6 text-center hover:scale-105 transition-transform shadow-md`}>
                <div className="text-4xl md:text-5xl mb-2">{cat.emoji}</div>
                <h3 className="font-display font-bold text-base md:text-lg">{cat.label}</h3>
                <p className="text-xs opacity-80 mt-1">{cat.desc}</p>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Shop by Theme */}
      <section className="container py-6">
        <h2 className="font-display font-black text-xl md:text-2xl mb-4">Shop by Theme 🎭</h2>
        <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-hide">
          {themes.map(t => (
            <Link key={t.name} to={`/products?search=${encodeURIComponent(t.name)}`}
              className="flex flex-col items-center gap-1 bg-card border rounded-2xl p-4 min-w-[90px] hover:border-primary hover:shadow-md transition-all">
              <span className="text-2xl">{t.emoji}</span>
              <span className="text-xs font-bold whitespace-nowrap">{t.name}</span>
            </Link>
          ))}
        </div>
      </section>

      {/* Hot Deals */}
      {deals.length > 0 && (
        <section className="container py-6">
          <div className="bg-gradient-to-r from-destructive/10 to-secondary/10 rounded-2xl p-4 md:p-6">
            <div className="flex items-center justify-between mb-4">
              <h2 className="font-display font-black text-xl md:text-2xl">🔥 Hot Deals - Up to 45% OFF</h2>
              <Link to="/products" className="text-sm font-semibold text-secondary flex items-center gap-1">
                All <ChevronRight size={14} />
              </Link>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {deals.slice(0, 4).map(p => <ProductCard key={p.id} product={p} />)}
            </div>
          </div>
        </section>
      )}

      {/* Featured Products */}
      <section className="container py-6">
        <div className="flex items-center justify-between mb-4">
          <h2 className="font-display font-black text-xl md:text-2xl">Featured Toys ⭐</h2>
          <Link to="/products" className="text-sm font-semibold text-secondary flex items-center gap-1 hover:underline">
            View All <ChevronRight size={16} />
          </Link>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4">
          {featured.slice(0, 4).map(p => <ProductCard key={p.id} product={p} />)}
        </div>
      </section>

      {/* Brand Showcase */}
      <section className="bg-muted py-8">
        <div className="container">
          <h2 className="font-display font-black text-xl md:text-2xl text-center mb-6">Shop by Brand 🏷️</h2>
          <div className="grid grid-cols-4 md:grid-cols-8 gap-3">
            {topBrands.map(b => (
              <Link key={b.name} to={`/products?search=${encodeURIComponent(b.name)}`}
                className="flex flex-col items-center gap-1 bg-card rounded-xl p-3 hover:shadow-md transition-shadow">
                <span className="text-2xl">{b.emoji}</span>
                <span className="text-[10px] md:text-xs font-bold text-center">{b.name}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Deal Banner */}
      <section className="container py-6">
        <div className="bg-gradient-to-r from-secondary to-primary rounded-2xl p-6 md:p-10 text-center text-primary-foreground relative overflow-hidden">
          <div className="relative z-10">
            <span className="inline-block bg-card/20 text-xs font-bold px-3 py-1 rounded-full mb-2">Limited Time</span>
            <h2 className="font-display font-black text-2xl md:text-4xl">🎉 Mega Toy Sale!</h2>
            <p className="mt-2 text-sm md:text-lg">Use code <span className="bg-card/20 px-2 py-0.5 rounded font-mono font-bold">TOYS10</span> for extra 10% off</p>
            <Link to="/products">
              <Button size="lg" className="mt-4 bg-card text-foreground hover:bg-card/90 font-bold rounded-xl shadow-lg">
                Shop Deals <ArrowRight size={16} />
              </Button>
            </Link>
          </div>
          <div className="absolute top-0 right-0 text-8xl opacity-10 rotate-12">🎁</div>
          <div className="absolute bottom-0 left-4 text-6xl opacity-10 -rotate-12">🧸</div>
        </div>
      </section>

      {/* Trending */}
      <section className="container py-6">
        <div className="flex items-center justify-between mb-4">
          <h2 className="font-display font-black text-xl md:text-2xl">Trending Now 🔥</h2>
          <Link to="/products" className="text-sm font-semibold text-secondary flex items-center gap-1 hover:underline">
            View All <ChevronRight size={16} />
          </Link>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4">
          {trending.slice(0, 4).map(p => <ProductCard key={p.id} product={p} />)}
        </div>
      </section>

      {/* Bestsellers */}
      <section className="container py-6">
        <div className="flex items-center justify-between mb-4">
          <h2 className="font-display font-black text-xl md:text-2xl">Bestsellers 🏆</h2>
          <Link to="/products" className="text-sm font-semibold text-secondary flex items-center gap-1 hover:underline">
            View All <ChevronRight size={16} />
          </Link>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4">
          {bestsellers.slice(0, 4).map(p => <ProductCard key={p.id} product={p} />)}
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-muted py-8">
        <div className="container">
          <h2 className="font-display font-black text-xl md:text-2xl text-center mb-6">Happy Parents 💛</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {testimonials.map((t, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }}
                className="bg-card rounded-2xl p-5 shadow-sm">
                <div className="flex gap-0.5 mb-2">
                  {Array.from({ length: t.rating }).map((_, j) => <Star key={j} size={12} className="fill-primary text-primary" />)}
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">"{t.text}"</p>
                <div className="mt-3 flex items-center justify-between">
                  <span className="font-bold text-sm">{t.name}</span>
                  <span className="text-xs text-muted-foreground">{t.city}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="container py-8">
        <div className="bg-primary rounded-2xl p-6 md:p-10 text-center">
          <h2 className="font-display font-black text-xl md:text-3xl text-primary-foreground">Stay Updated! 📬</h2>
          <p className="mt-1 text-primary-foreground/80 text-sm">Get notified about new arrivals, exclusive deals, and special offers.</p>
          <form className="flex gap-2 max-w-md mx-auto mt-4" onSubmit={e => e.preventDefault()}>
            <Input placeholder="Enter your email" className="rounded-xl bg-card border-none flex-1" />
            <Button className="bg-secondary text-secondary-foreground hover:bg-secondary/90 font-bold rounded-xl">Subscribe</Button>
          </form>
          <p className="text-[10px] text-primary-foreground/50 mt-2">Join 10,000+ happy parents. Unsubscribe anytime.</p>
        </div>
      </section>
    </div>
  );
};

export default Index;
