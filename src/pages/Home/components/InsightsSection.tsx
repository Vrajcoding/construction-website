import React, { useState } from 'react';
import { Container } from '@/components/layout/Container';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { NEWS_ARTICLES, type NewsItem } from '@/data/mockData';

interface InsightsSectionProps {
  onSelectArticle: (article: NewsItem) => void;
}

export const InsightsSection: React.FC<InsightsSectionProps> = ({ onSelectArticle }) => {
  const [currentPage, setCurrentPage] = useState(0);
  const [direction, setDirection] = useState(0);
  const itemsPerPage = 2;
  const totalPages = Math.ceil(NEWS_ARTICLES.length / itemsPerPage);

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    setDirection(-1);
    setCurrentPage((prev) => (prev === 0 ? totalPages - 1 : prev - 1));
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    setDirection(1);
    setCurrentPage((prev) => (prev === totalPages - 1 ? 0 : prev + 1));
  };

  const startIndex = currentPage * itemsPerPage;
  const currentArticles = NEWS_ARTICLES.slice(startIndex, startIndex + itemsPerPage);

  const slideVariants = {
    enter: (dir: number) => ({
      x: dir > 0 ? 60 : -60,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (dir: number) => ({
      x: dir > 0 ? -60 : 60,
      opacity: 0,
    }),
  };

  return (
    <section id="insights" className="mb-170 w-full bg-white overflow-hidden">
      <Container>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column (4 cols) - Eyebrow with Orange Dash, Title, & Paragraph matching Reference */}
          <div className="lg:col-span-4 flex flex-col justify-start items-start pl-2 sm:pl-6 lg:pl-10">
            {/* News Eyebrow + Orange Line */}
            <div className="flex items-center gap-3 mb-4">
              <span className="font-titillium text-small-12 text-bold tracking-[1.5px] uppercase text-[#0A0909]">
                News
              </span>
              <span className="w-8 h-[2px] bg-[#FA6400] inline-block" />
            </div>

            <h2 className="font-titillium title-section text-normal text-[#0A0909] mb-4">
              Insights
            </h2>

            <p className="font-titillium text-body-14 text-[#333333] max-w-[280px] leading-relaxed">
              Our people are dedicated to finding solutions to every challenge. That spirit makes for some great stories.
            </p>
          </div>

          {/* Right Column (8 cols) - 2 Portrait Rectangle Cards Carousel + Hover Navigation */}
          <div className="lg:col-span-8 relative group/carousel">
            {/* Left Carousel Arrow (←) - Reveals Only on Carousel Hover */}
            <button
              onClick={handlePrev}
              className="absolute -left-5 sm:-left-7 top-[38%] -translate-y-1/2 z-30 w-14 h-14 sm:w-16 sm:h-16 bg-white hover:bg-[#0A0909] text-[#222222] hover:text-white border border-[#E0E0E0] shadow-md flex items-center justify-center cursor-pointer transition-all duration-300 opacity-0 group-hover/carousel:opacity-100 group-hover/carousel:translate-x-0 -translate-x-2 pointer-events-none group-hover/carousel:pointer-events-auto"
              aria-label="Previous articles"
            >
              <ArrowLeft className="w-6 h-6 stroke-[1.2]" />
            </button>

            {/* Right Carousel Arrow (→) - Reveals Only on Carousel Hover */}
            <button
              onClick={handleNext}
              className="absolute -right-5 sm:-right-7 top-[38%] -translate-y-1/2 z-30 w-14 h-14 sm:w-16 sm:h-16 bg-white hover:bg-[#0A0909] text-[#222222] hover:text-white border border-[#E0E0E0] shadow-md flex items-center justify-center cursor-pointer transition-all duration-300 opacity-0 group-hover/carousel:opacity-100 group-hover/carousel:translate-x-0 translate-x-2 pointer-events-none group-hover/carousel:pointer-events-auto"
              aria-label="Next articles"
            >
              <ArrowRight className="w-6 h-6 stroke-[1.2]" />
            </button>

            {/* Animated Cards Grid Container */}
            <div className="relative min-h-[460px] overflow-hidden">
              <AnimatePresence custom={direction} mode="wait">
                <motion.div
                  key={currentPage}
                  custom={direction}
                  variants={slideVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{
                    x: { type: 'spring', stiffness: 260, damping: 30 },
                    opacity: { duration: 0.35, ease: [0.16, 1, 0.3, 1] },
                  }}
                  className="grid grid-cols-1 sm:grid-cols-2 gap-8 lg:gap-12"
                >
                  {currentArticles.map((article) => (
                    <article
                      key={article.id}
                      onClick={() => onSelectArticle(article)}
                      className="group cursor-pointer flex flex-col justify-start"
                    >
                      {/* Aspect Ratio 0.83 / 1 Tall Portrait Rectangle Image Frame */}
                      <div className="aspect-[0.83/1] w-full overflow-hidden bg-neutral-100 mb-5 relative shadow-none">
                        <img
                          src={article.image}
                          alt={article.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]"
                        />
                      </div>

                      {/* Category Sub-label */}
                      <span className="font-titillium text-body-14 text-neutral-400 font-normal mb-2 block">
                        {article.category}
                      </span>

                      {/* Headline Title */}
                      <h3 className="font-titillium title-semi text-normal text-[#0A0909] group-hover:text-[#FA6400] transition-colors duration-300 leading-tight">
                        {article.title}
                      </h3>
                    </article>
                  ))}
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
