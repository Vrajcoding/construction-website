import React from 'react';
import { Link } from 'react-router-dom';
import { Container } from './Container';
import { KonstruktionLogoIcon } from './Navbar';
import { OFFICE_LOCATIONS } from '@/data/mockData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-white text-[#0A0909] font-titillium relative">
      {/* Top Orange Horizontal Accent Line matching Image 1 & 2 */}
      <div className="h-1.5 bg-[#FA6400] w-full" />

      <Container className="pt-20 pb-12 space-y-16">
        {/* Tier 1: Brand Col & 4 Office Location Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-12 items-start pb-12">
          {/* Column 1: Brand Logo (User SVG) */}
          <div className="lg:col-span-1 space-y-4">
            <Link to="/" className="inline-block group">
              <img
                src="/imgi_21_logo-footer.svg"
                alt="Konstruktion"
                className="h-[72px] w-auto object-contain"
              />
            </Link>
          </div>

          {/* Columns 2-5: 4 Office Locations (New York, Miami FL, New Jersey, Washington DC) */}
          {OFFICE_LOCATIONS.map((office) => (
            <div key={office.city} className="space-y-4 font-titillium text-[13px] sm:text-[14px]">
              <h4 className="font-archivo text-[12px] font-bold uppercase tracking-[1px] text-[#0A0909]">
                {office.city}
              </h4>
              <div className="space-y-1 text-neutral-600 leading-[1.6]">
                <p className="max-w-[220px]">{office.address}</p>
                <p className="text-[#0A0909] font-normal pt-1">{office.phone}</p>
                <a href={`mailto:${office.email}`} className="text-neutral-500 hover:text-[#FA6400] transition-colors block">
                  {office.email}
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Tier 2: 5 Horizontal Nav Links with underline rules */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 pt-4 pb-12">
          {[
            { label: 'PROJECTS', href: '/work' },
            { label: 'HISTORY', href: '/about/history' },
            { label: 'VISION', href: '/services/vision' },
            { label: 'LEADERSHIP', href: '/leadership' },
            { label: 'CAREERS', href: '/about#careers' },
          ].map((link) => (
            <div key={link.label} className="space-y-2">
              <Link
                to={link.href}
                className="font-archivo text-[13px] font-bold uppercase tracking-[1.2px] text-[#0A0909] hover:text-[#FA6400] transition-colors block"
              >
                {link.label}
              </Link>
              <div className="w-full h-[1px] bg-neutral-200" />
            </div>
          ))}
        </div>

        {/* Tier 3: Copyright, Socials, Legal, and Back to Top */}
        <div className="pt-6 border-t border-neutral-100 flex flex-col md:flex-row items-center justify-between gap-6 text-[13px] text-neutral-500">
          {/* Copyright */}
          <div>
            <span>©2026 Vamtam. All rights reserved.</span>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-8 text-[#0A0909] font-titillium">
            <a href="https://facebook.com" target="_blank" rel="noreferrer" className="hover:text-[#FA6400] transition-colors">
              Facebook
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="hover:text-[#FA6400] transition-colors">
              Linkedin
            </a>
            <a href="https://instagram.com" target="_blank" rel="noreferrer" className="hover:text-[#FA6400] transition-colors">
              Instagram
            </a>
          </div>

          {/* Legal & Back to Top */}
          <div className="flex items-center gap-8">
            <a href="#terms" className="hover:text-[#0A0909] transition-colors">
              Terms and Conditions
            </a>
            <a href="#privacy" className="hover:text-[#0A0909] transition-colors">
              Privacy Policy
            </a>
            <button
              onClick={scrollToTop}
              className="flex items-center gap-2 font-titillium text-[13px] text-neutral-500 hover:text-[#FA6400] transition-colors cursor-pointer ml-4"
            >
              <span>— Back to top</span>
            </button>
          </div>
        </div>
      </Container>
    </footer>
  );
};
