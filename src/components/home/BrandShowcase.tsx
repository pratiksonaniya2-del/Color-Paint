'use client';

import React from 'react';
import { useStore } from '@/context/StoreContext';
import { ChevronRight, Award } from 'lucide-react';
import { PaintBrand } from '@/types';
import { INITIAL_BRANDS } from '@/data/initialData';

interface Props {
  selectedBrand: PaintBrand | 'All';
  onSelectBrand: (brand: PaintBrand | 'All') => void;
}

export default function BrandShowcase({ selectedBrand, onSelectBrand }: Props) {
  const { brands } = useStore();
  const displayBrands = brands.length > 0 ? brands : INITIAL_BRANDS;

  if (!displayBrands || displayBrands.length === 0) {
    return null;
  }

  return (
    <section id="brands-section" className="py-14 bg-white border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-4">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 text-slate-700 text-xs font-semibold mb-2">
              <Award className="w-3.5 h-3.5 text-amber-600" />
              <span>Official Authorised Brands</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              Authorised Paint Brands
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 mt-1">
              Explore genuine paints, computerized tinting and premium finishes from our official partners.
            </p>
          </div>

          {selectedBrand !== 'All' && (
            <button
              onClick={() => onSelectBrand('All')}
              className="text-xs font-semibold text-amber-600 hover:text-amber-700 flex items-center gap-1"
            >
              <span>Show All Brands</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </button>
          )}
        </div>

        {/* Brand Cards Grid - prominent and balanced */}
        <div
          className={
            displayBrands.length <= 2
              ? 'grid grid-cols-1 sm:grid-cols-2 max-w-3xl mx-auto gap-6'
              : 'grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4'
          }
        >
          {displayBrands.map((brand) => {
            const isSelected = selectedBrand === brand.name;
            const accentColor = brand.accentColor || '#1e293b';

            return (
              <button
                key={brand.id || brand.name}
                type="button"
                onClick={() => {
                  onSelectBrand(isSelected ? 'All' : brand.name);
                  const el = document.getElementById('colours-section');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }}
                className={`group relative p-6 rounded-3xl border text-center flex flex-col items-center justify-between transition-all duration-300 ${
                  displayBrands.length <= 2 ? 'min-h-[170px]' : 'min-h-[144px]'
                } ${
                  isSelected
                    ? 'border-amber-500 ring-2 ring-amber-500/20 bg-amber-50/30 shadow-md'
                    : 'border-slate-200/90 hover:border-slate-300 bg-white hover:shadow-xl hover:shadow-slate-900/5'
                }`}
              >
                {/* Brand Visual Identity */}
                <div className="flex-1 flex flex-col items-center justify-center w-full px-2">
                  {brand.logoUrl ? (
                    <img
                      src={brand.logoUrl}
                      alt={brand.name}
                      className="max-h-12 max-w-[140px] object-contain mb-2"
                    />
                  ) : null}

                  <div
                    className="text-xl sm:text-2xl font-black tracking-tight truncate max-w-full"
                    style={{ color: accentColor }}
                  >
                    {brand.name}
                  </div>

                  <span className="text-xs font-semibold text-slate-600 mt-1 line-clamp-1">
                    {brand.popularSeries || 'Premium Paints'}
                  </span>

                  <span className="text-[11px] font-normal text-slate-400 mt-1 line-clamp-2 max-w-xs leading-relaxed">
                    {brand.tagline || 'Authorized Dealer • Genuine Finishes'}
                  </span>
                </div>

                {/* Bottom Call to Action */}
                <div className="mt-4 flex items-center justify-center gap-1 text-xs font-bold transition-colors">
                  <span
                    className={
                      isSelected
                        ? 'text-amber-700'
                        : 'text-slate-500 group-hover:text-slate-900'
                    }
                  >
                    {isSelected ? 'Viewing Shades' : 'Explore Colours'}
                  </span>
                  <div
                    className={`w-6 h-6 rounded-full flex items-center justify-center transition-all ${
                      isSelected
                        ? 'bg-amber-600 text-white'
                        : 'bg-slate-100 text-slate-500 group-hover:bg-slate-900 group-hover:text-white'
                    }`}
                  >
                    <ChevronRight className="w-3.5 h-3.5" />
                  </div>
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
