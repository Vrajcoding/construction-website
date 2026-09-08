import React, { useState } from 'react';
import { Container } from '@/components/layout/Container';
import { SectionEyebrow } from '@/components/ui/SectionEyebrow';
import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { X, Calendar } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { CTASection } from '@/pages/Home/components/CTASection';

interface NewsItem {
  id: string;
  title: string;
  category: string;
  image: string;
  excerpt: string;
  date: string;
  content: string;
}

const NEWS_DATA: NewsItem[] = [
  {
    id: 'sustainability-puzzle',
    title: 'Solving the puzzle of sustainability in higher education construction',
    category: 'Community',
    image: '/about-building-facade.jpg',
    excerpt: 'Higher education buildings require massive carbon targets. We look at the collaborative strategies that developers are deploying to meet these challenges.',
    date: 'August 24, 2026',
    content: 'At Konstruktion, continuous research into carbon offset aggregates, prefabricated modular timber framing, and autonomous drone surveying allows our project managers to reduce schedule risks while upholding pristine safety standards.'
  },
  {
    id: 'thompson-hollywood',
    title: "Thompson Hollywood Hotel Awarded 'Best Commercial Project' at Pacific Coast",
    category: 'Community',
    image: '/First-page-image.jpg',
    excerpt: 'The annual Pacific Coast Builders Conference awards recognize the very best in commercial architectural craft and design engineering.',
    date: 'August 18, 2026',
    content: 'Our hotel and hospitality teams received top accolades for delivering structural excellence, modern glass facade treatments, and high-end guest amenities ahead of schedule.'
  },
  {
    id: 'aviation-construction',
    title: 'Aviation Construction Reaching New Heights',
    category: 'Community',
    image: '/about-hero-cityscape.jpg',
    excerpt: 'Airport infrastructure modernization projects require complex staging, advanced planning, and close coordination with aviation agencies.',
    date: 'August 12, 2026',
    content: 'Managing live airport runway enhancements requires rigorous coordination, security clearing, and meticulous logistics to avoid delays in flight operations.'
  },
  {
    id: 'sustainable-concrete',
    title: 'Sustainable Aggregates for Modern Concrete',
    category: 'Research',
    image: '/red-man-image.jpg',
    excerpt: 'Our research teams explore alternative carbon offset aggregates and recycled materials to dramatically lower overall carbon footprints.',
    date: 'August 05, 2026',
    content: 'By replacing standard sand mixtures with eco-friendly substitutes, we are building structures that lock carbon while maintaining high load-bearing capacity.'
  },
  {
    id: 'safety-leadership',
    title: 'Safety Leadership in Commercial Developments',
    category: 'Leadership',
    image: '/about-workers.jpg',
    excerpt: 'By prioritizing team safety over check-box processes, our site superintendents build stronger, safer bonds with subcontractors.',
    date: 'July 29, 2026',
    content: 'Our safety culture values personal relationships and teamwork, leading to smarter building practices and zero-incident work zones.'
  }
];

const FEATURED_POST = {
  id: 'winthrop-center',
  title: 'Winthrop Center Will Be One of the World’s Largest Passive House Buildings',
  excerpt: 'In design, sustainability, and programming, the Boston University Center for Computing & Data Sciences marks the future of construction in higher education. The 19-story, 350,000-square-foot structure sets a new benchmark.',
  category: 'Sustainability',
  image: '/white-peramid-image.png',
  date: 'August 31, 2026',
  content: 'The Winthrop Center project stands out as a global model of energy efficiency and indoor air quality, utilizing passive solar designs, triple-glazed insulation, and recovery ventilation.'
};

interface NewsProps {
  onOpenContact?: () => void;
}

