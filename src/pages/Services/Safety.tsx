import React, { useRef } from 'react';
import { Container } from '@/components/layout/Container';
import { SectionEyebrow } from '@/components/ui/SectionEyebrow';
import { ProjectOverlayCard } from '@/components/ui/ProjectOverlayCard';
import { ProjectCard } from '@/components/ui/ProjectCard';
import { CTASection } from '@/pages/Home/components/CTASection';
import { motion, useScroll, useTransform, useReducedMotion } from 'framer-motion';

interface SafetyProps {
  onOpenContact: () => void;
}

export const Safety: React.FC<SafetyProps> = ({ onOpenContact }) => {
  const scrollSectionRef = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion();

  // Scroll tracking for Section 4 (Scroll-based expansion)
  const { scrollYProgress } = useScroll({
    target: scrollSectionRef,
    offset: ["start end", "end start"]
  });

  // Image scales from 0.85 to 1.0 as the section scrolls in
  const imageScale = shouldReduceMotion ? 1 : useTransform(scrollYProgress, [0.15, 0.7], [0.85, 1.0]);

  return (
    <div className="pt-0 pb-0 bg-white selection:bg-[#FA6400] selection:text-white">

      {/* ──────────────────────────────────────────────────────── */}
      {/* 1. HERO — "Services" / "Safety"                          */}
      {/* ──────────────────────────────────────────────────────── */}
      <section className="bg-white overflow-hidden">
        <Container className="pt-2 pb-6 lg:pb-10 min-h-[260px] lg:min-h-[280px] flex items-center">
          <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-end">
            {/* Left Column: Eyebrow + Heading */}
            <div className="lg:col-span-6 flex flex-col justify-start">
              <SectionEyebrow label="Services" className="mb-2" />
              <h1 className="font-titillium text-[56px] sm:text-[68px] lg:text-[76px] xl:text-[80px] font-normal text-[#0A0909] leading-[0.98] tracking-[-0.02em] mt-1">
                Safety
              </h1>
            </div>

            {/* Right Column: Paragraph */}
            <div className="lg:col-span-6 flex items-end lg:pl-10 xl:pl-16 pb-1">
              <p className="font-titillium text-[14px] sm:text-[14.5px] lg:text-[15px] text-[#222222] leading-[1.6] max-w-[480px]">
                Creating a safe and healthy work environment is a central guiding principle for all Konstruktion developments.
              </p>
            </div>
          </div>
        </Container>

        {/* Full-Bleed Hero Image with Zoom Hover */}
        <div className="w-full h-[320px] sm:h-[400px] lg:h-[480px] xl:h-[520px] overflow-hidden group/hero cursor-pointer">
          <img
            src="/about-workers.jpg"
            alt="Subcontractors working safely on-site"
            className="w-full h-full object-cover object-center transition-transform duration-1000 group-hover/hero:scale-105"
          />
        </div>
      </section>

      {/* ──────────────────────────────────────────────────────── */}
      {/* 2. INTEGRATED SERVICES — Left content, Right image       */}
      {/* ──────────────────────────────────────────────────────── */}
      <section className="bg-white mb-16 sm:mb-24 lg:mb-32 xl:mb-36">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-20 items-center">
            {/* Left — Vertically centered description */}
            <div className="lg:col-span-6 flex flex-col justify-center space-y-6 pr-0 lg:pr-8">
              <h2 className="font-titillium text-[32px] sm:text-[40px] lg:text-[50px] xl:text-[56px] 2xl:text-[62px] font-normal text-[#0A0909] leading-[1.12] tracking-[-0.015em] mb-4">
                Instilling a proactive zero-incident safety culture across all sites
              </h2>
              <p className="font-titillium text-[15px] sm:text-[17px] lg:text-[18px] 2xl:text-[20px] text-neutral-500 leading-[1.75] max-w-[580px]">
                We believe safety is built on personal relationships and collaborative vigilance. By training our site teams, organizing daily toolbox talks, and maintaining rigorous compliance parameters, we build safer jobsites that protect our family of workers.
              </p>
            </div>
            {/* Right — Editorial crop image */}
            <div className="lg:col-span-6 overflow-hidden h-[350px] sm:h-[450px] lg:h-[550px] xl:h-[600px] 2xl:h-[650px]">
              <img
                src="/about-building-facade.jpg"
                alt="Safe construction structural framing"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </Container>
      </section>

      {/* ──────────────────────────────────────────────────────── */}
      {/* 3. CHALLENGE / VISION — Heading on top, Image below      */}
      {/* ──────────────────────────────────────────────────────── */}
      <section className="bg-[#F7F7F5] mb-16 sm:mb-24 lg:mb-32 xl:mb-36">
        <Container className="pt-16">
          <div className="space-y-10">
            {/* Top — Heading */}
            <div className="max-w-[950px]">
              <h2 className="font-titillium text-[24px] sm:text-[28px] lg:text-[34px] xl:text-[38px] 2xl:text-[42px] font-normal leading-[1.28] tracking-[-0.01em] text-[#0A0909] mb-2">
                We inspect every piece of equipment and audit every trade to guarantee site safety
              </h2>
            </div>
            {/* Bottom — Image slider container with floating 'View Project +' overlay card */}
            <ProjectOverlayCard
              title="Railcar Factory"
              cardLabel="View Project"
              category="PROJECTS"
              images={[
                "/about-nyc-skyline.jpg",
                "/about-workers.jpg",
                "/First-page-image.jpg",
                "/about-building-facade.jpg"
              ]}
              location="Chicago, IL"
              year="2025"
              description="Heavy manufacturing facility constructed with top-tier industrial safety standards and automated hazard prevention protocols."
              onOpenContact={onOpenContact}
              aspectRatio="w-full h-[300px] sm:h-[400px] lg:h-[550px] xl:h-[620px] 2xl:h-[680px]"
            />
          </div>
        </Container>
      </section>

      {/* ──────────────────────────────────────────────────────── */}
      {/* 4. SCROLL SECTION — Sticky visual expansion + copy      */}
      {/* ──────────────────────────────────────────────────────── */}
      <section ref={scrollSectionRef} className="relative bg-white mb-16 sm:mb-24 lg:mb-32 xl:mb-36 overflow-visible">
        <Container className="pt-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">

            {/* Left — Sticky Expanding Image container */}
            <div className="lg:col-span-5 lg:sticky lg:top-[15vh] lg:h-[65vh] flex items-center justify-center w-full mb-6 lg:mb-0">
              <div className="w-full h-[350px] sm:h-[480px] lg:h-full overflow-hidden relative">
                <motion.img
                  style={{ scale: imageScale }}
                  src="/First-page-image.jpg"
                  alt="Construction engineers working on site"
                  className="w-full h-full object-cover origin-center"
                />
              </div>
            </div>

            {/* Right — Scrollable Text Blocks aligned toward bottom */}
            <div className="lg:col-span-7 space-y-24 lg:space-y-36 flex-1 py-2 lg:py-4 pl-0 lg:pl-12">

              {/* Block 1 */}
              <div className="space-y-4 min-h-[45vh] flex flex-col justify-end pb-8">
                <h3 className="font-titillium text-[32px] sm:text-[40px] lg:text-[48px] 2xl:text-[54px] font-normal text-[#0A0909] leading-tight">
                  Vigilant Supervision
                </h3>
                <p className="font-titillium text-[15px] sm:text-[17px] lg:text-[18px] 2xl:text-[20px] text-neutral-500 leading-[1.8] max-w-[500px]">
                  Our safety managers oversee active sites constantly. Every project undergoes regular auditing to preemptively identify and mitigate site hazards.
                </p>
              </div>

              {/* Block 2 */}
              <div className="space-y-4 min-h-[45vh] flex flex-col justify-end pb-8">
                <h3 className="font-titillium text-[32px] sm:text-[40px] lg:text-[48px] 2xl:text-[54px] font-normal text-[#0A0909] leading-tight">
                  Comprehensive Training
                </h3>
                <p className="font-titillium text-[15px] sm:text-[17px] lg:text-[18px] 2xl:text-[20px] text-neutral-500 leading-[1.8] max-w-[500px]">
                  All employee-owners and subcontractor trades participate in OSHA compliance training, ensuring safety protocols are second-nature in every role.
                </p>
              </div>

              {/* Block 3 */}
              <div className="space-y-4 min-h-[45vh] flex flex-col justify-end pb-8">
                <h3 className="font-titillium text-[32px] sm:text-[40px] lg:text-[48px] 2xl:text-[54px] font-normal text-[#0A0909] leading-tight">
                  Continuous Auditing
                </h3>
                <p className="font-titillium text-[15px] sm:text-[17px] lg:text-[18px] 2xl:text-[20px] text-neutral-500 leading-[1.8] max-w-[500px]">
                  By logging incident data digitally and examining trends, we continuously refine our safety procedures, ensuring that everyone returns home safely at the end of the day.
                </p>
              </div>

            </div>

          </div>
        </Container>
      </section>

      {/* ──────────────────────────────────────────────────────── */}
      {/* 5. SIMILAR PROJECTS — Explore Similar Projects           */}
      {/* ──────────────────────────────────────────────────────── */}
      <section className="bg-white mb-16 sm:mb-24 lg:mb-32 xl:mb-36">
        <Container>
          <div className="space-y-12">
            <h2 className="font-titillium text-[36px] sm:text-[46px] lg:text-[56px] xl:text-[62px] 2xl:text-[70px] font-normal text-[#0A0909] leading-tight tracking-[-0.015em]">
              Explore Similar Projects
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10 lg:gap-12">
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
      <CTASection onOpenContact={onOpenContact} />

    </div>
  );
};
