import React from 'react';
import { PageId, Language } from '../../types';
import { translations } from '../../translations';
import { KidrillLogo } from '../common/Logo';
import { Mail, Phone, MapPin, ArrowUpRight, ShieldCheck } from 'lucide-react';

interface FooterProps {
  onNavigate: (page: PageId) => void;
  lang: Language;
  onOpenInquiry: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, lang, onOpenInquiry }) => {
  const t = translations[lang];

  const handleNav = (page: PageId) => {
    onNavigate(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#050811] text-slate-400 border-t border-white/10 pt-20 pb-12">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-16 border-b border-white/10">
          {/* Brand Info & Core Identity (Col 1-4) */}
          <div className="lg:col-span-4 space-y-6">
            <KidrillLogo variant="light" size="lg" showTagline={true} />

            <p className="text-sm text-slate-400 leading-relaxed max-w-sm">
              {t.brand.shortDesc}
            </p>

            <div className="pt-2">
              <div className="text-xs font-mono uppercase tracking-widest text-[#c5a059] mb-3 flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>{lang === 'en' ? 'Group Trade Desks' : '그룹 무역 창구'}</span>
              </div>
              <div className="space-y-2 text-sm text-slate-300">
                <a
                  href="mailto:total@datmv.com"
                  className="flex items-center gap-2.5 hover:text-[#c5a059] transition-colors"
                >
                  <Mail className="w-4 h-4 text-[#c5a059] shrink-0" />
                  <span className="font-mono text-xs">total@datmv.com</span>
                </a>
                <a
                  href="tel:+6282264973015"
                  className="flex items-center gap-2.5 hover:text-[#c5a059] transition-colors"
                >
                  <Phone className="w-4 h-4 text-[#c5a059] shrink-0" />
                  <span className="font-mono text-xs">+62 822 64973015</span>
                </a>
              </div>
            </div>
          </div>

          {/* Business Areas (Col 5-7) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs font-mono uppercase tracking-[0.2em] text-[#c5a059]">
              {t.footer.businessAreas}
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li>
                <button
                  onClick={() => handleNav('minerals-metals')}
                  className="hover:text-white transition-colors text-left"
                >
                  {t.nav.minerals}
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('food-agriculture')}
                  className="hover:text-white transition-colors text-left"
                >
                  {t.nav.foodAgri}
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('seafood')}
                  className="hover:text-white transition-colors text-left"
                >
                  {t.nav.seafood}
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('products')}
                  className="hover:text-white transition-colors text-left"
                >
                  {t.nav.products} & Catalogue
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('projects')}
                  className="hover:text-white transition-colors text-left"
                >
                  {t.nav.projects}
                </button>
              </li>
            </ul>
          </div>

          {/* Navigation & Compliance (Col 8-9) */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-xs font-mono uppercase tracking-[0.2em] text-[#c5a059]">
              {t.footer.quickLinks}
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li>
                <button onClick={() => handleNav('about')} className="hover:text-white transition-colors text-left">
                  {t.nav.about}
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('companies')} className="hover:text-white transition-colors text-left">
                  {t.nav.companies}
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('markets')} className="hover:text-white transition-colors text-left">
                  {t.nav.markets}
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('sustainability')} className="hover:text-white transition-colors text-left">
                  {t.nav.sustainability}
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('news')} className="hover:text-white transition-colors text-left">
                  {t.nav.news}
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('contact')} className="hover:text-white transition-colors text-left">
                  {t.nav.contact}
                </button>
              </li>
            </ul>
          </div>

          {/* Dual Operating Entities Address Summary (Col 10-12) */}
          <div className="lg:col-span-3 space-y-5">
            <h4 className="text-xs font-mono uppercase tracking-[0.2em] text-[#c5a059]">
              {t.footer.companies}
            </h4>

            {/* Indonesia */}
            <div className="p-3.5 rounded-lg bg-white/[0.02] border border-white/5 space-y-1.5">
              <div className="flex items-center gap-1.5 text-xs font-semibold text-white">
                <MapPin className="w-3.5 h-3.5 text-[#c5a059]" />
                <span>PT PMA Kidrill Metal Mining</span>
              </div>
              <p className="text-[11px] text-slate-400 leading-snug">
                Surabaya, Indonesia
              </p>
            </div>

            {/* Vietnam */}
            <div className="p-3.5 rounded-lg bg-white/[0.02] border border-white/5 space-y-1.5">
              <div className="flex items-center gap-1.5 text-xs font-semibold text-white">
                <MapPin className="w-3.5 h-3.5 text-[#c5a059]" />
                <span>Thunder Mark Vietnam Co., Ltd</span>
              </div>
              <p className="text-[11px] text-slate-400 leading-snug">
                Ho Chi Minh City, Vietnam
              </p>
            </div>

            <button
              onClick={onOpenInquiry}
              className="w-full py-2.5 px-3 rounded bg-[#c5a059]/10 hover:bg-[#c5a059]/20 border border-[#c5a059]/30 text-[#c5a059] text-xs font-semibold uppercase tracking-wider flex items-center justify-center gap-1.5 transition-colors"
            >
              <span>{t.contact.formTitle}</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Bottom Disclaimer & Copyright */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-500">
          <p className="text-center md:text-left text-[11px] leading-relaxed max-w-2xl">
            {t.footer.disclaimer}
          </p>

          <p className="text-center md:text-right shrink-0">
            © {new Date().getFullYear()} {t.footer.copyright}
          </p>
        </div>
      </div>
    </footer>
  );
};
