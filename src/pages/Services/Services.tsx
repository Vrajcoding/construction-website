import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { Container } from '@/components/layout/Container';
import { SectionEyebrow } from '@/components/ui/SectionEyebrow';
import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { ProjectCard } from '@/components/ui/ProjectCard';
import { motion, useScroll, useTransform, useReducedMotion } from 'framer-motion';
import { CTASection } from '@/pages/Home/components/CTASection';

interface ServicesProps {
  onOpenContact: () => void;
}

export const Services: React.FC<ServicesProps> = ({ onOpenContact }) => {
  const scrollSectionRef = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion();

  // Scroll tracking for Section 4 (Scroll-based expansion)
  const { scrollYProgress } = useScroll({
    target: scrollSectionRef,
    offset: ["start end", "end start"]
  });

  // Smooth subtle expansion from 1.0 to 1.06 without shrinking below container size
  const imageScale = shouldReduceMotion ? 1 : useTransform(scrollYProgress, [0.1, 0.8], [1.0, 1.06]);

  return (
    <div className="pt-0 pb-0 bg-white selection:bg-[#FA6400] selection:text-white">

      {/* ──────────────────────────────────────────────────────── */}
      {/* 1. HERO — "Services" / "Construction" + wide city image  */}
      {/* ──────────────────────────────────────────────────────── */}
      <section className="bg-white overflow-hidden">
        <ScrollReveal>
          <Container className="pt-2 pb-6 lg:pb-10 min-h-[260px] lg:min-h-[280px] flex items-center">
            <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 xl:gap-24 items-end">
              {/* Left Column: Eyebrow + Heading */}
              <div className="lg:col-span-7 flex flex-col justify-start">
                <SectionEyebrow label="Services" className="mb-2" />
                <h1 className="font-titillium text-[56px] sm:text-[68px] lg:text-[76px] xl:text-[80px] font-normal text-[#0A0909] leading-[0.98] tracking-[-0.02em] mt-1">
                  Construction
                </h1>
              </div>

              {/* Right Column: Paragraph */}
              <div className="lg:col-span-5 flex items-end lg:pl-6 xl:pl-10 pb-1">
                <p className="font-titillium text-[14px] sm:text-[14.5px] lg:text-[15px] text-[#222222] leading-[1.6] max-w-[460px]">
                  Our construction operations span complex infrastructure, commercial skyscrapers, healthcare campuses, and sustainable modular architecture designed for longevity.
                </p>
              </div>
            </div>
          </Container>
        </ScrollReveal>

        {/* Full-Bleed Hero Image with Zoom Hover */}
        <ScrollReveal delay={0.2}>
          <div className="w-full h-[320px] sm:h-[400px] lg:h-[480px] xl:h-[520px] overflow-hidden group/hero cursor-pointer bg-white">
            <img
              src="/First-page-image.jpg"
              alt="Cityscape architecture with cranes under construction"
              className="w-full h-full object-cover object-center transition-transform duration-1000 group-hover/hero:scale-105"
            />
          </div>
        </ScrollReveal>
      </section>

      {/* ──────────────────────────────────────────────────────── */}
      {/* 2. INTEGRATED SERVICES — Left content, Right image       */}
      {/* ──────────────────────────────────────────────────────── */}
      <section className="bg-white py-16 sm:py-24 lg:py-28 border-t border-neutral-100 overflow-hidden">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left — Vertically centered description */}
            <ScrollReveal className="lg:col-span-6 flex flex-col justify-center">
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
            </ScrollReveal>

            {/* Right — Skyscraper Construction Image with Zoom Hover */}
            <ScrollReveal delay={0.2} className="lg:col-span-6 w-full flex items-center justify-start">
              <div className="w-full max-w-[580px] aspect-square overflow-hidden relative bg-white group/skyscr cursor-pointer">
                <img
                  src="/construction-integrated-skyscraper.jpg"
                  alt="Delivering integrated construction services"
                  className="w-full h-full object-cover object-center transition-transform duration-700 group-hover/skyscr:scale-105"
                />
              </div>
            </ScrollReveal>
          </div>
        </Container>
      </section>

      {/* ──────────────────────────────────────────────────────── */}
      {/* 3. CHALLENGE / VISION — Heading on top, Image below      */}
      {/* ──────────────────────────────────────────────────────── */}
      <section className="bg-white py-16 sm:py-24 lg:py-28 overflow-hidden">
        <Container>
          <ScrollReveal>
            <div className="space-y-8 sm:space-y-10">
              {/* Top — Heading */}
              <div className="max-w-[960px]">
                <h2 className="font-titillium text-[26px] sm:text-[32px] lg:text-[38px] xl:text-[42px] font-normal leading-[1.2] tracking-[-0.015em] text-[#0A0909]">
                  No matter the challenge, we build on what we know works and elevate your vision of success
                </h2>
              </div>

              {/* Bottom — Image with standard + button hover effect */}
              <Link
                to="/work"
                className="block w-full relative overflow-hidden bg-white group/img cursor-pointer aspect-[16/9] sm:aspect-[2.1/1] lg:aspect-[2.35/1] max-h-[640px]"
              >
                <img
                  src="/First-page-image.jpg"
                  alt="Cityscape architecture with modern skyscrapers"
                  className="w-full h-full object-cover object-center transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover/img:scale-105"
                />

                {/* White Square / Sliding Plus Badge (Bottom-Right) */}
                <div
                  aria-hidden="true"
                  className="absolute bottom-0 right-0 z-10 h-[52px] sm:h-[60px] lg:h-[64px] w-[52px] sm:w-[60px] lg:w-[64px] group-hover/img:w-[160px] sm:group-hover/img:w-[180px] lg:group-hover/img:w-[195px] px-3.5 sm:px-4 lg:px-5 bg-white flex items-center justify-end transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] overflow-hidden pointer-events-none"
                >
                  {/* Sliding Content: "View Project" reveals on hover */}
                  <span className="font-titillium text-[13.5px] sm:text-[15px] lg:text-[15.5px] text-[#0A0909] font-normal max-w-0 opacity-0 group-hover/img:max-w-[120px] group-hover/img:opacity-100 group-hover/img:mr-2.5 sm:group-hover/img:mr-3.5 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] whitespace-nowrap overflow-hidden">
                    View Project
                  </span>

                  {/* Plus Icon: Thin minimal black icon, turns orange on hover */}
                  <span className="flex items-center justify-center shrink-0 text-[#0A0909] group-hover/img:text-[#FA6400] transition-colors duration-500">
                    <svg
                      className="w-5 h-5 sm:w-[22px] sm:h-[22px] lg:w-[24px] lg:h-[24px] stroke-[1.2] transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover/img:rotate-90"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <line x1="12" y1="5" x2="12" y2="19" />
                      <line x1="5" y1="12" x2="19" y2="12" />
                    </svg>
                  </span>
                </div>
              </Link>
            </div>
          </ScrollReveal>
        </Container>
      </section>

      {/* ──────────────────────────────────────────────────────── */}
      {/* 4. SCROLL SECTION — Sticky visual expansion + copy      */}
      {/* ──────────────────────────────────────────────────────── */}
      <section ref={scrollSectionRef} className="relative bg-white mb-16 sm:mb-24 lg:mb-32 xl:mb-36 overflow-visible">
        <Container className="pt-8 sm:pt-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 xl:gap-20 items-start">

            {/* Left — Sticky Tall Portrait Rectangle Image (Larger & pure white background) */}
            <div className="lg:col-span-5 xl:col-span-5 lg:sticky lg:top-[10vh] lg:h-[82vh] flex items-center justify-start w-full mb-8 lg:mb-0">
              <div className="w-full h-[460px] sm:h-[580px] lg:h-full max-w-full lg:max-w-[560px] aspect-[0.8/1] sm:aspect-[0.82/1] lg:aspect-auto overflow-hidden relative bg-white">
                <motion.img
                  style={{ scale: imageScale }}
                  src="/about-workers.jpg"
                  alt="Construction engineers working on site"
                  className="w-full h-full object-cover object-center origin-center"
                />
              </div>
            </div>

            {/* Right — Scrollable Text Blocks (Starts at bottom and scrolls smoothly up to top) */}
            <div className="lg:col-span-7 xl:col-span-7 flex flex-col pt-[20vh] sm:pt-[30vh] lg:pt-[40vh] pb-[20vh] sm:pb-[30vh] lg:pb-[40vh] space-y-40 sm:space-y-56 lg:space-y-72 pl-0 lg:pl-10 xl:pl-14">

              {/* Block 1 */}
              <div className="space-y-6 max-w-[540px] min-h-[35vh] flex flex-col justify-center">
                <h3 className="font-titillium text-[36px] sm:text-[48px] md:text-[56px] lg:text-[64px] font-normal text-[#0A0909] leading-[1.08] tracking-[-0.018em]">
                  Pushing the Industry Forward
                </h3>
                <p className="font-titillium text-[14.5px] sm:text-[15.5px] lg:text-[16px] text-[#555555] leading-[1.75]">
                  At Konstruktion, we are passionate about driving value into every project we undertake. We continue to challenge our people, projects and the industry. By being forward-thinking, we are continually finding new ways to deliver success for our clients and stakeholders.
                </p>
              </div>

              {/* Block 2 */}
              <div className="space-y-6 max-w-[540px] min-h-[35vh] flex flex-col justify-center">
                <h3 className="font-titillium text-[36px] sm:text-[48px] md:text-[56px] lg:text-[64px] font-normal text-[#0A0909] leading-[1.08] tracking-[-0.018em]">
                  Quality Assurance
                </h3>
                <p className="font-titillium text-[14.5px] sm:text-[15.5px] lg:text-[16px] text-[#555555] leading-[1.75]">
                  Konstruktion’s culture of quality is built into everything we do and begins with personal accountability from our employee-owners. Successful quality projects demonstrate our culture that embraces clear communication, strong problem-solving, and a relentless focus on creating strong relationships. We work with you from project start-up through completion to ensure your expectations are delivered and the final project meets all your needs.
                </p>
              </div>

              {/* Block 3 */}
              <div className="space-y-6 max-w-[540px] min-h-[35vh] flex flex-col justify-center">
                <h3 className="font-titillium text-[36px] sm:text-[48px] md:text-[56px] lg:text-[64px] font-normal text-[#0A0909] leading-[1.08] tracking-[-0.018em]">
                  Tracking Project Trends
                </h3>
                <p className="font-titillium text-[14.5px] sm:text-[15.5px] lg:text-[16px] text-[#555555] leading-[1.75]">
                  From smart sensors to comprehensive integrated project analytics, we track and trend progress, quality, safety and more. This data allows us to understand the immediate and potential impacts of items and provides a simple means of examining complex data, provide you with options, and resolve challenges before they become issues.
                </p>
              </div>

            </div>

          </div>
        </Container>
      </section>

      {/* ──────────────────────────────────────────────────────── */}
      {/* 5. SIMILAR PROJECTS — Explore Similar Projects           */}
      {/* ──────────────────────────────────────────────────────── */}
      <section className="bg-white mb-16 sm:mb-24 lg:mb-32 xl:mb-36 overflow-hidden">
        <Container className="space-y-12">
          <ScrollReveal>
            <h2 className="font-titillium text-[36px] sm:text-[46px] lg:text-[56px] xl:text-[62px] 2xl:text-[70px] font-normal text-[#0A0909] leading-tight tracking-[-0.015em]">
              Explore Similar Projects
            </h2>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10 lg:gap-12">
            {/* Card 1 */}
            <ScrollReveal delay={0.1}>
              <ProjectCard
                image="/First-page-image.jpg"
                category="Interior, Projects"
                title="One Thousand Museum"
                to="/project/one-thousand-museum"
              />
            </ScrollReveal>

            {/* Card 2 */}
            <ScrollReveal delay={0.25}>
              <ProjectCard
                image="/about-building-facade.jpg"
                category="Projects"
                title="Station Home"
                to="/project/station-home"
              />
            </ScrollReveal>

            {/* Card 3 */}
            <ScrollReveal delay={0.4}>
              <ProjectCard
                image="/about-nyc-skyline.jpg"
                category="Projects"
                title="Railcar Factory"
                to="/project/railcar-factory"
              />
            </ScrollReveal>
          </div>
        </Container>
      </section>

      {/* ──────────────────────────────────────────────────────── */}
      {/* 6. READY TO WORK TOGETHER — CTA Section                  */}
      {/* ──────────────────────────────────────────────────────── */}
      <CTASection onOpenContact={onOpenContact || (() => {})} />

    </div>
  );
};
