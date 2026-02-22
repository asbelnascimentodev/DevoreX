import React from 'react';
import { motion } from 'framer-motion';
import { Settings2, TrendingUp } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export default function Solution() {
  const { t } = useLanguage();

  const benefits = [
    {
      icon: <Settings2 className="w-10 h-10 text-secondary mb-6 group-hover:scale-110 transition-transform" />,
      title: t.solution.cards[0].title,
      description: t.solution.cards[0].desc
    },
    {
      icon: <TrendingUp className="w-10 h-10 text-secondary mb-6 group-hover:scale-110 transition-transform" />,
      title: t.solution.cards[1].title,
      description: t.solution.cards[1].desc
    }
  ];

  return (
    <section id="solucao" className="py-24 bg-accent/5 border-t border-accent/10 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-secondary mb-6">
            {t.solution.title} <span className="text-accent underline decoration-accent/50 drop-shadow-[0_0_15px_var(--color-accent)]">{t.solution.highlight}</span> {t.solution.titleEnd}
          </h2>
          <p className="text-xl text-secondary/70">
            {t.solution.subtitle}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto">
          {benefits.map((bene, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="group bg-accent p-10 rounded-3xl shadow-xl shadow-accent/20 hover:shadow-2xl hover:shadow-accent/40 transition-all border border-accent/50 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-secondary/10 rounded-bl-full -mr-8 -mt-8" />
              {bene.icon}
              <h3 className="text-2xl font-bold text-secondary mb-4 relative z-10">{bene.title}</h3>
              <p className="text-secondary/90 leading-relaxed font-medium relative z-10">{bene.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
