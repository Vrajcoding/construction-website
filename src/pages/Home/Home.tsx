import React from 'react';
import { HeroSection } from './components/HeroSection';
import { IntroCardsSection } from './components/IntroCardsSection';
import { ProjectsSection } from './components/ProjectsSection';
import { ServicesGridSection } from './components/ServicesGridSection';
import { SustainabilitySection } from './components/SustainabilitySection';
import { DarkServicesSection } from './components/DarkServicesSection';
import { StatsSection } from './components/StatsSection';
import { ClientsLogoSection } from './components/ClientsLogoSection';
import { SafetySection } from './components/SafetySection';
import { RedefineBannerSection } from './components/RedefineBannerSection';
import { LeadershipSection } from './components/LeadershipSection';
import { InsightsSection } from './components/InsightsSection';
import { CTASection } from './components/CTASection';

interface HomeProps {
  onOpenContact: () => void;
}

export const Home: React.FC<HomeProps> = ({ onOpenContact }) => {
  return (
    <main className="min-h-screen">
      {/* 1. Hero Section */}
      <HeroSection onOpenContact={onOpenContact} />

      {/* 2. Intro 3-Column Cards */}
      <IntroCardsSection />

      {/* 3. Projects Gallery */}
      <ProjectsSection />

      {/* 4. Sectors & Services Grid */}
      <ServicesGridSection />

      {/* 5. Sustainability Section */}
      <SustainabilitySection />

      {/* 6. Dark Capabilities List */}
      <DarkServicesSection />

      {/* 7. Stats & Info */}
      <StatsSection />

      {/* 8. Safety Culture */}
      <SafetySection onOpenContact={onOpenContact} />

      {/* 9. Redefine Banner */}
      <RedefineBannerSection />

      {/* 10. Executive Leadership */}
      <LeadershipSection />

      {/* 11. Insights & News */}
      <InsightsSection onSelectArticle={(article) => console.log('Selected article:', article.title)} />

      {/* 12. Clients Logos */}
      <ClientsLogoSection />

      {/* 13. Call-To-Action Banner */}
      <CTASection onOpenContact={onOpenContact} />
    </main>
  );
};
