import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { RotateCcw, ChevronRight, Sparkles } from 'lucide-react';
import { cn } from '@/lib/utils';

interface FlipCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  className?: string;
}

const FlipCard: React.FC<FlipCardProps> = ({
  icon,
  title,
  description,
  className
}) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div className={cn("relative w-full h-80 perspective-1000", className)}>
      <motion.div
        className="relative w-full h-full cursor-pointer preserve-3d"
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
        style={{ transformStyle: "preserve-3d" }}
      >
        {/* Front of card */}
        <motion.div
          className="absolute inset-0 w-full h-full bg-gradient-to-br from-white via-sand/30 to-sand/50 rounded-3xl shadow-xl border border-white/50 p-8 flex flex-col items-center justify-between text-center backface-hidden overflow-hidden"
          onClick={handleFlip}
          whileHover={{ scale: 1.03, y: -4 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          {/* Background decorative elements */}
          <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-moss/10 to-transparent rounded-full blur-xl" />
          <div className="absolute bottom-0 left-0 w-16 h-16 bg-gradient-to-tr from-gold/10 to-transparent rounded-full blur-lg" />

          {/* Icon container */}
          <div className="relative">
            <div className="flex items-center justify-center w-20 h-20 bg-gradient-to-br from-moss/20 to-teal/20 backdrop-blur-sm rounded-2xl border border-moss/30 mb-6 text-moss relative overflow-hidden">
              {/* Icon glow effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-moss/10 to-teal/10 rounded-2xl" />
              <div className="relative z-10">
                {icon}
              </div>
            </div>
            {/* Sparkle decoration */}
            <Sparkles className="absolute -top-2 -right-2 h-6 w-6 text-gold/60" />
          </div>

          {/* Title */}
          <div className="flex-1 flex items-center justify-center">
            <h3 className="font-playfair font-bold text-charcoal text-xl leading-tight max-w-48">
              {title}
            </h3>
          </div>

          {/* Click indicator */}
          <motion.div
            className="flex items-center space-x-3 bg-white/40 backdrop-blur-sm rounded-full px-4 py-2 border border-white/60"
            whileHover={{ scale: 1.05 }}
          >
            <ChevronRight className="h-4 w-4 text-moss" />
            <span className="font-work font-medium text-sm text-charcoal">Descobrir benefício</span>
          </motion.div>
        </motion.div>

        {/* Back of card */}
        <motion.div
          className="absolute inset-0 w-full h-full bg-gradient-to-br from-moss/95 to-teal/95 rounded-3xl shadow-xl border border-moss/30 p-8 flex flex-col justify-between backface-hidden overflow-hidden cursor-pointer"
          style={{ transform: "rotateY(180deg)" }}
          onClick={handleFlip}
        >
          {/* Background pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-4 right-4 w-24 h-24 border border-white/20 rounded-full" />
            <div className="absolute bottom-8 left-8 w-16 h-16 border border-white/20 rounded-full" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 border border-white/10 rounded-full" />
          </div>

          {/* Description */}
          <div className="flex-1 flex items-center justify-center relative z-10">
            <div className="text-center">
              <div className="w-12 h-1 bg-white/30 rounded-full mx-auto mb-6" />
              <p className="font-work text-white/95 text-base leading-relaxed">
                {description}
              </p>
            </div>
          </div>

          {/* Back button */}
          <motion.button
            onClick={(e) => {
              e.stopPropagation();
              handleFlip();
            }}
            className="relative z-10 flex items-center justify-center space-x-3 bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white rounded-2xl px-6 py-3 transition-all duration-300 border border-white/30 hover:border-white/50 mx-auto"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            <RotateCcw className="h-5 w-5" />
            <span className="font-work font-semibold">Voltar</span>
          </motion.button>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default FlipCard;
