import { QueryClient } from '@tanstack/react-query';

/**
 * Create and configure the QueryClient for TanStack Query
 * This client manages the server state cache and query behavior
 */
export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      // Data is considered fresh for 10 minutes (increased for better performance)
      staleTime: 10 * 60 * 1000, // 10 minutes
      // Cache data for 15 minutes after becoming stale
      gcTime: 15 * 60 * 1000, // 15 minutes (formerly cacheTime)
      // Retry failed queries 1 time before showing error
      retry: 1,
      // Disable refetch on window focus for better performance
      refetchOnWindowFocus: false,
      // Don't refetch on mount if data is fresh
      refetchOnMount: false,
    },
    mutations: {
      // Retry failed mutations once
      retry: 1,
    },
  },
});
