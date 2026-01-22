import { useMutation, useQueryClient } from '@tanstack/react-query';
import { createBlog } from '@/api/blogs';
import type { CreateBlogInput, BlogResponse } from '@/types/blog';

/**
 * Custom hook to create a new blog using TanStack Query mutation
 * Automatically invalidates the blogs query on success to trigger refetch
 * @returns Mutation object with mutate function, loading, and error states
 */
export function useCreateBlog() {
  const queryClient = useQueryClient();

  return useMutation<BlogResponse, Error, CreateBlogInput>({
    mutationFn: createBlog,
    onSuccess: () => {
      // Invalidate and refetch blogs query after successful creation
      queryClient.invalidateQueries({ queryKey: ['blogs'] });
    },
  });
}
