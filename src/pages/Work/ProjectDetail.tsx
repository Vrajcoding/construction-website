import React, { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, ArrowRight, Tag } from 'lucide-react';
import { Container } from '@/components/layout/Container';
import { SectionEyebrow } from '@/components/ui/SectionEyebrow';
import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { ProjectCard } from '@/components/ui/ProjectCard';
import { PROJECTS_DATA } from '@/data/mockData';
import type { ProjectItem } from '@/data/mockData';
import { CTASection } from '@/pages/Home/components/CTASection';

interface ProjectDetailProps {
  onOpenContact?: () => void;
}

export const ProjectDetail: React.FC<ProjectDetailProps> = ({ onOpenContact }) => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  // Find project by id or fallback to first project
  const project: ProjectItem = PROJECTS_DATA.find((p) => p.id === id) || PROJECTS_DATA[1]; // fallback to Station Home

  // Find prev and next project
  const currentIndex = PROJECTS_DATA.findIndex((p) => p.id === project.id);
  const prevProject = PROJECTS_DATA[(currentIndex - 1 + PROJECTS_DATA.length) % PROJECTS_DATA.length];
  const nextProject = PROJECTS_DATA[(currentIndex + 1) % PROJECTS_DATA.length];

  // Scroll to top on id change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  return (
    <div className="bg-white selection:bg-[#FA6400] selection:text-white">
      {/* ──────────────────────────────────────────────────────── */}
      {/* 1. PROJECT HEADER & TITLE                                */}
      {/* ──────────────────────────────────────────────────────── */}
      <section className="bg-white mt-8 sm:mt-10 lg:mt-12 mb-10 sm:mb-14 overflow-hidden">
        <Container>
          <ScrollReveal>
            <div className="space-y-4 max-w-4xl">
              {/* Back to Work Link */}
              <button
                onClick={() => navigate('/work')}
                className="inline-flex items-center gap-2 font-archivo text-[12px] font-bold tracking-[1.5px] uppercase text-neutral-500 hover:text-[#FA6400] transition-colors mb-2 cursor-pointer"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>Back to Projects</span>
              </button>

              <SectionEyebrow label={project.category} />

              <h1 className="font-titillium text-[38px] sm:text-[54px] lg:text-[70px] xl:text-[80px] font-normal text-[#0A0909] leading-[1.02] tracking-[-0.02em]">
                {project.title}
              </h1>

              {project.date && (
                <p className="font-archivo text-[13px] font-semibold text-neutral-400 uppercase tracking-[1px]">
                  Published {project.date}
                </p>
              )}
            </div>
          </ScrollReveal>
        </Container>
      </section>

      {/* ──────────────────────────────────────────────────────── */}
      {/* 2. PROJECT METADATA BAR & HERO IMAGE                     */}
      {/* ──────────────────────────────────────────────────────── */}
      <section className="bg-white mb-16 sm:mb-24 overflow-hidden">
        <Container>
          {/* Project Meta Spec Box */}
          <ScrollReveal delay={0.1}>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 p-6 sm:p-8 bg-neutral-50 border border-neutral-100 mb-10 sm:mb-14">
              <div>
                <span className="font-archivo text-[11px] font-bold text-neutral-400 tracking-[1.5px] uppercase block mb-1">
                  CLIENT
                </span>
                <span className="font-titillium text-[16px] sm:text-[17px] font-semibold text-[#0A0909]">
                  {project.client || 'Cadillac Fairview Corporation Limited'}
                </span>
              </div>

              <div>
                <span className="font-archivo text-[11px] font-bold text-neutral-400 tracking-[1.5px] uppercase block mb-1">
                  CATEGORY
                </span>
                <span className="font-titillium text-[16px] sm:text-[17px] font-semibold text-[#0A0909]">
                  {project.category}
                </span>
              </div>

              <div>
                <span className="font-archivo text-[11px] font-bold text-neutral-400 tracking-[1.5px] uppercase block mb-1">
                  LOCATION
                </span>
                <span className="font-titillium text-[16px] sm:text-[17px] font-semibold text-[#0A0909]">
                  {project.location || 'New York, NY'}
                </span>
              </div>

              <div>
                <span className="font-archivo text-[11px] font-bold text-neutral-400 tracking-[1.5px] uppercase block mb-1">
                  AREA / ARCHITECT
                </span>
                <span className="font-titillium text-[16px] sm:text-[17px] font-semibold text-[#0A0909]">
                  {project.area || '1.2 million sq ft'}
                </span>
              </div>
            </div>
          </ScrollReveal>

          {/* Hero Project Artwork Frame */}
          <ScrollReveal delay={0.15}>
            <div className="w-full aspect-[16/10] lg:aspect-[16/9] overflow-hidden bg-neutral-100 mb-12 sm:mb-16">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover"
              />
            </div>
          </ScrollReveal>

          {/* Project Body Paragraphs */}
          <ScrollReveal delay={0.2}>
            <div className="max-w-4xl space-y-6 font-titillium text-[17px] sm:text-[19px] text-[#2A2929] leading-[1.8]  ">
              {project.description && project.description.length > 0 ? (
                project.description.map((paragraph, i) => (
                  <p key={i} className="text-[#2A2929]">
                    {paragraph}
                  </p>
                ))
              ) : (
                <p>
                  A premiere address in Toronto’s Financial District, 160 Front Street West is a 46-story structural steel-framed commercial office tower designed to add a distinctive silhouette to the City’s skyline. Although complex, PCL’s in-house building envelope experts optimized design and constructability of the curved cladding that wraps all four exterior walls and integrates the heritage masonry of the 70-year-old, six-story building previously located on the site.
                </p>
              )}
            </div>
          </ScrollReveal>

          {/* Tags */}
          {project.tags && project.tags.length > 0 && (
            <ScrollReveal delay={0.25}>
              <div className="flex items-center gap-3 pt-8 pb-10 border-b border-neutral-100 font-archivo text-[13px]">
                <span className="font-bold text-neutral-400 uppercase tracking-[1px] flex items-center gap-1.5">
                  <Tag className="w-4 h-4 text-[#FA6400]" /> Tags:
                </span>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((t) => (
                    <span
                      key={t}
                      className="px-3 py-1 bg-neutral-100 text-[#0A0909] font-medium text-[12px] uppercase"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          )}

          {/* ──────────────────────────────────────────────────────── */}
          {/* PREVIOUS / NEXT PROJECT NAVIGATION                       */}
          {/* ──────────────────────────────────────────────────────── */}
          <div className="py-12 border-b border-neutral-100 flex flex-col sm:flex-row items-center justify-between gap-6 font-archivo">
            <Link
              to={`/project/${prevProject.id}`}
              className="group flex items-center gap-4 text-[#0A0909] hover:text-[#FA6400] transition-colors"
            >
              <div className="w-10 h-10 border border-neutral-200 group-hover:border-[#FA6400] group-hover:bg-[#FA6400] group-hover:text-white flex items-center justify-center transition-all">
                <ArrowLeft className="w-4 h-4" />
              </div>
              <div className="text-left">
                <span className="text-[11px] font-bold text-neutral-400 uppercase tracking-[1px] block">
                  PREVIOUS PROJECT
                </span>
                <span className="font-titillium text-[18px] sm:text-[20px] font-normal text-[#0A0909] group-hover:text-[#FA6400]">
                  {prevProject.title}
                </span>
              </div>
            </Link>

            <Link
              to={`/project/${nextProject.id}`}
              className="group flex items-center gap-4 text-[#0A0909] hover:text-[#FA6400] transition-colors text-right"
            >
              <div className="text-right">
                <span className="text-[11px] font-bold text-neutral-400 uppercase tracking-[1px] block">
                  NEXT PROJECT
                </span>
                <span className="font-titillium text-[18px] sm:text-[20px] font-normal text-[#0A0909] group-hover:text-[#FA6400]">
                  {nextProject.title}
                </span>
              </div>
              <div className="w-10 h-10 border border-neutral-200 group-hover:border-[#FA6400] group-hover:bg-[#FA6400] group-hover:text-white flex items-center justify-center transition-all">
                <ArrowRight className="w-4 h-4" />
              </div>
            </Link>
          </div>
        </Container>
      </section>

      {/* ──────────────────────────────────────────────────────── */}
      {/* 3. RELATED / LATEST PROJECTS GRID                        */}
      {/* ──────────────────────────────────────────────────────── */}
      <section className="bg-white mb-20 sm:mb-28 overflow-hidden">
        <Container>
          <div className="space-y-8">
            <h3 className="font-titillium text-[32px] sm:text-[42px] font-normal text-[#0A0909]">
              Latest Projects
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10">
              {PROJECTS_DATA.filter((p) => p.id !== project.id).slice(0, 3).map((p, idx) => (
                <ScrollReveal key={p.id} delay={idx * 0.15}>
                  <ProjectCard
                    image={p.image}
                    category={p.category}
                    title={p.title}
                    to={`/project/${p.id}`}
                  />
                </ScrollReveal>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* ──────────────────────────────────────────────────────── */}
      {/* 4. READY TO WORK TOGETHER — CTA Banner                    */}
      {/* ──────────────────────────────────────────────────────── */}
      <CTASection onOpenContact={onOpenContact || (() => {})} />
    </div>
  );
};
