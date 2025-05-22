
import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { type Topic } from '@/data/mockData';
import ContentCard from './ContentCard';

interface TopicCarouselProps {
  title: string;
  topics: Topic[];
  cardSize?: 'sm' | 'md' | 'lg';
}

const TopicCarousel: React.FC<TopicCarouselProps> = ({ 
  title, 
  topics,
  cardSize = 'md' 
}) => {
  const carouselRef = React.useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (!carouselRef.current) return;
    
    const scrollAmount = direction === 'left' 
      ? -carouselRef.current.clientWidth / 2 
      : carouselRef.current.clientWidth / 2;
    
    carouselRef.current.scrollBy({
      left: scrollAmount,
      behavior: 'smooth'
    });
  };

  return (
    <div className="relative mb-8 animate-fade-in">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl md:text-2xl font-bold text-white">{title}</h2>
        <div className="flex space-x-2">
          <button 
            onClick={() => scroll('left')}
            className="p-2 rounded-full bg-ott-secondary hover:bg-ott-accent/20 transition-colors"
          >
            <ChevronLeft className="h-5 w-5 text-white" />
          </button>
          <button 
            onClick={() => scroll('right')}
            className="p-2 rounded-full bg-ott-secondary hover:bg-ott-accent/20 transition-colors"
          >
            <ChevronRight className="h-5 w-5 text-white" />
          </button>
        </div>
      </div>
      
      <div 
        ref={carouselRef}
        className="horizontal-scroll gap-4"
      >
        {topics.map(topic => (
          <ContentCard key={topic.id} topic={topic} size={cardSize} />
        ))}
      </div>
    </div>
  );
};

export default TopicCarousel;
