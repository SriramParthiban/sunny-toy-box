import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ShoppingCart, Heart, Search, Menu, X, ChevronDown } from 'lucide-react';
import { useCart } from '@/contexts/CartContext';
import { motion, AnimatePresence } from 'framer-motion';
import SmartSearch from '@/components/SmartSearch';

const navLinks = [
  { to: '/products', label: 'TOP BRANDS', emoji: '🏷️' },
  { to: '/products?age=0-5', label: 'SHOP BY AGE', emoji: '🎂' },
  { to: '/products', label: 'ALL TOYS', emoji: '🧸' },
  { to: '/products?tag=trending', label: 'SPECIAL OFFERS', emoji: '🔥' },
];

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const { totalItems } = useCart();

  return (
    <header className="sticky top-0 z-50">
      {/* Top promo bar */}
      <div className="bg-secondary text-secondary-foreground text-center text-[11px] md:text-xs py-1.5 font-bold tracking-wide">
        🎉 Free Shipping on orders above ₹999! Use code <span className="bg-foreground/10 px-1.5 rounded font-mono">TOYS10</span> for 10% off 🎈
      </div>

      {/* Main header - red bar like FunCorp */}
      <div className="bg-primary">
        <div className="container flex items-center justify-between h-14 md:h-16 gap-3">
          {/* Mobile menu toggle */}
          <button onClick={() => setMenuOpen(!menuOpen)} className="lg:hidden p-2 text-primary-foreground hover:bg-primary-foreground/10 rounded-xl transition-colors">
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>

          {/* Logo */}
          <Link to="/" className="flex items-center gap-1.5 font-display font-black text-xl md:text-2xl shrink-0 text-primary-foreground">
            <span className="text-2xl md:text-3xl">🧸</span>
            <span>Toy</span>
            <span className="text-secondary">Store</span>
          </Link>

          {/* Desktop search bar - centered like FunCorp */}
          <div className="hidden md:flex flex-1 max-w-lg mx-6">
            <SmartSearch className="w-full" />
          </div>

          {/* Actions */}
          <div className="flex items-center gap-1">
            <button onClick={() => setSearchOpen(!searchOpen)} className="md:hidden p-2 text-primary-foreground hover:bg-primary-foreground/10 rounded-xl transition-colors">
              <Search size={20} />
            </button>
            <Link to="/wishlist" className="p-2 relative text-primary-foreground hover:bg-primary-foreground/10 rounded-xl transition-colors">
              <Heart size={20} />
            </Link>
            <Link to="/cart" className="p-2 relative text-primary-foreground hover:bg-primary-foreground/10 rounded-xl transition-colors">
              <ShoppingCart size={20} />
              <AnimatePresence>
                {totalItems > 0 && (
                  <motion.span
                    key={totalItems}
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    exit={{ scale: 0 }}
                    className="absolute -top-0.5 -right-0.5 bg-secondary text-secondary-foreground text-[10px] font-black w-5 h-5 rounded-full flex items-center justify-center"
                  >
                    {totalItems}
                  </motion.span>
                )}
              </AnimatePresence>
            </Link>
          </div>
        </div>
      </div>

      {/* Desktop nav bar */}
      <nav className="hidden lg:block bg-card border-b shadow-sm">
        <div className="container flex items-center justify-center gap-8 h-11 font-display font-bold text-sm tracking-wide">
          {navLinks.map(link => (
            <Link key={link.label} to={link.to}
              className="flex items-center gap-1.5 hover:text-primary transition-colors">
              <span>{link.emoji}</span>
              {link.label}
            </Link>
          ))}
          <Link to="/account" className="flex items-center gap-1.5 hover:text-primary transition-colors">
            <span>📞</span>
            CONTACT US
          </Link>
        </div>
      </nav>

      {/* Mobile search */}
      <AnimatePresence>
        {searchOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden px-4 pb-3 bg-primary overflow-hidden"
          >
            <SmartSearch onClose={() => setSearchOpen(false)} />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mobile nav drawer */}
      <AnimatePresence>
        {menuOpen && (
          <motion.nav
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="lg:hidden border-t bg-card px-4 py-3 space-y-1 font-semibold text-sm overflow-hidden shadow-lg"
          >
            {[
              { to: '/', label: '🏠 Home' },
              { to: '/products', label: '🧸 All Toys' },
              { to: '/products?age=0-5', label: '🍼 0-5 Years' },
              { to: '/products?age=5-10', label: '🎮 5-10 Years' },
              { to: '/products?age=10-15', label: '🔬 10-15 Years' },
              { to: '/products?age=15-18', label: '🎯 15-18 Years' },
              { to: '/products?tag=trending', label: '🔥 Special Offers' },
              { to: '/wishlist', label: '❤️ Wishlist' },
              { to: '/account', label: '👤 My Account' },
            ].map(link => (
              <Link key={link.to} to={link.to} onClick={() => setMenuOpen(false)}
                className="block py-2.5 px-3 rounded-xl hover:bg-muted transition-colors">
                {link.label}
              </Link>
            ))}
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
