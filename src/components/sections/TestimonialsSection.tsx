import React, { useState, useEffect } from 'react';
import { Language } from '../../types';
import {
  Quote,
  ChevronLeft,
  ChevronRight,
  ShieldCheck,
  Building,
  Globe2,
  Award,
  ArrowUpRight,
  Sparkles,
} from 'lucide-react';

interface TestimonialItem {
  id: string;
  partnerName: string;
  roleEn: string;
  roleKo: string;
  companyEn: string;
  companyKo: string;
  locationEn: string;
  locationKo: string;
  tradeTypeEn: string;
  tradeTypeKo: string;
  volumeMetricEn: string;
  volumeMetricKo: string;
  quoteEn: string;
  quoteKo: string;
  entityTagged: 'PT PMA Kidrill Metal Mining' | 'Thunder Mark Vietnam Co., Ltd' | 'Kidrill Group';
  verifiedSince: string;
}

const TESTIMONIALS: TestimonialItem[] = [
  {
    id: 'korea-power-utility',
    partnerName: 'Dr. Jin-Woo Park',
    roleEn: 'Head of Fuel Procurement & Power Supply Logistics',
    roleKo: '원료조달 및 발전물류 총괄 상무',
    companyEn: 'Hanrim Thermal & Energy Solutions Corp.',
    companyKo: '한림서해에너지솔루션',
    locationEn: 'Incheon & Ulsan, South Korea',
    locationKo: '대한민국 인천 & 울산',
    tradeTypeEn: 'Thermal Steam Coal (GAR 4,200–5,000)',
    tradeTypeKo: '발전용 유연탄 벌크 정기 공급',
    volumeMetricEn: '650,000+ MT Dispatched Annually',
    volumeMetricKo: '연간 65만 톤 정기 선적 완료',
    quoteEn:
      'Operating baseload generation plants demands zero tolerance for calorific deviations or demurrage delays. PT PMA Kidrill Metal Mining has been our anchor partner in East Kalimantan, delivering flawless vessel turnarounds, verified SGS COA reports, and completely transparent ESDM concession clearances across every single Supramax parcel.',
    quoteKo:
      '기저부하 발전소를 운영함에 있어 발열량 편차나 체선료(Demurrage) 발생은 치명적입니다. PT PMA Kidrill Metal Mining은 인도네시아 동칼리만탄에서 한 치의 오차 없는 선박 회전율과 SGS 공인 검수 성적서, 투명한 정부 인허가를 갖추고 수프라맥스 벌크 선적을 완벽히 수행해 온 최고의 전략적 파트너입니다.',
    entityTagged: 'PT PMA Kidrill Metal Mining',
    verifiedSince: '2021',
  },
  {
    id: 'tokyo-commodities-trading',
    partnerName: 'Kenji Takahashi',
    roleEn: 'Executive Director of Industrial Metals Desk',
    roleKo: '산업금속 무역 데스크 총괄이사',
    companyEn: 'Nippon Resource & Material Logistics Group',
    companyKo: '일본 자원소재물류 그룹',
    locationEn: 'Tokyo & Osaka, Japan',
    locationKo: '일본 도쿄 & 오사카',
    tradeTypeEn: 'Electrolytic Copper Cathode (Grade A 99.99%)',
    tradeTypeKo: 'LME 등급 고순도 전기동 캐소드',
    volumeMetricEn: '18,500 MT Delivered Since 2022',
    volumeMetricKo: '2022년 이래 누적 18,500 MT 인수',
    quoteEn:
      'Kidrill Group’s commercial professionalism in non-ferrous metals stands out across Southeast Asia. From verified mill-origin assay sheets in Surabaya to seamless international Letter of Credit execution, they provide the regulatory clarity and quality assurance that Japanese precision manufacturing requires.',
    quoteKo:
      '동남아시아 비철금속 시장에서 키드릴 그룹의 상업적 전문성과 신뢰도는 독보적입니다. 수라바야 현지 제련소 출처의 정확한 품위 분석표와 완벽한 국제 신용장 실행력은 일본 정밀 제조 공정이 요구하는 엄격한 품질 기준을 정확히 충족시킵니다.',
    entityTagged: 'PT PMA Kidrill Metal Mining',
    verifiedSince: '2022',
  },
  {
    id: 'rotterdam-food-importer',
    partnerName: 'Matthias Van De Berg',
    roleEn: 'Chief Procurement Officer (Europe & Middle East)',
    roleKo: '유럽 및 중동 농식품 조달 최고책임자 (CPO)',
    companyEn: 'EuroCommodities AgriTrade B.V.',
    companyKo: '유로코모디티 아그리트레이드',
    locationEn: 'Rotterdam Port, Netherlands',
    locationKo: '네덜란드 로테르담 항',
    tradeTypeEn: 'Premium Jasmine Rice & Robusta Coffee Beans',
    tradeTypeKo: '프리미엄 자스민 쌀 & 로부스타 생두',
    volumeMetricEn: '420+ 40ft Containers Exported',
    volumeMetricKo: '누적 420TEU 이상 유럽 수출 완료',
    quoteEn:
      'Managing direct agricultural contracts with Thunder Mark Vietnam has transformed our EU retail supply chain. Their rigorous pesticide screening, ISO/HACCP certifications, and container moisture protection guarantee that every single shipment reaches Rotterdam in pristine culinary condition.',
    quoteKo:
      'Thunder Mark Vietnam과의 직접 농산물 무역 계약은 당사의 유럽 유통 공급망에 큰 안정성을 가져다주었습니다. 엄격한 잔류농약 검사, ISO/HACCP 인증, 철저한 컨테이너 방습 관리 덕분에 모든 화물이 최상의 품질로 로테르담 항구에 도착하고 있습니다.',
    entityTagged: 'Thunder Mark Vietnam Co., Ltd',
    verifiedSince: '2020',
  },
  {
    id: 'los-angeles-seafood-chain',
    partnerName: 'Elena Rostova',
    roleEn: 'VP of Global Seafood Sourcing & Cold Chain Auditing',
    roleKo: '수산물 글로벌 소싱 및 콜드체인 총괄 부사장',
    companyEn: 'Pacific Rim Marine Foods & Cold Chain Logistics',
    companyKo: '퍼시픽 림 마린 푸즈',
    locationEn: 'Long Beach, California, USA',
    locationKo: '미국 캘리포니아 롱비치',
    tradeTypeEn: 'Black Tiger Shrimp & IQF Pangasius Fillets',
    tradeTypeKo: '블랙타이거 새우 & 급속동결(IQF) 팡가시우스',
    volumeMetricEn: '14,000 MT Cold-Chain Ocean Shipments',
    volumeMetricKo: '콜드체인 해상 컨테이너 14,000 MT',
    quoteEn:
      'In cold-chain seafood exports, farm-to-freezer traceability and FDA/BAP compliance are non-negotiable. Thunder Mark Vietnam consistently surpasses US border inspection standards. Their dedicated Ho Chi Minh City logistics team gives us complete visibility from processing pond to Long Beach terminal arrival.',
    quoteKo:
      '냉동 수산물 수출에서는 양식장부터 급속동결까지의 이력 추적성과 FDA/BAP 규정 준수가 필수적입니다. Thunder Mark Vietnam은 미국 통관 검역 기준을 매번 완벽히 충족하며, 호치민 무역팀의 전담 콜드체인 모니터링을 통해 롱비치 항만 입항까지 투명한 가시성을 제공합니다.',
    entityTagged: 'Thunder Mark Vietnam Co., Ltd',
    verifiedSince: '2021',
  },
];

