import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import CustomVideoPlayer from './custom-video-player';
import { cn } from '@/lib/utils';

interface VideoCarouselProps {
  videos: {
    id: string;
    src: string;
    poster?: string;
    title?: string;
  }[];
  className?: string;
}

const VideoCarousel: React.FC<VideoCarouselProps> = ({ videos, className }) => {
  const [currentIndex, setCurrentIndex] = useState(0); // Start with first video active
  const [isMobile, setIsMobile] = useState(false);
  const carouselRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const nextVideo = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === videos.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevVideo = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? videos.length - 1 : prevIndex - 1
    );
  };

  const scrollToVideo = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <div className={cn("relative w-full", className)}>
      {/* Desktop Layout - 3 videos visible with carousel navigation */}
      <div className="hidden lg:block">
        <div className="flex items-center justify-center space-x-6 px-16">
          {[currentIndex - 1, currentIndex, currentIndex + 1].map((index) => {
            // Handle circular navigation
            let actualIndex = index;
            if (index < 0) actualIndex = videos.length - 1;
            if (index >= videos.length) actualIndex = 0;

            const video = videos[actualIndex];
            const isActive = actualIndex === currentIndex;

            return (
              <motion.div
                key={`${video.id}-${actualIndex}`}
                className={cn(
                  "relative cursor-pointer transition-all duration-500",
                  isActive
                    ? "w-80 h-[500px] z-20"
                    : "w-60 h-[400px] z-10"
                )}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{
                  opacity: isActive ? 1 : 0.6,
                  scale: isActive ? 1 : 0.85,
                  y: isActive ? 0 : 20
                }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                onClick={() => scrollToVideo(actualIndex)}
              >
                <CustomVideoPlayer
                  src={video.src}
                  poster={video.poster}
                  className="w-full h-full"
                  isActive={isActive}
                />

                {/* Video overlay for inactive videos */}
                {!isActive && (
                  <div className="absolute inset-0 bg-black/30 rounded-2xl" />
                )}

              </motion.div>
            );
          })}
        </div>

        {/* Desktop Navigation Arrows */}
        <motion.button
          onClick={prevVideo}
          className="absolute left-8 top-1/2 -translate-y-1/2 z-30 bg-black/40 backdrop-blur-sm hover:bg-moss/80 rounded-full p-4 transition-all duration-300 group shadow-lg hover:shadow-xl"
          whileHover={{ scale: 1.15, x: -2 }}
          whileTap={{ scale: 0.95 }}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 1 }}
        >
          <ChevronLeft className="h-7 w-7 text-white group-hover:text-white drop-shadow-lg" />
        </motion.button>

        <motion.button
          onClick={nextVideo}
          className="absolute right-8 top-1/2 -translate-y-1/2 z-30 bg-black/40 backdrop-blur-sm hover:bg-moss/80 rounded-full p-4 transition-all duration-300 group shadow-lg hover:shadow-xl"
          whileHover={{ scale: 1.15, x: 2 }}
          whileTap={{ scale: 0.95 }}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 1 }}
        >
          <ChevronRight className="h-7 w-7 text-white group-hover:text-white drop-shadow-lg" />
        </motion.button>
      </div>

      {/* Mobile Layout - 1 video visible centered */}
      <div className="lg:hidden">
        <div className="flex justify-center px-4">
          <motion.div
            className="relative w-80 h-[500px]"
            key={videos[currentIndex].id}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <CustomVideoPlayer
              src={videos[currentIndex].src}
              poster={videos[currentIndex].poster}
              className="w-full h-full"
              isActive={true}
            />
          </motion.div>
        </div>

        {/* Mobile Dots Indicator */}
        <div className="flex justify-center flex-wrap gap-2 mt-4 px-4">
          {videos.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={cn(
                "w-2 h-2 rounded-full transition-all duration-300",
                index === currentIndex
                  ? "bg-moss w-6"
                  : "bg-gray-300 hover:bg-gray-400"
              )}
            />
          ))}
        </div>

        {/* Mobile Navigation Arrows */}
        <div className="flex justify-center space-x-6 mt-6">
          <motion.button
            onClick={prevVideo}
            className="bg-black/40 backdrop-blur-sm hover:bg-moss/80 rounded-full p-3 transition-all duration-300 group shadow-lg"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <ChevronLeft className="h-6 w-6 text-white group-hover:text-white" />
          </motion.button>

          <motion.button
            onClick={nextVideo}
            className="bg-black/40 backdrop-blur-sm hover:bg-moss/80 rounded-full p-3 transition-all duration-300 group shadow-lg"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <ChevronRight className="h-6 w-6 text-white group-hover:text-white" />
          </motion.button>
        </div>
      </div>

      {/* Video Counter */}
      <div className="absolute top-4 right-4 z-30 bg-black/50 backdrop-blur-sm rounded-full px-3 py-1 text-white text-sm">
        {currentIndex + 1} / {videos.length}
      </div>
    </div>
  );
};

export default VideoCarousel;
