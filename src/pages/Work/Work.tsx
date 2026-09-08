import React, { useState } from 'react';
import { Container } from '@/components/layout/Container';
import { SectionEyebrow } from '@/components/ui/SectionEyebrow';
import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { ProjectCard } from '@/components/ui/ProjectCard';
import { PROJECTS_DATA } from '@/data/mockData';
import { CTASection } from '@/pages/Home/components/CTASection';

const FILTERS = [
  'All',
  'Buildings',
  'Residential',
  'Hospitality',
  'Public Buildings',
  'Heavy Industrial',
  'Renovation',
] as const;

interface WorkProps {
  onOpenContact?: () => void;
}

export const Work: React.FC<WorkProps> = ({ onOpenContact }) => {
  const [activeFilter, setActiveFilter] = useState<typeof FILTERS[number]>('All');

  // Filter logic
  const filteredProjects = PROJECTS_DATA.filter((project) => {
    if (activeFilter === 'All') return true;
    const projectCategory = project.category.toLowerCase();
    const filterLower = activeFilter.toLowerCase();
    const tagsLower = project.tags?.map((t) => t.toLowerCase()) || [];
    return projectCategory.includes(filterLower) || tagsLower.includes(filterLower);
  });

  return (
    <div className="pt-0 pb-0 bg-white selection:bg-[#FA6400] selection:text-white">

      {/* ──────────────────────────────────────────────────────── */}
      {/* 1. HERO & FILTERS                                        */}
      {/* ──────────────────────────────────────────────────────── */}
      <section className="bg-white pt-2 pb-8 sm:pb-10 lg:pb-12 overflow-hidden">
        <Container>
          <ScrollReveal>
            <div className="w-full flex flex-col justify-start">
              {/* Eyebrow */}
              <SectionEyebrow label="Our Work" className="mb-2" />

              {/* Heading */}
              <h1 className="font-titillium text-[56px] sm:text-[68px] lg:text-[76px] xl:text-[80px] font-normal text-[#0A0909] leading-[0.98] tracking-[-0.02em] mt-1">
                Projects
              </h1>

              {/* Subtitle stacked directly below Projects */}
              <p className="font-titillium text-[14px] sm:text-[15px] text-[#222222] leading-[1.6] max-w-[560px] mt-3 sm:mt-4">
                Building the future of the construction industry, one project at a time.
              </p>
            </div>
          </ScrollReveal>

          {/* Horizontal Filters matching reference */}
          <ScrollReveal delay={0.15}>
            <div className="flex flex-wrap items-center gap-x-8 sm:gap-x-10 lg:gap-x-12 gap-y-3.5 pt-8 sm:pt-10 lg:pt-12">
              {FILTERS.map((filterName) => (
                <button
                  key={filterName}
                  onClick={() => setActiveFilter(filterName)}
                  className={`font-titillium text-[15px] sm:text-[16px] font-normal transition-colors cursor-pointer ${
                    activeFilter === filterName
                      ? 'text-[#FA6400]'
                      : 'text-[#0A0909] hover:text-[#FA6400]'
                  }`}
                >
                  {filterName}
                </button>
              ))}
            </div>
          </ScrollReveal>
        </Container>
      </section>

      {/* ──────────────────────────────────────────────────────── */}
      {/* 2. PROJECTS GRID                                         */}
      {/* ──────────────────────────────────────────────────────── */}
      <section className="bg-white mb-12 sm:mb-16 lg:mb-20 overflow-hidden">
        <Container>
          {filteredProjects.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10 lg:gap-12">
              {filteredProjects.map((project, idx) => (
                <ScrollReveal key={project.id} delay={idx * 0.15}>
                  <ProjectCard
                    image={project.image}
                    category={project.category}
                    title={project.title}
                    to={`/project/${project.id}`}
                  />
                </ScrollReveal>
              ))}
            </div>
          ) : (
            <div className="py-12 text-center text-neutral-400 font-titillium text-body-14">
              No projects found in this category.
            </div>
          )}
        </Container>
      </section>

      {/* ──────────────────────────────────────────────────────── */}
      {/* 3. READY TO WORK TOGETHER — CTA Section                  */}
      {/* ──────────────────────────────────────────────────────── */}
      <CTASection onOpenContact={onOpenContact || (() => {})} />

    </div>
  );
};
