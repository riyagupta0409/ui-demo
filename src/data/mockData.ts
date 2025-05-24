export interface Topic {
  id: string;
  type: 'actor' | 'movie' | 'show';
  title: string;
  image: string;
  rating?: number;
  releaseYear?: number; // Year of initial release or most significant recent release
  deepLink?: string;
  description?: string;
}

export interface NewsCard {
  id: string;
  topicId: string;
  headline: string;
  summary: string;
  image: string;
  date: string; // YYYY-MM-DD
  source: string;
}

export interface VideoCard {
  id: string;
  topicId: string;
  title: string;
  thumbnail: string;
  channelName: string;
  views: string;
  videoId: string; // Actual or plausible YouTube Video ID
  duration?: string; // MM:SS
  uploadDate?: string; // Relative to "current date" of May 2025
}

export const topics: Topic[] = [
  {
    id: '1',
    type: 'movie',
    title: 'Dune: Part Two',
    image: 'https://images.unsplash.com/photo-1500375592092-40eb2168fd21', // Generic movie image
    rating: 8.9,
    releaseYear: 2024,
    deepLink: 'https://www.max.com/movies/dune-part-two',
    description: 'Paul Atreides unites with Chani and the Fremen. "Dune: Messiah" is in active development, expected 2027.'
  },
  {
    id: '2',
    type: 'actor',
    title: 'Zendaya',
    image: 'https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b', // Generic actor image
    rating: 9.2,
    deepLink: 'https://www.imdb.com/name/nm3918035/',
    description: 'Star of "Euphoria," "Dune" series, and MCU\'s "Spider-Man." Multiple projects in development including "Spider-Man 4" and "Dune: Messiah."'
  },
  {
    id: '3',
    type: 'show',
    title: 'Stranger Things',
    image: 'https://images.unsplash.com/photo-1470813740244-df37b8c1edcb', // Generic show image
    rating: 9.0,
    releaseYear: 2016, // Initial release
    deepLink: 'https://www.netflix.com/title/80057281',
    description: 'Supernatural forces in Hawkins, Indiana. The fifth and final season is highly anticipated for late 2025.'
  },
  {
    id: '4',
    type: 'movie',
    title: 'The Batman',
    image: 'https://images.unsplash.com/photo-1500673922987-e212871fec22', // Generic movie image
    rating: 8.0,
    releaseYear: 2022,
    deepLink: 'https://www.max.com/movies/the-batman',
    description: 'Batman investigates Gotham\'s corruption. "The Batman Part II" is in development, targeting an October 2027 release.'
  },
  {
    id: '5',
    type: 'show',
    title: 'The Last of Us',
    image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5', // Generic show image
    rating: 9.1,
    releaseYear: 2023, // S1 release
    deepLink: 'https://www.max.com/shows/the-last-of-us',
    description: 'Joel and Ellie\'s journey in a post-pandemic world. Season 2 premiered in early 2025. Season 3 discussions are ongoing.'
  },
  {
    id: '6',
    type: 'actor',
    title: 'Tom Holland',
    image: 'https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b', // Generic actor image
    rating: 8.6,
    deepLink: 'https://www.imdb.com/name/nm4043618/',
    description: 'Known as MCU\'s Spider-Man. "Spider-Man: Brave New Day" (Spider-Man 4) begins filming summer 2025 for a 2026 release.'
  },
  {
    id: '7',
    type: 'movie',
    title: 'Oppenheimer',
    image: 'https://images.unsplash.com/photo-1500673922987-e212871fec22', // Generic movie image
    rating: 8.7,
    releaseYear: 2023,
    deepLink: 'https://www.amazon.com/Oppenheimer-4K-UHD-Blu-ray/dp/B0CHTXP75N',
    description: 'The story of J. Robert Oppenheimer and the atomic bomb. Major awards winner of the 2023-2024 season. Nolan\'s next film "The Odyssey" in pre-production.'
  },
  {
    id: '8',
    type: 'show',
    title: 'House of the Dragon',
    image: 'https://images.unsplash.com/photo-1470813740244-df37b8c1edcb', // Generic show image
    rating: 8.6,
    releaseYear: 2022, // S1 release
    deepLink: 'https://www.max.com/shows/house-of-the-dragon',
    description: 'The Targaryen civil war. Season 2 concluded in late 2024. Season 3 is confirmed and expected in Summer 2026.'
  },
  {
    id: '9',
    type: 'actor',
    title: 'Florence Pugh',
    image: 'https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b', // Generic actor image
    rating: 8.8,
    deepLink: 'https://www.imdb.com/name/nm6073955/',
    description: 'Acclaimed actress, starred in "Thunderbolts*" (released May 2025) and "We Live in Time" (2025). Several new projects announced.'
  },
  {
    id: '10',
    type: 'movie',
    title: 'Barbie',
    image: 'https://images.unsplash.com/photo-1500375592092-40eb2168fd21', // Generic movie image
    rating: 7.6,
    releaseYear: 2023,
    deepLink: 'https://www.amazon.com/Barbie-Blu-ray-Margot-Robbie/dp/B0C85QJGMY',
    description: 'Barbie Land vs. Real World. A cultural phenomenon of 2023. Sequel discussions ongoing, spin-offs in early development.'
  },
  {
    id: '11',
    type: 'show',
    title: 'Wednesday',
    image: 'https://images.unsplash.com/photo-1470813740244-df37b8c1edcb', // Generic show image
    rating: 8.4,
    releaseYear: 2022, // S1 release
    deepLink: 'https://www.netflix.com/title/81231974',
    description: 'Wednesday Addams at Nevermore Academy. Season 2 set for release in two parts: August & September 2025.'
  },
  {
    id: '12',
    type: 'actor',
    title: 'Timothée Chalamet',
    image: 'https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b', // Generic actor image
    rating: 9.0,
    deepLink: 'https://www.imdb.com/name/nm3154303/',
    description: 'Star of "Dune" series and "Wonka." His Bob Dylan biopic "A Complete Unknown" released late 2024 to acclaim. "Dune: Messiah" films summer 2025.'
  }
];

export const trendingTopics = [
  topics.find(t => t.id === '3')!, // Stranger Things (Final season buzz)
  topics.find(t => t.id === '11')!,// Wednesday (S2 imminent)
  topics.find(t => t.id === '1')!, // Dune: Part Two (Messiah development)
  topics.find(t => t.id === '12')!,// Timothée Chalamet
  topics.find(t => t.id === '5')!, // The Last of Us (S2 reception)
  topics.find(t => t.id === '9')!, // Florence Pugh (Thunderbolts* release)
  topics.find(t => t.id === '2')!, // Zendaya
  topics.find(t => t.id === '6')!, // Tom Holland
  topics.find(t => t.id === '8')!, // House of the Dragon (S3 hype)
  topics.find(t => t.id === '4')!, // The Batman (Sequel news)
];

export const newReleases = [ // Reflecting late 2024 / early-mid 2025 actual or anticipated releases
  topics.find(t => t.id === '9')!,  // Florence Pugh (Thunderbolts* just released May 2025)
  topics.find(t => t.id === '5')!,  // The Last of Us (Season 2 aired early 2025)
  topics.find(t => t.id === '11')!, // Wednesday (Season 2 coming Aug/Sep 2025)
  topics.find(t => t.id === '12')!, // Timothée Chalamet ("A Complete Unknown" released late 2024)
  topics.find(t => t.id === '8')!,  // House of the Dragon (Season 2 concluded late 2024)
  // Potentially add more distinct new releases if topics were expanded. For now, these are the most "recent" from the list.
];

export const popularActors = [
  topics.find(t => t.id === '2')!,   // Zendaya
  topics.find(t => t.id === '12')!,  // Timothée Chalamet
  topics.find(t => t.id === '6')!,   // Tom Holland
  topics.find(t => t.id === '9')!,   // Florence Pugh
  // Add more if actor list expands significantly
];