interface TestimonialsSectionProps {
  lang: Language;
  onOpenInquiry: (initialSubject?: string) => void;
}

export const TestimonialsSection: React.FC<TestimonialsSectionProps> = ({
  lang,
  onOpenInquiry,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Auto-rotating timer every 7 seconds, pauses on user interaction
  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % TESTIMONIALS.length);
    }, 7000);
    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const handlePrev = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  };

  const handleNext = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => (prev + 1) % TESTIMONIALS.length);
  };

  const handleSelect = (idx: number) => {
    setIsAutoPlaying(false);
    setCurrentIndex(idx);
  };

  const active = TESTIMONIALS[currentIndex];

  return (
    <section
      className="py-24 bg-[#faf8f2] text-slate-900 relative overflow-hidden border-b border-slate-200/80"
      onMouseEnter={() => setIsAutoPlaying(false)}
      onMouseLeave={() => setIsAutoPlaying(true)}
    >
      {/* Decorative ambient watermark emblem */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/4 pointer-events-none opacity-[0.03] select-none text-slate-900">
        <Quote className="w-[500px] h-[500px]" />
      </div>

      <div className="max-w-6xl mx-auto px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-[#c5a059]/30 text-xs font-mono uppercase tracking-[0.2em] text-[#b08a3e] font-semibold mb-3 shadow-xs">
              <Award className="w-3.5 h-3.5 text-[#c5a059]" />
              <span>{lang === 'en' ? 'GLOBAL PARTNERSHIP TRACK RECORD' : '글로벌 고객사 신뢰 & 추천사'}</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 tracking-[-0.025em]">
              {lang === 'en' ? 'Client Testimonials & Trade Endorsements' : '글로벌 무역 파트너 추천사'}
            </h2>
            <p className="text-slate-600 text-sm sm:text-base mt-2 max-w-2xl font-normal leading-relaxed">
              {lang === 'en'
                ? 'Direct perspectives from industrial buyers, utility conglomerates, and institutional distributors who rely on Kidrill Group’s cross-border supply chains.'
                : '키드릴 그룹의 원자재 및 농수산물 직공급 체계를 지속적으로 이용 중인 아시아, 유럽, 북미 주요 전력사 및 유통 파트너사의 평가입니다.'}
            </p>
          </div>

          {/* Navigation Controls */}
          <div className="flex items-center gap-3">
            <button
              onClick={handlePrev}
              aria-label="Previous testimonial"
              className="w-11 h-11 rounded-full bg-white hover:bg-slate-50 border border-slate-200 hover:border-slate-300 text-slate-700 flex items-center justify-center transition-all cursor-pointer shadow-xs active:scale-95"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <span className="text-xs font-mono text-slate-500 font-semibold select-none px-1">
              0{currentIndex + 1} / 0{TESTIMONIALS.length}
            </span>
            <button
              onClick={handleNext}
              aria-label="Next testimonial"
              className="w-11 h-11 rounded-full bg-white hover:bg-slate-50 border border-slate-200 hover:border-slate-300 text-slate-700 flex items-center justify-center transition-all cursor-pointer shadow-xs active:scale-95"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Featured Testimonial Hero Card */}
        <div className="bg-white rounded-3xl border border-slate-200/90 p-8 sm:p-12 lg:p-14 shadow-sm relative transition-all duration-300">
          {/* Top Metadata Badges */}
          <div className="flex flex-wrap items-center justify-between gap-4 pb-8 border-b border-slate-100">
            <div className="flex flex-wrap items-center gap-3">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-[#0f172a] text-white text-xs font-mono font-semibold tracking-wider uppercase">
                <Building className="w-3.5 h-3.5 text-[#c5a059]" />
                {active.entityTagged}
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-[#fbf9f4] border border-[#c5a059]/30 text-xs font-mono text-slate-800 font-medium">
                <ShieldCheck className="w-3.5 h-3.5 text-[#c5a059]" />
                {lang === 'en' ? `Partner Since ${active.verifiedSince}` : `${active.verifiedSince}년부터 파트너십 유지`}
              </span>
            </div>

            <div className="flex items-center gap-2 text-xs font-mono text-slate-500">
              <Globe2 className="w-3.5 h-3.5 text-slate-400" />
              <span>{lang === 'en' ? active.locationEn : active.locationKo}</span>
            </div>
          </div>

          {/* Testimonial Quote Body */}
          <div className="py-8 sm:py-10">
            <Quote className="w-10 h-10 text-[#c5a059] mb-4 opacity-80" />
            <blockquote className="text-xl sm:text-2xl lg:text-3xl font-normal text-slate-900 leading-snug sm:leading-relaxed font-sans">
              "{lang === 'en' ? active.quoteEn : active.quoteKo}"
            </blockquote>
          </div>

          {/* Author Details & Verified Performance Metrics */}
          <div className="pt-8 border-t border-slate-100 flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-2xl bg-[#0f172a] text-[#c5a059] flex items-center justify-center text-lg font-bold font-mono shadow-xs shrink-0 border border-slate-700">
                {active.partnerName.split(' ').map((n) => n[0]).slice(0, 2).join('')}
              </div>
              <div>
                <h4 className="text-base sm:text-lg font-bold text-slate-900 leading-tight">
                  {active.partnerName}
                </h4>
                <p className="text-xs sm:text-sm text-slate-600 font-medium mt-0.5">
                  {lang === 'en' ? active.roleEn : active.roleKo}
                </p>
                <p className="text-xs font-mono text-[#b08a3e] font-semibold mt-0.5">
                  {lang === 'en' ? active.companyEn : active.companyKo}
                </p>
              </div>
            </div>

            {/* Trade Commodity & Volume Pill Block */}
            <div className="bg-[#fbf9f4] border border-[#c5a059]/30 rounded-2xl p-4 flex flex-col sm:flex-row sm:items-center gap-4 text-xs font-mono">
              <div className="space-y-0.5">
                <span className="text-[10px] uppercase text-slate-600 block">
                  {lang === 'en' ? 'Commodity Portfolio' : '주요 취급 품목'}
                </span>
                <span className="font-bold text-slate-900">
                  {lang === 'en' ? active.tradeTypeEn : active.tradeTypeKo}
                </span>
              </div>
              <div className="hidden sm:block w-px h-8 bg-slate-200" />
              <div className="space-y-0.5">
                <span className="text-[10px] uppercase text-slate-600 block">
                  {lang === 'en' ? 'Verified Throughput' : '공급 실적'}
                </span>
                <span className="font-bold text-[#b08a3e]">
                  {lang === 'en' ? active.volumeMetricEn : active.volumeMetricKo}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Carousel Indicator Thumbnails */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 mt-6">
          {TESTIMONIALS.map((item, idx) => {
            const isSelected = idx === currentIndex;
            return (
              <button
                key={item.id}
                onClick={() => handleSelect(idx)}
                className={`p-4 rounded-xl text-left border transition-all cursor-pointer ${
                  isSelected
                    ? 'bg-white border-[#c5a059] shadow-xs ring-1 ring-[#c5a059]'
                    : 'bg-white/60 hover:bg-white border-slate-200/80 hover:border-slate-300'
                }`}
              >
                <div className="flex items-center justify-between text-[11px] font-mono text-slate-600 mb-1">
                  <span>0{idx + 1}</span>
                  <span className={`w-2 h-2 rounded-full ${isSelected ? 'bg-[#c5a059]' : 'bg-slate-300'}`} />
                </div>
                <div className="font-bold text-slate-900 text-xs truncate">
                  {item.partnerName}
                </div>
                <div className="text-[11px] text-slate-600 truncate mt-0.5">
                  {lang === 'en' ? item.companyEn : item.companyKo}
                </div>
              </button>
            );
          })}
        </div>

        {/* Trust Bottom Banner */}
        <div className="mt-12 flex flex-col sm:flex-row items-center justify-between gap-4 p-5 rounded-2xl bg-white border border-slate-200 text-xs font-mono">
          <div className="flex items-center gap-3 text-slate-600">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span>
              {lang === 'en'
                ? 'All testimonials represent verifiable enterprise trading relationships and executed B2B bills of lading.'
                : '모든 추천사는 실제 정기 선적 계약 및 선하증권(B/L)이 발급된 기업 파트너십을 기반으로 작성되었습니다.'}
            </span>
          </div>

          <button
            onClick={() => onOpenInquiry('Commercial Reference Verification')}
            className="shrink-0 inline-flex items-center gap-1.5 text-[#b08a3e] hover:text-slate-900 font-semibold cursor-pointer transition-colors"
          >
            <span>{lang === 'en' ? 'Request Trade References' : '레퍼런스 확인 요청'}</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-[#b08a3e]" />
          </button>
        </div>
      </div>
    </section>
  );
};
