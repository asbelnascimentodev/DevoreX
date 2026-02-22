import React from 'react';
import { Instagram, Linkedin, Mail, Twitter } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export default function Footer() {
  const { t } = useLanguage();
  return (
    <footer className="bg-primary pt-20 pb-10 border-t border-accent/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-2">
            <span className="text-secondary font-bold text-3xl tracking-tighter mb-6 block">
              Devora<span className="text-accent">X</span>
            </span>
            <p className="text-secondary/60 text-lg leading-relaxed max-w-md mb-8">
              {t.footer.desc}
            </p>
            <div className="flex gap-4">
              <a href="https://www.instagram.com/devorax.io/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center text-secondary hover:bg-accent transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" aria-label="LinkedIn" className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center text-secondary hover:bg-accent transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="#" aria-label="Twitter" className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center text-secondary hover:bg-accent transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" aria-label="Email" className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center text-secondary hover:bg-accent transition-colors">
                <Mail size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-bold text-secondary mb-6">{t.footer.navTitle}</h4>
            <ul className="space-y-4">
              <li><a href="#solucao" className="text-secondary/60 hover:text-accent transition-colors">{t.footer.nav.solutions}</a></li>
              <li><a href="#problema" className="text-secondary/60 hover:text-accent transition-colors">{t.footer.nav.problem}</a></li>
              <li><a href="#depoimentos" className="text-secondary/60 hover:text-accent transition-colors">{t.footer.nav.testimonials}</a></li>
              <li><a href="#faq" className="text-secondary/60 hover:text-accent transition-colors">{t.footer.nav.faq}</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold text-secondary mb-6">{t.footer.legalTitle}</h4>
            <ul className="space-y-4">
              <li><a href="#" className="text-secondary/60 hover:text-accent transition-colors">{t.footer.legal.terms}</a></li>
              <li><a href="#" className="text-secondary/60 hover:text-accent transition-colors">{t.footer.legal.privacy}</a></li>
              <li><a href="#" className="text-secondary/60 hover:text-accent transition-colors">{t.footer.legal.guarantee}</a></li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-accent/10 text-center flex flex-col items-center">
          <p className="text-secondary/40 text-sm">
            &copy; {new Date().getFullYear()} {t.footer.copyright}
          </p>
        </div>
      </div>
    </footer>
  );
}
