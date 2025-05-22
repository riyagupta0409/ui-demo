
import React from 'react';
import { type NewsCard as NewsCardType } from '@/data/mockData';

interface NewsCardProps {
  news: NewsCardType;
  onClick?: () => void;
  variant?: 'vertical' | 'horizontal' | 'grid';
}

const NewsCard: React.FC<NewsCardProps> = ({ 
  news, 
  onClick,
  variant = 'vertical'
}) => {
  const formatDate = (dateStr: string) => {
    const date = new Date(dateStr);
    return date.toLocaleDateString('en-US', { 
      month: 'short', 
      day: 'numeric',
      year: 'numeric'
    });
  };

  if (variant === 'horizontal') {
    return (
      <div 
        onClick={onClick} 
        className="ott-card flex flex-row h-[130px] w-[300px] flex-shrink-0 cursor-pointer"
      >
        <div className="w-1/3">
          <img 
            src={news.image} 
            alt={news.headline} 
            className="w-full h-full object-cover" 
          />
        </div>
        <div className="w-2/3 p-3 flex flex-col">
          <h3 className="text-sm font-semibold line-clamp-2 text-white">{news.headline}</h3>
          <p className="text-xs text-gray-400 line-clamp-2 mt-1">{news.summary}</p>
          <div className="mt-auto flex items-center justify-between">
            <span className="text-xs text-gray-500">{news.source}</span>
            <span className="text-xs text-gray-500">{formatDate(news.date)}</span>
          </div>
        </div>
      </div>
    );
  }
  
  if (variant === 'grid') {
    return (
      <div 
        onClick={onClick} 
        className="ott-card cursor-pointer group h-full"
      >
        <div className="flex flex-col h-full">
          <div className="h-40">
            <img 
              src={news.image} 
              alt={news.headline} 
              className="w-full h-full object-cover" 
            />
          </div>
          <div className="p-4 flex flex-col flex-grow">
            <div className="mb-2">
              <span className="text-xs text-gray-400">{news.source}</span>
            </div>
            <h3 className="text-md font-semibold line-clamp-2 text-white mb-1">{news.headline}</h3>
            <p className="text-sm text-gray-400 line-clamp-2 flex-grow">{news.summary}</p>
            <span className="text-xs text-gray-500 mt-2 block">{formatDate(news.date)}</span>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div 
      onClick={onClick} 
      className="ott-card flex flex-col cursor-pointer"
    >
      <div className="h-40">
        <img 
          src={news.image} 
          alt={news.headline} 
          className="w-full h-full object-cover" 
        />
      </div>
      <div className="p-4">
        <h3 className="text-md font-semibold line-clamp-2 text-white">{news.headline}</h3>
        <p className="text-sm text-gray-400 line-clamp-2 mt-2">{news.summary}</p>
        <div className="mt-2 flex items-center justify-between">
          <span className="text-xs text-gray-500">{news.source}</span>
          <span className="text-xs text-gray-500">{formatDate(news.date)}</span>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
