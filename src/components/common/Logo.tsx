import React from 'react';

interface LogoProps {
  className?: string;
  variant?: 'light' | 'dark' | 'monochrome';
  showTagline?: boolean;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  onClick?: () => void;
}

export const KidrillLogo: React.FC<LogoProps> = ({
  className = '',
  variant = 'light',
  showTagline = false,
  size = 'md',
  onClick,
}) => {
  // Dimensions based on size
  const iconSizes = {
    sm: 'w-7 h-7',
    md: 'w-9 h-9',
    lg: 'w-12 h-12',
    xl: 'w-16 h-16',
  };

  const textSizes = {
    sm: 'text-sm tracking-[0.16em]',
    md: 'text-base tracking-[0.2em]',
    lg: 'text-xl tracking-[0.22em]',
    xl: 'text-2xl tracking-[0.24em]',
  };

  const isLight = variant === 'light'; // Light text on dark bg
  const textColor = isLight ? 'text-white' : 'text-slate-900';
  const taglineColor = isLight ? 'text-slate-400' : 'text-slate-500';

  return (
    <div
      onClick={onClick}
      className={`inline-flex items-center gap-3.5 select-none ${onClick ? 'cursor-pointer group' : ''} ${className}`}
    >
      {/* Geometric K Emblem */}
      <div className={`${iconSizes[size]} shrink-0 transition-transform duration-300 group-hover:scale-105`}>
        <svg
          viewBox="0 0 100 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full drop-shadow-sm"
        >
          {/* Background diamond glow/accent (subtle) */}
          <rect
            x="4"
            y="4"
            width="92"
            height="92"
            rx="12"
            fill={isLight ? '#0f172a' : '#f8fafc'}
            stroke={isLight ? 'rgba(255, 255, 255, 0.12)' : 'rgba(15, 23, 42, 0.12)'}
            strokeWidth="2"
          />

          {/* Left Vertical Foundation Pillar */}
          <path
            d="M26 22 H36 V78 H26 Z"
            fill={isLight ? '#F8FAFC' : '#0F172A'}
          />

          {/* Diagonal Upper Arrow / Crystal Facet (Global Network & Growth) */}
          <path
            d="M38 50 L58 24 H74 L48 50 Z"
            fill="url(#goldGradient)"
          />

          {/* Diagonal Lower Arrow / Resource Anchor (Mineral & Stability) */}
          <path
            d="M48 50 L75 78 H59 L38 52 Z"
            fill={isLight ? '#E2E8F0' : '#334155'}
          />

          {/* Central Keystone Diamond Connector */}
          <polygon
            points="42,50 48,44 54,50 48,56"
            fill="#C5A059"
          />

          {/* Subtle Precision Accent Line */}
          <line
            x1="36"
            y1="22"
            x2="36"
            y2="78"
            stroke="#C5A059"
            strokeWidth="1.5"
            strokeOpacity="0.8"
          />

          <defs>
            <linearGradient id="goldGradient" x1="38" y1="24" x2="74" y2="50" gradientUnits="userSpaceOnUse">
              <stop stopColor="#E6CA85" />
              <stop offset="0.6" stopColor="#C5A059" />
              <stop offset="1" stopColor="#9E7D3B" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* Wordmark */}
      <div className="flex flex-col justify-center leading-none">
        <div className="flex items-center gap-2">
          <span className={`font-bold font-display uppercase ${textSizes[size]} ${textColor} transition-colors tracking-[0.18em]`}>
            KIDRILL
          </span>
          <span className={`font-semibold font-display uppercase ${textSizes[size]} text-[#b08a3e] tracking-[0.18em]`}>
            GROUP
          </span>
        </div>

        {showTagline && (
          <span className={`text-[9px] font-mono tracking-[0.22em] uppercase mt-1 font-medium ${taglineColor}`}>
            GLOBAL RESOURCES · TRUSTED TRADE
          </span>
        )}
      </div>
    </div>
  );
};
