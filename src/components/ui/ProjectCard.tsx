import React from 'react';
import { Link } from 'react-router-dom';

export interface ProjectCardProps {
  image: string;
  category: string;
  title: string;
  buttonLabel?: string;
  to?: string;
  link?: string;
  onClick?: (e: React.MouseEvent) => void;
  aspectRatio?: string;
  className?: string;
  imageClassName?: string;
  priority?: boolean;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({
  image,
  category,
  title,
  buttonLabel = 'View Project',
  to,
  link,
  onClick,
  aspectRatio = 'aspect-[0.83/1]',
  className = '',
  imageClassName = '',
  priority = false,
}) => {
  const destination = to || link;

  const cardContent = (
    <div className={`group flex flex-col w-full bg-white select-none ${className}`}>
      {/* ──────────────────────────────────────────────────────── */}
      {/* 1. TALL PORTRAIT RECTANGULAR IMAGE WRAPPER               */}
      {/* ──────────────────────────────────────────────────────── */}
      <div
        className={`relative w-full ${aspectRatio} overflow-hidden bg-neutral-100`}
        style={{ aspectRatio: aspectRatio.includes('/') ? undefined : '0.83 / 1' }}
      >
        {/* Upright photograph - scales smoothly on hover */}
        <img
          src={image}
          alt={title}
          loading={priority ? 'eager' : 'lazy'}
          className={`w-full h-full object-cover block transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105 ${imageClassName}`}
        />

        {/* ──────────────────────────────────────────────────────── */}
        {/* 2. WHITE SQUARE / SLIDING PLUS BADGE (BOTTOM-RIGHT)      */}
        {/* Normal: 64x64 white square with thin black plus          */}
        {/* Hover: Smoothly expands horizontally revealing text + orange + */}
        {/* ──────────────────────────────────────────────────────── */}
        <div
          aria-hidden="true"
          className="absolute bottom-0 right-0 z-10 h-[52px] sm:h-[60px] lg:h-[64px] w-[52px] sm:w-[60px] lg:w-[64px] group-hover:w-[155px] sm:group-hover:w-[175px] lg:group-hover:w-[190px] px-3.5 sm:px-4 lg:px-5 bg-white border-0 shadow-none rounded-none flex items-center justify-end transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] overflow-hidden pointer-events-none"
        >
          {/* Sliding Content: "View Project" reveals on hover */}
          <span className="font-titillium text-[13.5px] sm:text-[15px] lg:text-[15.5px] text-[#0A0909] font-normal max-w-0 opacity-0 group-hover:max-w-[120px] group-hover:opacity-100 group-hover:mr-2.5 sm:group-hover:mr-3.5 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] whitespace-nowrap overflow-hidden">
            {buttonLabel}
          </span>

          {/* Plus Icon: Thin minimal black icon, turns orange on hover */}
          <span className="flex items-center justify-center shrink-0 text-[#0A0909] group-hover:text-[#FA6400] transition-colors duration-500">
            <svg
              className="w-5 h-5 sm:w-[22px] sm:h-[22px] lg:w-[24px] lg:h-[24px] stroke-[1.2] transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:rotate-90"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="12" y1="5" x2="12" y2="19" />
              <line x1="5" y1="12" x2="19" y2="12" />
            </svg>
          </span>
        </div>
      </div>

      {/* ──────────────────────────────────────────────────────── */}
      {/* 3. CARD CONTENT & TYPOGRAPHY                             */}
      {/* Spacing: Image -> 20-24px -> Category -> 8-12px -> Title */}
      {/* ──────────────────────────────────────────────────────── */}
      <div className="pt-5 sm:pt-6 flex flex-col">
        {/* Category: Small, thin/regular, muted gray, approx 14-16px, clean */}
        <span className="font-titillium text-[14px] sm:text-[15px] font-normal text-[#737373] tracking-normal leading-normal block">
          {category}
        </span>

        {/* Title: Large, thin/regular, black, approx 28-32px desktop, elegant typography */}
        <h3 className="mt-2 sm:mt-2.5 font-titillium text-[22px] sm:text-[26px] lg:text-[30px] xl:text-[32px] font-normal text-[#0A0909] leading-[1.18] tracking-[-0.01em] group-hover:text-[#FA6400] transition-colors duration-300">
          {title}
        </h3>
      </div>
    </div>
  );

  if (destination) {
    return (
      <Link
        to={destination}
        onClick={onClick}
        className="block w-full focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FA6400]"
      >
        {cardContent}
      </Link>
    );
  }

  return (
    <div
      role={onClick ? 'button' : undefined}
      tabIndex={onClick ? 0 : undefined}
      onClick={onClick}
      onKeyDown={(e) => {
        if (onClick && (e.key === 'Enter' || e.key === ' ')) {
          e.preventDefault();
          onClick(e as unknown as React.MouseEvent);
        }
      }}
      className={onClick ? 'cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FA6400]' : ''}
    >
      {cardContent}
    </div>
  );
};
