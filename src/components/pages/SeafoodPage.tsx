import React from 'react';
import { Language, PageId } from '../../types';
import { translations } from '../../translations';
import { ArrowUpRight, MapPin, Snowflake } from 'lucide-react';

interface SeafoodPageProps {
  lang: Language;
  onNavigate: (page: PageId) => void;
  onOpenInquiry: (initialSubject?: string) => void;
}

export const SeafoodPage: React.FC<SeafoodPageProps> = ({
  lang,
  onNavigate,
  onOpenInquiry,
}) => {
  const t = translations[lang];

  const seafoodItems = [
    {
      titleEn: 'Frozen Black Tiger & Vannamei Prawns',
      titleKo: '냉동 블랙타이거 새우 및 흰다리새우 (Head-on / Headless)',
      descEn: 'Individually Quick Frozen (IQF) and block-frozen prawns carefully graded by size (pieces per pound/kg), processed under strict temperature-controlled standards.',
      descKo: '철저한 온도 관리 하에 사이즈별(파운드/킬로그램당 미수)로 정밀 선별된 개별급속냉동(IQF) 및 블록 냉동 새우.',
      specs: 'Available upon request.',
    },
    {
      titleEn: 'Pangasius Fillets & Cold Cuts',
      titleKo: '냉동 바사 / 팡가시우스 필렛 (White Meat)',
      descEn: 'Clean, skinless, boneless, well-trimmed white meat pangasius fillets suitable for global institutional catering, supermarket chains, and food services.',
      descKo: '가시와 껍질이 완벽히 손질된 화이트미트 팡가시우스 필렛으로 대형 급식 및 글로벌 마트 유통에 최적화.',
      specs: 'Available upon request.',
    },
    {
      titleEn: 'Frozen Scallops & Pelagic Seafood',
      titleKo: '냉동 가리비 관자 및 원양 수산물',
      descEn: 'Flash-frozen premium mollusks and seafood cuts maintaining pristine taste, high nutritional integrity, and uniform moisture levels.',
      descKo: '신선한 풍미와 조직감을 보존하도록 급속 동결된 프리미엄 관자 및 수출용 어패류.',
      specs: 'Available upon request.',
    },
    {
      titleEn: 'Processed & Value-Added Export Seafood',
      titleKo: '수출용 맞춤형 가공 수산물',
      descEn: 'Tailored portion-controlled packs, breaded cuts, and custom buyer-specified packing configurations for international retail distribution.',
      descKo: '수입 바이어의 스펙에 맞춘 정량 소포장, 빵가루 가공 및 맞춤형 냉동 수산식품.',
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
          <span className="text-slate-900 font-semibold">SEAFOOD</span>
        </div>

        {/* Hero split layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-20">
          <div className="lg:col-span-7 space-y-6">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-[-0.03em] text-slate-900">
              {lang === 'en' ? 'Seafood Export Division' : '베트남 수산물 직수출 부문'}
            </h1>

            <p className="text-slate-600 text-base sm:text-lg leading-relaxed font-normal">
              {lang === 'en'
                ? 'Thunder Mark Vietnam Co., Ltd coordinates certified export processing and uninterrupted reefer container cold chains, delivering Vietnam’s premium seafood to international wholesalers and distributors.'
                : 'Thunder Mark Vietnam Co., Ltd는 인증 가공 시설 및 빈틈없는 리퍼 컨테이너 콜드체인을 통해 베트남산 고품질 냉동 수산물을 전 세계 수입 도매상 및 유통사에 공급합니다.'}
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
                onClick={() => onOpenInquiry('Seafood Export')}
                className="py-3.5 px-6 rounded-lg bg-[#0f172a] hover:bg-slate-800 text-white font-semibold text-xs tracking-wider uppercase transition-colors flex items-center gap-2 cursor-pointer shadow-xs"
              >
                <span>{lang === 'en' ? 'Request Seafood Offer' : '수산물 공급 문의하기'}</span>
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
                src="/src/assets/images/business_vietnam_seafood_1791535400724.jpg"
                alt="Export grade seafood on crushed clean ice in international cold storage"
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
              {lang === 'en' ? 'Export Seafood Catalogue' : '수산물 수출 주요 품목'}
            </h2>
            <span className="text-xs font-mono text-[#b08a3e] uppercase tracking-wider flex items-center gap-1.5 font-semibold">
              <Snowflake className="w-3.5 h-3.5" />
              <span>COLD CHAIN INTEGRITY ASSURED</span>
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {seafoodItems.map((item, idx) => (
              <div
                key={idx}
                className="p-8 rounded-2xl bg-white border border-slate-200 hover:border-[#c5a059]/70 shadow-xs transition-colors flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-xl font-semibold text-slate-900">
                      {lang === 'en' ? item.titleEn : item.titleKo}
                    </h3>
                    <span className="text-xs font-mono text-slate-400">VN-SEA-0{idx + 1}</span>
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

        {/* Cold Chain Standards Strip */}
        <div className="p-8 rounded-2xl bg-white border border-slate-200 shadow-xs">
          <h3 className="text-xs font-mono uppercase tracking-[0.2em] text-[#b08a3e] mb-3 font-semibold">
            INTERNATIONAL LOGISTICS & IMPORT CLEARANCE
          </h3>
          <p className="text-slate-600 text-sm leading-relaxed mb-6 font-light">
            {lang === 'en'
              ? 'Consignments are loaded under continuous temperature monitoring (-18°C or below) from Cat Lai and regional deepwater container ports directly to destination berths in South Korea, China, Europe, and the US.'
              : '전 선적 화물은 호치민 깟라이(Cat Lai) 및 인근 심수항에서 목적항까지 -18°C 이하의 리퍼 컨테이너를 통해 연속 온도 기록과 함께 안전하게 운송됩니다.'}
          </p>
          <div className="flex flex-wrap gap-3">
            {['South Korea (Busan)', 'China', 'Europe (Rotterdam)', 'United States (Long Beach)', 'Southeast Asia'].map((mkt, idx) => (
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
