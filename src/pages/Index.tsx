
import React from 'react';
import ContentCard from '@/components/ContentCard';
import NewsCard from '@/components/NewsCard';
import FeaturedStoriesCarousel from '@/components/FeaturedStoriesCarousel';
import { Link } from 'react-router-dom';
import { topics, trendingTopics, newReleases, popularActors } from '@/data/mockData';
import { Badge } from '@/components/ui/badge';

const Index = () => {
  const featuredTopics = trendingTopics.slice(0, 4);
  const mainContent = topics.slice(0, 12);
  
  return (
    <div className="min-h-screen bg-ott-dark">
      {/* Header */}
      <header className="py-4 px-6 md:px-12 bg-gradient-to-r from-ott-secondary to-ott-dark sticky top-0 z-50">
        <div className="container mx-auto">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl md:text-3xl font-bold text-white">
              <span className="text-ott-accent">Binge</span>Plus
            </h1>
            <nav className="hidden md:flex space-x-6">
              <a href="#" className="text-white hover:text-ott-accent transition-colors">Movies</a>
              <a href="#" className="text-white hover:text-ott-accent transition-colors">TV Shows</a>
              <a href="#" className="text-white hover:text-ott-accent transition-colors">Actors</a>
              <a href="#" className="text-white hover:text-ott-accent transition-colors">News</a>
            </nav>
          </div>
        </div>
      </header>
      
      {/* Main Content */}
      <section className="py-4 px-4 md:px-8">
        <div className="container mx-auto">
          {/* First Row - Featured Carousel and Card */}
          <div className="mb-8 grid grid-cols-1 md:grid-cols-4 gap-4">
            {/* Featured Carousel - Takes up 3/4 width */}
            <div className="md:col-span-3">
              <div className="ott-card overflow-hidden">
                <FeaturedStoriesCarousel stories={[...trendingTopics, ...mainContent.slice(0, 3)]} />
              </div>
            </div>
            
            {/* Featured Card - Takes up 1/4 width */}
            <div className="ott-card overflow-hidden">
              <Link to={`/details/${mainContent[0].id}`}>
                <div className="relative h-[250px]">
                  <img 
                    src={mainContent[0].image} 
                    alt={mainContent[0].title} 
                    className="w-full h-full object-cover" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-transparent opacity-70" />
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <Badge variant="outline" className="bg-ott-accent text-white border-none text-xs mb-1">
                      {mainContent[0].type.charAt(0).toUpperCase() + mainContent[0].type.slice(1)}
                    </Badge>
                    <h3 className="text-md font-bold text-white">{mainContent[0].title}</h3>
                  </div>
                </div>
              </Link>
            </div>
          </div>
          
          {/* Second Row - News Grid */}
          <div className="mb-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {mainContent.slice(1, 9).map((topic) => (
              <Link key={topic.id} to={`/details/${topic.id}`}>
                <NewsCard news={{
                  id: topic.id,
                  topicId: topic.id,
                  headline: topic.title,
                  image: topic.image, 
                  summary: topic.description || "Entertainment news and updates", 
                  date: new Date().toISOString(),
                  source: topic.type === 'movie' ? "Cinema Today" : topic.type === 'show' ? "TV Guide" : "Entertainment Weekly"
                }} variant="grid" />
              </Link>
            ))}
          </div>
          
          {/* Third Row - Additional Content */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            {newReleases.slice(0, 4).map((topic) => (
              <div key={topic.id} className="ott-card overflow-hidden">
                <Link to={`/horizontal/${topic.id}`}>
                  <div className="h-48">
                    <img src={topic.image} alt={topic.title} className="w-full h-full object-cover" />
                  </div>
                  <div className="p-4">
                    <h3 className="text-md font-semibold text-white">{topic.title}</h3>
                    <p className="text-sm text-gray-400 mt-2 line-clamp-2">{topic.description || "New release update."}</p>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Footer */}
      <footer className="py-8 px-6 md:px-12 bg-ott-secondary mt-12">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <h2 className="text-xl font-bold text-white">
                <span className="text-ott-accent">Stream</span>Hub
              </h2>
              <p className="text-gray-400 mt-2">Your one-stop entertainment platform</p>
            </div>
            <div className="flex space-x-8">
              <div>
                <h3 className="text-white font-medium mb-2">Browse</h3>
                <ul className="space-y-1">
                  <li><a href="#" className="text-gray-400 hover:text-ott-accent transition-colors">Movies</a></li>
                  <li><a href="#" className="text-gray-400 hover:text-ott-accent transition-colors">TV Shows</a></li>
                  <li><a href="#" className="text-gray-400 hover:text-ott-accent transition-colors">Actors</a></li>
                  <li><a href="#" className="text-gray-400 hover:text-ott-accent transition-colors">News</a></li>
                </ul>
              </div>
              <div>
                <h3 className="text-white font-medium mb-2">Help</h3>
                <ul className="space-y-1">
                  <li><a href="#" className="text-gray-400 hover:text-ott-accent transition-colors">Account</a></li>
                  <li><a href="#" className="text-gray-400 hover:text-ott-accent transition-colors">Support</a></li>
                  <li><a href="#" className="text-gray-400 hover:text-ott-accent transition-colors">Contact</a></li>
                  <li><a href="#" className="text-gray-400 hover:text-ott-accent transition-colors">FAQ</a></li>
                </ul>
              </div>
            </div>
          </div>
          <div className="mt-8 pt-6 border-t border-gray-700 text-center">
            <p className="text-gray-400 text-sm">&copy; 2024 BingePlus. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
