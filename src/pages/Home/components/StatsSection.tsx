import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Container } from '@/components/layout/Container';
import { STATS_DATA } from '@/data/mockData';

// Counting Animation Component
const AnimatedCounter: React.FC<{ value: string }> = ({ value }) => {
  const numericMatch = value.match(/\d+/);
  const endNum = numericMatch ? parseInt(numericMatch[0], 10) : 0;
  const numStr = numericMatch ? numericMatch[0] : '';
  const numIndex = value.indexOf(numStr);
  const prefix = value.substring(0, numIndex);
  const suffix = value.substring(numIndex + numStr.length);

  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStarted(true);
        }
      },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!started) return;
    let startTimestamp: number | null = null;
    const duration = 1600;
    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * endNum));
      if (progress < 1) {
        requestAnimationFrame(step);
      } else {
        setCount(endNum);
      }
    };
    requestAnimationFrame(step);
  }, [started, endNum]);

  return (
    <span ref={ref}>
      {prefix}{count}{suffix}
    </span>
  );
};

export const StatsSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'innovation' | 'foundation'>('innovation');

  return (
    <section 
      className="relative mb-170 w-full bg-white overflow-hidden py-8 lg:py-12 bg-no-repeat rounded-sm"
      style={{
        backgroundImage: 'url("https://konstruktion.vamtam.com/wp-content/uploads/2022/10/pexels-martin-péchy-2763969.png")',
        backgroundPosition: 'center bottom',
        backgroundSize: 'auto 100%'
      }}
    >
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-end">
          
          {/* Left Column (4 cols) - Scroll Reveal */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-4 space-y-6 relative z-10"
          >
            <h2 className="font-titillium title-section text-normal text-[#0A0909]">
              Building for <br />
              the best.
            </h2>

            <p className="font-titillium text-body-14 text-neutral-700 max-w-md">
              To explore and go after new ways to build, we've gathered the people, innovations, and partnerships that can anticipate and overcome new challenges.
            </p>

            {/* Accordion / Tab Items */}
            <div className="space-y-4 pt-4 max-w-md">
              <button
                onClick={() => setActiveTab('innovation')}
                className={`w-full text-left font-titillium title-semi text-normal transition-colors cursor-pointer py-1 ${
                  activeTab === 'innovation' ? 'text-[#0A0909]' : 'text-neutral-500 hover:text-[#0A0909]'
                }`}
              >
                Innovation
              </button>
              {activeTab === 'innovation' && (
                <p className="font-titillium text-body-14 text-neutral-600 pl-2">
                  Deploying building information modeling (BIM) and prefabrication modules to accelerate timelines.
                </p>
              )}

              <div className="w-full h-[1px] bg-neutral-200" />

              <button
                onClick={() => setActiveTab('foundation')}
                className={`w-full text-left font-titillium title-semi text-normal transition-colors cursor-pointer py-1 ${
                  activeTab === 'foundation' ? 'text-[#0A0909]' : 'text-neutral-500 hover:text-[#0A0909]'
                }`}
              >
                A strong foundation
              </button>
              {activeTab === 'foundation' && (
                <p className="font-titillium text-body-14 text-neutral-600 pl-2">
                  Built on 20 years of financial liquidity and zero safety lost-time incidents across 30+ states.
                </p>
              )}
              <div className="w-full h-[1px] bg-neutral-200" />
            </div>
          </motion.div>

          {/* Right Column - Stats List with Scroll Reveal */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-4 lg:col-start-9 space-y-10 relative z-10"
          >
            {STATS_DATA.map((stat) => (
              <div key={stat.label} className="border-b border-neutral-300 pb-8">
                <div className="font-titillium title-section text-normal text-[#0A0909] mb-2">
                  <AnimatedCounter value={stat.value} />
                </div>
                <div className="font-titillium text-body-14 text-neutral-600">
                  {stat.label}
                </div>
              </div>
            ))}
          </motion.div>

        </div>
      </Container>
    </section>
  );
};
