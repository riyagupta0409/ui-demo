export interface Topic {
  id: string;
  type: 'actor' | 'movie' | 'show';
  title: string;
  image: string;
  rating?: number;
  releaseYear?: number;
  deepLink?: string;
  description?: string; // Adding description property
}

export interface NewsCard {
  id: string;
  topicId: string;
  headline: string;
  summary: string;
  image: string;
  date: string;
  source: string; // Adding source property to NewsCard
}

export interface VideoCard {
  id: string;
  topicId: string;
  title: string;
  thumbnail: string;
  channelName: string;
  views: string;
  videoId: string;
}

export const topics: Topic[] = [
  {
    id: '1',
    type: 'movie',
    title: 'Dune: Part Two',
    image: 'https://images.unsplash.com/photo-1500375592092-40eb2168fd21',
    rating: 8.6,
    releaseYear: 2024,
    deepLink: 'https://www.hbomax.com',
    description: 'Paul Atreides unites with Chani and the Fremen while seeking revenge against the conspirators who destroyed his family.'
  },
  {
    id: '2',
    type: 'actor',
    title: 'Zendaya',
    image: 'https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b',
    rating: 9.1,
    deepLink: 'https://www.imdb.com',
    description: 'American actress and singer who began her career as a child model before gaining prominence for her role as Rocky Blue on the Disney Channel.'
  },
  {
    id: '3',
    type: 'show',
    title: 'Stranger Things',
    image: 'https://images.unsplash.com/photo-1470813740244-df37b8c1edcb',
    rating: 8.7,
    releaseYear: 2016,
    deepLink: 'https://www.netflix.com',
    description: 'When a young boy disappears, his mother, a police chief and his friends must confront terrifying supernatural forces in order to get him back.'
  },
  {
    id: '4',
    type: 'movie',
    title: 'The Batman',
    image: 'https://images.unsplash.com/photo-1500673922987-e212871fec22',
    rating: 7.8,
    releaseYear: 2022,
    deepLink: 'https://www.hbomax.com',
    description: 'When the Riddler, a sadistic serial killer, begins murdering key political figures in Gotham, Batman is forced to investigate the city\'s hidden corruption.'
  },
  {
    id: '5',
    type: 'show',
    title: 'The Last of Us',
    image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5',
    rating: 8.8,
    releaseYear: 2023,
    deepLink: 'https://www.hbomax.com',
    description: 'After a global pandemic destroys civilization, a hardened survivor takes charge of a 14-year-old girl who may be humanity\'s last hope.'
  },
  {
    id: '6',
    type: 'actor',
    title: 'Tom Holland',
    image: 'https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b',
    rating: 8.3,
    deepLink: 'https://www.imdb.com',
    description: 'English actor known for playing Spider-Man in the Marvel Cinematic Universe and other roles in films like The Impossible and Uncharted.'
  },
  {
    id: '7',
    type: 'movie',
    title: 'Oppenheimer',
    image: 'https://images.unsplash.com/photo-1500673922987-e212871fec22',
    rating: 8.9,
    releaseYear: 2023,
    deepLink: 'https://www.universalpictures.com',
    description: 'The story of American scientist J. Robert Oppenheimer and his role in the development of the atomic bomb during World War II.'
  },
  {
    id: '8',
    type: 'show',
    title: 'House of the Dragon',
    image: 'https://images.unsplash.com/photo-1470813740244-df37b8c1edcb',
    rating: 8.5,
    releaseYear: 2022,
    deepLink: 'https://www.hbomax.com',
    description: 'Set 200 years before the events of Game of Thrones, this spin-off tells the story of House Targaryen.'
  },
  {
    id: '9',
    type: 'actor',
    title: 'Florence Pugh',
    image: 'https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b',
    rating: 8.2,
    deepLink: 'https://www.imdb.com',
    description: 'English actress noted for her roles in Lady Macbeth, Midsommar, Little Women, and Black Widow.'
  },
  {
    id: '10',
    type: 'movie',
    title: 'Barbie',
    image: 'https://images.unsplash.com/photo-1500375592092-40eb2168fd21',
    rating: 7.9,
    releaseYear: 2023,
    deepLink: 'https://www.warnerbros.com',
    description: 'Barbie and Ken are having the time of their lives in the colorful and seemingly perfect world of Barbie Land until they get a chance to go to the real world.'
  },
  {
    id: '11',
    type: 'show',
    title: 'Wednesday',
    image: 'https://images.unsplash.com/photo-1470813740244-df37b8c1edcb',
    rating: 8.1,
    releaseYear: 2022,
    deepLink: 'https://www.netflix.com',
    description: 'Wednesday Addams is sent to Nevermore Academy, a bizarre boarding school where she attempts to master her psychic powers.'
  },
  {
    id: '12',
    type: 'actor',
    title: 'Timothée Chalamet',
    image: 'https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b',
    rating: 8.7,
    deepLink: 'https://www.imdb.com',
    description: 'American actor known for his roles in Call Me by Your Name, Dune, Little Women, and Wonka.'
  }
];

export const trendingTopics = [
  topics[0],
  topics[2],
  topics[6],
  topics[9],
  topics[4],
];

export const newReleases = [
  topics[0],
  topics[3],
  topics[6],
  topics[9],
  topics[7],
];

export const popularActors = [
  topics[1],
  topics[5],
  topics[8],
  topics[11],
];

