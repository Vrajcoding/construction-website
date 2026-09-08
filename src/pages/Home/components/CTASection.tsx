import React from 'react';
import { motion } from 'framer-motion';
import { Container } from '@/components/layout/Container';

interface CTASectionProps {
  onOpenContact: () => void;
}

export const CTASection: React.FC<CTASectionProps> = ({ onOpenContact }) => {
  return (
    <section className="relative w-full bg-[#0A0909] text-[#FFFFFF] overflow-hidden flex items-center group/cta">
      {/* Absolute positioned background image on the right half with hover zoom */}
      <div className="absolute right-0 top-0 bottom-0 w-full lg:w-[50%] h-full z-0 overflow-hidden pointer-events-none">
        <div className="w-full h-full relative">
          <img
            src="/about-cta-bg.jpg"
            alt="Modern dark architectural building roof line"
            className="w-full h-full object-cover grayscale opacity-90 transition-transform duration-1000 group-hover/cta:scale-105"
          />
          {/* Gradient overlay to seamlessly blend into the black background */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#0A0909] via-transparent to-transparent lg:block hidden w-44 -left-1" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0A0909] via-[#0A0909]/60 to-transparent lg:hidden block h-32 -bottom-1" />
        </div>
      </div>

      <Container className="relative z-10 py-16 sm:py-20 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column (Text & Buttons) with Scroll Reveal */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 space-y-8"
          >
            <h2 className="font-titillium text-[44px] sm:text-[56px] lg:text-[66px] xl:text-[72px] font-normal text-white leading-[1.05] tracking-[-0.015em]">
              Ready to <br />
              work together?
            </h2>

            <div className="flex flex-wrap items-center gap-4">
              <button
                onClick={onOpenContact}
                className="px-8 py-4 bg-[#1F1F1F] hover:bg-[#FA6400] text-white font-archivo text-[12px] font-bold tracking-[2px] uppercase transition-all duration-300 cursor-pointer shadow-sm hover:shadow-md"
              >
                BUILD A PROJECT WITH US
              </button>
              <button
                onClick={onOpenContact}
                className="px-8 py-4 bg-[#1F1F1F] hover:bg-white hover:text-[#0A0909] text-white font-archivo text-[12px] font-bold tracking-[2px] uppercase transition-all duration-300 cursor-pointer shadow-sm hover:shadow-md"
              >
                BUILD A CAREER WITH US
              </button>
            </div>
          </motion.div>

        </div>
      </Container>

      {/* Bottom Orange Accent line */}
      <div className="absolute bottom-0 left-0 right-0 h-1.5 bg-[#FA6400] z-20" />
    </section>
  );
};

