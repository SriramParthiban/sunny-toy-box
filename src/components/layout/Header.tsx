import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ShoppingCart, Heart, Search, Menu, X, User } from 'lucide-react';
import { useCart } from '@/contexts/CartContext';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const { totalItems } = useCart();
  const navigate = useNavigate();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/products?search=${encodeURIComponent(searchQuery.trim())}`);
      setSearchOpen(false);
      setSearchQuery('');
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-card shadow-md">
      {/* Top bar */}
      <div className="bg-primary text-primary-foreground text-center text-xs py-1.5 font-semibold">
        🎉 Free Shipping on orders above ₹999! Use code TOYS10 for 10% off 🎈
      </div>

      <div className="container flex items-center justify-between h-14 md:h-16 gap-2">
        {/* Mobile menu toggle */}
        <button onClick={() => setMenuOpen(!menuOpen)} className="lg:hidden p-2">
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>

        {/* Logo */}
        <Link to="/" className="flex items-center gap-1.5 font-display font-black text-xl md:text-2xl">
          <span className="text-2xl md:text-3xl">🧸</span>
          <span className="text-primary-foreground">Toy</span>
          <span className="text-secondary">Store</span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-6 font-semibold text-sm">
          <Link to="/" className="hover:text-secondary transition-colors">Home</Link>
          <Link to="/products" className="hover:text-secondary transition-colors">All Toys</Link>
          <Link to="/products?age=0-5" className="hover:text-secondary transition-colors">0-5 Years</Link>
          <Link to="/products?age=5-10" className="hover:text-secondary transition-colors">5-10 Years</Link>
          <Link to="/products?age=10-15" className="hover:text-secondary transition-colors">10-15 Years</Link>
          <Link to="/products?age=15-18" className="hover:text-secondary transition-colors">15-18 Years</Link>
        </nav>

        {/* Desktop search */}
        <form onSubmit={handleSearch} className="hidden md:flex items-center flex-1 max-w-sm mx-4">
          <div className="relative w-full">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" size={16} />
            <Input
              placeholder="Search toys..."
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
              className="pl-9 h-9 rounded-full bg-muted border-none"
            />
          </div>
        </form>

        {/* Actions */}
        <div className="flex items-center gap-1">
          <button onClick={() => setSearchOpen(!searchOpen)} className="md:hidden p-2">
            <Search size={20} />
          </button>
          <Link to="/wishlist" className="p-2 relative">
            <Heart size={20} />
          </Link>
          <Link to="/cart" className="p-2 relative">
            <ShoppingCart size={20} />
            {totalItems > 0 && (
              <span className="absolute -top-0.5 -right-0.5 bg-secondary text-secondary-foreground text-xs font-bold w-5 h-5 rounded-full flex items-center justify-center">
                {totalItems}
              </span>
            )}
          </Link>
        </div>
      </div>

      {/* Mobile search */}
      {searchOpen && (
        <form onSubmit={handleSearch} className="md:hidden px-4 pb-3">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" size={16} />
            <Input
              placeholder="Search toys..."
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
              className="pl-9 rounded-full bg-muted border-none"
              autoFocus
            />
          </div>
        </form>
      )}

      {/* Mobile nav drawer */}
      {menuOpen && (
        <nav className="lg:hidden border-t bg-card px-4 py-3 space-y-2 font-semibold text-sm">
          {[
            { to: '/', label: 'Home' },
            { to: '/products', label: 'All Toys' },
            { to: '/products?age=0-5', label: '🍼 0-5 Years' },
            { to: '/products?age=5-10', label: '🎮 5-10 Years' },
            { to: '/products?age=10-15', label: '🔬 10-15 Years' },
            { to: '/products?age=15-18', label: '🎯 15-18 Years' },
            { to: '/wishlist', label: '❤️ Wishlist' },
          ].map(link => (
            <Link key={link.to} to={link.to} onClick={() => setMenuOpen(false)}
              className="block py-2 px-3 rounded-lg hover:bg-muted transition-colors">
              {link.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
};

export default Header;
