
import React, { useState, useEffect } from 'react';
import { X } from 'lucide-react';
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { VideoCard as VideoCardType } from '@/data/mockData';
import VideoCard from './VideoCard';
import MiniVideoPlayer from './MiniVideoPlayer';
import { ScrollArea } from './ui/scroll-area';

interface VideoPlayerModalProps {
  video: VideoCardType | null;
  relatedVideos: VideoCardType[];
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onRelatedVideoClick: (video: VideoCardType) => void;
  layout?: 'split' | 'horizontal';
}

const VideoPlayerModal: React.FC<VideoPlayerModalProps> = ({ 
  video, 
  relatedVideos,
  open, 
  onOpenChange,
  onRelatedVideoClick,
  layout = 'split'
}) => {
  if (!video) return null;

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[900px] p-0 bg-ott-dark border-ott-secondary overflow-hidden">
        <div className="flex flex-col h-full max-h-[80vh] w-full">
          {/* Video player section */}
          <div className="relative pt-[56.25%] w-full">
            <iframe
              className="absolute top-0 left-0 w-full h-full"
              src={`https://www.youtube.com/embed/${video.videoId}?autoplay=1`}
              title={video.title}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
            <button 
              className="absolute top-2 right-2 p-2 bg-black/50 rounded-full hover:bg-black/70 transition-colors"
              onClick={() => onOpenChange(false)}
            >
              <X className="h-5 w-5 text-white" />
            </button>
          </div>
          
          {/* Video info section */}
          <div className="p-4">
            <h3 className="text-lg font-bold text-white">{video.title}</h3>
            <div className="flex items-center mt-2">
              <p className="text-sm text-gray-300">{video.channelName}</p>
              <span className="mx-2 text-gray-500">•</span>
              <p className="text-sm text-gray-300">{video.views}</p>
            </div>
          </div>
          
          {/* Related videos section */}
          <div className="p-4 pt-0">
            <h4 className="text-md font-semibold mb-3 text-white">Related Videos</h4>
            {layout === 'split' ? (
              <div className="space-y-4">
                {relatedVideos.slice(0, 6).map((relatedVideo, index) => (
                  <MiniVideoPlayer
                    key={relatedVideo.id}
                    video={relatedVideo}
                    onClick={() => onRelatedVideoClick(relatedVideo)}
                    autoplay={true} // Autoplay all videos
                    delay={0} // No delay needed with intersection observer
                  />
                ))}
              </div>
            ) : (
              <ScrollArea className="w-full max-w-full">
                <div className="flex gap-4 pb-4 pr-4">
                  {relatedVideos.slice(0, 6).map((relatedVideo) => (
                    <div key={relatedVideo.id} className="flex-shrink-0" style={{ width: '200px' }}>
                      <VideoCard 
                        video={relatedVideo}
                        onClick={() => onRelatedVideoClick(relatedVideo)}
                      />
                    </div>
                  ))}
                </div>
              </ScrollArea>
            )}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default VideoPlayerModal;
