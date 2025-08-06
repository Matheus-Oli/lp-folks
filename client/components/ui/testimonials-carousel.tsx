import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';
import { cn } from '@/lib/utils';

interface TestimonialProps {
  id: string;
  initials: string;
  name: string;
  location: string;
  text: string;
  rating: number;
}

interface TestimonialsCarouselProps {
  testimonials: TestimonialProps[];
  className?: string;
}

const TestimonialsCarousel: React.FC<TestimonialsCarouselProps> = ({ 
  testimonials, 
  className 
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const goToTestimonial = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <div className={cn("relative w-full", className)}>
      {/* Desktop Layout - 2 testimonials visible */}
      <div className="hidden lg:block">
        <div className="grid grid-cols-2 gap-8 max-w-4xl mx-auto px-4">
          {[0, 1].map((offset) => {
            const index = (currentIndex + offset) % testimonials.length;
            const testimonial = testimonials[index];

            return (
              <motion.div
                key={`${testimonial.id}-${index}`}
                className="bg-off-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-sand/20"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.4,
                  delay: offset * 0.1,
                  ease: "easeOut"
                }}
                whileHover={{ y: -4 }}
              >
                <TestimonialCard testimonial={testimonial} />
              </motion.div>
            );
          })}
        </div>

        {/* Desktop Navigation Arrows */}
        <motion.button
          onClick={prevTestimonial}
          className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-moss/80 rounded-full p-3 transition-all duration-300 group shadow-lg hover:shadow-xl"
          whileHover={{ scale: 1.1, x: -2 }}
          whileTap={{ scale: 0.95 }}
        >
          <ChevronLeft className="h-6 w-6 text-charcoal group-hover:text-white" />
        </motion.button>

        <motion.button
          onClick={nextTestimonial}
          className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-moss/80 rounded-full p-3 transition-all duration-300 group shadow-lg hover:shadow-xl"
          whileHover={{ scale: 1.1, x: 2 }}
          whileTap={{ scale: 0.95 }}
        >
          <ChevronRight className="h-6 w-6 text-charcoal group-hover:text-white" />
        </motion.button>
      </div>

      {/* Mobile Layout - 1 testimonial with snap scroll */}
      <div className="lg:hidden">
        <div 
          ref={carouselRef}
          className="flex overflow-x-auto snap-x snap-mandatory scrollbar-hide space-x-4 px-4 pb-2"
          onScroll={(e) => {
            const element = e.target as HTMLDivElement;
            const index = Math.round(element.scrollLeft / element.offsetWidth);
            if (index !== currentIndex) {
              setCurrentIndex(index);
            }
          }}
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              className="flex-shrink-0 w-full snap-center bg-off-white rounded-2xl p-6 shadow-lg border border-sand/20"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <TestimonialCard testimonial={testimonial} />
            </motion.div>
          ))}
        </div>

        {/* Mobile Dots Indicator */}
        <div className="flex justify-center space-x-2 mt-6">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                goToTestimonial(index);
                const element = carouselRef.current;
                if (element) {
                  element.scrollTo({ 
                    left: element.offsetWidth * index, 
                    behavior: 'smooth' 
                  });
                }
              }}
              className={cn(
                "w-2 h-2 rounded-full transition-all duration-300",
                index === currentIndex 
                  ? "bg-moss w-6" 
                  : "bg-sand hover:bg-sand/70"
              )}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

// Individual Testimonial Card Component
const TestimonialCard: React.FC<{ testimonial: TestimonialProps }> = ({ 
  testimonial 
}) => {
  return (
    <div className="h-full flex flex-col">
      {/* Client Info */}
      <div className="flex items-center space-x-4 mb-4">
        {/* Initials Circle */}
        <div className="flex-shrink-0 w-12 h-12 bg-sand/60 rounded-full flex items-center justify-center">
          <span className="font-work font-semibold text-charcoal text-sm">
            {testimonial.initials}
          </span>
        </div>
        
        {/* Name and Location */}
        <div className="flex-1">
          <h4 className="font-work font-semibold text-charcoal text-sm">
            {testimonial.name}
          </h4>
          <p className="font-work text-charcoal/70 text-xs">
            {testimonial.location}
          </p>
        </div>
      </div>

      {/* Testimonial Text */}
      <div className="flex-1 mb-4">
        <p className="font-work text-charcoal/80 text-sm leading-relaxed italic">
          "{testimonial.text}"
        </p>
      </div>

      {/* Rating Stars */}
      <div className="flex space-x-1">
        {[...Array(5)].map((_, index) => (
          <Star
            key={index}
            className={cn(
              "h-4 w-4 transition-colors",
              index < testimonial.rating
                ? "text-gold fill-gold"
                : "text-sand fill-sand"
            )}
          />
        ))}
      </div>
    </div>
  );
};

export default TestimonialsCarousel;
