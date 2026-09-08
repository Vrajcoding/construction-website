import React from 'react';
import { motion } from 'framer-motion';
import { Container } from '@/components/layout/Container';
import { SectionEyebrow } from '@/components/ui/SectionEyebrow';

export const SustainabilitySection: React.FC = () => {
  return (
    <section className="mb-170 w-full bg-white overflow-hidden">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-20 items-center">

          {/* Left: Dedicated Image Composition Wrapper Centered in Left Column */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 flex items-center justify-center w-full"
          >
            {/* Dedicated Image Composition Wrapper */}
            <div className="relative w-full max-w-[420px] sm:max-w-[460px] lg:max-w-[480px] h-[400px] sm:h-[480px] lg:h-[520px] group/sustain cursor-pointer select-none">
              
              {/* Back Image (Upper-Right) */}
              <div className="absolute top-0 right-0 w-[240px] sm:w-[290px] lg:w-[330px] h-[310px] sm:h-[380px] lg:h-[430px] overflow-hidden bg-neutral-100 shadow-none z-0">
                <img
                  src="/about-hero-cityscape.jpg"
                  alt="City building facade"
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover/sustain:scale-105"
                />
              </div>

              {/* Front Overlapping Image (Lower-Left) */}
              <div className="absolute bottom-0 left-0 w-[190px] sm:w-[240px] lg:w-[270px] h-[190px] sm:h-[240px] lg:h-[270px] overflow-hidden bg-neutral-100 shadow-none z-10">
                <img
                  src="/white-peramid-image.png"
                  alt="Modern architectural facade"
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover/sustain:scale-105"
                />
              </div>

            </div>
          </motion.div>

          {/* Right: Text Column with Scroll Reveal */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 space-y-6"
          >
            <SectionEyebrow label="Our way" />

            <h2 className="font-titillium title-section text-normal text-[#0A0909]">
              Sustainability
            </h2>

            <div className="space-y-4 max-w-xl text-[#0A0909]">
              <p className="font-titillium text-body-14 text-neutral-800">
                Our Sustainable Construction Advisors (SCAs) provide sustainable construction expertise to our buildings, civil and industrial project teams. The SCAs work collaboratively with clients to develop cost-effective strategies to reduce the overall environmental impact of their projects.
              </p>
            </div>

            <div className="pt-2">
              <button
                onClick={() => {
                  window.location.href = '/about#sustainability';
                }}
                className="px-8 py-3.5 bg-[#0A0909] text-white font-archivo text-small-12 text-bold tracking-[2px] uppercase transition-colors hover:bg-[#FA6400] cursor-pointer rounded-none"
              >
                LEARN MORE
              </button>
            </div>
          </motion.div>

        </div>
      </Container>
    </section>
  );
};
