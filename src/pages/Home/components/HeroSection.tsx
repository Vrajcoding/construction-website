import React, { useState, useEffect } from 'react';
import { Container } from '@/components/layout/Container';
import { motion, AnimatePresence } from 'framer-motion';

interface HeroSectionProps {
  onOpenContact: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenContact }) => {
  const words = ['Innovation.', 'Innovate.'];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % words.length);
    }, 3200);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="w-full flex justify-center bg-white">
      <section className="relative w-full mb-170 flex flex-col justify-between bg-[#0A0909] overflow-visible rounded-sm py-12 lg:py-20">
        {/* Background Architectural Artwork */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat pointer-events-none"
          style={{
            backgroundImage: `url('/First-page-image.jpg')`,
          }}
        />

        {/* Subtle Overlay */}
        <div className="absolute inset-0 bg-black/20 pointer-events-none" />

        <Container className="relative z-10 mt-32 sm:mt-48 lg:mt-64 mb-8 sm:mb-12 flex flex-col justify-between flex-1">
          {/* Main Hero Headline & Action: Pushed to bottom (mt-auto) with 120px font size and animation */}
          <div className="mt-auto mb-2 space-y-6 lg:space-y-10 w-full py-2">
            <h1 className="font-titillium text-[52px] sm:text-[76px] lg:text-[104px] xl:text-[120px] font-semibold text-white leading-[1.0] tracking-tight drop-shadow-md flex flex-col">
              <span>Build. Invest.</span>
              <span className="relative block h-[56px] sm:h-[80px] lg:h-[110px] xl:h-[128px] overflow-hidden">
                <AnimatePresence mode="wait">
                  <motion.span
                    key={words[index]}
                    initial={{ y: 50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -50, opacity: 0 }}
                    transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                    className="absolute left-0 top-0 block text-white"
                  >
                    {words[index]}
                  </motion.span>
                </AnimatePresence>
              </span>
            </h1>

            {/* Learn More Action Button */}
            <div className="pt-2">
              <button
                onClick={() => {
                  const el = document.getElementById('projects');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }}
                className="px-8 py-3.5 bg-white text-[#0A0909] font-archivo text-small-12 text-bold tracking-[1.2px] uppercase transition-all duration-300 hover:bg-[#FA6400] hover:text-white cursor-pointer shadow-none rounded-none"
              >
                LEARN MORE
              </button>
            </div>
          </div>
        </Container>

        {/* Floating "Let's work together" Banner — Increased width, 32px title, 24px contact us */}
        <div className="absolute right-0 bottom-0 z-20 w-full sm:w-[420px] md:w-[480px] lg:w-[540px] xl:w-[580px]">
          <div className="bg-white text-[#0A0909] p-8 sm:p-10 lg:p-12 xl:p-14 shadow-none border-none rounded-none">
            <h3 className="font-titillium text-[28px] sm:text-[32px] font-normal text-[#0A0909] leading-[1.18] mb-6 sm:mb-8">
              Let’s work <br />
              <span className="inline-flex items-center gap-3">
                together
                <span className="w-12 h-[2px] bg-[#FA6400] inline-block shrink-0" />
              </span>
            </h3>

            <div>
              <button
                onClick={onOpenContact}
                className="font-titillium text-[20px] sm:text-[24px] font-normal text-[#0A0909] hover:text-[#FA6400] transition-colors cursor-pointer block text-left"
              >
                Contact us
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
