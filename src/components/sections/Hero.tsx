import React from 'react';
import { Language, PageId } from '../../types';
import { translations } from '../../translations';
import { ArrowUpRight, Compass, Ship, Layers } from 'lucide-react';

interface HeroProps {
  lang: Language;
  onNavigate: (page: PageId) => void;
  onOpenInquiry: () => void;
}

export const Hero: React.FC<HeroProps> = ({ lang, onNavigate, onOpenInquiry }) => {
  const t = translations[lang];

  return (
    <div className="relative min-h-[92vh] flex flex-col justify-between pt-32 pb-16 overflow-hidden">
      {/* Background Cinematic Image with measured gradient scrim */}
      <div className="absolute inset-0 z-0">
        <img
          src="/src/assets/images/hero_global_trade_port_1791535364509.jpg"
          alt="International trade logistics port and deepwater bulk vessel terminal"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover object-center brightness-95 filter"
        />
        {/* Measured dark scrim for high contrast and readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0f172a]/95 via-[#0f172a]/75 to-[#0f172a]/40" />
        {/* Smooth fade out to #fdfcf8 at the bottom */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#fdfcf8] via-transparent to-[#0f172a]/50" />
      </div>

      {/* Main Content Area */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 w-full my-auto py-12">
        <div className="max-w-3xl space-y-8">
          {/* Subtle Tagline kicker */}
          <div className="inline-flex items-center gap-2.5 px-3 py-1.5 rounded-full bg-white/10 border border-white/20 backdrop-blur-md">
            <span className="w-2 h-2 rounded-full bg-[#c5a059]" />
            <span className="text-xs font-mono tracking-[0.25em] text-slate-200 uppercase">
              {t.hero.tag}
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-[-0.03em] text-white leading-[1.06] text-balance">
            {lang === 'en' ? (
              <>
                <span className="block font-bold">GLOBAL RESOURCES.</span>
                <span className="block font-semibold text-[#e2e8f0]">TRUSTED TRADE.</span>
              </>
            ) : (
              <>
                <span className="block font-bold">글로벌 자원.</span>
                <span className="block font-semibold text-[#e2e8f0]">신뢰할 수 있는 무역.</span>
              </>
            )}
          </h1>

          {/* Supporting Text */}
          <p className="text-lg sm:text-xl text-slate-200 font-normal leading-relaxed max-w-2xl">
            {t.hero.description}
          </p>

          {/* Primary & Secondary Action CTAs */}
          <div className="flex flex-wrap items-center gap-4 pt-4">
            <button
              onClick={() => onNavigate('products')}
              className="py-3.5 px-7 rounded-lg bg-[#c5a059] hover:bg-[#d6b26c] text-slate-950 font-semibold text-xs tracking-[0.16em] uppercase transition-all duration-200 shadow-lg flex items-center gap-2 group cursor-pointer"
            >
              <span>{t.hero.exploreCTA}</span>
              <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </button>

            <button
              onClick={() => onOpenInquiry()}
              className="py-3.5 px-7 rounded-lg bg-white/10 hover:bg-white/20 border border-white/25 text-white font-medium text-xs tracking-[0.16em] uppercase transition-all duration-200 backdrop-blur-md cursor-pointer"
            >
              {t.hero.contactCTA}
            </button>
          </div>
        </div>
      </div>

      {/* Bottom KPI & Trust Signals Strip (Full-width row) */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-8">
          {/* Card 1 */}
          <div className="p-4 rounded-xl bg-white/95 backdrop-blur-md border border-slate-200/90 shadow-md flex items-start gap-3.5">
            <div className="p-2.5 rounded-lg bg-slate-100 border border-slate-200 text-[#b08a3e] shrink-0">
              <Compass className="w-5 h-5" />
            </div>
            <div>
              <span className="block text-[11px] font-mono uppercase tracking-wider text-slate-500">
                {t.hero.metric1Label}
              </span>
              <span className="text-base font-semibold text-slate-900">
                {t.hero.metric1Value}
              </span>
              <span className="block text-xs text-slate-600 mt-0.5">
                {t.hero.metric1Sub}
              </span>
            </div>
          </div>

          {/* Card 2 */}
          <div className="p-4 rounded-xl bg-white/95 backdrop-blur-md border border-slate-200/90 shadow-md flex items-start gap-3.5">
            <div className="p-2.5 rounded-lg bg-slate-100 border border-slate-200 text-[#b08a3e] shrink-0">
              <Layers className="w-5 h-5" />
            </div>
            <div>
              <span className="block text-[11px] font-mono uppercase tracking-wider text-slate-500">
                {t.hero.metric2Label}
              </span>
              <span className="text-base font-semibold text-slate-900">
                {t.hero.metric2Value}
              </span>
              <span className="block text-xs text-slate-600 mt-0.5">
                {t.hero.metric2Sub}
              </span>
            </div>
          </div>

          {/* Card 3 */}
          <div className="p-4 rounded-xl bg-white/95 backdrop-blur-md border border-slate-200/90 shadow-md flex items-start gap-3.5">
            <div className="p-2.5 rounded-lg bg-slate-100 border border-slate-200 text-[#b08a3e] shrink-0">
              <Ship className="w-5 h-5" />
            </div>
            <div>
              <span className="block text-[11px] font-mono uppercase tracking-wider text-slate-500">
                {t.hero.metric3Label}
              </span>
              <span className="text-base font-semibold text-slate-900">
                {t.hero.metric3Value}
              </span>
              <span className="block text-xs text-slate-600 mt-0.5">
                {t.hero.metric3Sub}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
