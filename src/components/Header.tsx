import React, { useState } from 'react';
import { Menu, X, Globe } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import '@fontsource/raleway';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  const toggleLanguage = () => {
    setLanguage(language === 'pt' ? 'en' : 'pt');
  };

  return (
    <header className="fixed w-full top-0 z-50 bg-primary/95 backdrop-blur-sm border-b border-accent/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex-shrink-0 flex items-center">
            <span className="text-secondary font-bold text-2xl tracking-tighter">
              Devora<span className="text-accent">X</span>
            </span>
          </div>
          
          <nav className="hidden md:flex space-x-8">
            <a href="#solucao" className="text-secondary hover:text-accent transition-colors">{t.header.solutions}</a>
            <a href="#depoimentos" className="text-secondary hover:text-accent transition-colors">{t.header.clients}</a>
            <a href="#faq" className="text-secondary hover:text-accent transition-colors">{t.header.faq}</a>
          </nav>

          <div className="hidden md:flex items-center space-x-6">
            <button 
              onClick={toggleLanguage}
              className="flex items-center gap-2 text-secondary/80 hover:text-accent transition-colors text-sm font-semibold uppercase tracking-wider"
              aria-label="Toggle language"
            >
              <Globe size={18} />
              {language === 'pt' ? 'EN' : 'PT'}
            </button>
            <a href="#oferta" className="bg-accent text-secondary px-6 py-2 rounded-full font-semibold hover:bg-accent/80 transition-all shadow-lg shadow-accent/20">
              {language === 'pt' ? 'Transforme sua ideia' : 'Transform your idea'}
            </a>
          </div>

          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-secondary p-2">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-primary border-b border-accent/20">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 flex flex-col items-center">
            <a href="#solucao" onClick={() => setIsOpen(false)} className="block px-3 py-2 text-secondary hover:text-accent">{t.header.solutions}</a>
            <a href="#depoimentos" onClick={() => setIsOpen(false)} className="block px-3 py-2 text-secondary hover:text-accent">{t.header.clients}</a>
            <a href="#faq" onClick={() => setIsOpen(false)} className="block px-3 py-2 text-secondary hover:text-accent">{t.header.faq}</a>
            <button 
              onClick={() => { toggleLanguage(); setIsOpen(false); }}
              className="flex items-center justify-center gap-2 text-secondary/80 hover:text-accent transition-colors py-4 w-full border-t border-accent/20 mt-2 font-semibold uppercase tracking-wider"
            >
              <Globe size={18} />
              {language === 'pt' ? 'Mudar para Inglês (EN)' : 'Switch to Portuguese (PT)'}
            </button>
            <a href="#oferta" onClick={() => setIsOpen(false)} className="mt-4 bg-accent text-secondary px-6 py-2 rounded-full font-semibold w-full text-center">
              {language === 'pt' ? 'Transforme sua ideia' : 'Transform your idea'}
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
