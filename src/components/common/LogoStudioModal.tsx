import React, { useState } from 'react';
import { LogoStyle, WordmarkFont, Language } from '../../types';
import { useBrand } from '../../context/BrandContext';
import { LogoEmblem, KidrillLogo } from './Logo';
import {
  X,
  Check,
  Download,
  Copy,
  Sparkles,
  ShieldCheck,
  Compass,
  Gem,
  Layers,
  Palette,
  ExternalLink,
  RotateCcw,
} from 'lucide-react';

interface LogoStudioModalProps {
  isOpen: boolean;
  onClose: () => void;
  lang?: Language;
}

interface LogoOptionConfig {
  id: LogoStyle;
  titleVi: string;
  titleEn: string;
  taglineVi: string;
  taglineEn: string;
  descriptionVi: string;
  descriptionEn: string;
  symbolismVi: string[];
  symbolismEn: string[];
  icon: React.ElementType;
  badgeVi?: string;
  badgeEn?: string;
}

const LOGO_OPTIONS: LogoOptionConfig[] = [
  {
    id: 'prismatic-k',
    titleVi: '1. Khối Tinh Thể Mũi Khoan Vàng (Prismatic Nexus K)',
    titleEn: '1. Prismatic Nexus K (Diamond Drill & Mineral Facets)',
    taglineVi: 'Khuyên dùng · Đẳng cấp tập đoàn tài nguyên thế hệ mới',
    taglineEn: 'Recommended · Next-Gen Global Resource Conglomerate',
    badgeVi: 'MỚI & ĐỀ XUẤT',
    badgeEn: 'NEW & RECOMMENDED',
    icon: Gem,
    descriptionVi:
      'Thiết kế kết hợp giữa khối trụ vững chắc như tháp khoan địa chất Indonesia (PT PMA Kidrill Metal Mining) cùng các mặt cắt tinh thể quặng vàng đồng vươn góc 45° tượng trưng cho thị trường quốc tế và viên kim cương trung tâm kết nối các dòng chảy thương mại.',
    descriptionEn:
      'Engineered with an architectural split pylon representing industrial mining rigs, paired with 45-degree multifaceted gold ore crystal prisms and a radiant central keystone nexus uniting global commodity flows.',
    symbolismVi: [
      'Trụ titanium bên trái: Nền tảng vững chắc, địa chất sâu và giàn khoan khoáng sản Indonesia.',
      'Cánh tinh thể vàng góc trên: Kim loại màu, quặng đồng, năng lượng và hướng xuất khẩu đi lên.',
      'Cánh neo biển góc dưới: Vận tải biển quốc tế, than nhiệt, nông - thủy sản bền vững.',
      'Viên kim cương trung tâm: Uy tín và sự gắn kết trường tồn với đối tác B2B.',
    ],
    symbolismEn: [
      'Left Titanium Monolith: Solid institutional bedrock, geological depth, and mining stability.',
      'Upper Gold Prism: Non-ferrous metals, copper cathode, energy, and ascending export trajectory.',
      'Lower Anchor Blade: Maritime trade lanes, thermal coal, agriculture, and seafood security.',
      'Central Diamond Keystone: Absolute commercial integrity and lasting partnership.',
    ],
  },
  {
    id: 'orbital-compass',
    titleVi: '2. La Bàn Hải Trình & Tọa Độ Toàn Cầu (Orbital Compass)',
    titleEn: '2. Orbital Compass & Meridian Drill K',
    taglineVi: 'Hiện đại · Biểu trưng cho tuyến hàng hải & thương mại quốc tế',
    taglineEn: 'Modern · Global Sea Corridors & Navigational Precision',
    icon: Compass,
    badgeVi: 'HẢI TRÌNH QUỐC TẾ',
    badgeEn: 'GLOBAL MARITIME',
    descriptionVi:
      'Lấy cảm hứng từ vòng kinh tuyến hàng hải và la bàn hàng hải quốc tế, kết nối 2 trung tâm chiến lược Surabaya (Indonesia) và TP. Hồ Chí Minh (Việt Nam) với các cảng biển thế giới.',
    descriptionEn:
      'Inspired by maritime meridian rings and nautical navigational compasses, uniting the strategic operating hubs of Indonesia and Vietnam across oceanic trade routes.',
    symbolismVi: [
      'Vòng tròn tọa độ: Tuyến đường biển quốc tế kết nối Châu Á, Âu, Mỹ.',
      'Mũi tên vector K: Tốc độ giao hàng chuẩn xác, không đứt gãy chuỗi cung ứng.',
      'Tâm điểm kim la bàn: Sự chính trực và định hướng phát triển bền vững.',
    ],
    symbolismEn: [
      'Meridian Ring: International shipping routes connecting Asia, Europe, and the Americas.',
      'Directional K Vector: Precision logistics and uninterrupted supply chains.',
      'Compass Pivot: Unwavering integrity and sustainable governance.',
    ],
  },
  {
    id: 'sovereign-crest',
    titleVi: '3. Khiên Huy Hiệu Hoàng Gia (Sovereign Mineral Crest)',
    titleEn: '3. Sovereign Mineral Crest (Institutional Shield)',
    taglineVi: 'Uy quyền · Bảo chứng tài nguyên & danh tiếng tập đoàn lâu đời',
    taglineEn: 'Authoritative · Sovereign Trust & Multi-Commodity Heritage',
    icon: ShieldCheck,
    badgeVi: 'UY QUYỀN HOÀNG GIA',
    badgeEn: 'HERALDIC PRESTIGE',
    descriptionVi:
      'Dạng khiên vát kim cương mang phong thái của các định chế tài chính và tập đoàn thương mại đa quốc gia hàng đầu, toát lên sự bảo đảm pháp lý và độ tin cậy tuyệt đối.',
    descriptionEn:
      'A faceted diamond shield carrying the prestige of Fortune 500 trading houses, conveying sovereign credibility, rigorous contracts, and long-term security.',
    symbolismVi: [
      'Khiên đa giác: Bảo vệ quyền lợi đối tác, cam kết chuẩn mực chất lượng quốc tế.',
      'Ngôi sao hoàng gia trên đỉnh: Vị thế dẫn dắt trong chuỗi cung ứng Đông Nam Á.',
      'Họa tiết phân tầng: 3 mảng kinh doanh cốt lõi: Khoáng sản - Nông sản - Thủy sản.',
    ],
    symbolismEn: [
      'Polygonal Shield: Counterparty safety and rigorous international compliance.',
      'Crown Star Emblem: Leadership across Southeast Asian commodity supply chains.',
      'Stratified Facets: Tri-pillar portfolio: Minerals, Agro-commodities, and Seafood.',
    ],
  },
  {
    id: 'minimal-ribbon',
    titleVi: '4. Dải Lụa Hoàng Kim Vô Tận (Minimal Executive Ribbon)',
    titleEn: '4. Minimal Executive Golden Ribbon',
    taglineVi: 'Tối giản · Chuẩn thẩm mỹ tập đoàn thương mại Thụy Sĩ / Singapore',
    taglineEn: 'Minimalist · Sleek Swiss & Singapore Commodity House Standard',
    icon: Layers,
    badgeVi: 'TỐI GIẢN CAO CẤP',
    badgeEn: 'ULTRA-MINIMAL',
    descriptionVi:
      'Đường nét ribbon mượt mà uốn lượn tạo thành chữ K tinh xảo trong không gian âm, tối ưu cho nhận diện số, ứng dụng di động và ấn phẩm cao cấp.',
    descriptionEn:
      'Continuous fluid metallic gold ribbon forming an iconic monogram K in negative space, optimized for digital clarity and ultra-luxury collateral.',
    symbolismVi: [
      'Dải lụa không đứt đoạn: Dòng vốn và nguyên liệu lưu thông không ngừng nghỉ.',
      'Đường nét khí động học: Sự linh hoạt và thích ứng nhanh với biến động giá hàng hóa.',
    ],
    symbolismEn: [
      'Unbroken Ribbon: Uninterrupted capital and material circulation.',
      'Aerodynamic Contours: Agile response to global commodity price cycles.',
    ],
  },
  {
    id: 'classic',
    titleVi: '5. Biểu Tượng Ban Đầu (Classic Original)',
    titleEn: '5. Original Foundation Mark',
    taglineVi: 'Bản gốc hình học khối vuông ban đầu',
    taglineEn: 'Original block stamp geometry',
    icon: RotateCcw,
    badgeVi: 'BẢN GỐC',
    badgeEn: 'ORIGINAL',
    descriptionVi: 'Mẫu biểu tượng khối vuông ban đầu để đối chiếu sự nâng cấp nhận diện.',
    descriptionEn: 'The initial square stamp mark preserved for comparison.',
    symbolismVi: ['Khối hình học cơ bản kết nối cột trụ và 2 nhánh chéo.'],
    symbolismEn: ['Standard geometric pylon with diagonal arrows.'],
  },
];

