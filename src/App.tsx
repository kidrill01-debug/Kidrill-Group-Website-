import React, { useState, useEffect } from 'react';
import { PageId, Language } from './types';
import { translations } from './translations';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { Hero } from './components/sections/Hero';
import { GlobalMap } from './components/sections/GlobalMap';
import { BusinessAreas } from './components/sections/BusinessAreas';
import { CompaniesSection } from './components/sections/CompaniesSection';
import { ProductsPage } from './components/pages/ProductsPage';
import { MineralsPage } from './components/pages/MineralsPage';
import { FoodAgriculturePage } from './components/pages/FoodAgriculturePage';
import { SeafoodPage } from './components/pages/SeafoodPage';
import { ProjectsPage } from './components/pages/ProjectsPage';
import { MarketsPage } from './components/pages/MarketsPage';
import { AboutPage } from './components/pages/AboutPage';
import { SustainabilityPage } from './components/pages/SustainabilityPage';
import { NewsPage } from './components/pages/NewsPage';
import { ContactPage } from './components/pages/ContactPage';
import { CompaniesPage } from './components/pages/CompaniesPage';
import { InquiryModal } from './components/common/InquiryModal';
import { ScrollProgress } from './components/common/ScrollProgress';
import { HairlineDivider } from './components/common/HairlineDivider';
import { FAQSection } from './components/sections/FAQSection';
import { newsArticles } from './data/news';
import { ArrowUpRight, BookOpen, Leaf } from 'lucide-react';

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageId>('home');
  const [lang, setLang] = useState<Language>('en');
  const [inquiryModalOpen, setInquiryModalOpen] = useState(false);
  const [initialInquiryProduct, setInitialInquiryProduct] = useState<string>('');
  const [initialInquiryCompany, setInitialInquiryCompany] = useState<string>('');

  const t = translations[lang];

  // Sync document title and meta description dynamically based on language & current page
  useEffect(() => {
    const titles: Record<PageId, { en: string; ko: string }> = {
      home: {
        en: 'Kidrill Group | Global Resources & Trusted Trade',
        ko: '키드릴 그룹 | 글로벌 자원 & 신뢰할 수 있는 무역',
      },
      about: {
        en: 'About Us | Kidrill Group',
        ko: '회사 소개 | 키드릴 그룹',
      },
      companies: {
        en: 'Our Companies | Kidrill Group',
        ko: '그룹 계열사 | 키드릴 그룹',
      },
      products: {
        en: 'Products & Commodities | Kidrill Group',
        ko: '취급 원자재 및 품목 | 키드릴 그룹',
      },
      'minerals-metals': {
        en: 'Minerals & Metals | PT PMA Kidrill Metal Mining',
        ko: '광물 및 금속 | PT PMA Kidrill Metal Mining',
      },
      'food-agriculture': {
        en: 'Food & Agriculture | Thunder Mark Vietnam Co., Ltd',
        ko: '농산물 및 식품 | Thunder Mark Vietnam Co., Ltd',
      },
      seafood: {
        en: 'Seafood Export | Thunder Mark Vietnam Co., Ltd',
        ko: '수산물 수출 | Thunder Mark Vietnam Co., Ltd',
      },
      projects: {
        en: 'Strategic Projects | Kidrill Group',
        ko: '공급 프로젝트 | 키드릴 그룹',
      },
      markets: {
        en: 'Global Markets & Trade Corridors | Kidrill Group',
        ko: '글로벌 무역망 및 시장 | 키드릴 그룹',
      },
      sustainability: {
        en: 'Sustainability & Responsible Sourcing | Kidrill Group',
        ko: '지속가능경영 & 책임 조달 | 키드릴 그룹',
      },
      news: {
        en: 'News & Market Insights | Kidrill Group',
        ko: '뉴스 & 원자재 인사이트 | 키드릴 그룹',
      },
      contact: {
        en: 'Contact & Commercial Inquiries | Kidrill Group',
        ko: '무역 상담 및 문의 | 키드릴 그룹',
      },
    };

    const currentTitle = titles[currentPage] || titles.home;
    document.title = lang === 'en' ? currentTitle.en : currentTitle.ko;
  }, [currentPage, lang]);

  const handleNavigate = (page: PageId) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenInquiry = (productOrSubject?: string, company?: string) => {
    setInitialInquiryProduct(productOrSubject || '');
    setInitialInquiryCompany(company || '');
    setInquiryModalOpen(true);
  };

  const toggleLanguage = () => {
    setLang((prev) => (prev === 'en' ? 'ko' : 'en'));
  };

  return (
    <div className="min-h-screen bg-[#fdfcf8] text-slate-900 flex flex-col font-sans selection:bg-[#c5a059] selection:text-white relative">
      {/* Slim, elegant editorial scroll progress bar tracking viewport scroll position */}
      <ScrollProgress />

      {/* Sticky Corporate Navigation with soft light glass backdrop */}
      <Navbar
        currentPage={currentPage}
        onNavigate={handleNavigate}
        lang={lang}
        onToggleLang={toggleLanguage}
        onOpenInquiry={() => handleOpenInquiry()}
      />

      {/* Main Page Content Router */}
      <main className="flex-1">
        {currentPage === 'home' && (
          <div>
            {/* Cinematic Hero */}
            <Hero
              lang={lang}
              onNavigate={handleNavigate}
              onOpenInquiry={() => handleOpenInquiry()}
            />

            {/* Subtle, full-width editorial hairline divider */}
            <HairlineDivider />

            {/* Global Presence with Interactive World Map */}
            <GlobalMap
              lang={lang}
              onNavigateToMarkets={() => handleNavigate('markets')}
              onSelectProductRequest={(corridor) => handleOpenInquiry(`Corridor: ${corridor}`)}
            />

            {/* Subtle, full-width editorial hairline divider */}
            <HairlineDivider />

            {/* Core Business Areas Showcase */}
            <BusinessAreas
              lang={lang}
              onNavigate={handleNavigate}
              onOpenInquiry={(category) => handleOpenInquiry(category)}
            />

            {/* Subtle, full-width editorial hairline divider */}
            <HairlineDivider />

            {/* Two Companies Section */}
            <CompaniesSection
              lang={lang}
              onNavigate={handleNavigate}
              onOpenInquiry={(comp) => handleOpenInquiry(undefined, comp)}
            />

            {/* Subtle, full-width editorial hairline divider */}
            <HairlineDivider />

            {/* Sustainability Teaser Section (Soft warm light surface) */}
            <section className="py-24 bg-[#fdfcf8] relative overflow-hidden">
              <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <div className="p-10 sm:p-14 rounded-3xl bg-[#fbf9f4] border border-slate-200 relative overflow-hidden flex flex-col lg:flex-row items-start lg:items-center justify-between gap-10 shadow-xs">
                  <div className="max-w-2xl space-y-4">
                    <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-[0.2em] text-[#b08a3e] font-semibold">
                      <Leaf className="w-3.5 h-3.5" />
                      <span>{t.sustainability.tag}</span>
                    </div>

                    <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-[-0.025em]">
                      {t.sustainability.title}
                    </h2>

                    <p className="text-slate-600 text-base leading-relaxed font-normal">
                      {t.sustainability.intro}
                    </p>

                    <div className="flex flex-wrap gap-4 pt-2 text-xs font-mono text-slate-600">
                      <span className="flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#c5a059]" />
                        Responsible Sourcing
                      </span>
                      <span className="flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#c5a059]" />
                        Supply Chain Transparency
                      </span>
                      <span className="flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#c5a059]" />
                        International Standards
                      </span>
                    </div>
                  </div>

                  <div className="shrink-0 flex flex-col sm:flex-row gap-3">
                    <button
                      onClick={() => handleNavigate('sustainability')}
                      className="py-3 px-6 rounded-lg bg-white hover:bg-slate-50 border border-slate-200 text-xs font-mono uppercase tracking-wider text-slate-900 transition-colors cursor-pointer shadow-xs font-semibold"
                    >
                      {lang === 'en' ? 'Our Commitments →' : '지속가능경영 원칙 →'}
                    </button>
                    <button
                      onClick={() => handleOpenInquiry('Sustainability Compliance')}
                      className="py-3 px-6 rounded-lg bg-[#0f172a] hover:bg-slate-800 text-white text-xs font-semibold uppercase tracking-wider transition-colors cursor-pointer shadow-xs"
                    >
                      {lang === 'en' ? 'Request Audit Details' : '실사 자료 문의'}
                    </button>
                  </div>
                </div>
              </div>
            </section>

            {/* Subtle, full-width editorial hairline divider */}
            <HairlineDivider />

            {/* Latest News & Insights Teaser */}
            <section className="py-24 bg-[#fdfcf8]">
              <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
                  <div>
                    <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-[0.2em] text-[#b08a3e] mb-3 font-semibold">
                      <BookOpen className="w-3.5 h-3.5" />
                      <span>{t.news.tag}</span>
                    </div>
                    <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-[-0.025em]">
                      {t.news.title}
                    </h2>
                  </div>

                  <button
                    onClick={() => handleNavigate('news')}
                    className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[#b08a3e] hover:text-slate-900 transition-colors font-semibold"
                  >
                    <span>{lang === 'en' ? 'View All Market Briefings' : '전체 브리핑 보기'}</span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-[#b08a3e]" />
                  </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {newsArticles.slice(0, 3).map((art) => (
                    <div
                      key={art.id}
                      className="p-8 rounded-2xl bg-white border border-slate-200 hover:border-[#c5a059]/60 transition-colors flex flex-col justify-between shadow-xs"
                    >
                      <div>
                        <div className="flex items-center justify-between text-xs font-mono text-slate-500 mb-3">
                          <span className="text-[#b08a3e] font-semibold uppercase">{lang === 'en' ? art.category : art.categoryKo}</span>
                          <span>{art.date}</span>
                        </div>
                        <h3 className="text-lg font-semibold text-slate-900 mb-2 leading-snug">
                          {lang === 'en' ? art.titleEn : art.titleKo}
                        </h3>
                        <p className="text-slate-600 text-xs leading-relaxed line-clamp-3 font-normal mb-4">
                          {lang === 'en' ? art.summaryEn : art.summaryKo}
                        </p>
                      </div>

                      <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                        <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-100 border border-slate-200 text-slate-500 uppercase">
                          Sample Article
                        </span>
                        <button
                          onClick={() => handleNavigate('news')}
                          className="text-xs font-mono text-slate-900 hover:text-[#b08a3e] flex items-center gap-1 transition-colors font-semibold cursor-pointer"
                        >
                          <span>{t.news.readArticle}</span>
                          <ArrowUpRight className="w-3 h-3 text-[#b08a3e]" />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* Subtle, full-width editorial hairline divider */}
            <HairlineDivider />

            {/* Frequently Asked Questions (FAQ) Section for New Clients & Trade Desks */}
            <FAQSection
              lang={lang}
              onOpenInquiry={(topic) => handleOpenInquiry(topic)}
            />

            {/* Subtle, full-width editorial hairline divider */}
            <HairlineDivider />

            {/* Direct Commercial CTA Banner (Deep Obsidian Anchor above footer) */}
            <section className="py-24 bg-[#0f172a] text-white">
              <div className="max-w-5xl mx-auto px-6 lg:px-8 text-center space-y-6">
                <span className="text-xs font-mono uppercase tracking-[0.25em] text-[#c5a059] block font-semibold">
                  PARTNER WITH KIDRILL GROUP
                </span>

                <h2 className="text-3xl sm:text-5xl font-light text-white tracking-tight">
                  {lang === 'en'
                    ? 'Connecting Mineral Resources and Products with Serious Buyers.'
                    : '안정적인 원자재 및 농수산물 공급과 진성 바이어의 연결.'}
                </h2>

                <p className="text-slate-300 text-base sm:text-lg max-w-2xl mx-auto font-light leading-relaxed">
                  {lang === 'en'
                    ? 'Engage directly with our commercial desks in Indonesia and Vietnam for long-term B2B commodity contracts, export tenders, and structured trade.'
                    : '인도네시아와 베트남 현지 무역 데스크를 통해 장기 B2B 공급 계약, 수출 견적 및 맞춤형 거래를 신속히 협의하십시오.'}
                </p>

                <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
                  <button
                    onClick={() => handleOpenInquiry()}
                    className="py-4 px-8 rounded-lg bg-[#c5a059] hover:bg-[#d6b26c] text-black font-semibold text-xs tracking-wider uppercase transition-colors shadow-lg cursor-pointer"
                  >
                    {t.nav.inquireCTA}
                  </button>

                  <button
                    onClick={() => handleNavigate('contact')}
                    className="py-4 px-8 rounded-lg bg-white/10 hover:bg-white/15 text-white font-medium text-xs tracking-wider uppercase transition-colors border border-white/20 cursor-pointer"
                  >
                    {lang === 'en' ? 'View Corporate Offices' : '지사 및 사무소 안내'}
                  </button>
                </div>
              </div>
            </section>
          </div>
        )}

        {currentPage === 'about' && (
          <AboutPage
            lang={lang}
            onNavigate={handleNavigate}
            onOpenInquiry={() => handleOpenInquiry()}
          />
        )}

        {currentPage === 'companies' && (
          <CompaniesPage
            lang={lang}
            onNavigate={handleNavigate}
            onOpenInquiry={(comp) => handleOpenInquiry(undefined, comp)}
          />
        )}

        {currentPage === 'products' && (
          <ProductsPage
            lang={lang}
            onOpenInquiry={(prod) => handleOpenInquiry(prod)}
          />
        )}

        {currentPage === 'minerals-metals' && (
          <MineralsPage
            lang={lang}
            onNavigate={handleNavigate}
            onOpenInquiry={(item) => handleOpenInquiry(item, 'PT PMA Kidrill Metal Mining')}
          />
        )}

        {currentPage === 'food-agriculture' && (
          <FoodAgriculturePage
            lang={lang}
            onNavigate={handleNavigate}
            onOpenInquiry={(item) => handleOpenInquiry(item, 'Thunder Mark Vietnam Co., Ltd')}
          />
        )}

        {currentPage === 'seafood' && (
          <SeafoodPage
            lang={lang}
            onNavigate={handleNavigate}
            onOpenInquiry={(item) => handleOpenInquiry(item, 'Thunder Mark Vietnam Co., Ltd')}
          />
        )}

        {currentPage === 'projects' && (
          <ProjectsPage
            lang={lang}
            onNavigate={handleNavigate}
            onOpenInquiry={(proj) => handleOpenInquiry(proj)}
          />
        )}

        {currentPage === 'markets' && (
          <MarketsPage
            lang={lang}
            onNavigate={handleNavigate}
            onOpenInquiry={(market) => handleOpenInquiry(market)}
          />
        )}

        {currentPage === 'sustainability' && (
          <SustainabilityPage
            lang={lang}
            onNavigate={handleNavigate}
            onOpenInquiry={() => handleOpenInquiry('Sustainability Compliance')}
          />
        )}

        {currentPage === 'news' && <NewsPage lang={lang} />}

        {currentPage === 'contact' && <ContactPage lang={lang} />}
      </main>

      {/* Global B2B Inquiry Modal */}
      <InquiryModal
        isOpen={inquiryModalOpen}
        onClose={() => setInquiryModalOpen(false)}
        lang={lang}
        initialProduct={initialInquiryProduct}
        initialCompany={initialInquiryCompany}
      />

      {/* Corporate Footer (Grounded dark anchor) */}
      <Footer
        onNavigate={handleNavigate}
        lang={lang}
        onOpenInquiry={() => handleOpenInquiry()}
      />
    </div>
  );
}
