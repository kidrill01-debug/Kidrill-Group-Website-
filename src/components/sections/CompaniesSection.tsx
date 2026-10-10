import React from 'react';
import { Language, PageId } from '../../types';
import { translations } from '../../translations';
import { MapPin, ArrowUpRight, CheckCircle2, Shield, Landmark } from 'lucide-react';

interface CompaniesSectionProps {
  lang: Language;
  onNavigate: (page: PageId) => void;
  onOpenInquiry: (companyName?: string) => void;
}

export const CompaniesSection: React.FC<CompaniesSectionProps> = ({
  lang,
  onNavigate,
  onOpenInquiry,
}) => {
  const t = translations[lang];

  return (
    <section className="py-28 bg-[#fdfcf8] text-slate-900">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-20">
          <div className="flex items-center gap-2.5 text-xs font-mono tracking-[0.25em] text-[#b08a3e] uppercase mb-4">
            <Landmark className="w-3.5 h-3.5" />
            <span className="font-semibold">{t.companies.tag}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-[-0.025em] text-slate-900 mb-6">
            {t.companies.title}
          </h2>
          <p className="text-slate-600 text-base sm:text-lg leading-relaxed font-normal">
            {t.companies.description}
          </p>
        </div>

        {/* Dual Operating Entities Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Company 01: PT PMA Kidrill Metal Mining */}
          <div className="bg-white border border-slate-200/90 rounded-2xl p-8 sm:p-10 flex flex-col justify-between hover:border-[#c5a059]/60 shadow-xs transition-all duration-300">
            <div>
              {/* Header Badge */}
              <div className="flex items-center justify-between pb-6 border-b border-slate-200 mb-6">
                <div>
                  <span className="text-xs font-mono uppercase tracking-[0.2em] text-[#b08a3e] block mb-1 font-semibold">
                    OPERATING COMPANY 01 · INDONESIA
                  </span>
                  <span className="text-sm text-slate-500 font-light">
                    {t.companies.co1Role}
                  </span>
                </div>
                <div className="w-10 h-10 rounded-lg bg-white border border-slate-200 flex items-center justify-center text-[#b08a3e] shadow-xs">
                  <span className="font-mono text-sm font-semibold">ID</span>
                </div>
              </div>

              {/* Company Title */}
              <h3 className="text-2xl sm:text-3xl font-medium text-slate-900 mb-3">
                {t.companies.co1Name}
              </h3>

              {/* Geographic Office Location */}
              <div className="flex items-start gap-2.5 text-xs text-slate-700 bg-white p-4 rounded-xl border border-slate-200/80 mb-6 shadow-xs">
                <MapPin className="w-4 h-4 text-[#b08a3e] shrink-0 mt-0.5" />
                <div>
                  <span className="font-semibold block text-slate-900 mb-0.5">Surabaya, East Java, Indonesia</span>
                  <span className="text-slate-500 font-mono text-[11px] leading-relaxed block">
                    {t.companies.co1Address}
                  </span>
                </div>
              </div>

              {/* Description */}
              <p className="text-slate-600 text-sm leading-relaxed mb-6 font-light">
                {t.companies.co1Desc}
              </p>

              {/* Business Focus List */}
              <div className="mb-8">
                <span className="block text-xs font-mono uppercase tracking-wider text-slate-500 mb-3 font-semibold">
                  {lang === 'en' ? 'Core Trading Scope' : '주요 사업 범위'}
                </span>
                <div className="grid grid-cols-2 gap-2">
                  {t.companies.co1Focus.map((focus, idx) => (
                    <div
                      key={idx}
                      className="text-xs text-slate-700 flex items-center gap-2 py-1"
                    >
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#b08a3e] shrink-0" />
                      <span className="truncate">{focus}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Bottom Actions */}
            <div className="pt-6 border-t border-slate-200 flex flex-wrap items-center justify-between gap-4">
              <button
                onClick={() => onNavigate('minerals-metals')}
                className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-slate-900 hover:text-[#b08a3e] transition-colors font-semibold cursor-pointer"
              >
                <span>{lang === 'en' ? 'Explore Minerals Division' : '광물 사업부 보기'}</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-[#b08a3e]" />
              </button>

              <button
                onClick={() => onOpenInquiry('PT PMA Kidrill Metal Mining')}
                className="py-2.5 px-4 rounded-lg bg-slate-900 hover:bg-slate-800 text-xs font-medium text-white transition-colors cursor-pointer"
              >
                {lang === 'en' ? 'Contact Surabaya Desk' : '수라바야 데스크 문의'}
              </button>
            </div>
          </div>

          {/* Company 02: Thunder Mark Vietnam Co., Ltd */}
          <div className="bg-white border border-slate-200/90 rounded-2xl p-8 sm:p-10 flex flex-col justify-between hover:border-[#c5a059]/60 shadow-xs transition-all duration-300">
            <div>
              {/* Header Badge */}
              <div className="flex items-center justify-between pb-6 border-b border-slate-200 mb-6">
                <div>
                  <span className="text-xs font-mono uppercase tracking-[0.2em] text-[#b08a3e] block mb-1 font-semibold">
                    OPERATING COMPANY 02 · VIETNAM
                  </span>
                  <span className="text-sm text-slate-500 font-light">
                    {t.companies.co2Role}
                  </span>
                </div>
                <div className="w-10 h-10 rounded-lg bg-white border border-slate-200 flex items-center justify-center text-[#b08a3e] shadow-xs">
                  <span className="font-mono text-sm font-semibold">VN</span>
                </div>
              </div>

              {/* Company Title */}
              <h3 className="text-2xl sm:text-3xl font-medium text-slate-900 mb-3">
                {t.companies.co2Name}
              </h3>

              {/* Geographic Office Location */}
              <div className="flex items-start gap-2.5 text-xs text-slate-700 bg-white p-4 rounded-xl border border-slate-200/80 mb-6 shadow-xs">
                <MapPin className="w-4 h-4 text-[#b08a3e] shrink-0 mt-0.5" />
                <div>
                  <span className="font-semibold block text-slate-900 mb-0.5">Ho Chi Minh City, Vietnam</span>
                  <span className="text-slate-500 font-mono text-[11px] leading-relaxed block">
                    {t.companies.co2Address}
                  </span>
                </div>
              </div>

              {/* Description */}
              <p className="text-slate-600 text-sm leading-relaxed mb-6 font-light">
                {t.companies.co2Desc}
              </p>

              {/* Business Focus List */}
              <div className="mb-8">
                <span className="block text-xs font-mono uppercase tracking-wider text-slate-500 mb-3 font-semibold">
                  {lang === 'en' ? 'Core Trading Scope' : '주요 사업 범위'}
                </span>
                <div className="grid grid-cols-2 gap-2">
                  {t.companies.co2Focus.map((focus, idx) => (
                    <div
                      key={idx}
                      className="text-xs text-slate-700 flex items-center gap-2 py-1"
                    >
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#b08a3e] shrink-0" />
                      <span className="truncate">{focus}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Bottom Actions */}
            <div className="pt-6 border-t border-slate-200 flex flex-wrap items-center justify-between gap-4">
              <button
                onClick={() => onNavigate('food-agriculture')}
                className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-slate-900 hover:text-[#b08a3e] transition-colors font-semibold cursor-pointer"
              >
                <span>{lang === 'en' ? 'Explore Vietnam Exports' : '베트남 수출 품목 보기'}</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-[#b08a3e]" />
              </button>

              <button
                onClick={() => onOpenInquiry('Thunder Mark Vietnam Co., Ltd')}
                className="py-2.5 px-4 rounded-lg bg-slate-900 hover:bg-slate-800 text-xs font-medium text-white transition-colors cursor-pointer"
              >
                {lang === 'en' ? 'Contact HCMC Desk' : '호치민 데스크 문의'}
              </button>
            </div>
          </div>
        </div>

        {/* Unified Governance Statement */}
        <div className="mt-12 p-8 rounded-2xl bg-slate-50 border border-slate-200 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="p-3 rounded-full bg-slate-200/80 text-[#b08a3e]">
              <Shield className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-base font-semibold text-slate-900">
                {lang === 'en' ? 'Consolidated Commercial Responsibility' : '통합 상업 무역 보증 체계'}
              </h4>
              <p className="text-slate-600 text-xs sm:text-sm">
                {lang === 'en'
                  ? 'All international transactions across both operating companies are backed by Kidrill Group cross-border governance and uniform contractual standards.'
                  : '양사에서 집행되는 모든 국제 무역 계약은 키드릴 그룹의 통합 거버넌스 및 국제 표준 계약 규범에 따라 투명하게 관리됩니다.'}
              </p>
            </div>
          </div>

          <button
            onClick={() => onNavigate('about')}
            className="shrink-0 py-2.5 px-5 rounded-lg border border-slate-300 hover:border-slate-500 text-xs font-mono uppercase tracking-wider text-slate-800 transition-colors cursor-pointer bg-white"
          >
            {lang === 'en' ? 'About Group Governance →' : '그룹 거버넌스 안내 →'}
          </button>
        </div>
      </div>
    </section>
  );
};
