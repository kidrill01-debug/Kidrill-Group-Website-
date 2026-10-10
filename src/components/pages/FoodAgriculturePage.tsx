import React from 'react';
import { Language, PageId } from '../../types';
import { translations } from '../../translations';
import { ArrowUpRight, MapPin } from 'lucide-react';

interface FoodAgriculturePageProps {
  lang: Language;
  onNavigate: (page: PageId) => void;
  onOpenInquiry: (initialSubject?: string) => void;
}

export const FoodAgriculturePage: React.FC<FoodAgriculturePageProps> = ({
  lang,
  onNavigate,
  onOpenInquiry,
}) => {
  const t = translations[lang];

  const agriItems = [
    {
      titleEn: 'Vietnamese Jasmine & Fragrant Rice',
      titleKo: '베트남산 프리미엄 자스민 쌀 및 향미',
      descEn: 'Premium long-grain fragrant rice from the fertile alluvial soil of the Mekong Delta, packaged in export-ready sacks or containerized bulk.',
      descKo: '메콩 델타의 비옥한 토양에서 재배된 프리미엄 장립종 향미 쌀로 글로벌 수출 규격 포장 공급.',
      specs: 'Available upon request.',
    },
    {
      titleEn: 'Green Coffee Beans (Robusta & Arabica)',
      titleKo: '베트남산 원두 생두 (로부스타 & 아라비카)',
      descEn: 'Strictly sorted coffee beans from the Central Highlands (Dak Lak, Lam Dong), calibrated for moisture, bean size, and defect limits for global roasters.',
      descKo: '베트남 중부 고원지대의 철저한 선별 생두로 수분율, 스크린 사이즈 및 결점두 관리 규격 충족.',
      specs: 'Available upon request.',
    },
    {
      titleEn: 'Agricultural Bulk Grains & Commodities',
      titleKo: '농산물 대량 벌크 원자재',
      descEn: 'Consolidated seasonal agricultural commodities structured for institutional wholesale food importers and animal feed processors.',
      descKo: '대형 식품 가공사 및 사료 제조업체를 위한 계절별 농산물 대량 집하 및 해상 선적.',
      specs: 'Available upon request.',
    },
    {
      titleEn: 'Processed Food & Vietnamese-Origin Products',
      titleKo: '수출용 가공 농식품 및 베트남 원산지 제품',
      descEn: 'Certified food items prepared for international retail distribution, meeting national import quarantine and labeling regulations.',
      descKo: '수입국 검역 및 라벨링 규정을 준수한 글로벌 유통망 납품용 가공 농식품.',
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
          <span className="text-slate-900 font-semibold">FOOD & AGRICULTURE</span>
        </div>

        {/* Hero split layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-20">
          <div className="lg:col-span-7 space-y-6">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-[-0.03em] text-slate-900">
              {lang === 'en' ? 'Food & Agricultural Exports' : '베트남 농산물 및 식품 수출'}
            </h1>

            <p className="text-slate-600 text-base sm:text-lg leading-relaxed font-normal">
              {lang === 'en'
                ? 'Thunder Mark Vietnam Co., Ltd serves as Kidrill Group’s international export and sourcing company, connecting high-standard Vietnamese agricultural harvests with discerning buyers across global markets.'
                : 'Thunder Mark Vietnam Co., Ltd는 키드릴 그룹의 베트남 수출 및 소싱 전담 법인으로서, 베트남의 우수한 농산물과 식품을 글로벌 수입업체와 직결합니다.'}
            </p>

            {/* Operating Entity Card */}
            <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-xs space-y-2">
              <span className="text-[11px] font-mono text-[#b08a3e] uppercase tracking-wider block font-semibold">
                OPERATING COMPANY
              </span>
              <div className="text-base font-semibold text-slate-900">
                Thunder Mark Vietnam Co., Ltd
              </div>
              <div className="flex items-start gap-2 text-xs text-slate-600">
                <MapPin className="w-4 h-4 text-[#b08a3e] shrink-0 mt-0.5" />
                <span>Golding King Tower, Nguyen Luong Bang St., Tan Hung Ward, Ho Chi Minh City, Vietnam</span>
              </div>
            </div>

            <div className="flex items-center gap-4 pt-2">
              <button
                onClick={() => onOpenInquiry('Food & Agriculture')}
                className="py-3.5 px-6 rounded-lg bg-[#0f172a] hover:bg-slate-800 text-white font-semibold text-xs tracking-wider uppercase transition-colors flex items-center gap-2 cursor-pointer shadow-xs"
              >
                <span>{lang === 'en' ? 'Request Commodity Offer' : '농산물 공급 문의하기'}</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-[#c5a059]" />
              </button>

              <button
                onClick={() => onNavigate('companies')}
                className="py-3.5 px-6 rounded-lg bg-white hover:bg-slate-50 border border-slate-200 text-xs font-medium text-slate-800 transition-colors cursor-pointer shadow-xs"
              >
                {lang === 'en' ? 'About Vietnam Entity' : '베트남 법인 소개'}
              </button>
            </div>
          </div>

          <div className="lg:col-span-5 relative">
            <div className="rounded-2xl overflow-hidden border border-slate-200 shadow-md relative aspect-[4/3]">
              <img
                src="/src/assets/images/business_food_agriculture_1791535388182.jpg"
                alt="Vietnamese export coffee beans and fragrant jasmine rice"
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
              {lang === 'en' ? 'Agricultural Export Catalogue' : '농산물 수출 주요 품목'}
            </h2>
            <span className="text-xs font-mono text-[#b08a3e] uppercase tracking-wider font-semibold">
              PHYTOSANITARY & SGS INSPECTION UPON REQUEST
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {agriItems.map((item, idx) => (
              <div
                key={idx}
                className="p-8 rounded-2xl bg-white border border-slate-200 hover:border-[#c5a059]/70 shadow-xs transition-colors flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-xl font-semibold text-slate-900">
                      {lang === 'en' ? item.titleEn : item.titleKo}
                    </h3>
                    <span className="text-xs font-mono text-slate-400">VN-AGRI-0{idx + 1}</span>
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
            DESTINATION MARKETS FOR VIETNAMESE EXPORTS
          </h3>
          <p className="text-slate-600 text-sm leading-relaxed mb-6 font-light">
            {lang === 'en'
              ? 'Thunder Mark Vietnam Co., Ltd exports to wholesale importers across Southeast Asia, South Korea, China, Europe, and the United States.'
              : 'Thunder Mark Vietnam Co., Ltd는 한국, 중국, 동남아, 유럽 및 미국 시장의 대형 식자재 유통 및 가공 기업으로 직수출합니다.'}
          </p>
          <div className="flex flex-wrap gap-3">
            {['South Korea', 'China', 'Southeast Asia', 'Europe', 'United States'].map((mkt, idx) => (
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
