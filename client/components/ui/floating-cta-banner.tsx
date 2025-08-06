import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { WhatsAppIcon } from "@/components/ui/whatsapp-icon";
import { X, Sparkles, Clock, Shield } from "lucide-react";
import { cn } from "@/lib/utils";

interface FloatingCTABannerProps {
  onWhatsAppClick: () => void;
  className?: string;
}

export function FloatingCTABanner({ onWhatsAppClick, className }: FloatingCTABannerProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (!isDismissed) {
        setIsVisible(true);
      }
    }, 10000); // Aparece após 10 segundos

    return () => clearTimeout(timer);
  }, [isDismissed]);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPercent = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
      
      if (scrollPercent > 30 && !isDismissed) {
        setIsVisible(true);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isDismissed]);

  const handleDismiss = () => {
    setIsVisible(false);
    setIsDismissed(true);
  };

  return (
    <AnimatePresence>
      {isVisible && !isDismissed && (
        <motion.div
          className={cn(
            "fixed bottom-4 left-4 right-4 md:left-auto md:right-6 md:max-w-sm z-50",
            className
          )}
          initial={{ opacity: 0, y: 100, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 100, scale: 0.9 }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
        >
          <div className="bg-gradient-to-r from-moss to-teal rounded-2xl shadow-2xl border-2 border-white/20 backdrop-blur-md overflow-hidden">
            {/* Dismiss button */}
            <button
              onClick={handleDismiss}
              className="absolute top-3 right-3 z-10 text-white/70 hover:text-white transition-colors p-1"
            >
              <X className="h-4 w-4" />
            </button>

            <div className="p-6 pr-12">
              {/* Urgency badge */}
              <motion.div
                className="inline-flex items-center space-x-2 bg-gold/20 text-gold px-3 py-1 rounded-full text-xs font-semibold mb-3"
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2 }}
              >
                <Sparkles className="h-3 w-3" />
                <span>Oferta Limitada</span>
              </motion.div>

              {/* Main content */}
              <h4 className="font-playfair text-lg font-bold text-white mb-2 leading-tight">
                Consultoria Gratuita por Tempo Limitado
              </h4>
              
              <p className="font-work text-white/90 text-sm mb-4 leading-relaxed">
                Receba um projeto personalizado sem custo. Apenas algumas vagas disponíveis!
              </p>

              {/* Benefits */}
              <div className="flex items-center space-x-4 text-white/80 text-xs mb-4">
                <div className="flex items-center space-x-1">
                  <Clock className="h-3 w-3" />
                  <span>Resposta 24h</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Shield className="h-3 w-3" />
                  <span>Sem compromisso</span>
                </div>
              </div>

              {/* CTA Button */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Button
                  onClick={onWhatsAppClick}
                  size="sm"
                  className="bg-white text-moss hover:bg-gold hover:text-white transition-all duration-300 px-4 py-2 text-sm font-work font-bold rounded-xl w-full group"
                >
                  <WhatsAppIcon size={16} className="mr-2" />
                  <span>Garantir Minha Vaga</span>
                </Button>
              </motion.div>
            </div>

            {/* Animated background elements */}
            <div className="absolute top-0 right-0 w-20 h-20 bg-white/10 rounded-full blur-2xl" />
            <div className="absolute bottom-0 left-0 w-16 h-16 bg-gold/20 rounded-full blur-xl" />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

// Componente de CTA sticky no topo
export function StickyTopCTA({ onWhatsAppClick }: { onWhatsAppClick: () => void }) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const heroHeight = window.innerHeight;
      setIsVisible(window.scrollY > heroHeight);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="fixed top-0 left-0 right-0 z-40 bg-gradient-to-r from-moss to-teal shadow-lg"
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -100 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <div className="container mx-auto px-4 py-3">
            <div className="flex items-center justify-between">
              <div className="text-white">
                <span className="font-work text-sm md:text-base font-semibold">
                  🌿 Consultoria Gratuita • Projeto Personalizado • Começamos em 7 dias
                </span>
              </div>
              
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  onClick={onWhatsAppClick}
                  size="sm"
                  className="bg-white text-moss hover:bg-gold hover:text-white transition-all duration-300 px-4 py-2 text-sm font-work font-bold rounded-xl"
                >
                  <WhatsAppIcon size={14} className="mr-1" />
                  <span className="hidden sm:inline">Quero Meu Projeto</span>
                  <span className="sm:hidden">Começar</span>
                </Button>
              </motion.div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
