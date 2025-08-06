import * as React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { CheckCircle } from "lucide-react";

interface EnhancedStepperProps {
  steps: {
    title: string;
    subtitle: string;
    description: string;
    icon?: React.ReactNode;
  }[];
  currentStep?: number;
  className?: string;
}

const EnhancedStepper = React.forwardRef<HTMLDivElement, EnhancedStepperProps>(
  ({ steps, currentStep = steps.length - 1, className, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn("space-y-8", className)}
        {...props}
      >
        {steps.map((step, index) => (
          <motion.div 
            key={index} 
            className="relative"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ 
              duration: 0.6, 
              delay: index * 0.1,
              ease: "easeOut"
            }}
          >
            <div className="flex items-start space-x-6">
              {/* Step indicator */}
              <div className="flex flex-col items-center">
                <motion.div
                  className={cn(
                    "relative flex h-16 w-16 items-center justify-center rounded-full border-3 font-bold text-lg transition-all duration-500",
                    index <= currentStep
                      ? "border-moss bg-moss text-white shadow-lg shadow-moss/25"
                      : "border-border bg-background text-muted-foreground"
                  )}
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  {index < currentStep ? (
                    <CheckCircle className="h-8 w-8" />
                  ) : (
                    <span className="text-xl font-bold">{index + 1}</span>
                  )}
                  
                  {/* Glow effect for active steps */}
                  {index <= currentStep && (
                    <motion.div
                      className="absolute inset-0 rounded-full bg-moss opacity-20"
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ 
                        repeat: Infinity, 
                        duration: 2,
                        ease: "easeInOut"
                      }}
                    />
                  )}
                </motion.div>
                
                {/* Connector line */}
                {index < steps.length - 1 && (
                  <motion.div
                    className={cn(
                      "mt-4 h-12 w-1 transition-all duration-500",
                      index < currentStep
                        ? "bg-gradient-to-b from-moss to-teal"
                        : "bg-border"
                    )}
                    initial={{ scaleY: 0 }}
                    whileInView={{ scaleY: 1 }}
                    viewport={{ once: true }}
                    transition={{ 
                      duration: 0.5, 
                      delay: index * 0.1 + 0.3 
                    }}
                  />
                )}
              </div>
              
              {/* Step content */}
              <div className="flex-1 pb-12">
                <motion.div
                  className="rounded-2xl bg-white/80 backdrop-blur-sm border border-moss/10 p-6 shadow-lg hover:shadow-xl transition-all duration-300"
                  whileHover={{ 
                    y: -2,
                    boxShadow: "0 20px 25px -5px rgb(0 0 0 / 0.1), 0 10px 10px -5px rgb(0 0 0 / 0.04)"
                  }}
                >
                  <h3
                    className={cn(
                      "font-playfair text-xl font-bold mb-2 transition-colors duration-300",
                      index <= currentStep
                        ? "text-moss"
                        : "text-muted-foreground"
                    )}
                  >
                    {step.title}
                  </h3>

                  {step.subtitle && (
                    <p className="font-work text-gold font-medium italic mb-3 text-sm">
                      "{step.subtitle}"
                    </p>
                  )}

                  <p
                    className={cn(
                      "font-work text-sm leading-relaxed transition-colors duration-300",
                      index <= currentStep
                        ? "text-charcoal/80"
                        : "text-muted-foreground/70"
                    )}
                  >
                    {step.description}
                  </p>
                </motion.div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    );
  }
);

EnhancedStepper.displayName = "EnhancedStepper";

export { EnhancedStepper };
