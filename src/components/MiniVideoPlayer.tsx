import React, { useState, useRef, useEffect } from 'react';
import { Play, Pause, Volume2, VolumeX, RefreshCw } from 'lucide-react';
import { type VideoCard as VideoCardType } from '@/data/mockData';

interface MiniVideoPlayerProps {
  video: VideoCardType;
  onClick: () => void;
  autoplay?: boolean;
  delay?: number;
}

const MiniVideoPlayer: React.FC<MiniVideoPlayerProps> = ({ 
  video, 
  onClick,
  autoplay = true,
  delay = 0
}) => {
  const [isMuted, setIsMuted] = useState(true);
  const [isVisible, setIsVisible] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const playerRef = useRef<HTMLIFrameElement>(null);

  // Set up intersection observer to detect when the video is in viewport
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIsVisible(entry.isIntersecting);
          // Auto-play/pause based on visibility
          if (entry.isIntersecting) {
            // Add a small delay before playing to ensure smooth scrolling
            setTimeout(() => {
              if (document.hasFocus()) {
                setIsPlaying(true);
              }
            }, 100);
          } else {
            setIsPlaying(false);
          }
        });
      },
      { threshold: 0.7 } // When 70% of the element is visible
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, []);

  // Toggle mute
  const toggleMute = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsMuted(!isMuted);
  };

  // Toggle play/pause manually
  const togglePlay = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsPlaying(!isPlaying);
  };

  // Reload the current video
  const reloadVideo = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (playerRef.current) {
      const src = playerRef.current.src;
      playerRef.current.src = src;
      setIsPlaying(true);
    }
  };

  return (
    <div 
      ref={containerRef}
      className="ott-card flex flex-col cursor-pointer group relative"
      onClick={onClick}
    >
      <div className="h-80 relative overflow-hidden bg-black rounded-md">
        {/* Only load and play video when visible and playing state is true */}
        <iframe
          ref={playerRef}
          className="absolute top-0 left-0 w-full h-full"
          src={isVisible ? `https://www.youtube.com/embed/${video.videoId}?autoplay=${isPlaying ? 1 : 0}&mute=${isMuted ? 1 : 0}&start=0&controls=0&showinfo=0&rel=0&loop=1&playlist=${video.videoId}&modestbranding=1` : 'about:blank'}
          title={video.title}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
        
        {/* Show thumbnail when paused */}
        {isVisible && !isPlaying && (
          <div className="absolute inset-0 flex items-center justify-center">
            <img 
              src={video.thumbnail} 
              alt={video.title} 
              className="w-full h-full object-cover opacity-70" 
            />
          </div>
        )}
        
        {/* Overlay controls */}
        <div className="absolute inset-0 flex items-center justify-center bg-transparent group-hover:bg-black/30 transition-all duration-300">
          <div className="absolute bottom-2 right-2 flex space-x-2">
            {/* Play/Pause button */}
            <button 
              onClick={togglePlay}
              className="p-1 bg-black/60 rounded-full hover:bg-black/80 transition-colors"
            >
              {isPlaying ? (
                <Pause className="h-4 w-4 text-white" />
              ) : (
                <Play className="h-4 w-4 text-white" />
              )}
            </button>
            {/* Reload button */}
            <button 
              onClick={reloadVideo}
              className="p-1 bg-black/60 rounded-full hover:bg-black/80 transition-colors"
            >
              <RefreshCw className="h-4 w-4 text-white" />
            </button>
            {/* Mute button */}
            <button 
              onClick={toggleMute}
              className="p-1 bg-black/60 rounded-full hover:bg-black/80 transition-colors"
            >
              {isMuted ? (
                <VolumeX className="h-4 w-4 text-white" />
              ) : (
                <Volume2 className="h-4 w-4 text-white" />
              )}
            </button>
          </div>
          
          {/* Large play button in center when paused */}
          {!isPlaying && (
            <button 
              onClick={togglePlay}
              className="p-3 bg-black/50 rounded-full hover:bg-black/70 transition-colors"
            >
              <Play className="h-8 w-8 text-white" />
            </button>
          )}
        </div>
        
        {/* Duration indicator */}
        <div className="absolute bottom-2 left-2 bg-black/60 px-1 py-0.5 text-xs text-white rounded">
          {video.duration || "0:30"}
        </div>
      </div>
      
      <div className="p-3">
        <div className="flex items-start">
          <div className="flex-1">
            <h3 className="text-sm font-semibold line-clamp-2 text-white">{video.title}</h3>
            <p className="text-xs text-gray-400 mt-1">{video.channelName}</p>
            <div className="flex items-center mt-1">
              <span className="text-xs text-gray-500">{video.views}</span>
              <span className="mx-1 text-gray-500">•</span>
              <span className="text-xs text-gray-500">{video.uploadDate || "1 month ago"}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MiniVideoPlayer;
