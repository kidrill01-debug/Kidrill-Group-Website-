import React from 'react';
import { Language, PageId } from '../../types';
import { translations } from '../../translations';
import { GlobalMap } from '../sections/GlobalMap';
import { Globe, ArrowUpRight } from 'lucide-react';

interface MarketsPageProps {
  lang: Language;
  onNavigate: (page: PageId) => void;
  onOpenInquiry: (marketName?: string) => void;
}

export const MarketsPage: React.FC<MarketsPageProps> = ({
  lang,
  onOpenInquiry,
}) => {
  const t = translations[lang];

  return (
    <div className="pt-32 pb-28 bg-[#fdfcf8] text-slate-900">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-2.5 text-xs font-mono tracking-[0.25em] text-[#b08a3e] uppercase mb-4">
            <Globe className="w-3.5 h-3.5" />
            <span className="font-semibold">{t.markets.tag}</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-[-0.03em] text-slate-900 mb-6">
            {t.markets.title}
          </h1>

          <p className="text-slate-600 text-base sm:text-lg leading-relaxed font-normal">
            {t.markets.subtitle}
          </p>
        </div>
      </div>

      {/* Embedded Global Interactive World Map */}
      <GlobalMap
        lang={lang}
        onSelectProductRequest={(corridor) => onOpenInquiry(`Market Corridor: ${corridor}`)}
      />

      {/* Detailed Market Corridor Dossiers */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 pt-20">
        <div className="mb-12 pb-4 border-b border-slate-200 flex items-center justify-between">
          <h2 className="text-2xl font-light text-slate-900 tracking-tight">
            {lang === 'en' ? 'International Market Profiles' : '글로벌 진출 시장 세부 현황'}
          </h2>
          <span className="text-xs font-mono text-slate-400 uppercase font-semibold">5 PRIMARY CORRIDORS</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {t.markets.regions.map((reg) => (
            <div
              key={reg.id}
              className="p-8 rounded-2xl bg-white border border-slate-200 hover:border-[#c5a059]/70 shadow-xs transition-colors flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between pb-4 border-b border-slate-100 mb-4">
                  <h3 className="text-xl font-semibold text-slate-900">{reg.name}</h3>
                  <span className="text-xs font-mono text-[#b08a3e] uppercase font-bold">
                    {reg.id.toUpperCase()}
                  </span>
                </div>

                <div className="text-xs font-mono text-slate-500 uppercase tracking-wider mb-3 font-semibold">
                  {reg.role}
                </div>

                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-6 font-light">
                  {reg.desc}
                </p>

                <div className="space-y-2 mb-6">
                  <span className="block text-[11px] font-mono text-slate-400 uppercase">
                    Key Trade Commodities
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {reg.commodities.map((comm, idx) => (
                      <span
                        key={idx}
                        className="text-[11px] bg-slate-50 border border-slate-200 px-2.5 py-1 rounded text-slate-700"
                      >
                        {comm}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-100">
                <button
                  onClick={() => onOpenInquiry(reg.name)}
                  className="w-full py-2.5 px-3 rounded-lg bg-[#0f172a] hover:bg-slate-800 text-xs font-mono uppercase tracking-wider text-white transition-all flex items-center justify-center gap-1.5 cursor-pointer shadow-xs font-semibold"
                >
                  <span>{lang === 'en' ? 'Inquire For This Market' : '해당 시장 무역 상담'}</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-[#c5a059]" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
