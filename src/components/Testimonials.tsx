import React from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export default function Testimonials() {
  const { t } = useLanguage();

  const testimonials = [
    {
      name: t.testimonials.cards[0].name,
      role: t.testimonials.cards[0].role,
      image: "https://i.pravatar.cc/150?img=11",
      feedback: t.testimonials.cards[0].text.replace(/"/g, '')
    },
    {
      name: t.testimonials.cards[1].name,
      role: t.testimonials.cards[1].role,
      image: "https://i.pravatar.cc/150?img=5",
      feedback: t.testimonials.cards[1].text.replace(/"/g, '')
    },
    {
      name: t.testimonials.cards[2].name,
      role: t.testimonials.cards[2].role,
      image: "https://i.pravatar.cc/150?img=14",
      feedback: t.testimonials.cards[2].text.replace(/"/g, '')
    }
  ];

  return (
    <section id="depoimentos" className="py-24 bg-primary relative border-t border-accent/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-secondary mb-6">
            {t.testimonials.title} <span className="text-accent drop-shadow-[0_0_15px_var(--color-accent)]">{t.testimonials.highlight}</span> {t.testimonials.titleEnd}
          </h2>
          <p className="text-xl text-secondary/70">
            {t.testimonials.subtitle}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testi, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-secondary/5 border border-accent/20 p-8 rounded-2xl flex flex-col"
            >
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                ))}
              </div>
              
              <p className="text-secondary/80 text-lg leading-relaxed mb-8 flex-grow italic">
                "{testi.feedback}"
              </p>
              
              <div className="flex items-center gap-4">
                <img 
                  src={testi.image} 
                  alt={testi.name} 
                  className="w-14 h-14 rounded-full border-2 border-accent object-cover"
                />
                <div>
                  <h4 className="text-secondary font-bold">{testi.name}</h4>
                  <p className="text-secondary/50 text-sm">{testi.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
