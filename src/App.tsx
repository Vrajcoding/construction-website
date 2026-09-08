import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { ContactModal } from '@/components/ui/ContactModal';

import { Home } from '@/pages/Home/Home';
import { About } from '@/pages/About/About';
import { History } from '@/pages/About/History';
import { Services } from '@/pages/Services/Services';
import { Construction } from '@/pages/Services/Construction';
import { DesignBuild } from '@/pages/Services/DesignBuild';
import { PreConstruction } from '@/pages/Services/PreConstruction';
import { LumpSum } from '@/pages/Services/LumpSum';
import { Vision } from '@/pages/Services/Vision';
import { Sustainability } from '@/pages/Services/Sustainability';
import { Work } from '@/pages/Work/Work';
import { ProjectDetail } from '@/pages/Work/ProjectDetail';
import { News } from '@/pages/News/News';
import { LeadershipPage } from '@/pages/About/LeadershipPage';

export function App() {
  const [contactOpen, setContactOpen] = useState(false);

  return (
    <Router>
      <div className="min-h-screen flex flex-col font-sans selection:bg-[#FA6400] selection:text-white">
        {/* Global Navigation Header */}
        <Navbar
          onOpenContact={() => setContactOpen(true)}
        />

        {/* Main Content Area */}
        <div className="flex-1 pt-[92px] lg:pt-[100px]">
          <Routes>
            <Route path="/" element={<Home onOpenContact={() => setContactOpen(true)} />} />
            <Route path="/about" element={<About onOpenContact={() => setContactOpen(true)} />} />
            <Route path="/about/history" element={<History onOpenContact={() => setContactOpen(true)} />} />

            {/* Services Main & Subpages */}
            <Route path="/services" element={<Services onOpenContact={() => setContactOpen(true)} />} />
            <Route path="/services/construction" element={<Construction onOpenContact={() => setContactOpen(true)} />} />
            <Route path="/services/design-build" element={<DesignBuild onOpenContact={() => setContactOpen(true)} />} />
            <Route path="/services/pre-construction" element={<PreConstruction onOpenContact={() => setContactOpen(true)} />} />
            <Route path="/services/lump-sum" element={<LumpSum onOpenContact={() => setContactOpen(true)} />} />
            <Route path="/services/vision" element={<Vision onOpenContact={() => setContactOpen(true)} />} />
            <Route path="/services/sustainability" element={<Sustainability onOpenContact={() => setContactOpen(true)} />} />
            <Route path="/leadership" element={<LeadershipPage onOpenContact={() => setContactOpen(true)} />} />

            <Route path="/work" element={<Work onOpenContact={() => setContactOpen(true)} />} />
            <Route path="/project/:id" element={<ProjectDetail onOpenContact={() => setContactOpen(true)} />} />
            <Route path="/news" element={<News onOpenContact={() => setContactOpen(true)} />} />
            <Route path="*" element={<Home onOpenContact={() => setContactOpen(true)} />} />
          </Routes>
        </div>

        {/* Global Footer */}
        <Footer />

        {/* Modals */}
        <ContactModal isOpen={contactOpen} onClose={() => setContactOpen(false)} />
      </div>
    </Router>
  );
}

export default App;
