import { FeedItem, User } from '../types';

const currentUser: User = {
  id: 'u1',
  username: 'current_user',
  avatar: 'https://api.dicebear.com/7.x/avataaars/png?seed=Felix',
  followers: 120,
  following: 50,
  likes: 300,
};

const users: User[] = [
  {
    id: 'u2',
    username: 'travel_lover',
    avatar: 'https://api.dicebear.com/7.x/avataaars/png?seed=Aneka',
    followers: 10500,
    following: 200,
    likes: 50000,
  },
  {
    id: 'u3',
    username: 'tech_guru',
    avatar: 'https://api.dicebear.com/7.x/avataaars/png?seed=John',
    followers: 8900,
    following: 10,
    likes: 23000,
  },
];

export const MOCK_FEED: FeedItem[] = [
  {
    id: '1',
    type: 'video',
    user: users[0],
    description: 'Beautiful sunset view! 🌅 #travel #sunset',
    videoUrl: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4',
    posterUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/ForBiggerBlazes.jpg',
    likesCount: 1200,
    commentsCount: 45,
    sharesCount: 12,
  },
  {
    id: '2',
    type: 'image',
    user: users[1],
    description: 'Check out my new setup! 💻',
    imageUrls: [
      'https://images.unsplash.com/photo-1498050108023-c5249f4df085',
      'https://images.unsplash.com/photo-1504639725590-34d0984388bd',
    ],
    likesCount: 850,
    commentsCount: 20,
    sharesCount: 5,
  },
  {
    id: '3',
    type: 'survey',
    user: users[0],
    description: 'Which destination should I visit next?',
    question: 'Next Trip?',
    options: [
      { id: 'opt1', text: 'Japan 🇯🇵', votes: 450 },
      { id: 'opt2', text: 'Iceland 🇮🇸', votes: 320 },
    ],
    likesCount: 200,
    commentsCount: 100,
    sharesCount: 2,
  },
  {
    id: '4',
    type: 'video',
    user: users[1],
    description: 'Big Buck Bunny clip',
    videoUrl: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
    posterUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/BigBuckBunny.jpg',
    likesCount: 5000,
    commentsCount: 300,
    sharesCount: 150,
  },
  {
    id: '5',
    type: 'ad',
    user: {
      id: 'ad1',
      username: 'Cool Brand',
      avatar: 'https://api.dicebear.com/7.x/identicon/png?seed=Brand',
      followers: 0,
      following: 0,
      likes: 0,
    },
    description: 'Best product ever! Buy now.',
    imageUrl: 'https://images.unsplash.com/photo-1556742049-0cfed4f7a07d',
    linkUrl: 'https://example.com',
    ctaText: 'Shop Now',
    likesCount: 50,
    commentsCount: 0,
    sharesCount: 0,
  },
];

export const CURRENT_USER = currentUser;
