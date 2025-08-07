import React, { memo } from 'react';
import { motion } from 'framer-motion';
import { Phone, MapPin, Award } from 'lucide-react';
import { Button } from './button';

interface MobileHeroProps {
  onWhatsAppClick: () => void;
}

const MobileHero = memo(({ onWhatsAppClick }: MobileHeroProps) => {
  return (
    <section className="relative min-h-screen lg:hidden overflow-hidden">
      {/* Mobile Background */}
      <div className="absolute inset-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          poster="/backgrounds/water1.jpg"
          className="absolute inset-0 w-full h-full object-cover"
          preload="metadata"
        >
          <source src="/videos/hero-mobile.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/60" />
      </div>

      {/* Mobile Content */}
      <div className="relative z-20 flex flex-col justify-center items-center text-center px-4 py-8 min-h-screen">
        <motion.div
          className="max-w-sm"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.h1
            className="font-playfair text-3xl sm:text-4xl font-bold text-white mb-4 leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Transformamos seu espaço em um{" "}
            <span className="text-gold">refúgio natural</span>
          </motion.h1>

          <motion.p
            className="text-white/90 text-base mb-6 leading-relaxed"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Lagos ornamentais e Piscinas Naturais com peixes • A areia mais limpa do Brasil
          </motion.p>

          {/* Mobile Features */}
          <motion.div
            className="grid grid-cols-1 gap-3 mb-8 text-sm"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <div className="flex items-center justify-center space-x-2 bg-black/30 rounded-lg px-4 py-2 backdrop-blur-sm">
              <Award className="h-4 w-4 text-gold" />
              <span className="text-white">+70 projetos entregues</span>
            </div>
            <div className="flex items-center justify-center space-x-2 bg-black/30 rounded-lg px-4 py-2 backdrop-blur-sm">
              <MapPin className="h-4 w-4 text-gold" />
              <span className="text-white">Todo o Espírito Santo</span>
            </div>
          </motion.div>

          {/* Mobile CTA */}
          <motion.div
            className="space-y-3"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <Button
              onClick={onWhatsAppClick}
              size="lg"
              className="w-full bg-moss hover:bg-moss/90 text-white font-semibold py-4 rounded-full shadow-lg"
            >
              <Phone className="h-5 w-5 mr-2" />
              Consulta Gratuita WhatsApp
            </Button>
            
            <p className="text-white/80 text-xs">
              Resposta em até 24h • Orçamento sem compromisso
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
});

MobileHero.displayName = 'MobileHero';

export default MobileHero;
