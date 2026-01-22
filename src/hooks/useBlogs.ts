import { useQuery } from '@tanstack/react-query';
import { fetchBlogs } from '@/api/blogs';
import type { BlogsResponse } from '@/types/blog';

// Custom hook for fetching all blogs
// Using TanStack Query here handles caching and refetching automatically
export function useBlogs() {
  return useQuery<BlogsResponse, Error>({
    queryKey: ['blogs'], // this key is used for caching
    queryFn: fetchBlogs,
  });
}
