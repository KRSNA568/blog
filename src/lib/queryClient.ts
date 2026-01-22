import { QueryClient } from '@tanstack/react-query';

/**
 * Create and configure the QueryClient for TanStack Query
 * This client manages the server state cache and query behavior
 */
export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      // Data is considered fresh for 5 minutes
      staleTime: 5 * 60 * 1000, // 5 minutes
      // Cache data for 10 minutes after becoming stale
      gcTime: 10 * 60 * 1000, // 10 minutes (formerly cacheTime)
      // Retry failed queries 1 time before showing error
      retry: 1,
      // Refetch on window focus for real-time data
      refetchOnWindowFocus: true,
      // Don't refetch on mount if data is fresh
      refetchOnMount: false,
    },
    mutations: {
      // Retry failed mutations once
      retry: 1,
    },
  },
});
