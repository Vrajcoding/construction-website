import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

interface MegaMenuProps {
  isOpen: boolean;
  onClose: () => void;
  type: 'about' | 'services' | 'work';
}

export const MegaMenu: React.FC<MegaMenuProps> = ({ isOpen, onClose, type }) => {
  if (!isOpen) return null;

  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
      className="absolute top-full left-0 w-full bg-white border-b border-[#CCCCCC] shadow-2xl z-40 overflow-hidden"
      onMouseLeave={onClose}
    >
      {/* Composition Container: Left content + Right image flush to viewport */}
      <div className="w-full flex justify-between items-stretch min-h-[460px] lg:min-h-[500px]">
        {/* Left Content Area: Container aligned */}
        <div className="flex-1 flex justify-end xl:justify-center items-center py-10 lg:py-14 px-6 sm:px-10 xl:px-16">
          <div className="w-full max-w-[720px] py-2">
            
            {/* ABOUT MEGA MENU */}
            {type === 'about' && (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 lg:gap-x-20 gap-y-8 lg:gap-y-10 items-start w-full">
                {[
                  { title: "Vision", desc: "We are passionately leading the way in digitizing the construction industry.", href: "/services/vision" },
                  { title: "Sustainability", desc: "Our holistic approach addresses partners, people, projects, practices & places.", href: "/services/sustainability" },
                  { title: "Who we are", desc: "From small renovations to complex billion dollar projects.", href: "/about" },
                  { title: "Careers", desc: "We choose to include. People from every background are our greatest asset.", href: "/about#careers" },
                  { title: "History", desc: "Working with us means you have our 4,500+ network of experts beside you.", href: "/about/history" },
                  { title: "Leadership", desc: "Meet our leadership team who guides strategic operations across our company.", href: "/leadership" },
                  { title: "Safety", desc: "Creating a safe and healthy work environment is a central guiding principle.", href: "/services/safety" }
                ].map((item) => (
                  <Link
                    key={item.title}
                    to={item.href}
                    onClick={onClose}
                    className="block group"
                  >
                    <h3 className="font-titillium text-[24px] lg:text-[27px] font-normal text-[#0A0909] group-hover:text-[#FA6400] transition-colors mb-2 inline-block relative">
                      {item.title}
                      <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-[#FA6400] transition-all duration-300 group-hover:w-full" />
                    </h3>
                    <p className="font-titillium text-[14px] sm:text-[15px] text-neutral-500 leading-[1.55] max-w-[290px]">
                      {item.desc}
                    </p>
                  </Link>
                ))}
              </div>
            )}

            {/* SERVICES MEGA MENU */}
            {type === 'services' && (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 lg:gap-x-20 gap-y-8 lg:gap-y-10 items-start w-full">
                <div className="space-y-8 lg:space-y-10">
                  {[
                    {
                      title: "Construction",
                      desc: "From preconstruction to virtual design and construction, we offer a wide range of services to meet your building needs.",
                      href: "/services/construction"
                    },
                    {
                      title: "Design - Build",
                      desc: "Certainty of outcome. It's why our clients choose us for their most challenging Design/Build projects.",
                      href: "/services/design-build"
                    },
                    {
                      title: "Pre-Construction Services",
                      desc: "From engineering to preconstruction, we offer a variety of services and delivery methods.",
                      href: "/services/pre-construction"
                    }
                  ].map((item) => (
                    <Link
                      key={item.title}
                      to={item.href}
                      onClick={onClose}
                      className="block group"
                    >
                      <h3 className="font-titillium text-[24px] lg:text-[27px] font-normal text-[#0A0909] group-hover:text-[#FA6400] transition-colors mb-2 inline-block relative">
                        {item.title}
                        <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-[#FA6400] transition-all duration-300 group-hover:w-full" />
                      </h3>
                      <p className="font-titillium text-[14px] sm:text-[15px] text-neutral-500 leading-[1.55] max-w-[290px]">
                        {item.desc}
                      </p>
                    </Link>
                  ))}
                </div>

                <div className="space-y-8 lg:space-y-10">
                  <Link
                    to="/services/lump-sum"
                    onClick={onClose}
                    className="block group"
                  >
                    <h3 className="font-titillium text-[24px] lg:text-[27px] font-normal text-[#0A0909] group-hover:text-[#FA6400] transition-colors mb-2 inline-block relative">
                      Lump-Sum Contracting
                      <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-[#FA6400] transition-all duration-300 group-hover:w-full" />
                    </h3>
                    <p className="font-titillium text-[14px] sm:text-[15px] text-neutral-500 leading-[1.55] max-w-[290px]">
                      The Construction Manager is not required to provide an estimate or contract cost breakdown and does not typically participate in pre-construction.
                    </p>
                  </Link>
                </div>
              </div>
            )}

            {/* WORK MEGA MENU */}
            {type === 'work' && (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 lg:gap-x-20 gap-y-8 lg:gap-y-10 items-start w-full">
                <div className="space-y-8 lg:space-y-10">
                  {[
                    {
                      title: "Projects",
                      desc: "Explore some of our projects and see how we're transforming the built world.",
                      href: "/work"
                    },
                    {
                      title: "Awards",
                      desc: "Awards validate the safety, ethics, and quality that we commit to every day.",
                      href: "/work"
                    }
                  ].map((item) => (
                    <Link
                      key={item.title}
                      to={item.href}
                      onClick={onClose}
                      className="block group"
                    >
                      <h3 className="font-titillium text-[24px] lg:text-[27px] font-normal text-[#0A0909] group-hover:text-[#FA6400] transition-colors mb-2 inline-block relative">
                        {item.title}
                        <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-[#FA6400] transition-all duration-300 group-hover:w-full" />
                      </h3>
                      <p className="font-titillium text-[14px] sm:text-[15px] text-neutral-500 leading-[1.55] max-w-[290px]">
                        {item.desc}
                      </p>
                    </Link>
                  ))}
                </div>

                <div className="space-y-4">
                  <span className="font-archivo text-[11px] font-bold text-neutral-400 tracking-[1.5px] uppercase block mb-2">
                    Latest Projects
                  </span>
                  <div className="space-y-3.5 divide-y divide-neutral-100">
                    {[
                      { category: "Residential", title: "One Thousand Museum", href: "/project/one-thousand-museum" },
                      { category: "Public Buildings", title: "Station Home", href: "/project/station-home" },
                      { category: "Hospitality", title: "Railcar Factory", href: "/project/railcar-factory" },
                      { category: "Hospitality", title: "Park Offices", href: "/project/park-offices-2" }
                    ].map((project, idx) => (
                      <Link
                        key={project.title}
                        to={project.href}
                        onClick={onClose}
                        className={`block group ${idx > 0 ? 'pt-3.5' : ''}`}
                      >
                        <span className="font-archivo text-[10.5px] font-semibold text-neutral-400 tracking-[1px] block">
                          {project.category}
                        </span>
                        <h4 className="font-titillium text-[19px] lg:text-[21px] font-normal text-[#0A0909] group-hover:text-[#FA6400] transition-colors leading-tight">
                          {project.title}
                        </h4>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            )}

          </div>
        </div>

        {/* Right Image: Flush to right browser viewport edge */}
        <div className="hidden md:block w-[380px] lg:w-[460px] xl:w-[520px] 2xl:w-[580px] shrink-0 relative bg-neutral-100 min-h-full overflow-hidden">
          <img
            src={type === 'work' ? '/First-page-image.jpg' : '/white-peramid-image.png'}
            onError={(e) => {
              (e.target as HTMLImageElement).src = '/First-page-image.jpg';
            }}
            alt="Reference architectural detail structure"
            className="w-full h-full object-cover block absolute inset-0"
          />
        </div>
      </div>
    </motion.div>
  );
};
