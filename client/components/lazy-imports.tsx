import { lazy, Suspense, ComponentType } from 'react';

// Lazy loading fallback component
const LoadingFallback = () => (
  <div className="h-64 bg-gradient-to-br from-moss/10 to-teal/10 rounded-lg animate-pulse flex items-center justify-center">
    <div className="text-muted-foreground">Carregando...</div>
  </div>
);

// Lazy load heavy components
export const LazyTestimonialsCarousel = lazy(() => import('@/components/ui/testimonials-carousel'));
export const LazyFAQAccordion = lazy(() => import('@/components/ui/faq-accordion'));
export const LazyFooter = lazy(() => import('@/components/ui/footer'));

// HOC for wrapping lazy components with Suspense
export function withSuspense<T extends object>(
  Component: ComponentType<T>,
  fallback = <LoadingFallback />
) {
  return function WrappedComponent(props: T) {
    return (
      <Suspense fallback={fallback}>
        <Component {...props} />
      </Suspense>
    );
  };
}

// Pre-wrapped components ready to use
export const TestimonialsCarouselLazy = withSuspense(LazyTestimonialsCarousel);
export const FAQAccordionLazy = withSuspense(LazyFAQAccordion);
export const FooterLazy = withSuspense(LazyFooter);
