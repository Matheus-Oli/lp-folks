import React, { useState, useRef, useEffect, useCallback, memo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Play } from 'lucide-react';
import { cn } from '@/lib/utils';

interface VideoData {
  id: string;
  src: string;
  poster?: string;
  title?: string;
}

interface VideoCarouselProps {
  videos: VideoData[];
  className?: string;
}

// Lazy video player component that only loads when needed
const LazyVideoPlayer = memo(({ 
  src, 
  poster, 
  isActive, 
  isVisible, 
  className 
}: {
  src: string;
  poster?: string;
  isActive: boolean;
  isVisible: boolean;
  className?: string;
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  // Only load video when it becomes visible
  useEffect(() => {
    if (isVisible && !isLoaded) {
      setIsLoaded(true);
    }
  }, [isVisible, isLoaded]);

  const handlePlay = useCallback(() => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  }, [isPlaying]);

  // Auto-pause when not active (mobile optimization)
  useEffect(() => {
    if (!isActive && videoRef.current && isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  }, [isActive, isPlaying]);

  if (!isLoaded) {
    return (
      <div className={cn("relative bg-gradient-to-br from-moss/20 to-teal/20 rounded-2xl overflow-hidden", className)}>
        {poster && (
          <img
            src={poster}
            alt=""
            className="w-full h-full object-cover"
            loading="lazy"
          />
        )}
        <div className="absolute inset-0 flex items-center justify-center bg-black/20">
          <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
            <Play className="h-6 w-6 text-white ml-1" />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={cn("relative rounded-2xl overflow-hidden group", className)}>
      <video
        ref={videoRef}
        src={src}
        poster={poster}
        className="w-full h-full object-cover"
        loop
        muted
        playsInline
        preload="metadata"
        onLoadedData={() => setIsLoaded(true)}
      />
      
      {/* Play/Pause overlay */}
      <div 
        className="absolute inset-0 flex items-center justify-center bg-black/0 group-hover:bg-black/20 transition-all duration-300 cursor-pointer"
        onClick={handlePlay}
      >
        <AnimatePresence>
          {!isPlaying && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              className="w-12 h-12 bg-white/90 rounded-full flex items-center justify-center shadow-lg"
            >
              <Play className="h-6 w-6 text-moss ml-1" />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
});

LazyVideoPlayer.displayName = 'LazyVideoPlayer';

const OptimizedVideoCarousel: React.FC<VideoCarouselProps> = ({ videos, className }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [visibleVideos, setVisibleVideos] = useState(new Set([0])); // Track which videos should be loaded
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Preload adjacent videos for smoother navigation
  useEffect(() => {
    const toLoad = new Set([currentIndex]);
    
    // Load previous and next videos for smoother transition
    const prevIndex = currentIndex === 0 ? videos.length - 1 : currentIndex - 1;
    const nextIndex = currentIndex === videos.length - 1 ? 0 : currentIndex + 1;
    
    toLoad.add(prevIndex);
    toLoad.add(nextIndex);
    
    setVisibleVideos(toLoad);
  }, [currentIndex, videos.length]);

  const nextVideo = useCallback(() => {
    setCurrentIndex((prevIndex) => 
      prevIndex === videos.length - 1 ? 0 : prevIndex + 1
    );
  }, [videos.length]);

  const prevVideo = useCallback(() => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? videos.length - 1 : prevIndex - 1
    );
  }, [videos.length]);

  const scrollToVideo = useCallback((index: number) => {
    setCurrentIndex(index);
  }, []);

  // Mobile-first approach - simpler layout for mobile
  if (isMobile) {
    return (
      <div className={cn("relative w-full", className)}>
        <div className="flex justify-center px-4">
          <motion.div
            className="relative w-full max-w-sm h-[400px]"
            key={videos[currentIndex].id}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          >
            <LazyVideoPlayer
              src={videos[currentIndex].src}
              poster={videos[currentIndex].poster}
              className="w-full h-full"
              isActive={true}
              isVisible={visibleVideos.has(currentIndex)}
            />
          </motion.div>
        </div>

        {/* Mobile Dots Indicator - Simplified */}
        <div className="flex justify-center gap-2 mt-4 px-4">
          {videos.map((_, index) => (
            <button
              key={index}
              onClick={() => scrollToVideo(index)}
              className={cn(
                "w-2 h-2 rounded-full transition-all duration-300",
                index === currentIndex
                  ? "bg-moss w-4"
                  : "bg-gray-300"
              )}
              aria-label={`Video ${index + 1}`}
            />
          ))}
        </div>

        {/* Mobile Navigation - Touch-friendly */}
        <div className="flex justify-center space-x-4 mt-4">
          <button
            onClick={prevVideo}
            className="bg-black/40 backdrop-blur-sm hover:bg-moss/80 rounded-full p-3 transition-all duration-300 touch-manipulation"
            aria-label="Previous video"
          >
            <ChevronLeft className="h-5 w-5 text-white" />
          </button>

          <button
            onClick={nextVideo}
            className="bg-black/40 backdrop-blur-sm hover:bg-moss/80 rounded-full p-3 transition-all duration-300 touch-manipulation"
            aria-label="Next video"
          >
            <ChevronRight className="h-5 w-5 text-white" />
          </button>
        </div>

        {/* Video Counter */}
        <div className="absolute top-4 right-4 z-30 bg-black/50 backdrop-blur-sm rounded-full px-3 py-1 text-white text-sm">
          {currentIndex + 1} / {videos.length}
        </div>
      </div>
    );
  }

  // Desktop layout with optimizations
  return (
    <div className={cn("relative w-full", className)}>
      <div className="flex items-center justify-center space-x-6 px-16">
        {[currentIndex - 1, currentIndex, currentIndex + 1].map((index) => {
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
              <LazyVideoPlayer
                src={video.src}
                poster={video.poster}
                className="w-full h-full"
                isActive={isActive}
                isVisible={visibleVideos.has(actualIndex)}
              />

              {!isActive && (
                <div className="absolute inset-0 bg-black/30 rounded-2xl" />
              )}
            </motion.div>
          );
        })}
      </div>

      {/* Desktop Navigation */}
      <button
        onClick={prevVideo}
        className="absolute left-8 top-1/2 -translate-y-1/2 z-30 bg-black/40 backdrop-blur-sm hover:bg-moss/80 rounded-full p-4 transition-all duration-300"
        aria-label="Previous video"
      >
        <ChevronLeft className="h-7 w-7 text-white" />
      </button>

      <button
        onClick={nextVideo}
        className="absolute right-8 top-1/2 -translate-y-1/2 z-30 bg-black/40 backdrop-blur-sm hover:bg-moss/80 rounded-full p-4 transition-all duration-300"
        aria-label="Next video"
      >
        <ChevronRight className="h-7 w-7 text-white" />
      </button>

      {/* Video Counter */}
      <div className="absolute top-4 right-4 z-30 bg-black/50 backdrop-blur-sm rounded-full px-3 py-1 text-white text-sm">
        {currentIndex + 1} / {videos.length}
      </div>
    </div>
  );
};

export default memo(OptimizedVideoCarousel);
