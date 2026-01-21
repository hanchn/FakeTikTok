export type MediaType = 'video' | 'image' | 'survey' | 'ad';

export interface User {
  id: string;
  username: string;
  avatar: string;
  followers: number;
  following: number;
  likes: number;
}

export interface Comment {
  id: string;
  userId: string;
  username: string;
  content: string;
  createdAt: string;
}

export interface BaseFeedItem {
  id: string;
  type: MediaType;
  user: User;
  description: string;
  likesCount: number;
  commentsCount: number;
  sharesCount: number;
  isLiked?: boolean;
  isBookmarked?: boolean;
}

export interface VideoFeedItem extends BaseFeedItem {
  type: 'video';
  videoUrl: string;
  posterUrl: string;
}

export interface ImageFeedItem extends BaseFeedItem {
  type: 'image';
  imageUrls: string[];
}

export interface SurveyOption {
  id: string;
  text: string;
  votes: number;
}

export interface SurveyFeedItem extends BaseFeedItem {
  type: 'survey';
  question: string;
  options: SurveyOption[];
}

export interface AdFeedItem extends BaseFeedItem {
  type: 'ad';
  imageUrl: string;
  linkUrl: string;
  ctaText: string;
}

export type FeedItem = VideoFeedItem | ImageFeedItem | SurveyFeedItem | AdFeedItem;
