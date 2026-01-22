/**
 * Blog data model matching the JSON Server schema
 */
export interface Blog {
  id: number;
  title: string;
  category: string[];
  description: string;
  date: string; // ISO-8601 date string
  coverImage: string;
  content: string;
}

/**
 * Form data for creating a new blog (without id, date auto-generated)
 */
export interface CreateBlogInput {
  title: string;
  category: string[];
  description: string;
  coverImage: string;
  content: string;
}

/**
 * API Response types
 */
export type BlogsResponse = Blog[];
export type BlogResponse = Blog;

/**
 * API Error type
 */
export interface ApiError {
  message: string;
  status?: number;
}
