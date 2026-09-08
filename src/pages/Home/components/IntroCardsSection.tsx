import React from 'react';
import { motion } from 'framer-motion';
import { Container } from '@/components/layout/Container';
import { INTRO_CARDS } from '@/data/mockData';

export const IntroCardsSection: React.FC = () => {
  return (
    <section className="bg-white mb-170 w-full overflow-hidden">
      <Container>
        {/* 3-Column Clean Text Grid with Scroll Reveal */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-16">
          {INTRO_CARDS.map((card, idx) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{
                duration: 0.7,
                delay: idx * 0.15,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="group space-y-4 relative pb-4 cursor-pointer"
            >
              <span className="font-titillium text-small-12 text-normal text-neutral-500 block uppercase tracking-[1.2px] group-hover:text-[#FA6400] transition-colors duration-300">
                {card.title}
              </span>

              <p className="font-titillium title-semi text-normal text-[#0A0909]">
                {card.description}
              </p>

              {/* Bottom Subtle Hover Accent Line */}
              {/* <div className="h-[2px] w-0 bg-[#FA6400] group-hover:w-full transition-all duration-500 ease-out absolute bottom-0 left-0" /> */}
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
};
