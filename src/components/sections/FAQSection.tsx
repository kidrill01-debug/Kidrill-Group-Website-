import React, { useState } from 'react';
import { Language } from '../../types';
import {
  ChevronDown,
  HelpCircle,
  FileCheck2,
  Ship,
  Coins,
  ShieldCheck,
  Building2,
  ArrowRight,
  Sparkles,
} from 'lucide-react';

interface FAQItem {
  id: string;
  category: 'trade' | 'minerals' | 'agriculture' | 'logistics' | 'compliance';
  categoryLabel: { en: string; ko: string };
  question: { en: string; ko: string };
  answer: { en: string; ko: string };
  keyHighlights?: { en: string; ko: string }[];
}

const FAQ_ITEMS: FAQItem[] = [
  {
    id: 'contract-structures',
    category: 'trade',
    categoryLabel: { en: 'Commercial Terms', ko: '거래 조건' },
    question: {
      en: 'What contract structures and international payment terms does Kidrill Group accept?',
      ko: '키드릴 그룹은 어떤 계약 구조와 국제 결제 조건을 지원하나요?',
    },
    answer: {
      en: 'We structure commercial agreements in full alignment with Incoterms 2020 (principally FOB, CIF, CFR, and EXW for selective regional contracts). Payment instruments accepted for new and institutional buyers include Irrevocable Confirmed Letters of Credit (DLC / SBLC from top-tier international prime banks), standard T/T with milestone escrow, and bespoke structured trade financing for long-term annual supply contracts.',
      ko: '당사는 Incoterms 2020 기준(주로 FOB, CIF, CFR 및 일부 지역 계약용 EXW)에 맞춰 상업 계약을 체결합니다. 신규 및 기관 바이어의 경우 글로벌 1급 은행의 취소불능 확인신용장(DLC/SBLC), 마일스톤 에스크로 T/T, 연간 장기 공급 계약을 위한 구조화 무역 금융 등을 지원합니다.',
    },
    keyHighlights: [
      { en: 'Incoterms: FOB, CIF, CFR, EXW', ko: '인코텀즈: FOB, CIF, CFR, EXW' },
      { en: 'Payment: Irrevocable DLC / SBLC, T/T Escrow', ko: '결제 조건: 취소불능 신용장(DLC/SBLC), 에스크로 T/T' },
    ],
  },
  {
    id: 'inspection-verification',
    category: 'compliance',
    categoryLabel: { en: 'Inspection & Quality', ko: '검수 & 품질 인증' },
    question: {
      en: 'How are commodity grade specifications and cargo quality verified prior to shipment?',
      ko: '선적 전 원자재 등급 및 화물 품질은 어떻게 검증되나요?',
    },
    answer: {
      en: 'Every bulk shipment and containerized cargo undergoes mandatory pre-shipment inspection executed by accredited independent surveyors (including SGS, Surveyor Indonesia, Carsurin, Intertek, or Cotecna depending on origin and commodity). Certificates of Sampling and Analysis (COA), Draft Survey Reports, and Phytosanitary / Health certificates are issued and counter-verified prior to cargo release and bill of lading issuance.',
      ko: '모든 벌크선 선적 및 컨테이너 화물은 선적 전 공인 독립 검사 기관(원산지 및 품목에 따라 SGS, Surveyor Indonesia, Carsurin, Intertek, Cotecna 등)의 필수 검사를 거칩니다. 화물 릴리스 및 선하증권(B/L) 발행 전 품질분석증명서(COA), Draft Survey 리포트, 식물위생 및 위생증명서가 발급 및 상호 대조됩니다.',
    },
    keyHighlights: [
      { en: 'Independent Surveyors: SGS, Carsurin, Intertek', ko: '공인 검사원: SGS, Carsurin, Intertek 등' },
      { en: 'Complete Certificate of Analysis (COA) per batch', ko: '로트별 공인 품질분석성적서(COA) 완비' },
    ],
  },
  {
    id: 'operating-entities',
    category: 'compliance',
    categoryLabel: { en: 'Corporate Structure', ko: '기업 지배구조' },
    question: {
      en: 'Which operating entities execute contracts for minerals versus agricultural/seafood products?',
      ko: '광물 자원과 농수산물 품목은 각각 어느 계열사 법인을 통해 계약이 체결되나요?',
    },
    answer: {
      en: 'Kidrill Group operates two specialized flagship legal entities for maximum regulatory clarity and direct local concessions: PT PMA Kidrill Metal Mining (headquartered in Surabaya, Indonesia) manages mineral commodities including steam coal, copper cathode, and metals; while Thunder Mark Vietnam Co., Ltd (Ho Chi Minh City, Vietnam) executes contracts for agricultural commodities (Jasmine rice, Robusta coffee, spices) and frozen seafood (Black Tiger shrimp, Pangasius).',
      ko: '키드릴 그룹은 명확한 인허가 규정 준수와 현지 조달망을 위해 두 개의 특화 법인을 운영합니다. 광물 및 금속(발전용 유연탄, 전기동 등)은 인도네시아 수라바야 소재 PT PMA Kidrill Metal Mining이 전담하며, 농산물(자스민 쌀, 로부스타 커피, 향신료)과 냉동 수산물(블랙타이거 새우, 팡가시우스 등)은 베트남 호치민 소재 Thunder Mark Vietnam Co., Ltd가 직접 계약 및 선적을 진행합니다.',
    },
  },
  {
    id: 'moq-and-leadtime',
    category: 'trade',
    categoryLabel: { en: 'Order Volumes & MOQ', ko: '최소 주문 수량(MOQ)' },
    question: {
      en: 'What are the minimum order quantities (MOQ) and standard delivery lead times?',
      ko: '최소 주문 수량(MOQ)과 표준 선적 리드타임은 어떻게 되나요?',
    },
    answer: {
      en: 'MOQs are tailored to commodity characteristics: mineral bulk shipments typically require Supramax or Handymax parcels (25,000 to 50,000 MT per vessel voyage), while containerized copper and metals begin from 1 to 5 FCLs (25–125 MT). Agricultural and seafood exports start at 1 x 20ft or 40ft Reefer/Dry Container (18–26 MT). Standard dispatch lead time ranges from 14 to 30 days post-operative LC confirmation, contingent upon vessel booking schedules.',
      ko: 'MOQ는 품목 특성에 최적화되어 있습니다. 벌크 광물(석탄 등)은 수프라맥스 또는 핸디맥스 선박 단위(항차당 25,000 ~ 50,000 MT), 컨테이너 금속류는 1~5 FCL(25~125 MT)부터 시작합니다. 농산물 및 냉동 수산물은 1 x 20ft / 40ft 리퍼 또는 드라이 컨테이너(18~26 MT)부터 가능합니다. 표준 선적 준비 기간은 신용장 오픈 및 계약 확정 후 14~30일 이내입니다.',
    },
  },
  {
    id: 'on-site-audit',
    category: 'logistics',
    categoryLabel: { en: 'Site Visits & Due Diligence', ko: '현장 실사 & 미팅' },
    question: {
      en: 'Can prospective buyers conduct on-site yard inspections, processing audits, or factory visits?',
      ko: '잠재 바이어가 직접 광구 야드나 가공 공장, 패킹 플랜트를 방문 실사할 수 있나요?',
    },
    answer: {
      en: 'Yes. We welcome credentialed institutional buyers and trading partners for physical due diligence. Site inspections to stockpile loading jetties in Kalimantan/Sumatra or agricultural processing mills and HACCP/BRC-certified seafood facilities in the Mekong Delta can be scheduled upon execution of an NCNDA and preliminary corporate verification through our trade desk.',
      ko: '물론 가능합니다. 당사는 진성 바이어 및 글로벌 파트너사의 현장 실사(Due Diligence)를 적극 환영합니다. NCNDA(비밀유지협약) 체결 및 기본 신용 절차 후 인도네시아 칼리만탄/수마트라 석탄 선적 제티 또는 베트남 메콩델타 소재 HACCP/BRC 인증 수산물·농산물 가공 플랜트 현장 방문을 정식 조율해 드립니다.',
    },
  },
  {
    id: 'sustainability-traceability',
    category: 'compliance',
    categoryLabel: { en: 'ESG & Traceability', ko: '지속가능성 & 이력추적' },
    question: {
      en: 'How does Kidrill Group ensure legal concessions and sustainable supply chain traceability?',
      ko: '키드릴 그룹은 적법한 채굴권 및 지속가능한 공급망 이력 추적을 어떻게 보증하나요?',
    },
    answer: {
      en: 'All mining resources are procured strictly from certified concessionaires holding verified IUP-OP (Mining Operations & Production Licenses) and clean-and-clear ESDM clearances in Indonesia. For agri-food and marine products, we enforce strict farm-to-port chain of custody audits, anti-IUU fishing standards, and ethical labor standards adhering strictly to international buyer regulatory compliance in the EU, US, and East Asian markets.',
      ko: '인도네시아의 모든 광물 자원은 ESDM 인허가 및 공식 IUP-OP(생산·운영 광업권)를 보유한 합법 광구에서만 직접 조달됩니다. 농수산물의 경우 EU, 미국, 동아시아 등 선진 시장 규격에 부합하도록 IUU(불법·비보고·비규제) 어업 방지, 농장-항만 공급망 추적성 및 윤리적 노동 기준을 철저히 준수합니다.',
    },
  },
];

