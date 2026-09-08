import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';

interface ScrollRevealProps {
  children: React.ReactNode;
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right';
  className?: string;
  duration?: number;
}

export const ScrollReveal: React.FC<ScrollRevealProps> = ({
  children,
  delay = 0,
  direction = 'up',
  className = '',
  duration = 0.75,
}) => {
  const shouldReduceMotion = useReducedMotion();

  const getInitialPosition = () => {
    if (shouldReduceMotion) return { opacity: 0, y: 0, x: 0 };

    switch (direction) {
      case 'up':
        return { opacity: 0, y: 40, x: 0 };
      case 'down':
        return { opacity: 0, y: -40, x: 0 };
      case 'left':
        return { opacity: 0, y: 0, x: 40 };
      case 'right':
        return { opacity: 0, y: 0, x: -40 };
      default:
        return { opacity: 0, y: 40, x: 0 };
    }
  };

  return (
    <motion.div
      initial={getInitialPosition()}
      whileInView={{ opacity: 1, y: 0, x: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{
        duration: shouldReduceMotion ? 0.2 : duration,
        delay: shouldReduceMotion ? 0 : delay,
        ease: [0.16, 1, 0.3, 1],
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};
