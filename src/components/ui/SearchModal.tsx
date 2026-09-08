import React, { useState, useEffect, useRef } from 'react';
import { X, Search, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Container } from '@/components/layout/Container';
import { PROJECTS_DATA, SERVICES_DATA, NEWS_DATA } from '@/data/mockData';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const SearchModal: React.FC<SearchModalProps> = ({ isOpen, onClose }) => {
  const [query, setQuery] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => {
        inputRef.current?.focus();
      }, 100);
    } else {
      setQuery('');
    }
  }, [isOpen]);

  const filteredProjects = PROJECTS_DATA.filter((p) =>
    p.title.toLowerCase().includes(query.toLowerCase()) || p.category.toLowerCase().includes(query.toLowerCase())
  );

  const filteredServices = SERVICES_DATA.filter((s) =>
    s.title.toLowerCase().includes(query.toLowerCase()) || s.description.toLowerCase().includes(query.toLowerCase())
  );

  const filteredNews = NEWS_DATA.filter((n) =>
    n.title.toLowerCase().includes(query.toLowerCase()) || n.category.toLowerCase().includes(query.toLowerCase())
  );

  const hasResults = query.trim() !== '' && (filteredProjects.length > 0 || filteredServices.length > 0 || filteredNews.length > 0);

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[120]">
          {/* Subtle Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="absolute inset-0 bg-black/30 backdrop-blur-[2px]"
            onClick={onClose}
          />

          {/* Top Full-Width Header Search Bar matching Screenshot 1 */}
          <motion.div
            initial={{ y: -80, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -80, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="relative z-10 w-full bg-white border-b border-neutral-200 shadow-md py-7 sm:py-9 lg:py-10"
          >
            {/* Container: full-width flex container with position: relative and generous horizontal padding */}
            <div className="w-full relative flex items-center justify-center px-4 sm:px-8 lg:px-12 min-h-[58px]">
              {/* Search box + button group: SEPARATE inner block, horizontally centered in the full row */}
              <div className="flex items-center w-full max-w-[520px] sm:max-w-[580px] lg:max-w-[620px]">
                <input
                  ref={inputRef}
                  type="text"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Search for projects, people, or topics..."
                  className="w-full h-[54px] sm:h-[58px] px-5 font-titillium font-normal text-[16px] sm:text-[17px] md:text-[18px] text-[#0A0909] placeholder:text-[#8E95A0] placeholder:font-normal border border-[#D1D5DB] border-r-0 rounded-none bg-white outline-none focus:border-neutral-500 transition-colors"
                />
                <button
                  type="button"
                  className="w-[54px] h-[54px] sm:w-[58px] sm:h-[58px] bg-[#0A0909] hover:bg-[#FA6400] text-white flex items-center justify-center shrink-0 rounded-none transition-colors cursor-pointer"
                  aria-label="Submit search"
                >
                  <Search className="w-5 h-5 sm:w-6 sm:h-6 stroke-[2]" />
                </button>
              </div>

              {/* Close (X) icon — Positioned at the very end edge */}
              <button
                onClick={onClose}
                className="absolute right-4 sm:right-6 lg:right-8 top-1/2 -translate-y-1/2 p-2 text-[#0A0909] hover:text-[#FA6400] transition-colors cursor-pointer z-30 group"
                aria-label="Close search"
              >
                <X className="w-9 h-9 sm:w-11 sm:h-11 md:w-12 md:h-12 stroke-[1.2] group-hover:scale-105 transition-transform" />
              </button>
            </div>

            {/* Live Search Results Dropdown below top bar */}
            {query.trim() !== '' && (
              <div className="border-t border-neutral-100 bg-white py-6 max-h-[60vh] overflow-y-auto shadow-xl">
                <Container className="max-w-[620px] mx-auto space-y-6">
                  {hasResults ? (
                    <>
                      {filteredProjects.length > 0 && (
                        <div>
                          <h4 className="font-archivo text-[11px] font-bold uppercase tracking-wider text-neutral-400 mb-2">Projects</h4>
                          <div className="space-y-2">
                            {filteredProjects.map((p) => (
                              <Link
                                key={p.id}
                                to={`/project/${p.id}`}
                                onClick={onClose}
                                className="flex items-center justify-between p-3 hover:bg-neutral-50 border border-neutral-100 transition-colors"
                              >
                                <div>
                                  <p className="font-titillium font-normal text-[15px] text-[#0A0909]">{p.title}</p>
                                  <p className="font-titillium text-xs text-neutral-500">{p.category}</p>
                                </div>
                                <ArrowRight className="w-4 h-4 text-[#FA6400]" />
                              </Link>
                            ))}
                          </div>
                        </div>
                      )}

                      {filteredServices.length > 0 && (
                        <div>
                          <h4 className="font-archivo text-[11px] font-bold uppercase tracking-wider text-neutral-400 mb-2">Services</h4>
                          <div className="space-y-2">
                            {filteredServices.map((s) => (
                              <Link
                                key={s.id}
                                to="/services"
                                onClick={onClose}
                                className="flex items-center justify-between p-3 hover:bg-neutral-50 border border-neutral-100 transition-colors"
                              >
                                <div>
                                  <p className="font-titillium font-normal text-[15px] text-[#0A0909]">{s.title}</p>
                                  <p className="font-titillium text-xs text-neutral-500 line-clamp-1">{s.description}</p>
                                </div>
                                <ArrowRight className="w-4 h-4 text-[#FA6400]" />
                              </Link>
                            ))}
                          </div>
                        </div>
                      )}

                      {filteredNews.length > 0 && (
                        <div>
                          <h4 className="font-archivo text-[11px] font-bold uppercase tracking-wider text-neutral-400 mb-2">News & Insights</h4>
                          <div className="space-y-2">
                            {filteredNews.map((n) => (
                              <Link
                                key={n.id}
                                to="/news"
                                onClick={onClose}
                                className="flex items-center justify-between p-3 hover:bg-neutral-50 border border-neutral-100 transition-colors"
                              >
                                <div>
                                  <p className="font-titillium font-normal text-[15px] text-[#0A0909]">{n.title}</p>
                                  <p className="font-titillium text-xs text-neutral-500">{n.category}</p>
                                </div>
                                <ArrowRight className="w-4 h-4 text-[#FA6400]" />
                              </Link>
                            ))}
                          </div>
                        </div>
                      )}
                    </>
                  ) : (
                    <div className="text-center py-6 text-neutral-400 font-titillium text-sm">
                      No results found for "{query}".
                    </div>
                  )}
                </Container>
              </div>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