export const LogoStudioModal: React.FC<LogoStudioModalProps> = ({
  isOpen,
  onClose,
  lang = 'vi',
}) => {
  const { logoStyle, setLogoStyle, wordmarkFont, setWordmarkFont } = useBrand();
  const [selectedStyle, setSelectedStyle] = useState<LogoStyle>(logoStyle);
  const [copied, setCopied] = useState(false);
  const [appliedNotification, setAppliedNotification] = useState(false);
  const [previewBg, setPreviewBg] = useState<'dark' | 'light' | 'gold'>('dark');

  if (!isOpen) return null;

  const currentOption = LOGO_OPTIONS.find((o) => o.id === selectedStyle) || LOGO_OPTIONS[0];

  const handleApplyLogo = (style: LogoStyle) => {
    setSelectedStyle(style);
    setLogoStyle(style);
    setAppliedNotification(true);
    setTimeout(() => setAppliedNotification(false), 2400);
  };

  const generateSVGString = (style: LogoStyle): string => {
    // Generate clean standalone SVG markup for export
    return `<!-- Kidrill Group Corporate Logo (${style}) -->
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 120" width="500" height="120">
  <defs>
    <linearGradient id="gold-grad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#FDE68A"/>
      <stop offset="40%" stop-color="#D4AF37"/>
      <stop offset="70%" stop-color="#B38728"/>
      <stop offset="100%" stop-color="#855B14"/>
    </linearGradient>
  </defs>
  <!-- Background Container -->
  <rect x="10" y="10" width="100" height="100" rx="20" fill="#0B1120" stroke="rgba(197,160,89,0.3)" stroke-width="2"/>
  <!-- K Symbol Monogram -->
  <rect x="32" y="26" width="12" height="68" rx="2" fill="#FFFFFF"/>
  <line x1="44" y1="30" x2="44" y2="90" stroke="#D4AF37" stroke-width="2.5"/>
  <path d="M48 60 L78 28 H92 L62 60 Z" fill="url(#gold-grad)"/>
  <path d="M60 60 L92 92 H78 L48 62 Z" fill="#D4AF37"/>
  <polygon points="52,60 58,54 64,60 58,66" fill="#FFF3C4"/>
  <!-- Typography Wordmark -->
  <text x="135" y="70" font-family="'Plus Jakarta Sans', 'Inter', sans-serif" font-size="42" font-weight="800" fill="#0F172A" letter-spacing="4">KIDRILL</text>
  <text x="345" y="70" font-family="'Plus Jakarta Sans', 'Inter', sans-serif" font-size="42" font-weight="700" fill="#C5A059" letter-spacing="4">GROUP</text>
  <text x="137" y="92" font-family="'JetBrains Mono', monospace" font-size="11" font-weight="600" fill="#64748B" letter-spacing="3">GLOBAL RESOURCES · TRUSTED TRADE</text>
</svg>`;
  };

  const handleDownloadSVG = () => {
    const svgCode = generateSVGString(selectedStyle);
    const blob = new Blob([svgCode], { type: 'image/svg+xml;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `kidrill-group-logo-${selectedStyle}.svg`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  const handleCopySVG = () => {
    const svgCode = generateSVGString(selectedStyle);
    navigator.clipboard.writeText(svgCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const isVi = lang === 'vi';

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/75 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 animate-fadeIn">
      <div className="relative w-full max-w-5xl bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden flex flex-col max-h-[92vh]">
        {/* Header Bar */}
        <div className="flex items-center justify-between px-6 sm:px-8 py-5 border-b border-slate-200 bg-[#fbfaf6]">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#0f172a] text-[#c5a059] flex items-center justify-center shadow-xs">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight font-display">
                  {isVi ? 'Kidrill Group — Logo Studio & Nhận Diện Thương Hiệu' : 'Kidrill Group — Logo Studio & Brand Identity'}
                </h3>
                <span className="hidden sm:inline-flex px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold uppercase tracking-wider bg-[#c5a059]/15 text-[#8c6722] border border-[#c5a059]/30">
                  {isVi ? 'Bản Mới 2026' : 'Official 2026'}
                </span>
              </div>
              <p className="text-xs text-slate-500 mt-0.5">
                {isVi
                  ? 'Xem trước, so sánh và chọn mẫu logo chính thức cho toàn bộ website'
                  : 'Preview, compare and select the official brand logo across the entire website'}
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="w-9 h-9 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 hover:text-slate-900 flex items-center justify-center transition-colors cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Applied Notification Toast */}
        {appliedNotification && (
          <div className="bg-emerald-600 text-white px-6 py-2.5 text-xs font-semibold flex items-center justify-between transition-all">
            <span className="flex items-center gap-2">
              <Check className="w-4 h-4" />
              {isVi
                ? `Đã áp dụng mẫu "${currentOption.titleVi}" cho toàn bộ website!`
                : `Applied "${currentOption.titleEn}" as active website logo!`}
            </span>
            <span className="font-mono text-[11px] opacity-90">Auto-saved to site</span>
          </div>
        )}

        {/* Main Content Body */}
        <div className="flex-1 overflow-y-auto p-6 sm:p-8 space-y-8 bg-[#fdfcf8]">
          {/* Top: 4 Logo Selection Cards Grid */}
          <div>
            <div className="flex items-center justify-between mb-4">
              <div>
                <h4 className="text-sm font-mono uppercase tracking-[0.2em] text-[#b08a3e] font-semibold">
                  {isVi ? 'CÁC PHƯƠNG ÁN LOGO THIẾT KẾ' : 'EXECUTIVE LOGO OPTIONS'}
                </h4>
                <p className="text-xs text-slate-600 mt-0.5">
                  {isVi
                    ? 'Nhấp chọn một mẫu để xem chi tiết và kích hoạt trực tiếp trên web'
                    : 'Click an option to inspect details and activate across the site'}
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {LOGO_OPTIONS.map((opt) => {
                const isSelected = selectedStyle === opt.id;
                const isCurrentlyActive = logoStyle === opt.id;

                return (
                  <div
                    key={opt.id}
                    onClick={() => handleApplyLogo(opt.id)}
                    className={`relative p-4 rounded-2xl border-2 transition-all cursor-pointer text-left flex flex-col justify-between ${
                      isSelected
                        ? 'border-[#c5a059] bg-white shadow-lg ring-2 ring-[#c5a059]/20 -translate-y-0.5'
                        : 'border-slate-200 bg-white/70 hover:bg-white hover:border-slate-300 shadow-xs'
                    }`}
                  >
                    {/* Top Badges */}
                    <div className="flex items-center justify-between gap-2 mb-3">
                      {opt.badgeVi ? (
                        <span
                          className={`text-[10px] font-mono uppercase font-bold tracking-wider px-2 py-0.5 rounded-md ${
                            opt.id === 'prismatic-k'
                              ? 'bg-amber-100 text-amber-900 border border-amber-300'
                              : 'bg-slate-100 text-slate-700'
                          }`}
                        >
                          {isVi ? opt.badgeVi : opt.badgeEn}
                        </span>
                      ) : (
                        <div />
                      )}

                      {isCurrentlyActive && (
                        <span className="flex items-center gap-1 text-[10px] font-semibold text-emerald-700 bg-emerald-50 border border-emerald-200 px-2 py-0.5 rounded-full">
                          <Check className="w-3 h-3" />
                          {isVi ? 'Đang dùng' : 'Active'}
                        </span>
                      )}
                    </div>

                    {/* Logo Visual Preview Box */}
                    <div className="p-4 rounded-xl bg-[#090e1a] border border-white/10 flex items-center justify-center my-2 shadow-inner group">
                      <div className="w-16 h-16 transition-transform duration-300 group-hover:scale-110">
                        <LogoEmblem
                          style={opt.id}
                          variant="light"
                          uniqueId={`card-${opt.id}`}
                        />
                      </div>
                    </div>

                    {/* Text Details */}
                    <div className="mt-2">
                      <h5 className="font-bold text-slate-900 text-sm tracking-tight leading-snug">
                        {isVi ? opt.titleVi : opt.titleEn}
                      </h5>
                      <p className="text-[11px] text-[#b08a3e] font-medium mt-0.5 leading-snug">
                        {isVi ? opt.taglineVi : opt.taglineEn}
                      </p>
                    </div>

                    {/* Bottom Action Button */}
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        handleApplyLogo(opt.id);
                      }}
                      className={`mt-4 w-full py-2 rounded-xl text-xs font-semibold transition-all flex items-center justify-center gap-1.5 cursor-pointer ${
                        isCurrentlyActive
                          ? 'bg-emerald-50 text-emerald-800 border border-emerald-300'
                          : 'bg-slate-900 hover:bg-black text-white shadow-xs'
                      }`}
                    >
                      {isCurrentlyActive ? (
                        <>
                          <Check className="w-3.5 h-3.5" />
                          <span>{isVi ? 'Logo đang hoạt động' : 'Currently Active'}</span>
                        </>
                      ) : (
                        <>
                          <Sparkles className="w-3.5 h-3.5 text-[#c5a059]" />
                          <span>{isVi ? 'Chọn & Kích Hoạt' : 'Select & Activate'}</span>
                        </>
                      )}
                    </button>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Middle: Active Logo Inspector & Multi-surface Preview */}
          <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-100">
              <div>
                <span className="text-xs font-mono uppercase tracking-[0.2em] text-[#b08a3e] font-semibold block">
                  {isVi ? 'XEM TRƯỚC THỰC TẾ TRÊN CÁC CHẤT LIỆU' : 'MULTI-SURFACE LIVE PREVIEW'}
                </span>
                <h4 className="text-lg font-bold text-slate-900 mt-0.5">
                  {isVi ? currentOption.titleVi : currentOption.titleEn}
                </h4>
              </div>

              {/* Surface Toggles */}
              <div className="flex items-center gap-1.5 p-1 bg-slate-100 rounded-xl text-xs font-medium">
                <button
                  onClick={() => setPreviewBg('dark')}
                  className={`px-3 py-1.5 rounded-lg transition-all cursor-pointer ${
                    previewBg === 'dark'
                      ? 'bg-[#0b1120] text-white shadow-xs'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  {isVi ? 'Nền Tối Obsidian' : 'Obsidian Dark'}
                </button>
                <button
                  onClick={() => setPreviewBg('light')}
                  className={`px-3 py-1.5 rounded-lg transition-all cursor-pointer ${
                    previewBg === 'light'
                      ? 'bg-white text-slate-900 shadow-xs'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  {isVi ? 'Nền Sáng Ivory' : 'Editorial Light'}
                </button>
                <button
                  onClick={() => setPreviewBg('gold')}
                  className={`px-3 py-1.5 rounded-lg transition-all cursor-pointer ${
                    previewBg === 'gold'
                      ? 'bg-gradient-to-r from-[#e6ca85] to-[#c5a059] text-slate-950 font-bold shadow-xs'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  {isVi ? 'Thẻ Hoàng Kim' : 'Gold Card'}
                </button>
              </div>
            </div>

            {/* Live Interactive Preview Canvas */}
            <div
              className={`rounded-2xl p-8 sm:p-12 transition-all flex flex-col items-center justify-center gap-6 border ${
                previewBg === 'dark'
                  ? 'bg-[#090e1a] border-slate-800 text-white'
                  : previewBg === 'light'
                  ? 'bg-[#fdfcf8] border-slate-200 text-slate-900'
                  : 'bg-gradient-to-br from-[#1a150a] via-[#2a2010] to-[#0c0903] border-[#c5a059]/40 text-amber-100'
              }`}
            >
              {/* Full Brand Wordmark Preview */}
              <div className="scale-110 sm:scale-125 my-4">
                <KidrillLogo
                  styleOverride={selectedStyle}
                  fontOverride={wordmarkFont}
                  variant={previewBg === 'dark' || previewBg === 'gold' ? 'light' : 'dark'}
                  size="xl"
                  showTagline={true}
                  taglineText={
                    isVi
                      ? 'TÀI NGUYÊN TOÀN CẦU · THƯƠNG MẠI UY TÍN'
                      : 'GLOBAL RESOURCES · TRUSTED TRADE'
                  }
                />
              </div>

              {/* Smaller UI Context preview */}
              <div className="pt-6 border-t border-white/10 w-full max-w-md flex items-center justify-around text-xs opacity-75">
                <div className="flex items-center gap-2">
                  <span className="font-mono text-[10px] uppercase tracking-wider opacity-60">
                    Navbar (md):
                  </span>
                  <KidrillLogo
                    styleOverride={selectedStyle}
                    variant={previewBg === 'dark' || previewBg === 'gold' ? 'light' : 'dark'}
                    size="sm"
                  />
                </div>
                <div className="flex items-center gap-2">
                  <span className="font-mono text-[10px] uppercase tracking-wider opacity-60">
                    Icon (xs):
                  </span>
                  <div className="w-6 h-6">
                    <LogoEmblem
                      style={selectedStyle}
                      variant={previewBg === 'dark' || previewBg === 'gold' ? 'light' : 'dark'}
                      uniqueId="preview-mini"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Typography Selector */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pt-2">
              <div className="text-xs text-slate-600">
                <span className="font-semibold text-slate-900 block">
                  {isVi ? 'Kiểu Chữ Thương Hiệu (Wordmark Typography):' : 'Brand Typography:'}
                </span>
                <span className="text-[11px] text-slate-500">
                  {isVi
                    ? 'Tùy chỉnh phong cách phông chữ của cụm "KIDRILL GROUP"'
                    : 'Customize letterform styling for "KIDRILL GROUP"'}
                </span>
              </div>
              <div className="flex items-center gap-2">
                {(['display', 'editorial', 'modern'] as WordmarkFont[]).map((font) => (
                  <button
                    key={font}
                    onClick={() => setWordmarkFont(font)}
                    className={`px-3 py-1.5 rounded-lg text-xs font-medium border transition-colors cursor-pointer ${
                      wordmarkFont === font
                        ? 'bg-slate-900 text-white border-slate-900'
                        : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-50'
                    }`}
                  >
                    {font === 'display' && (isVi ? 'Hiện đại (Display Sans)' : 'Display Sans')}
                    {font === 'editorial' && (isVi ? 'Sang trọng (Serif)' : 'Editorial Serif')}
                    {font === 'modern' && (isVi ? 'Kỹ thuật số (Mono)' : 'Tech Mono')}
                  </button>
                ))}
              </div>
            </div>

            {/* Design Rationale & Symbolism Grid */}
            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200">
              <h5 className="font-bold text-slate-900 text-sm mb-2 flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#c5a059]" />
                <span>{isVi ? 'Ý Nghĩa Biểu Tượng & Triết Lý Thiết Kế' : 'Symbolism & Design Philosophy'}</span>
              </h5>
              <p className="text-xs text-slate-600 leading-relaxed mb-4">
                {isVi ? currentOption.descriptionVi : currentOption.descriptionEn}
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2.5">
                {(isVi ? currentOption.symbolismVi : currentOption.symbolismEn).map((point, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-2 text-xs text-slate-700 bg-white p-2.5 rounded-xl border border-slate-200/80"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[#c5a059] shrink-0 mt-1.5" />
                    <span className="leading-snug">{point}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Brand Color Swatches */}
            <div className="pt-2">
              <span className="text-[11px] font-mono uppercase tracking-wider text-slate-500 font-semibold block mb-2">
                {isVi ? 'BẢNG MÀU THƯƠNG HIỆU CHUẨN (OFFICIAL COLOR PALETTE)' : 'OFFICIAL BRAND PALETTE'}
              </span>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs">
                <div className="p-3 rounded-xl border border-slate-200 bg-white flex items-center gap-2.5">
                  <div className="w-7 h-7 rounded-lg bg-[#C5A059] shadow-inner" />
                  <div>
                    <span className="font-bold text-slate-900 block leading-none">Imperial Gold</span>
                    <span className="font-mono text-[10px] text-slate-500">#C5A059 · Kim loại & thịnh vượng</span>
                  </div>
                </div>

                <div className="p-3 rounded-xl border border-slate-200 bg-white flex items-center gap-2.5">
                  <div className="w-7 h-7 rounded-lg bg-[#0F172A] shadow-inner" />
                  <div>
                    <span className="font-bold text-slate-900 block leading-none">Obsidian Slate</span>
                    <span className="font-mono text-[10px] text-slate-500">#0F172A · Khai khoáng & than đá</span>
                  </div>
                </div>

                <div className="p-3 rounded-xl border border-slate-200 bg-white flex items-center gap-2.5">
                  <div className="w-7 h-7 rounded-lg bg-[#0284C7] shadow-inner" />
                  <div>
                    <span className="font-bold text-slate-900 block leading-none">Maritime Blue</span>
                    <span className="font-mono text-[10px] text-slate-500">#0284C7 · Hải trình & thủy sản</span>
                  </div>
                </div>

                <div className="p-3 rounded-xl border border-slate-200 bg-white flex items-center gap-2.5">
                  <div className="w-7 h-7 rounded-lg bg-[#059669] shadow-inner" />
                  <div>
                    <span className="font-bold text-slate-900 block leading-none">Agro Emerald</span>
                    <span className="font-mono text-[10px] text-slate-500">#059669 · Nông sản & gạo cà phê</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="px-6 sm:px-8 py-4 border-t border-slate-200 bg-[#fbfaf6] flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-xs text-slate-600">
            <span className="font-semibold text-slate-900">
              {isVi ? 'Đang chọn:' : 'Selected:'}
            </span>
            <span className="font-medium text-[#b08a3e]">
              {isVi ? currentOption.titleVi : currentOption.titleEn}
            </span>
          </div>

          <div className="flex items-center gap-3 w-full sm:w-auto">
            {/* Copy SVG code */}
            <button
              onClick={handleCopySVG}
              className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-xl border border-slate-300 hover:bg-slate-100 text-slate-700 text-xs font-semibold transition-colors cursor-pointer"
            >
              <Copy className="w-3.5 h-3.5" />
              <span>{copied ? (isVi ? 'Đã sao chép!' : 'Copied!') : isVi ? 'Chép mã SVG' : 'Copy SVG'}</span>
            </button>

            {/* Download SVG file */}
            <button
              onClick={handleDownloadSVG}
              className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-xl border border-slate-300 hover:bg-slate-100 text-slate-700 text-xs font-semibold transition-colors cursor-pointer"
            >
              <Download className="w-3.5 h-3.5" />
              <span>{isVi ? 'Tải file SVG' : 'Download SVG'}</span>
            </button>

            {/* Apply & Close */}
            <button
              onClick={() => {
                handleApplyLogo(selectedStyle);
                onClose();
              }}
              className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-xl bg-[#0f172a] hover:bg-black text-white text-xs font-bold uppercase tracking-wider transition-colors shadow-md cursor-pointer"
            >
              <Check className="w-4 h-4 text-[#c5a059]" />
              <span>{isVi ? 'Áp Dụng Cho Website' : 'Apply to Website'}</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
