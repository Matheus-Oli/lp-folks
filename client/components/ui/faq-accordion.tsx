import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';
import { cn } from '@/lib/utils';

interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

interface FAQAccordionProps {
  items: FAQItem[];
  className?: string;
}

const FAQAccordion: React.FC<FAQAccordionProps> = ({ items, className }) => {
  const [openItems, setOpenItems] = useState<Set<string>>(new Set());

  const toggleItem = (id: string) => {
    const newOpenItems = new Set(openItems);
    if (newOpenItems.has(id)) {
      newOpenItems.delete(id);
    } else {
      newOpenItems.add(id);
    }
    setOpenItems(newOpenItems);
  };

  return (
    <div className={cn("w-full max-w-4xl mx-auto space-y-4", className)}>
      {items.map((item, index) => {
        const isOpen = openItems.has(item.id);
        
        return (
          <motion.div
            key={item.id}
            className="bg-off-white rounded-2xl border border-sand/30 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
          >
            {/* Question Header */}
            <motion.button
              onClick={() => toggleItem(item.id)}
              className="w-full px-6 lg:px-8 py-6 text-left flex items-center justify-between bg-gradient-to-r from-off-white to-sand/20 hover:from-sand/20 hover:to-sand/40 transition-all duration-300"
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.99 }}
            >
              <h3 className="font-work font-semibold text-charcoal text-lg lg:text-xl leading-relaxed pr-4">
                {item.question}
              </h3>
              
              {/* Rotating Icon */}
              <motion.div
                className="flex-shrink-0 w-8 h-8 bg-teal/10 rounded-full flex items-center justify-center"
                animate={{ rotate: isOpen ? 45 : 0 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
              >
                {isOpen ? (
                  <Minus className="h-5 w-5 text-teal" />
                ) : (
                  <Plus className="h-5 w-5 text-teal" />
                )}
              </motion.div>
            </motion.button>

            {/* Answer Content */}
            <AnimatePresence>
              {isOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ 
                    duration: 0.4, 
                    ease: [0.25, 0.46, 0.45, 0.94]
                  }}
                  className="overflow-hidden"
                >
                  <div className="px-6 lg:px-8 pb-6 pt-2">
                    <motion.div
                      initial={{ y: -10, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      exit={{ y: -10, opacity: 0 }}
                      transition={{ delay: 0.1, duration: 0.3 }}
                      className="border-t border-sand/30 pt-4"
                    >
                      <p className="font-work text-charcoal/80 text-base lg:text-lg leading-relaxed">
                        {item.answer}
                      </p>
                    </motion.div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        );
      })}
    </div>
  );
};

export default FAQAccordion;
