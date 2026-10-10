import React from 'react';
import { Language, PageId } from '../../types';
import { translations } from '../../translations';
import { ArrowUpRight, MapPin } from 'lucide-react';

interface MineralsPageProps {
  lang: Language;
  onNavigate: (page: PageId) => void;
  onOpenInquiry: (initialSubject?: string) => void;
}

export const MineralsPage: React.FC<MineralsPageProps> = ({
  lang,
  onNavigate,
  onOpenInquiry,
}) => {
  const t = translations[lang];

  const mineralItems = [
    {
      titleEn: 'Thermal Coal (Steam Coal)',
      titleKo: '발전용 유연탄 (스팀 콜)',
      descEn: 'Sourced from compliant concession operations across East Kalimantan and South Sumatra, providing stable calorific yields for regional and international power utilities.',
      descKo: '동칼리만탄 및 남수마트라의 인허가 광산에서 채굴되어 국내외 대형 발전소 및 전력 공기업에 안정적으로 공급됩니다.',
      specs: 'Available upon request.',
    },
    {
      titleEn: 'High-Purity Copper & Cathodes',
      titleKo: '고순도 전기동 및 구리 원자재',
      descEn: 'Grade A refined copper cathodes and industrial copper intermediates intended for power transmission, electrical conductors, and cable manufacturing.',
      descKo: '전력망 인프라, 전선 및 전기전도체 가공에 필수적인 고순도 Grade A 정련 전기동.',
      specs: 'Available upon request.',
    },
    {
      titleEn: 'Base & Industrial Metals',
      titleKo: '산업용 비철금속 및 합금 원자재',
      descEn: 'Structured B2B deliveries of non-ferrous and industrial raw metals servicing heavy fabrication plants, foundries, and processing complexes across Asia.',
      descKo: '아시아 전역의 주조, 단조 및 금속 가공 공장을 위한 비철금속 및 산업용 기초 원자재 공급.',
      specs: 'Available upon request.',
    },
    {
      titleEn: 'Mine-Related Trading Opportunities',
      titleKo: '광산 연계 무역 및 오프테이크 거래',
      descEn: 'Facilitating direct long-term commercial off-take agreements and structured trade finance directly linked with established mineral concessions.',
      descKo: '채굴 광산과 해외 실수요처 간의 장기 오프테이크 계약 체결 및 체계적인 무역 금융 구조화 지원.',
      specs: 'Available upon request.',
    },
  ];

  return (
    <div className="pt-32 pb-28 bg-[#fdfcf8] text-slate-900">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-[0.2em] text-[#b08a3e] mb-4">
          <button onClick={() => onNavigate('home')} className="hover:underline cursor-pointer">
            KIDRILL GROUP
          </button>
          <span>/</span>
          <button onClick={() => onNavigate('products')} className="hover:underline cursor-pointer">
            PRODUCTS
          </button>
          <span>/</span>
          <span className="text-slate-900 font-semibold">MINERALS & METALS</span>
        </div>

        {/* Hero split layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-20">
          <div className="lg:col-span-7 space-y-6">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-[-0.03em] text-slate-900">
              {lang === 'en' ? 'Minerals & Industrial Metals' : '광물 및 산업용 금속 무역'}
            </h1>

            <p className="text-slate-600 text-base sm:text-lg leading-relaxed font-normal">
              {lang === 'en'
                ? 'PT PMA Kidrill Metal Mining is the dedicated resources trading entity of Kidrill Group, managing international sourcing, commodity contracts, and reliable B2B supply lines from Indonesia to global industrial consumers.'
                : 'PT PMA Kidrill Metal Mining은 키드릴 그룹의 자원 트레이딩 전담 법인으로서, 인도네시아의 풍부한 광물 자원과 산업용 비철금속을 글로벌 실수요 기업에 안정적으로 공급합니다.'}
            </p>

            {/* Operating Entity Card */}
            <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-xs space-y-2">
              <span className="text-[11px] font-mono text-[#b08a3e] uppercase tracking-wider block font-semibold">
                OPERATING COMPANY
              </span>
              <div className="text-base font-semibold text-slate-900">
                PT PMA Kidrill Metal Mining
              </div>
              <div className="flex items-start gap-2 text-xs text-slate-600">
                <MapPin className="w-4 h-4 text-[#b08a3e] shrink-0 mt-0.5" />
                <span>23 RD FLOOR, PAKUWON CENTRE, JL EMBONG MALANG KEDUNGDORO, TEGALSARI, KOTA SURABAYA, JAWA TIMUR, INDONESIA</span>
              </div>
            </div>

            <div className="flex items-center gap-4 pt-2">
              <button
                onClick={() => onOpenInquiry('Minerals & Metals')}
                className="py-3.5 px-6 rounded-lg bg-[#0f172a] hover:bg-slate-800 text-white font-semibold text-xs tracking-wider uppercase transition-colors flex items-center gap-2 cursor-pointer shadow-xs"
              >
                <span>{lang === 'en' ? 'Request Commodity Offer' : '광물 거래 문의하기'}</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-[#c5a059]" />
              </button>

              <button
                onClick={() => onNavigate('companies')}
                className="py-3.5 px-6 rounded-lg bg-white hover:bg-slate-50 border border-slate-200 text-xs font-medium text-slate-800 transition-colors cursor-pointer shadow-xs"
              >
                {lang === 'en' ? 'About Indonesia Entity' : '인도네시아 법인 소개'}
              </button>
            </div>
          </div>

          <div className="lg:col-span-5 relative">
            <div className="rounded-2xl overflow-hidden border border-slate-200 shadow-md relative aspect-[4/3]">
              <img
                src="/src/assets/images/business_minerals_metals_1791535377169.jpg"
                alt="Refined copper cathodes and mineral commodities warehouse"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* Commodity Portfolio Breakdown */}
        <div className="mb-20">
          <div className="mb-8 pb-4 border-b border-slate-200 flex items-center justify-between">
            <h2 className="text-2xl font-light text-slate-900 tracking-tight">
              {lang === 'en' ? 'Primary Commodity Portfolio' : '주요 취급 광물 및 원자재'}
            </h2>
            <span className="text-xs font-mono text-[#b08a3e] uppercase tracking-wider font-semibold">
              INSPECTION & ASSAY UPON REQUEST
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {mineralItems.map((item, idx) => (
              <div
                key={idx}
                className="p-8 rounded-2xl bg-white border border-slate-200 hover:border-[#c5a059]/70 shadow-xs transition-colors flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-xl font-semibold text-slate-900">
                      {lang === 'en' ? item.titleEn : item.titleKo}
                    </h3>
                    <span className="text-xs font-mono text-slate-400">ID-MIN-0{idx + 1}</span>
                  </div>

                  <p className="text-slate-600 text-sm leading-relaxed mb-6 font-light">
                    {lang === 'en' ? item.descEn : item.descKo}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-xs font-mono text-[#b08a3e] font-semibold">
                    Specifications: {item.specs}
                  </span>

                  <button
                    onClick={() => onOpenInquiry(lang === 'en' ? item.titleEn : item.titleKo)}
                    className="text-xs font-mono uppercase tracking-wider text-slate-900 hover:text-[#b08a3e] flex items-center gap-1 transition-colors font-semibold cursor-pointer"
                  >
                    <span>Request Details</span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-[#b08a3e]" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Target International Markets Strip */}
        <div className="p-8 rounded-2xl bg-white border border-slate-200 shadow-xs">
          <h3 className="text-xs font-mono uppercase tracking-[0.2em] text-[#b08a3e] mb-3 font-semibold">
            DESTINATION MARKETS SERVED
          </h3>
          <p className="text-slate-600 text-sm leading-relaxed mb-6 font-light">
            {lang === 'en'
              ? 'Our mineral trading desk structures bulk sea freight to major ports across Southeast Asia, China, South Korea, Europe, and the United States.'
              : '수라바야 트레이딩 데스크는 한국, 중국, 동남아, 유럽 및 미국 주요 항만으로의 대형 벌크 해상 운송 계약을 체결 및 총괄합니다.'}
          </p>
          <div className="flex flex-wrap gap-3">
            {['Southeast Asia (ASEAN)', 'China', 'South Korea', 'Europe', 'United States'].map((mkt, idx) => (
              <span
                key={idx}
                className="px-4 py-2 rounded-lg bg-slate-50 border border-slate-200 text-xs font-mono text-slate-700"
              >
                {mkt}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
