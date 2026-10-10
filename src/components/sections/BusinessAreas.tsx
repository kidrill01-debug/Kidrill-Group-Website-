import React, { useState, useRef, useCallback } from 'react';
import { Language, PageId } from '../../types';
import { translations } from '../../translations';
import { ArrowUpRight, CheckCircle2 } from 'lucide-react';

interface BusinessAreasProps {
  lang: Language;
  onNavigate: (page: PageId) => void;
  onOpenInquiry: (category?: string) => void;
}

interface TiltState {
  rotateX: number;
  rotateY: number;
  glareX: number;
  glareY: number;
  isHovered: boolean;
}

interface TiltCardProps {
  children: React.ReactNode;
  className?: string;
}

const TiltCard: React.FC<TiltCardProps> = ({ children, className = '' }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [tilt, setTilt] = useState<TiltState>({
    rotateX: 0,
    rotateY: 0,
    glareX: 50,
    glareY: 50,
    isHovered: false,
  });

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const width = rect.width;
    const height = rect.height;

    const normX = (x / width) * 2 - 1;
    const normY = (y / height) * 2 - 1;

    // Subtle, architectural tilt angles (max 4.5 degrees)
    const maxTilt = 4.5;
    const rotateY = normX * maxTilt;
    const rotateX = -normY * maxTilt;

    const glareX = (x / width) * 100;
    const glareY = (y / height) * 100;

    setTilt({
      rotateX,
      rotateY,
      glareX,
      glareY,
      isHovered: true,
    });
  }, []);

  const handleMouseEnter = () => {
    setTilt((prev) => ({ ...prev, isHovered: true }));
  };

  const handleMouseLeave = () => {
    setTilt({
      rotateX: 0,
      rotateY: 0,
      glareX: 50,
      glareY: 50,
      isHovered: false,
    });
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="perspective-[1200px]"
      style={{ perspective: 1200 }}
    >
      <div
        className={`relative transition-transform duration-300 ease-out will-change-transform ${className}`}
        style={{
          transform: tilt.isHovered
            ? `rotateX(${tilt.rotateX}deg) rotateY(${tilt.rotateY}deg) scale3d(1.015, 1.015, 1.015)`
            : 'rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)',
          transformStyle: 'preserve-3d',
          transition: tilt.isHovered
            ? 'transform 0.12s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.3s ease'
            : 'transform 0.5s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.5s ease',
          boxShadow: tilt.isHovered
            ? '0 20px 35px -8px rgba(0, 0, 0, 0.12), 0 0 15px 1px rgba(197, 160, 89, 0.25)'
            : '0 4px 15px -3px rgba(0, 0, 0, 0.05)',
        }}
      >
        {/* Dynamic Specular Glare Sheen Overlay for Light Theme */}
        <div
          className="pointer-events-none absolute inset-0 z-30 rounded-2xl transition-opacity duration-300"
          style={{
            opacity: tilt.isHovered ? 0.7 : 0,
            background: `radial-gradient(circle 380px at ${tilt.glareX}% ${tilt.glareY}%, rgba(255, 255, 255, 0.5), rgba(197, 160, 89, 0.1) 40%, transparent 80%)`,
          }}
        />

        {children}
      </div>
    </div>
  );
};

