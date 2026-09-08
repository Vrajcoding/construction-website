import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, ArrowLeft } from 'lucide-react';

export interface ProjectOverlayCardProps {
  title: string;
  category?: string;
  images?: string[];
  image?: string;
  location?: string;
  year?: string;
  description?: string;
  to?: string;
  className?: string;
  cardLabel?: string;
  onOpenContact?: () => void;
  aspectRatio?: string;
  showSliderControls?: boolean;
}

export const ProjectOverlayCard: React.FC<ProjectOverlayCardProps> = ({
  title,
  category = 'Projects',
  images,
  image = '/about-building-facade.jpg',
  to = '/work',
  className = '',
  cardLabel,
  aspectRatio = 'w-full h-full',
  showSliderControls = true,
}) => {
  // Normalize images array (fallback if single image provided)
  const imageList = images && images.length > 0 ? images : [
    image,
    '/about-building-facade.jpg',
    '/First-page-image.jpg',
    '/about-nyc-skyline.jpg',
    '/about-workers.jpg'
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const navigate = useNavigate();

  const handlePrevImage = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setCurrentIndex((prev) => (prev === 0 ? imageList.length - 1 : prev - 1));
  };

  const handleNextImage = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setCurrentIndex((prev) => (prev === imageList.length - 1 ? 0 : prev + 1));
  };

  const handleCardClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (to) {
      navigate(to);
    }
  };

  const activeImage = imageList[currentIndex];

  return (
    <div
      onClick={handleCardClick}
      className={`group relative overflow-hidden bg-neutral-900 select-none cursor-pointer ${aspectRatio} ${className}`}
    >
      {/* ──────────────────────────────────────────────────────── */}
      {/* 1. BACKGROUND IMAGE WITH SMOOTH HOVER ZOOM ANIMATION     */}
      {/* ──────────────────────────────────────────────────────── */}
      <AnimatePresence mode="wait">
        <motion.img
          key={activeImage}
          src={activeImage}
          alt={title}
          initial={{ opacity: 0.9, scale: 1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0.9 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-108"
        />
      </AnimatePresence>

      {/* Subtle vignette gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent pointer-events-none" />

      {/* ──────────────────────────────────────────────────────── */}
      {/* 2. HOVER SLIDER CONTROLS (LEFT & RIGHT ARROWS)           */}
      {/* ──────────────────────────────────────────────────────── */}
      {showSliderControls && imageList.length > 1 && (
        <>
          {/* Left Arrow Button */}
          <button
            onClick={handlePrevImage}
            aria-label="Previous image"
            className="absolute left-4 sm:left-6 top-1/2 -translate-y-1/2 w-11 h-11 sm:w-12 sm:h-12 bg-white text-[#0A0909] hover:bg-[#FA6400] hover:text-white flex items-center justify-center shadow-lg opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 z-20 cursor-pointer"
          >
            <ArrowLeft className="w-5 h-5 stroke-[1.75]" />
          </button>

          {/* Right Arrow Button */}
          <button
            onClick={handleNextImage}
            aria-label="Next image"
            className="absolute right-4 sm:right-6 top-1/2 -translate-y-1/2 w-11 h-11 sm:w-12 sm:h-12 bg-white text-[#0A0909] hover:bg-[#FA6400] hover:text-white flex items-center justify-center shadow-lg opacity-0 translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 z-20 cursor-pointer"
          >
            <ArrowRight className="w-5 h-5 stroke-[1.75]" />
          </button>

          {/* Slide Indicator Dots */}
          <div className="absolute bottom-4 left-6 flex items-center gap-1.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20">
            {imageList.map((_, idx) => (
              <button
                key={idx}
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  setCurrentIndex(idx);
                }}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  idx === currentIndex ? 'w-6 bg-[#FA6400]' : 'w-1.5 bg-white/70'
                }`}
              />
            ))}
          </div>
        </>
      )}

      {/* ──────────────────────────────────────────────────────── */}
      {/* 3. FLOATING OVERLAY CARD WITH SLIDING ORANGE FILL & ROTATION */}
      {/* ──────────────────────────────────────────────────────── */}
      <div className="absolute bottom-0 right-0 bg-white p-4 sm:p-5 flex items-center justify-between gap-6 min-w-[210px] sm:min-w-[250px] shadow-2xl z-20 overflow-hidden group/card">
        {/* Sliding Brand-Orange Background Fill Layer */}
        <div className="absolute inset-0 bg-[#FA6400] transition-transform duration-500 ease-out -translate-x-full group-hover:translate-x-0" />

        {/* Content Container (Layered above sliding background) */}
        <div className="relative z-10 space-y-0.5 transition-transform duration-300 group-hover:translate-x-1">
          <span className="font-archivo text-[10px] font-bold text-neutral-400 group-hover:text-white/80 tracking-[1.5px] uppercase block transition-colors duration-300">
            {category}
          </span>
          <span className="font-titillium text-[16px] sm:text-[18px] font-normal text-[#0A0909] group-hover:text-white transition-colors duration-300 block">
            {cardLabel || title}
          </span>
        </div>

        {/* Plus Icon with 90° Rotation & Color Shift */}
        <div className="relative z-10 flex items-center justify-center text-[#FA6400] group-hover:text-white transition-colors duration-300 shrink-0">
          <span className="text-[26px] sm:text-[28px] font-light leading-none transition-transform duration-500 ease-out group-hover:rotate-90 inline-block transform">
            +
          </span>
        </div>
      </div>
    </div>
  );
};
