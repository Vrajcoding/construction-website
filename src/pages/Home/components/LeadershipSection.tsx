import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Container } from '@/components/layout/Container';

const LEADERSHIP_MEMBERS = [
  {
    id: 'john-smith',
    name: 'John Smith',
    role: 'Executive Vice President & General Counsel',
    image: '/red-man-image.jpg',
    bio: '"We favorably impact people, families and communities with our work, our projects and our charitable efforts. It\'s an exciting place to be every day and our opportunities to contribute will grow as we continue to grow around the United States."'
  },
  {
    id: 'marcus-vance',
    name: 'Marcus Vance',
    role: 'Chief Operating Officer — Civil Infrastructure',
    image: '/marcus-vance.jpg',
    bio: '"Our commitment to engineering excellence and workplace safety shapes every highway, bridge, and transit hub we construct across North America."'
  },
  {
    id: 'elena-rostova',
    name: 'Elena Rostova',
    role: 'Head of Sustainable Construction',
    image: '/elena-rostova.jpg',
    bio: '"Pioneering low-carbon concrete and carbon-neutral building techniques ensures our structural legacy protects communities for generations."'
  },
  {
    id: 'david-chen',
    name: 'David Chen',
    role: 'Director of Virtual Design & BIM',
    image: '/david-chen.jpg',
    bio: '"By leveraging digital twin simulations and parametric modeling, we eliminate field friction before the first shovel touches the ground."'
  }
];

export const LeadershipSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? LEADERSHIP_MEMBERS.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === LEADERSHIP_MEMBERS.length - 1 ? 0 : prev + 1));
  };

  const activeLeader = LEADERSHIP_MEMBERS[currentIndex];

  return (
    <section id="leadership" className="mb-170 py-8 sm:py-12 lg:py-16 bg-white overflow-hidden group/leader">
      <Container className="relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center relative">

          {/* Left Column (4 cols) - Heading & LEARN MORE Button */}
          <div className="lg:col-span-4 flex flex-col justify-center items-start">
            <h2 className="font-titillium text-[40px] sm:text-[48px] lg:text-[56px] xl:text-[62px] font-normal text-[#0A0909] leading-[1.04] tracking-[-0.018em] mb-7">
              Meet our <br />
              leadership
            </h2>

            <div>
              <Link
                to="/leadership"
                className="inline-block px-7 py-3 bg-[#0A0909] text-white font-archivo text-[11.5px] font-bold tracking-[2px] uppercase transition-colors duration-300 hover:bg-[#FA6400]"
              >
                LEARN MORE
              </Link>
            </div>
          </div>

          {/* Center Column (4 cols) - Leader Portrait Image Carousel + Left Arrow + Bottom Line */}
          <div className="lg:col-span-4 flex flex-col items-center justify-center relative">

            {/* Left Carousel Arrow (←) - Revealed on hover */}
            <button
              onClick={handlePrev}
              className="absolute left-0 lg:-left-5 top-1/2 -translate-y-1/2 z-30 w-11 h-11 bg-white hover:bg-[#0A0909] text-[#222222] hover:text-white border border-[#E0E0E0] flex items-center justify-center transition-all duration-300 cursor-pointer shadow-sm opacity-100 lg:opacity-0 lg:group-hover/leader:opacity-100"
              aria-label="Previous leader"
            >
              <ArrowLeft className="w-5 h-5 stroke-[1.4]" />
            </button>

            {/* Main Portrait Frame with smooth hover expand */}
            <div className="w-full max-w-[360px] lg:max-w-[400px] aspect-[3.8/5] overflow-hidden bg-neutral-100 relative group/img cursor-pointer shadow-sm">
              <AnimatePresence mode="wait">
                <motion.img
                  key={activeLeader.id}
                  src={activeLeader.image}
                  alt={activeLeader.name}
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 1.02 }}
                  transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                  className="w-full h-full object-cover grayscale object-top absolute inset-0 transition-transform duration-700 ease-out group-hover/leader:scale-105 group-hover/img:scale-105"
                />
              </AnimatePresence>
            </div>

            {/* Bottom Progress Bar */}
            <div className="w-full max-w-[360px] lg:max-w-[400px] h-[2px] bg-[#E8E8E8] mt-3 relative overflow-hidden">
              <div
                className="h-full bg-[#FA6400] transition-all duration-500 ease-out"
                style={{
                  width: `${100 / LEADERSHIP_MEMBERS.length}%`,
                  transform: `translateX(${currentIndex * 100}%)`,
                }}
              />
            </div>
          </div>

          {/* Right Column (4 cols) - Leader Info + Floating Right Arrow (→) */}
          <div className="lg:col-span-4 flex items-center justify-between lg:pl-6 xl:pl-8 min-h-[240px] relative">
            <div className="flex flex-col justify-center flex-1">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeLeader.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                >
                  <h3 className="font-titillium text-[26px] sm:text-[30px] lg:text-[32px] font-normal text-[#0A0909] leading-tight">
                    {activeLeader.name}
                  </h3>

                  <p className="font-archivo text-[11px] sm:text-[11.5px] font-bold text-[#0A0909] mt-2 mb-4 tracking-[1.5px] uppercase">
                    {activeLeader.role}
                  </p>

                  <blockquote className="font-titillium text-[13.5px] sm:text-[14px] text-[#555555] leading-[1.68] max-w-[390px]">
                    {activeLeader.bio}
                  </blockquote>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Right Carousel Arrow (→) - Revealed on hover */}
            <button
              onClick={handleNext}
              className="absolute right-0 lg:-right-4 xl:-right-6 top-1/2 -translate-y-1/2 z-30 w-11 h-11 bg-white hover:bg-[#0A0909] text-[#222222] hover:text-white border border-[#E0E0E0] flex items-center justify-center transition-all duration-300 cursor-pointer shadow-sm opacity-100 lg:opacity-0 lg:group-hover/leader:opacity-100"
              aria-label="Next leader"
            >
              <ArrowRight className="w-5 h-5 stroke-[1.4]" />
            </button>

          </div>

        </div>
      </Container>
    </section>
  );
};

