import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { MOTION_TOKENS } from '@/tokens/motion';

interface MotionRevealProps {
  children: React.ReactNode;
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right' | 'none';
  className?: string;
  duration?: number;
}

export const MotionReveal: React.FC<MotionRevealProps> = ({
  children,
  delay = 0,
  direction = 'up',
  className = '',
  duration = MOTION_TOKENS.duration.slow,
}) => {
  const shouldReduceMotion = useReducedMotion();

  const getInitial = () => {
    if (shouldReduceMotion) return { opacity: 0, y: 0, x: 0 };

    switch (direction) {
      case 'up':
        return { opacity: 0, y: MOTION_TOKENS.distance.medium };
      case 'down':
        return { opacity: 0, y: -MOTION_TOKENS.distance.medium };
      case 'left':
        return { opacity: 0, x: MOTION_TOKENS.distance.medium, y: 0 };
      case 'right':
        return { opacity: 0, x: -MOTION_TOKENS.distance.medium, y: 0 };
      case 'none':
        return { opacity: 0, y: 0, x: 0 };
      default:
        return { opacity: 0, y: MOTION_TOKENS.distance.medium };
    }
  };

  return (
    <motion.div
      initial={getInitial()}
      whileInView={{ opacity: 1, y: 0, x: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{
        duration: shouldReduceMotion ? 0.2 : duration,
        delay: shouldReduceMotion ? 0 : delay,
        ease: MOTION_TOKENS.easing.editorial,
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};
