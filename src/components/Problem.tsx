import React from 'react';
import { motion } from 'framer-motion';
import { AlertCircle, XOctagon, Clock } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export default function Problem() {
  const { t } = useLanguage();

  const problems = [
    {
      icon: <XOctagon className="w-12 h-12 text-accent/80 mb-4" />,
      title: t.problem.cards[0].title,
      description: t.problem.cards[0].desc
    },
    {
      icon: <AlertCircle className="w-12 h-12 text-accent/80 mb-4" />,
      title: t.problem.cards[1].title,
      description: t.problem.cards[1].desc
    },
    {
      icon: <Clock className="w-12 h-12 text-accent/80 mb-4" />,
      title: t.problem.cards[2].title,
      description: t.problem.cards[2].desc
    }
  ];

  return (
    <section id="problema" className="py-24 bg-primary border-t border-accent/10 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-accent/5 rounded-full blur-[100px] -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-secondary mb-6">
            {t.problem.title} <span className="text-accent underline decoration-accent/50 underline-offset-8 drop-shadow-[0_0_15px_var(--color-accent)]">{t.problem.highlight}</span> {t.problem.titleEnd}
          </h2>
          <p className="text-xl text-secondary/70">
            {t.problem.subtitle}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {problems.map((prob, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-secondary/5 border border-accent/10 p-8 rounded-2xl hover:border-accent/30 transition-colors"
            >
              {prob.icon}
              <h3 className="text-xl font-semibold text-secondary mb-3">{prob.title}</h3>
              <p className="text-secondary/60 leading-relaxed">{prob.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
