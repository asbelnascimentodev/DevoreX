import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { RainbowButton } from '../ui/rainbow-borders-button';
import { useLanguage } from '../../contexts/LanguageContext';

export default function Globe3D() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const { t } = useLanguage();

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(e => console.log("Autoplay prevent block:", e));
    }
  }, []);

  return (
    <section
      className="relative w-full overflow-hidden bg-[#0a0613] pb-10 pt-32 font-light text-white antialiased md:pb-16 md:pt-20 min-h-screen flex items-center"
      style={{
        background: "linear-gradient(135deg, #00091f 0%, #150d27 100%)", // Adaptado para a paleta DevoraX
      }}
    >
      <div
        className="absolute right-0 top-0 h-1/2 w-1/2"
        style={{
          background:
            "radial-gradient(circle at 70% 30%, rgba(122, 60, 120, 0.15) 0%, rgba(13, 10, 25, 0) 60%)",
        }}
      />
      <div
        className="absolute left-0 top-0 h-1/2 w-1/2 -scale-x-100"
        style={{
          background:
            "radial-gradient(circle at 70% 30%, rgba(122, 60, 120, 0.15) 0%, rgba(13, 10, 25, 0) 60%)",
        }}
      />

      <div className="container relative z-10 mx-auto max-w-2xl px-4 text-center md:max-w-4xl md:px-6 lg:max-w-7xl pt-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <span className="mb-6 inline-block rounded-full border border-accent/40 px-3 py-1 text-xs text-accent font-semibold tracking-wider">
            {t.hero.tag}
          </span>
          <h1 className="mx-auto mb-6 max-w-4xl text-4xl font-light md:text-5xl lg:text-7xl">
            {t.hero.title} <span className="text-accent font-bold drop-shadow-[0_0_15px_var(--color-accent)]">{t.hero.highlight}</span> {t.hero.titleEnd}
          </h1>
          <p className="mx-auto mb-10 max-w-2xl text-lg text-white/60 md:text-xl font-light leading-relaxed">
            {t.hero.subtitle}
          </p>

          <div className="mb-14 flex flex-col items-center justify-center gap-6 sm:flex-row">
            <RainbowButton href="#oferta">
              {t.hero.cta}
            </RainbowButton>
          </div>
        </motion.div>
        
        <motion.div
          className="relative max-w-5xl mx-auto"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
        >

          {/* Dashboard/Video container replacing static image */}
          <div className="relative z-10 mx-auto overflow-hidden rounded-2xl shadow-[0_0_50px_rgba(122,60,120,0.3)] border border-accent/30 bg-black/50 aspect-video mt-10">
            <video 
              ref={videoRef}
              autoPlay 
              loop 
              muted 
              playsInline
              className="w-full h-full object-cover pointer-events-none"
              poster="/DevoraX - Logo.png"
            >
              <source src="/Videologo.mp4" type="video/mp4" />
              Seu navegador não suporta a visualização de vídeos.
            </video>
            
            <div className="absolute inset-0 bg-gradient-to-t from-[#00091f]/90 via-transparent to-transparent pointer-events-none" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
