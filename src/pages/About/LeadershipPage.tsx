import React from 'react';
import { Container } from '@/components/layout/Container';
import { SectionEyebrow } from '@/components/ui/SectionEyebrow';
import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { TEAM_MEMBERS } from '@/data/mockData';
import { CTASection } from '@/pages/Home/components/CTASection';

interface LeadershipPageProps {
  onOpenContact?: () => void;
}

export const LeadershipPage: React.FC<LeadershipPageProps> = ({ onOpenContact }) => {
  return (
    <div className="bg-white selection:bg-[#FA6400] selection:text-white">
      {/* ──────────────────────────────────────────────────────── */}
      {/* 1. HERO SECTION                                         */}
      {/* ──────────────────────────────────────────────────────── */}
      <section className="bg-white mt-6 sm:mt-8 lg:mt-10 mb-8 sm:mb-12 overflow-hidden">
        <Container>
          <ScrollReveal>
            <div className="space-y-4 max-w-4xl border-b border-neutral-100 pb-8 sm:pb-12">
              <SectionEyebrow label="Leadership" />
              <h1 className="font-titillium title-long text-normal text-[#0A0909]">
                Our leaderships
              </h1>
              <p className="font-titillium text-body-14 text-neutral-500">
                Meet our executive leadership team who guides strategic operations, safety protocols, and nationwide engineering excellence across our company.
              </p>
            </div>
          </ScrollReveal>
        </Container>
      </section>

      {/* ──────────────────────────────────────────────────────── */}
      {/* 2. LEADERSHIP MEMBERS GRID                               */}
      {/* ──────────────────────────────────────────────────────── */}
      <section className="bg-white mb-12 sm:mb-16 lg:mb-20 overflow-hidden">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10 lg:gap-12">
            {TEAM_MEMBERS.map((member, idx) => (
              <ScrollReveal key={member.name} delay={idx * 0.1}>
                <div className="group flex flex-col space-y-4 bg-white">
                  {/* Portrait Image Frame */}
                  <div className="w-full aspect-[3.8/5] overflow-hidden bg-neutral-100 relative">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500" />
                  </div>

                  {/* Leader Info & Executive Quote */}
                  <div className="space-y-2.5 pt-1">
                    <h3 className="font-titillium title-semi text-normal text-[#0A0909] group-hover:text-[#FA6400] transition-colors">
                      {member.name}
                    </h3>
                    <p className="font-archivo text-small-12 text-bold text-[#FA6400] tracking-[1px] uppercase">
                      {member.role}
                    </p>
                    <blockquote className="font-titillium text-body-14 text-neutral-600 pt-0.5">
                      {member.quote || member.bio}
                    </blockquote>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </Container>
      </section>

      {/* ──────────────────────────────────────────────────────── */}
      {/* 3. READY TO WORK TOGETHER — CTA Banner                    */}
      {/* ──────────────────────────────────────────────────────── */}
      <CTASection onOpenContact={onOpenContact || (() => {})} />
    </div>
  );
};
