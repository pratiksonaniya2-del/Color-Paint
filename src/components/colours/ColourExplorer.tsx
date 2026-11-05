'use client';

import React, { useState, useMemo } from 'react';
import { useStore } from '@/context/StoreContext';
import { PaintCategory, PaintBrand, PaintFinish, PaintColor } from '@/types';
import { Heart, Sparkles, Eye, RotateCcw, Filter, ChevronDown, Check } from 'lucide-react';
import { INITIAL_BRANDS } from '@/data/initialData';

interface Props {
  selectedBrand: PaintBrand | 'All';
  onSelectBrand: (brand: PaintBrand | 'All') => void;
}

const categories: Array<PaintCategory | "All"> = [
  "All",
  "emulsion",
  "enamel",
  "distemper",
  "acrylic",
  "cement",
];

const FINISHES_LIST: PaintFinish[] = ['Matte', 'Satin', 'Gloss', 'Texture'];

export default function ColourExplorer({ selectedBrand, onSelectBrand }: Props) {
  const {
    colors,
    brands,
    openProductModal,
    setSelectedVisualizerColor,
    toggleWishlist,
    isWishlisted,
    wishlist,
    showWishlistOnly,
    setShowWishlistOnly,
  } = useStore();

  const displayBrands = brands.length > 0 ? brands : INITIAL_BRANDS;

  const [activeCategory, setActiveCategory] = useState<'All' | PaintCategory>('All');
  const [selectedFinishes, setSelectedFinishes] = useState<PaintFinish[]>([]);
  const [sortBy, setSortBy] = useState<'popular' | 'price-asc' | 'price-desc' | 'name'>('popular');

  const toggleFinish = (finish: PaintFinish) => {
    setSelectedFinishes((prev) =>
      prev.includes(finish) ? prev.filter((f) => f !== finish) : [...prev, finish]
    );
  };

  const handleResetFilters = () => {
    setShowWishlistOnly(false);
    setActiveCategory('All');
    onSelectBrand('All');
    setSelectedFinishes([]);
    setSortBy('popular');
  };

  // Filter & Sort
  const filteredColors = useMemo(() => {
    return colors
      .filter((color) => {
        // Active status
        if (!color.isActive) return false;

        // Wishlist filter
        if (showWishlistOnly && !wishlist.includes(color.id)) {
          return false;
        }

        // Category filter
        if (activeCategory !== 'All' && color.category !== activeCategory) {
          return false;
        }

        // Brand filter
        if (selectedBrand !== 'All' && color.brand !== selectedBrand) {
          return false;
        }

        // Finish filter
        if (selectedFinishes.length > 0 && !selectedFinishes.includes(color.finish)) {
          return false;
        }

        return true;
      })
      .sort((a, b) => {
        if (sortBy === 'popular') return (b.reviewsCount || 0) - (a.reviewsCount || 0);
        if (sortBy === 'price-asc') return a.pricePer4L - b.pricePer4L;
        if (sortBy === 'price-desc') return b.pricePer4L - a.pricePer4L;
        if (sortBy === 'name') return a.name.localeCompare(b.name);
        return 0;
      });
  }, [colors, showWishlistOnly, wishlist, activeCategory, selectedBrand, selectedFinishes, sortBy]);

  const handleTestInVisualizer = (color: PaintColor, e: React.MouseEvent) => {
    e.stopPropagation();
    setSelectedVisualizerColor(color);
    const el = document.getElementById('room-visualizer');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="colours-section" className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="mb-6">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            Explore Colours
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 mt-1">
            Browse colour collections from top brands and find the perfect shade for your space.
          </p>
        </div>

        {/* Top Filter Chips & Sort Controls */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-slate-100">
          {/* Category Chips & Liked Filter */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 md:pb-0 scrollbar-none">
            <button
              type="button"
              onClick={() => setShowWishlistOnly(!showWishlistOnly)}
              className={`px-3.5 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-all flex items-center gap-1.5 shrink-0 cursor-pointer ${
                showWishlistOnly
                  ? 'bg-rose-600 text-white shadow-sm ring-2 ring-rose-400 font-bold'
                  : 'bg-rose-50 hover:bg-rose-100 text-rose-700 border border-rose-200/70'
              }`}
              title={showWishlistOnly ? 'Show all colours' : 'View only liked colours'}
            >
              <Heart className={`w-3.5 h-3.5 ${showWishlistOnly ? 'fill-white text-white' : 'fill-rose-500 text-rose-500'}`} />
              <span>Liked Shades {wishlist.length > 0 && `(${wishlist.length})`}</span>
            </button>

            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => {
                  setShowWishlistOnly(false);
                  setActiveCategory(cat);
                }}
                className={`px-4 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-all ${
                  !showWishlistOnly && activeCategory === cat
                    ? 'bg-slate-900 text-white shadow-sm'
                    : 'bg-slate-100/80 hover:bg-slate-200/80 text-slate-700'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Sort By Dropdown */}
          <div className="flex items-center gap-2 shrink-0 self-end md:self-auto">
            <span className="text-xs text-slate-500 font-medium">Sort by:</span>
            <div className="relative">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as any)}
                className="appearance-none bg-slate-50 hover:bg-slate-100 border border-slate-200 rounded-xl px-3.5 py-2 pr-8 text-xs font-semibold text-slate-800 focus:outline-none focus:ring-2 focus:ring-amber-500/20 focus:border-amber-500 cursor-pointer transition-colors"
              >
                <option value="popular">Popular</option>
                <option value="price-asc">Price: Low to High</option>
                <option value="price-desc">Price: High to Low</option>
                <option value="name">Name: A to Z</option>
              </select>
              <ChevronDown className="w-3.5 h-3.5 text-slate-400 absolute right-2.5 top-3 pointer-events-none" />
            </div>
          </div>
        </div>

        {/* Main Content Layout: Sidebar Filters + Swatches Grid */}
        <div className="mt-8 grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Left Sidebar Filters (1 col) */}
          <div className="space-y-6">
            {/* Brands Filter */}
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-800 mb-3">
                Brands
              </h4>
              <div className="space-y-2">
                <label className="flex items-center gap-2.5 text-xs text-slate-700 cursor-pointer">
                  <input
                    type="radio"
                    name="brandFilter"
                    checked={selectedBrand === 'All'}
                    onChange={() => onSelectBrand('All')}
                    className="text-amber-600 focus:ring-amber-500"
                  />
                  <span>All Brands</span>
                </label>
                {displayBrands.map((brand) => (
                  <label
                    key={brand.id || brand.name}
                    className="flex items-center gap-2.5 text-xs text-slate-700 cursor-pointer"
                  >
                    <input
                      type="radio"
                      name="brandFilter"
                      checked={selectedBrand === brand.name}
                      onChange={() => onSelectBrand(brand.name as any)}
                      className="text-amber-600 focus:ring-amber-500"
                    />
                    <span>{brand.name}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Finish Filter */}
            <div className="pt-4 border-t border-slate-100">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-800 mb-3">
                Finish
              </h4>
              <div className="space-y-2">
                {FINISHES_LIST.map((finish) => {
                  const isChecked = selectedFinishes.includes(finish);
                  return (
                    <label
                      key={finish}
                      className="flex items-center gap-2.5 text-xs text-slate-700 cursor-pointer"
                    >
                      <input
                        type="checkbox"
                        checked={isChecked}
                        onChange={() => toggleFinish(finish)}
                        className="rounded text-amber-600 focus:ring-amber-500"
                      />
                      <span>{finish}</span>
                    </label>
                  );
                })}
              </div>
            </div>

            {/* Reset Filters Button */}
            <div className="pt-2">
              <button
                onClick={handleResetFilters}
                className="text-xs font-semibold text-slate-500 hover:text-rose-600 flex items-center gap-1.5 transition-colors"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>Reset Filters</span>
              </button>
            </div>
          </div>

          {/* Right Swatches Grid (3 cols) */}
          <div className="lg:col-span-3">
            {filteredColors.length === 0 ? (
              showWishlistOnly ? (
                <div className="text-center py-16 bg-rose-50/50 rounded-2xl border border-rose-100 p-8">
                  <div className="w-12 h-12 mx-auto mb-3 rounded-full bg-rose-100 flex items-center justify-center text-rose-500">
                    <Heart className="w-6 h-6 fill-rose-500 text-rose-500" />
                  </div>
                  <p className="text-sm font-bold text-slate-800">No Liked Colours Found</p>
                  <p className="text-xs text-slate-500 mt-1 mb-4 max-w-sm mx-auto">
                    {wishlist.length === 0
                      ? 'You have not saved any shades yet. Click the heart (❤️) icon on any shade to add it to your favourites.'
                      : 'None of your liked shades match the selected category/brand filter.'}
                  </p>
                  <button
                    onClick={handleResetFilters}
                    className="px-4 py-2 bg-slate-900 hover:bg-slate-800 text-white rounded-xl text-xs font-semibold transition-colors cursor-pointer"
                  >
                    Browse All Colours
                  </button>
                </div>
              ) : (
                <div className="text-center py-16 bg-slate-50 rounded-2xl border border-slate-100 p-8">
                  <p className="text-sm font-semibold text-slate-700">No paint shades match your filters</p>
                  <p className="text-xs text-slate-500 mt-1 mb-4">Try clearing some filter criteria to see more shades.</p>
                  <button
                    onClick={handleResetFilters}
                    className="px-4 py-2 bg-slate-900 text-white rounded-xl text-xs font-medium cursor-pointer"
                  >
                    Clear Filters
                  </button>
                </div>
              )
            ) : (
              <div>
                {showWishlistOnly && (
                  <div className="mb-4 flex items-center justify-between bg-rose-50 border border-rose-200/80 px-4 py-3 rounded-xl shadow-xs">
                    <div className="flex items-center gap-2 text-xs font-bold text-rose-900">
                      <Heart className="w-4 h-4 fill-rose-600 text-rose-600" />
                      <span>Showing {filteredColors.length} Liked Shade{filteredColors.length === 1 ? '' : 's'}</span>
                    </div>
                    <button
                      onClick={() => setShowWishlistOnly(false)}
                      className="text-xs font-semibold text-rose-700 hover:text-rose-900 underline cursor-pointer"
                    >
                      Show All Colours
                    </button>
                  </div>
                )}
                <div className="grid grid-cols-2 sm:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-5">
                {filteredColors.map((color) => {
                  const wishlisted = isWishlisted(color.id);

                  return (
                    <div
                      key={color.id}
                      onClick={() => openProductModal(color)}
                      className="group bg-white rounded-2xl border border-slate-100 shadow-xs hover:shadow-xl hover:border-slate-200 transition-all duration-300 overflow-hidden cursor-pointer flex flex-col"
                    >
                      {/* Color Block (Large clean patch from mockup) */}
                      <div
                        className="h-36 sm:h-44 w-full relative transition-transform duration-500 group-hover:scale-[1.02] flex items-center justify-center"
                        style={{ backgroundColor: color.hex }}
                      >
                        {/* Favorite button */}
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            toggleWishlist(color.id);
                          }}
                          className={`absolute top-2.5 right-2.5 w-8 h-8 rounded-full flex items-center justify-center transition-all ${
                            wishlisted
                              ? 'bg-rose-50 text-rose-500 shadow-sm'
                              : 'bg-white/80 hover:bg-white text-slate-400 hover:text-slate-700 shadow-xs backdrop-blur-xs'
                          }`}
                          title={wishlisted ? 'Remove from favorites' : 'Add to favorites'}
                        >
                          <Heart className={`w-4 h-4 ${wishlisted ? 'fill-current' : ''}`} />
                        </button>

                        {/* Test in Room Visualizer hover pill */}
                        <div className="absolute inset-x-3 bottom-3 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-1 group-hover:translate-y-0">
                          <button
                            onClick={(e) => handleTestInVisualizer(color, e)}
                            className="w-full py-1.5 px-2 bg-white/95 hover:bg-white text-slate-900 rounded-lg text-[11px] font-bold shadow-md backdrop-blur-md flex items-center justify-center gap-1.5 transition-colors"
                          >
                            <Sparkles className="w-3.5 h-3.5 text-amber-600" />
                            <span>Test on Wall</span>
                          </button>
                        </div>
                      </div>

                      {/* Swatch Details */}
                      <div className="p-3.5 flex flex-col justify-between flex-1">
                        <div>
                          <div className="flex items-start justify-between gap-1">
                            <h3 className="font-bold text-xs sm:text-sm text-slate-900 truncate">
                              {color.name}
                            </h3>
                          </div>
                          <p className="text-[11px] text-slate-400 font-mono mt-0.5">{color.code}</p>
                          <p className="text-xs text-amber-600 font-semibold mt-0.5">{color.brand}</p>
                        </div>

                        <div className="mt-3 pt-2 border-t border-slate-50 flex items-center justify-between text-xs">
                          <span className="text-[11px] text-slate-500 bg-slate-100 px-1.5 py-0.5 rounded font-medium">
                            {color.finish}
                          </span>
                          <span className="font-bold text-slate-900">
                            ₹{color.pricePer4L.toLocaleString('en-IN')}
                          </span>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}
          </div>
        </div>
      </div>
    </section>
  );
}
