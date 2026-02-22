import React from 'react';
import { LanguageProvider } from './contexts/LanguageContext';
import Header from './components/Header';
import Globe3D from './components/blocks/Hero';
import Problem from './components/Problem';
import Solution from './components/Solution';
import Testimonials from './components/Testimonials';
import Pricing from './components/Pricing';
import FAQ from './components/FAQ';
import Footer from './components/Footer';

function App() {
  return (
    <LanguageProvider>
      <div className="bg-primary min-h-screen selection:bg-accent selection:text-secondary">
        <Header />
        <main>
          <Globe3D />
          <Problem />
          <Solution />
          <Testimonials />
          <Pricing />
          <FAQ />
        </main>
        <Footer />
      </div>
    </LanguageProvider>
  );
}

export default App;
