import React from 'react';
import { Container } from '@/components/layout/Container';
import { CLIENT_LOGOS } from '@/data/mockData';

export const ClientsLogoSection: React.FC = () => {
  return (
    <section className="mb-170 w-full bg-white">
      <Container>
        <div className="flex flex-col md:flex-row items-center gap-8 lg:gap-12 justify-between">
          {/* Left Title & Divider */}
          <div className="flex items-center gap-8 shrink-0">
            <h3 className="font-titillium text-[28px] sm:text-[36px] font-normal text-[#0A0909]">
              Our clients
            </h3>
            <span className="hidden md:block w-[1px] h-10 bg-neutral-300" />
          </div>

          {/* Client Logos Row matching reference screenshot */}
          <div className="flex flex-wrap items-center justify-center md:justify-end gap-10 lg:gap-14">
            {CLIENT_LOGOS.map((logo) => (
              <div
                key={logo.name}
                className="flex items-baseline gap-1 group cursor-pointer"
              >
                <span className="font-titillium text-[24px] sm:text-[28px] font-normal text-[#0A0909] group-hover:text-[#FA6400] transition-colors">
                  {logo.name}
                </span>
                {logo.subtitle && (
                  <span className="font-archivo text-[10px] font-medium tracking-[0.8px] text-neutral-400 uppercase">
                    {logo.subtitle}
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};
