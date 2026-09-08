import React from 'react';
import { motion } from 'framer-motion';
import { Container } from '@/components/layout/Container';

export const RedefineBannerSection: React.FC = () => {
  return (
    <section className="relative mb-170 w-full py-150 flex items-center justify-center bg-[#0A0909] overflow-hidden rounded-sm group/banner cursor-pointer">
      {/* Background Image with Hover Scale */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat pointer-events-none transition-transform duration-1000 group-hover/banner:scale-105"
        style={{
          backgroundImage: `url('/red-man-image.jpg')`,
        }}
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/45 pointer-events-none" />

      {/* Scroll Reveal Text */}
      <Container className="relative z-10 text-left">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="font-titillium title-long text-semibold text-white"
        >
          We redefine <br />
          what's possible
        </motion.h2>
      </Container>
    </section>
  );
};