export const News: React.FC<NewsProps> = ({ onOpenContact }) => {
  const [selectedArticle, setSelectedArticle] = useState<NewsItem | null>(null);

  const handleOpenFeatured = () => {
    setSelectedArticle({
      id: FEATURED_POST.id,
      title: FEATURED_POST.title,
      category: FEATURED_POST.category,
      image: FEATURED_POST.image,
      excerpt: FEATURED_POST.excerpt,
      date: FEATURED_POST.date,
      content: FEATURED_POST.content
    });
  };

  return (
    <div className="pt-0 pb-0 bg-white selection:bg-[#FA6400] selection:text-white">

      {/* ──────────────────────────────────────────────────────── */}
      {/* 1. HERO SECTION — Matches About page header design     */}
      {/* ──────────────────────────────────────────────────────── */}
      <section className="bg-white overflow-hidden">
        <ScrollReveal>
          <Container className="pt-2 pb-6 lg:pb-10 min-h-[260px] lg:min-h-[280px] flex items-center">
            <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 xl:gap-24 items-end">
              {/* Left Column: Eyebrow + Heading */}
              <div className="lg:col-span-7 flex flex-col justify-start">
                <SectionEyebrow label="Insights" className="mb-2" />
                <h1 className="font-titillium text-[56px] sm:text-[68px] lg:text-[76px] xl:text-[80px] font-normal text-[#0A0909] leading-[0.98] tracking-[-0.02em] mt-1">
                  News
                </h1>
              </div>

              {/* Right Column: Paragraph */}
              <div className="lg:col-span-5 flex items-end lg:pl-6 xl:pl-10 pb-1">
                <p className="font-titillium text-[14px] sm:text-[14.5px] lg:text-[15px] text-[#222222] leading-[1.6] max-w-[460px]">
                  Our people are dedicated to finding solutions to every challenge. That spirit makes for some great stories.
                </p>
              </div>
            </div>
          </Container>
        </ScrollReveal>
      </section>

      {/* ──────────────────────────────────────────────────────── */}
      {/* 2. FEATURED POST — 2 Column Split Banner (Full Height/Width) */}
      {/* ──────────────────────────────────────────────────────── */}
      <section className="bg-white mb-16 sm:mb-24 lg:mb-28 overflow-hidden w-full">
        <Container>
          <ScrollReveal delay={0.15}>
            <div
              onClick={handleOpenFeatured}
              className="w-full min-h-[440px] sm:min-h-[500px] lg:min-h-[580px] xl:min-h-[620px] grid grid-cols-1 lg:grid-cols-12 gap-0 cursor-pointer group bg-[#F7F7F5] overflow-hidden items-stretch"
            >
              {/* Left Column — Content (Full height flex centered) */}
              <div className="lg:col-span-7 p-8 sm:p-12 lg:p-16 xl:p-20 flex flex-col justify-center bg-[#F7F7F5] w-full h-full">
                <h2 className="font-titillium text-[24px] sm:text-[28px] lg:text-[32px] font-normal leading-[1.28] tracking-[-0.015em] text-[#0A0909] max-w-[500px]">
                  <span className="inline box-decoration-clone text-[#0A0909] group-hover:text-[#FA6400] bg-gradient-to-r from-[#FA6400] to-[#FA6400] bg-[length:0%_2px] bg-left-bottom bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] pb-1 cursor-pointer">
                    {FEATURED_POST.title}
                  </span>
                </h2>
                <p className="font-titillium text-[13.5px] sm:text-[14px] text-[#555555] leading-[1.7] max-w-[440px] mt-4 sm:mt-5">
                  {FEATURED_POST.excerpt}
                </p>
              </div>

              {/* Right Column — Real Image Column (Fills 100% height and width) */}
              <div className="lg:col-span-5 w-full h-full min-h-[340px] sm:min-h-[420px] lg:min-h-full overflow-hidden bg-[#F7F7F5] relative">
                <img
                  src={FEATURED_POST.image}
                  alt={FEATURED_POST.title}
                  className="w-full h-full object-cover object-center absolute inset-0 transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105"
                />
              </div>
            </div>
          </ScrollReveal>
        </Container>
      </section>

      {/* ──────────────────────────────────────────────────────── */}
      {/* 3. ARTICLES GRID — Clean 3-column cards without overlays */}
      {/* ──────────────────────────────────────────────────────── */}
      <section className="bg-white mb-16 sm:mb-24 lg:mb-32 xl:mb-36 overflow-hidden">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10 lg:gap-12">
            {NEWS_DATA.map((article, idx) => (
              <ScrollReveal key={article.id} delay={idx * 0.12}>
                <div
                  onClick={() => setSelectedArticle(article)}
                  className="group space-y-3 cursor-pointer flex flex-col justify-start"
                >
                  {/* Image Frame with Smooth Scale Hover (Exact 354.73 x 424.2 Portrait Ratio) */}
                  <div className="w-full aspect-[355/424] overflow-hidden relative bg-neutral-100">
                    <img
                      src={article.image}
                      alt={article.title}
                      className="w-full h-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105"
                    />
                  </div>

                  {/* Meta & Title matching Visual Target */}
                  <div className="pt-2">
                    <span className="font-titillium text-[13px] sm:text-[13.5px] text-[#777777] font-normal block">
                      {article.category}
                    </span>
                    <h3 className="font-titillium text-[18px] sm:text-[20px] lg:text-[21px] font-normal text-[#0A0909] leading-[1.3] mt-1.5">
                      <span className="inline box-decoration-clone text-[#0A0909] group-hover:text-[#FA6400] bg-gradient-to-r from-[#FA6400] to-[#FA6400] bg-[length:0%_2px] bg-left-bottom bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] pb-0.5 cursor-pointer">
                        {article.title}
                      </span>
                    </h3>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </Container>
      </section>

      {/* ──────────────────────────────────────────────────────── */}
      {/* 4. READY TO WORK TOGETHER — CTA Section                  */}
      {/* ──────────────────────────────────────────────────────── */}
      <CTASection onOpenContact={onOpenContact || (() => {})} />

      {/* ──────────────────────────────────────────────────────── */}
      {/* 5. ARTICLE DETAIL MODAL WITH ANIMATION                   */}
      {/* ──────────────────────────────────────────────────────── */}
      <AnimatePresence>
        {selectedArticle && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="bg-white max-w-2xl w-full p-6 sm:p-8 relative border-t-4 border-[#FA6400] shadow-2xl"
            >
              <button
                onClick={() => setSelectedArticle(null)}
                className="absolute top-4 right-4 text-neutral-400 hover:text-black transition-colors"
                aria-label="Close modal"
              >
                <X className="w-6 h-6" />
              </button>
              <div className="aspect-video overflow-hidden mb-6 bg-neutral-100">
                <img
                  src={selectedArticle.image}
                  alt={selectedArticle.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <span className="font-archivo text-[11px] font-bold text-[#FA6400] uppercase tracking-[1.5px] block mb-1">
                {selectedArticle.category}
              </span>
              <h3 className="font-titillium text-[24px] sm:text-[28px] font-normal text-[#0A0909] mb-3">
                {selectedArticle.title}
              </h3>
              <div className="flex items-center gap-6 text-xs text-neutral-500 font-semibold mb-4 font-archivo">
                <span className="flex items-center gap-1.5">
                  <Calendar className="w-4 h-4 text-[#FA6400]" /> {selectedArticle.date}
                </span>
              </div>
              <p className="font-titillium text-[15px] text-neutral-600 leading-relaxed mb-4">
                {selectedArticle.excerpt}
              </p>
              <p className="font-titillium text-[15px] text-neutral-500 leading-relaxed">
                {selectedArticle.content}
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
};
