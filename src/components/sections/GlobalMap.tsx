import React, { useState } from 'react';
import { Language } from '../../types';
import { translations } from '../../translations';
import { Globe, Anchor, ArrowUpRight, Compass, MapPin } from 'lucide-react';

interface GlobalMapProps {
  lang: Language;
  onNavigateToMarkets?: () => void;
  onSelectProductRequest?: (tradeSector: string) => void;
}

interface TradeNode {
  id: string;
  nameEn: string;
  nameKo: string;
  type: 'hub' | 'market';
  x: number; // percentage in SVG coordinate space 0-1000
  y: number; // percentage in SVG coordinate space 0-500
  roleEn: string;
  roleKo: string;
  commoditiesEn: string[];
  commoditiesKo: string[];
  entity?: string;
}

export const GlobalMap: React.FC<GlobalMapProps> = ({
  lang,
  onNavigateToMarkets,
  onSelectProductRequest,
}) => {
  const t = translations[lang];

  const nodes: TradeNode[] = [
    {
      id: 'indonesia',
      nameEn: 'Indonesia (Surabaya Hub)',
      nameKo: '인도네시아 (수라바야 허브)',
      type: 'hub',
      x: 770,
      y: 320,
      roleEn: 'PT PMA Kidrill Metal Mining Operating HQ',
      roleKo: 'PT PMA Kidrill Metal Mining 운영 본부',
      commoditiesEn: ['Thermal Coal', 'Copper Cathodes', 'Metals & Mining Resources'],
      commoditiesKo: ['발전용 유연탄', '전기동 (구리)', '금속 및 광업 자원'],
      entity: 'PT PMA Kidrill Metal Mining',
    },
    {
      id: 'vietnam',
      nameEn: 'Vietnam (Ho Chi Minh City Hub)',
      nameKo: '베트남 (호치민 시티 허브)',
      type: 'hub',
      x: 755,
      y: 275,
      roleEn: 'Thunder Mark Vietnam Co., Ltd Export Base',
      roleKo: 'Thunder Mark Vietnam Co., Ltd 수출 총괄 기지',
      commoditiesEn: ['Jasmine Rice', 'Robusta & Arabica Coffee', 'Export Seafood'],
      commoditiesKo: ['자스민 쌀', '로부스타/아라비카 커피', '수출용 수산물'],
      entity: 'Thunder Mark Vietnam Co., Ltd',
    },
    {
      id: 'korea',
      nameEn: 'South Korea (Busan / Incheon)',
      nameKo: '대한민국 (부산 / 인천)',
      type: 'market',
      x: 820,
      y: 185,
      roleEn: 'High-Demand Industrial & Retail Offtake',
      roleKo: '산업용 고품질 광물 및 프리미엄 식품 직수입',
      commoditiesEn: ['Clean Thermal Coal', 'Industrial Copper', 'Green Coffee Beans', 'Frozen Seafood'],
      commoditiesKo: ['고열량 유연탄', '산업용 구리', '커피 생두', '냉동 가공 수산물'],
    },
    {
      id: 'china',
      nameEn: 'China (East & South Ports)',
      nameKo: '중국 (동부 및 남부 주요 항만)',
      type: 'market',
      x: 760,
      y: 195,
      roleEn: 'Major Industrial Smelting & Bulk Processing',
      roleKo: '대규모 제련소 및 화력발전 원자재 공급',
      commoditiesEn: ['Thermal & Coking Coal', 'Copper', 'Bulk Agricultural Goods', 'Seafood'],
      commoditiesKo: ['유연탄', '전기동', '대량 농산물', '수산물'],
    },
    {
      id: 'sea',
      nameEn: 'Southeast Asia (ASEAN)',
      nameKo: '동남아시아 (ASEAN 역내 무역)',
      type: 'market',
      x: 735,
      y: 300,
      roleEn: 'Cross-Border Regional Resource Distribution',
      roleKo: '역내 자원 교역 및 급성장 산업 수요 대응',
      commoditiesEn: ['Coal', 'Rice', 'Metals', 'Industrial Raw Materials'],
      commoditiesKo: ['석탄', '쌀', '산업 금속', '원자재'],
    },
    {
      id: 'europe',
      nameEn: 'Europe (Rotterdam / Hamburg / Antwerp)',
      nameKo: '유럽 (로테르담 / 함부르크 / 안트베르펜)',
      type: 'market',
      x: 510,
      y: 145,
      roleEn: 'Strict Compliance Food & Specialty Commodities',
      roleKo: 'EU 기준 적합 식품 및 스페셜티 원자재 공급',
      commoditiesEn: ['Specialty Coffee', 'Certified Seafood Fillets', 'Traceable Agri Commodities'],
      commoditiesKo: ['스페셜티 커피', 'EU 인증 수산물', '이력 추적 농산물'],
    },
    {
      id: 'usa',
      nameEn: 'United States (West & Gulf Coasts)',
      nameKo: '미국 (서부 및 멕시코만 주요 항만)',
      type: 'market',
      x: 210,
      y: 180,
      roleEn: 'Institutional Food Distributors & Industrial Offtakers',
      roleKo: '대형 유통망 및 원자재 제조 수요처',
      commoditiesEn: ['Frozen Prawns & Seafood', 'Commercial Coffee', 'Rice', 'Industrial Minerals'],
      commoditiesKo: ['냉동 새우 및 수산물', '커피', '장립종 쌀', '광물 원자재'],
    },
  ];

  const [activeNodeId, setActiveNodeId] = useState<string>('indonesia');
  const activeNode = nodes.find((n) => n.id === activeNodeId) || nodes[0];

  // Primary trade lines originating from Surabaya (770, 320) and Ho Chi Minh City (755, 275)
  const tradeRoutes = [
    // Surabaya to Korea
    { from: [770, 320], to: [820, 185], control: [830, 260], label: 'Minerals & Metals' },
    // Surabaya to China
    { from: [770, 320], to: [760, 195], control: [785, 250], label: 'Bulk Coal' },
    // HCMC to Korea
    { from: [755, 275], to: [820, 185], control: [800, 220], label: 'Coffee & Seafood' },
    // HCMC to China
    { from: [755, 275], to: [760, 195], control: [765, 230], label: 'Agri & Food' },
    // HCMC to Europe (via Indian Ocean / Suez corridor)
    { from: [755, 275], to: [510, 145], control: [610, 230], label: 'Global Marine Freight' },
    // Surabaya to USA (via Pacific route)
    { from: [770, 320], to: [210, 180], control: [480, 330], label: 'Trans-Oceanic Supply' },
  ];

  return (
    <section className="relative py-28 bg-[#fdfcf8] text-slate-900 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="flex items-center gap-2.5 text-xs font-mono tracking-[0.25em] text-[#b08a3e] uppercase mb-4">
            <Globe className="w-3.5 h-3.5" />
            <span>{t.globalPresence.tag}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-[-0.025em] text-slate-900 mb-6">
            {t.globalPresence.title}
          </h2>

          <p className="text-slate-600 text-base sm:text-lg leading-relaxed font-normal">
            {t.globalPresence.description}
          </p>
        </div>

        {/* Global Map Display & Corridor Panel */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Vector Map Canvas (Light Corporate Theme) */}
          <div className="lg:col-span-8 bg-white border border-slate-200 rounded-2xl p-4 sm:p-6 relative shadow-sm overflow-hidden">
            {/* Top map toolbar */}
            <div className="flex items-center justify-between pb-4 border-b border-slate-100 mb-4 text-xs font-mono text-slate-500">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#c5a059] ring-2 ring-[#c5a059]/30" />
                <span className="font-semibold text-slate-700">KIDRILL GLOBAL TRADE ROUTE MONITOR</span>
              </div>
              <div className="hidden sm:flex items-center gap-4 text-slate-400">
                <span>LAT: 07°15&apos;S / LON: 112°45&apos;E (SURABAYA)</span>
                <span>·</span>
                <span>LAT: 10°46&apos;N / LON: 106°40&apos;E (HCMC)</span>
              </div>
            </div>

            {/* SVG Map Container */}
            <div className="relative aspect-[2/1] w-full select-none bg-[#fbf9f4] rounded-xl overflow-hidden border border-slate-100">
              <svg
                viewBox="0 0 1000 500"
                className="w-full h-full"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* Landmass silhouettes in cool light slate */}
                <g fill="#cbd5e1" opacity="0.95" stroke="#94a3b8" strokeWidth="0.5">
                  {/* North America */}
                  <path d="M110,90 Q160,80 230,95 Q270,120 280,180 Q250,230 190,240 Q160,210 130,170 Q100,130 110,90 Z" />
                  {/* South America */}
                  <path d="M240,260 Q290,260 320,310 Q310,390 260,450 Q230,410 220,330 Q220,290 240,260 Z" />
                  {/* Europe */}
                  <path d="M470,110 Q530,100 560,130 Q540,180 490,190 Q460,160 470,110 Z" />
                  {/* Africa */}
                  <path d="M480,210 Q540,200 570,250 Q560,360 510,400 Q470,360 460,280 Q460,240 480,210 Z" />
                  {/* Asia / Eurasia */}
                  <path d="M570,110 Q710,80 870,120 Q880,210 790,240 Q710,210 650,210 Q590,170 570,110 Z" />
                  {/* India */}
                  <path d="M670,220 Q720,220 710,290 Q680,290 660,250 Z" />
                  {/* Southeast Asia / Indonesia / Archipelago */}
                  <path d="M740,260 Q790,250 820,290 Q810,340 730,340 Q720,300 740,260 Z" />
                  {/* Australia */}
                  <path d="M820,360 Q910,350 920,410 Q880,450 820,430 Q800,390 820,360 Z" />
                </g>

                {/* Subtle Coordinate Grid Lines */}
                <line x1="0" y1="250" x2="1000" y2="250" stroke="rgba(15,23,42,0.06)" strokeDasharray="4 6" />
                <line x1="500" y1="0" x2="500" y2="500" stroke="rgba(15,23,42,0.06)" strokeDasharray="4 6" />
                <line x1="770" y1="0" x2="770" y2="500" stroke="rgba(197,160,89,0.2)" strokeDasharray="2 4" />

                {/* Trade Flow Curved Paths */}
                {tradeRoutes.map((route, idx) => (
                  <g key={`route-${idx}`}>
                    {/* Shadow track */}
                    <path
                      d={`M${route.from[0]},${route.from[1]} Q${route.control[0]},${route.control[1]} ${route.to[0]},${route.to[1]}`}
                      stroke="rgba(197, 160, 89, 0.4)"
                      strokeWidth="1.5"
                      strokeDasharray="4 4"
                      fill="none"
                    />
                    {/* Moving pulse along track */}
                    <path
                      d={`M${route.from[0]},${route.from[1]} Q${route.control[0]},${route.control[1]} ${route.to[0]},${route.to[1]}`}
                      stroke="#b08a3e"
                      strokeWidth="2.5"
                      strokeDasharray="12 40"
                      fill="none"
                      className="animate-pulse"
                    />
                  </g>
                ))}

                {/* Trade Nodes & Interactive Markers */}
                {nodes.map((node) => {
                  const isActive = node.id === activeNodeId;
                  const isHub = node.type === 'hub';

                  return (
                    <g
                      key={node.id}
                      onClick={() => setActiveNodeId(node.id)}
                      className="cursor-pointer group"
                    >
                      {/* Pulse rings for Hubs */}
                      {isHub && (
                        <>
                          <circle
                            cx={node.x}
                            cy={node.y}
                            r={isActive ? 18 : 12}
                            fill="none"
                            stroke="#c5a059"
                            strokeOpacity="0.5"
                            className="animate-ping"
                          />
                          <circle
                            cx={node.x}
                            cy={node.y}
                            r={isActive ? 14 : 9}
                            fill="#c5a059"
                            fillOpacity="0.3"
                          />
                        </>
                      )}

                      {/* Main Node Point */}
                      <circle
                        cx={node.x}
                        cy={node.y}
                        r={isHub ? 6 : 4.5}
                        fill={isHub ? '#C5A059' : isActive ? '#2563EB' : '#475569'}
                        stroke="#FFFFFF"
                        strokeWidth="2"
                        className="transition-all duration-300 group-hover:scale-125 shadow-sm"
                      />

                      {/* Label in SVG for instant clarity */}
                      <text
                        x={node.x + (node.x > 800 ? -10 : 10)}
                        y={node.y + (node.id === 'vietnam' ? -8 : 12)}
                        textAnchor={node.x > 800 ? 'end' : 'start'}
                        fill={isActive ? '#0F172A' : '#334155'}
                        fontSize="10"
                        fontWeight={isHub ? '700' : '500'}
                        fontFamily="sans-serif"
                        className="select-none pointer-events-none drop-shadow-xs"
                      >
                        {lang === 'en' ? node.nameEn.split(' ')[0] : node.nameKo.split(' ')[0]}
                        {isHub ? ' [HQ HUB]' : ''}
                      </text>
                    </g>
                  );
                })}
              </svg>
            </div>

            {/* Map Legend */}
            <div className="mt-4 pt-3 border-t border-slate-100 flex flex-wrap items-center justify-between gap-4 text-xs font-mono text-slate-500">
              <div className="flex items-center gap-6">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#c5a059] ring-2 ring-[#c5a059]/40" />
                  <span className="text-slate-800 font-medium">Operational Hub (Surabaya / HCMC)</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#2563EB]" />
                  <span className="text-slate-600">Destination Trade Corridors</span>
                </div>
              </div>
              <span className="text-slate-400 text-[11px]">Click nodes to inspect corridor specifications</span>
            </div>
          </div>

          {/* Active Node Detail Card */}
          <div className="lg:col-span-4 bg-white border border-slate-200 rounded-2xl p-6 relative flex flex-col justify-between shadow-sm">
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-slate-100 mb-5">
                <span className="text-xs font-mono uppercase tracking-[0.2em] text-[#b08a3e] flex items-center gap-1.5 font-semibold">
                  <MapPin className="w-3.5 h-3.5" />
                  {activeNode.type === 'hub' ? 'STRATEGIC GROUP HUB' : 'GLOBAL TARGET MARKET'}
                </span>
                <span className="text-xs font-mono text-slate-400">ID: {activeNode.id.toUpperCase()}</span>
              </div>

              <h3 className="text-xl font-semibold text-slate-900 mb-2">
                {lang === 'en' ? activeNode.nameEn : activeNode.nameKo}
              </h3>

              <p className="text-xs font-mono text-slate-500 uppercase tracking-wider mb-4 pb-4 border-b border-slate-100">
                {lang === 'en' ? activeNode.roleEn : activeNode.roleKo}
              </p>

              {activeNode.entity && (
                <div className="mb-5 p-3.5 rounded-xl bg-slate-50 border border-slate-200">
                  <span className="block text-[11px] font-mono uppercase text-[#b08a3e] tracking-wider mb-1 font-semibold">
                    Operating Corporate Entity
                  </span>
                  <span className="text-sm font-semibold text-slate-900">
                    {activeNode.entity}
                  </span>
                </div>
              )}

              <div className="mb-6">
                <span className="block text-xs font-mono uppercase tracking-wider text-slate-500 mb-3">
                  {lang === 'en' ? 'Primary Commodity Flows' : '주요 교역 품목'}
                </span>
                <ul className="space-y-2">
                  {(lang === 'en' ? activeNode.commoditiesEn : activeNode.commoditiesKo).map((comm, idx) => (
                    <li
                      key={idx}
                      className="flex items-center gap-2.5 text-sm text-slate-700 bg-slate-50 px-3 py-2 rounded-lg border border-slate-200/80"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-[#c5a059]" />
                      <span>{comm}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Actions for this node */}
            <div className="pt-4 border-t border-slate-100 space-y-2.5">
              <button
                onClick={() => onSelectProductRequest && onSelectProductRequest(activeNode.nameEn)}
                className="w-full py-2.5 px-4 rounded-lg bg-[#0f172a] hover:bg-slate-800 text-white font-semibold text-xs tracking-wider uppercase transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-xs"
              >
                <span>{lang === 'en' ? 'Request Corridor Terms' : '해당 무역 회랑 문의'}</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-[#c5a059]" />
              </button>

              {onNavigateToMarkets && (
                <button
                  onClick={onNavigateToMarkets}
                  className="w-full py-2 px-4 rounded-lg bg-transparent hover:bg-slate-100 text-slate-600 hover:text-slate-900 text-xs font-medium transition-colors text-center cursor-pointer"
                >
                  {lang === 'en' ? 'View Full Markets Overview →' : '전체 글로벌 시장 개요 보기 →'}
                </button>
              )}
            </div>
          </div>
        </div>

        {/* Dual Operating Hub Highlights Strip */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-7 rounded-2xl bg-white border border-slate-200 hover:border-[#c5a059]/60 shadow-xs transition-colors">
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs font-mono text-[#b08a3e] uppercase tracking-widest font-semibold">
                INDONESIAN HUB · MINERAL RESOURCES
              </span>
              <Anchor className="w-4 h-4 text-slate-400" />
            </div>
            <h4 className="text-lg font-semibold text-slate-900 mb-2">PT PMA Kidrill Metal Mining</h4>
            <p className="text-slate-600 text-sm leading-relaxed mb-4 font-light">
              {t.globalPresence.indonesiaDesc}
            </p>
            <div className="text-xs font-mono text-slate-400">
              Pakuwon Centre 23rd Fl, Surabaya, East Java
            </div>
          </div>

          <div className="p-7 rounded-2xl bg-white border border-slate-200 hover:border-[#c5a059]/60 shadow-xs transition-colors">
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs font-mono text-[#b08a3e] uppercase tracking-widest font-semibold">
                VIETNAMESE HUB · AGRICULTURAL & SEAFOOD EXPORT
              </span>
              <Compass className="w-4 h-4 text-slate-400" />
            </div>
            <h4 className="text-lg font-semibold text-slate-900 mb-2">Thunder Mark Vietnam Co., Ltd</h4>
            <p className="text-slate-600 text-sm leading-relaxed mb-4 font-light">
              {t.globalPresence.vietnamDesc}
            </p>
            <div className="text-xs font-mono text-slate-400">
              Golding King Tower, Tan Hung Ward, Ho Chi Minh City
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
