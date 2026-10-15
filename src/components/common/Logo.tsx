import React, { useId } from 'react';

interface LogoProps {
  className?: string;
  textClassName?: string;
  variant?: 'light' | 'dark' | 'monochrome';
  showTagline?: boolean;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  onClick?: () => void;
}

export const KidrillLogo: React.FC<LogoProps> = ({
  className = '',
  textClassName = '',
  variant = 'light',
  showTagline = false,
  size = 'md',
  onClick,
}) => {
  const uniqueId = useId().replace(/:/g, '');
  const goldGradientId = `kidrill-gold-${uniqueId}`;

  // Dimensions based on size
  const iconSizes = {
    sm: 'w-7 h-7',
    md: 'w-9 h-9 sm:w-10 sm:h-10',
    lg: 'w-11 h-11 sm:w-12 sm:h-12',
    xl: 'w-14 h-14 sm:w-16 sm:h-16',
  };

  const textSizes = {
    sm: 'text-sm tracking-[0.16em]',
    md: 'text-lg sm:text-xl tracking-[0.18em]',
    lg: 'text-xl sm:text-2xl tracking-[0.2em]',
    xl: 'text-2xl sm:text-3xl tracking-[0.22em]',
  };

  const isLight = variant === 'light'; // Light text/elements on dark background
  const textColor = isLight ? 'text-white' : 'text-slate-900';
  const taglineColor = isLight ? 'text-slate-400' : 'text-slate-500';

  return (
    <div
      onClick={onClick}
      className={`inline-flex items-center gap-3.5 select-none ${
        onClick ? 'cursor-pointer group' : ''
      } ${className}`}
    >
      {/* Minimalist Geometric Monogram Emblem */}
      <div
        className={`${iconSizes[size]} shrink-0 transition-transform duration-300 group-hover:scale-105`}
      >
        <svg
          viewBox="0 0 40 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full drop-shadow-xs"
        >
          <defs>
            <linearGradient
              id={goldGradientId}
              x1="14.5"
              y1="4"
              x2="35"
              y2="20"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0%" stopColor="#F5D88A" />
              <stop offset="55%" stopColor="#C5A059" />
              <stop offset="100%" stopColor="#9E7D3B" />
            </linearGradient>
          </defs>

          {/* Left Vertical Foundation Pillar (Solid Bedrock / Corporate Grounding) */}
          <rect
            x="3.5"
            y="4"
            width="6.5"
            height="32"
            rx="1.2"
            fill={isLight ? '#FFFFFF' : '#0F172A'}
          />

          {/* Upper Diagonal Wing (Rising Growth, Golden Trade & Resource Flow) */}
          <path
            d="M14.5 18.5 L27 4 H35.5 L21.5 20 Z"
            fill={`url(#${goldGradientId})`}
          />

          {/* Lower Diagonal Anchor (Stability, Shipping Logistics & Mineral Anchor) */}
          <path
            d="M21.5 22 L35.5 38 H27 L14.5 23.5 Z"
            fill={isLight ? '#E2E8F0' : '#1E293B'}
          />

          {/* Precision Subtle Micro-facet Intersection Accent */}
          <circle
            cx="14.5"
            cy="21"
            r="1"
            fill="#C5A059"
          />
        </svg>
      </div>

      {/* Corporate Wordmark */}
      <div className="flex flex-col justify-center leading-none">
        <div className="flex items-center gap-2 sm:gap-2.5">
          <span
            className={`font-extrabold font-display uppercase ${textClassName || textSizes[size]} ${textColor} transition-colors tracking-[0.16em]`}
          >
            KIDRILL
          </span>
          <span
            className={`font-bold font-display uppercase ${textClassName || textSizes[size]} text-[#b08a3e] tracking-[0.18em]`}
          >
            GROUP
          </span>
        </div>

        {showTagline && (
          <span
            className={`text-[9px] font-mono tracking-[0.24em] uppercase mt-1 font-semibold ${taglineColor}`}
          >
            GLOBAL RESOURCES · TRUSTED TRADE
          </span>
        )}
      </div>
    </div>
  );
};
