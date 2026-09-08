import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Search, Menu, X, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Container } from './Container';
import { NAV_LINKS, PROJECTS_DATA, SERVICES_DATA, NEWS_DATA } from '@/data/mockData';
import { MegaMenu } from './MegaMenu';

// Minimalist outlined line-art house logo (~48x40px, black stroke, no fill)
export const KonstruktionLogoIcon: React.FC<{ className?: string }> = ({ className = "w-12 h-10" }) => (
  <svg className={className} viewBox="0 0 44 36" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M2 18.5L17 4.5L32 18.5V33.5H2V18.5Z" stroke="currentColor" strokeWidth="2.2" strokeLinejoin="round" />
    <path d="M17 4.5V33.5" stroke="currentColor" strokeWidth="2.2" />
    <path d="M21.5 33.5V20.5H27.5V33.5" stroke="currentColor" strokeWidth="2.2" strokeLinejoin="round" />
    <path d="M32 18.5L42 21.5V33.5H32" stroke="currentColor" strokeWidth="2.2" strokeLinejoin="round" />
  </svg>
);

// 2x2 Dot Matrix Icon
export const GridDotIcon: React.FC<{ className?: string }> = ({ className = "w-4 h-4" }) => (
  <svg className={className} viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <circle cx="4" cy="4" r="1.5" />
    <circle cx="12" cy="4" r="1.5" />
    <circle cx="4" cy="12" r="1.5" />
    <circle cx="12" cy="12" r="1.5" />
  </svg>
);