export const BusinessAreas: React.FC<BusinessAreasProps> = ({
  lang,
  onNavigate,
  onOpenInquiry,
}) => {
  const t = translations[lang];

  const cards = [
    {
      id: 'minerals-metals',
      page: 'minerals-metals' as PageId,
      number: '01',
      title: t.businessAreas.area1Title,
      description: t.businessAreas.area1Desc,
      items: t.businessAreas.area1Items,
      image: '/src/assets/images/business_minerals_metals_1791535377169.jpg',
      entity: 'PT PMA Kidrill Metal Mining (Surabaya)',
      entityKo: 'PT PMA Kidrill Metal Mining (인도네시아 수라바야)',
    },
    {
      id: 'food-agriculture',
      page: 'food-agriculture' as PageId,
      number: '02',
      title: t.businessAreas.area2Title,
      description: t.businessAreas.area2Desc,
      items: t.businessAreas.area2Items,
      image: '/src/assets/images/business_food_agriculture_1791535388182.jpg',
      entity: 'Thunder Mark Vietnam Co., Ltd (Ho Chi Minh City)',
      entityKo: 'Thunder Mark Vietnam Co., Ltd (베트남 호치민)',
    },
    {
      id: 'seafood',
      page: 'seafood' as PageId,
      number: '03',
      title: t.businessAreas.area3Title,
      description: t.businessAreas.area3Desc,
      items: t.businessAreas.area3Items,
      image: '/src/assets/images/business_vietnam_seafood_1791535400724.jpg',
      entity: 'Thunder Mark Vietnam Co., Ltd (Ho Chi Minh City)',
      entityKo: 'Thunder Mark Vietnam Co., Ltd (베트남 호치민)',
    },
    {
      id: 'international-trading',
      page: 'markets' as PageId,
      number: '04',
      title: t.businessAreas.area4Title,
      description: t.businessAreas.area4Desc,
      items: t.businessAreas.area4Items,
      image: '/src/assets/images/corporate_trading_architecture_1791535412184.jpg',
      entity: 'Kidrill Group Cross-Border Network',
      entityKo: '키드릴 그룹 글로벌 무역 네트워크',
    },
  ];

  return (
    <section className="py-28 bg-[#fdfcf8] text-slate-900">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-20">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2.5 text-xs font-mono tracking-[0.25em] text-[#b08a3e] uppercase mb-4">
              <span className="w-2 h-2 rounded-full bg-[#c5a059]" />
              <span className="font-semibold">{t.businessAreas.tag}</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-[-0.025em] text-slate-900">
              {t.businessAreas.title}
            </h2>
          </div>

          <p className="text-slate-600 text-base max-w-md font-normal leading-relaxed">
            {t.businessAreas.description}
          </p>
        </div>

        {/* 4 Large Editorial Cards with Light Theme & 3D Tilt */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {cards.map((card) => (
            <TiltCard
              key={card.id}
              className="group bg-white border border-slate-200 rounded-2xl overflow-hidden hover:border-[#c5a059]/70 transition-colors flex flex-col justify-between"
            >
              {/* Image Container with Editorial Scrim */}
              <div className="relative aspect-[16/9] w-full overflow-hidden bg-slate-100">
                <img
                  src={card.image}
                  alt={card.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />

                {/* Editorial Number */}
                <div className="absolute top-5 left-6" style={{ transform: 'translateZ(20px)' }}>
                  <span className="text-2xl font-mono font-light text-white drop-shadow">
                    {card.number}
                  </span>
                </div>

                {/* Operating Entity Tag */}
                <div className="absolute top-5 right-6" style={{ transform: 'translateZ(24px)' }}>
                  <span className="text-[11px] font-mono tracking-wider text-slate-100 bg-black/65 backdrop-blur-md px-3 py-1 rounded-full border border-white/20 shadow-xs">
                    {lang === 'en' ? card.entity : card.entityKo}
                  </span>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-8 flex-1 flex flex-col justify-between">
                <div>
                  <h3
                    className="text-2xl font-medium text-slate-900 mb-3 group-hover:text-[#b08a3e] transition-colors"
                    style={{ transform: 'translateZ(18px)' }}
                  >
                    {card.title}
                  </h3>

                  <p className="text-slate-600 text-sm leading-relaxed mb-6 font-light">
                    {card.description}
                  </p>

                  {/* Bullet Commodities */}
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 mb-8">
                    {card.items.map((item, idx) => (
                      <li
                        key={idx}
                        className="text-xs text-slate-700 flex items-center gap-2"
                      >
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#b08a3e] shrink-0" />
                        <span className="truncate">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Card Actions */}
                <div className="pt-6 border-t border-slate-100 flex items-center justify-between">
                  <button
                    onClick={() => onNavigate(card.page)}
                    className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-[0.16em] text-slate-900 hover:text-[#b08a3e] transition-colors cursor-pointer font-semibold"
                  >
                    <span>{t.businessAreas.learnMore}</span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-[#b08a3e]" />
                  </button>

                  <button
                    onClick={() => onOpenInquiry(card.title)}
                    className="text-xs text-slate-500 hover:text-slate-900 transition-colors underline underline-offset-4 cursor-pointer"
                  >
                    {lang === 'en' ? 'Request Commodity Quote' : '견적 및 상담 요청'}
                  </button>
                </div>
              </div>
            </TiltCard>
          ))}
        </div>
      </div>
    </section>
  );
};
