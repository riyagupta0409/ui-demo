import React, { useState, useCallback, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { type Topic } from '@/data/mockData';
import { Badge } from '@/components/ui/badge';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { 
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext
} from '@/components/ui/carousel';

interface FeaturedStoriesCarouselProps {
  stories: Topic[];
}

const FeaturedStoriesCarousel: React.FC<FeaturedStoriesCarouselProps> = ({ stories }) => {
  const [api, setApi] = useState<any>(null);
  const [current, setCurrent] = useState(0);
  const autoplayRef = useRef<NodeJS.Timeout | null>(null);
  const autoplayDelay = 5000; // 5 seconds

  const onSelect = useCallback(() => {
    if (!api) return;
    setCurrent(api.selectedScrollSnap());
  }, [api]);

  // Auto-scroll functionality
  const startAutoplay = useCallback(() => {
    if (autoplayRef.current) clearTimeout(autoplayRef.current);
    
    autoplayRef.current = setTimeout(() => {
      if (api) {
        api.scrollNext();
      }
      startAutoplay();
    }, autoplayDelay);
  }, [api, autoplayDelay]);

  // Pause autoplay on hover/interaction
  const stopAutoplay = useCallback(() => {
    if (autoplayRef.current) {
      clearTimeout(autoplayRef.current);
      autoplayRef.current = null;
    }
  }, []);

  useEffect(() => {
    if (!api) return;
    api.on('select', onSelect);
    
    // Start autoplay
    startAutoplay();
    
    return () => {
      api.off('select', onSelect);
      stopAutoplay();
    };
  }, [api, onSelect, startAutoplay, stopAutoplay]);

  return (
    <div className="relative">
      <div className="flex justify-between items-center mb-2">
        <h2 className="text-sm font-bold text-white flex items-center">
          <span className="w-2 h-2 bg-ott-red mr-2 rounded-full"></span>
          Featured Stories
        </h2>
      </div>
      
      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
        setApi={setApi}
        className="w-full overflow-hidden"
      >
        <CarouselContent className="-ml-0"
          onMouseEnter={stopAutoplay}
          onMouseLeave={startAutoplay}
        >
          {stories.map((story) => (
            <CarouselItem key={story.id} className="pl-0 basis-full">
              <Link to={`/details/${story.id}`} className="block h-full">
                <div className="relative h-[250px] w-full">
                  <img 
                    src={story.image} 
                    alt={story.title} 
                    className="w-full h-full object-cover" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-transparent opacity-70" />
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <div className="flex items-center mb-1">
                      <Badge variant="outline" className="bg-ott-accent text-white border-none text-xs">
                        {story.type.charAt(0).toUpperCase() + story.type.slice(1)}
                      </Badge>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-1">{story.title}</h3>
                    <p className="text-gray-200 text-sm line-clamp-2">{story.description || "Featured entertainment story."}</p>
                  </div>
                </div>
              </Link>
            </CarouselItem>
          ))}
        </CarouselContent>

        <div className="absolute z-50 flex items-center justify-center gap-1 bottom-2 left-0 right-0">
          {stories.map((_, index) => (
            <button
              key={index}
              className={`w-2 h-2 rounded-full transition-all ${current === index ? 'bg-white scale-125' : 'bg-white/50'}`}
              onClick={() => api?.scrollTo(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        <CarouselPrevious className="left-2 h-8 w-8 bg-black/30 text-white hover:bg-black/50 border-none absolute top-1/2 -translate-y-1/2 rounded-full">
          <ChevronLeft className="h-4 w-4" />
        </CarouselPrevious>
        <CarouselNext className="right-2 h-8 w-8 bg-black/30 text-white hover:bg-black/50 border-none absolute top-1/2 -translate-y-1/2 rounded-full">
          <ChevronRight className="h-4 w-4" />
        </CarouselNext>
      </Carousel>
    </div>
  );
};

export default FeaturedStoriesCarousel;
