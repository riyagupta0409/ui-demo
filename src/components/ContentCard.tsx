
import React from 'react';
import { Link } from 'react-router-dom';
import { type Topic } from '@/data/mockData';
import { Badge } from '@/components/ui/badge';

interface ContentCardProps {
  topic: Topic;
  size?: 'sm' | 'md' | 'lg';
}

const ContentCard: React.FC<ContentCardProps> = ({ topic, size = 'md' }) => {
  const getCardSize = () => {
    switch (size) {
      case 'sm':
        return 'w-[250px] h-[180px]';
      case 'lg':
        return 'w-[350px] h-[250px]';
      default:
        return 'w-[300px] h-[200px]';
    }
  };

  return (
    <Link 
      to={`/details/${topic.id}`} 
      className={`ott-card ${getCardSize()} flex-shrink-0 snap-start relative group overflow-hidden`}
    >
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-transparent opacity-70 z-10" />
      <img 
        src={topic.image} 
        alt={topic.title} 
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
      />
      
      <div className="absolute bottom-0 left-0 right-0 p-4 z-20">
        <Badge variant="outline" className="mb-2 bg-ott-accent text-white border-none">
          {topic.type.charAt(0).toUpperCase() + topic.type.slice(1)}
        </Badge>
        <h3 className="text-xl font-bold text-white">{topic.title}</h3>
        {topic.releaseYear && (
          <p className="text-gray-200 text-sm">{topic.releaseYear}</p>
        )}
        {topic.rating && (
          <div className="flex items-center mt-1">
            <svg 
              className="w-4 h-4 text-yellow-300" 
              fill="currentColor" 
              viewBox="0 0 20 20"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            <span className="ml-1 text-white text-sm">{topic.rating.toFixed(1)}</span>
          </div>
        )}
      </div>
    </Link>
  );
};

export default ContentCard;