export const newsCards: NewsCard[] = [
  // News for Zendaya (id: 2)
  {
    id: 'news-2-1',
    topicId: '2',
    headline: 'Zendaya Wins Emmy for Outstanding Lead Actress',
    summary: 'The star takes home her third Emmy for her powerful performance in the latest season of Euphoria.',
    image: 'https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b',
    date: '2024-04-25',
    source: 'Emmy Awards'
  },
  {
    id: 'news-2-2',
    topicId: '2',
    headline: 'Zendaya to Star in New Christopher Nolan Film',
    summary: 'The actress has been cast in the acclaimed director\'s next project, set to begin filming later this year.',
    image: 'https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b',
    date: '2024-04-20',
    source: 'Variety'
  },
  {
    id: 'news-2-3',
    topicId: '2',
    headline: 'Inside Zendaya\'s Met Gala Fashion Evolution',
    summary: 'A look back at the star\'s most iconic Met Gala looks over the years and how she\'s become a fashion icon.',
    image: 'https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b',
    date: '2024-04-15',
    source: 'Vogue'
  },
  {
    id: 'news-2-4',
    topicId: '2',
    headline: 'Zendaya Launches New Production Company',
    summary: 'The actress announces her new production company focused on amplifying diverse voices and stories.',
    image: 'https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b',
    date: '2024-04-10',
    source: 'The Hollywood Reporter'
  },
  {
    id: 'news-2-5',
    topicId: '2',
    headline: 'Zendaya and Tom Holland Relationship Timeline',
    summary: 'From Spider-Man co-stars to Hollywood\'s favorite couple: A complete history of their relationship.',
    image: 'https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b',
    date: '2024-04-05',
    source: 'People Magazine'
  },

  // News for The Batman (id: 4)
  {
    id: 'news-4-1',
    topicId: '4',
    headline: 'The Batman Sequel Officially Announced',
    summary: 'Warner Bros. confirms that Robert Pattinson will return as the Caped Crusader in the sequel to the hit film.',
    image: 'https://images.unsplash.com/photo-1500673922987-e212871fec22',
    date: '2024-04-26',
    source: 'Warner Bros.'
  },
  {
    id: 'news-4-2',
    topicId: '4',
    headline: 'Matt Reeves Reveals Villain Plans for Batman Sequel',
    summary: 'The director shares insights into which iconic Batman villains might appear in the upcoming sequel.',
    image: 'https://images.unsplash.com/photo-1500673922987-e212871fec22',
    date: '2024-04-21',
    source: 'Entertainment Weekly'
  },
  {
    id: 'news-4-3',
    topicId: '4',
    headline: 'The Batman Wins Oscar for Best Cinematography',
    summary: 'Greig Fraser takes home the Academy Award for his stunning work on Matt Reeves\' dark vision of Gotham City.',
    image: 'https://images.unsplash.com/photo-1500673922987-e212871fec22',
    date: '2024-04-16',
    source: 'Academy Awards'
  },
  {
    id: 'news-4-4',
    topicId: '4',
    headline: 'The Batman Universe Expands with New HBO Max Series',
    summary: 'Following the success of The Penguin, HBO Max announces another spin-off series set in Matt Reeves\' Batman universe.',
    image: 'https://images.unsplash.com/photo-1500673922987-e212871fec22',
    date: '2024-04-11',
    source: 'HBO Max'
  },
  {
    id: 'news-4-5',
    topicId: '4',
    headline: 'Robert Pattinson Discusses Batman Training Regimen',
    summary: 'The actor reveals the intense physical preparation required to don the cape and cowl for the sequel.',
    image: 'https://images.unsplash.com/photo-1500673922987-e212871fec22',
    date: '2024-04-06',
    source: 'Men\'s Health'
  },

  // News for The Last of Us (id: 5)
  {
    id: 'news-5-1',
    topicId: '5',
    headline: 'The Last of Us Season 2 Wraps Production',
    summary: 'HBO confirms that filming has completed on the highly anticipated second season of the hit video game adaptation.',
    image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5',
    date: '2024-04-28',
    source: 'HBO'
  },
  {
    id: 'news-5-2',
    topicId: '5',
    headline: 'New Cast Members Join The Last of Us for Season 2',
    summary: 'HBO announces several new additions to the cast, including the actors playing Abby, Owen, and other key characters from the game.',
    image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5',
    date: '2024-04-23',
    source: 'Deadline'
  },
  {
    id: 'news-5-3',
    topicId: '5',
    headline: 'The Last of Us Wins Multiple Emmy Awards',
    summary: 'The HBO series takes home awards for Outstanding Drama Series, Lead Actor, and Lead Actress at the Emmy Awards.',
    image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5',
    date: '2024-04-18',
    source: 'Emmy Awards'
  },
  {
    id: 'news-5-4',
    topicId: '5',
    headline: 'Craig Mazin Discusses Adapting The Last of Us Part II',
    summary: 'The showrunner shares insights into the challenges of bringing the controversial and emotional sequel to the screen.',
    image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5',
    date: '2024-04-13',
    source: 'IGN'
  },
  {
    id: 'news-5-5',
    topicId: '5',
    headline: 'The Last of Us Video Game Sales Surge Following TV Success',
    summary: 'Sony reports a significant increase in sales for both The Last of Us games after the success of the HBO adaptation.',
    image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5',
    date: '2024-04-08',
    source: 'PlayStation Blog'
  },

  // News for Tom Holland (id: 6)
  {
    id: 'news-6-1',
    topicId: '6',
    headline: 'Tom Holland to Star in Christopher Nolan\'s Next Film',
    summary: 'The Spider-Man actor has been cast in the acclaimed director\'s upcoming project alongside Zendaya.',
    image: 'https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b',
    date: '2024-04-24',
    source: 'Variety'
  },
  {
    id: 'news-6-2',
    topicId: '6',
    headline: 'Tom Holland Begins Training for Spider-Man 4',
    summary: 'The actor shares glimpses of his physical preparation to return as Peter Parker in the next installment.',
    image: 'https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b',
    date: '2024-04-19',
    source: 'Marvel Studios'
  },
  {
    id: 'news-6-3',
    topicId: '6',
    headline: 'Tom Holland to Direct First Feature Film',
    summary: 'The actor is set to make his directorial debut with an indie drama he also co-wrote.',
    image: 'https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b',
    date: '2024-04-14',
    source: 'IndieWire'
  },
  {
    id: 'news-6-4',
    topicId: '6',
    headline: 'Tom Holland Returns to Theater for West End Production',
    summary: 'The actor will return to his theatrical roots in a limited run of a new play in London\'s West End.',
    image: 'https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b',
    date: '2024-04-09',
    source: 'The Stage'
  },
  {
    id: 'news-6-5',
    topicId: '6',
    headline: 'Tom Holland and Zendaya\'s Relationship Timeline',
    summary: 'From Spider-Man co-stars to Hollywood\'s favorite couple: A complete history of their relationship.',
    image: 'https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b',
    date: '2024-04-04',
    source: 'People Magazine'
  },

  // News for Oppenheimer (id: 7)
  {
    id: 'news-7-1',
    topicId: '7',
    headline: 'Oppenheimer Sweeps Academy Awards with 7 Oscars',
    summary: 'Christopher Nolan\'s historical drama dominates the Oscars, winning Best Picture, Director, and Actor among others.',
    image: 'https://images.unsplash.com/photo-1500673922987-e212871fec22',
    date: '2024-04-27',
    source: 'Academy Awards'
  },
  {
    id: 'news-7-2',
    topicId: '7',
    headline: 'Christopher Nolan Discusses Making Oppenheimer',
    summary: 'The acclaimed director shares insights into the challenges of bringing the complex historical figure to the screen.',
    image: 'https://images.unsplash.com/photo-1500673922987-e212871fec22',
    date: '2024-04-22',
    source: 'Directors Guild of America'
  },
  {
    id: 'news-7-3',
    topicId: '7',
    headline: 'Cillian Murphy\'s Transformation for Oppenheimer Role',
    summary: 'A look at the physical and psychological preparation the actor underwent to portray J. Robert Oppenheimer.',
    image: 'https://images.unsplash.com/photo-1500673922987-e212871fec22',
    date: '2024-04-17',
    source: 'Vanity Fair'
  },
  {
    id: 'news-7-4',
    topicId: '7',
    headline: 'The Historical Accuracy of Oppenheimer Examined',
    summary: 'Historians weigh in on what the film got right and wrong about the Manhattan Project and its controversial leader.',
    image: 'https://images.unsplash.com/photo-1500673922987-e212871fec22',
    date: '2024-04-12',
    source: 'History Channel'
  },
  {
    id: 'news-7-5',
    topicId: '7',
    headline: 'Oppenheimer\'s Cultural Impact on Nuclear Discourse',
    summary: 'How the film has reignited public discussion about nuclear weapons and scientific responsibility.',
    image: 'https://images.unsplash.com/photo-1500673922987-e212871fec22',
    date: '2024-04-07',
    source: 'Scientific American'
  },

  // News for House of the Dragon (id: 8)
  {
    id: 'news-8-1',
    topicId: '8',
    headline: 'House of the Dragon Season 2 Premiere Breaks HBO Records',
    summary: 'The return of the Game of Thrones prequel series shatters viewership records for HBO and Max.',
    image: 'https://images.unsplash.com/photo-1470813740244-df37b8c1edcb',
    date: '2024-04-29',
    source: 'HBO'
  },
  {
    id: 'news-8-2',
    topicId: '8',
    headline: 'House of the Dragon Showrunner Discusses Season 2 Direction',
    summary: 'Ryan Condal shares insights into the new season and how it will depict the Dance of the Dragons civil war.',
    image: 'https://images.unsplash.com/photo-1470813740244-df37b8c1edcb',
    date: '2024-04-24',
    source: 'Entertainment Weekly'
  },
  {
    id: 'news-8-3',
    topicId: '8',
    headline: 'New Dragons Revealed for House of the Dragon Season 2',
    summary: 'HBO unveils the new dragon designs that will be featured in the upcoming season of the fantasy series.',
    image: 'https://images.unsplash.com/photo-1470813740244-df37b8c1edcb',
    date: '2024-04-19',
    source: 'HBO Max'
  },
  {
    id: 'news-8-4',
    topicId: '8',
    headline: 'The Historical Inspiration Behind House of the Dragon',
    summary: 'How the War of the Roses and other medieval conflicts influenced George R.R. Martin\'s Targaryen civil war.',
    image: 'https://images.unsplash.com/photo-1470813740244-df37b8c1edcb',
    date: '2024-04-14',
    source: 'History Today'
  },
  {
    id: 'news-8-5',
    topicId: '8',
    headline: 'House of the Dragon Cast Discusses Character Evolutions',
    summary: 'The actors share insights into how their characters will develop and change in the second season.',
    image: 'https://images.unsplash.com/photo-1470813740244-df37b8c1edcb',
    date: '2024-04-09',
    source: 'Variety'
  },

  // News for Florence Pugh (id: 9)
  {
    id: 'news-9-1',
    topicId: '9',
    headline: 'Florence Pugh to Lead New Christopher Nolan Film',
    summary: 'The actress has been cast as the lead in the acclaimed director\'s next project, set to begin filming later this year.',
    image: 'https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b',
    date: '2024-04-30',
    source: 'Variety'
  },
  {
    id: 'news-9-2',
    topicId: '9',
    headline: 'Florence Pugh Discusses Challenging Role in New Drama',
    summary: 'The actress shares insights into her preparation for a demanding role in an upcoming independent film.',
    image: 'https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b',
    date: '2024-04-25',
    source: 'IndieWire'
  },
  {
    id: 'news-9-3',
    topicId: '9',
    headline: 'Florence Pugh\'s Fashion Evolution on the Red Carpet',
    summary: 'A look at how the actress has become a style icon through her bold and distinctive fashion choices.',
    image: 'https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b',
    date: '2024-04-20',
    source: 'Vogue'
  },
  {
    id: 'news-9-4',
    topicId: '9',
    headline: 'Florence Pugh to Make Directorial Debut',
    summary: 'The actress announces her first project as director, a short film she also wrote and will star in.',
    image: 'https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b',
    date: '2024-04-15',
    source: 'The Hollywood Reporter'
  },
  {
    id: 'news-9-5',
    topicId: '9',
    headline: 'Florence Pugh Joins Marvel\'s Thunderbolts Cast',
    summary: 'The actress will reprise her role as Yelena Belova in the upcoming Marvel ensemble film.',
    image: 'https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b',
    date: '2024-04-10',
    source: 'Marvel Studios'
  },

  // News for Barbie (id: 10)
  {
    id: 'news-10-1',
    topicId: '10',
    headline: 'Barbie Sequel Officially Announced by Warner Bros',
    summary: 'Following the massive success of the first film, Warner Bros. confirms that Greta Gerwig will return to direct a sequel.',
    image: 'https://images.unsplash.com/photo-1500375592092-40eb2168fd21',
    date: '2024-04-28',
    source: 'Warner Bros.'
  },
  {
    id: 'news-10-2',
    topicId: '10',
    headline: 'Barbie Wins Oscar for Best Original Screenplay',
    summary: 'Greta Gerwig and Noah Baumbach take home the Academy Award for their innovative script for the Barbie movie.',
    image: 'https://images.unsplash.com/photo-1500375592092-40eb2168fd21',
    date: '2024-04-23',
    source: 'Academy Awards'
  },
  {
    id: 'news-10-3',
    topicId: '10',
    headline: 'The Cultural Impact of Barbie: One Year Later',
    summary: 'An analysis of how the Barbie film has influenced fashion, toys, and discussions about feminism a year after its release.',
    image: 'https://images.unsplash.com/photo-1500375592092-40eb2168fd21',
    date: '2024-04-18',
    source: 'The Atlantic'
  },
  {
    id: 'news-10-4',
    topicId: '10',
    headline: 'Margot Robbie Reflects on Playing Barbie',
    summary: 'The actress discusses the challenges and joys of bringing the iconic doll to life on the big screen.',
    image: 'https://images.unsplash.com/photo-1500375592092-40eb2168fd21',
    date: '2024-04-13',
    source: 'Vanity Fair'
  },
  {
    id: 'news-10-5',
    topicId: '10',
    headline: 'Barbie Merchandise Sales Hit Record Numbers',
    summary: 'Mattel reports unprecedented sales of Barbie dolls and merchandise following the film\'s success.',
    image: 'https://images.unsplash.com/photo-1500375592092-40eb2168fd21',
    date: '2024-04-08',
    source: 'Mattel'
  },

  // News for Wednesday (id: 11)
  {
    id: 'news-11-1',
    topicId: '11',
    headline: 'Wednesday Season 2 Begins Production',
    summary: 'Netflix announces that filming has started on the second season of the hit series starring Jenna Ortega.',
    image: 'https://images.unsplash.com/photo-1470813740244-df37b8c1edcb',
    date: '2024-04-29',
    source: 'Netflix'
  },
  {
    id: 'news-11-2',
    topicId: '11',
    headline: 'New Cast Members Join Wednesday for Season 2',
    summary: 'Netflix reveals several high-profile additions to the cast for the upcoming season of the Addams Family spin-off.',
    image: 'https://images.unsplash.com/photo-1470813740244-df37b8c1edcb',
    date: '2024-04-24',
    source: 'Deadline'
  },
  {
    id: 'news-11-3',
    topicId: '11',
    headline: 'Jenna Ortega Discusses Wednesday\'s Evolution in Season 2',
    summary: 'The actress shares insights into how her character will develop and change in the new season.',
    image: 'https://images.unsplash.com/photo-1470813740244-df37b8c1edcb',
    date: '2024-04-19',
    source: 'Entertainment Weekly'
  },
  {
    id: 'news-11-4',
    topicId: '11',
    headline: 'Tim Burton to Direct More Episodes of Wednesday Season 2',
    summary: 'The legendary filmmaker will return to direct additional episodes in the upcoming season of the Netflix series.',
    image: 'https://images.unsplash.com/photo-1470813740244-df37b8c1edcb',
    date: '2024-04-14',
    source: 'Variety'
  },
  {
    id: 'news-11-5',
    topicId: '11',
    headline: 'Wednesday\'s Impact on Gothic Fashion Trends',
    summary: 'How the Netflix series has influenced a resurgence in gothic fashion and aesthetics among young viewers.',
    image: 'https://images.unsplash.com/photo-1470813740244-df37b8c1edcb',
    date: '2024-04-09',
    source: 'Vogue'
  },

  // News for Timothée Chalamet (id: 12)
  {
    id: 'news-12-1',
    topicId: '12',
    headline: 'Timothée Chalamet to Star in New Martin Scorsese Film',
    summary: 'The actor has been cast in the legendary director\'s upcoming historical drama set in 1920s New York.',
    image: 'https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b',
    date: '2024-04-30',
    source: 'Variety'
  },
  {
    id: 'news-12-2',
    topicId: '12',
    headline: 'Timothée Chalamet Begins Filming Dune: Messiah',
    summary: 'Production has started on the third installment of Denis Villeneuve\'s Dune saga with Chalamet returning as Paul Atreides.',
    image: 'https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b',
    date: '2024-04-25',
    source: 'Warner Bros.'
  },
  {
    id: 'news-12-3',
    topicId: '12',
    headline: 'Timothée Chalamet\'s Transformation for New Role',
    summary: 'The actor undergoes a dramatic physical transformation for his upcoming role as a famous musician.',
    image: 'https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b',
    date: '2024-04-20',
    source: 'Entertainment Weekly'
  },
  {
    id: 'news-12-4',
    topicId: '12',
    headline: 'Timothée Chalamet to Make Broadway Debut',
    summary: 'The film star announces his first stage role in an upcoming Broadway production of a classic play.',
    image: 'https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b',
    date: '2024-04-15',
    source: 'Playbill'
  },
  {
    id: 'news-12-5',
    topicId: '12',
    headline: 'Timothée Chalamet\'s Fashion Impact on Men\'s Style',
    summary: 'How the actor has influenced men\'s fashion with his distinctive red carpet and street style choices.',
    image: 'https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b',
    date: '2024-04-10',
    source: 'GQ Magazine'
  },

  // News for Dune: Part Two (id: 1)
  {
    id: 'news-1-1',
    topicId: '1',
    headline: '"Dune: Part Two" Shatters Box Office Expectations',
    summary: 'The sequel to Denis Villeneuve\'s sci-fi epic has exceeded all box office projections, becoming one of the highest-grossing films of the year.',
    image: 'https://images.unsplash.com/photo-1500375592092-40eb2168fd21',
    date: '2024-04-28',
    source: 'Hollywood Reporter'
  },
  {
    id: 'news-1-2',
    topicId: '1',
    headline: 'Villeneuve Confirms Plans for "Dune: Messiah"',
    summary: 'Director Denis Villeneuve has officially announced that he will direct the adaptation of Frank Herbert\'s "Dune: Messiah" as the trilogy\'s conclusion.',
    image: 'https://images.unsplash.com/photo-1500673922987-e212871fec22',
    date: '2024-04-25',
    source: 'Variety'
  },
  {
    id: 'news-1-3',
    topicId: '1',
    headline: 'The Practical Effects Behind "Dune: Part Two"',
    summary: 'A deep dive into the stunning practical effects that brought the world of Arrakis to life in the latest installment of the Dune franchise.',
    image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5',
    date: '2024-04-20',
    source: 'IndieWire'
  },
  {
    id: 'news-1-4',
    topicId: '1',
    headline: 'Hans Zimmer\'s Score for "Dune: Part Two" Wins Critical Acclaim',
    summary: 'The powerful score for Dune: Part Two is being hailed as one of composer Hans Zimmer\'s finest works, with critics praising its emotional depth.',
    image: 'https://images.unsplash.com/photo-1470813740244-df37b8c1edcb',
    date: '2024-04-15',
    source: 'Billboard'
  },
  {
    id: 'news-1-5',
    topicId: '1',
    headline: 'Austin Butler Discusses Transformation for Feyd-Rautha Role',
    summary: 'Actor Austin Butler reveals the intense physical and mental preparation he underwent to portray the villainous Harkonnen heir in the sci-fi epic.',
    image: 'https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b',
    date: '2024-04-12',
    source: 'Entertainment Weekly'
  },
  {
    id: 'news-1-6',
    topicId: '1',
    headline: 'Exclusive: Behind-the-Scenes Look at "Dune: Part Two" Costumes',
    summary: 'Costume designer Jacqueline West shares insights into the intricate designs that helped bring the diverse cultures of Dune\'s universe to life.',
    image: 'https://images.unsplash.com/photo-1500375592092-40eb2168fd21',
    date: '2024-04-10',
    source: 'Vogue'
  },
  {
    id: 'news-1-7',
    topicId: '1',
    headline: 'The Environmental Message of "Dune: Part Two"',
    summary: 'Critics and audiences are noting the powerful environmental themes in the latest Dune film and how they relate to our own climate crisis.',
    image: 'https://images.unsplash.com/photo-1500673922987-e212871fec22',
    date: '2024-04-08',
    source: 'National Geographic'
  },
  {
    id: 'news-1-8',
    topicId: '1',
    headline: 'Warner Bros. Hosts Global Fan Event for "Dune" Universe',
    summary: 'Warner Bros. has announced a worldwide fan celebration exploring the expanding universe of Dune across multiple platforms and media.',
    image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5',
    date: '2024-04-05',
    source: 'Deadline'
  },
  {
    id: 'news-1-9',
    topicId: '1',
    headline: 'How "Dune: Part Two" Stayed Faithful to Frank Herbert\'s Vision',
    summary: 'An analysis of how Villeneuve\'s adaptation honors the source material while making necessary adjustments for the cinematic medium.',
    image: 'https://images.unsplash.com/photo-1470813740244-df37b8c1edcb',
    date: '2024-04-02',
    source: 'Literary Hub'
  },
  {
    id: 'news-1-10',
    topicId: '1',
    headline: 'The Complex Politics of "Dune: Part Two" Explained',
    summary: 'A comprehensive breakdown of the intricate political landscape depicted in the Dune sequel and how it mirrors real-world power dynamics.',
    image: 'https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b',
    date: '2024-03-30',
    source: 'Political Science Quarterly'
  },
  
  // News for Stranger Things (id: 3)
  {
    id: 'news-3-1',
    topicId: '3',
    headline: '"Stranger Things" Final Season Begins Production',
    summary: 'Netflix has officially announced that the fifth and final season of the hit series has started filming, with the entire main cast returning.',
    image: 'https://images.unsplash.com/photo-1470813740244-df37b8c1edcb',
    date: '2024-04-27',
    source: 'Netflix Life'
  },
  {
    id: 'news-3-2',
    topicId: '3',
    headline: 'Duffer Brothers Tease "Emotional Conclusion" for Stranger Things',
    summary: 'The creators of the popular Netflix series have promised fans an emotionally satisfying ending that will honor the characters\' journeys.',
    image: 'https://images.unsplash.com/photo-1500673922987-e212871fec22',
    date: '2024-04-22',
    source: 'Entertainment Tonight'
  },
  {
    id: 'news-3-3',
    topicId: '3',
    headline: 'New Cast Members Join "Stranger Things" for Final Season',
    summary: 'Netflix has announced several high-profile additions to the cast for the show\'s final season, including [redacted for spoilers].',
    image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5',
    date: '2024-04-18',
    source: 'Variety'
  },
  {
    id: 'news-3-4',
    topicId: '3',
    headline: '"Stranger Things" Spin-off Officially in Development',
    summary: 'Following the conclusion of the main series, Netflix has greenlit a spin-off set in the same universe but with a completely new cast and setting.',
    image: 'https://images.unsplash.com/photo-1500375592092-40eb2168fd21',
    date: '2024-04-14',
    source: 'The Hollywood Reporter'
  },
  {
    id: 'news-3-5',
    topicId: '3',
    headline: 'The Cultural Impact of "Stranger Things" Examined',
    summary: 'A look at how the nostalgic sci-fi series has influenced fashion, music, and pop culture since its debut in 2016.',
    image: 'https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b',
    date: '2024-04-11',
    source: 'Rolling Stone'
  },
  {
    id: 'news-3-6',
    topicId: '3',
    headline: 'Millie Bobby Brown Reflects on Growing Up with Eleven',
    summary: 'As the series comes to a close, star Millie Bobby Brown shares her thoughts on portraying the iconic character of Eleven throughout her formative years.',
    image: 'https://images.unsplash.com/photo-1470813740244-df37b8c1edcb',
    date: '2024-04-09',
    source: 'Teen Vogue'
  },
  {
    id: 'news-3-7',
    topicId: '3',
    headline: 'Netflix Announces "Stranger Things Day" Global Event',
    summary: 'The streaming giant has revealed plans for an international celebration of the beloved series, featuring exclusive content and fan experiences.',
    image: 'https://images.unsplash.com/photo-1500673922987-e212871fec22',
    date: '2024-04-07',
    source: 'Netflix'
  },
  {
    id: 'news-3-8',
    topicId: '3',
    headline: 'The Evolution of "Stranger Things" Visual Effects',
    summary: 'A retrospective look at how the show\'s visual effects have advanced over its run, from the Demogorgon to the complex sequences of later seasons.',
    image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5',
    date: '2024-04-04',
    source: 'VFX Magazine'
  },
  {
    id: 'news-3-9',
    topicId: '3',
    headline: '"Stranger Things" Stars Launch Charitable Foundation',
    summary: 'The young stars of the hit show have joined forces to create a foundation supporting mental health initiatives for teens and young adults.',
    image: 'https://images.unsplash.com/photo-1500375592092-40eb2168fd21',
    date: '2024-04-01',
    source: 'People Magazine'
  },
  {
    id: 'news-3-10',
    topicId: '3',
    headline: 'The Music of "Stranger Things": Season 5 Playlist Teased',
    summary: 'Music supervisor Nora Felder has hinted at some of the iconic 80s tracks that will feature in the show\'s final season.',
    image: 'https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b',
    date: '2024-03-29',
    source: 'Billboard'
  }
];

