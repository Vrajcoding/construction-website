import React from 'react';
import { Building, Landmark, Factory } from 'lucide-react';
import { motion } from 'framer-motion';
import { Container } from '@/components/layout/Container';
import { SERVICES_DATA, type ServiceItem } from '@/data/mockData';

export const ServicesGridSection: React.FC = () => {
  const getIcon = (name: ServiceItem['iconName']) => {
    switch (name) {
      case 'building':
        return <Building className="w-14 h-14 text-[#0A0909] stroke-[1.2]" />;
      case 'bridge':
        return <Landmark className="w-14 h-14 text-[#0A0909] stroke-[1.2]" />;
      case 'factory':
        return <Factory className="w-14 h-14 text-[#0A0909] stroke-[1.2]" />;
    }
  };

  return (
    <section className="mb-170 w-full bg-white overflow-hidden">
      <Container>
        <motion.h2
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="font-titillium title-section text-normal text-[#0A0909] mb-10 lg:mb-14"
        >
          Our sectors
        </motion.h2>

        {/* 3 Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16">
          {SERVICES_DATA.map((service, idx) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 45 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{
                duration: 0.75,
                delay: idx * 0.15,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="flex flex-col justify-between space-y-6"
            >
              <div>
                {/* Large Line-Art Icon directly on White Background */}
                <div className="mb-6">
                  {getIcon(service.iconName)}
                </div>

                <h3 className="font-titillium title-semi text-normal text-[#0A0909] mb-3">
                  {service.title}
                </h3>

                <p className="font-titillium text-body-14 text-neutral-600 mb-6 max-w-md">
                  {service.description}
                </p>
              </div>

              {/* Tag Pills (Static, Clean, No Hover Color Shifts) */}
              <div className="flex flex-wrap gap-2 pt-2">
                {service.tags.map((tag) => (
                  <span
                    key={tag}
                    className="bg-[#F4F4F4] text-neutral-600 px-3 py-1 text-small-12 font-titillium text-normal tracking-[0.5px] uppercase rounded-[2px]"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
};
