import React from 'react';
import { ArrowRight } from 'lucide-react';
import { SlidingPlusBadge } from '@/components/ui/SlidingPlusBadge';

interface MotionImageHoverProps {
  src: string;
  alt: string;
  className?: string;
  aspectRatio?: string;
  iconType?: 'plus' | 'arrow' | 'none';
  label?: string;
}

export const MotionImageHover: React.FC<MotionImageHoverProps> = ({
  src,
  alt,
  className = '',
  aspectRatio = 'aspect-square',
  iconType = 'plus',
  label = 'View Project',
}) => {
  return (
    <div className={`w-full ${aspectRatio} overflow-hidden relative bg-neutral-100 group ${className}`}>
      {/* Image with 700ms smooth scale on hover */}
      <img
        src={src}
        alt={alt}
        className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
      />

      {/* Floating Corner Overlay Icon with Sliding 'View Project' Text */}
      {iconType === 'plus' && (
        <SlidingPlusBadge label={label} />
      )}

      {iconType === 'arrow' && (
        <div className="absolute bottom-0 right-0 bg-white group-hover:bg-[#FA6400] w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center text-[#0A0909] group-hover:text-white transition-colors duration-300 z-10">
          <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6 stroke-[1.5] transition-transform duration-300 group-hover:translate-x-0.5 transform" />
        </div>
      )}
    </div>
  );
};