export const videoCards: VideoCard[] = [
  // Videos for Dune: Part Two (id: 1)
  {
    id: 'video-1-1',
    topicId: '1',
    title: 'Dune: Part Two | Official Trailer',
    thumbnail: 'https://images.unsplash.com/photo-1500375592092-40eb2168fd21',
    channelName: 'Warner Bros. Pictures',
    views: '24M views',
    videoId: 'k0Ka-deab1s'
  },
  {
    id: 'video-1-2',
    topicId: '1',
    title: 'The Making of Dune: Part Two - Behind the Scenes',
    thumbnail: 'https://images.unsplash.com/photo-1500673922987-e212871fec22',
    channelName: 'Warner Bros. Pictures',
    views: '8.2M views',
    videoId: 'k0Ka-deab1s'
  },
  {
    id: 'video-1-3',
    topicId: '1',
    title: 'Dune: Part Two Cast Interviews - Timothée Chalamet & Zendaya',
    thumbnail: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5',
    channelName: 'Entertainment Tonight',
    views: '5.7M views',
    videoId: 'k0Ka-deab1s'
  },
  {
    id: 'video-1-4',
    topicId: '1',
    title: 'Dune Explained: Everything You Need to Know Before Part Two',
    thumbnail: 'https://images.unsplash.com/photo-1470813740244-df37b8c1edcb',
    channelName: 'FilmTheory',
    views: '7.1M views',
    videoId: 'k0Ka-deab1s'
  },
  {
    id: 'video-1-5',
    topicId: '1',
    title: 'Hans Zimmer - Dune: Part Two (Official Soundtrack)',
    thumbnail: 'https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b',
    channelName: 'WaterTower Music',
    views: '3.9M views',
    videoId: 'k0Ka-deab1s'
  },
  {
    id: 'video-1-6',
    topicId: '1',
    title: 'Austin Butler Transformation: Becoming Feyd-Rautha',
    thumbnail: 'https://images.unsplash.com/photo-1500375592092-40eb2168fd21',
    channelName: 'Vanity Fair',
    views: '4.6M views',
    videoId: 'k0Ka-deab1s'
  },
  {
    id: 'video-1-7',
    topicId: '1',
    title: 'The Visual Effects of Dune: Part Two - VFX Breakdown',
    thumbnail: 'https://images.unsplash.com/photo-1500673922987-e212871fec22',
    channelName: 'Corridor Crew',
    views: '6.2M views',
    videoId: 'k0Ka-deab1s'
  },
  {
    id: 'video-1-8',
    topicId: '1',
    title: 'Dune: Part Two - Critics Review Roundup',
    thumbnail: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5',
    channelName: 'FilmInk',
    views: '2.8M views',
    videoId: 'k0Ka-deab1s'
  },
  {
    id: 'video-1-9',
    topicId: '1',
    title: 'Dune: Part Two - Ending Explained',
    thumbnail: 'https://images.unsplash.com/photo-1470813740244-df37b8c1edcb',
    channelName: 'Heavy Spoilers',
    views: '5.4M views',
    videoId: 'k0Ka-deab1s'
  },
  {
    id: 'video-1-10',
    topicId: '1',
    title: 'The Philosophy of Dune - Explained',
    thumbnail: 'https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b',
    channelName: 'Wisecrack',
    views: '3.2M views',
    videoId: 'k0Ka-deab1s'
  },
  
  // Videos for Stranger Things (id: 3)
  {
    id: 'video-3-1',
    topicId: '3',
    title: 'Stranger Things 5 | Teaser Trailer',
    thumbnail: 'https://images.unsplash.com/photo-1470813740244-df37b8c1edcb',
    channelName: 'Netflix',
    views: '32M views',
    videoId: 'k0Ka-deab1s'
  },
  {
    id: 'video-3-2',
    topicId: '3',
    title: 'Stranger Things: The Journey So Far (Seasons 1-4 Recap)',
    thumbnail: 'https://images.unsplash.com/photo-1500673922987-e212871fec22',
    channelName: 'Netflix',
    views: '12.7M views',
    videoId: 'k0Ka-deab1s'
  },
  {
    id: 'video-3-3',
    topicId: '3',
    title: 'Cast of Stranger Things Answers Fan Questions',
    thumbnail: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5',
    channelName: 'Netflix',
    views: '8.3M views',
    videoId: 'k0Ka-deab1s'
  },
  {
    id: 'video-3-4',
    topicId: '3',
    title: 'The Evolution of Eleven: Millie Bobby Brown Through the Seasons',
    thumbnail: 'https://images.unsplash.com/photo-1500375592092-40eb2168fd21',
    channelName: 'Vanity Fair',
    views: '7.5M views',
    videoId: 'k0Ka-deab1s'
  },
  {
    id: 'video-3-5',
    topicId: '3',
    title: 'Stranger Things: All Upside Down Scenes Explained',
    thumbnail: 'https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b',
    channelName: 'Screen Culture',
    views: '6.9M views',
    videoId: 'k0Ka-deab1s'
  },
  {
    id: 'video-3-6',
    topicId: '3',
    title: 'Duffer Brothers Interview: Creating the Final Season',
    thumbnail: 'https://images.unsplash.com/photo-1470813740244-df37b8c1edcb',
    channelName: 'Entertainment Weekly',
    views: '4.2M views',
    videoId: 'k0Ka-deab1s'
  },
  {
    id: 'video-3-7',
    topicId: '3',
    title: 'Stranger Things: Every Season Ranked',
    thumbnail: 'https://images.unsplash.com/photo-1500673922987-e212871fec22',
    channelName: 'WatchMojo',
    views: '5.8M views',
    videoId: 'k0Ka-deab1s'
  },
  {
    id: 'video-3-8',
    topicId: '3',
    title: 'The Music of Stranger Things: Creating the Iconic Sound',
    thumbnail: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5',
    channelName: 'Netflix Film Club',
    views: '3.6M views',
    videoId: 'k0Ka-deab1s'
  },
  {
    id: 'video-3-9',
    topicId: '3',
    title: 'Stranger Things Fan Theories: What Will Happen in Season 5?',
    thumbnail: 'https://images.unsplash.com/photo-1500375592092-40eb2168fd21',
    channelName: 'New Rockstars',
    views: '4.9M views',
    videoId: 'k0Ka-deab1s'
  },
  {
    id: 'video-3-10',
    topicId: '3',
    title: 'Stranger Things: From Unknown Kids to Global Stars',
    thumbnail: 'https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b',
    channelName: 'The Hollywood Reporter',
    views: '5.3M views',
    videoId: 'k0Ka-deab1s'
  },
  // Videos for The Batman (id: 4)
{
  id: 'video-4-1',
  topicId: '4',
  title: 'The Batman | Official Trailer',
  thumbnail: 'https://images.unsplash.com/photo-1500673922987-e212871fec22',
  channelName: 'Warner Bros. Pictures',
  views: '18.5M views',
  videoId: 'k0Ka-deab1s'
},
{
  id: 'video-4-2',
  topicId: '4',
  title: 'The Batman: Behind the Cowl with Robert Pattinson',
  thumbnail: 'https://images.unsplash.com/photo-1500673922987-e212871fec22',
  channelName: 'DC',
  views: '7.4M views',
  videoId: 'k0Ka-deab1s'
},
{
  id: 'video-4-3',
  topicId: '4',
  title: 'The Batman: Cinematography Breakdown',
  thumbnail: 'https://images.unsplash.com/photo-1500673922987-e212871fec22',
  channelName: 'StudioBinder',
  views: '4.2M views',
  videoId: 'k0Ka-deab1s'
},
{
  id: 'video-4-4',
  topicId: '4',
  title: 'The Batman: Ending Explained',
  thumbnail: 'https://images.unsplash.com/photo-1500673922987-e212871fec22',
  channelName: 'Heavy Spoilers',
  views: '6.7M views',
  videoId: 'k0Ka-deab1s'
},
{
  id: 'video-4-5',
  topicId: '4',
  title: 'The Batman Sequel: Everything We Know So Far',
  thumbnail: 'https://images.unsplash.com/photo-1500673922987-e212871fec22',
  channelName: 'IGN',
  views: '5.1M views',
  videoId: 'k0Ka-deab1s'
},
// Videos for The Last of Us (id: 5)
{
  id: 'video-5-1',
  topicId: '5',
  title: 'The Last of Us Season 2 | Official Teaser',
  thumbnail: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5',
  channelName: 'HBO',
  views: '15.3M views',
  videoId: 'k0Ka-deab1s'
},
{
  id: 'video-5-2',
  topicId: '5',
  title: 'The Last of Us: From Game to Screen',
  thumbnail: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5',
  channelName: 'HBO',
  views: '8.9M views',
  videoId: 'k0Ka-deab1s'
},
{
  id: 'video-5-3',
  topicId: '5',
  title: 'Pedro Pascal and Bella Ramsey Interview: The Last of Us',
  thumbnail: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5',
  channelName: 'Entertainment Weekly',
  views: '6.7M views',
  videoId: 'k0Ka-deab1s'
},
{
  id: 'video-5-4',
  topicId: '5',
  title: 'The Last of Us: Season 1 Recap',
  thumbnail: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5',
  channelName: 'HBO',
  views: '7.2M views',
  videoId: 'k0Ka-deab1s'
},
{
  id: 'video-5-5',
  topicId: '5',
  title: 'The Last of Us: The Science Behind the Cordyceps Infection',
  thumbnail: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5',
  channelName: 'Nerdist',
  views: '4.8M views',
  videoId: 'k0Ka-deab1s'
},
// Videos for Zendaya (id: 2)
{
  id: 'video-2-1',
  topicId: '2',
  title: 'Zendaya\'s Journey: From Disney to Dune',
  thumbnail: 'https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b',
  channelName: 'Vanity Fair',
  views: '8.7M views',
  videoId: 'k0Ka-deab1s'
},
{
  id: 'video-2-2',
  topicId: '2',
  title: 'Zendaya\'s Emmy-Winning Performance in Euphoria',
  thumbnail: 'https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b',
  channelName: 'HBO',
  views: '6.3M views',
  videoId: 'k0Ka-deab1s'
},
{
  id: 'video-2-3',
  topicId: '2',
  title: 'Zendaya and Tom Holland: Hollywood\'s Power Couple',
  thumbnail: 'https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b',
  channelName: 'Entertainment Tonight',
  views: '12.1M views',
  videoId: 'k0Ka-deab1s'
},
{
  id: 'video-2-4',
  topicId: '2',
  title: 'The Fashion Evolution of Zendaya',
  thumbnail: 'https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b',
  channelName: 'Vogue',
  views: '5.8M views',
  videoId: 'k0Ka-deab1s'
},
{
  id: 'video-2-5',
  topicId: '2',
  title: 'Zendaya\'s Best Interview Moments',
  thumbnail: 'https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b',
  channelName: 'BuzzFeed Celeb',
  views: '7.2M views',
  videoId: 'k0Ka-deab1s'
}
];

export const getTopicById = (id: string): Topic | undefined => {
  return topics.find(topic => topic.id === id);
};

export const getNewsForTopic = (topicId: string): NewsCard[] => {
  return newsCards.filter(news => news.topicId === topicId);
};

export const getVideosForTopic = (topicId: string): VideoCard[] => {
  return videoCards.filter(video => video.topicId === topicId);
};

export const getRelatedTopics = (currentTopicId: string, count: number = 6): Topic[] => {
  const currentTopic = getTopicById(currentTopicId);
  if (!currentTopic) return [];
  
  // Get topics of the same type
  const sameTypeTopics = topics.filter(
    topic => topic.id !== currentTopicId && topic.type === currentTopic.type
  );
  
  // Get some topics of different types
  const otherTypeTopics = topics.filter(
    topic => topic.id !== currentTopicId && topic.type !== currentTopic.type
  );
  
  // Combine and shuffle
  const combined = [...sameTypeTopics, ...otherTypeTopics];
  const shuffled = combined.sort(() => 0.5 - Math.random());
  
  return shuffled.slice(0, count);
};
