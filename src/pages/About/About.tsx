import React from 'react';
import { Link } from 'react-router-dom';
import { Container } from '@/components/layout/Container';
import { SectionEyebrow } from '@/components/ui/SectionEyebrow';
import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { LeadershipSection } from '@/pages/Home/components/LeadershipSection';
import { CTASection } from '@/pages/Home/components/CTASection';

interface AboutProps {
  onOpenContact: () => void;
}

export const About: React.FC<AboutProps> = ({ onOpenContact }) => {
  return (
    <div className="pt-0 pb-0 bg-white">

      {/* ──────────────────────────────────────────────────────── */}
      {/* 1. HERO — "Who we are" / "About us" + grayscale image  */}
      {/* ──────────────────────────────────────────────────────── */}
      <section className="bg-white overflow-hidden">
        <ScrollReveal>
          <Container className="pt-2 pb-6 lg:pb-10 min-h-[260px] lg:min-h-[280px] flex items-center">
            <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 xl:gap-24 items-end">
              {/* Left Column: Eyebrow + Heading */}
              <div className="lg:col-span-7 flex flex-col justify-start">
                <SectionEyebrow label="Who we are" className="mb-2" />
                <h1 className="font-titillium text-[56px] sm:text-[68px] lg:text-[76px] xl:text-[80px] font-normal text-[#0A0909] leading-[0.98] tracking-[-0.02em] mt-1">
                  About us
                </h1>
              </div>

              {/* Right Column: Paragraph */}
              <div className="lg:col-span-5 flex items-end lg:pl-6 xl:pl-10 pb-1">
                <p className="font-titillium text-[14px] sm:text-[14.5px] lg:text-[15px] text-[#222222] leading-[1.6] max-w-[460px]">
                  From small renovations to complex billion dollar projects; from modular construction, to advanced digital technologies, to cutting-edge sustainability, Konstruktion has you covered.
                </p>
              </div>
            </div>
          </Container>
        </ScrollReveal>

        {/* Full-Bleed Hero Image with Zoom Hover */}
        <ScrollReveal delay={0.2}>
          <div className="w-full h-[320px] sm:h-[400px] lg:h-[480px] xl:h-[520px] overflow-hidden group/hero cursor-pointer">
            <img
              src="/about-hero-cityscape.jpg"
              alt="Historic building facade with overhead street wires"
              className="w-full h-full object-cover grayscale object-[center_35%] transition-transform duration-1000 group-hover/hero:scale-105"
            />
          </div>
        </ScrollReveal>
      </section>

      {/* ──────────────────────────────────────────────────────── */}
      {/* 2. OUR FOCUS — Large statement on light gray bg         */}
      {/* ──────────────────────────────────────────────────────── */}
      <section className="py-24 sm:py-32 lg:py-36 bg-[#F7F7F5] overflow-hidden">
        <Container>
          <ScrollReveal>
            <div className="max-w-[960px] mx-auto px-4 sm:px-8 lg:px-14 flex flex-col justify-start">
              {/* Eyebrow */}
              <div className="flex items-center gap-3.5 mb-6">
                <span className="font-titillium text-body-18 text-normal tracking-[1.5px] uppercase text-[#0A0909]">
                  Our Focus
                </span>
                <span className="w-12 h-[2px] bg-[#FA6400] inline-block" />
              </div>

              {/* 32px Section Title with generous padding and clean line-height */}
              <h2 className="font-titillium title-section font-normal text-[#0A0909] leading-[1.08] tracking-[-0.015em]">
                Flexible, focused and innovative: we're focused on achieving your project vision and business goals.
              </h2>
            </div>
          </ScrollReveal>
        </Container>
      </section>

      {/* ──────────────────────────────────────────────────────── */}
      {/* 3. WHO WE ARE — 2-Column Staggered Editorial Layout     */}
      {/* ──────────────────────────────────────────────────────── */}
      <section className="py-20 sm:py-28 lg:py-36 bg-white overflow-hidden">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            
            {/* Left Column: Eyebrow + Heading (top) + Portrait Image 1 (bottom) */}
            <div className="lg:col-span-6 flex flex-col justify-start">
              <ScrollReveal>
                <SectionEyebrow label="Who We Are" className="mb-4" />
                <h2 className="font-titillium text-[32px]  font-normal text-[#0A0909] leading-[1.18] tracking-[-0.015em] max-w-[520px]">
                  We’re problem-solvers with focus. Project managers with purpose. Team players with one goal in mind
                </h2>
              </ScrollReveal>

              {/* Left Image: Tall Portrait Rectangle */}
              <ScrollReveal delay={0.15}>
                <div className="mt-10 lg:mt-12 w-full max-w-[500px]">
                  <div className="overflow-hidden aspect-[0.83/1] bg-neutral-100 group/img1 cursor-pointer">
                    <img
                      src="/about-building-facade.jpg"
                      alt="Modern building facade with geometric windows"
                      className="w-full h-full object-cover block transition-transform duration-700 group-hover/img1:scale-105"
                    />
                  </div>
                </div>
              </ScrollReveal>
            </div>

            {/* Right Column: Paragraphs + Button (top) + Staggered Portrait Image 2 (bottom with margin top) */}
            <div className="lg:col-span-6 flex flex-col justify-start lg:pl-8 xl:pl-16">
              <ScrollReveal delay={0.1}>
                <div className="space-y-4 max-w-[480px]">
                  <p className="font-titillium text-[14px] sm:text-[14.5px] text-[#555555] leading-[1.65]">
                    We achieve this success without ever compromising our values by providing quality construction practices, effective communication, and a deep understanding of the building environment. Our long history in New York City and the Tri-State area enables us to navigate agencies and regulations with ease and to anticipate issues before they become problems. This experience ensures that each project is completed seamlessly and responsibly.
                  </p>
                  <p className="font-titillium text-[14px] sm:text-[14.5px] text-[#555555] leading-[1.65]">
                    As a commercial construction company, we support New York City's businesses today and inspire what's yet to come tomorrow. At Konstruktion, we help every client see their vision come to life.
                  </p>
                  <div className="pt-3">
                    <Link
                      to="/about/history"
                      className="inline-flex items-center justify-center px-7 py-3 bg-[#0A0909] text-white font-archivo text-[11.5px] font-bold tracking-[2px] uppercase transition-all duration-300 hover:bg-[#FA6400]"
                    >
                      OUR HISTORY
                    </Link>
                  </div>
                </div>
              </ScrollReveal>

              {/* Right Image: Tall Portrait Rectangle with Staggered Margin-Top */}
              <ScrollReveal delay={0.25}>
                <div className="mt-16 sm:mt-24 lg:mt-28 xl:mt-32 w-full max-w-[500px]">
                  <div className="overflow-hidden aspect-[0.83/1] bg-neutral-100 group/img2 cursor-pointer">
                    <img
                      src="/about-workers.jpg"
                      alt="Construction workers collaborating on site"
                      className="w-full h-full object-cover block transition-transform duration-700 group-hover/img2:scale-105"
                    />
                  </div>
                </div>
              </ScrollReveal>
            </div>

          </div>
        </Container>
      </section>

      {/* ──────────────────────────────────────────────────────── */}
      {/* 4. OUR COMMITMENT TO COMMUNITY                           */}
      {/* ──────────────────────────────────────────────────────── */}
      <section className="py-20 sm:py-24 lg:py-28 bg-white overflow-hidden">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-start pb-8 sm:pb-12 lg:pb-14">
            {/* Left — Eyebrow + Heading */}
            <ScrollReveal className="lg:col-span-6 flex flex-col justify-start">
              <SectionEyebrow label="Our Commitment To Community" className="mb-2" />
              <h2 className="font-titillium text-[32px] sm:text-[38px] lg:text-[44px] font-normal text-[#0A0909] leading-[1.12] tracking-[-0.015em] mt-1 max-w-[480px]">
                We are committed to New York City
              </h2>
            </ScrollReveal>
            {/* Right — Paragraph */}
            <ScrollReveal delay={0.15} className="lg:col-span-6 flex items-start lg:pl-12 xl:pl-20 pt-1 lg:pt-4">
              <p className="font-titillium text-[13.5px] sm:text-[14px] lg:text-[14.5px] text-[#222222] leading-[1.65] max-w-[500px]">
                We believe in contributing to the greater good and encourage our team to explore opportunities to contribute to, participate in, and partner with organizations that embrace education, empathy, and enterprise. As a certified Women Business Enterprise (WBE), we support diversity and inclusion within the construction industry and strongly advocate for the continued betterment and openness of the industry.
              </p>
            </ScrollReveal>
          </div>

          {/* Contained NYC street canyon image (inside Container) */}
          <ScrollReveal delay={0.2}>
            <div className="w-full h-[320px] sm:h-[420px] lg:h-[480px] xl:h-[520px] overflow-hidden group/nyc cursor-pointer">
              <img
                src="/about-nyc-skyline.jpg"
                alt="New York City street canyon and brownstone buildings"
                className="w-full h-full object-cover block transition-transform duration-1000 group-hover/nyc:scale-105"
              />
            </div>
          </ScrollReveal>
        </Container>
      </section>

      {/* ──────────────────────────────────────────────────────── */}
      {/* 5. OUR MISSION — Large heading + three pillar columns   */}
      {/* ──────────────────────────────────────────────────────── */}
      <section className="py-20 sm:py-28 lg:py-32 bg-[#F7F7F5] overflow-hidden">
        <Container>
          {/* Mission heading */}
          <ScrollReveal className="mb-12 lg:mb-16">
            <SectionEyebrow label="Our Mission" className="mb-3" />
            <h2 className="font-titillium text-[38px] sm:text-[48px] lg:text-[54px] xl:text-[60px] font-normal text-[#0A0909] leading-[1.08] tracking-[-0.018em] mt-1 max-w-[540px]">
              We never stop thinking about reshaping the future
            </h2>
          </ScrollReveal>

          {/* Three Pillars — Clean text columns with staggered animation */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 max-w-[1180px]">
            {/* Safety */}
            <ScrollReveal delay={0.1}>
              <div className="group cursor-pointer">
                <div className="mb-4">
                  <svg width="38" height="38" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 20C12 15 16 12 21 12C26 12 30 15 30 20V24H12V20Z" stroke="#0A0909" strokeWidth="1.5" strokeLinejoin="round"/>
                    <path d="M9 24H33V27H9V24Z" stroke="#0A0909" strokeWidth="1.5"/>
                    <path d="M21 12V7" stroke="#FA6400" strokeWidth="2" strokeLinecap="round"/>
                    <circle cx="21" cy="31" r="3" stroke="#0A0909" strokeWidth="1.5"/>
                  </svg>
                </div>
                <h3 className="font-titillium text-[20px] sm:text-[22px] font-semibold text-[#0A0909] group-hover:text-[#FA6400] transition-colors leading-[1.15] mb-2.5">
                  Safety
                </h3>
                <p className="font-titillium text-[13.5px] sm:text-[14px] text-[#555555] leading-[1.7]">
                  The health and safety of people and our environment lies at the very heart of what we do. In situations that are physically or psychologically unsafe we refuse to be bystanders. We are changemakers and action takers. This applies to the environment and climate change too. We advocate for sustainable solutions and operate in this spirit, holding each other accountable for the legacy that we leave future generations.
                </p>
              </div>
            </ScrollReveal>

            {/* Our Purpose */}
            <ScrollReveal delay={0.25}>
              <div className="group cursor-pointer">
                <div className="mb-4">
                  <svg width="38" height="38" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M21 34V16" stroke="#0A0909" strokeWidth="1.5" strokeLinecap="round"/>
                    <path d="M21 22C21 22 13 20 13 14C13 10 17 10 21 15" stroke="#FA6400" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M21 18C21 18 29 16 29 10C29 6 25 6 21 11" stroke="#0A0909" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <h3 className="font-titillium text-[20px] sm:text-[22px] font-semibold text-[#0A0909] group-hover:text-[#FA6400] transition-colors leading-[1.15] mb-2.5">
                  Our Purpose
                </h3>
                <p className="font-titillium text-[13.5px] sm:text-[14px] text-[#555555] leading-[1.7]">
                  Konstruktion was founded on the belief that every decision we make impacts people and communities. It's why we put humanity at the center of everything we do. It's why we bring together different voices and points of view so that what we create makes everyone's life better. It's why what we build will bring value to society long after our lifetime. And it's why we never stop thinking about reshaping the future.
                </p>
              </div>
            </ScrollReveal>

            {/* Our Position */}
            <ScrollReveal delay={0.4}>
              <div className="group cursor-pointer">
                <div className="mb-4">
                  <svg width="38" height="38" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="8" y="14" width="10" height="22" stroke="#0A0909" strokeWidth="1.5"/>
                    <rect x="22" y="8" width="12" height="28" stroke="#0A0909" strokeWidth="1.5"/>
                    <path d="M22 14H34" stroke="#FA6400" strokeWidth="1.5"/>
                    <path d="M22 20H34" stroke="#FA6400" strokeWidth="1.5"/>
                    <path d="M22 26H34" stroke="#0A0909" strokeWidth="1.5"/>
                    <path d="M12 20H14" stroke="#0A0909" strokeWidth="1.5"/>
                    <path d="M12 26H14" stroke="#0A0909" strokeWidth="1.5"/>
                  </svg>
                </div>
                <h3 className="font-titillium text-[20px] sm:text-[22px] font-semibold text-[#0A0909] group-hover:text-[#FA6400] transition-colors leading-[1.15] mb-2.5">
                  Our Position
                </h3>
                <p className="font-titillium text-[13.5px] sm:text-[14px] text-[#555555] leading-[1.7]">
                  Konstruktion Group uses knowledge & foresight to shape the way people live, work, and connect. More than 135 years in the making, we're one of the world's largest development and construction companies. Together with our customers and the collective expertise of our 30,000+ teammates, we create innovative and sustainable solutions that support healthy living beyond our lifetime.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </Container>
      </section>

      {/* ──────────────────────────────────────────────────────── */}
      {/* 6. LEADERSHIP — Reuses home LeadershipSection           */}
      {/* ──────────────────────────────────────────────────────── */}
      <LeadershipSection />

      {/* ──────────────────────────────────────────────────────── */}
      {/* 7. CTA BANNER — Reuses home CTASection                  */}
      {/* ──────────────────────────────────────────────────────── */}
      <CTASection onOpenContact={onOpenContact} />
    </div>
  );
};
