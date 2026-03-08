import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Star, Truck, ShieldCheck, Gift, ChevronRight } from 'lucide-react';
import { products } from '@/data/products';
import ProductCard from '@/components/ProductCard';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const ageCategories = [
  { range: '0-5', label: '0-5 Years', emoji: '🍼', desc: 'Babies & Toddlers', color: 'from-pink-300 to-pink-400' },
  { range: '5-10', label: '5-10 Years', emoji: '🎮', desc: 'Kids', color: 'from-blue-300 to-blue-400' },
  { range: '10-15', label: '10-15 Years', emoji: '🔬', desc: 'Pre-teens', color: 'from-green-300 to-green-400' },
  { range: '15-18', label: '15-18 Years', emoji: '🎯', desc: 'Teens', color: 'from-purple-300 to-purple-400' },
];

const testimonials = [
  { name: 'Priya S.', text: 'My kids love every toy we ordered! Fast delivery and great quality.', rating: 5 },
  { name: 'Rahul K.', text: 'Best toy store online. The robotics kit was amazing for my son.', rating: 5 },
  { name: 'Ananya M.', text: 'Beautiful packaging and the gift wrap option is wonderful.', rating: 5 },
];

const Index = () => {
  const featured = products.filter(p => p.tags.includes('featured'));
  const trending = products.filter(p => p.tags.includes('trending'));
  const bestsellers = products.filter(p => p.tags.includes('bestseller'));

  return (
    <div className="pb-4">
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-primary via-primary to-secondary overflow-hidden">
        <div className="container py-12 md:py-20 relative z-10">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }}>
              <h1 className="font-display font-black text-3xl md:text-5xl lg:text-6xl text-primary-foreground leading-tight">
                Where Every Toy <br />Sparks <span className="text-card">Joy! ✨</span>
              </h1>
              <p className="mt-4 text-primary-foreground/80 text-base md:text-lg max-w-md">
                Discover thousands of toys for kids aged 0-18. Safe, fun, and educational toys delivered to your doorstep!
              </p>
              <div className="flex gap-3 mt-6">
                <Link to="/products">
                  <Button size="lg" className="bg-card text-foreground hover:bg-card/90 font-bold rounded-xl text-base">
                    Shop Now <ArrowRight size={18} />
                  </Button>
                </Link>
                <Link to="/products?tag=trending">
                  <Button size="lg" variant="outline" className="border-card text-card hover:bg-card/10 font-bold rounded-xl text-base">
                    Trending 🔥
                  </Button>
                </Link>
              </div>
            </motion.div>
            <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6, delay: 0.2 }}
              className="hidden md:flex justify-center text-9xl">
              <span className="animate-bounce-gentle">🧸</span>
              <span className="animate-bounce-gentle" style={{ animationDelay: '0.3s' }}>🎮</span>
              <span className="animate-bounce-gentle" style={{ animationDelay: '0.6s' }}>🎨</span>
            </motion.div>
          </div>
        </div>
        {/* Decorative circles */}
        <div className="absolute top-0 right-0 w-72 h-72 bg-card/5 rounded-full -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-card/5 rounded-full translate-y-1/2 -translate-x-1/2" />
      </section>

      {/* Trust Badges */}
      <section className="bg-card border-b">
        <div className="container py-4 flex flex-wrap justify-center gap-6 md:gap-12 text-xs md:text-sm font-semibold text-muted-foreground">
          <div className="flex items-center gap-2"><Truck size={18} className="text-secondary" /> Free Shipping 999+</div>
          <div className="flex items-center gap-2"><ShieldCheck size={18} className="text-success" /> 100% Safe Toys</div>
          <div className="flex items-center gap-2"><Gift size={18} className="text-secondary" /> Gift Wrapping</div>
          <div className="flex items-center gap-2"><Star size={18} className="text-primary" /> 4.8★ Rated</div>
        </div>
      </section>

      {/* Age Categories */}
      <section className="container py-10">
        <h2 className="font-display font-black text-2xl md:text-3xl text-center mb-8">Shop by Age 🎂</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {ageCategories.map((cat, i) => (
            <motion.div key={cat.range} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }}>
              <Link to={`/products?age=${cat.range}`}
                className={`block bg-gradient-to-br ${cat.color} rounded-2xl p-6 text-center hover:scale-105 transition-transform shadow-md`}>
                <div className="text-4xl md:text-5xl mb-2">{cat.emoji}</div>
                <h3 className="font-display font-bold text-lg">{cat.label}</h3>
                <p className="text-xs opacity-80 mt-1">{cat.desc}</p>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Featured Products */}
      <section className="container py-8">
        <div className="flex items-center justify-between mb-6">
          <h2 className="font-display font-black text-2xl md:text-3xl">Featured Toys ⭐</h2>
          <Link to="/products" className="text-sm font-semibold text-secondary flex items-center gap-1 hover:underline">
            View All <ChevronRight size={16} />
          </Link>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {featured.slice(0, 4).map(p => <ProductCard key={p.id} product={p} />)}
        </div>
      </section>

      {/* Deal Banner */}
      <section className="container py-6">
        <div className="bg-gradient-to-r from-secondary to-primary rounded-2xl p-6 md:p-10 text-center text-primary-foreground">
          <h2 className="font-display font-black text-2xl md:text-4xl">🎉 Mega Toy Sale!</h2>
          <p className="mt-2 text-lg">Up to 40% off on 100+ toys. Limited time offer!</p>
          <Link to="/products">
            <Button size="lg" className="mt-4 bg-card text-foreground hover:bg-card/90 font-bold rounded-xl">
              Shop Deals
            </Button>
          </Link>
        </div>
      </section>

      {/* Trending */}
      <section className="container py-8">
        <h2 className="font-display font-black text-2xl md:text-3xl mb-6">Trending Now 🔥</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {trending.slice(0, 4).map(p => <ProductCard key={p.id} product={p} />)}
        </div>
      </section>

      {/* Bestsellers */}
      <section className="container py-8">
        <h2 className="font-display font-black text-2xl md:text-3xl mb-6">Bestsellers 🏆</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {bestsellers.slice(0, 4).map(p => <ProductCard key={p.id} product={p} />)}
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-muted py-10">
        <div className="container">
          <h2 className="font-display font-black text-2xl md:text-3xl text-center mb-8">Happy Parents 💛</h2>
          <div className="grid md:grid-cols-3 gap-4">
            {testimonials.map((t, i) => (
              <div key={i} className="bg-card rounded-2xl p-6 shadow-sm">
                <div className="flex gap-0.5 mb-3">
                  {Array.from({ length: t.rating }).map((_, j) => <Star key={j} size={14} className="fill-primary text-primary" />)}
                </div>
                <p className="text-sm italic text-muted-foreground">"{t.text}"</p>
                <p className="mt-3 font-bold text-sm">{t.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="container py-10">
        <div className="bg-primary rounded-2xl p-6 md:p-10 text-center">
          <h2 className="font-display font-black text-2xl md:text-3xl text-primary-foreground">Stay Updated! 📬</h2>
          <p className="mt-2 text-primary-foreground/80">Get notified about new arrivals and exclusive deals.</p>
          <form className="flex gap-2 max-w-md mx-auto mt-4" onSubmit={e => e.preventDefault()}>
            <Input placeholder="Enter your email" className="rounded-xl bg-card border-none flex-1" />
            <Button className="bg-secondary text-secondary-foreground hover:bg-secondary/90 font-bold rounded-xl">Subscribe</Button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Index;
