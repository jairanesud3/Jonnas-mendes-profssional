import React from 'react';
import { Hero } from './components/Hero';
import { Header } from './components/Header';
import { TrustBar } from './components/TrustBar';
import { About } from './components/About';
import { PainPoints } from './components/PainPoints';
import { Opportunity } from './components/Opportunity';
import { Process } from './components/Process';
import { Portfolio } from './components/Portfolio';
import { Packages } from './components/Packages';
import { FAQ } from './components/FAQ';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { InteractiveBackground } from './components/InteractiveBackground';

const App: React.FC = () => {
  return (
    <div className="min-h-screen text-white font-sans selection:bg-neonPurple selection:text-white relative overflow-hidden">
      <InteractiveBackground />
      <Header />
      <main className="relative z-10">
        <Hero />
        <TrustBar />
        <About />
        <PainPoints />
        <Opportunity />
        <Portfolio />
        <Process />
        <Packages />
        <FAQ />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
};

export default App;