import { useQuery } from '@tanstack/react-query';
import { fetchBlogs } from '@/api/blogs';
import type { BlogsResponse } from '@/types/blog';

/**
 * Custom hook to fetch all blogs using TanStack Query
 * @returns Query result with blogs data, loading, and error states
 */
export function useBlogs() {
  return useQuery<BlogsResponse, Error>({
    queryKey: ['blogs'],
    queryFn: fetchBlogs,
  });
}
