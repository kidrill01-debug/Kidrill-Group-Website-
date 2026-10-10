import React from 'react';

interface HairlineDividerProps {
  className?: string;
  accent?: boolean;
}

/**
 * Full-width hairline divider engineered for a refined, editorial corporate layout.
 * Features a crisp 1px architectural base with a subtle warm-gold tapered shimmer.
 */
export const HairlineDivider: React.FC<HairlineDividerProps> = ({
  className = '',
  accent = true,
}) => {
  return (
    <div
      aria-hidden="true"
      className={`w-full h-[1px] relative overflow-hidden select-none pointer-events-none block ${className}`}
    >
      {/* Crisp neutral architectural hairline base */}
      <div className="absolute inset-0 bg-slate-200/75" />

      {/* Editorial warm gold center dissipation to harmonize with #fdfcf8 and #c5a059 */}
      {accent && (
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#c5a059]/35 to-transparent" />
      )}
    </div>
  );
};