interface NavbarProps {
  onOpenSearch?: () => void;
  onOpenContact?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenContact }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeMegaMenu, setActiveMegaMenu] = useState<'about' | 'services' | 'work' | null>(null);
  const [hoveredLink, setHoveredLink] = useState<string | null>(null);

  // Search Overlay Dropdown State (Opens beneath navbar)
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const searchInputRef = useRef<HTMLInputElement>(null);
  const searchDropdownRef = useRef<HTMLDivElement>(null);

  const location = useLocation();
  const navigate = useNavigate();
  const hoverTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Scroll listener
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Keyboard Escape listener & Outside Click listener for search dropdown
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isSearchOpen) {
        setIsSearchOpen(false);
        setSearchQuery('');
      }
    };

    const handleClickOutside = (e: MouseEvent) => {
      if (
        isSearchOpen &&
        searchDropdownRef.current &&
        !searchDropdownRef.current.contains(e.target as Node)
      ) {
        setIsSearchOpen(false);
        setSearchQuery('');
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isSearchOpen]);

  // Auto-focus input when search opens
  useEffect(() => {
    if (isSearchOpen) {
      setTimeout(() => {
        searchInputRef.current?.focus();
      }, 100);
    } else {
      setSearchQuery('');
    }
  }, [isSearchOpen]);

  // Close search and menus on route change
  useEffect(() => {
    setIsSearchOpen(false);
    setSearchQuery('');
    setMobileMenuOpen(false);
    setActiveMegaMenu(null);
  }, [location.pathname]);

  const handleMouseEnterMenu = (type: 'about' | 'services' | 'work') => {
    if (hoverTimeoutRef.current) clearTimeout(hoverTimeoutRef.current);
    setActiveMegaMenu(type);
  };

  const handleMouseLeaveMenu = () => {
    setHoveredLink(null);
    hoverTimeoutRef.current = setTimeout(() => {
      setActiveMegaMenu(null);
    }, 200);
  };

  // Search submit
  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/work`);
      setIsSearchOpen(false);
      setSearchQuery('');
    }
  };

  // Filter items for live search results
  const filteredProjects = PROJECTS_DATA.filter((p) =>
    p.title.toLowerCase().includes(searchQuery.toLowerCase()) || p.category.toLowerCase().includes(searchQuery.toLowerCase())
  );
  const filteredServices = SERVICES_DATA.filter((s) =>
    s.title.toLowerCase().includes(searchQuery.toLowerCase()) || s.description.toLowerCase().includes(searchQuery.toLowerCase())
  );
  const filteredNews = NEWS_DATA.filter((n) =>
    n.title.toLowerCase().includes(searchQuery.toLowerCase()) || n.category.toLowerCase().includes(searchQuery.toLowerCase())
  );
  const hasResults = searchQuery.trim() !== '' && (filteredProjects.length > 0 || filteredServices.length > 0 || filteredNews.length > 0);

  return (
    <header className="fixed top-0 left-0 right-0 w-full z-50 select-none">
      {/* 1. TOP ACCENT BAR — 4.5px Dark Navy / Charcoal Bar (#1e293b) */}
      <div className="w-full h-[4.5px] bg-[#1e293b]" />

      {/* 2. MAIN NAVBAR — Height: 80px, Margin: 0px 72px, Color: #000000, Font: 14px Titillium Web */}
      <div
        className={`w-full bg-white h-[88px] sm:h-[92px] lg:h-[96px] border-b border-neutral-200/90 transition-shadow duration-300 relative z-20 ${isScrolled ? 'shadow-sm' : ''
          }`}
        onMouseLeave={handleMouseLeaveMenu}
      >
        <div className="h-full mx-4 sm:mx-8 lg:mx-[72px] flex items-center justify-between">
          {/* Left: Brand Logo (User SVG) */}
          <Link
            to="/"
            onMouseEnter={() => {
              setHoveredLink(null);
              setActiveMegaMenu(null);
            }}
            className="flex items-center shrink-0 group py-1"
          >
            <img
              src="/imgi_1_logo-2.svg"
              alt="Konstruktion"
              className="h-[32px] sm:h-[36px] w-auto object-contain"
            />
          </Link>

          {/* Center: Bold Uppercase Nav Links (HOME, ABOUT US, SERVICES, WORK, NEWS) */}
          <nav
            className="hidden md:flex items-center gap-8 lg:gap-10 h-full font-titillium text-[14px]"
            onMouseLeave={() => setHoveredLink(null)}
          >
            {NAV_LINKS.map((link) => {
              const isActive = location.pathname === link.href;
              const isAbout = link.label === 'ABOUT US' || link.href === '/about';
              const isServices = link.label === 'SERVICES' || link.href === '/services';
              const isWork = link.label === 'WORK' || link.href === '/work';

              const isUnderlined = hoveredLink
                ? hoveredLink === link.label
                : isActive ||
                (isAbout && activeMegaMenu === 'about') ||
                (isServices && activeMegaMenu === 'services') ||
                (isWork && activeMegaMenu === 'work');

              return (
                <div
                  key={link.label}
                  className="h-full flex items-center relative"
                  onMouseEnter={() => {
                    setHoveredLink(link.label);
                    if (isAbout) handleMouseEnterMenu('about');
                    else if (isServices) handleMouseEnterMenu('services');
                    else if (isWork) handleMouseEnterMenu('work');
                    else setActiveMegaMenu(null);
                  }}
                >
                  <Link
                    to={link.href}
                    onClick={() => {
                      if (isAbout) setActiveMegaMenu(activeMegaMenu === 'about' ? null : 'about');
                      else if (isServices) setActiveMegaMenu(activeMegaMenu === 'services' ? null : 'services');
                      else if (isWork) setActiveMegaMenu(activeMegaMenu === 'work' ? null : 'work');
                      else setActiveMegaMenu(null);
                    }}
                    className={`font-titillium text-[14px] font-semibold leading-[1.7] tracking-[0.5px] uppercase transition-colors relative flex items-center h-full group ${isUnderlined ? 'text-[#FA6400]' : 'text-[#000000] hover:text-[#FA6400]'
                      }`}
                  >
                    <span className="relative py-1 select-none">
                      {link.label}
                      <span
                        className={`absolute bottom-0 left-0 h-[2px] bg-[#FA6400] transition-all duration-300 ease-out ${isUnderlined ? 'w-full' : 'w-0'
                          }`}
                      />
                    </span>
                  </Link>
                </div>
              );
            })}
          </nav>

          {/* Right Side: Search Icon, Vertical Divider & GET IN TOUCH */}
          <div className="hidden lg:flex items-center gap-5 shrink-0">
            {/* Search Icon (~20px outline style) */}
            <button
              onClick={() => setIsSearchOpen((prev) => !prev)}
              onMouseEnter={() => {
                setHoveredLink(null);
                setActiveMegaMenu(null);
              }}
              className={`p-2 transition-colors cursor-pointer flex items-center justify-center ${isSearchOpen ? 'text-[#FA6400]' : 'text-[#000000] hover:text-[#FA6400]'
                }`}
              aria-label="Search site"
              title="Search"
            >
              <Search className="w-5 h-5 stroke-[2]" />
            </button>

            {/* Thin Vertical Divider (1px, light gray, 24px tall) */}
            <div className="w-[1px] h-6 bg-neutral-300 mx-0.5" />

            {/* GET IN TOUCH Button with 2x2 Dot Grid Icon */}
            <button
              onClick={onOpenContact}
              onMouseEnter={() => {
                setHoveredLink(null);
                setActiveMegaMenu(null);
              }}
              className="flex items-center gap-2.5 font-titillium text-[14px] font-semibold leading-[1.7] tracking-[1.5px] uppercase text-[#000000] hover:text-[#FA6400] transition-colors cursor-pointer group px-2 py-1"
            >
              <GridDotIcon className="w-4 h-4 text-[#000000] group-hover:text-[#FA6400] transition-colors" />
              <span>GET IN TOUCH</span>
            </button>
          </div>

          {/* Mobile Hamburger Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-[#000000] hover:text-[#FA6400] transition-colors"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
          </button>
        </div>
      </div>

      {/* ── 3. SEARCH DROPDOWN COMPONENT (Reveals directly UNDER the navbar) ── */}
      <AnimatePresence>
        {isSearchOpen && (
          <motion.div
            ref={searchDropdownRef}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
            className="absolute top-full left-0 right-0 w-full bg-white border-b border-neutral-200 shadow-xl overflow-hidden z-20"
          >
            <div className="py-7 sm:py-9 lg:py-10 relative w-full">
              {/* Container: full-width flex container with position: relative and generous horizontal padding */}
              <div className="w-full relative flex items-center justify-center px-4 sm:px-8 lg:px-12 min-h-[58px]">
                {/* Search box + button group: SEPARATE inner block, horizontally centered in the full row */}
                <form
                  onSubmit={handleSearchSubmit}
                  className="flex items-center w-full max-w-[520px] sm:max-w-[580px] lg:max-w-[620px]"
                >
                  {/* Search input: larger height, normal font weight, larger font size */}
                  <input
                    ref={searchInputRef}
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search for projects, people, or topics..."
                    className="w-full h-[54px] sm:h-[58px] px-5 font-titillium font-normal text-[16px] sm:text-[17px] md:text-[18px] text-[#0A0909] placeholder:text-[#8E95A0] placeholder:font-normal border border-[#D1D5DB] border-r-0 rounded-none bg-white outline-none focus:border-neutral-500 transition-colors"
                  />

                  {/* Search button: attached directly to input right edge (no gap), solid black square matching height */}
                  <button
                    type="submit"
                    className="w-[54px] h-[54px] sm:w-[58px] sm:h-[58px] bg-[#0A0909] hover:bg-[#FA6400] text-white flex items-center justify-center shrink-0 rounded-none transition-colors cursor-pointer"
                    aria-label="Search"
                  >
                    <Search className="w-5 h-5 sm:w-6 sm:h-6 stroke-[2]" />
                  </button>
                </form>

                {/* Close (X) icon — Positioned at the very end edge */}
                <button
                  onClick={() => {
                    setIsSearchOpen(false);
                    setSearchQuery('');
                  }}
                  className="absolute right-4 sm:right-6 lg:right-8 top-1/2 -translate-y-1/2 p-2 text-[#0A0909] hover:text-[#FA6400] transition-colors cursor-pointer z-30 group"
                  aria-label="Close search"
                >
                  <X className="w-9 h-9 sm:w-11 sm:h-11 md:w-12 md:h-12 stroke-[1.2] group-hover:scale-105 transition-transform" />
                </button>
              </div>

              {/* Live Search Results Dropdown below search input when user types */}
              {searchQuery.trim() !== '' && (
                <div className="mt-6 pt-6 border-t border-neutral-100 max-h-[50vh] overflow-y-auto">
                  <div className="max-w-[520px] sm:max-w-[580px] lg:max-w-[620px] mx-auto px-4 space-y-4">
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
                                  onClick={() => {
                                    setIsSearchOpen(false);
                                    setSearchQuery('');
                                  }}
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
                                  onClick={() => {
                                    setIsSearchOpen(false);
                                    setSearchQuery('');
                                  }}
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
                                  onClick={() => {
                                    setIsSearchOpen(false);
                                    setSearchQuery('');
                                  }}
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
                      <div className="text-center py-4 text-neutral-400 font-titillium text-sm">
                        No results found for "{searchQuery}".
                      </div>
                    )}
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Smooth Mega Menu Dropdown */}
      <AnimatePresence>
        {activeMegaMenu && (
          <MegaMenu
            isOpen={!!activeMegaMenu}
            type={activeMegaMenu}
            onClose={() => setActiveMegaMenu(null)}
          />
        )}
      </AnimatePresence>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="absolute top-full left-0 w-full md:hidden bg-white border-t border-[#CCCCCC] px-8 py-8 space-y-6 shadow-2xl">
          <nav className="flex flex-col space-y-4">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.label}
                to={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`font-archivo text-[15px] font-semibold uppercase tracking-[1px] py-2.5 border-b border-neutral-100 ${location.pathname === link.href ? 'text-[#FA6400]' : 'text-[#0A0909]'
                  }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="pt-2">
            <button
              className="w-full flex items-center justify-center gap-3 py-3.5 bg-[#0A0909] text-white font-archivo text-[14px] font-semibold uppercase tracking-[1px] hover:bg-[#FA6400] transition-colors rounded-[2px]"
              onClick={() => {
                setMobileMenuOpen(false);
                if (onOpenContact) onOpenContact();
              }}
            >
              <GridDotIcon className="w-5 h-5" />
              <span>GET IN TOUCH</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
