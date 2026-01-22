import { useBlogs } from '@/hooks/useBlogs';
import { BlogCard } from './BlogCard';
import { BlogCardSkeleton } from './BlogCardSkeleton';
import { AlertCircle } from 'lucide-react';

export function BlogSidebar() {
  const { data: blogs, isLoading, error } = useBlogs();

  return (
    <aside className="lg:col-span-4">
      <div className="sticky top-20">
        <h2 className="text-heading-1 text-text-primary mb-6">Latest Articles</h2>
        
        {/* Scrollable container for blog cards - limited height to keep it in viewport */}
        <div className="bg-white rounded-lg border border-gray-200 max-h-[calc(100vh-200px)] overflow-y-auto">
          {/* Show skeleton loaders while fetching data */}
          {isLoading && (
            <div className="divide-y divide-gray-100">
              {Array.from({ length: 5 }).map((_, i) => (
                <BlogCardSkeleton key={i} />
              ))}
            </div>
          )}

          {/* Error State */}
          {error && (
            <div className="p-6 text-center">
              <AlertCircle className="w-12 h-12 text-red-500 mx-auto mb-3" />
              <p className="text-text-secondary mb-2">Failed to load articles</p>
              <p className="text-small text-red-600">{error.message}</p>
            </div>
          )}

          {/* Empty State */}
          {!isLoading && !error && blogs && blogs.length === 0 && (
            <div className="p-8 text-center">
              <p className="text-text-secondary mb-2">No articles available</p>
              <p className="text-small text-text-secondary">
                Check back later for new content
              </p>
            </div>
          )}

          {/* Blog List */}
          {blogs && blogs.length > 0 && (
            <div className="divide-y divide-gray-100">
              {blogs.map((blog) => (
                <BlogCard key={blog.id} blog={blog} />
              ))}
            </div>
          )}
        </div>

        {/* Article Count */}
        {blogs && blogs.length > 0 && (
          <p className="text-small text-text-secondary mt-3 text-center">
            {blogs.length} {blogs.length === 1 ? 'article' : 'articles'} available
          </p>
        )}
      </div>
    </aside>
  );
}
