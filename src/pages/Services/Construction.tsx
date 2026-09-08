import React, { useRef } from 'react';
import { Container } from '@/components/layout/Container';
import { SectionEyebrow } from '@/components/ui/SectionEyebrow';
import { ProjectOverlayCard } from '@/components/ui/ProjectOverlayCard';
import { ProjectCard } from '@/components/ui/ProjectCard';
import { CTASection } from '@/pages/Home/components/CTASection';
import { motion, useScroll, useTransform, useReducedMotion } from 'framer-motion';

interface ConstructionProps {
  onOpenContact?: () => void;
}

export const Construction: React.FC<ConstructionProps> = ({ onOpenContact }) => {
  const scrollSectionRef = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion();

  // Scroll tracking for Section 4 Sticky Visual Expansion
  const { scrollYProgress } = useScroll({
    target: scrollSectionRef,
    offset: ["start end", "end start"]
  });

  // Image scales from 0.85 to 1.05 smoothly as the user scrolls past the sticky section
  const imageScale = shouldReduceMotion ? 1 : useTransform(scrollYProgress, [0.1, 0.7], [0.85, 1.05]);

  return (
    <div className="pt-0 pb-0 bg-white selection:bg-[#FA6400] selection:text-white">

      {/* ──────────────────────────────────────────────────────── */}
      {/* 1. HERO — "Services" / "Construction" + full bleed cranes image  */}
      {/* ──────────────────────────────────────────────────────── */}
      <section className="bg-white overflow-hidden">
        <Container className="pt-2 pb-6 lg:pb-10 min-h-[260px] lg:min-h-[280px] flex items-center">
          <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-end">
            {/* Left Column: Eyebrow + Heading */}
            <div className="lg:col-span-6 flex flex-col justify-start">
              <SectionEyebrow label="Services" className="mb-2" />
              <h1 className="font-titillium text-[56px] sm:text-[68px] lg:text-[76px] xl:text-[80px] font-normal text-[#0A0909] leading-[0.98] tracking-[-0.02em] mt-1">
                Construction
              </h1>
            </div>

            {/* Right Column: Paragraph */}
            <div className="lg:col-span-6 flex items-end lg:pl-10 xl:pl-16 pb-1">
              <p className="font-titillium text-[14px] sm:text-[14.5px] lg:text-[15px] text-[#222222] leading-[1.6] max-w-[480px]">
                Full-scale structural buildout with state-of-the-art safety protocols, milestone monitoring, and engineering excellence.
              </p>
            </div>
          </div>
        </Container>

        {/* Full-Bleed Hero Image with Zoom Hover */}
        <div className="w-full h-[320px] sm:h-[400px] lg:h-[480px] xl:h-[520px] overflow-hidden group/hero cursor-pointer">
          <img
            src="/construction-hero-cranes.jpg"
            alt="Construction Cranes against Sky"
            className="w-full h-full object-cover object-center transition-transform duration-1000 group-hover/hero:scale-105"
          />
        </div>
      </section>

      {/* ──────────────────────────────────────────────────────── */}
      {/* 2. OVERVIEW PARAGRAPH — Delivering integrated construction... */}
      {/* ──────────────────────────────────────────────────────── */}
      <section className="bg-white py-16 sm:py-24 lg:py-28 border-t border-neutral-100 overflow-hidden">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Column — Big Title & Subtext */}
            <div className="lg:col-span-6 flex flex-col justify-center">
              <h2 className="font-titillium text-[38px] sm:text-[50px] lg:text-[58px] xl:text-[64px] font-normal text-[#0A0909] leading-[1.08] tracking-tight max-w-[580px]">
                Delivering <br />
                integrated <br />
                construction <br />
                services to build <br />
                lasting success
              </h2>
              <p className="font-titillium text-[14px] sm:text-[15px] text-neutral-600 leading-[1.7] mt-8 sm:mt-10 max-w-[480px]">
                When you partner with Konstruktion, you not only get innovative solutions, you get our fully vested team and a commitment to doing things right. Our relentless focus on success leads to smarter more collaborative building practices.
              </p>
            </div>

            {/* Right Column — Skyscraper Construction Image */}
            <div className="lg:col-span-6 w-full flex items-center justify-start">
              <div className="w-full max-w-[580px] aspect-square overflow-hidden relative bg-neutral-100">
                <img
                  src="/construction-integrated-skyscraper.jpg"
                  alt="Delivering integrated construction services"
                  className="w-full h-full object-cover object-center"
                />
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* ──────────────────────────────────────────────────────── */}
      {/* 3. FEATURED SLIDER WITH FLOATING OVERLAY CARD            */}
      {/* ──────────────────────────────────────────────────────── */}
      <section className="bg-white py-12 sm:py-16 lg:py-20 border-t border-neutral-100">
        <Container>
          <div className="space-y-8">
            {/* Top Eyebrow */}
            <div className="flex items-center justify-between">
              <span className="font-archivo text-[11px] font-bold text-neutral-400 tracking-[2px] uppercase">
                FEATURED WORK
              </span>
              <span className="font-archivo text-[11px] font-bold text-[#FA6400] tracking-[2px] uppercase">
                01 / 03
              </span>
            </div>

            {/* Bottom — Image slider container with floating 'View Project +' overlay card */}
            <ProjectOverlayCard
              title="Station Home"
              cardLabel="View Project"
              category="PROJECTS"
              image="/about-building-facade.jpg"
              images={[
                "/about-building-facade.jpg",
                "/First-page-image.jpg",
                "/about-nyc-skyline.jpg"
              ]}
              to="/work"
              aspectRatio="w-full h-[400px] sm:h-[540px] lg:h-[680px] xl:h-[780px]"
            />
          </div>
        </Container>
      </section>

      {/* ──────────────────────────────────────────────────────── */}
      {/* 4. SCROLL SECTION — STICKY IMAGE EXPANSION ANIMATION      */}
      {/* ──────────────────────────────────────────────────────── */}
      <section ref={scrollSectionRef} className="relative bg-white py-16 sm:py-24 lg:py-32 overflow-visible">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">

            {/* Left — STICKY Expanding Image Container */}
            <div className="lg:col-span-5 lg:sticky lg:top-[15vh] lg:h-[65vh] flex items-center justify-center w-full mb-6 lg:mb-0">
              <div className="w-full h-[380px] sm:h-[520px] lg:h-[full] overflow-hidden relative bg-neutral-100 max-w-[560px]">
                <motion.img
                  style={{ scale: imageScale }}
                  src="/about-workers.jpg"
                  alt="Construction engineers working on site"
                  className="w-full h-full object-cover origin-center"
                />
              </div>
            </div>

            {/* Right — Continuous Text Content Scrolling Past Sticky Image */}
            <div className="lg:col-span-7 space-y-16 sm:space-y-24 lg:space-y-28 py-4">

              {/* Block 1 — Pushing the Industry Forward */}
              <div className="space-y-6 max-w-[640px]">
                <h2 className="font-titillium text-[48px] sm:text-[62px] lg:text-[72px] font-normal leading-[1.05] text-[#0A0909] tracking-tight">
                  Pushing the <br className="hidden sm:block" />
                  Industry Forward
                </h2>
                <p className="font-titillium text-[15px] sm:text-[16px] text-neutral-600 leading-[1.75]">
                  At Konstruktion, we are passionate about driving value into every project we undertake. We continue to challenge our people, projects and the industry. By being forward-thinking, we are continually finding new ways to deliver success for our clients and stakeholders.
                </p>
              </div>

              {/* Block 2 — Integrated execution built on total collaboration */}
              <div className="space-y-6 max-w-[640px]">
                <h3 className="font-titillium text-[32px] sm:text-[40px] lg:text-[48px] font-normal leading-[1.1] text-[#0A0909]">
                  Integrated execution built on total collaboration
                </h3>
                <p className="font-titillium text-[15px] sm:text-[16px] text-neutral-600 leading-[1.65]">
                  Our construction practice operates as a unified entity across pre-construction, field management, and quality assurance. By integrating digital twin technologies and realtime tracking, we ensure projects proceed with zero friction.
                </p>
              </div>

              {/* Block 3 — Relentless commitment to field safety and precision */}
              <div className="space-y-6 max-w-[640px]">
                <h3 className="font-titillium text-[32px] sm:text-[40px] lg:text-[48px] font-normal leading-[1.1] text-[#0A0909]">
                  Relentless commitment to field safety and precision
                </h3>
                <p className="font-titillium text-[15px] sm:text-[16px] text-neutral-600 leading-[1.65]">
                  Safety is designed directly into our logistics workflow. Every trade partner and team member adheres to stringent risk mitigation standards, enabling complex structural feats without compromising safety records.
                </p>
              </div>

            </div>

          </div>
        </Container>
      </section>

      {/* ──────────────────────────────────────────────────────── */}
      {/* 5. SIMILAR PROJECTS — Explore Similar Projects           */}
      {/* ──────────────────────────────────────────────────────── */}
      <section className="bg-white py-16 sm:py-24 border-t border-neutral-200">
        <Container>
          <div className="space-y-12">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
              <h2 className="font-titillium title-section font-normal text-[#0A0909] leading-tight">
                Explore Similar
                <br />Projects
              </h2>
            </div>

            {/* 3 Project Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
              <ProjectCard
                image="/First-page-image.jpg"
                category="Interior, Projects"
                title="One Thousand Museum"
                to="/project/one-thousand-museum"
              />
              <ProjectCard
                image="/about-building-facade.jpg"
                category="Projects"
                title="Station Home"
                to="/project/station-home"
              />
              <ProjectCard
                image="/about-nyc-skyline.jpg"
                category="Projects"
                title="Railcar Factory"
                to="/project/railcar-factory"
              />
            </div>
          </div>
        </Container>
      </section>

      {/* 6. READY TO WORK TOGETHER — CTA Section */}
      <CTASection onOpenContact={onOpenContact || (() => {})} />

    </div>
  );
};
