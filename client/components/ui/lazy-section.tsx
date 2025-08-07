import React, { useState, useEffect, useRef, ReactNode, memo } from "react";
import { motion } from "framer-motion";

interface LazySectionProps {
  children: ReactNode;
  fallback?: ReactNode;
  threshold?: number;
  className?: string;
  rootMargin?: string;
  once?: boolean;
}

const LazySection = memo(
  ({
    children,
    fallback,
    threshold = 0.1,
    className,
    rootMargin = "50px",
    once = true,
  }: LazySectionProps) => {
    const [isVisible, setIsVisible] = useState(false);
    const [hasLoaded, setHasLoaded] = useState(false);
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            setHasLoaded(true);

            if (once) {
              observer.disconnect();
            }
          } else if (!once) {
            setIsVisible(false);
          }
        },
        {
          threshold,
          rootMargin,
        },
      );

      const currentRef = ref.current;
      if (currentRef) {
        observer.observe(currentRef);
      }

      return () => {
        if (currentRef) {
          observer.unobserve(currentRef);
        }
      };
    }, [threshold, rootMargin, once]);

    const shouldRender = once ? hasLoaded : isVisible;

    return (
      <div ref={ref} className={className}>
        {shouldRender ? (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            {children}
          </motion.div>
        ) : (
          fallback || (
            <div className="h-64 bg-gradient-to-br from-moss/10 to-teal/10 rounded-lg animate-pulse flex items-center justify-center">
              <div className="text-muted-foreground">Carregando...</div>
            </div>
          )
        )}
      </div>
    );
  },
);

LazySection.displayName = "LazySection";

export default LazySection;
