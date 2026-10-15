import React from 'react';
import { Language, PageId } from '../../types';
import { translations } from '../../translations';
import { KidrillLogo } from '../common/Logo';
import { Target, Eye, Building2 } from 'lucide-react';

interface AboutPageProps {
  lang: Language;
  onNavigate: (page: PageId) => void;
  onOpenInquiry: () => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({
  lang,
  onNavigate,
  onOpenInquiry,
}) => {
  const t = translations[lang];

  return (
    <div className="pt-32 pb-28 bg-white text-slate-900">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <div className="flex items-center gap-2.5 text-xs font-mono tracking-[0.25em] text-[#b08a3e] uppercase mb-4">
            <Building2 className="w-3.5 h-3.5" />
            <span className="font-semibold">{t.about.tag}</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-[-0.03em] text-slate-900 mb-6">
            {t.about.title}
          </h1>

          <p className="text-slate-600 text-lg leading-relaxed font-normal">
            {t.about.intro}
          </p>
        </div>

        {/* Corporate Architectural Visual */}
        <div className="rounded-3xl overflow-hidden border border-slate-200 shadow-md mb-20 relative aspect-[21/9]">
          <img
            src="/src/assets/images/corporate_trading_architecture_1791535412184.jpg"
            alt="International trading corporate headquarters and commercial architecture"
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
          <div className="absolute bottom-8 left-8 sm:bottom-12 sm:left-12 max-w-xl">
            <KidrillLogo variant="light" size="lg" showTagline={true} />
          </div>
        </div>

        {/* Our Story */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-24 pb-20 border-b border-slate-200">
          <div className="lg:col-span-4">
            <span className="text-xs font-mono uppercase tracking-[0.2em] text-[#b08a3e] block mb-2 font-semibold">
              FOUNDATIONAL ETHOS
            </span>
            <h2 className="text-3xl font-bold text-slate-900 tracking-[-0.02em]">
              {t.about.storyTitle}
            </h2>
          </div>

          <div className="lg:col-span-8 space-y-6 text-slate-600 text-base sm:text-lg font-normal leading-relaxed">
            <p>{t.about.storyP1}</p>
            <p>{t.about.storyP2}</p>
          </div>
        </div>

        {/* Vision & Mission (Dual Columns) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24">
          {/* Vision */}
          <div className="p-10 rounded-2xl bg-white border border-slate-200 shadow-xs relative overflow-hidden flex flex-col justify-between">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-xl bg-slate-100 text-[#b08a3e] flex items-center justify-center">
                <Eye className="w-6 h-6" />
              </div>
              <span className="text-xs font-mono uppercase tracking-[0.2em] text-[#b08a3e] block font-semibold">
                STRATEGIC HORIZON
              </span>
              <h3 className="text-2xl font-semibold text-slate-900">{t.about.visionTitle}</h3>
              <p className="text-slate-600 text-lg font-normal leading-relaxed">
                &ldquo;{t.about.visionText}&rdquo;
              </p>
            </div>
          </div>

          {/* Mission */}
          <div className="p-10 rounded-2xl bg-white border border-slate-200 shadow-xs relative overflow-hidden flex flex-col justify-between">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-xl bg-slate-100 text-[#b08a3e] flex items-center justify-center">
                <Target className="w-6 h-6" />
              </div>
              <span className="text-xs font-mono uppercase tracking-[0.2em] text-[#b08a3e] block font-semibold">
                OPERATIONAL MANDATE
              </span>
              <h3 className="text-2xl font-semibold text-slate-900">{t.about.missionTitle}</h3>
              <p className="text-slate-600 text-lg font-normal leading-relaxed">
                &ldquo;{t.about.missionText}&rdquo;
              </p>
            </div>
          </div>
        </div>

        {/* Our Values (6 Items) */}
        <div className="mb-24 pb-20 border-b border-slate-200">
          <div className="max-w-2xl mb-12">
            <span className="text-xs font-mono uppercase tracking-[0.2em] text-[#b08a3e] block mb-2 font-semibold">
              COMMERCIAL PRINCIPLES
            </span>
            <h2 className="text-3xl font-bold text-slate-900 tracking-[-0.02em]">
              {t.about.valuesTitle}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {t.about.values.map((val, idx) => (
              <div
                key={idx}
                className="p-8 rounded-2xl bg-white border border-slate-200 hover:border-[#c5a059]/70 shadow-xs transition-colors"
              >
                <span className="text-xs font-mono text-[#b08a3e] font-semibold block mb-3">0{idx + 1}</span>
                <h3 className="text-xl font-semibold text-slate-900 mb-2">{val.name}</h3>
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed font-normal">
                  {val.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Business Network & Operating Model */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5 space-y-4">
            <span className="text-xs font-mono uppercase tracking-[0.2em] text-[#b08a3e] block font-semibold">
              REGIONAL ARCHITECTURE
            </span>
            <h2 className="text-3xl font-bold text-slate-900 tracking-tight">
              {t.about.networkTitle}
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-normal">
              {t.about.networkDesc}
            </p>

            <div className="pt-4 flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => onNavigate('companies')}
                className="py-3 px-6 rounded-lg bg-[#0f172a] hover:bg-slate-800 text-white text-xs font-semibold uppercase tracking-wider transition-colors cursor-pointer shadow-xs"
              >
                {lang === 'en' ? 'Explore Our Companies' : '계열사 정보 보기'}
              </button>

              <button
                onClick={onOpenInquiry}
                className="py-3 px-6 rounded-lg bg-white hover:bg-slate-50 border border-slate-200 text-slate-900 text-xs font-medium uppercase tracking-wider transition-colors cursor-pointer shadow-xs"
              >
                {lang === 'en' ? 'Contact Corporate Desk' : '기업 문의하기'}
              </button>
            </div>
          </div>

          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-xs">
              <span className="text-xs font-mono text-[#b08a3e] uppercase block mb-1 font-semibold">
                INDONESIAN HUB
              </span>
              <h4 className="text-lg font-semibold text-slate-900 mb-2">PT PMA Kidrill Metal Mining</h4>
              <p className="text-slate-600 text-xs leading-relaxed font-mono font-medium">
                Surabaya, Indonesia
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-xs">
              <span className="text-xs font-mono text-[#b08a3e] uppercase block mb-1 font-semibold">
                VIETNAMESE HUB
              </span>
              <h4 className="text-lg font-semibold text-slate-900 mb-2">Thunder Mark Vietnam Co., Ltd</h4>
              <p className="text-slate-600 text-xs leading-relaxed font-mono font-medium">
                Ho Chi Minh City, Vietnam
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
