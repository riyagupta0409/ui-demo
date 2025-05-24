import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, Volume2, VolumeX } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { getNewsById } from '@/data/mockData';
import { type NewsCard as NewsCardType } from '@/data/mockData';

const NewsSummary: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [news, setNews] = useState<NewsCardType | null>(null);
  const [topVoiceActive, setTopVoiceActive] = useState(false);
  const [bottomVoiceActive, setBottomVoiceActive] = useState(false);

  useEffect(() => {
    if (id) {
      const newsData = getNewsById(id);
      if (newsData) {
        setNews(newsData);
      }
    }
  }, [id]);

  // Mock paragraphs for the news content (in a real app, this would come from the API)
  const paragraphs = news ? [
    news.summary,
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in dui mauris. Vivamus hendrerit arcu sed erat molestie vehicula. Sed auctor neque eu tellus rhoncus ut eleifend nibh porttitor.",
    "Ut in nulla enim. Phasellus molestie magna non est bibendum non venenatis nisl tempor. Suspendisse dictum feugiat nisl ut dapibus. Mauris iaculis porttitor posuere.",
    "Praesent id metus massa, ut blandit odio. Proin quis tortor orci. Etiam at risus et justo dignissim congue. Donec congue lacinia dui, a porttitor lectus condimentum laoreet.",
  ] : [];

  // Function to handle text-to-speech
  const handleVoiceOver = (text: string, section: 'top' | 'bottom') => {
    if (window.speechSynthesis) {
      // Cancel any ongoing speech first
      window.speechSynthesis.cancel();
      
      if (section === 'top') {
        // If top voice was active, just turn it off and return
        if (topVoiceActive) {
          setTopVoiceActive(false);
          return;
        }
        
        // Otherwise, turn off bottom voice and turn on top voice
        setBottomVoiceActive(false);
        setTopVoiceActive(true);
      } else {
        // If bottom voice was active, just turn it off and return
        if (bottomVoiceActive) {
          setBottomVoiceActive(false);
          return;
        }
        
        // Otherwise, turn off top voice and turn on bottom voice
        setTopVoiceActive(false);
        setBottomVoiceActive(true);
      }
      
      // Create a new speech synthesis utterance
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = 'en-US';
      utterance.rate = 1.0;
      
      // When speech ends, reset the state
      utterance.onend = () => {
        if (section === 'top') {
          setTopVoiceActive(false);
        } else {
          setBottomVoiceActive(false);
        }
      };
      
      // Start speaking
      window.speechSynthesis.speak(utterance);
    }
  };

  // Format date
  const formatDate = (dateStr: string) => {
    const date = new Date(dateStr);
    return date.toLocaleDateString('en-US', { 
      month: 'long', 
      day: 'numeric',
      year: 'numeric'
    });
  };

  if (!news) {
    return (
      <div className="min-h-screen bg-ott-dark flex items-center justify-center">
        <p className="text-white">Loading...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-ott-dark">
      {/* Header */}
      <header className="py-4 px-6 border-b border-gray-800">
        <div className="container mx-auto">
          <Button 
            variant="ghost" 
            size="sm" 
            className="text-gray-400 hover:text-white"
            onClick={() => navigate(-1)}
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back
          </Button>
        </div>
      </header>
      
      <div className="container mx-auto py-8 px-6">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-2xl md:text-3xl font-bold text-white mb-3">{news.headline}</h1>
            <div className="flex items-center text-gray-400 text-sm">
              <span className="font-medium">{news.source}</span>
              <span className="mx-2">•</span>
              <span>{formatDate(news.date)}</span>
            </div>
          </div>
          
          {/* Top section - Text on left, Image with voice button on right */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
            <div className="order-2 md:order-1">
              <p className="text-gray-300 leading-relaxed">
                {paragraphs[0]}
              </p>
              <p className="text-gray-300 leading-relaxed mt-4">
                {paragraphs[1]}
              </p>
            </div>
            <div className="relative order-1 md:order-2">
              <img 
                src={news.image} 
                alt={news.headline}
                className="w-full h-64 object-cover rounded-lg" 
              />
              <button 
                onClick={() => handleVoiceOver(paragraphs[0] + " " + paragraphs[1], 'top')}
                className="absolute bottom-3 right-3 p-3 rounded-full bg-black/60 hover:bg-black/80 transition-colors"
              >
                {topVoiceActive ? (
                  <VolumeX className="h-5 w-5 text-white" />
                ) : (
                  <Volume2 className="h-5 w-5 text-white" />
                )}
              </button>
            </div>
          </div>
          
          {/* Middle section - Full width paragraphs */}
          <div className="mb-10">
            <p className="text-gray-300 leading-relaxed mb-4">
              {paragraphs[2]}
            </p>
            <p className="text-gray-300 leading-relaxed">
              {paragraphs[3]}
            </p>
          </div>
          
          {/* Bottom section - Image with voice button on left, Text on right */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
            <div className="relative">
              <img 
                src={`https://source.unsplash.com/random/800x600?${news.headline.split(' ')[0]}`} 
                alt="Related to article"
                className="w-full h-64 object-cover rounded-lg" 
              />
              <button 
                onClick={() => handleVoiceOver(paragraphs[2] + " " + paragraphs[3], 'bottom')}
                className="absolute bottom-3 right-3 p-3 rounded-full bg-black/60 hover:bg-black/80 transition-colors"
              >
                {bottomVoiceActive ? (
                  <VolumeX className="h-5 w-5 text-white" />
                ) : (
                  <Volume2 className="h-5 w-5 text-white" />
                )}
              </button>
            </div>
            <div>
              <h2 className="text-xl font-semibold text-white mb-4">Additional Information</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                Praesent id metus massa, ut blandit odio. Proin quis tortor orci. Etiam at risus et justo dignissim congue.
              </p>
              <p className="text-gray-300 leading-relaxed">
                Donec congue lacinia dui, a porttitor lectus condimentum laoreet. Nunc eu ullamcorper orci. Quisque eget odio ac lectus vestibulum faucibus eget in metus.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsSummary;
