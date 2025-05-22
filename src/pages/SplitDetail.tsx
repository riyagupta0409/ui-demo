
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { ArrowLeft, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import NewsCard from '@/components/NewsCard';
import VideoCard from '@/components/VideoCard';
import VideoPlayerModal from '@/components/VideoPlayerModal';
import { 
  getTopicById, 
  getNewsForTopic, 
  getVideosForTopic, 
  getRelatedTopics,
  type Topic,
  type NewsCard as NewsCardType,
  type VideoCard as VideoCardType
} from '@/data/mockData';

const SplitDetail = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  
  const [topic, setTopic] = useState<Topic | null>(null);
  const [news, setNews] = useState<NewsCardType[]>([]);
  const [videos, setVideos] = useState<VideoCardType[]>([]);
  const [selectedVideo, setSelectedVideo] = useState<VideoCardType | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  useEffect(() => {
    if (id) {
      const topicData = getTopicById(id);
      const newsData = getNewsForTopic(id);
      const videosData = getVideosForTopic(id);
      
      if (topicData) {
        setTopic(topicData);
        setNews(newsData);
        setVideos(videosData);
      }
    }
  }, [id]);
  
  const handleVideoClick = (video: VideoCardType) => {
    setSelectedVideo(video);
    setIsModalOpen(true);
  };

  if (!topic) {
    return (
      <div className="min-h-screen bg-ott-dark flex items-center justify-center">
        <p className="text-white">Loading...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-ott-dark">
      {/* Netflix-style Hero Header */}
      <div className="relative">
        {/* Full-width background image with overlay */}
        <div className="relative w-full h-[70vh] overflow-hidden">
          <img 
            src={topic.image} 
            alt={topic.title} 
            className="w-full h-full object-cover" 
          />
          {/* Side gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-transparent" />
          {/* Bottom gradient blur overlay - transitions to the blue background */}
          <div className="absolute bottom-0 left-0 right-0 h-[30%] bg-gradient-to-t from-ott-dark via-ott-dark/90 to-transparent backdrop-blur-sm" />
        </div>

        {/* Back button */}
        <div className="absolute top-6 left-6 z-10">
          <Button 
            variant="ghost" 
            onClick={() => navigate('/')}
            className="text-white hover:bg-black/20"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Home
          </Button>
        </div>

        {/* Content overlay */}
        <div className="absolute bottom-0 left-0 right-0 p-8 pb-16">
          <div className="container mx-auto">
            <div className="max-w-2xl">
              {/* Netflix-style logo/badge */}
              <div className="mb-4">
                <span className="bg-red-600 text-white px-2 py-1 text-xs font-bold">
                  {topic.type === 'movie' ? 'MOVIE' : topic.type === 'show' ? 'SERIES' : topic.type.toUpperCase()}
                </span>
                {topic.releaseYear && (
                  <span className="ml-2 text-gray-300 text-sm">({topic.releaseYear})</span>
                )}
              </div>
              
              {/* Title */}
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">{topic.title}</h1>
              
              {/* Rating */}
              {topic.rating && (
                <div className="flex items-center mb-4">
                  <span className="bg-yellow-500 text-black px-2 py-1 text-xs font-bold">
                    #{1} in {topic.type === 'movie' ? 'Movies' : 'TV Shows'} Today
                  </span>
                  <div className="flex items-center ml-4">
                    <svg 
                      className="w-5 h-5 text-yellow-300" 
                      fill="currentColor" 
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    <span className="ml-1 text-white text-sm">
                      {topic.rating.toFixed(1)}/10
                    </span>
                  </div>
                </div>
              )}
              
              {/* Description */}
              <p className="text-gray-300 text-lg mb-6">
                {topic.description || `A popular ${topic.type} that has captivated audiences worldwide.`}
              </p>
              
              {/* Action buttons */}
              <div className="flex flex-wrap gap-4">
                {topic.deepLink && (
                  <Button 
                    className="bg-white hover:bg-white/90 text-black gap-2 font-bold px-8 py-6"
                    onClick={() => window.open(topic.deepLink, '_blank')}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>
                    Play
                  </Button>
                )}
                {/* <Button 
                  variant="outline" 
                  className="bg-gray-600/80 hover:bg-gray-600 text-white border-none gap-2 font-bold px-8 py-6"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5"><path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z"></path></svg>
                  My List
                </Button>
                 */}
                <div className="ml-auto">
                  <Link
                    to={`/horizontal/${id}`}
                    className="text-white hover:text-gray-300 underline underline-offset-4"
                  >
                    View Alternate Layout
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Split Content Section */}
      <section className="py-8 px-6">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* News Column */}
            <div>
              <h2 className="text-xl md:text-2xl font-bold text-white mb-6">Latest News</h2>
              <div className="grid grid-cols-1 gap-6">
                {news.map((item) => (
                  <NewsCard key={item.id} news={item} onClick={() => {}} />
                ))}
              </div>
            </div>
            
            {/* Videos Column - Changed from grid-cols-2 to grid-cols-1 */}
            <div>
              <h2 className="text-xl md:text-2xl font-bold text-white mb-6">Related Videos</h2>
              <div className="grid grid-cols-1 gap-6">
                {videos.map((item) => (
                  <VideoCard 
                    key={item.id} 
                    video={item} 
                    onClick={() => handleVideoClick(item)} 
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Video Player Modal */}
      <VideoPlayerModal
        video={selectedVideo}
        relatedVideos={videos.filter(v => v.id !== selectedVideo?.id)}
        open={isModalOpen}
        onOpenChange={setIsModalOpen}
        onRelatedVideoClick={handleVideoClick}
      />
    </div>
  );
};

export default SplitDetail;
