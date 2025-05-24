import React, { useState } from 'react';
import { X, Volume2, VolumeX } from 'lucide-react';
import { type NewsCard as NewsCardType } from '@/data/mockData';

interface NewsSummaryModalProps {
  news: NewsCardType;
  onClose: () => void;
  isOpen: boolean;
}

const NewsSummaryModal: React.FC<NewsSummaryModalProps> = ({
  news,
  onClose,
  isOpen
}) => {
  const [isReading, setIsReading] = useState(false);
  const [topVoiceActive, setTopVoiceActive] = useState(false);
  const [bottomVoiceActive, setBottomVoiceActive] = useState(false);
  
  // Mock paragraphs for the news content (in a real app, this would come from the API)
  const paragraphs = [
    news.summary,
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in dui mauris. Vivamus hendrerit arcu sed erat molestie vehicula. Sed auctor neque eu tellus rhoncus ut eleifend nibh porttitor.",
    "Ut in nulla enim. Phasellus molestie magna non est bibendum non venenatis nisl tempor. Suspendisse dictum feugiat nisl ut dapibus. Mauris iaculis porttitor posuere.",
    "Praesent id metus massa, ut blandit odio. Proin quis tortor orci. Etiam at risus et justo dignissim congue. Donec congue lacinia dui, a porttitor lectus condimentum laoreet.",
  ];

  // Function to handle text-to-speech
  const handleVoiceOver = (text: string, section: 'top' | 'bottom') => {
    if (window.speechSynthesis) {
      if (section === 'top' && topVoiceActive) {
        window.speechSynthesis.cancel();
        setTopVoiceActive(false);
        return;
      }
      
      if (section === 'bottom' && bottomVoiceActive) {
        window.speechSynthesis.cancel();
        setBottomVoiceActive(false);
        return;
      }
      
      // Cancel any ongoing speech
      window.speechSynthesis.cancel();
      
      // Create a new speech synthesis utterance
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = 'en-US';
      utterance.rate = 1.0;
      
      // Set the appropriate state based on section
      if (section === 'top') {
        setTopVoiceActive(true);
        setBottomVoiceActive(false);
      } else {
        setBottomVoiceActive(true);
        setTopVoiceActive(false);
      }
      
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

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4 overflow-y-auto">
      <div className="bg-gray-900 rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto relative">
        {/* Close button */}
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full bg-black/40 hover:bg-black/60 transition-colors z-10"
        >
          <X className="h-5 w-5 text-white" />
        </button>
        
        <div className="p-6 md:p-8">
          {/* Header */}
          <div className="mb-6">
            <h1 className="text-2xl md:text-3xl font-bold text-white mb-2">{news.headline}</h1>
            <div className="flex items-center text-gray-400 text-sm">
              <span className="font-medium">{news.source}</span>
              <span className="mx-2">•</span>
              <span>{formatDate(news.date)}</span>
            </div>
          </div>
          
          {/* Top section - Text on left, Image with voice button on right */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
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
          <div className="mb-8">
            <p className="text-gray-300 leading-relaxed mb-4">
              {paragraphs[2]}
            </p>
            <p className="text-gray-300 leading-relaxed">
              {paragraphs[3]}
            </p>
          </div>
          
          {/* Bottom section - Image with voice button on left, Text on right */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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

export default NewsSummaryModal;
