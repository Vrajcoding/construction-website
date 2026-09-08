import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';

interface SectionEyebrowProps {
  label: string;
  className?: string;
  dark?: boolean;
  animate?: boolean;
}

export const SectionEyebrow: React.FC<SectionEyebrowProps> = ({
  label,
  className = '',
  dark = false,
  animate = true,
}) => {
  const shouldReduceMotion = useReducedMotion();

  if (!animate || shouldReduceMotion) {
    return (
      <div className={`inline-flex items-center gap-3.5 mb-5 ${className}`}>
        <span
          className={`font-titillium text-body-18 text-normal tracking-wide ${
            dark ? 'text-neutral-300' : 'text-[#0A0909]'
          }`}
        >
          {label}
        </span>
        <span className="w-12 h-[2px] bg-[#FA6400] inline-block shrink-0" />
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: -25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      className={`inline-flex items-center gap-3.5 mb-5 ${className}`}
    >
      <span
        className={`font-titillium text-body-18 text-normal tracking-wide ${
          dark ? 'text-neutral-300' : 'text-[#0A0909]'
        }`}
      >
        {label}
      </span>
      <motion.span
        initial={{ width: 0, opacity: 0 }}
        whileInView={{ width: 48, opacity: 1 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className="h-[2px] bg-[#FA6400] inline-block shrink-0"
      />
    </motion.div>
  );
};
