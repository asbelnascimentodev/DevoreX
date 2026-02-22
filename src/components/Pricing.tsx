import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, ShieldCheck } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export default function Pricing() {
  const { t } = useLanguage();

  const features = t.pricing.plan.features;

  return (
    <section id="oferta" className="py-24 bg-primary relative border-t border-accent/10 overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/10 rounded-full blur-[120px] -z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-secondary mb-6">
            {t.pricing.title} <span className="text-accent text-transparent bg-clip-text bg-gradient-to-r from-accent to-purple-400 drop-shadow-[0_0_15px_var(--color-accent)]">{t.pricing.highlight}</span>{t.pricing.titleEnd}
          </h2>
          <p className="text-xl text-secondary/70">
            {t.pricing.subtitle}
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto bg-gradient-to-b from-accent/20 to-primary border border-accent/30 rounded-3xl p-1 lg:p-12 shadow-2xl relative">
          
          <div className="absolute top-0 right-0 -mt-5 mr-8 bg-accent text-secondary px-4 py-1 rounded-full text-sm font-bold tracking-wider shadow-lg">
            {t.hero.tag}
          </div>

          <div className="flex flex-col lg:flex-row gap-12 items-center p-8 lg:p-0">
            
            <div className="flex-1 w-full">
              <h3 className="text-3xl font-bold text-secondary mb-2">{t.pricing.plan.name}</h3>
              <p className="text-secondary/60 mb-8 border-b border-accent/20 pb-8">{t.pricing.plan.desc}</p>
              
              <div className="flex items-baseline gap-2 mb-8">
                <span className="text-5xl font-extrabold text-secondary">{t.pricing.plan.price}</span>
              </div>

              <a 
                href="https://wa.me/5513996319533?text=Olá,%20gostaria%20de%20solicitar%20um%20orçamento%20gratuito%20para%20um%20sistema%20sob%20medida!" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-full bg-accent text-secondary py-5 rounded-2xl font-bold text-xl hover:bg-accent/90 transition-all shadow-[0_0_30px_rgba(122,60,120,0.4)] pulsate flex items-center justify-center text-center"
              >
                {t.pricing.plan.cta}
              </a>
              
              <div className="mt-6 flex items-center justify-center gap-2 text-secondary/60 text-sm">
                <ShieldCheck className="w-5 h-5 text-accent" />
                <span>{t.pricing.plan.guarantee}</span>
              </div>
            </div>

            <div className="flex-1 w-full lg:border-l border-accent/20 lg:pl-12">
              <h4 className="text-lg font-semibold text-secondary mb-6">{t.pricing.plan.featuresTitle}</h4>
              <div className="space-y-4">
                {features.map((feat, index) => (
                  <motion.div 
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="flex items-start gap-3 text-secondary/80"
                  >
                    <CheckCircle2 className="w-6 h-6 text-accent flex-shrink-0" />
                    <span className="leading-snug">{feat}</span>
                  </motion.div>
                ))}
              </div>
            </div>

          </div>
        </div>

        {/* Quebra de Objeção */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-20 max-w-3xl mx-auto text-center"
        >
          <h3 className="text-2xl font-bold text-secondary mb-4">
            {t.pricing.objection1.title}
          </h3>
          <p className="text-lg text-secondary/70 leading-relaxed font-light">
            {t.pricing.objection1.desc}
          </p>
        </motion.div>

      </div>
    </section>
  );
}
