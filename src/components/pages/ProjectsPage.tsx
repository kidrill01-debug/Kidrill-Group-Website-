import React from 'react';
import { Language, PageId } from '../../types';
import { translations } from '../../translations';
import { ArrowUpRight, Lock, Clock, Shield } from 'lucide-react';

interface ProjectsPageProps {
  lang: Language;
  onNavigate: (page: PageId) => void;
  onOpenInquiry: (projectType?: string) => void;
}

export const ProjectsPage: React.FC<ProjectsPageProps> = ({
  lang,
  onNavigate,
  onOpenInquiry,
}) => {
  const t = translations[lang];

  const projectCategories = [
    {
      id: 'proj-minerals',
      titleEn: 'Mineral Sourcing Projects',
      titleKo: '광물 자원 소싱 프로젝트',
      category: 'Minerals & Mining',
      entity: 'PT PMA Kidrill Metal Mining (Surabaya)',
      descEn: 'Concession-level mineral procurement structures connecting compliant Indonesian coal and copper output with verified international off-takers.',
      descKo: '인도네시아 현지 광산 채굴 물량과 글로벌 산업 실수요처 간의 체계적인 광물 장기 조달 프로젝트.',
    },
    {
      id: 'proj-commodities',
      titleEn: 'Commodity Trading Projects',
      titleKo: '원자재 트레이딩 프로젝트',
      category: 'Commodity Portfolios',
      entity: 'Kidrill Group International Trading Desk',
      descEn: 'Structured cross-border bulk trade operations with integrated documentary Letters of Credit, quality assay oversight, and marine logistics.',
      descKo: '국제 신용장 결제, 공인 품질 분석 및 해상 운송이 통합된 국경 간 대규모 원자재 트레이딩.',
    },
    {
      id: 'proj-export',
      titleEn: 'Export Projects',
      titleKo: '수출 연계 프로젝트',
      category: 'Agricultural & Food Sourcing',
      entity: 'Thunder Mark Vietnam Co., Ltd (HCMC)',
      descEn: 'Origin-level aggregation and standardized bulk packing of Vietnamese harvests for export into strict international regulatory jurisdictions.',
      descKo: '엄격한 수입국 규정을 준수하는 베트남산 농식품 및 커피 원두의 산지 집하 및 직수출 프로젝트.',
    },
    {
      id: 'proj-supply',
      titleEn: 'International Supply Projects',
      titleKo: '국제 대량 공급 프로젝트',
      category: 'Cold Chain & Seafood Logistics',
      entity: 'Thunder Mark Vietnam Co., Ltd (HCMC)',
      descEn: 'Scheduled reefer container shipments supplying institutional supermarket chains, wholesale distributors, and food processing complexes.',
      descKo: '글로벌 대형 유통망과 식품 가공 공장을 위한 정기 리퍼 컨테이너 해상 냉동 공급 프로젝트.',
    },
    {
      id: 'proj-strategic',
      titleEn: 'Strategic Partnerships',
      titleKo: '글로벌 전략 파트너십',
      category: 'Joint Commercial Ventures',
      entity: 'Kidrill Group Corporate Governance',
      descEn: 'Long-term bilateral commercial memorandums of understanding (MOUs) and offtake alliances between upstream producers and global traders.',
      descKo: '원자재 생산자와 글로벌 트레이더 간의 장기 상생 오프테이크 협약 및 전략적 업무 제휴.',
    },
  ];

  return (
    <div className="pt-32 pb-28 bg-[#fdfcf8] text-slate-900">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-2.5 text-xs font-mono tracking-[0.25em] text-[#b08a3e] uppercase mb-4">
            <Shield className="w-3.5 h-3.5" />
            <span className="font-semibold">{t.projects.tag}</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-[-0.03em] text-slate-900 mb-6">
            {t.projects.title}
          </h1>

          <p className="text-slate-600 text-base sm:text-lg leading-relaxed font-normal">
            {t.projects.subtitle}
          </p>
        </div>

        {/* Confidentiality Notice */}
        <div className="mb-14 p-6 sm:p-8 rounded-2xl bg-white border border-slate-200 shadow-xs flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div className="flex items-start gap-4">
            <div className="p-3 rounded-xl bg-slate-100 text-[#b08a3e] shrink-0 mt-0.5">
              <Lock className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-sm font-semibold text-slate-900 mb-1">
                {lang === 'en' ? 'B2B Proprietary Information Standard' : '기업 기밀 보호 원칙'}
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 font-light leading-relaxed max-w-2xl">
                {lang === 'en'
                  ? 'Kidrill Group does not publicly disclose individual buyer contracts, mine concessions, or private trade counterparty identities. Formal project data and offtake parameters are made available upon verified institutional inquiry.'
                  : '키드릴 그룹은 거래처의 영업 기밀 보호를 위해 구체적인 고객사명이나 개별 광산 계약 정보를 외부에 무단 공개하지 않습니다. 상세 프로젝트 정보는 NDA 체결 후 공식 제공됩니다.'}
              </p>
            </div>
          </div>

          <button
            onClick={() => onOpenInquiry('Project Information Request')}
            className="shrink-0 py-2.5 px-5 rounded-lg bg-[#0f172a] hover:bg-slate-800 text-white text-xs font-semibold uppercase tracking-wider transition-colors cursor-pointer shadow-xs"
          >
            {t.projects.requestProjectInfo}
          </button>
        </div>

        {/* 5 Large Visual Project Cards */}
        <div className="space-y-6">
          {projectCategories.map((proj, idx) => (
            <div
              key={proj.id}
              className="p-8 sm:p-10 rounded-2xl bg-white border border-slate-200 hover:border-[#c5a059]/70 shadow-xs transition-all duration-300"
            >
              <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-6 border-b border-slate-100">
                <div>
                  <div className="flex items-center gap-3 text-xs font-mono text-slate-500 mb-2">
                    <span className="text-[#b08a3e] font-semibold">0{idx + 1}</span>
                    <span>·</span>
                    <span className="uppercase tracking-wider font-semibold text-slate-700">{proj.category}</span>
                    <span>·</span>
                    <span className="text-slate-500">{proj.entity}</span>
                  </div>

                  <h3 className="text-2xl font-medium text-slate-900">
                    {lang === 'en' ? proj.titleEn : proj.titleKo}
                  </h3>
                </div>

                {/* Coming Soon Indicator Badge */}
                <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-slate-50 border border-slate-200 text-slate-700 text-xs font-mono shrink-0 font-medium">
                  <Clock className="w-3.5 h-3.5 text-[#b08a3e]" />
                  <span>PROJECT INFORMATION COMING SOON</span>
                </div>
              </div>

              <div className="pt-6 grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
                <div className="lg:col-span-8">
                  <p className="text-slate-600 text-sm leading-relaxed font-light">
                    {lang === 'en' ? proj.descEn : proj.descKo}
                  </p>
                  <p className="text-xs font-mono text-slate-400 mt-3">
                    {t.projects.placeholderDesc}
                  </p>
                </div>

                <div className="lg:col-span-4 flex justify-start lg:justify-end">
                  <button
                    onClick={() => onOpenInquiry(lang === 'en' ? proj.titleEn : proj.titleKo)}
                    className="py-2.5 px-5 rounded-lg bg-white hover:bg-slate-50 border border-slate-200 text-xs font-mono uppercase tracking-wider text-slate-900 transition-colors flex items-center gap-2 cursor-pointer shadow-xs font-semibold"
                  >
                    <span>{lang === 'en' ? 'Inquire Regarding Project Data' : '해당 프로젝트 문의'}</span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-[#b08a3e]" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
