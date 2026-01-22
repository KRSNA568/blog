import { QueryClient } from '@tanstack/react-query';

// Setting up TanStack Query client with caching configuration
// I increased staleTime from the default 0 to reduce unnecessary refetches
export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      // Data stays fresh for 10 min - means it won't refetch during this time
      staleTime: 10 * 60 * 1000,
      // Keep cached data for 15 min after it becomes stale (in case user navigates back)
      gcTime: 15 * 60 * 1000, // this was called cacheTime in older versions
      // Only retry once on failure - don't want to spam the server
      retry: 1,
      // Turned off refetch on window focus - it was causing unnecessary API calls
      refetchOnWindowFocus: false,
      refetchOnMount: false,
    },
    mutations: {
      retry: 1,
    },
  },
});
