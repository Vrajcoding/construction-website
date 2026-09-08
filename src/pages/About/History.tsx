import React, { useRef } from 'react';
import { Container } from '@/components/layout/Container';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';

interface HistoryProps {
  onOpenContact?: () => void;
}

export const History: React.FC<HistoryProps> = ({ onOpenContact }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Track scroll on the timeline section
  const timelineRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ["start 180px", "end 180px"]
  });

  // Smooth out the progress for the orange button
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 80,
    damping: 25,
    restDelta: 0.001
  });

  // Map the smooth progress to percentage top offset
  const progressHeight = useTransform(smoothProgress, [0, 1], ["0%", "100%"]);

  const timelineItems = [
    {
      year: "1982",
      title: "Konstruktion is founded in Boston",
      desc: "Chairman and CEO John Fish starts the company, managing construction of our first office building in Chelsea, Mass.",
      image: "/about-building-facade.jpg"
    },
    {
      year: "1989",
      title: "Home sweet headquarters",
      desc: "We move into our current headquarters at 65 Allerton Street, in Boston's Roxbury neighborhood.",
      image: "/about-hero-cityscape.jpg"
    },
    {
      year: "1995",
      title: "Partnering up",
      desc: "Konstruktion is awarded its first public-private partnership (P3) contract to build 15 schools in Nova Scotia. PCL continues to pursue opportunities to work with government partners through P3 projects in both Canada and the U.S., as one of the most experienced P3 builders in North America.",
      image: "/white-peramid-image.png"
    },
    {
      year: "2004",
      title: "Leed-ing the way",
      desc: "Demonstrating a commitment to sustainable construction, Konstruktion completes construction on its first Leadership in Energy and Environmental Design (LEED®) Gold certified project: the Seattle Terminal Radar Approach Facility in Washington.",
      image: "/about-workers.jpg"
    },
    {
      year: "2005",
      title: "Winning Workplaces",
      desc: "Konstruktion is named for the first time as one of USA's Best Managed Companies, which recognizes excellence in USA-owned and USA-managed companies with revenues over $25 million. In 2009, having won seven years in a row, PCL is inducted into the Best Managed Platinum Club.",
      isCustomBadge: true
    },
    {
      year: "2011",
      title: "Power of Solar",
      desc: "Demonstrating a commitment to renewable energy and sustainability, Konstruktion completes construction on its first solar energy project, the 9.3-megawatt Erie Ridge Solar Electric System in Ridgetown, Ontario.",
      image: "/First-page-image.jpg"
    }
  ];

  return (
    <div ref={containerRef} className="bg-white selection:bg-[#FA6400] selection:text-white mt-10">

      {/* ──────────────────────────────────────────────────────── */}
      {/* 1. HERO SECTION                                          */}
      {/* ──────────────────────────────────────────────────────── */}
      <section className="bg-white pt-8 sm:pt-12 lg:pt-16 mb-16 sm:mb-24">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start pb-8">
            {/* Left Col — Eyebrow + Heading */}
            <div className="lg:col-span-7">
              <div className="flex items-center gap-3 mb-4">
                <span className="font-archivo text-[11px] font-bold text-[#FA6400] tracking-[1.5px] uppercase">
                  History
                </span>
                <span className="w-10 h-[1.5px] bg-[#FA6400]" />
              </div>
              <h1 className="font-titillium text-[56px] sm:text-[76px] lg:text-[96px] xl:text-[108px] font-normal text-[#0A0909] leading-[1.02] tracking-[-0.02em] mt-2">
                A strong <br /> foundation
              </h1>
            </div>

            {/* Right Col — Supporting Paragraph */}
            <div className="lg:col-span-5 pt-4 lg:pt-16">
              <p className="font-titillium text-[15px] sm:text-[17px] lg:text-[18px] text-neutral-500 leading-[1.8] max-w-[480px]">
                From the day it all started, we've been a company dedicated to asking one question: "Why not?" Our work to anticipate and overcome every challenge has rooted our values and vaulted us to the top of our industry.
              </p>
            </div>
          </div>

          {/* Staggered overlapping hero images */}
          <div className="relative w-full max-w-[800px] mx-auto h-[320px] sm:h-[480px] lg:h-[520px] mt-12 mb-16 sm:mb-24">
            {/* Background Workers Image */}
            <div className="absolute right-0 top-0 w-[55%] h-[80%] overflow-hidden">
              <img
                src="/about-workers.jpg"
                alt="Construction workers with hard hats working on site"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Overlapping Blue Building Image */}
            <div className="absolute left-0 bottom-0 w-[50%] h-[75%] overflow-hidden border-8 border-white shadow-xl z-10">
              <img
                src="/First-page-image.jpg"
                alt="Blue architectural structural frame facade"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </Container>
      </section>

      {/* ──────────────────────────────────────────────────────── */}
      {/* 2. TIMELINE SECTION                                      */}
      {/* ──────────────────────────────────────────────────────── */}
      <section ref={timelineRef} className="relative bg-white pb-24 sm:pb-32">
        <Container className="relative">
          
          {/* Central Vertical Timeline Line */}
          <div className="absolute left-4 lg:left-1/2 top-0 bottom-0 w-[2px] bg-[#E5E5E0] -translate-x-[1px] z-0">
            {/* Active colored path */}
            <motion.div
              style={{ height: progressHeight }}
              className="absolute top-0 left-0 w-full bg-[#FA6400]"
            />
            {/* Sticky target circle container */}
            <div className="absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-0 pointer-events-none">
              <div className="sticky top-[180px] h-0 flex items-center justify-center">
                <div className="w-6 h-6 rounded-full border-2 border-[#FA6400] bg-white flex items-center justify-center shadow-md shrink-0">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#FA6400]" />
                </div>
              </div>
            </div>
          </div>

          {/* Timeline Grid List */}
          <div className="space-y-24 lg:space-y-36 relative z-10">
            {timelineItems.map((item, index) => {
              const isEven = index % 2 === 0;

              return (
                <div
                  key={item.year}
                  className={`grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start ${
                    isEven ? '' : 'lg:flex-row-reverse'
                  }`}
                >
                  {/* Left Side Column */}
                  <div
                    className={`pl-12 lg:pl-0 lg:col-span-5 flex flex-col ${
                      isEven ? 'lg:items-start lg:text-left' : 'lg:col-start-7 lg:items-start lg:text-left'
                    }`}
                  >
                    {/* Optional Image */}
                    {item.isCustomBadge ? (
                      <div className="mb-6">
                        <div className="w-[180px] h-[180px] rounded-full bg-[#FA6400] text-white flex flex-col items-center justify-center font-archivo p-4 text-center select-none shadow-md">
                          <span className="text-[10px] tracking-[2px] opacity-75 uppercase">USA</span>
                          <span className="text-[24px] font-bold tracking-tight leading-none my-1">TOP</span>
                          <span className="text-[14px] font-bold tracking-[1px] uppercase">WORKPLACES</span>
                          <span className="text-[12px] mt-1 border-t border-white/40 pt-1 px-4">2005</span>
                        </div>
                      </div>
                    ) : item.image ? (
                      <div className="w-full max-w-[340px] aspect-[4/3] sm:aspect-[1.4] overflow-hidden mb-6 shadow-sm">
                        <img
                          src={item.image}
                          alt={item.title}
                          className="w-full h-full object-cover filter grayscale"
                        />
                      </div>
                    ) : null}

                    {/* Year Eyebrow */}
                    <div className="flex items-center gap-3 mb-2">
                      <span className="font-archivo text-[14px] font-bold text-[#FA6400] tracking-[1px]">
                        {item.year}
                      </span>
                      <span className="w-8 h-[1px] bg-[#FA6400]" />
                    </div>

                    {/* Title */}
                    <h3 className="font-titillium text-[28px] sm:text-[34px] font-normal text-[#0A0909] leading-tight mb-3">
                      {item.title}
                    </h3>

                    {/* Description */}
                    <p className="font-titillium text-[14px] sm:text-[15px] text-neutral-500 leading-relaxed max-w-[420px]">
                      {item.desc}
                    </p>
                  </div>

                  {/* Empty spacer column on large screens to maintain alternating halves */}
                  <div className="hidden lg:block lg:col-span-2" />
                </div>
              );
            })}
          </div>

        </Container>
      </section>

      {/* ──────────────────────────────────────────────────────── */}
      {/* 3. READY TO WORK TOGETHER — CTA Section                  */}
      {/* ──────────────────────────────────────────────────────── */}
      <section className="bg-[#0A0909] text-white py-24 sm:py-32 lg:py-40 relative overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-right z-0 opacity-40 mix-blend-luminosity"
          style={{
            backgroundImage: 'url("/about-cta-bg.jpg")',
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0A0909] via-[#0A0909]/75 to-transparent z-1" />

        <Container className="relative z-10">
          <div className="space-y-10">
            <h2 className="font-titillium text-[48px] sm:text-[60px] lg:text-[76px] 2xl:text-[84px] font-normal text-white leading-[1.1] tracking-[-0.015em] max-w-3xl">
              Ready to <br />
              work together?
            </h2>

            <div className="flex flex-col sm:flex-row items-center gap-6 font-archivo">
              <button
                onClick={onOpenContact}
                className="w-full sm:w-auto inline-flex items-center justify-center px-10 py-5 bg-[#1F1F1F] text-white font-archivo text-[13px] font-bold tracking-[2px] uppercase border border-neutral-800 transition-all duration-300 hover:bg-[#FA6400] hover:border-[#FA6400] cursor-pointer"
              >
                BUILD A PROJECT WITH US
              </button>
              <button
                onClick={onOpenContact}
                className="w-full sm:w-auto inline-flex items-center justify-center px-10 py-5 bg-[#1F1F1F] text-white font-archivo text-[13px] font-bold tracking-[2px] uppercase border border-neutral-800 transition-all duration-300 hover:bg-[#FA6400] hover:border-[#FA6400] cursor-pointer"
              >
                BUILD A CAREER WITH US
              </button>
            </div>
          </div>
        </Container>

        <div className="absolute bottom-0 left-0 right-0 h-1.5 bg-[#FA6400]" />
      </section>

    </div>
  );
};
