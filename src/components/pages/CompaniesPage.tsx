import React from 'react';
import { Language, PageId } from '../../types';
import { translations } from '../../translations';
import { MapPin, Building2, CheckCircle2, ArrowUpRight } from 'lucide-react';

interface CompaniesPageProps {
  lang: Language;
  onNavigate: (page: PageId) => void;
  onOpenInquiry: (companyName?: string) => void;
}

export const CompaniesPage: React.FC<CompaniesPageProps> = ({
  lang,
  onNavigate,
  onOpenInquiry,
}) => {
  const t = translations[lang];

  return (
    <div className="pt-32 pb-28 bg-[#fdfcf8] text-slate-900">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <div className="flex items-center gap-2.5 text-xs font-mono tracking-[0.25em] text-[#b08a3e] uppercase mb-4">
            <Building2 className="w-3.5 h-3.5" />
            <span className="font-semibold">{t.companies.tag}</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-[-0.03em] text-slate-900 mb-6">
            {t.companies.title}
          </h1>

          <p className="text-slate-600 text-lg leading-relaxed font-normal">
            {t.companies.description}
          </p>
        </div>

        {/* Company 01 Section: PT PMA Kidrill Metal Mining */}
        <div className="mb-20 p-8 sm:p-12 rounded-3xl bg-white border border-slate-200 shadow-sm hover:border-[#c5a059]/70 transition-colors">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            <div className="lg:col-span-7 space-y-6">
              <div className="flex items-center gap-3">
                <span className="px-3 py-1 rounded bg-slate-100 border border-slate-200 text-[#b08a3e] text-xs font-mono uppercase tracking-widest font-semibold">
                  COMPANY 01 · INDONESIA
                </span>
                <span className="text-xs font-mono text-slate-400 font-medium">PT PMA ENTITY</span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-[-0.02em]">
                PT PMA Kidrill Metal Mining
              </h2>

              <div className="flex items-start gap-3 p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs sm:text-sm text-slate-700">
                <MapPin className="w-5 h-5 text-[#b08a3e] shrink-0 mt-0.5" />
                <div>
                  <span className="font-semibold block text-slate-900 mb-0.5">Surabaya, East Java, Indonesia</span>
                  <span className="text-slate-500 font-mono text-xs leading-relaxed block">
                    23 RD FLOOR, PAKUWON CENTRE, JL EMBONG MALANG KEDUNGDORO, TEGALSARI, KOTA SURABAYA, JAWA TIMUR, INDONESIA
                  </span>
                </div>
              </div>

              <p className="text-slate-600 text-base leading-relaxed font-light">
                {lang === 'en'
                  ? 'PT PMA Kidrill Metal Mining is an internationally recognized Indonesian foreign direct investment (PMA) trading company specializing in mineral commodities, energy resources, copper, and base metals. The company acts as the vital bridge connecting premier Indonesian extraction zones with industrial processors worldwide.'
                  : 'PT PMA Kidrill Metal Mining은 인도네시아 외국인투자법인(PMA)으로서 광물 원자재, 에너지 자원(석탄), 전기동 및 비철금속의 국제 상업 무역을 전담합니다. 인도네시아 현지 광산 현장과 전 세계 산업 수요처를 잇는 핵심 가교 역할을 수행합니다.'}
              </p>

              <div>
                <span className="block text-xs font-mono uppercase tracking-wider text-slate-500 mb-3 font-semibold">
                  {lang === 'en' ? 'Core Business Functions & Trading Scope' : '핵심 사업 영역 및 취급 품목'}
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {t.companies.co1Focus.map((focus, idx) => (
                    <div
                      key={idx}
                      className="text-xs text-slate-700 flex items-center gap-2 p-2.5 rounded-lg bg-slate-50 border border-slate-200"
                    >
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#b08a3e] shrink-0" />
                      <span className="truncate">{focus}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 flex flex-wrap gap-4">
                <button
                  onClick={() => onNavigate('minerals-metals')}
                  className="py-3 px-6 rounded-lg bg-[#0f172a] hover:bg-slate-800 text-white text-xs font-semibold uppercase tracking-wider transition-colors flex items-center gap-2 cursor-pointer shadow-xs"
                >
                  <span>{lang === 'en' ? 'View Mineral Products' : '취급 광물 품목 보기'}</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-[#c5a059]" />
                </button>

                <button
                  onClick={() => onOpenInquiry('PT PMA Kidrill Metal Mining')}
                  className="py-3 px-6 rounded-lg bg-white hover:bg-slate-50 border border-slate-200 text-xs font-mono uppercase tracking-wider text-slate-900 transition-colors cursor-pointer shadow-xs font-semibold"
                >
                  {lang === 'en' ? 'Direct Desk Inquiry' : '수라바야 데스크 문의'}
                </button>
              </div>
            </div>

            <div className="lg:col-span-5 space-y-6">
              <div className="rounded-2xl overflow-hidden border border-slate-200 shadow-sm relative aspect-[4/3]">
                <img
                  src="/src/assets/images/business_minerals_metals_1791535377169.jpg"
                  alt="PT PMA Kidrill Metal Mining Indonesian minerals trade"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-3">
                <span className="text-xs font-mono text-[#b08a3e] uppercase tracking-wider block font-semibold">
                  PRIMARY DESTINATION MARKETS
                </span>
                <div className="flex flex-wrap gap-2">
                  {['Southeast Asia', 'China', 'South Korea', 'Europe', 'United States', 'Global Markets'].map((mkt, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 rounded-md bg-white border border-slate-200 text-xs font-mono text-slate-700 shadow-xs"
                    >
                      {mkt}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Company 02 Section: Thunder Mark Vietnam Co., Ltd */}
        <div className="mb-20 p-8 sm:p-12 rounded-3xl bg-white border border-slate-200 shadow-sm hover:border-[#c5a059]/70 transition-colors">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            <div className="lg:col-span-7 space-y-6">
              <div className="flex items-center gap-3">
                <span className="px-3 py-1 rounded bg-slate-100 border border-slate-200 text-[#b08a3e] text-xs font-mono uppercase tracking-widest font-semibold">
                  COMPANY 02 · VIETNAM
                </span>
                <span className="text-xs font-mono text-slate-400 font-medium">EXPORT ENTITY</span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-[-0.02em]">
                Thunder Mark Vietnam Co., Ltd
              </h2>

              <div className="flex items-start gap-3 p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs sm:text-sm text-slate-700">
                <MapPin className="w-5 h-5 text-[#b08a3e] shrink-0 mt-0.5" />
                <div>
                  <span className="font-semibold block text-slate-900 mb-0.5">Ho Chi Minh City, Vietnam</span>
                  <span className="text-slate-500 font-mono text-xs leading-relaxed block">
                    Golding King Tower, Nguyen Luong Bang St., Tan Hung Ward, Ho Chi Minh City, Vietnam
                  </span>
                </div>
              </div>

              <p className="text-slate-600 text-base leading-relaxed font-light">
                {lang === 'en'
                  ? 'Thunder Mark Vietnam Co., Ltd is an international export and sourcing company headquartered in Ho Chi Minh City. The company specializes in connecting high-standard Vietnamese agricultural harvests, premium coffee, jasmine rice, processed foods, and cold-chain seafood with verified global buyers.'
                  : 'Thunder Mark Vietnam Co., Ltd는 베트남 호치민에 본사를 둔 국제 수출 및 소싱 전문 무역 법인입니다. 베트남산 고품질 농산물(자스민 쌀, 커피 생두), 가공식품, 냉동 수산물 및 광물 원자재를 전 세계 바이어에게 수출합니다.'}
              </p>

              <div>
                <span className="block text-xs font-mono uppercase tracking-wider text-slate-500 mb-3 font-semibold">
                  {lang === 'en' ? 'Core Business Functions & Export Scope' : '핵심 사업 영역 및 수출 품목'}
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {t.companies.co2Focus.map((focus, idx) => (
                    <div
                      key={idx}
                      className="text-xs text-slate-700 flex items-center gap-2 p-2.5 rounded-lg bg-slate-50 border border-slate-200"
                    >
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#b08a3e] shrink-0" />
                      <span className="truncate">{focus}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 flex flex-wrap gap-4">
                <button
                  onClick={() => onNavigate('food-agriculture')}
                  className="py-3 px-6 rounded-lg bg-[#0f172a] hover:bg-slate-800 text-white text-xs font-semibold uppercase tracking-wider transition-colors flex items-center gap-2 cursor-pointer shadow-xs"
                >
                  <span>{lang === 'en' ? 'View Food & Agri Products' : '농식품 수출 품목 보기'}</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-[#c5a059]" />
                </button>

                <button
                  onClick={() => onNavigate('seafood')}
                  className="py-3 px-6 rounded-lg bg-white hover:bg-slate-50 border border-slate-200 text-xs font-mono uppercase tracking-wider text-slate-900 transition-colors cursor-pointer shadow-xs font-semibold"
                >
                  {lang === 'en' ? 'View Seafood Products' : '수산물 품목 보기'}
                </button>

                <button
                  onClick={() => onOpenInquiry('Thunder Mark Vietnam Co., Ltd')}
                  className="py-3 px-6 rounded-lg bg-white hover:bg-slate-50 border border-slate-200 text-xs font-mono uppercase tracking-wider text-slate-900 transition-colors cursor-pointer shadow-xs font-semibold"
                >
                  {lang === 'en' ? 'Direct Desk Inquiry' : '호치민 데스크 문의'}
                </button>
              </div>
            </div>

            <div className="lg:col-span-5 space-y-6">
              <div className="rounded-2xl overflow-hidden border border-slate-200 shadow-sm relative aspect-[4/3]">
                <img
                  src="/src/assets/images/business_food_agriculture_1791535388182.jpg"
                  alt="Thunder Mark Vietnam Co., Ltd export goods"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-3">
                <span className="text-xs font-mono text-[#b08a3e] uppercase tracking-wider block font-semibold">
                  PRIMARY DESTINATION MARKETS
                </span>
                <div className="flex flex-wrap gap-2">
                  {['Southeast Asia', 'South Korea', 'China', 'Europe', 'United States', 'Global Markets'].map((mkt, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 rounded-md bg-white border border-slate-200 text-xs font-mono text-slate-700 shadow-xs"
                    >
                      {mkt}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
