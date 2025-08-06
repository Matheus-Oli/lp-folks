import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { WhatsAppIcon } from "@/components/ui/whatsapp-icon";
import { ArrowRight, Star, Shield, Clock, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";

interface CTAProps {
  variant?: "primary" | "secondary" | "outline" | "urgent";
  size?: "sm" | "md" | "lg";
  title: string;
  subtitle?: string;
  buttonText: string;
  highlights?: string[];
  urgencyText?: string;
  trustSignal?: string;
  onClick: () => void;
  className?: string;
}

export function EnhancedCTA({
  variant = "primary",
  size = "md",
  title,
  subtitle,
  buttonText,
  highlights,
  urgencyText,
  trustSignal,
  onClick,
  className,
}: CTAProps) {
  const variants = {
    primary: {
      container: "bg-gradient-to-br from-moss/5 to-teal/5 border-moss/20",
      button:
        "bg-gradient-to-r from-moss to-teal hover:from-gold hover:to-gold text-white hover:text-charcoal",
    },
    secondary: {
      container: "bg-gradient-to-br from-gold/5 to-aqua/5 border-gold/20",
      button:
        "bg-gradient-to-r from-gold to-aqua hover:from-moss hover:to-teal text-charcoal hover:text-white",
    },
    outline: {
      container: "border-moss/30 bg-white/50 backdrop-blur-sm",
      button: "border-2 border-moss text-moss hover:bg-moss hover:text-white",
    },
    urgent: {
      container:
        "bg-gradient-to-br from-gold/10 to-moss/10 border-gold/40 shadow-lg",
      button:
        "bg-gradient-to-r from-gold to-moss hover:from-moss hover:to-teal text-white animate-pulse",
    },
  };

  const sizes = {
    sm: {
      container: "p-6 rounded-2xl",
      title: "text-lg font-semibold",
      subtitle: "text-sm",
      button: "px-6 py-3 text-sm",
    },
    md: {
      container: "p-8 rounded-3xl",
      title: "text-xl md:text-2xl font-bold",
      subtitle: "text-base",
      button: "px-8 py-4 text-base",
    },
    lg: {
      container: "p-10 lg:p-12 rounded-3xl",
      title: "text-2xl md:text-3xl lg:text-4xl font-bold",
      subtitle: "text-lg md:text-xl",
      button: "px-10 py-6 text-lg",
    },
  };

  return (
    <motion.div
      className={cn(
        "border shadow-xl hover:shadow-2xl transition-all duration-500 backdrop-blur-sm",
        variants[variant].container,
        sizes[size].container,
        className,
      )}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      whileHover={{ scale: 1.02, y: -5 }}
    >
      {/* Urgency Banner */}
      {urgencyText && (
        <motion.div
          className="inline-flex items-center space-x-2 bg-gold/20 text-gold px-4 py-2 rounded-full text-sm font-semibold mb-4"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
        >
          <Sparkles className="h-4 w-4" />
          <span>{urgencyText}</span>
        </motion.div>
      )}

      {/* Main Content */}
      <div className="text-center space-y-4">
        <motion.h3
          className={cn(
            "font-playfair text-charcoal leading-tight",
            sizes[size].title,
          )}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          {title}
        </motion.h3>

        {subtitle && (
          <motion.p
            className={cn(
              "font-work text-charcoal/80 max-w-2xl mx-auto leading-relaxed",
              sizes[size].subtitle,
            )}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            {subtitle}
          </motion.p>
        )}

        {/* Highlights */}
        {highlights && highlights.length > 0 && (
          <motion.div
            className="flex flex-wrap justify-center gap-3 my-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            {highlights.map((highlight, index) => (
              <motion.div
                key={index}
                className="flex items-center space-x-2 bg-white/60 text-charcoal px-3 py-2 rounded-full text-sm"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3 + index * 0.1 }}
              >
                <Star className="h-4 w-4 text-gold fill-current" />
                <span>{highlight}</span>
              </motion.div>
            ))}
          </motion.div>
        )}

        {/* CTA Button */}
        <motion.div
          className="pt-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="w-full max-w-md mx-auto"
          >
            <Button
              onClick={onClick}
              size="lg"
              className={cn(
                "transition-all duration-500 rounded-2xl shadow-xl hover:shadow-2xl border-2 border-white/20 hover:border-gold/50 w-full font-work font-bold group",
                variants[variant].button,
                sizes[size].button,
              )}
            >
              <WhatsAppIcon size={20} className="mr-3 flex-shrink-0" />
              <span className="text-center leading-tight flex-1">
                {buttonText}
              </span>
              <ArrowRight className="h-5 w-5 ml-3 group-hover:translate-x-1 transition-transform duration-300" />
            </Button>
          </motion.div>
        </motion.div>

        {/* Trust Signal */}
        {trustSignal && (
          <motion.div
            className="flex items-center justify-center space-x-2 text-charcoal/60 text-sm pt-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <Shield className="h-4 w-4 text-moss" />
            <span>{trustSignal}</span>
          </motion.div>
        )}
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-gold/10 to-transparent rounded-full blur-2xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-moss/10 to-transparent rounded-full blur-2xl pointer-events-none" />
    </motion.div>
  );
}

// Componente CTA compacto para espaços menores
export function CompactCTA({
  buttonText,
  subtitle,
  onClick,
  className,
}: {
  buttonText: string;
  subtitle?: string;
  onClick: () => void;
  className?: string;
}) {
  return (
    <motion.div
      className={cn(
        "bg-gradient-to-r from-moss/10 to-teal/10 border border-moss/20 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300",
        className,
      )}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -3 }}
    >
      <div className="flex flex-col sm:flex-row items-center gap-4">
        <div className="flex-1 text-center sm:text-left">
          <p className="font-work text-charcoal font-semibold mb-1">
            {buttonText}
          </p>
          {subtitle && (
            <p className="font-work text-charcoal/70 text-sm">{subtitle}</p>
          )}
        </div>

        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          <Button
            onClick={onClick}
            size="lg"
            className="bg-gradient-to-r from-moss to-teal hover:from-gold hover:to-gold text-white hover:text-charcoal transition-all duration-300 px-6 py-3 rounded-xl font-work font-semibold group"
          >
            <WhatsAppIcon size={18} className="mr-2" />
            <span>Começar Agora</span>
            <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
        </motion.div>
      </div>
    </motion.div>
  );
}
