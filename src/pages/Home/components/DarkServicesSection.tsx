import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Container } from '@/components/layout/Container';
import { SectionEyebrow } from '@/components/ui/SectionEyebrow';
import { DARK_SERVICES_LIST } from '@/data/mockData';

export const DarkServicesSection: React.FC = () => {
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

  return (
    <section className="mb-170 w-full py-150 bg-[#0A0909] text-white rounded-sm overflow-hidden">
      <Container>
        {/* Two Equal Columns with Scroll Reveal */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-20 items-start">
          
          {/* Left Column - Heading */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 space-y-6"
          >
            <SectionEyebrow label="Services" dark />

            <h2 className="font-titillium title-section text-normal text-white">
              Providing exceptional <br className="hidden sm:block" />
              construction services <br className="hidden sm:block" />
              and insight from the <br className="hidden sm:block" />
              start.
            </h2>
          </motion.div>

          {/* Right Column - Interactive List with Smooth Hover Animation */}
          <div className="lg:col-span-6 divide-y divide-neutral-800/80 pt-2">
            {DARK_SERVICES_LIST.map((item, idx) => {
              const isHovered = hoveredIdx === idx;
              return (
                <motion.div
                  key={item.number}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{
                    duration: 0.65,
                    delay: idx * 0.08,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  onMouseEnter={() => setHoveredIdx(idx)}
                  onMouseLeave={() => setHoveredIdx(null)}
                  onClick={() => {
                    window.location.href = `/services/${item.title.toLowerCase().replace(/\s*-\s*/g, '-').replace(/\s+/g, '-')}`;
                  }}
                  className="group cursor-pointer py-6 transition-all duration-500 select-none"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-6 sm:gap-8">
                      {/* Number */}
                      <span
                        className={`font-titillium text-small-12 transition-colors duration-400 ${
                          isHovered ? 'text-[#FA6400]' : 'text-neutral-400 group-hover:text-[#FA6400]'
                        }`}
                      >
                        {item.number}
                      </span>

                      {/* Title with Active Orange Underline Animation */}
                      <div className="relative inline-block">
                        <h3
                          className={`font-titillium title-semi text-normal transition-colors duration-400 ${
                            isHovered ? 'text-[#FA6400]' : 'text-white'
                          }`}
                        >
                          {item.title}
                        </h3>

                        {/* Orange underline bar */}
                        <span
                          className={`absolute bottom-[-4px] left-0 h-[2px] bg-[#FA6400] transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                            isHovered ? 'w-full' : 'w-0'
                          }`}
                        />
                      </div>
                    </div>

                    {/* Sliding Arrow Icon Animation */}
                    <div
                      className={`transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] transform ${
                        isHovered ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-3 pointer-events-none'
                      }`}
                    >
                      <ArrowRight className="w-5 h-5 text-[#FA6400] stroke-[1.2]" />
                    </div>
                  </div>

                  {/* Expandable description with Smooth Framer Motion */}
                  <AnimatePresence>
                    {isHovered && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{
                          height: { duration: 0.45, ease: [0.16, 1, 0.3, 1] },
                          opacity: { duration: 0.35, delay: 0.08, ease: 'easeOut' },
                        }}
                        className="overflow-hidden"
                      >
                        <div className="mt-4 pl-12 sm:pl-14 pr-4 font-titillium text-body-14 text-neutral-400 leading-relaxed">
                          {item.desc}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </div>

        </div>
      </Container>
    </section>
  );
};
