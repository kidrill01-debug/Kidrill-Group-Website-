import React, { useState } from 'react';
import { Language, ProductItem } from '../../types';
import { translations } from '../../translations';
import { productsData } from '../../data/products';
import { ArrowUpRight, Layers, Info } from 'lucide-react';

interface ProductsPageProps {
  lang: Language;
  onOpenInquiry: (productName?: string) => void;
}

export const ProductsPage: React.FC<ProductsPageProps> = ({ lang, onOpenInquiry }) => {
  const t = translations[lang];
  const [activeTab, setActiveTab] = useState<'all' | 'minerals' | 'food' | 'seafood'>('all');

  const filteredProducts = productsData.filter((prod) => {
    if (activeTab === 'all') return true;
    return prod.category === activeTab;
  });

  return (
    <div className="pt-32 pb-28 bg-white text-slate-900">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Page Header */}
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-2.5 text-xs font-mono tracking-[0.25em] text-[#b08a3e] uppercase mb-4">
            <Layers className="w-3.5 h-3.5" />
            <span className="font-semibold">{t.products.tag}</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-[-0.03em] text-slate-900 mb-6">
            {t.products.title}
          </h1>

          <p className="text-slate-600 text-base sm:text-lg leading-relaxed font-normal">
            {t.products.subtitle}
          </p>
        </div>

        {/* Corporate Confidentiality & Assay Compliance Notice */}
        <div className="mb-12 p-6 rounded-2xl bg-white border border-slate-200 flex items-start gap-4 shadow-xs">
          <Info className="w-5 h-5 text-[#b08a3e] shrink-0 mt-0.5" />
          <div className="text-xs sm:text-sm text-slate-700 leading-relaxed font-normal">
            {t.products.notice}
          </div>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex items-center gap-2 p-1.5 bg-white border border-slate-200 rounded-xl mb-12 overflow-x-auto w-fit shadow-xs">
          <button
            onClick={() => setActiveTab('all')}
            className={`px-5 py-2.5 rounded-lg text-xs font-semibold tracking-wider uppercase transition-colors whitespace-nowrap cursor-pointer ${
              activeTab === 'all'
                ? 'bg-[#0f172a] text-white shadow-xs'
                : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
            }`}
          >
            {t.products.filterAll}
          </button>
          <button
            onClick={() => setActiveTab('minerals')}
            className={`px-5 py-2.5 rounded-lg text-xs font-semibold tracking-wider uppercase transition-colors whitespace-nowrap cursor-pointer ${
              activeTab === 'minerals'
                ? 'bg-[#0f172a] text-white shadow-xs'
                : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
            }`}
          >
            {t.products.filterMinerals}
          </button>
          <button
            onClick={() => setActiveTab('food')}
            className={`px-5 py-2.5 rounded-lg text-xs font-semibold tracking-wider uppercase transition-colors whitespace-nowrap cursor-pointer ${
              activeTab === 'food'
                ? 'bg-[#0f172a] text-white shadow-xs'
                : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
            }`}
          >
            {t.products.filterFood}
          </button>
          <button
            onClick={() => setActiveTab('seafood')}
            className={`px-5 py-2.5 rounded-lg text-xs font-semibold tracking-wider uppercase transition-colors whitespace-nowrap cursor-pointer ${
              activeTab === 'seafood'
                ? 'bg-[#0f172a] text-white shadow-xs'
                : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
            }`}
          >
            {t.products.filterSeafood}
          </button>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((prod) => (
            <div
              key={prod.id}
              className="group bg-white border border-slate-200 rounded-2xl overflow-hidden hover:border-[#c5a059]/70 shadow-xs transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Product Image */}
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-100">
                  <img
                    src={prod.image}
                    alt={prod.titleEn}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />

                  {/* Division Badge */}
                  <div className="absolute top-4 left-4">
                    <span className="text-[10px] font-mono tracking-wider uppercase px-2.5 py-1 rounded bg-black/60 backdrop-blur-md border border-white/20 text-white font-semibold">
                      {prod.category.toUpperCase()}
                    </span>
                  </div>
                </div>

                {/* Details */}
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-slate-900 mb-2 group-hover:text-[#b08a3e] transition-colors">
                    {lang === 'en' ? prod.titleEn : prod.titleKo}
                  </h3>

                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-5 line-clamp-3 font-normal">
                    {lang === 'en' ? prod.descriptionEn : prod.descriptionKo}
                  </p>

                  {/* Metadata */}
                  <div className="space-y-2.5 py-3 border-t border-b border-slate-100 text-xs text-slate-600 mb-6">
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-slate-400 text-[11px] uppercase">
                        {t.products.originLabel}
                      </span>
                      <span className="text-slate-800 font-medium">
                        {lang === 'en' ? prod.originEn : prod.originKo}
                      </span>
                    </div>

                    <div className="flex items-center justify-between">
                      <span className="font-mono text-slate-400 text-[11px] uppercase">
                        {t.products.entityLabel}
                      </span>
                      <span className="text-slate-800 font-medium truncate max-w-[200px]">
                        {prod.companyEntity}
                      </span>
                    </div>

                    <div className="flex items-center justify-between pt-1">
                      <span className="font-mono text-slate-400 text-[11px] uppercase">
                        Specification
                      </span>
                      <span className="text-[#b08a3e] font-mono text-[11px] font-semibold">
                        {prod.specifications}
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Action Button */}
              <div className="px-6 pb-6">
                <button
                  onClick={() => onOpenInquiry(lang === 'en' ? prod.titleEn : prod.titleKo)}
                  className="w-full py-3 px-4 rounded-lg bg-slate-900 hover:bg-[#c5a059] hover:text-slate-950 text-xs font-mono uppercase tracking-wider text-white transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer font-semibold shadow-xs"
                >
                  <span>{t.products.requestCTA}</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
