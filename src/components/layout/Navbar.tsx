import React, { useState, useEffect } from 'react';
import { PageId, Language } from '../../types';
import { translations } from '../../translations';
import { KidrillLogo } from '../common/Logo';
import { ChevronDown, Menu, X, ArrowUpRight } from 'lucide-react';

interface NavbarProps {
  currentPage: PageId;
  onNavigate: (page: PageId) => void;
  lang: Language;
  onToggleLang: () => void;
  onOpenInquiry: (initialCommodity?: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentPage,
  onNavigate,
  lang,
  onToggleLang,
  onOpenInquiry,
}) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [divisionsDropdownOpen, setDivisionsDropdownOpen] = useState(false);

  const t = translations[lang];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (page: PageId) => {
    onNavigate(page);
    setMobileMenuOpen(false);
    setDivisionsDropdownOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-xs py-3'
          : 'bg-white/95 backdrop-blur-md border-b border-slate-200/80 shadow-[0_1px_3px_rgba(0,0,0,0.03)] py-3.5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8 flex items-center justify-between gap-8">
        {/* Zone 1: Brand Wordmark / Emblem (Dark text on pure white background) */}
        <div className="shrink-0">
          <KidrillLogo
            variant="dark"
            size="md"
            textClassName="text-[17px] sm:text-[20px] md:text-[21px] tracking-[0.16em]"
            onClick={() => handleNavClick('home')}
            className="hover:opacity-95 transition-opacity"
          />
        </div>

        {/* Zone 2: Navigation Links (Clean editorial typography, dark slate on soft off-white) */}
        <nav className="hidden lg:flex items-center gap-7 text-[13px] font-medium tracking-wide uppercase text-slate-600">
          <button
            onClick={() => handleNavClick('home')}
            className={`whitespace-nowrap shrink-0 transition-colors py-1 cursor-pointer ${
              currentPage === 'home' ? 'text-[#b08a3e] font-semibold border-b-2 border-[#c5a059]' : 'hover:text-slate-900'
            }`}
          >
            {t.nav.home}
          </button>

          <button
            onClick={() => handleNavClick('about')}
            className={`whitespace-nowrap shrink-0 transition-colors py-1 cursor-pointer ${
              currentPage === 'about' ? 'text-[#b08a3e] font-semibold border-b-2 border-[#c5a059]' : 'hover:text-slate-900'
            }`}
          >
            {t.nav.about}
          </button>

          <button
            onClick={() => handleNavClick('companies')}
            className={`whitespace-nowrap shrink-0 transition-colors py-1 cursor-pointer ${
              currentPage === 'companies' ? 'text-[#b08a3e] font-semibold border-b-2 border-[#c5a059]' : 'hover:text-slate-900'
            }`}
          >
            {t.nav.companies}
          </button>

          {/* Business / Products Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setDivisionsDropdownOpen(true)}
            onMouseLeave={() => setDivisionsDropdownOpen(false)}
          >
            <button
              onClick={() => handleNavClick('products')}
              className={`whitespace-nowrap shrink-0 transition-colors flex items-center gap-1 py-1 cursor-pointer ${
                ['products', 'minerals-metals', 'food-agriculture', 'seafood'].includes(currentPage)
                  ? 'text-[#b08a3e] font-semibold border-b-2 border-[#c5a059]'
                  : 'hover:text-slate-900'
              }`}
            >
              <span>{t.nav.products}</span>
              <ChevronDown className="w-3.5 h-3.5 opacity-60" />
            </button>

            {divisionsDropdownOpen && (
              <div className="absolute top-full left-0 mt-2 w-64 bg-white border border-slate-200 rounded-xl shadow-xl p-2 z-50">
                <button
                  onClick={() => handleNavClick('products')}
                  className="w-full text-left px-3.5 py-2.5 text-xs rounded-lg hover:bg-slate-50 transition-colors text-slate-800 hover:text-slate-950 block cursor-pointer"
                >
                  <span className="font-semibold block text-[#b08a3e]">{t.products.filterAll}</span>
                  <span className="text-[11px] text-slate-500 font-normal">Complete B2B Catalogue</span>
                </button>
                <div className="h-px bg-slate-100 my-1" />
                <button
                  onClick={() => handleNavClick('minerals-metals')}
                  className="w-full text-left px-3.5 py-2.5 text-xs rounded-lg hover:bg-slate-50 transition-colors text-slate-700 hover:text-slate-950 block cursor-pointer"
                >
                  <span className="font-medium block">{t.nav.minerals}</span>
                  <span className="text-[11px] text-slate-500 font-normal">Coal, Copper, Metals, Resources</span>
                </button>
                <button
                  onClick={() => handleNavClick('food-agriculture')}
                  className="w-full text-left px-3.5 py-2.5 text-xs rounded-lg hover:bg-slate-50 transition-colors text-slate-700 hover:text-slate-950 block cursor-pointer"
                >
                  <span className="font-medium block">{t.nav.foodAgri}</span>
                  <span className="text-[11px] text-slate-500 font-normal">Jasmine Rice, Coffee, Bulk Grains</span>
                </button>
                <button
                  onClick={() => handleNavClick('seafood')}
                  className="w-full text-left px-3.5 py-2.5 text-xs rounded-lg hover:bg-slate-50 transition-colors text-slate-700 hover:text-slate-950 block cursor-pointer"
                >
                  <span className="font-medium block">{t.nav.seafood}</span>
                  <span className="text-[11px] text-slate-500 font-normal">Frozen Prawns, Pangasius, Exports</span>
                </button>
              </div>
            )}
          </div>

          <button
            onClick={() => handleNavClick('projects')}
            className={`whitespace-nowrap shrink-0 transition-colors py-1 cursor-pointer ${
              currentPage === 'projects' ? 'text-[#b08a3e] font-semibold border-b-2 border-[#c5a059]' : 'hover:text-slate-900'
            }`}
          >
            {t.nav.projects}
          </button>

          <button
            onClick={() => handleNavClick('markets')}
            className={`whitespace-nowrap shrink-0 transition-colors py-1 cursor-pointer ${
              currentPage === 'markets' ? 'text-[#b08a3e] font-semibold border-b-2 border-[#c5a059]' : 'hover:text-slate-900'
            }`}
          >
            {t.nav.markets}
          </button>

          <button
            onClick={() => handleNavClick('sustainability')}
            className={`whitespace-nowrap shrink-0 transition-colors py-1 cursor-pointer ${
              currentPage === 'sustainability' ? 'text-[#b08a3e] font-semibold border-b-2 border-[#c5a059]' : 'hover:text-slate-900'
            }`}
          >
            {t.nav.sustainability}
          </button>

          <button
            onClick={() => handleNavClick('news')}
            className={`whitespace-nowrap shrink-0 transition-colors py-1 cursor-pointer ${
              currentPage === 'news' ? 'text-[#b08a3e] font-semibold border-b-2 border-[#c5a059]' : 'hover:text-slate-900'
            }`}
          >
            {t.nav.news}
          </button>
        </nav>

        {/* Zone 3: 1 Primary Action + Language Switcher */}
        <div className="flex items-center gap-3 shrink-0">
          {/* Multilingual Switcher: EN | 한국어 */}
          <div className="flex items-center rounded-lg border border-slate-200 bg-slate-100 p-0.5 text-xs font-mono">
            <button
              onClick={() => lang !== 'en' && onToggleLang()}
              className={`px-2.5 py-1 rounded-md transition-colors cursor-pointer ${
                lang === 'en'
                  ? 'bg-white text-slate-900 font-semibold shadow-xs'
                  : 'text-slate-500 hover:text-slate-900'
              }`}
            >
              EN
            </button>
            <span className="text-slate-300 select-none">|</span>
            <button
              onClick={() => lang !== 'ko' && onToggleLang()}
              className={`px-2.5 py-1 rounded-md transition-colors cursor-pointer ${
                lang === 'ko'
                  ? 'bg-white text-slate-900 font-semibold shadow-xs'
                  : 'text-slate-500 hover:text-slate-900'
              }`}
            >
              한국어
            </button>
          </div>

          {/* Primary Action Button */}
          <button
            onClick={() => onOpenInquiry()}
            className="hidden sm:inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-[#0f172a] hover:bg-slate-800 text-white font-semibold text-xs tracking-wider uppercase transition-colors whitespace-nowrap shadow-xs cursor-pointer"
          >
            <span>{t.nav.inquireCTA}</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-[#c5a059]" />
          </button>

          {/* Mobile Menu Hamburger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg text-slate-700 hover:text-slate-900 hover:bg-slate-100 transition-colors cursor-pointer"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-slate-200 px-6 py-6 space-y-4 max-h-[85vh] overflow-y-auto shadow-lg">
          <div className="grid grid-cols-1 gap-1 text-sm font-medium uppercase tracking-wider text-slate-700">
            <button
              onClick={() => handleNavClick('home')}
              className={`text-left py-2.5 px-3 rounded-lg hover:bg-slate-50 cursor-pointer ${
                currentPage === 'home' ? 'text-[#b08a3e] bg-slate-50 font-semibold' : ''
              }`}
            >
              {t.nav.home}
            </button>
            <button
              onClick={() => handleNavClick('about')}
              className={`text-left py-2.5 px-3 rounded-lg hover:bg-slate-50 cursor-pointer ${
                currentPage === 'about' ? 'text-[#b08a3e] bg-slate-50 font-semibold' : ''
              }`}
            >
              {t.nav.about}
            </button>
            <button
              onClick={() => handleNavClick('companies')}
              className={`text-left py-2.5 px-3 rounded-lg hover:bg-slate-50 cursor-pointer ${
                currentPage === 'companies' ? 'text-[#b08a3e] bg-slate-50 font-semibold' : ''
              }`}
            >
              {t.nav.companies}
            </button>
            <button
              onClick={() => handleNavClick('products')}
              className={`text-left py-2.5 px-3 rounded-lg hover:bg-slate-50 cursor-pointer ${
                currentPage === 'products' ? 'text-[#b08a3e] bg-slate-50 font-semibold' : ''
              }`}
            >
              {t.nav.products}
            </button>
            <button
              onClick={() => handleNavClick('minerals-metals')}
              className="text-left py-2 px-6 text-xs text-slate-500 hover:text-slate-900 cursor-pointer"
            >
              ↳ {t.nav.minerals}
            </button>
            <button
              onClick={() => handleNavClick('food-agriculture')}
              className="text-left py-2 px-6 text-xs text-slate-500 hover:text-slate-900 cursor-pointer"
            >
              ↳ {t.nav.foodAgri}
            </button>
            <button
              onClick={() => handleNavClick('seafood')}
              className="text-left py-2 px-6 text-xs text-slate-500 hover:text-slate-900 cursor-pointer"
            >
              ↳ {t.nav.seafood}
            </button>
            <button
              onClick={() => handleNavClick('projects')}
              className={`text-left py-2.5 px-3 rounded-lg hover:bg-slate-50 cursor-pointer ${
                currentPage === 'projects' ? 'text-[#b08a3e] bg-slate-50 font-semibold' : ''
              }`}
            >
              {t.nav.projects}
            </button>
            <button
              onClick={() => handleNavClick('markets')}
              className={`text-left py-2.5 px-3 rounded-lg hover:bg-slate-50 cursor-pointer ${
                currentPage === 'markets' ? 'text-[#b08a3e] bg-slate-50 font-semibold' : ''
              }`}
            >
              {t.nav.markets}
            </button>
            <button
              onClick={() => handleNavClick('sustainability')}
              className={`text-left py-2.5 px-3 rounded-lg hover:bg-slate-50 cursor-pointer ${
                currentPage === 'sustainability' ? 'text-[#b08a3e] bg-slate-50 font-semibold' : ''
              }`}
            >
              {t.nav.sustainability}
            </button>
            <button
              onClick={() => handleNavClick('news')}
              className={`text-left py-2.5 px-3 rounded-lg hover:bg-slate-50 cursor-pointer ${
                currentPage === 'news' ? 'text-[#b08a3e] bg-slate-50 font-semibold' : ''
              }`}
            >
              {t.nav.news}
            </button>
            <button
              onClick={() => handleNavClick('contact')}
              className={`text-left py-2.5 px-3 rounded-lg hover:bg-slate-50 cursor-pointer ${
                currentPage === 'contact' ? 'text-[#b08a3e] bg-slate-50 font-semibold' : ''
              }`}
            >
              {t.nav.contact}
            </button>
          </div>

          <div className="pt-4 border-t border-slate-100 flex flex-col gap-3">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenInquiry();
              }}
              className="w-full py-3 rounded-lg bg-[#0f172a] text-white font-semibold text-xs tracking-wider uppercase text-center cursor-pointer"
            >
              {t.nav.inquireCTA}
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