export const newsCards: NewsCard[] = [
  // Dune: Part Two (id: 1) - Target: 10
  { id: 'news-1-1', topicId: '1', headline: '"Dune: Part Two" Dominates Streaming After Stellar Theatrical Run', summary: 'Denis Villeneuve\'s sci-fi epic continues its reign on streaming platforms, captivating audiences worldwide post its successful theatrical and awards campaign.', image: topics.find(t => t.id === '1')!.image, date: '2025-05-10', source: 'Digital Media Trends' },
  { id: 'news-1-2', topicId: '1', headline: 'Villeneuve Confirms "Dune: Messiah" Filming Starts Late Summer 2025', summary: 'Director Denis Villeneuve has officially announced that principal photography for "Dune: Messiah" is slated to begin in August 2025, with much of the original cast returning.', image: topics.find(t => t.id === '1')!.image, date: '2025-04-20', source: 'Variety' },
  { id: 'news-1-3', topicId: '1', headline: '"Dune: Part Two" Blu-ray Soars with Extensive Bonus Content', summary: 'The 4K UHD Blu-ray release of "Dune: Part Two" has become a bestseller, praised for its hours of in-depth documentaries and cast interviews.', image: topics.find(t => t.id === '1')!.image, date: '2025-03-12', source: 'Home Media Magazine' },
  { id: 'news-1-4', topicId: '1', headline: 'Hans Zimmer Teases "Evolved Soundscape" for "Dune: Messiah" Score', summary: 'Legendary composer Hans Zimmer revealed he is aiming for an "evolved and even more immersive" soundscape for the upcoming "Dune: Messiah."', image: topics.find(t => t.id === '1')!.image, date: '2025-02-25', source: 'Film Music Monthly' },
  { id: 'news-1-5', topicId: '1', headline: 'Art of Dune: Costume and Production Design Exhibition Announced', summary: 'An international museum tour, "The Art of Dune: Arrakis and Beyond," will showcase the intricate costumes and production design from Villeneuve\'s films.', image: topics.find(t => t.id === '1')!.image, date: '2025-05-15', source: 'Museum Network News' },
  { id: 'news-1-6', topicId: '1', headline: 'Analyzing the Politics of Dune: New Scholarly Articles Published', summary: 'Several academic journals have recently published analyses on the complex political and ecological themes presented in the "Dune" saga.', image: topics.find(t => t.id === '1')!.image, date: '2025-04-05', source: 'University Press Review' },
  { id: 'news-1-7', topicId: '1', headline: 'Anya Taylor-Joy Reflects on Secret "Dune: Part Two" Cameo', summary: 'Anya Taylor-Joy discusses her surprise cameo and the experience of joining the "Dune" universe for a pivotal, albeit brief, role.', image: topics.find(t => t.id === '1')!.image, date: '2025-01-20', source: 'Entertainment Weekly' },
  { id: 'news-1-8', topicId: '1', headline: 'Legendary Pictures Explores Expanding Dune Universe on Television', summary: 'Following the success of the films, Legendary is reportedly in early talks to develop further stories from the Dune universe for a streaming series.', image: topics.find(t => t.id === '1')!.image, date: '2025-03-30', source: 'The Hollywood Reporter' },
  { id: 'news-1-9', topicId: '1', headline: '"Dune: Part Two" Visual Effects Team Wins Big at VES Awards', summary: 'The groundbreaking VFX work in "Dune: Part Two" was recognized with multiple awards at the Visual Effects Society Awards earlier this year.', image: topics.find(t => t.id === '1')!.image, date: '2025-02-10', source: 'VFX Society' },
  { id: 'news-1-10', topicId: '1', headline: 'The Enduring Legacy of Frank Herbert\'s Dune: A Modern Reassessment', summary: 'Critics and fans reassess the impact of Frank Herbert\'s original novels in light of the renewed popular interest sparked by the successful film adaptations.', image: topics.find(t => t.id === '1')!.image, date: '2024-12-15', source: 'Literary Journal Quarterly' },

  // Zendaya (id: 2) - Target: 10
  { id: 'news-2-1', topicId: '2', headline: 'Zendaya Wraps "Euphoria" Season 3, Hints at "Transformative" Arc for Rue', summary: 'Zendaya has officially completed filming for "Euphoria" Season 3, teasing a significant and transformative journey for her character, Rue.', image: topics.find(t => t.id === '2')!.image, date: '2025-04-15', source: 'HBO Official Press' },
  { id: 'news-2-2', topicId: '2', headline: 'Zendaya Confirmed for "Spider-Man: Brave New Day," Begins Early Prep', summary: 'It\'s official: Zendaya will return as MJ in "Spider-Man: Brave New Day." The actress is reportedly beginning preliminary preparations for the film.', image: topics.find(t => t.id === '2')!.image, date: '2025-05-05', source: 'Deadline Hollywood' },
  { id: 'news-2-3', topicId: '2', headline: 'Zendaya to Star in and Produce New Sci-Fi Thriller for A24', summary: 'Zendaya is set to star in and produce an upcoming untitled sci-fi thriller, with A24 acquiring the rights. Plot details are currently under wraps.', image: topics.find(t => t.id === '2')!.image, date: '2025-03-20', source: 'IndieWire' },
  { id: 'news-2-4', topicId: '2', headline: 'The "Zendaya Effect": How the Star Influences Fashion and Culture', summary: 'A new report analyzes Zendaya\'s significant impact on fashion trends, social media engagement, and cultural conversations among young audiences.', image: topics.find(t => t.id === '2')!.image, date: '2025-02-18', source: 'Culture & Style Magazine' },
  { id: 'news-2-5', topicId: '2', headline: 'Zendaya Discusses Her Approach to Selecting Diverse Roles', summary: 'In a recent roundtable, Zendaya spoke about her conscious effort to choose diverse and challenging roles that resonate with her personally and artistically.', image: topics.find(t => t.id === '2')!.image, date: '2025-01-10', source: 'Actors on Actors - Variety' },
  { id: 'news-2-6', topicId: '2', headline: 'Zendaya Named Ambassador for Global Education Initiative', summary: 'The actress and producer has been named a global ambassador for a new initiative promoting access to education for underprivileged children worldwide.', image: topics.find(t => t.id === '2')!.image, date: '2024-12-01', source: 'UNICEF Press Release' },
  { id: 'news-2-7', topicId: '2', headline: 'Behind the Scenes: Zendaya\'s Intense Preparation for "Dune: Messiah"', summary: 'Sources close to the "Dune: Messiah" production reveal Zendaya is undergoing rigorous physical and dialect coaching for her expanded role as Chani.', image: topics.find(t => t.id === '2')!.image, date: '2025-05-20', source: 'Film Insider' },
  { id: 'news-2-8', topicId: '2', headline: 'Zendaya\'s Production Company Announces First Slate of Projects', summary: 'The star\'s production company has unveiled its first development slate, focusing on stories from underrepresented voices across film and television.', image: topics.find(t => t.id === '2')!.image, date: '2024-11-15', source: 'The Hollywood Reporter' },
  { id: 'news-2-9', topicId: '2', headline: 'Met Gala 2025: Zendaya Expected to Co-Chair, Theme Speculation Rises', summary: 'Rumors are swirling that Zendaya will co-chair the 2025 Met Gala, with fashion enthusiasts eagerly anticipating the theme announcement.', image: topics.find(t => t.id === '2')!.image, date: '2025-04-28', source: 'Vogue Daily' },
  { id: 'news-2-10', topicId: '2', headline: 'From Disney to Dune: A Look Back at Zendaya\'s Career Milestones', summary: 'A retrospective feature explores Zendaya\'s impressive career trajectory, highlighting key roles and moments that defined her rise to global stardom.', image: topics.find(t => t.id === '2')!.image, date: '2024-10-22', source: 'Vanity Fair Archives' },

  // Stranger Things (id: 3) - Target: 10
  { id: 'news-3-1', topicId: '3', headline: '"Stranger Things 5" Drops Explosive Full Trailer, Release Confirmed for October 2025', summary: 'Netflix has unleashed the much-anticipated full trailer for "Stranger Things 5," promising an epic conclusion and confirming a global premiere in October 2025.', image: topics.find(t => t.id === '3')!.image, date: '2025-05-22', source: 'Netflix Geeked' },
  { id: 'news-3-2', topicId: '3', headline: 'Duffer Brothers Promise Feature-Length Episodes for "Stranger Things 5" Grand Finale', summary: 'The creators of "Stranger Things" have indicated that several episodes in the final season, especially the series ender, will be feature-length to deliver a cinematic send-off.', image: topics.find(t => t.id === '3')!.image, date: '2025-04-10', source: 'The Hollywood Reporter' },
  { id: 'news-3-3', topicId: '3', headline: 'Millie Bobby Brown on Saying Goodbye to Eleven and "Stranger Things"', summary: 'Star Millie Bobby Brown shares her emotional journey portraying Eleven and discusses the bittersweet experience of concluding the iconic series.', image: topics.find(t => t.id === '3')!.image, date: '2025-05-01', source: 'Variety' },
  { id: 'news-3-4', topicId: '3', headline: 'Leaked Set Photos from "Stranger Things 5" Spark Wild Fan Theories', summary: 'Unauthorized photos from the set of the final season have surfaced online, igniting a frenzy of speculation and fan theories about the plot.', image: topics.find(t => t.id === '3')!.image, date: '2025-03-15', source: 'PopCulture X Feed' },
  { id: 'news-3-5', topicId: '3', headline: 'New Cast Members for "Stranger Things 5" Revealed, Including a Familiar Face from the 80s', summary: 'Netflix announced new additions to the final season cast, including a beloved actor from an iconic 80s film, adding to the nostalgic appeal.', image: topics.find(t => t.id === '3')!.image, date: '2025-02-20', source: 'Netflix Official Announcement' },
  { id: 'news-3-6', topicId: '3', headline: 'The Music of Stranger Things 5: What Iconic 80s Tracks Will Feature?', summary: 'Music supervisor Nora Felder gives hints about the soundtrack for the final season, promising more unforgettable 80s music moments.', image: topics.find(t => t.id === '3')!.image, date: '2025-04-25', source: 'Billboard' },
  { id: 'news-3-7', topicId: '3', headline: '"Stranger Things: The First Shadow" Stage Play Extends West End Run Again', summary: 'The critically acclaimed prequel stage play continues to be a massive hit in London, with its run extended for a third time due to popular demand.', image: topics.find(t => t.id === '3')!.image, date: '2025-01-30', source: 'London Theatre Direct' },
  { id: 'news-3-8', topicId: '3', headline: 'Inside the "Stranger Things 5" Writers\' Room: Crafting the Perfect Ending', summary: 'A special feature delves into the process behind writing the final season, with insights from the writers on the challenges of concluding such a beloved story.', image: topics.find(t => t.id === '3')!.image, date: '2024-12-10', source: 'Netflix Queue' },
  { id: 'news-3-9', topicId: '3', headline: 'Global Fan Events Planned for "Stranger Things 5" Premiere Month', summary: 'Netflix is organizing a series of global fan events and experiences throughout October 2025 to celebrate the release of the final season.', image: topics.find(t => t.id === '3')!.image, date: '2025-05-18', source: 'Netflix Marketing' },
  { id: 'news-3-10', topicId: '3', headline: 'The Cultural Impact of Stranger Things: A Decade of Nostalgia and Upside Down', summary: 'As the series nears its end, critics reflect on the profound cultural impact "Stranger Things" has had since its debut in 2016.', image: topics.find(t => t.id === '3')!.image, date: '2025-04-01', source: 'Rolling Stone Magazine' },

  // The Batman (id: 4) - Target: 10
  { id: 'news-4-1', topicId: '4', headline: '"The Batman Part II" Officially Greenlit, Reeves & Pattinson Return for Oct 2027 Release', summary: 'Warner Bros. has confirmed "The Batman Part II," with Matt Reeves directing and Robert Pattinson starring. The sequel is slated for October 2, 2027.', image: topics.find(t => t.id === '4')!.image, date: '2025-02-18', source: 'Warner Bros. Pictures' },
  { id: 'news-4-2', topicId: '4', headline: '"The Penguin" Season 2 Confirmed by Max Following Stellar Debut', summary: 'The Colin Farrell-led series "The Penguin" has been renewed for a second season on Max, expected to air in late 2026, continuing its exploration of Gotham\'s underworld.', image: topics.find(t => t.id === '4')!.image, date: '2025-03-05', source: 'Max Press Release' },
  { id: 'news-4-3', topicId: '4', headline: 'Matt Reeves Teases "Broader, More Ambitious" Scope for "The Batman Part II"', summary: 'Director Matt Reeves hinted that the sequel will delve deeper into Gotham City and its complex characters, promising an even more ambitious narrative.', image: topics.find(t => t.id === '4')!.image, date: '2025-04-12', source: 'Empire Magazine Interview' },
  { id: 'news-4-4', topicId: '4', headline: 'Casting Rumors for "The Batman Part II": Hush and Clayface Eyed as Villains?', summary: 'Speculation is rife regarding new villains for the sequel, with Hush and Clayface being popular fan theories and rumored considerations by the studio.', image: topics.find(t => t.id === '4')!.image, date: '2025-05-10', source: 'ComicBookMovie Rumors' },
  { id: 'news-4-5', topicId: '4', headline: 'Greig Fraser to Return as Cinematographer for "The Batman Part II"', summary: 'Oscar-winning cinematographer Greig Fraser, acclaimed for his work on the first film, is confirmed to be returning for the sequel.', image: topics.find(t => t.id === '4')!.image, date: '2025-01-25', source: 'Variety' },
  { id: 'news-4-6', topicId: '4', headline: 'Concept Art for Arkham Asylum Spin-off Series Leaks Online', summary: 'Alleged concept art for another spin-off series set in Matt Reeves\' Batverse, focusing on Arkham Asylum, has appeared online, sparking fan excitement.', image: topics.find(t => t.id === '4')!.image, date: '2025-04-29', source: 'Bat-Fans Forum' },
  { id: 'news-4-7', topicId: '4', headline: 'The Enduring Appeal of "The Batman": A Psychological Deep Dive', summary: 'Film analysts explore the psychological depth and neo-noir elements that contributed to the critical and commercial success of "The Batman."', image: topics.find(t => t.id === '4')!.image, date: '2024-11-20', source: 'Film Quarterly Review' },
  { id: 'news-4-8', topicId: '4', headline: 'Robert Pattinson on His Physical Transformation for Batman Role', summary: 'Robert Pattinson discusses the intense training regimen and mental preparation required to embody the Dark Knight for the acclaimed film series.', image: topics.find(t => t.id === '4')!.image, date: '2024-10-05', source: 'Men\'s Fitness Feature' },
  { id: 'news-4-9', topicId: '4', headline: 'Michael Giacchino Confirmed to Score "The Batman Part II"', summary: 'Composer Michael Giacchino, whose score for the first film was highly praised, will return to compose the music for the sequel.', image: topics.find(t => t.id === '4')!.image, date: '2025-03-18', source: 'Film Music Reporter' },
  { id: 'news-4-10', topicId: '4', headline: 'Exploring Gotham City: The Immersive Production Design of "The Batman"', summary: 'A look back at the meticulous production design that created the unique, gritty atmosphere of Gotham City in Matt Reeves\' vision.', image: topics.find(t => t.id === '4')!.image, date: '2024-09-10', source: 'Architectural Digest On Film' },

  // The Last of Us (id: 5) - Target: 10
  { id: 'news-5-1', topicId: '5', headline: '"The Last of Us" S2 Premiere Smashes HBO Max Records, Ignites Online Discourse', summary: 'The highly anticipated Season 2 premiere of "The Last of Us" drew unprecedented viewership for HBO Max and sparked intense discussions across social media.', image: topics.find(t => t.id === '5')!.image, date: '2025-03-10', source: 'Nielsen & SocialMetric Data' },
  { id: 'news-5-2', topicId: '5', headline: 'Critics Divided on "The Last of Us" S2 Adaptation Choices, Praise Performances', summary: 'While performances by Pedro Pascal and Bella Ramsey continue to be lauded, critics have offered mixed reviews regarding some of the narrative deviations in Season 2.', image: topics.find(t => t.id === '5')!.image, date: '2025-03-15', source: 'Rotten Tomatoes / Metacritic Aggregates' },
  { id: 'news-5-3', topicId: '5', headline: 'HBO Confirms "The Last of Us" Season 3 in Early Development', summary: 'Following the strong debut of Season 2, HBO has confirmed that a third season adapting the remainder of "The Last of Us Part II" is in early development stages.', image: topics.find(t => t.id === '5')!.image, date: '2025-04-22', source: 'HBO Official Announcement' },
  { id: 'news-5-4', topicId: '5', headline: 'Kaitlyn Dever as Abby in "The Last of Us" S2: A Controversial Powerhouse Performance', summary: 'Kaitlyn Dever\'s portrayal of Abby in Season 2 is being called a powerhouse, though the character continues to be a focal point of fan debate.', image: topics.find(t => t.id === '5')!.image, date: '2025-04-05', source: 'Entertainment Weekly Reviews' },
  { id: 'news-5-5', topicId: '5', headline: 'The Science of Cordyceps: How "The Last of Us" Blends Fiction with Reality', summary: 'Experts discuss the real-world basis of the Cordyceps fungus and how the show effectively uses scientific plausibility to enhance its horror.', image: topics.find(t => t.id === '5')!.image, date: '2025-03-25', source: 'Scientific American' },
  { id: 'news-5-6', topicId: '5', headline: 'Behind the Scenes of "The Last of Us" S2: Expanding the Post-Apocalyptic World', summary: 'A new featurette takes viewers behind the scenes of Season 2, showcasing the new locations and practical effects used to bring the game world to life.', image: topics.find(t => t.id === '5')!.image, date: '2025-05-02', source: 'HBO Max Extras' },
  { id: 'news-5-7', topicId: '5', headline: 'Pedro Pascal and Bella Ramsey Discuss Their Evolving Dynamic in Season 2', summary: 'The lead actors share insights into how Joel and Ellie\'s relationship changes and matures in the face of new challenges in the second season.', image: topics.find(t => t.id === '5')!.image, date: '2025-02-28', source: 'Variety Actors on Actors' },
  { id: 'news-5-8', topicId: '5', headline: 'Emmy Buzz Builds for "The Last of Us" Season 2 Ahead of Eligibility Window', summary: 'Even mid-season, Emmy prognosticators are already predicting multiple nominations for the cast and crew of "The Last of Us" Season 2.', image: topics.find(t => t.id === '5')!.image, date: '2025-05-19', source: 'Gold Derby' },
  { id: 'news-5-9', topicId: '5', headline: 'The Moral Ambiguity of "The Last of Us": Why It Resonates with Audiences', summary: 'Philosophers and media critics explore the themes of morality, survival, and sacrifice that make "The Last of Us" a compelling and thought-provoking series.', image: topics.find(t => t.id === '5')!.image, date: '2025-04-18', source: 'The New Yorker Culture Desk' },
  { id: 'news-5-10', topicId: '5', headline: 'Video Game vs. Show: A Detailed Comparison of "The Last of Us Part II" Adaptation', summary: 'Fans and critics are meticulously comparing the events of "The Last of Us Part II" video game to its television adaptation in Season 2.', image: topics.find(t => t.id === '5')!.image, date: '2025-04-30', source: 'IGN Features' },

  // Tom Holland (id: 6) - Target: 10
  { id: 'news-6-1', topicId: '6', headline: 'Tom Holland\'s West End "Romeo & Juliet" Earns Raves, Extends Run', summary: 'Tom Holland\'s critically acclaimed performance in "Romeo & Juliet" has led to a further extension of its West End engagement due to overwhelming public demand.', image: topics.find(t => t.id === '6')!.image, date: '2024-12-05', source: 'London Theatre News Wire' },
  { id: 'news-6-2', topicId: '6', headline: '"Spider-Man: Brave New Day" Starring Tom Holland Begins Filming July 2025', summary: 'Marvel Studios has officially announced that "Spider-Man: Brave New Day" will commence principal photography in July 2025, with Tom Holland reprising his iconic role.', image: topics.find(t => t.id === '6')!.image, date: '2025-05-20', source: 'Marvel Studios Official' },
  { id: 'news-6-3', topicId: '6', headline: 'Tom Holland to Star in Fred Astaire Biopic, Begins Dance Training', summary: 'Tom Holland is confirmed to portray Fred Astaire in an upcoming biopic. He has reportedly begun intensive dance training for the demanding role.', image: topics.find(t => t.id === '6')!.image, date: '2025-03-10', source: 'Deadline' },
  { id: 'news-6-4', topicId: '6', headline: 'What\'s Next for Tom Holland After Spider-Man and Theatre Success?', summary: 'Industry analysts discuss Tom Holland\'s career trajectory and potential future projects following his success in the MCU and on the West End stage.', image: topics.find(t => t.id === '6')!.image, date: '2025-01-15', source: 'Variety Career Analysis' },
  { id: 'news-6-5', topicId: '6', headline: 'Tom Holland and Zendaya: Navigating Fame as a Hollywood Power Couple', summary: 'A feature explores how Tom Holland and Zendaya manage their relationship and individual careers amidst intense public scrutiny and global fame.', image: topics.find(t => t.id === '6')!.image, date: '2024-11-22', source: 'Vanity Fair Hollywood Issue' },
  { id: 'news-6-6', topicId: '6', headline: 'Tom Holland Launches New Charitable Foundation for Children\'s Arts Education', summary: 'The actor has launched "The Holland Trust," a foundation dedicated to providing access to arts education for underprivileged children and young people.', image: topics.find(t => t.id === '6')!.image, date: '2025-02-01', source: 'Global Charity News' },
  { id: 'news-6-7', topicId: '6', headline: 'Director Jon Watts Rumored to Return for "Spider-Man: Brave New Day"', summary: 'While not officially confirmed, sources suggest that Jon Watts, director of the previous Spider-Man trilogy, is in talks to helm the upcoming fourth installment.', image: topics.find(t => t.id === '6')!.image, date: '2025-04-18', source: 'The GWW' },
  { id: 'news-6-8', topicId: '6', headline: 'Tom Holland on the Physical Demands of Playing Spider-Man at Nearly 30', summary: 'In a candid interview, Tom Holland discusses the increasing physical challenges of the Spider-Man role as he approaches his thirties and his commitment to the character.', image: topics.find(t => t.id === '6')!.image, date: '2025-05-05', source: 'Men\'s Health Cover Story' },
  { id: 'news-6-9', topicId: '6', headline: 'From Billy Elliot to Spider-Man: Tom Holland\'s Versatile Career Path', summary: 'A look back at Tom Holland\'s journey from a young stage performer in "Billy Elliot the Musical" to a global movie superstar.', image: topics.find(t => t.id === '6')!.image, date: '2024-10-10', source: 'BBC Arts Documentary' },
  { id: 'news-6-10', topicId: '6', headline: 'Tom Holland Teases a "More Mature" Peter Parker in "Brave New Day"', summary: 'The actor hinted that the upcoming Spider-Man film will explore a more mature and independent phase of Peter Parker\'s life.', image: topics.find(t => t.id === '6')!.image, date: '2025-04-01', source: 'Empire Magazine Sneak Peek' },

  // Oppenheimer (id: 7) - Target: 10
  { id: 'news-7-1', topicId: '7', headline: '"Oppenheimer" Collector\'s Edition Blu-ray with New Documentaries Announced for Summer 2025', summary: 'Universal Pictures Home Entertainment is releasing a definitive Collector\'s Edition of "Oppenheimer," packed with new bonus features and in-depth documentaries.', image: topics.find(t => t.id === '7')!.image, date: '2025-04-25', source: 'Universal Pictures Press' },
  { id: 'news-7-2', topicId: '7', headline: 'Christopher Nolan Begins Casting for "The Odyssey," Eyes Ambitious 2026 Release', summary: 'Director Christopher Nolan is actively casting for his epic adaptation of Homer\'s "The Odyssey," reportedly targeting a late 2026 worldwide release.', image: topics.find(t => t.id === '7')!.image, date: '2025-05-12', source: 'The Hollywood Reporter' },
  { id: 'news-7-3', topicId: '7', headline: '"Oppenheimer" Impact: Universities Report Increased Interest in Physics Programs', summary: 'Following the film\'s success, several universities have noted a significant uptick in applications and interest in physics and nuclear science programs.', image: topics.find(t => t.id === '7')!.image, date: '2025-03-01', source: 'Higher Education Today' },
  { id: 'news-7-4', topicId: '7', headline: 'Cillian Murphy Discusses Life After "Oppenheimer" and Future Role Choices', summary: 'In a reflective interview, Cillian Murphy shares how his Oscar-winning role in "Oppenheimer" has impacted his career and his approach to selecting new projects.', image: topics.find(t => t.id === '7')!.image, date: '2025-04-02', source: 'GQ Magazine' },
  { id: 'news-7-5', topicId: '7', headline: 'The Historical Accuracy of "Oppenheimer": What Historians Got Right and Debated', summary: 'A year after its release, historians continue to analyze and debate the historical accuracy and interpretations presented in Nolan\'s "Oppenheimer."', image: topics.find(t => t.id === '7')!.image, date: '2024-12-20', source: 'Journal of Modern History' },
  { id: 'news-7-6', topicId: '7', headline: 'Ludwig Göransson\'s "Oppenheimer" Score: A Modern Classical Masterpiece?', summary: 'Music critics dissect Ludwig Göransson\'s innovative and haunting score for "Oppenheimer," examining its place in contemporary film music.', image: topics.find(t => t.id === '7')!.image, date: '2025-01-10', source: 'Classical Music Review' },
  { id: 'news-7-7', topicId: '7', headline: '"Oppenheimer" Practical Effects: How Nolan Achieved the Trinity Test Without CGI', summary: 'A deep dive into the groundbreaking practical effects used in "Oppenheimer," particularly the recreation of the Trinity test explosion.', image: topics.find(t => t.id === '7')!.image, date: '2024-11-05', source: 'VFX World Retrospective' },
  { id: 'news-7-8', topicId: '7', headline: 'Nolan\'s Next Challenge: Adapting "The Odyssey" for a Modern Audience', summary: 'Speculation builds on how Christopher Nolan will approach adapting the ancient epic "The Odyssey," and what unique cinematic vision he will bring to it.', image: topics.find(t => t.id === '7')!.image, date: '2025-05-23', source: 'ScreenRant Analysis' },
  { id: 'news-7-9', topicId: '7', headline: 'Florence Pugh on Working with Nolan and her Pivotal Role in "Oppenheimer"', summary: 'Florence Pugh shares her experiences working with director Christopher Nolan and the preparation for her impactful role as Jean Tatlock.', image: topics.find(t => t.id === '7')!.image, date: '2024-10-15', source: 'BAFTA Guru Interview' },
  { id: 'news-7-10', topicId: '7', headline: 'The Global Box Office Journey of "Oppenheimer": A Surprising Success Story', summary: 'An analysis of "Oppenheimer\'s" impressive global box office performance, exceeding initial expectations for a historical drama.', image: topics.find(t => t.id === '7')!.image, date: '2024-09-01', source: 'Box Office International' },

  // House of the Dragon (id: 8) - Target: 10
  { id: 'news-8-1', topicId: '8', headline: '"House of the Dragon" S2 Finale Delivers Shocking Twists, Record Viewership', summary: 'The Season 2 finale of "House of the Dragon" concluded in late 2024 with stunning plot developments and record-breaking viewership numbers for HBO Max.', image: topics.find(t => t.id === '8')!.image, date: '2024-11-20', source: 'HBO Viewership Analytics' },
  { id: 'news-8-2', topicId: '8', headline: '"House of the Dragon" Season 3 Confirmed, Targeting Summer 2026 Premiere', summary: 'HBO has officially renewed "House of the Dragon" for a third season, with production aiming for a Summer 2026 release to continue the Dance of the Dragons.', image: topics.find(t => t.id === '8')!.image, date: '2025-01-10', source: 'HBO Press Central' },
  { id: 'news-8-3', topicId: '8', headline: 'Writers for "House of the Dragon" Season 3 Deep into Crafting the Next Chapter', summary: 'The writing team, under Ryan Condal, is reportedly well underway with scripting Season 3, promising more intense political intrigue and dragon battles.', image: topics.find(t => t.id === '8')!.image, date: '2025-05-15', source: 'George R.R. Martin\'s Blog' },
  { id: 'news-8-4', topicId: '8', headline: 'New Dragons and Key Characters to be Introduced in "House of the Dragon" S3', summary: 'Showrunners have teased the introduction of several new dragons and pivotal characters from "Fire & Blood" in the upcoming third season.', image: topics.find(t => t.id === '8')!.image, date: '2025-04-01', source: 'Entertainment Weekly Exclusive' },
  { id: 'news-8-5', topicId: '8', headline: 'The Visual Spectacle of "House of the Dragon": Behind the Dragon VFX', summary: 'A new documentary explores the intricate visual effects work that brings the majestic and terrifying dragons of Westeros to life.', image: topics.find(t => t.id === '8')!.image, date: '2025-02-20', source: 'HBO Max: Behind the Scenes' },
  { id: 'news-8-6', topicId: '8', headline: 'Emma D\'Arcy and Olivia Cooke on Rhaenyra and Alicent\'s Evolving Rivalry', summary: 'The lead actresses discuss their characters\' complex relationship and how their rivalry intensifies and changes through the events of the series.', image: topics.find(t => t.id === '8')!.image, date: '2024-12-05', source: 'Variety Roundtable' },
  { id: 'news-8-7', topicId: '8', headline: 'Costume Design of "House of the Dragon": Symbolism and Targaryen Power', summary: 'An analysis of the stunning costume designs in the series and how they reflect character arcs, house loyalties, and themes of power.', image: topics.find(t => t.id === '8')!.image, date: '2025-03-28', source: 'Fashion in Film Quarterly' },
  { id: 'news-8-8', topicId: '8', headline: 'Fan Theories for "House of the Dragon" Season 3: What Will Happen Next?', summary: 'With Season 2 concluded, fans are eagerly speculating on the major events and character fates expected in the third season based on the source material.', image: topics.find(t => t.id === '8')!.image, date: '2024-12-15', source: 'ASOIAF Reddit Community' },
  { id: 'news-8-9', topicId: '8', headline: '"Bloodmoon" and Other "Game of Thrones" Spin-offs: What\'s the Status?', summary: 'An update on the various "Game of Thrones" spin-off projects in development at HBO, following the success of "House of the Dragon."', image: topics.find(t => t.id === '8')!.image, date: '2025-04-27', source: 'The Hollywood Reporter Updates' },
  { id: 'news-8-10', topicId: '8', headline: 'George R.R. Martin Praises "House of the Dragon" Adaptation, Teases "Winds of Winter"', summary: 'Author George R.R. Martin commends the series adaptation while also providing a cryptic update on his long-awaited novel, "The Winds of Winter."', image: topics.find(t => t.id === '8')!.image, date: '2025-01-02', source: 'Not A Blog - GRRM' },

  // Florence Pugh (id: 9) - Target: 10
  { id: 'news-9-1', topicId: '9', headline: 'Marvel\'s "Thunderbolts*" Starring Florence Pugh Opens to Mixed Reviews, Strong Fan Buzz', summary: 'The highly anticipated "Thunderbolts*," featuring Florence Pugh as Yelena Belova, debuted on May 2, 2025, garnering mixed critical reception but exciting Marvel fans.', image: topics.find(t => t.id === '9')!.image, date: '2025-05-03', source: 'Box Office Mojo / Rotten Tomatoes' },
  { id: 'news-9-2', topicId: '9', headline: 'Florence Pugh and Andrew Garfield\'s "We Live in Time" Praised at Early 2025 Festivals', summary: 'The romantic drama "We Live in Time," co-starring Florence Pugh and Andrew Garfield, has received critical acclaim at early 2025 film festivals, building anticipation for its wider release.', image: topics.find(t => t.id === '9')!.image, date: '2025-03-20', source: 'IndieWire Festival Coverage' },
  { id: 'news-9-3', topicId: '9', headline: 'Florence Pugh to Star in New Psychological Thriller Directed by Olivia Wilde', summary: 'Florence Pugh is set to lead a new psychological thriller, with Olivia Wilde attached to direct. Production is expected to begin in late 2025.', image: topics.find(t => t.id === '9')!.image, date: '2025-04-10', source: 'Deadline Exclusive' },
  { id: 'news-9-4', topicId: '9', headline: 'The Enduring Appeal of Florence Pugh: Versatility and Charisma', summary: 'Critics and industry insiders analyze Florence Pugh\'s rapid rise and her ability to deliver captivating performances across a wide range of genres.', image: topics.find(t => t.id === '9')!.image, date: '2025-02-15', source: 'Film Comment Magazine' },
  { id: 'news-9-5', topicId: '9', headline: 'Florence Pugh on Yelena Belova\'s Journey and Future in the MCU', summary: 'In a recent interview, Florence Pugh discusses her character Yelena Belova\'s evolution and her potential future role within the Marvel Cinematic Universe after "Thunderbolts*".', image: topics.find(t => t.id === '9')!.image, date: '2025-05-10', source: 'Marvel.com Interviews' },
  { id: 'news-9-6', topicId: '9', headline: 'Behind the Scenes: Florence Pugh\'s Stunt Work in "Thunderbolts*"', summary: 'A look at the intense physical training and stunt work Florence Pugh undertook for her action-packed role in the latest Marvel ensemble film.', image: topics.find(t => t.id === '9')!.image, date: '2025-05-18', source: 'Disney+ Marvel Assembled' },
  { id: 'news-9-7', topicId: '9', headline: 'Florence Pugh\'s Red Carpet Style: A Fashion Icon in the Making', summary: 'Fashion critics celebrate Florence Pugh\'s bold and distinctive red carpet choices, cementing her status as a rising fashion icon.', image: topics.find(t => t.id === '9')!.image, date: '2024-12-28', source: 'Vogue Fashion Watch' },
  { id: 'news-9-8', topicId: '9', headline: 'Florence Pugh Joins Cast of Denis Villeneuve\'s Next Secret Project', summary: 'Following her role in "Dune: Part Two," Florence Pugh is reportedly reuniting with Denis Villeneuve for his upcoming, yet-to-be-titled film project.', image: topics.find(t => t.id === '9')!.image, date: '2025-01-22', source: 'Variety Scoop' },
  { id: 'news-9-9', topicId: '9', headline: 'From Indie Darling to Blockbuster Star: Florence Pugh\'s Career Trajectory', summary: 'A retrospective on Florence Pugh\'s impressive career, from her breakout indie roles to leading major Hollywood blockbusters.', image: topics.find(t => t.id === '9')!.image, date: '2024-11-10', source: 'Sight & Sound Magazine' },
  { id: 'news-9-10', topicId: '9', headline: 'Florence Pugh Advocates for Mental Health Awareness in New Campaign', summary: 'The actress has partnered with a leading mental health organization to launch a new campaign promoting awareness and support for young adults.', image: topics.find(t => t.id === '9')!.image, date: '2025-03-05', source: 'Global Health Initiative News' },

  // Barbie (id: 10) - Target: 10
  { id: 'news-10-1', topicId: '10', headline: '"Barbie" Sequel Still Unconfirmed; Mattel Explores "Barbieverse" Spin-offs', summary: 'While a direct sequel to Greta Gerwig\'s "Barbie" remains unannounced, Mattel Films is actively developing various spin-off projects to expand the "Barbieverse."', image: topics.find(t => t.id === '10')!.image, date: '2025-04-28', source: 'Variety' },
  { id: 'news-10-2', topicId: '10', headline: 'Greta Gerwig to Helm "Chronicles of Narnia" for Netflix, Filming Late 2025', summary: 'Greta Gerwig\'s next major directorial effort will be adapting "The Chronicles of Narnia" for Netflix, starting with "The Magician\'s Nephew." Production is slated for late 2025.', image: topics.find(t => t.id === '10')!.image, date: '2025-03-10', source: 'Netflix Official Announcement' },
  { id: 'news-10-3', topicId: '10', headline: 'Margot Robbie Discusses Potential "Barbie" Sequel and Her Producing Role', summary: 'Margot Robbie shares her thoughts on a possible "Barbie" sequel and her continued involvement as a producer in shaping the franchise\'s future.', image: topics.find(t => t.id === '10')!.image, date: '2025-02-05', source: 'The Hollywood Reporter Roundtable' },
  { id: 'news-10-4', topicId: '10', headline: 'Ryan Gosling Open to Ken Spin-off "If the Story is Right"', summary: 'Ryan Gosling has expressed openness to reprising his role as Ken in a potential spin-off, provided the script and creative vision are compelling.', image: topics.find(t => t.id === '10')!.image, date: '2025-01-20', source: 'Entertainment Tonight Canada' },
  { id: 'news-10-5', topicId: '10', headline: 'The Cultural Impact of "Barbie": One Year On, Still Sparking Conversations', summary: 'Analysts examine the lasting cultural impact of the "Barbie" movie a year after its release, from fashion trends to feminist discourse.', image: topics.find(t => t.id === '10')!.image, date: '2024-10-15', source: 'The Atlantic Culture Desk' },
  { id: 'news-10-6', topicId: '10', headline: '"Barbie" Soundtrack Wins Multiple Grammys, Continues Chart Success', summary: 'The star-studded soundtrack for "Barbie" took home several Grammy Awards earlier this year and continues to perform well on music charts globally.', image: topics.find(t => t.id === '10')!.image, date: '2025-02-12', source: 'Recording Academy / Billboard' },
  { id: 'news-10-7', topicId: '10', headline: 'Mattel Announces New Line of "Barbie" Dolls Inspired by Movie Characters', summary: 'Capitalizing on the film\'s success, Mattel has launched a new collection of Barbie dolls and playsets directly inspired by the movie\'s characters and settings.', image: topics.find(t => t.id === '10')!.image, date: '2024-11-01', source: 'Mattel Press Release' },
  { id: 'news-10-8', topicId: '10', headline: 'Greta Gerwig and Noah Baumbach: A Powerhouse Writing Partnership', summary: 'A feature on the successful writing collaboration between Greta Gerwig and Noah Baumbach, exploring their unique creative process behind films like "Barbie."', image: topics.find(t => t.id === '10')!.image, date: '2024-09-20', source: 'Writers Guild Magazine' },
  { id: 'news-10-9', topicId: '10', headline: 'The "Barbenheimer" Phenomenon: A Look Back at Summer 2023\'s Biggest Film Story', summary: 'Retrospectives analyze the "Barbenheimer" cultural event and its significance for the film industry and box office recovery.', image: topics.find(t => t.id === '10')!.image, date: '2024-07-21', source: 'IndieWire Special Report' },
  { id: 'news-10-10', topicId: '10', headline: 'Billie Eilish on Writing "What Was I Made For?" for Barbie', summary: 'Billie Eilish and Finneas discuss the emotional process of writing their Oscar-winning song "What Was I Made For?" for the "Barbie" movie.', image: topics.find(t => t.id === '10')!.image, date: '2024-08-05', source: 'Song Exploder Podcast' },

  // Wednesday (id: 11) - Target: 10
  { id: 'news-11-1', topicId: '11', headline: '"Wednesday" S2 Part 1 Hits Netflix Aug 6, Part 2 Sep 3, 2025; New Trailer Drops!', summary: 'Netflix confirms a two-part release for "Wednesday" Season 2: Part 1 on August 6 and Part 2 on September 3, 2025. A new trailer showcases upcoming mysteries.', image: topics.find(t => t.id === '11')!.image, date: '2025-05-21', source: 'Netflix Tudum Blog' },
  { id: 'news-11-2', topicId: '11', headline: 'Jenna Ortega Promises a "Darker, More Mature" Wednesday in Season 2', summary: 'Star and executive producer Jenna Ortega reveals that Season 2 will explore a darker and more mature side of Wednesday Addams, with higher stakes.', image: topics.find(t => t.id === '11')!.image, date: '2025-04-15', source: 'Variety Cover Story' },
  { id: 'news-11-3', topicId: '11', headline: 'New Cast Members for "Wednesday" S2 Include Steve Buscemi and Thandiwe Newton', summary: 'Netflix announced exciting new additions to the "Wednesday" cast for its second season, including Steve Buscemi as a new Nevermore staff member and Thandiwe Newton in a mysterious role.', image: topics.find(t => t.id === '11')!.image, date: '2025-02-10', source: 'Netflix Casting News' },
  { id: 'news-11-4', topicId: '11', headline: 'Tim Burton to Direct More Episodes in "Wednesday" Season 2', summary: 'Following his successful helming of several Season 1 episodes, Tim Burton is confirmed to direct an increased number of episodes for the upcoming second season.', image: topics.find(t => t.id === '11')!.image, date: '2024-12-01', source: 'Deadline' },
  { id: 'news-11-5', topicId: '11', headline: 'The "Wednesday" Effect: Resurgence of Gothic Fashion and Viral TikTok Dances', summary: 'The show continues to influence fashion trends, with gothic aesthetics remaining popular, and new viral dances inspired by Season 2 teasers are emerging.', image: topics.find(t => t.id === '11')!.image, date: '2025-05-05', source: 'Teen Vogue Culture' },
  { id: 'news-11-6', topicId: '11', headline: 'Behind the Scenes of "Wednesday" S2: New Locations and Creature Designs', summary: 'A sneak peek into the production of Season 2 reveals new filming locations in Ireland and glimpses of imaginative new creature designs.', image: topics.find(t => t.id === '11')!.image, date: '2025-03-22', source: 'Netflix: Making Of...' },
  { id: 'news-11-7', topicId: '11', headline: 'Emma Myers on Enid Sinclair\'s Journey and Werewolf Adventures in S2', summary: 'Emma Myers discusses her character Enid\'s development in Season 2, including more exploration of her werewolf abilities and her friendship with Wednesday.', image: topics.find(t => t.id === '11')!.image, date: '2025-04-28', source: 'Collider Interviews' },
  { id: 'news-11-8', topicId: '11', headline: 'Danny Elfman Returns to Score "Wednesday" Season 2 with New Themes', summary: 'Acclaimed composer Danny Elfman is back to score the second season, promising to expand on his iconic themes and introduce new musical motifs.', image: topics.find(t => t.id === '11')!.image, date: '2025-01-18', source: 'Film Music Magazine' },
  { id: 'news-11-9', topicId: '11', headline: 'Will "Wednesday" Season 2 Explore More of the Addams Family?', summary: 'Showrunners tease potential appearances and deeper dives into the wider Addams Family lore in the upcoming season.', image: topics.find(t => t.id === '11')!.image, date: '2025-03-07', source: 'TV Guide Speculation' },
  { id: 'news-11-10', topicId: '11', headline: 'Fan Theories Abound for "Wednesday" Season 2 Villains and Twists', summary: 'The "Wednesday" fandom is buzzing with theories about who the main antagonist of Season 2 will be and what shocking twists await at Nevermore.', image: topics.find(t => t.id === '11')!.image, date: '2025-04-01', source: 'Reddit r/WednesdayTVShow' },

  // Timothée Chalamet (id: 12) - Target: 10
  { id: 'news-12-1', topicId: '12', headline: 'Timothée Chalamet\'s "A Complete Unknown" (Bob Dylan Biopic) Earns Rave Reviews, Oscar Buzz', summary: 'Released in late 2024, "A Complete Unknown" starring Timothée Chalamet as Bob Dylan has garnered critical acclaim and is a strong contender in the upcoming awards season.', image: topics.find(t => t.id === '12')!.image, date: '2025-02-10', source: 'Gold Derby / Variety' },
  { id: 'news-12-2', topicId: '12', headline: '"Dune: Messiah" Starring Timothée Chalamet Set to Begin Production Summer 2025', summary: 'The highly anticipated "Dune: Messiah" will see Timothée Chalamet reprise his role as Paul Atreides, with filming scheduled to commence in August 2025.', image: topics.find(t => t.id === '12')!.image, date: '2025-05-08', source: 'Legendary Pictures Announcement' },
  { id: 'news-12-3', topicId: '12', headline: 'Timothée Chalamet to Star in Martin Scorsese\'s Upcoming Crime Drama', summary: 'Timothée Chalamet is set to collaborate with legendary director Martin Scorsese on a new crime drama, with production slated for early 2026.', image: topics.find(t => t.id === '12')!.image, date: '2025-03-15', source: 'Deadline Exclusive' },
  { id: 'news-12-4', topicId: '12', headline: 'Chalamet Discusses His Singing Transformation for Bob Dylan Role', summary: 'In a revealing interview, Timothée Chalamet details the extensive vocal coaching and preparation he undertook to authentically portray Bob Dylan\'s iconic musical style.', image: topics.find(t => t.id === '12')!.image, date: '2024-12-20', source: 'Rolling Stone Feature' },
  { id: 'news-12-5', topicId: '12', headline: 'The "Chalamania" Continues: Actor\'s Influence on Men\'s Fashion and Youth Culture', summary: 'Analysts explore Timothée Chalamet\'s significant impact on contemporary men\'s fashion and his status as a cultural icon for a new generation.', image: topics.find(t => t.id === '12')!.image, date: '2025-01-25', source: 'GQ Style Report' },
  { id: 'news-12-6', topicId: '12', headline: 'Timothée Chalamet and Zendaya: The Dynamic Duo of "Dune"', summary: 'A feature on the compelling on-screen chemistry and off-screen friendship between "Dune" co-stars Timothée Chalamet and Zendaya.', image: topics.find(t => t.id === '12')!.image, date: '2024-11-10', source: 'Entertainment Weekly Cover Story' },
  { id: 'news-12-7', topicId: '12', headline: 'From "Call Me By Your Name" to Global Stardom: Chalamet\'s Journey', summary: 'A look back at Timothée Chalamet\'s breakout roles and his rapid ascent to becoming one of Hollywood\'s most sought-after young actors.', image: topics.find(t => t.id === '12')!.image, date: '2024-10-01', source: 'IndieWire Retrospective' },
  { id: 'news-12-8', topicId: '12', headline: 'Timothée Chalamet Confirmed for "Wonka" Sequel, Early Development Begins', summary: 'Following the success of "Wonka," Warner Bros. has confirmed a sequel is in early development with Timothée Chalamet set to return as the eccentric chocolatier.', image: topics.find(t => t.id === '12')!.image, date: '2025-04-20', source: 'Warner Bros. Investor Call' },
  { id: 'news-12-9', topicId: '12', headline: 'Director James Mangold on Chalamet\'s Dedication in "A Complete Unknown"', summary: 'James Mangold, director of the Bob Dylan biopic, praises Timothée Chalamet\'s meticulous research and dedication to capturing the essence of the legendary musician.', image: topics.find(t => t.id === '12')!.image, date: '2025-01-05', source: 'Directors Guild Quarterly' },
  { id: 'news-12-10', topicId: '12', headline: 'Timothée Chalamet to Make Broadway Debut in 2026?', summary: 'Rumors are circulating that Timothée Chalamet is in talks to make his Broadway debut in a new play during the 2026 season.', image: topics.find(t => t.id === '12')!.image, date: '2025-05-24', source: 'BroadwayWorld Whispers' },
];


