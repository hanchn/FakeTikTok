import { create } from 'zustand';

interface AppState {
  likedPosts: string[];
  bookmarkedPosts: string[];
  toggleLike: (postId: string) => void;
  toggleBookmark: (postId: string) => void;
  isLiked: (postId: string) => boolean;
  isBookmarked: (postId: string) => boolean;
}

export const useStore = create<AppState>((set, get) => ({
  likedPosts: [],
  bookmarkedPosts: [],
  toggleLike: (postId) => set((state) => {
    const isLiked = state.likedPosts.includes(postId);
    return {
      likedPosts: isLiked
        ? state.likedPosts.filter((id) => id !== postId)
        : [...state.likedPosts, postId],
    };
  }),
  toggleBookmark: (postId) => set((state) => {
    const isBookmarked = state.bookmarkedPosts.includes(postId);
    return {
      bookmarkedPosts: isBookmarked
        ? state.bookmarkedPosts.filter((id) => id !== postId)
        : [...state.bookmarkedPosts, postId],
    };
  }),
  isLiked: (postId) => get().likedPosts.includes(postId),
  isBookmarked: (postId) => get().bookmarkedPosts.includes(postId),
}));
