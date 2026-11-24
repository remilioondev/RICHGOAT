import { useEffect, useState } from 'react';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { AboutSection } from './components/AboutSection';
import { HowToBuySection } from './components/HowToBuySection';
import { TokenomicsSection } from './components/TokenomicsSection';
import { AiMachineSection } from './components/AiMachineSection';
import { MerchSection } from './components/MerchSection';
import { JoinSection } from './components/JoinSection';
import { Footer } from './components/Footer';

const SECTION_IDS = ['hero', 'about', 'how', 'tokenomics', 'ai', 'merch', 'join'];

export default function App() {
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        }
      },
      { threshold: 0.35 }
    );

    for (const id of SECTION_IDS) {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen flex flex-col overflow-x-clip">
      <Header activeSection={activeSection} />
      <main className="flex-1">
        <HeroSection />
        <AboutSection />
        <HowToBuySection />
        <TokenomicsSection />
        <AiMachineSection />
        <MerchSection />
        <JoinSection />
      </main>
      <Footer />
    </div>
  );
}
