import { useQuery } from '@tanstack/react-query';
import { fetchBlogById } from '@/api/blogs';
import type { BlogResponse } from '@/types/blog';

/**
 * Custom hook to fetch a single blog by ID using TanStack Query
 * @param id - Blog ID to fetch
 * @param enabled - Optional flag to enable/disable the query (default: true)
 * @returns Query result with blog data, loading, and error states
 */
export function useBlog(id: number, enabled: boolean = true) {
  return useQuery<BlogResponse, Error>({
    queryKey: ['blog', id],
    queryFn: () => fetchBlogById(id),
    enabled: enabled && id > 0, // Only fetch if enabled and valid ID
  });
}
