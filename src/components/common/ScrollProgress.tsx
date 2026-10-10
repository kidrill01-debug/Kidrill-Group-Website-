import React, { useState, useEffect } from 'react';

export const ScrollProgress: React.FC = () => {
  const [progress, setProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    let ticking = false;

    const calculateScrollProgress = () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      
      if (scrollHeight > 20) {
        const currentProgress = Math.min(100, Math.max(0, (scrollTop / scrollHeight) * 100));
        setProgress(currentProgress);
        setIsVisible(scrollTop > 10);
      } else {
        setProgress(0);
        setIsVisible(false);
      }
      ticking = false;
    };

    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(calculateScrollProgress);
        ticking = true;
      }
    };

    // Calculate initial on mount and on resize
    calculateScrollProgress();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', calculateScrollProgress, { passive: true });

    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', calculateScrollProgress);
    };
  }, []);

  return (
    <div
      aria-hidden="true"
      className="fixed top-0 left-0 right-0 z-[100] h-[3px] pointer-events-none select-none transition-opacity duration-300"
      style={{ opacity: isVisible ? 1 : 0 }}
    >
      {/* Background track (delicate translucent hairline) */}
      <div className="absolute inset-0 bg-slate-200/40 backdrop-blur-[1px]" />

      {/* Progress fill bar with premium warm gold/brass editorial gradient */}
      <div
        className="h-full bg-gradient-to-r from-[#996515] via-[#c5a059] to-[#e6ca85] relative transition-[width] duration-75 ease-out"
        style={{
          width: `${progress}%`,
          boxShadow: '0 0 10px rgba(197, 160, 89, 0.5), 0 1px 2px rgba(0, 0, 0, 0.1)',
        }}
      >
        {/* Soft glowing leading edge highlight */}
        {progress > 0 && progress < 99.8 && (
          <div
            className="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-[5px] rounded-full bg-[#fff4cc] blur-[1px] shadow-[0_0_8px_#ffd700]"
          />
        )}
      </div>
    </div>
  );
};
