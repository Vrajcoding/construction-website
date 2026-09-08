import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { MOTION_TOKENS } from '@/tokens/motion';

interface MotionCardGridProps {
  children: React.ReactNode;
  className?: string;
  staggerDelay?: number;
}

export const MotionCardGrid: React.FC<MotionCardGridProps> = ({
  children,
  className = '',
  staggerDelay = MOTION_TOKENS.stagger.medium,
}) => {
  const shouldReduceMotion = useReducedMotion();

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: shouldReduceMotion ? 0 : staggerDelay,
      },
    },
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: '-60px' }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export const MotionCardItem: React.FC<{ children: React.ReactNode; className?: string }> = ({
  children,
  className = '',
}) => {
  const shouldReduceMotion = useReducedMotion();

  const itemVariants = {
    hidden: shouldReduceMotion
      ? { opacity: 0, y: 0 }
      : { opacity: 0, y: MOTION_TOKENS.distance.medium },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: MOTION_TOKENS.duration.slow,
        ease: MOTION_TOKENS.easing.editorial,
      },
    },
  };

  return (
    <motion.div variants={itemVariants} className={className}>
      {children}
    </motion.div>
  );
};
