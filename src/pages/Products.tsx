import React, { useState, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Filter, X, ChevronDown } from 'lucide-react';
import { products, categories, ageRanges, priceRanges, brands } from '@/data/products';
import ProductCard from '@/components/ProductCard';
import { Button } from '@/components/ui/button';

const sortOptions = [
  { value: 'popular', label: 'Popular' },
  { value: 'price-asc', label: 'Price: Low to High' },
  { value: 'price-desc', label: 'Price: High to Low' },
  { value: 'rating', label: 'Top Rated' },
  { value: 'newest', label: 'Newest' },
];

const Products = () => {
  const [searchParams] = useSearchParams();
  const [filterOpen, setFilterOpen] = useState(false);
  const [sort, setSort] = useState('popular');
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [selectedAge, setSelectedAge] = useState<string>(searchParams.get('age') || '');
  const [selectedPrice, setSelectedPrice] = useState<string>('');
  const [selectedGender, setSelectedGender] = useState<string>('');
  const searchQuery = searchParams.get('search') || '';

  const filtered = useMemo(() => {
    let result = [...products];

    if (searchQuery) {
      const q = searchQuery.toLowerCase();
      result = result.filter(p => p.name.toLowerCase().includes(q) || p.description.toLowerCase().includes(q) || p.category.toLowerCase().includes(q));
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

  const FilterContent = () => (
    <div className="space-y-6">
      {/* Age */}
      <div>
        <h4 className="font-display font-bold mb-2">Age Range</h4>
        <div className="space-y-1">
          {ageRanges.map(a => (
            <button key={a.label} onClick={() => setSelectedAge(selectedAge === `${a.min}-${a.max}` ? '' : `${a.min}-${a.max}`)}
              className={`block w-full text-left text-sm px-3 py-1.5 rounded-lg transition-colors ${selectedAge === `${a.min}-${a.max}` ? 'bg-primary text-primary-foreground font-bold' : 'hover:bg-muted'}`}>
              {a.label}
            </button>
          ))}
        </div>
      </div>
      {/* Price */}
      <div>
        <h4 className="font-display font-bold mb-2">Price Range</h4>
        <div className="space-y-1">
          {priceRanges.map(p => (
            <button key={p.label} onClick={() => setSelectedPrice(selectedPrice === `${p.min}-${p.max}` ? '' : `${p.min}-${p.max}`)}
              className={`block w-full text-left text-sm px-3 py-1.5 rounded-lg transition-colors ${selectedPrice === `${p.min}-${p.max}` ? 'bg-primary text-primary-foreground font-bold' : 'hover:bg-muted'}`}>
              {p.label}
            </button>
          ))}
        </div>
      </div>
      {/* Category */}
      <div>
        <h4 className="font-display font-bold mb-2">Category</h4>
        <div className="space-y-1 max-h-48 overflow-y-auto">
          {categories.map(c => (
            <button key={c} onClick={() => toggleCategory(c)}
              className={`block w-full text-left text-sm px-3 py-1.5 rounded-lg transition-colors ${selectedCategories.includes(c) ? 'bg-primary text-primary-foreground font-bold' : 'hover:bg-muted'}`}>
              {c}
            </button>
          ))}
        </div>
      </div>
      {/* Gender */}
      <div>
        <h4 className="font-display font-bold mb-2">Gender</h4>
        <div className="space-y-1">
          {['Boys', 'Girls', 'Unisex'].map(g => (
            <button key={g} onClick={() => setSelectedGender(selectedGender === g ? '' : g)}
              className={`block w-full text-left text-sm px-3 py-1.5 rounded-lg transition-colors ${selectedGender === g ? 'bg-primary text-primary-foreground font-bold' : 'hover:bg-muted'}`}>
              {g}
            </button>
          ))}
        </div>
      </div>
      {hasFilters && (
        <Button variant="outline" onClick={clearFilters} className="w-full rounded-xl">Clear All Filters</Button>
      )}
    </div>
  );

  return (
    <div className="container py-6 pb-20 md:pb-6">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="font-display font-black text-2xl md:text-3xl">
            {searchQuery ? `Results for "${searchQuery}"` : 'All Toys'} 🎁
          </h1>
          <p className="text-sm text-muted-foreground mt-1">{filtered.length} products found</p>
        </div>
        <div className="flex items-center gap-2">
          <button onClick={() => setFilterOpen(!filterOpen)} className="md:hidden p-2 border rounded-xl">
            <Filter size={18} />
          </button>
          <select value={sort} onChange={e => setSort(e.target.value)}
            className="text-sm border rounded-xl px-3 py-2 bg-card font-semibold">
            {sortOptions.map(o => <option key={o.value} value={o.value}>{o.label}</option>)}
          </select>
        </div>
      </div>

      <div className="flex gap-6">
        {/* Desktop sidebar */}
        <aside className="hidden md:block w-60 shrink-0">
          <div className="bg-card rounded-2xl p-4 shadow-sm sticky top-20">
            <h3 className="font-display font-bold text-lg mb-4">Filters</h3>
            <FilterContent />
          </div>
        </aside>

        {/* Mobile filter drawer */}
        {filterOpen && (
          <div className="fixed inset-0 z-50 md:hidden">
            <div className="absolute inset-0 bg-foreground/40" onClick={() => setFilterOpen(false)} />
            <div className="absolute bottom-0 left-0 right-0 bg-card rounded-t-2xl p-6 max-h-[80vh] overflow-y-auto">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-display font-bold text-lg">Filters</h3>
                <button onClick={() => setFilterOpen(false)}><X size={20} /></button>
              </div>
              <FilterContent />
              <Button onClick={() => setFilterOpen(false)} className="w-full mt-4 bg-primary text-primary-foreground font-bold rounded-xl">
                Apply Filters
              </Button>
            </div>
          </div>
        )}

        {/* Product grid */}
        <div className="flex-1">
          {filtered.length === 0 ? (
            <div className="text-center py-20">
              <div className="text-6xl mb-4">😢</div>
              <h3 className="font-display font-bold text-xl">No toys found</h3>
              <p className="text-muted-foreground mt-2">Try adjusting your filters or search query.</p>
              <Button onClick={clearFilters} className="mt-4 rounded-xl">Clear Filters</Button>
            </div>
          ) : (
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
              {filtered.map(p => <ProductCard key={p.id} product={p} />)}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Products;
