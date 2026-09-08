import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Container } from '@/components/layout/Container';
import { SectionEyebrow } from '@/components/ui/SectionEyebrow';
import { ProjectCard } from '@/components/ui/ProjectCard';
import { PROJECTS_DATA } from '@/data/mockData';

export const ProjectsSection: React.FC = () => {
  return (
    <section id="projects" className="mb-170 w-full bg-white overflow-hidden">
      <Container>
        {/* Intro Block - Aligned with Global Container */}
        <div className="mb-14 lg:mb-18 max-w-4xl text-left space-y-6">
          <SectionEyebrow label="Projects" />
          <motion.h2
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.75, delay: 0.05, ease: [0.16, 1, 0.3, 1] }}
            className="font-titillium title-section text-normal text-[#0A0909] leading-[1.08] tracking-[-0.01em]"
          >
            Delivering our clients more 
            project clarity, greater insight, 
            and less chaos.
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="pt-2"
          >
            <Link
              to="/work"
              className="inline-flex items-center gap-2 font-titillium text-[14px] font-normal text-[#0A0909] hover:text-[#FA6400] transition-colors"
            >
              <span>View all projects</span>
            </Link>
          </motion.div>
        </div>

        {/* Project Cards Grid — Tall Portrait Rectangular Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          {PROJECTS_DATA.slice(0, 3).map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{
                duration: 0.75,
                delay: idx * 0.15,
                ease: [0.16, 1, 0.3, 1],
              }}
            >
              <ProjectCard
                image={project.image}
                category={project.category}
                title={project.title}
                to={`/project/${project.id}`}
              />
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
};
