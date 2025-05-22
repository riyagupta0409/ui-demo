
import React from 'react';
import { Play } from 'lucide-react';
import { type VideoCard as VideoCardType } from '@/data/mockData';

interface VideoCardProps {
  video: VideoCardType;
  onClick: () => void;
  variant?: 'vertical' | 'horizontal';
}

const VideoCard: React.FC<VideoCardProps> = ({ 
  video, 
  onClick,
  variant = 'vertical'
}) => {
  if (variant === 'horizontal') {
    return (
      <div 
        onClick={onClick} 
        className="ott-card flex flex-row h-[130px] w-[300px] flex-shrink-0 cursor-pointer group"
      >
        <div className="w-1/3 relative">
          <img 
            src={video.thumbnail} 
            alt={video.title} 
            className="w-full h-full object-cover" 
          />
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/40">
            <Play className="w-8 h-8 text-white" />
          </div>
        </div>
        <div className="w-2/3 p-3 flex flex-col">
          <h3 className="text-sm font-semibold line-clamp-2 text-white">{video.title}</h3>
          <p className="text-xs text-gray-400 mt-1">{video.channelName}</p>
          <span className="text-xs text-gray-500 mt-auto">{video.views}</span>
        </div>
      </div>
    );
  }

  return (
    <div 
      onClick={onClick} 
      className="ott-card flex flex-col cursor-pointer group"
    >
      <div className="h-40 relative">
        <img 
          src={video.thumbnail} 
          alt={video.title} 
          className="w-full h-full object-cover" 
        />
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/40">
          <Play className="w-12 h-12 text-white" />
        </div>
      </div>
      <div className="p-4">
        <h3 className="text-md font-semibold line-clamp-2 text-white">{video.title}</h3>
        <p className="text-sm text-gray-400 mt-1">{video.channelName}</p>
        <span className="text-xs text-gray-500 mt-2 block">{video.views}</span>
      </div>
    </div>
  );
};

export default VideoCard;