export const videoCards: VideoCard[] = [
  // Dune: Part Two (id: 1) - Target: 10
  { id: 'video-1-1', topicId: '1', title: 'Dune: Part Two | Official Trailer 2', thumbnail: topics.find(t=>t.id==='1')!.image, channelName: 'Warner Bros. Pictures', views: '88M views', videoId: 'Way9Dexny3w', duration: '2:24', uploadDate: '1 year ago' },
  { id: 'video-1-2', topicId: '1', title: 'Dune: Part Two | The Cast Behind The Scenes', thumbnail: topics.find(t=>t.id==='1')!.image, channelName: 'Warner Bros. Pictures', views: '14M views', videoId: 's_g2x1t3F0o', duration: '8:17', uploadDate: '1 year ago' },
  { id: 'video-1-3', topicId: '1', title: 'Hans Zimmer - Worm Ride (Dune: Part Two Soundtrack)', thumbnail: topics.find(t=>t.id==='1')!.image, channelName: 'WaterTower Music', views: '25M views', videoId: 'G752ZTk0iWM', duration: '3:51', uploadDate: '1 year ago' },
  { id: 'video-1-4', topicId: '1', title: 'Dune: Messiah - What To Expect (Book Spoilers)', thumbnail: topics.find(t=>t.id==='1')!.image, channelName: 'Nerdist', views: '1.8M views', videoId: 'kLuIgSj2gPM', duration: '15:30', uploadDate: '2 months ago' },
  { id: 'video-1-5', topicId: '1', title: 'Dune Part Two: Austin Butler’s Feyd-Rautha Transformation | Vanity Fair', thumbnail: topics.find(t=>t.id==='1')!.image, channelName: 'Vanity Fair', views: '5.2M views', videoId: 'AlmgE2cf9zI', duration: '10:22', uploadDate: '1 year ago' },
  { id: 'video-1-6', topicId: '1', title: 'Dune: Part Two VFX Breakdown | DNEG', thumbnail: topics.find(t=>t.id==='1')!.image, channelName: 'DNEG', views: '4.9M views', videoId: 'mCHUm4256xE', duration: '3:05', uploadDate: '3 months ago' },
  { id: 'video-1-7', topicId: '1', title: 'Timothée Chalamet & Zendaya Break Down Their Dune Kiss | Vanity Fair', thumbnail: topics.find(t=>t.id==='1')!.image, channelName: 'Vanity Fair', views: '11M views', videoId: 'bYo_xV_jHMY', duration: '9:15', uploadDate: '1 year ago' },
  { id: 'video-1-8', topicId: '1', title: 'Dune: Part Two - Ending Explained | New Rockstars', thumbnail: topics.find(t=>t.id==='1')!.image, channelName: 'New Rockstars', views: '6.5M views', videoId: 'jWMGkZ9L0qc', duration: '25:17', uploadDate: '1 year ago' },
  { id: 'video-1-9', topicId: '1', title: 'The Philosophy of Dune: Understanding Herbert\'s Universe | Wisecrack', thumbnail: topics.find(t=>t.id==='1')!.image, channelName: 'Wisecrack', views: '3.1M views', videoId: '_Ojv5NEQ29M', duration: '18:30', uploadDate: '10 months ago' },
  { id: 'video-1-10', topicId: '1', title: 'Dune: Part Two - The Score Featurette with Hans Zimmer | WB Pictures', thumbnail: topics.find(t=>t.id==='1')!.image, channelName: 'Warner Bros. Pictures', views: '2.2M views', videoId: '99UXq3mG0jM', duration: '4:50', uploadDate: '11 months ago' }, // Example ID

  // Zendaya (id: 2) - Target: 10
  { id: 'video-2-1', topicId: '2', title: 'Zendaya "Challengers" Interview - The Movie That Changed Everything', thumbnail: topics.find(t=>t.id==='2')!.image, channelName: 'Variety', views: '3.5M views', videoId: 'QLnbXmKFST0', duration: '12:45', uploadDate: '1 year ago' },
  { id: 'video-2-2', topicId: '2', title: 'Zendaya Breaks Down Her Most Iconic Looks | Life in Looks | Vogue', thumbnail: topics.find(t=>t.id==='2')!.image, channelName: 'Vogue', views: '15M views', videoId: 'w0mDFj3jN0M', duration: '18:30', uploadDate: '9 months ago' },
  { id: 'video-2-3', topicId: '2', title: 'Zendaya\'s Style Evolution: From Disney to Dune Queen', thumbnail: topics.find(t=>t.id==='2')!.image, channelName: 'Harper\'s BAZAAR', views: '8.1M views', videoId: '0obMRztklqU', duration: '9:20', uploadDate: '8 months ago' },
  { id: 'video-2-4', topicId: '2', title: 'Zendaya and Tom Holland Answer the Web\'s Most Searched Questions | WIRED', thumbnail: topics.find(t=>t.id==='2')!.image, channelName: 'WIRED', views: '45M views', videoId: 'iSheg79sXqA', duration: '20:10', uploadDate: '2 years ago' },
  { id: 'video-2-5', topicId: '2', title: 'Zendaya on Euphoria Season 3 & Future Projects | Red Carpet Interview ET', thumbnail: topics.find(t=>t.id==='2')!.image, channelName: 'Entertainment Tonight', views: '2.1M views', videoId: 'F_RfcE9sHVo', duration: '4:15', uploadDate: '3 months ago' }, // Example ID
  { id: 'video-2-6', topicId: '2', title: 'Zendaya\'s Acting Masterclass: Breaking Down Her Key Roles', thumbnail: topics.find(t=>t.id==='2')!.image, channelName: 'GQ', views: '4.8M views', videoId: 'exampleZendayaActing', duration: '15:00', uploadDate: '5 months ago' },
  { id: 'video-2-7', topicId: '2', title: '73 Questions With Zendaya | Vogue', thumbnail: topics.find(t=>t.id==='2')!.image, channelName: 'Vogue', views: '30M views', videoId: 'Ip14hS5djsU', duration: '10:05', uploadDate: '3 years ago' },
  { id: 'video-2-8', topicId: '2', title: 'Zendaya Discusses Her Production Company & Championing New Voices', thumbnail: topics.find(t=>t.id==='2')!.image, channelName: 'The Hollywood Reporter', views: '900K views', videoId: 'exampleZendayaProducer', duration: '7:30', uploadDate: '6 months ago' },
  { id: 'video-2-9', topicId: '2', title: 'Zendaya\'s Best Red Carpet Moments of All Time', thumbnail: topics.find(t=>t.id==='2')!.image, channelName: 'Elle Magazine', views: '3.5M views', videoId: 'exampleZendayaFashion', duration: '6:40', uploadDate: '1 month ago' },
  { id: 'video-2-10', topicId: '2', title: 'Zendaya Reacts to Fan Tributes & Assumptions | TikTok Famous', thumbnail: topics.find(t=>t.id==='2')!.image, channelName: 'BuzzFeed Celeb', views: '6.9M views', videoId: 'exampleZendayaReacts', duration: '8:55', uploadDate: '2 months ago' },

  // Stranger Things (id: 3) - Target: 10
  { id: 'video-3-1', topicId: '3', title: 'Stranger Things 5 | Official Trailer | Netflix', thumbnail: topics.find(t=>t.id==='3')!.image, channelName: 'Netflix', views: '55M views', videoId: 'b9EkMc79ZSU', duration: '2:58', uploadDate: '2 weeks ago' },
  { id: 'video-3-2', topicId: '3', title: 'Stranger Things: The Story So Far (Seasons 1-4 Recap) | Netflix', thumbnail: topics.find(t=>t.id==='3')!.image, channelName: 'Netflix', views: '18M views', videoId: 'ElNDqpsD1jY', duration: '7:15', uploadDate: '8 months ago' },
  { id: 'video-3-3', topicId: '3', title: 'Duffer Brothers on Stranger Things 5 Emotional Ending | Netflix FYSEE', thumbnail: topics.find(t=>t.id==='3')!.image, channelName: 'Netflix', views: '2.5M views', videoId: 'uQk_MW72Q4c', duration: '10:33', uploadDate: '4 months ago' },
  { id: 'video-3-4', topicId: '3', title: 'Stranger Things Cast Table Read for Season 5 | Netflix', thumbnail: topics.find(t=>t.id==='3')!.image, channelName: 'Netflix', views: '12M views', videoId: 'Rp22LgD12gU', duration: '5:40', uploadDate: '3 months ago' }, // Example ID
  { id: 'video-3-5', topicId: '3', title: 'Stranger Things 5: Theories, Spoilers & Predictions | New Rockstars', thumbnail: topics.find(t=>t.id==='3')!.image, channelName: 'New Rockstars', views: '4.8M views', videoId: 'P355w5V0YUM', duration: '22:10', uploadDate: '1 month ago' },
  { id: 'video-3-6', topicId: '3', title: 'The Music of Stranger Things: Behind the Synths with Dixon & Stein | Netflix', thumbnail: topics.find(t=>t.id==='3')!.image, channelName: 'Netflix', views: '3.1M views', videoId: 'YEG3bmU_WaI', duration: '6:20', uploadDate: '10 months ago' },
  { id: 'video-3-7', topicId: '3', title: 'Millie Bobby Brown Says Goodbye to Eleven | Stranger Things Farewell', thumbnail: topics.find(t=>t.id==='3')!.image, channelName: 'Entertainment Tonight', views: '3.9M views', videoId: 'exampleMillieFarewell', duration: '8:05', uploadDate: 'Just now' },
  { id: 'video-3-8', topicId: '3', title: 'Stranger Things: The First Shadow - Stage Play Trailer | Official', thumbnail: topics.find(t=>t.id==='3')!.image, channelName: 'Stranger Things On Stage', views: '1.5M views', videoId: 'exampleStagePlay', duration: '1:55', uploadDate: '7 months ago' },
  { id: 'video-3-9', topicId: '3', title: 'Evolution of Stranger Things VFX: From Demogorgon to Vecna | WIRED', thumbnail: topics.find(t=>t.id==='3')!.image, channelName: 'WIRED', views: '7.2M views', videoId: 'exampleSTVFX', duration: '14:30', uploadDate: '6 months ago' },
  { id: 'video-3-10', topicId: '3', title: 'Stranger Things Cast Funny Moments & Bloopers (Seasons 1-4) | Netflix', thumbnail: topics.find(t=>t.id==='3')!.image, channelName: 'Netflix', views: '25M views', videoId: 'exampleSTBloopers', duration: '9:45', uploadDate: '1 year ago' },

  // The Batman (id: 4) - Target: 10
  { id: 'video-4-1', topicId: '4', title: 'The Batman | Official Trailer | Warner Bros.', thumbnail: topics.find(t=>t.id==='4')!.image, channelName: 'Warner Bros. Pictures', views: '65M views', videoId: 'mqqft2x_Aa4', duration: '2:50', uploadDate: '3 years ago' },
  { id: 'video-4-2', topicId: '4', title: 'The Batman Part II - News & Release Date (2027) | IGN Update', thumbnail: topics.find(t=>t.id==='4')!.image, channelName: 'IGN', views: '2.8M views', videoId: 'pllDOtHbtiA', duration: '7:40', uploadDate: '2 months ago' },
  { id: 'video-4-3', topicId: '4', title: 'The Penguin | Official Teaser | Max', thumbnail: topics.find(t=>t.id==='4')!.image, channelName: 'Max', views: '10M views', videoId: 'IdDbt98p6yA', duration: '1:45', uploadDate: '8 months ago' }, // Example ID
  { id: 'video-4-4', topicId: '4', title: 'Robert Pattinson Breaks Down His Batman Voice & Persona | GQ', thumbnail: topics.find(t=>t.id==='4')!.image, channelName: 'GQ', views: '12M views', videoId: 'examplePattinsonBatman', duration: '11:20', uploadDate: '2 years ago' },
  { id: 'video-4-5', topicId: '4', title: 'The Batman: Cinematography Breakdown with Greig Fraser | Indie Film Hustle', thumbnail: topics.find(t=>t.id==='4')!.image, channelName: 'Indie Film Hustle', views: '1.5M views', videoId: 'exampleBatmanCinema', duration: '16:50', uploadDate: '2 years ago' },
  { id: 'video-4-6', topicId: '4', title: 'Matt Reeves Discusses Building His Gotham City | Director\'s Commentary', thumbnail: topics.find(t=>t.id==='4')!.image, channelName: 'Warner Bros. Extras', views: '800K views', videoId: 'exampleReevesGotham', duration: '9:30', uploadDate: '1 year ago' },
  { id: 'video-4-7', topicId: '4', title: 'The Batman: Deleted Scene - Joker & Batman at Arkham | WB', thumbnail: topics.find(t=>t.id==='4')!.image, channelName: 'Warner Bros. Pictures', views: '20M views', videoId: 'LzcvpE0Vvzs', duration: '5:00', uploadDate: '2 years ago' },
  { id: 'video-4-8', topicId: '4', title: 'The Batmobile: Designing a New Generation Bat-Ride | Top Gear', thumbnail: topics.find(t=>t.id==='4')!.image, channelName: 'Top Gear', views: '6.2M views', videoId: 'exampleBatmobileDesign', duration: '7:15', uploadDate: '2 years ago' },
  { id: 'video-4-9', topicId: '4', title: 'The Batman Universe: What\'s Next? Arkham, Penguin S2 & More | ScreenRant', thumbnail: topics.find(t=>t.id==='4')!.image, channelName: 'Screen Rant', views: '1.9M views', videoId: 'exampleBatmanUniverse', duration: '10:05', uploadDate: '1 month ago' },
  { id: 'video-4-10', topicId: '4', title: 'Michael Giacchino - The Batman Suite (Official Soundtrack Video)', thumbnail: topics.find(t=>t.id==='4')!.image, channelName: 'WaterTower Music', views: '8.5M views', videoId: '1m3v7tDR444', duration: '6:47', uploadDate: '2 years ago' },

  // The Last of Us (id: 5) - Target: 10
  { id: 'video-5-1', topicId: '5', title: 'The Last of Us Season 2 | Official Trailer | Max', thumbnail: topics.find(t=>t.id==='5')!.image, channelName: 'Max', views: '40M views', videoId: 'eA4E9i2PUGw', duration: '2:18', uploadDate: '4 months ago' },
  { id: 'video-5-2', topicId: '5', title: 'The Last of Us S2: Cast Reacts to Premiere & Abby\'s Introduction | HBO', thumbnail: topics.find(t=>t.id==='5')!.image, channelName: 'HBO', views: '5.1M views', videoId: 'Q9CHLgaG398', duration: '11:05', uploadDate: '2 months ago' },
  { id: 'video-5-3', topicId: '5', title: 'The Last of Us S2 EP1 Breakdown: Spoilers & Easter Eggs | New Rockstars', thumbnail: topics.find(t=>t.id==='5')!.image, channelName: 'New Rockstars', views: '3.2M views', videoId: 'L5csKOZ8O3c', duration: '18:22', uploadDate: '2 months ago' },
  { id: 'video-5-4', topicId: '5', title: 'Pedro Pascal & Bella Ramsey Interview: The Last of Us Season 2 Journey | Variety', thumbnail: topics.find(t=>t.id==='5')!.image, channelName: 'Variety', views: '6.8M views', videoId: 'exampleTLOUInterview', duration: '14:40', uploadDate: '3 months ago' },
  { id: 'video-5-5', topicId: '5', title: 'Kaitlyn Dever IS Abby: Becoming The Last of Us\' Most Controversial Character | HBO', thumbnail: topics.find(t=>t.id==='5')!.image, channelName: 'HBO', views: '2.5M views', videoId: 'exampleKaitlynAbby', duration: '7:50', uploadDate: '1 month ago' },
  { id: 'video-5-6', topicId: '5', title: 'The Science of The Last of Us: Real-World Cordyceps Explained | PBS Eons', thumbnail: topics.find(t=>t.id==='5')!.image, channelName: 'PBS Eons', views: '9.7M views', videoId: '1N0N5gp8qsk', duration: '12:30', uploadDate: '1 year ago' },
  { id: 'video-5-7', topicId: '5', title: 'The Last of Us: Game vs Show - Season 2 Differences Detailed | IGN', thumbnail: topics.find(t=>t.id==='5')!.image, channelName: 'IGN', views: '4.1M views', videoId: 'exampleTLOUGameShowS2', duration: '20:15', uploadDate: 'Ongoing series' },
  { id: 'video-5-8', topicId: '5', title: 'Building the Apocalypse: The Last of Us Season 2 Production Design | Max', thumbnail: topics.find(t=>t.id==='5')!.image, channelName: 'Max', views: '1.2M views', videoId: 'exampleTLOUProdDesignS2', duration: '6:55', uploadDate: '1 month ago' },
  { id: 'video-5-9', topicId: '5', title: 'The Last of Us Season 3 Tease: What Could Happen Next? | HBO', thumbnail: topics.find(t=>t.id==='5')!.image, channelName: 'HBO', views: '3.8M views', videoId: 'exampleTLOUS3Tease', duration: '4:30', uploadDate: '2 weeks ago' },
  { id: 'video-5-10', topicId: '5', title: 'Gustavo Santaolalla & David Fleming - The Last of Us S2 Score Featurette | WaterTower', thumbnail: topics.find(t=>t.id==='5')!.image, channelName: 'WaterTower Music', views: '950K views', videoId: 'exampleTLOUS2Score', duration: '8:10', uploadDate: '1 month ago' },

  // Tom Holland (id: 6) - Target: 10
  { id: 'video-6-1', topicId: '6', title: 'Tom Holland "Romeo & Juliet" West End Highlights & Ovation | Official Theatre', thumbnail: topics.find(t=>t.id==='6')!.image, channelName: 'Official London Theatre', views: '1.5M views', videoId: 'exampleRomeoPlay', duration: '3:30', uploadDate: '5 months ago' },
  { id: 'video-6-2', topicId: '6', title: 'Spider-Man: Brave New Day - Tom Holland Training & Filming Update | Marvel', thumbnail: topics.find(t=>t.id==='6')!.image, channelName: 'Marvel Entertainment', views: '6.1M views', videoId: 'IsMOhN7uX50', duration: '3:10', uploadDate: 'Just now' },
  { id: 'video-6-3', topicId: '6', title: 'Tom Holland Answers the Web\'s Most Searched Questions | WIRED', thumbnail: topics.find(t=>t.id==='6')!.image, channelName: 'WIRED', views: '35M views', videoId: 'CTbZJ7_P0cQ', duration: '18:50', uploadDate: '2 years ago' },
  { id: 'video-6-4', topicId: '6', title: 'Tom Holland Breaks Down His Career, from Billy Elliot to Spider-Man | Vanity Fair', thumbnail: topics.find(t=>t.id==='6')!.image, channelName: 'Vanity Fair', views: '22M views', videoId: '1ZkgoGk6Eik', duration: '15:20', uploadDate: '1 year ago' },
  { id: 'video-6-5', topicId: '6', title: 'Tom Holland & Zendaya Relationship Timeline: From Co-stars to Couple | Elle', thumbnail: topics.find(t=>t.id==='6')!.image, channelName: 'Elle', views: '9.8M views', videoId: 'exampleTomZendayaTimeline', duration: '7:45', uploadDate: '6 months ago' },
  { id: 'video-6-6', topicId: '6', title: 'Tom Holland Golf Skills & Uncharted Stunts | Men\'s Journal', thumbnail: topics.find(t=>t.id==='6')!.image, channelName: 'Men\'s Journal', views: '4.2M views', videoId: 'exampleTomGolf', duration: '9:00', uploadDate: '1 year ago' },
  { id: 'video-6-7', topicId: '6', title: 'Tom Holland on Preparing for Fred Astaire Biopic | Dance Masterclass', thumbnail: topics.find(t=>t.id==='6')!.image, channelName: 'Access Hollywood', views: '1.8M views', videoId: 'exampleTomAstairePrep', duration: '5:50', uploadDate: '2 months ago' },
  { id: 'video-6-8', topicId: '6', title: 'The Unlikely Friendship of Tom Holland & Jake Gyllenhaal | Graham Norton', thumbnail: topics.find(t=>t.id==='6')!.image, channelName: 'The Graham Norton Show', views: '15M views', videoId: 'exampleTomJakeFriendship', duration: '10:30', uploadDate: '3 years ago' },
  { id: 'video-6-9', topicId: '6', title: 'Tom Holland\'s Funniest Interview Moments Compilation', thumbnail: topics.find(t=>t.id==='6')!.image, channelName: 'BBC Radio 1', views: '18M views', videoId: 'exampleTomFunnyMoments', duration: '12:10', uploadDate: '8 months ago' },
  { id: 'video-6-10', topicId: '6', title: 'Tom Holland Reacts to Spider-Man Fan Theories | Marvel HQ', thumbnail: topics.find(t=>t.id==='6')!.image, channelName: 'Marvel HQ', views: '7.5M views', videoId: 'exampleTomFanTheories', duration: '9:25', uploadDate: '10 months ago' },

  // Oppenheimer (id: 7) - Target: 10
  { id: 'video-7-1', topicId: '7', title: 'Oppenheimer | The Story of Our Time - Blu-ray Featurette | Universal Pictures', thumbnail: topics.find(t=>t.id==='7')!.image, channelName: 'Universal Pictures All-Access', views: '2.2M views', videoId: 'c_AtuFbb8bU', duration: '8:45', uploadDate: '10 months ago' },
  { id: 'video-7-2', topicId: '7', title: 'Christopher Nolan Discusses The Making of Oppenheimer | DGA Q&A', thumbnail: topics.find(t=>t.id==='7')!.image, channelName: 'Directors Guild of America', views: '3.5M views', videoId: 'exampleNolanOppenheimerDGA', duration: '25:30', uploadDate: '1 year ago' },
  { id: 'video-7-3', topicId: '7', title: 'Cillian Murphy\'s Journey to Oppenheimer: An Actor\'s Profile | BAFTA Guru', thumbnail: topics.find(t=>t.id==='7')!.image, channelName: 'BAFTA Guru', views: '4.8M views', videoId: 'exampleCillianOppyProfile', duration: '12:15', uploadDate: '1 year ago' },
  { id: 'video-7-4', topicId: '7', title: 'Oppenheimer: Recreating the Trinity Test Without CGI | Corridor Crew VFX', thumbnail: topics.find(t=>t.id==='7')!.image, channelName: 'Corridor Crew', views: '11M views', videoId: 'exampleOppyTrinityVFX', duration: '18:55', uploadDate: '1 year ago' },
  { id: 'video-7-5', topicId: '7', title: 'Ludwig Göransson - Can You Hear The Music (Oppenheimer Soundtrack) | Official Video', thumbnail: topics.find(t=>t.id==='7')!.image, channelName: 'Ludwig Goransson', views: '15M views', videoId: 'tOkeU6x-YwA', duration: '1:50', uploadDate: '1 year ago' },
  { id: 'video-7-6', topicId: '7', title: 'The Real History Behind Oppenheimer: Separating Fact from Fiction | History Channel', thumbnail: topics.find(t=>t.id==='7')!.image, channelName: 'HISTORY', views: '6.2M views', videoId: 'exampleOppyRealHistory', duration: '22:00', uploadDate: '1 year ago' },
  { id: 'video-7-7', topicId: '7', title: 'Florence Pugh & Emily Blunt on Their Roles in Oppenheimer | Actors on Actors', thumbnail: topics.find(t=>t.id==='7')!.image, channelName: 'Variety', views: '3.1M views', videoId: 'examplePughBluntOppy', duration: '16:40', uploadDate: '1 year ago' },
  { id: 'video-7-8', topicId: '7', title: 'Christopher Nolan\'s Next Film "The Odyssey": What We Know | ScreenRant', thumbnail: topics.find(t=>t.id==='7')!.image, channelName: 'Screen Rant', views: '1.1M views', videoId: 'exampleNolanOdysseyNews', duration: '6:20', uploadDate: '1 month ago' },
  { id: 'video-7-9', topicId: '7', title: 'Oppenheimer Wins Best Picture: Oscars 2024 Acceptance Speech | Academy Awards', thumbnail: topics.find(t=>t.id==='7')!.image, channelName: 'Oscars', views: '7.8M views', videoId: 'exampleOppyBestPicSpeech', duration: '4:30', uploadDate: '1 year ago' },
  { id: 'video-7-10', topicId: '7', title: 'The Science Advisor for Oppenheimer Explains the Physics | Physics Today', thumbnail: topics.find(t=>t.id==='7')!.image, channelName: 'Physics Today', views: '900K views', videoId: 'exampleOppyScienceAdvisor', duration: '10:05', uploadDate: '11 months ago' },

  // House of the Dragon (id: 8) - Target: 10
  { id: 'video-8-1', topicId: '8', title: 'House of the Dragon Season 2 | Finale Recap & Breakdown | HBO', thumbnail: topics.find(t=>t.id==='8')!.image, channelName: 'HBO', views: '7.2M views', videoId: 'R7xTR22znUg', duration: '9:50', uploadDate: '6 months ago' },
  { id: 'video-8-2', topicId: '8', title: 'House of the Dragon Season 3 - What We Know So Far | HBO Max', thumbnail: topics.find(t=>t.id==='8')!.image, channelName: 'Max', views: '3.8M views', videoId: 'G3AbStJc4pQ', duration: '5:20', uploadDate: '1 month ago' },
  { id: 'video-8-3', topicId: '8', title: 'Inside The Episode: House of the Dragon S2 Finale | HBO', thumbnail: topics.find(t=>t.id==='8')!.image, channelName: 'HBO', views: '4.5M views', videoId: 'exampleHOTDS2FinaleInside', duration: '7:30', uploadDate: '6 months ago' },
  { id: 'video-8-4', topicId: '8', title: 'Emma D\'Arcy & Olivia Cooke Discuss Rhaenyra vs Alicent | House of the Dragon S2', thumbnail: topics.find(t=>t.id==='8')!.image, channelName: 'Max', views: '2.9M views', videoId: 'exampleHOTDCastInterviewS2', duration: '12:45', uploadDate: '7 months ago' },
  { id: 'video-8-5', topicId: '8', title: 'The Dragons of House of the Dragon: Design & VFX Breakdown | Max', thumbnail: topics.find(t=>t.id==='8')!.image, channelName: 'Max', views: '5.1M views', videoId: 'exampleHOTDDragonsVFX', duration: '10:10', uploadDate: '5 months ago' },
  { id: 'video-8-6', topicId: '8', title: 'George R.R. Martin on House of the Dragon and Future of Westeros | Penguin Books', thumbnail: topics.find(t=>t.id==='8')!.image, channelName: 'Penguin Books UK', views: '1.2M views', videoId: 'exampleGRRMHOTDInterview', duration: '18:20', uploadDate: '8 months ago' },
  { id: 'video-8-7', topicId: '8', title: 'House of the Dragon: Blood & Cheese Explained (Book Spoilers) | Alt Shift X', thumbnail: topics.find(t=>t.id==='8')!.image, channelName: 'Alt Shift X', views: '3.3M views', videoId: 'exampleHOTDBloodCheese', duration: '15:00', uploadDate: '1 year ago' },
  { id: 'video-8-8', topicId: '8', title: 'Ramin Djawadi - House of the Dragon Main Theme (Official Video) | WaterTower', thumbnail: topics.find(t=>t.id==='8')!.image, channelName: 'WaterTower Music', views: '10M views', videoId: 'DotnJ7tTA34', duration: '2:30', uploadDate: '2 years ago' },
  { id: 'video-8-9', topicId: '8', title: 'House of the Dragon S3 Casting Rumors: Who Will Play Daeron & Nettles?', thumbnail: topics.find(t=>t.id==='8')!.image, channelName: 'Emergency Awesome', views: '1.8M views', videoId: 'exampleHOTDS3Casting', duration: '11:40', uploadDate: '2 weeks ago' },
  { id: 'video-8-10', topicId: '8', title: 'The Real History Behind House of the Dragon: The Anarchy Explained | History Buffs', thumbnail: topics.find(t=>t.id==='8')!.image, channelName: 'History Buffs', views: '2.5M views', videoId: 'exampleHOTDRealHistory', duration: '20:05', uploadDate: '1 year ago' },

  // Florence Pugh (id: 9) - Target: 10
  { id: 'video-9-1', topicId: '9', title: 'Thunderbolts* | Official Trailer | Marvel Studios', thumbnail: topics.find(t=>t.id==='9')!.image, channelName: 'Marvel Entertainment', views: '35M views', videoId: 'ELeZk1a7pFE', duration: '2:15', uploadDate: '8 months ago' },
  { id: 'video-9-2', topicId: '9', title: 'Florence Pugh & Andrew Garfield "We Live in Time" Interview | A24', thumbnail: topics.find(t=>t.id==='9')!.image, channelName: 'A24', views: '2.1M views', videoId: 'examplePughGarfieldInterview', duration: '10:10', uploadDate: '4 months ago' },
  { id: 'video-9-3', topicId: '9', title: 'Florence Pugh Breaks Down Her Career, from Lady Macbeth to Black Widow | Vanity Fair', thumbnail: topics.find(t=>t.id==='9')!.image, channelName: 'Vanity Fair', views: '9.8M views', videoId: 'examplePughCareerBreakdown', duration: '16:30', uploadDate: '1 year ago' },
  { id: 'video-9-4', topicId: '9', title: 'Florence Pugh Cooks with Her Dad on Instagram Live | Highlights', thumbnail: topics.find(t=>t.id==='9')!.image, channelName: 'Florence Pugh Updates', views: '3.2M views', videoId: 'examplePughCooking', duration: '12:45', uploadDate: '10 months ago' },
  { id: 'video-9-5', topicId: '9', title: 'Florence Pugh\'s Best Red Carpet Looks & Style Evolution | Vogue', thumbnail: topics.find(t=>t.id==='9')!.image, channelName: 'Vogue', views: '5.5M views', videoId: 'examplePughRedCarpet', duration: '8:20', uploadDate: '3 months ago' },
  { id: 'video-9-6', topicId: '9', title: 'Yelena Belova: Florence Pugh on Her MCU Character\'s Future | Marvel', thumbnail: topics.find(t=>t.id==='9')!.image, channelName: 'Marvel Entertainment', views: '4.1M views', videoId: 'examplePughYelenaFuture', duration: '6:50', uploadDate: '2 weeks ago' },
  { id: 'video-9-7', topicId: '9', title: 'Florence Pugh Answers the Web\'s Most Searched Questions | WIRED', thumbnail: topics.find(t=>t.id==='9')!.image, channelName: 'WIRED', views: '7.9M views', videoId: 'examplePughWired', duration: '14:00', uploadDate: '1 year ago' },
  { id: 'video-9-8', topicId: '9', title: 'Florence Pugh Reacts to Her Old Movie Scenes | Elle', thumbnail: topics.find(t=>t.id==='9')!.image, channelName: 'Elle', views: '2.8M views', videoId: 'examplePughReactsScenes', duration: '9:55', uploadDate: '5 months ago' },
  { id: 'video-9-9', topicId: '9', title: 'Florence Pugh on Working With Olivia Wilde for New Thriller | Variety Studio', thumbnail: topics.find(t=>t.id==='9')!.image, channelName: 'Variety', views: '1.1M views', videoId: 'examplePughOliviaWilde', duration: '7:10', uploadDate: '1 month ago' },
  { id: 'video-9-10', topicId: '9', title: 'Florence Pugh\'s Funniest Interview Moments & Bloopers', thumbnail: topics.find(t=>t.id==='9')!.image, channelName: 'Access Hollywood', views: '3.7M views', videoId: 'examplePughFunnyMoments', duration: '10:25', uploadDate: '4 months ago' },

  // Barbie (id: 10) - Target: 10
  { id: 'video-10-1', topicId: '10', title: 'Barbie | Official Trailer | Warner Bros. Pictures', thumbnail: topics.find(t=>t.id==='10')!.image, channelName: 'Warner Bros. Pictures', views: '75M views', videoId: 'pBk4NYhWNMM', duration: '2:03', uploadDate: '2 years ago' },
  { id: 'video-10-2', topicId: '10', title: 'Greta Gerwig Breaks Down Barbie\'s Opening Scene | Vanity Fair Notes on a Scene', thumbnail: topics.find(t=>t.id==='10')!.image, channelName: 'Vanity Fair', views: '10M views', videoId: 'exampleGerwigBarbieScene', duration: '15:30', uploadDate: '1 year ago' },
  { id: 'video-10-3', topicId: '10', title: 'Margot Robbie & Ryan Gosling Barbie Interview: Chemistry & Ken-ergy | ET', thumbnail: topics.find(t=>t.id==='10')!.image, channelName: 'Entertainment Tonight', views: '12M views', videoId: 'exampleBarbieCastInterview', duration: '11:45', uploadDate: '1 year ago' },
  { id: 'video-10-4', topicId: '10', title: 'Billie Eilish - What Was I Made For? (Official Music Video) | Barbie The Album', thumbnail: topics.find(t=>t.id==='10')!.image, channelName: 'Billie Eilish', views: '150M views', videoId: 'cW8VLC9nnTo', duration: '3:50', uploadDate: '1 year ago' },
  { id: 'video-10-5', topicId: '10', title: 'The Philosophy of Barbie: Deconstructing a Feminist Icon | Wisecrack', thumbnail: topics.find(t=>t.id==='10')!.image, channelName: 'Wisecrack', views: '4.2M views', videoId: 'exampleBarbiePhilosophy', duration: '17:20', uploadDate: '1 year ago' },
  { id: 'video-10-6', topicId: '10', title: 'Barbie Movie Cast Reacts to "I\'m Just Ken" Performance | Oscars 2024', thumbnail: topics.find(t=>t.id==='10')!.image, channelName: 'Oscars', views: '25M views', videoId: 'exampleImJustKenReaction', duration: '5:00', uploadDate: '1 year ago' },
  { id: 'video-10-7', topicId: '10', title: 'Building Barbie Land: The Production Design of Barbie | Architectural Digest', thumbnail: topics.find(t=>t.id==='10')!.image, channelName: 'Architectural Digest', views: '8.5M views', videoId: 'exampleBarbieProdDesignAD', duration: '10:05', uploadDate: '1 year ago' },
  { id: 'video-10-8', topicId: '10', title: 'Will There Be A Barbie Sequel? Margot Robbie & Greta Gerwig Discuss | Variety', thumbnail: topics.find(t=>t.id==='10')!.image, channelName: 'Variety', views: '3.1M views', videoId: 'exampleBarbieSequelTalk', duration: '7:30', uploadDate: '8 months ago' },
  { id: 'video-10-9', topicId: '10', title: 'The Barbie Movie\'s Marketing Genius Explained | Bloomberg', thumbnail: topics.find(t=>t.id==='10')!.image, channelName: 'Bloomberg Originals', views: '2.9M views', videoId: 'exampleBarbieMarketing', duration: '9:40', uploadDate: '1 year ago' },
  { id: 'video-10-10', topicId: '10', title: 'Barbie vs Oppenheimer: The Story of Barbenheimer | IGN Documentaries', thumbnail: topics.find(t=>t.id==='10')!.image, channelName: 'IGN', views: '5.5M views', videoId: 'exampleBarbenheimerDoc', duration: '13:15', uploadDate: '10 months ago' },

  // Wednesday (id: 11) - Target: 10
  { id: 'video-11-1', topicId: '11', title: 'Wednesday Season 2 | Official Teaser | Netflix', thumbnail: topics.find(t=>t.id==='11')!.image, channelName: 'Netflix', views: '22M views', videoId: '5zM7A07gP3g', duration: '1:45', uploadDate: '1 month ago' },
  { id: 'video-11-2', topicId: '11', title: 'Wednesday S2: Jenna Ortega & Cast Table Read First Look | Netflix', thumbnail: topics.find(t=>t.id==='11')!.image, channelName: 'Netflix', views: '6.2M views', videoId: 'shqobjd5x7o', duration: '3:50', uploadDate: '3 weeks ago' },
  { id: 'video-11-3', topicId: '11', title: 'Jenna Ortega Breaks Down Wednesday\'s Iconic Dance Scene | Netflix', thumbnail: topics.find(t=>t.id==='11')!.image, channelName: 'Netflix', views: '50M views', videoId: '7_nN6t1Z5qE', duration: '8:20', uploadDate: '1 year ago' },
  { id: 'video-11-4', topicId: '11', title: 'Tim Burton on Directing Wednesday & Addams Family Legacy | Netflix Behind the Scenes', thumbnail: topics.find(t=>t.id==='11')!.image, channelName: 'Netflix', views: '4.8M views', videoId: 'exampleBurtonWednesday', duration: '10:30', uploadDate: '1 year ago' },
  { id: 'video-11-5', topicId: '11', title: 'Wednesday Cast Plays "Who\'s Most Likely To..." | Netflix', thumbnail: topics.find(t=>t.id==='11')!.image, channelName: 'Netflix', views: '15M views', videoId: 'exampleWednesdayCastGame', duration: '9:50', uploadDate: '1 year ago' },
  { id: 'video-11-6', topicId: '11', title: 'The Music of Wednesday: Danny Elfman & Chris Bacon Score Featurette | Netflix', thumbnail: topics.find(t=>t.id==='11')!.image, channelName: 'Netflix', views: '3.1M views', videoId: 'exampleWednesdayScore', duration: '7:15', uploadDate: '1 year ago' },
  { id: 'video-11-7', topicId: '11', title: 'Emma Myers (Enid) & Percy Hynes White (Xavier) Interview | Wednesday Netflix', thumbnail: topics.find(t=>t.id==='11')!.image, channelName: 'Netflix', views: '7.5M views', videoId: 'exampleWednesdayEmmaPercy', duration: '11:05', uploadDate: '1 year ago' },
  { id: 'video-11-8', topicId: '11', title: 'Wednesday Season 2 Fan Theories & Predictions | ScreenCrush', thumbnail: topics.find(t=>t.id==='11')!.image, channelName: 'ScreenCrush', views: '2.9M views', videoId: 'exampleWednesdayS2Theories', duration: '13:40', uploadDate: '2 months ago' },
  { id: 'video-11-9', topicId: '11', title: 'Building Nevermore Academy: The Production Design of Wednesday | Netflix', thumbnail: topics.find(t=>t.id==='11')!.image, channelName: 'Netflix', views: '1.8M views', videoId: 'exampleWednesdayNevermoreDesign', duration: '6:00', uploadDate: '10 months ago' },
  { id: 'video-11-10', topicId: '11', title: 'Wednesday Addams Best Moments & Wittiest Lines Season 1 | Netflix', thumbnail: topics.find(t=>t.id==='11')!.image, channelName: 'Netflix', views: '20M views', videoId: 'exampleWednesdayBestMoments', duration: '10:20', uploadDate: '1 year ago' },

  // Timothée Chalamet (id: 12) - Target: 10
  { id: 'video-12-1', topicId: '12', title: 'A Complete Unknown (Bob Dylan Biopic) | Official Trailer | Timothée Chalamet', thumbnail: topics.find(t=>t.id==='12')!.image, channelName: 'SearchlightPictures', views: '18M views', videoId: 'TtIJAbzUo_Q', duration: '2:35', uploadDate: '7 months ago' },
  { id: 'video-12-2', topicId: '12', title: 'Timothée Chalamet Breaks Down His Career, from Dune to Wonka | GQ', thumbnail: topics.find(t=>t.id==='12')!.image, channelName: 'GQ', views: '25M views', videoId: 'exampleChalametCareerGQ', duration: '17:40', uploadDate: '1 year ago' },
  { id: 'video-12-3', topicId: '12', title: 'Timothée Chalamet\'s Singing Transformation for Bob Dylan Role | Vocal Coach Reacts', thumbnail: topics.find(t=>t.id==='12')!.image, channelName: 'Access Hollywood', views: '3.5M views', videoId: 'exampleChalametDylanSinging', duration: '9:10', uploadDate: '5 months ago' },
  { id: 'video-12-4', topicId: '12', title: 'Timothée Chalamet & Zendaya Dune Interview: Chemistry & Friendship | Variety', thumbnail: topics.find(t=>t.id==='12')!.image, channelName: 'Variety', views: '10M views', videoId: 'bYo_xV_jHMY', duration: '11:20', uploadDate: '1 year ago' }, // Re-using if relevant
  { id: 'video-12-5', topicId: '12', title: 'Timothée Chalamet Answers the Web\'s Most Searched Questions | WIRED', thumbnail: topics.find(t=>t.id==='12')!.image, channelName: 'WIRED', views: '30M views', videoId: 'exampleChalametWired', duration: '19:00', uploadDate: '2 years ago' },
  { id: 'video-12-6', topicId: '12', title: 'Wonka | Official Trailer | Timothée Chalamet | Warner Bros.', thumbnail: topics.find(t=>t.id==='12')!.image, channelName: 'Warner Bros. Pictures', views: '45M views', videoId: 'otNhG8R7A50', duration: '2:28', uploadDate: '1 year ago' },
  { id: 'video-12-7', topicId: '12', title: 'Timothée Chalamet Prepares for Dune: Messiah - Training & Script Tease | Legendary', thumbnail: topics.find(t=>t.id==='12')!.image, channelName: 'Legendary', views: '5.2M views', videoId: 'exampleChalametDuneMessiahPrep', duration: '4:50', uploadDate: '1 week ago' },
  { id: 'video-12-8', topicId: '12', title: 'The Fashion Evolution of Timothée Chalamet: Red Carpet King | Vogue', thumbnail: topics.find(t=>t.id==='12')!.image, channelName: 'Vogue', views: '6.8M views', videoId: 'exampleChalametFashionVogue', duration: '8:30', uploadDate: '6 months ago' },
  { id: 'video-12-9', topicId: '12', title: 'Timothée Chalamet on Working with Martin Scorsese for New Crime Film | THR', thumbnail: topics.find(t=>t.id==='12')!.image, channelName: 'The Hollywood Reporter', views: '1.9M views', videoId: 'exampleChalametScorsese', duration: '7:05', uploadDate: '2 months ago' },
  { id: 'video-12-10', topicId: '12', title: 'Timothée Chalamet Funniest Moments & Interview Highlights | Ellen Show', thumbnail: topics.find(t=>t.id==='12')!.image, channelName: 'TheEllenShow', views: '16M views', videoId: 'exampleChalametFunnyEllen', duration: '10:40', uploadDate: '1 year ago' },
];

// Helper Functions
export const getTopicById = (id: string): Topic | undefined => {
  return topics.find(topic => topic.id === id);
};

export const getNewsForTopic = (topicId: string): NewsCard[] => {
  return newsCards.filter(news => news.topicId === topicId);
};

export const getNewsById = (id: string): NewsCard | undefined => {
  return newsCards.find(item => item.id === id);
};

export const getVideosForTopic = (topicId: string): VideoCard[] => {
  return videoCards.filter(video => video.topicId === topicId);
};

// Updated to default to 10 related topics
export const getRelatedTopics = (currentTopicId: string, count: number = 10): Topic[] => {
  const currentTopic = getTopicById(currentTopicId);
  if (!currentTopic) return [];

  const otherTopics = topics.filter(topic => topic.id !== currentTopicId);
  
  // Simple shuffle
  const shuffled = otherTopics.sort(() => 0.5 - Math.random());
  
  // Ensure we don't try to slice more than available
  return shuffled.slice(0, Math.min(count, shuffled.length));
};