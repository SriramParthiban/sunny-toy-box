import React, { useState, useRef, useEffect, useMemo } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Search, X, ArrowRight } from 'lucide-react';
import { products } from '@/data/products';
import { motion, AnimatePresence } from 'framer-motion';

const SmartSearch = ({ className = '', onClose }: { className?: string; onClose?: () => void }) => {
  const [query, setQuery] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  const results = useMemo(() => {
    if (!query.trim()) return [];
    const q = query.toLowerCase();
    return products.filter(p =>
      p.name.toLowerCase().includes(q) ||
      p.category.toLowerCase().includes(q) ||
      p.ageRange.toLowerCase().includes(q) ||
      p.brand.toLowerCase().includes(q) ||
      p.theme?.toLowerCase().includes(q) ||
      p.tags.some(t => t.toLowerCase().includes(q))
    ).slice(0, 6);
  }, [query]);

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      navigate(`/products?search=${encodeURIComponent(query.trim())}`);
      setQuery('');
      setIsOpen(false);
      onClose?.();
    }
  };

  const handleSelect = (productId: string) => {
    navigate(`/product/${productId}`);
    setQuery('');
    setIsOpen(false);
    onClose?.();
  };

  return (
    <div ref={containerRef} className={`relative ${className}`}>
      <form onSubmit={handleSubmit} className="relative">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" size={16} />
        <input
          ref={inputRef}
          type="text"
          placeholder="Search toys, brands, categories..."
          value={query}
          onChange={e => { setQuery(e.target.value); setIsOpen(true); }}
          onFocus={() => setIsOpen(true)}
          className="w-full pl-9 pr-8 h-9 rounded-full bg-muted border-none text-sm font-medium focus:outline-none focus:ring-2 focus:ring-primary/50 placeholder:text-muted-foreground/60"
        />
        {query && (
          <button type="button" onClick={() => { setQuery(''); inputRef.current?.focus(); }}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground">
            <X size={14} />
          </button>
        )}
      </form>

      <AnimatePresence>
        {isOpen && query.trim() && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.15 }}
            className="absolute top-full left-0 right-0 mt-1.5 bg-card border border-border rounded-2xl shadow-xl overflow-hidden z-50 max-h-[400px] overflow-y-auto"
          >
            {results.length > 0 ? (
              <>
                <div className="p-2 space-y-0.5">
                  {results.map((product, i) => (
                    <motion.button
                      key={product.id}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.03 }}
                      onClick={() => handleSelect(product.id)}
                      className="w-full flex items-center gap-3 p-2 rounded-xl hover:bg-muted transition-colors text-left"
                    >
                      <div className="w-10 h-10 bg-muted rounded-lg p-1 shrink-0">
                        <img src={product.images[0]} alt="" className="w-full h-full object-contain" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-semibold truncate">{product.name}</p>
                        <div className="flex items-center gap-2 text-[10px] text-muted-foreground">
                          <span>{product.category}</span>
                          <span>·</span>
                          <span>{product.ageRange}</span>
                        </div>
                      </div>
                      <div className="text-right shrink-0">
                        <p className="text-sm font-black">₹{product.price.toLocaleString()}</p>
                        {product.discount > 0 && (
                          <span className="text-[9px] font-bold text-success">{product.discount}% OFF</span>
                        )}
                      </div>
                    </motion.button>
                  ))}
                </div>
                <button onClick={handleSubmit}
                  className="w-full py-2.5 bg-muted/50 text-xs font-bold text-secondary flex items-center justify-center gap-1 hover:bg-muted transition-colors border-t">
                  View all results for "{query}" <ArrowRight size={12} />
                </button>
              </>
            ) : (
              <div className="p-6 text-center">
                <p className="text-2xl mb-1">🔍</p>
                <p className="text-sm text-muted-foreground">No results for "{query}"</p>
                <p className="text-xs text-muted-foreground mt-1">Try searching for "teddy bear" or "robotics"</p>
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default SmartSearch;