interface FAQSectionProps {
  lang: Language;
  onOpenInquiry: (topic?: string) => void;
}

export const FAQSection: React.FC<FAQSectionProps> = ({ lang, onOpenInquiry }) => {
  const [openIds, setOpenIds] = useState<string[]>(['contract-structures', 'operating-entities']);
  const [selectedFilter, setSelectedFilter] = useState<'all' | 'trade' | 'compliance' | 'logistics'>('all');

  const toggleAccordion = (id: string) => {
    setOpenIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const filteredItems = selectedFilter === 'all'
    ? FAQ_ITEMS
    : FAQ_ITEMS.filter((item) => item.category === selectedFilter || (selectedFilter === 'trade' && (item.category === 'trade' || item.category === 'minerals' || item.category === 'agriculture')));

  return (
    <section className="py-24 bg-white text-slate-900">
      <div className="max-w-5xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-50 border border-[#c5a059]/30 text-xs font-mono uppercase tracking-[0.2em] text-[#b08a3e] font-semibold mb-4">
            <HelpCircle className="w-3.5 h-3.5 text-[#c5a059]" />
            <span>{lang === 'en' ? 'CLIENT ONBOARDING & TRADE DESK' : '신규 바이어 안내 & FAQ'}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 tracking-[-0.025em] mb-4">
            {lang === 'en' ? 'Frequently Asked Questions' : '자주 묻는 질문 (FAQ)'}
          </h2>

          <p className="text-slate-600 text-base sm:text-lg leading-relaxed font-normal">
            {lang === 'en'
              ? 'Essential commercial guidelines, Incoterms, pre-shipment surveyor protocols, and contract execution standards for institutional buyers and global trade partners.'
              : '국제 신규 바이어 및 무역 파트너사를 위한 결제 조건, 인코텀즈, 공인 선적 전 검수 절차 및 계열사별 계약 실행 가이드라인입니다.'}
          </p>

          {/* Quick Category Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-8">
            <button
              onClick={() => setSelectedFilter('all')}
              className={`px-4 py-1.5 rounded-full text-xs font-mono tracking-wider transition-colors cursor-pointer border ${
                selectedFilter === 'all'
                  ? 'bg-[#0f172a] text-white border-[#0f172a] font-semibold shadow-xs'
                  : 'bg-white text-slate-600 border-slate-200 hover:border-slate-300'
              }`}
            >
              {lang === 'en' ? 'All Inquiries (6)' : '전체 보기 (6)'}
            </button>
            <button
              onClick={() => setSelectedFilter('trade')}
              className={`px-4 py-1.5 rounded-full text-xs font-mono tracking-wider transition-colors cursor-pointer border ${
                selectedFilter === 'trade'
                  ? 'bg-[#0f172a] text-white border-[#0f172a] font-semibold shadow-xs'
                  : 'bg-white text-slate-600 border-slate-200 hover:border-slate-300'
              }`}
            >
              {lang === 'en' ? 'Commercial & Terms' : '거래 & 결제 조건'}
            </button>
            <button
              onClick={() => setSelectedFilter('compliance')}
              className={`px-4 py-1.5 rounded-full text-xs font-mono tracking-wider transition-colors cursor-pointer border ${
                selectedFilter === 'compliance'
                  ? 'bg-[#0f172a] text-white border-[#0f172a] font-semibold shadow-xs'
                  : 'bg-white text-slate-600 border-slate-200 hover:border-slate-300'
              }`}
            >
              {lang === 'en' ? 'Quality & Inspection' : '품질 & 검수 인증'}
            </button>
            <button
              onClick={() => setSelectedFilter('logistics')}
              className={`px-4 py-1.5 rounded-full text-xs font-mono tracking-wider transition-colors cursor-pointer border ${
                selectedFilter === 'logistics'
                  ? 'bg-[#0f172a] text-white border-[#0f172a] font-semibold shadow-xs'
                  : 'bg-white text-slate-600 border-slate-200 hover:border-slate-300'
              }`}
            >
              {lang === 'en' ? 'Site Visits & Logistics' : '현장 실사 & 물류'}
            </button>
          </div>
        </div>

        {/* Accordion List Container */}
        <div className="space-y-4">
          {filteredItems.map((item, index) => {
            const isOpen = openIds.includes(item.id);

            return (
              <div
                key={item.id}
                className={`rounded-2xl border transition-all duration-200 overflow-hidden bg-white ${
                  isOpen
                    ? 'border-[#c5a059]/60 shadow-sm ring-1 ring-[#c5a059]/20'
                    : 'border-slate-200 hover:border-slate-300 shadow-xs'
                }`}
              >
                {/* Accordion Question Trigger Header */}
                <button
                  onClick={() => toggleAccordion(item.id)}
                  aria-expanded={isOpen}
                  className="w-full p-6 sm:p-7 text-left flex items-start justify-between gap-4 cursor-pointer select-none group"
                >
                  <div className="space-y-1.5 pr-2">
                    <div className="flex items-center gap-2">
                      <span className="text-[11px] font-mono uppercase tracking-wider text-[#b08a3e] font-semibold px-2 py-0.5 rounded bg-slate-50 border border-slate-200">
                        {lang === 'en' ? item.categoryLabel.en : item.categoryLabel.ko}
                      </span>
                      <span className="text-xs font-mono text-slate-400">
                        0{index + 1}
                      </span>
                    </div>

                    <h3 className="text-base sm:text-lg font-bold text-slate-900 group-hover:text-[#996515] transition-colors leading-snug">
                      {lang === 'en' ? item.question.en : item.question.ko}
                    </h3>
                  </div>

                  <div
                    className={`shrink-0 w-8 h-8 rounded-full flex items-center justify-center border transition-all duration-200 mt-0.5 ${
                      isOpen
                        ? 'bg-[#c5a059] border-[#c5a059] text-white rotate-180 shadow-xs'
                        : 'bg-slate-50 border-slate-200 text-slate-500 group-hover:bg-slate-100 group-hover:text-slate-800'
                    }`}
                  >
                    <ChevronDown className="w-4 h-4 transition-transform duration-200" />
                  </div>
                </button>

                {/* Collapsible Content Area */}
                {isOpen && (
                  <div className="px-6 pb-6 sm:px-7 sm:pb-7 pt-0 border-t border-slate-100 mt-1">
                    <div className="pt-4 text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
                      {lang === 'en' ? item.answer.en : item.answer.ko}
                    </div>

                    {/* Key Highlights Pill Row if present */}
                    {item.keyHighlights && item.keyHighlights.length > 0 && (
                      <div className="mt-4 pt-4 border-t border-slate-100 flex flex-wrap gap-2.5">
                        {item.keyHighlights.map((hl, i) => (
                          <div
                            key={i}
                            className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-slate-50 border border-[#c5a059]/30 text-xs font-mono text-slate-800"
                          >
                            <span className="w-1.5 h-1.5 rounded-full bg-[#c5a059]" />
                            <span>{lang === 'en' ? hl.en : hl.ko}</span>
                          </div>
                        ))}
                      </div>
                    )}

                    {/* Contextual Action Link */}
                    <div className="mt-5 flex items-center justify-between text-xs font-mono pt-3 border-t border-slate-100">
                      <span className="text-slate-400">
                        {lang === 'en' ? 'Need customized contract clauses?' : '맞춤형 계약 조항 협의가 필요하신가요?'}
                      </span>
                      <button
                        onClick={() => onOpenInquiry(`FAQ Inquiry: ${lang === 'en' ? item.question.en : item.question.ko}`)}
                        className="inline-flex items-center gap-1 text-[#b08a3e] hover:text-[#996515] font-semibold cursor-pointer transition-colors"
                      >
                        <span>{lang === 'en' ? 'Ask Trade Desk' : '무역 데스크 문의'}</span>
                        <ArrowRight className="w-3 h-3" />
                      </button>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Bottom Help Desk Card */}
        <div className="mt-12 p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-slate-900 to-[#1e293b] text-white flex flex-col sm:flex-row items-center justify-between gap-6 shadow-md border border-slate-800">
          <div className="space-y-1 text-center sm:text-left">
            <div className="flex items-center justify-center sm:justify-start gap-2 text-xs font-mono uppercase tracking-wider text-[#c5a059]">
              <Sparkles className="w-3.5 h-3.5" />
              <span>{lang === 'en' ? 'Have Specific Commodity Specifications?' : '원하시는 구체적인 스펙이 있으신가요?'}</span>
            </div>
            <h4 className="text-lg sm:text-xl font-bold text-white">
              {lang === 'en'
                ? 'Request a Tailored Commodity Offer & Spec Sheet'
                : '맞춤형 원자재 사양서 및 견적 요청'}
            </h4>
            <p className="text-slate-300 text-xs sm:text-sm font-normal">
              {lang === 'en'
                ? 'Our multilingual trade desk responds within 24 business hours with certified COA and pricing indications.'
                : '한국어 및 영어 무역 데스크가 24시간 이내에 공인 COA 및 견적 안내서를 신속히 회신해 드립니다.'}
            </p>
          </div>

          <button
            onClick={() => onOpenInquiry('General Trade Desk Inquiries')}
            className="shrink-0 py-3 px-6 rounded-lg bg-[#c5a059] hover:bg-[#d6b26c] text-black text-xs font-semibold uppercase tracking-wider transition-colors cursor-pointer shadow-xs whitespace-nowrap"
          >
            {lang === 'en' ? 'Connect With Trade Desk' : '무역 데스크 1:1 상담'}
          </button>
        </div>
      </div>
    </section>
  );
};
