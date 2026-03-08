import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ShoppingCart, Heart, Search, Menu, X, User } from 'lucide-react';
import { useCart } from '@/contexts/CartContext';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import SmartSearch from '@/components/SmartSearch';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const { totalItems } = useCart();

  return (
    <header className="sticky top-0 z-50 bg-card shadow-md">
      {/* Top bar */}
      <div className="bg-primary text-primary-foreground text-center text-[11px] md:text-xs py-1.5 font-semibold">
        🎉 Free Shipping on orders above ₹999! Use code <span className="bg-card/20 px-1 rounded font-mono">TOYS10</span> for 10% off 🎈
      </div>

      <div className="container flex items-center justify-between h-14 md:h-16 gap-2">
        {/* Mobile menu toggle */}
        <button onClick={() => setMenuOpen(!menuOpen)} className="lg:hidden p-2 hover:bg-muted rounded-xl transition-colors">
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>

        {/* Logo */}
        <Link to="/" className="flex items-center gap-1.5 font-display font-black text-xl md:text-2xl shrink-0">
          <span className="text-2xl md:text-3xl">🧸</span>
          <span>Toy</span>
          <span className="text-secondary">Store</span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-5 font-semibold text-sm">
          <Link to="/" className="hover:text-secondary transition-colors">Home</Link>
          <Link to="/products" className="hover:text-secondary transition-colors">All Toys</Link>
          <Link to="/products?age=0-5" className="hover:text-secondary transition-colors">0-5 Years</Link>
          <Link to="/products?age=5-10" className="hover:text-secondary transition-colors">5-10 Years</Link>
          <Link to="/products?age=10-15" className="hover:text-secondary transition-colors">10-15 Years</Link>
          <Link to="/products?age=15-18" className="hover:text-secondary transition-colors">15-18 Years</Link>
        </nav>

        {/* Desktop search */}
        <SmartSearch className="hidden md:block flex-1 max-w-sm mx-4" />

        {/* Actions */}
        <div className="flex items-center gap-0.5">
          <button onClick={() => setSearchOpen(!searchOpen)} className="md:hidden p-2 hover:bg-muted rounded-xl transition-colors">
            <Search size={20} />
          </button>
          <Link to="/wishlist" className="p-2 relative hover:bg-muted rounded-xl transition-colors">
            <Heart size={20} />
          </Link>
          <Link to="/cart" className="p-2 relative hover:bg-muted rounded-xl transition-colors">
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

      {/* Mobile search */}
      <AnimatePresence>
        {searchOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden px-4 pb-3 overflow-hidden"
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
            className="lg:hidden border-t bg-card px-4 py-3 space-y-1 font-semibold text-sm overflow-hidden"
          >
            {[
              { to: '/', label: '🏠 Home' },
              { to: '/products', label: '🧸 All Toys' },
              { to: '/products?age=0-5', label: '🍼 0-5 Years' },
              { to: '/products?age=5-10', label: '🎮 5-10 Years' },
              { to: '/products?age=10-15', label: '🔬 10-15 Years' },
              { to: '/products?age=15-18', label: '🎯 15-18 Years' },
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
