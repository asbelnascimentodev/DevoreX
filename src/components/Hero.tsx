import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { PlayCircle } from 'lucide-react';
import { RainbowButton } from './ui/rainbow-borders-button';

export default function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(e => console.log("Autoplay prevent block:", e));
    }
  }, []);

  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden min-h-screen flex items-center">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-accent/20 via-primary to-primary -z-10" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="text-center max-w-4xl mx-auto">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-secondary tracking-tight mb-8"
          >
            Transforme sua ideia em um sistema <span className="text-accent drop-shadow-[0_0_15px_var(--color-accent)]">profissional, escalável</span> e pronto para crescer.
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg sm:text-xl text-secondary/80 mb-8 leading-relaxed font-light max-w-3xl mx-auto"
          >
            Desenvolvemos sistemas sob medida que automatizam processos, aumentam a produtividade e impulsionam seus resultados — sem complicação, sem desperdício e sem soluções genéricas.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row justify-center items-center gap-4 mt-8"
          >
            <RainbowButton href="#oferta">
              Quero meu sistema sob medida
            </RainbowButton>
          </motion.div>

          {/* Video Player */}
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="mt-10 relative rounded-2xl overflow-hidden aspect-video bg-black/50 border border-accent/30 shadow-[0_0_40px_rgba(122,60,120,0.3)] hover:border-accent/60 transition-all duration-500"
          >
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
            
            {/* Subtle glow overlay that doesn't block clicks */}
            <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent pointer-events-none" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
