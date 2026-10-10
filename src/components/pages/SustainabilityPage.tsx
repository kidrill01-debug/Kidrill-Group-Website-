import React from 'react';
import { Language, PageId } from '../../types';
import { translations } from '../../translations';
import { Leaf, CheckCircle2, ArrowUpRight } from 'lucide-react';

interface SustainabilityPageProps {
  lang: Language;
  onNavigate: (page: PageId) => void;
  onOpenInquiry: () => void;
}

export const SustainabilityPage: React.FC<SustainabilityPageProps> = ({
  lang,
  onOpenInquiry,
}) => {
  const t = translations[lang];

  return (
    <div className="pt-32 pb-28 bg-[#fdfcf8] text-slate-900">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <div className="flex items-center gap-2.5 text-xs font-mono tracking-[0.25em] text-[#b08a3e] uppercase mb-4">
            <Leaf className="w-3.5 h-3.5" />
            <span className="font-semibold">{t.sustainability.tag}</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-[-0.03em] text-slate-900 mb-6">
            {t.sustainability.title}
          </h1>

          <p className="text-slate-600 text-lg leading-relaxed font-normal">
            {t.sustainability.intro}
          </p>
        </div>

        {/* Commitment Matrix (5 pillars) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {t.sustainability.commitments.map((item, idx) => (
            <div
              key={idx}
              className="p-8 rounded-2xl bg-white border border-slate-200 hover:border-[#c5a059]/70 shadow-xs transition-colors flex flex-col justify-between"
            >
              <div>
                <span className="text-xs font-mono text-[#b08a3e] font-semibold block mb-3">0{idx + 1}</span>
                <h3 className="text-xl font-semibold text-slate-900 mb-3">{item.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed font-light">
                  {item.desc}
                </p>
              </div>

              <div className="pt-6 border-t border-slate-100 mt-6 flex items-center gap-2 text-xs font-mono text-slate-500 font-medium">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#b08a3e]" />
                <span>ACTIVE CORPORATE FOCUS</span>
              </div>
            </div>
          ))}
        </div>

        {/* Responsible Trade Governance Framework */}
        <div className="p-10 rounded-3xl bg-white border border-slate-200 shadow-xs relative overflow-hidden">
          <div className="max-w-2xl space-y-4">
            <span className="text-xs font-mono uppercase tracking-[0.2em] text-[#b08a3e] block font-semibold">
              DUE DILIGENCE & AUDITING
            </span>
            <h2 className="text-2xl sm:text-3xl font-light text-slate-900 tracking-tight">
              {lang === 'en'
                ? 'Structured Due Diligence Across Upstream Sourcing'
                : '산지 공급망 전반에 걸친 실사 및 책임 조달'}
            </h2>
            <p className="text-slate-700 text-sm sm:text-base leading-relaxed font-light">
              {t.sustainability.disclaimer}
            </p>
            <p className="text-slate-600 text-xs sm:text-sm font-light">
              {lang === 'en'
                ? 'We evaluate third-party laboratory assay certificates (such as SGS or CCIC upon request) to ensure contractual specification fidelity and encourage origin producers to uphold environmental and statutory labor compliance.'
                : '키드릴 그룹은 공인 독립 시험기관(SGS, CCIC 등)의 성분 및 품질 성적서를 요청 시 투명하게 제공하며, 원산지 협력사의 환경 및 노동 규정 준수를 적극 장려합니다.'}
            </p>

            <div className="pt-4">
              <button
                onClick={onOpenInquiry}
                className="py-3 px-6 rounded-lg bg-[#0f172a] hover:bg-slate-800 text-white text-xs font-semibold uppercase tracking-wider transition-colors inline-flex items-center gap-2 cursor-pointer shadow-xs"
              >
                <span>{lang === 'en' ? 'Request Sourcing Policy Brief' : '지속가능성 정책 문의'}</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-[#c5a059]" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
