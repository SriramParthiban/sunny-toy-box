import React, { useState, useMemo, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Filter, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { products, categories, ageRanges, priceRanges } from '@/data/products';
import ProductCard from '@/components/ProductCard';
import { ProductGridSkeleton } from '@/components/ProductCardSkeleton';
import QuickViewModal from '@/components/QuickViewModal';
import { Button } from '@/components/ui/button';
import { Product } from '@/data/products';

const sortOptions = [
  { value: 'popular', label: 'Popular' },
  { value: 'price-asc', label: 'Price: Low to High' },
  { value: 'price-desc', label: 'Price: High to Low' },
  { value: 'rating', label: 'Top Rated' },
  { value: 'discount', label: 'Biggest Discount' },
];

const Products = () => {
  const [searchParams] = useSearchParams();
  const [filterOpen, setFilterOpen] = useState(false);
  const [sort, setSort] = useState('popular');
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [selectedAge, setSelectedAge] = useState<string>(searchParams.get('age') || '');
  const [selectedPrice, setSelectedPrice] = useState<string>('');
  const [selectedGender, setSelectedGender] = useState<string>('');
  const [quickViewProduct, setQuickViewProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);
  const searchQuery = searchParams.get('search') || '';

  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => setLoading(false), 400);
    return () => clearTimeout(timer);
  }, [searchQuery, selectedCategories, selectedAge, selectedPrice, selectedGender, sort]);

  useEffect(() => {
    setSelectedAge(searchParams.get('age') || '');
  }, [searchParams]);

  const filtered = useMemo(() => {
    let result = [...products];
    if (searchQuery) {
      const q = searchQuery.toLowerCase();
      result = result.filter(p => p.name.toLowerCase().includes(q) || p.description.toLowerCase().includes(q) || p.category.toLowerCase().includes(q) || p.brand.toLowerCase().includes(q) || p.theme?.toLowerCase().includes(q));
    }
    if (selectedCategories.length) result = result.filter(p => selectedCategories.includes(p.category));
    if (selectedAge) {
      const [min, max] = selectedAge.split('-').map(Number);
      result = result.filter(p => p.minAge >= min && p.maxAge <= max);
    }
    if (selectedPrice) {
      const [min, max] = selectedPrice.split('-').map(Number);
      result = result.filter(p => p.price >= min && p.price <= max);
    }
    if (selectedGender) result = result.filter(p => p.gender === selectedGender || p.gender === 'Unisex');

    switch (sort) {
      case 'price-asc': result.sort((a, b) => a.price - b.price); break;
      case 'price-desc': result.sort((a, b) => b.price - a.price); break;
      case 'rating': result.sort((a, b) => b.rating - a.rating); break;
      case 'discount': result.sort((a, b) => b.discount - a.discount); break;
      default: result.sort((a, b) => b.reviewCount - a.reviewCount);
    }
    return result;
  }, [searchQuery, selectedCategories, selectedAge, selectedPrice, selectedGender, sort]);

  const clearFilters = () => {
    setSelectedCategories([]);
    setSelectedAge('');
    setSelectedPrice('');
    setSelectedGender('');
  };

  const toggleCategory = (cat: string) => {
    setSelectedCategories(prev => prev.includes(cat) ? prev.filter(c => c !== cat) : [...prev, cat]);
  };

  const hasFilters = selectedCategories.length > 0 || selectedAge || selectedPrice || selectedGender;
  const activeFilterCount = selectedCategories.length + (selectedAge ? 1 : 0) + (selectedPrice ? 1 : 0) + (selectedGender ? 1 : 0);

  const FilterContent = () => (
    <div className="space-y-5">
      <div>
        <h4 className="font-display font-bold mb-2 text-sm">Age Range</h4>
        <div className="space-y-0.5">
          {ageRanges.map(a => (
            <button key={a.label} onClick={() => setSelectedAge(selectedAge === `${a.min}-${a.max}` ? '' : `${a.min}-${a.max}`)}
              className={`block w-full text-left text-sm px-3 py-2 rounded-xl transition-colors ${selectedAge === `${a.min}-${a.max}` ? 'bg-primary text-primary-foreground font-bold' : 'hover:bg-muted'}`}>
              {a.label}
            </button>
          ))}
        </div>
      </div>
      <div>
        <h4 className="font-display font-bold mb-2 text-sm">Price Range</h4>
        <div className="space-y-0.5">
          {priceRanges.map(p => (
            <button key={p.label} onClick={() => setSelectedPrice(selectedPrice === `${p.min}-${p.max}` ? '' : `${p.min}-${p.max}`)}
              className={`block w-full text-left text-sm px-3 py-2 rounded-xl transition-colors ${selectedPrice === `${p.min}-${p.max}` ? 'bg-primary text-primary-foreground font-bold' : 'hover:bg-muted'}`}>
              {p.label}
            </button>
          ))}
        </div>
      </div>
      <div>
        <h4 className="font-display font-bold mb-2 text-sm">Category</h4>
        <div className="space-y-0.5 max-h-48 overflow-y-auto">
          {categories.map(c => (
            <button key={c} onClick={() => toggleCategory(c)}
              className={`block w-full text-left text-sm px-3 py-2 rounded-xl transition-colors ${selectedCategories.includes(c) ? 'bg-primary text-primary-foreground font-bold' : 'hover:bg-muted'}`}>
              {c}
            </button>
          ))}
        </div>
      </div>
      <div>
        <h4 className="font-display font-bold mb-2 text-sm">Gender</h4>
        <div className="space-y-0.5">
          {['Boys', 'Girls', 'Unisex'].map(g => (
            <button key={g} onClick={() => setSelectedGender(selectedGender === g ? '' : g)}
              className={`block w-full text-left text-sm px-3 py-2 rounded-xl transition-colors ${selectedGender === g ? 'bg-primary text-primary-foreground font-bold' : 'hover:bg-muted'}`}>
              {g}
            </button>
          ))}
        </div>
      </div>
      {hasFilters && (
        <Button variant="outline" onClick={clearFilters} className="w-full rounded-xl text-sm">Clear All Filters</Button>
      )}
    </div>
  );

  return (
    <div className="container py-6 pb-20 md:pb-6">
      {/* Header */}
      <div className="flex items-center justify-between mb-5">
        <div>
          <h1 className="font-display font-black text-2xl md:text-3xl">
            {searchQuery ? `Results for "${searchQuery}"` : 'All Toys'} 🎁
          </h1>
          <p className="text-sm text-muted-foreground mt-0.5">{filtered.length} products found</p>
        </div>
        <div className="flex items-center gap-2">
          <button onClick={() => setFilterOpen(!filterOpen)}
            className="md:hidden p-2 border rounded-xl relative hover:bg-muted transition-colors">
            <Filter size={18} />
            {activeFilterCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-secondary text-secondary-foreground text-[9px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
                {activeFilterCount}
              </span>
            )}
          </button>
          <select value={sort} onChange={e => setSort(e.target.value)}
            className="text-sm border rounded-xl px-3 py-2 bg-card font-semibold focus:outline-none focus:ring-2 focus:ring-primary/50">
            {sortOptions.map(o => <option key={o.value} value={o.value}>{o.label}</option>)}
          </select>
        </div>
      </div>

      {/* Active filters pills */}
      {hasFilters && (
        <div className="flex flex-wrap gap-2 mb-4">
          {selectedAge && (
            <span className="bg-primary/10 text-primary text-xs font-bold px-2.5 py-1 rounded-full flex items-center gap-1">
              {selectedAge} yrs <button onClick={() => setSelectedAge('')}><X size={12} /></button>
            </span>
          )}
          {selectedCategories.map(c => (
            <span key={c} className="bg-secondary/10 text-secondary text-xs font-bold px-2.5 py-1 rounded-full flex items-center gap-1">
              {c} <button onClick={() => toggleCategory(c)}><X size={12} /></button>
            </span>
          ))}
          {selectedPrice && (
            <span className="bg-success/10 text-success text-xs font-bold px-2.5 py-1 rounded-full flex items-center gap-1">
              ₹{selectedPrice} <button onClick={() => setSelectedPrice('')}><X size={12} /></button>
            </span>
          )}
          {selectedGender && (
            <span className="bg-info/10 text-info text-xs font-bold px-2.5 py-1 rounded-full flex items-center gap-1">
              {selectedGender} <button onClick={() => setSelectedGender('')}><X size={12} /></button>
            </span>
          )}
          <button onClick={clearFilters} className="text-xs font-bold text-destructive hover:underline">Clear all</button>
        </div>
      )}

      <div className="flex gap-6">
        {/* Desktop sidebar */}
        <aside className="hidden md:block w-56 shrink-0">
          <div className="bg-card rounded-2xl p-4 shadow-sm sticky top-24">
            <h3 className="font-display font-bold text-base mb-3">Filters</h3>
            <FilterContent />
          </div>
        </aside>

        {/* Mobile filter drawer */}
        <AnimatePresence>
          {filterOpen && (
            <div className="fixed inset-0 z-50 md:hidden">
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                className="absolute inset-0 bg-foreground/40" onClick={() => setFilterOpen(false)} />
              <motion.div
                initial={{ y: '100%' }} animate={{ y: 0 }} exit={{ y: '100%' }}
                transition={{ type: 'spring', damping: 25, stiffness: 300 }}
                className="absolute bottom-0 left-0 right-0 bg-card rounded-t-3xl p-6 max-h-[80vh] overflow-y-auto"
              >
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-display font-bold text-lg">Filters</h3>
                  <button onClick={() => setFilterOpen(false)} className="p-1 hover:bg-muted rounded-lg"><X size={20} /></button>
                </div>
                <FilterContent />
                <Button onClick={() => setFilterOpen(false)} className="w-full mt-4 bg-primary text-primary-foreground font-bold rounded-xl h-11">
                  Show {filtered.length} Results
                </Button>
              </motion.div>
            </div>
          )}
        </AnimatePresence>

        {/* Product grid */}
        <div className="flex-1">
          {loading ? (
            <ProductGridSkeleton count={8} />
          ) : filtered.length === 0 ? (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center py-20">
              <div className="text-6xl mb-4">😢</div>
              <h3 className="font-display font-bold text-xl">No toys found</h3>
              <p className="text-muted-foreground mt-2 text-sm">Try adjusting your filters or search query.</p>
              <Button onClick={clearFilters} className="mt-4 rounded-xl">Clear Filters</Button>
            </motion.div>
          ) : (
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4">
              {filtered.map((p, i) => (
                <motion.div key={p.id} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: Math.min(i * 0.03, 0.3) }}>
                  <ProductCard product={p} onQuickView={setQuickViewProduct} />
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Quick View */}
      <QuickViewModal product={quickViewProduct} onClose={() => setQuickViewProduct(null)} />
    </div>
  );
};

export default Products;
