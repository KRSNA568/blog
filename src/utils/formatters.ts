import { formatDistanceToNow, format } from 'date-fns';

// Convert ISO date to readable format like "Jan 15, 2026"
// I'm using date-fns because it's lighter than moment.js
export function formatDate(dateString: string): string {
  try {
    const date = new Date(dateString);
    return format(date, 'MMM dd, yyyy');
  } catch (error) {
    console.error('Error formatting date:', error);
    return 'Invalid date';
  }
}

// Show relative time like "2 days ago" - better UX for recent posts
export function formatRelativeDate(dateString: string): string {
  try {
    const date = new Date(dateString);
    return formatDistanceToNow(date, { addSuffix: true });
  } catch (error) {
    console.error('Error formatting relative date:', error);
    return 'Invalid date';
  }
}

/**
 * Calculate estimated reading time based on word count
 * Average reading speed: 200-250 words per minute
 * @param content - Blog content text
 * @returns Reading time in minutes
 */
export function calculateReadTime(content: string): number {
  const wordsPerMinute = 225;
  const words = content.trim().split(/\s+/).length;
  const minutes = Math.ceil(words / wordsPerMinute);
  return minutes;
}

/**
 * Format reading time for display
 * @param content - Blog content text
 * @returns Formatted string (e.g., "5 min read")
 */
export function formatReadTime(content: string): string {
  const minutes = calculateReadTime(content);
  return `${minutes} min read`;
}
