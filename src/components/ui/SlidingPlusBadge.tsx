import React from 'react';

export interface SlidingPlusBadgeProps {
  label?: string;
  className?: string;
  onClick?: (e: React.MouseEvent) => void;
}

export const SlidingPlusBadge: React.FC<SlidingPlusBadgeProps> = ({
  label = 'View Project',
  className = '',
  onClick,
}) => {
  return (
    <button
      type="button"
      onClick={(e) => {
        if (onClick) {
          e.preventDefault();
          e.stopPropagation();
          onClick(e);
        }
      }}
      className={`absolute bottom-0 right-0 bg-white flex items-center justify-end h-12 sm:h-14 lg:h-16 px-4 sm:px-5 shadow-none z-20 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] select-none cursor-pointer border-none outline-none ${className}`}
    >
      {/* Sliding Text Label: Initially hidden (max-w-0, opacity-0), slides out smoothly on hover */}
      <span className="font-titillium text-[15px] sm:text-[16px] text-[#0A0909] font-normal max-w-0 opacity-0 group-hover:max-w-[140px] group-hover:opacity-100 group-hover:mr-3 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] whitespace-nowrap overflow-hidden">
        {label}
      </span>

      {/* Plus Icon: turns orange on hover */}
      <span className="text-[22px] sm:text-[26px] font-light text-[#0A0909] group-hover:text-[#FA6400] transition-colors duration-500 inline-block leading-none transform group-hover:rotate-90 transition-transform">
        +
      </span>
    </button>
  );
};
