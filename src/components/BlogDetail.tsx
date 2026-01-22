import { useBlog } from '@/hooks/useBlog';
import { formatDate, formatReadTime } from '@/utils/formatters';
import { Calendar, Clock, Share2, AlertCircle } from 'lucide-react';
import { BlogDetailSkeleton } from '@/components/BlogDetailSkeleton';
import { AuthorAttribution } from '@/components/AuthorAttribution';

interface BlogDetailProps {
  blogId?: number;
}

export function BlogDetail({ blogId }: BlogDetailProps) {
  const { data: blog, isLoading, error } = useBlog(blogId);

  // Loading State
  if (isLoading) {
    return <BlogDetailSkeleton />;
  }

  // Error State
  if (error) {
    return (
      <div className="bg-white rounded-lg p-8 text-center">
        <AlertCircle className="w-16 h-16 text-red-500 mx-auto mb-4" />
        <h3 className="text-heading-2 text-text-primary mb-2">Failed to Load Article</h3>
        <p className="text-body text-text-secondary mb-4">{error.message}</p>
        <button
          onClick={() => window.location.reload()}
          className="px-6 py-2 bg-primary text-white rounded-md hover:bg-primary/90 transition-colors"
        >
          Try Again
        </button>
      </div>
    );
  }

  // No blog selected
  if (!blog) {
    return (
      <div className="bg-white rounded-lg p-12 text-center">
        <div className="max-w-md mx-auto">
          <div className="w-20 h-20 bg-bg-secondary rounded-full mx-auto mb-4 flex items-center justify-center">
            <FileText className="w-10 h-10 text-text-secondary" />
          </div>
          <h3 className="text-heading-2 text-text-primary mb-2">Select an Article</h3>
          <p className="text-body text-text-secondary">
            Choose an article from the sidebar to read the full content
          </p>
        </div>
      </div>
    );
  }

  const readTime = formatReadTime(blog.content);

  return (
    <article className="bg-white rounded-lg overflow-hidden">
      {/* Cover Image */}
      <div className="relative w-full aspect-video overflow-hidden bg-gray-200">
        <img
          src={blog.coverImage}
          alt={blog.title}
          className="w-full h-full object-cover"
          loading="lazy"
        />
      </div>

      {/* Article Content */}
      <div className="p-8 md:p-12">
        {/* Category Badge */}
        <div className="flex items-center gap-2 mb-4">
          <span className="inline-block px-3 py-1 text-small font-semibold text-primary bg-accent-blue rounded">
            {blog.category[0]}
          </span>
          {blog.category.length > 1 && (
            <span className="text-small text-text-secondary">
              +{blog.category.length - 1} more
            </span>
          )}
        </div>

        {/* Title */}
        <h1 className="text-display-2 md:text-display-1 font-bold text-text-primary mb-6">
          {blog.title}
        </h1>

        {/* Metadata Bar */}
        <div className="flex flex-wrap items-center gap-4 md:gap-6 mb-8 pb-6 border-b border-gray-200">
          <div className="flex items-center gap-2 text-small text-text-secondary">
            <Calendar className="w-4 h-4" />
            <span>{formatDate(blog.date)}</span>
          </div>
          <div className="flex items-center gap-2 text-small text-text-secondary">
            <Clock className="w-4 h-4" />
            <span>{readTime}</span>
          </div>
          <div className="flex items-center gap-2 text-small text-text-secondary">
            {blog.category.map((cat, index) => (
              <span key={cat}>
                {cat}
                {index < blog.category.length - 1 && ' • '}
              </span>
            ))}
          </div>
          <button
            onClick={() => {
              if (navigator.share) {
                navigator.share({
                  title: blog.title,
                  text: blog.description,
                  url: window.location.href,
                });
              } else {
                navigator.clipboard.writeText(window.location.href);
                alert('Link copied to clipboard!');
              }
            }}
            className="ml-auto flex items-center gap-2 px-4 py-2 bg-primary text-white rounded-md hover:bg-primary/90 transition-colors text-small font-medium"
          >
            <Share2 className="w-4 h-4" />
            Share Article
          </button>
        </div>

        {/* Article Content */}
        <div className="prose prose-lg max-w-none">
          {blog.content.split('\n\n').map((paragraph, index) => {
            // Check if paragraph looks like a heading (starts with specific patterns)
            if (paragraph.trim().endsWith(':') && paragraph.length < 100) {
              return (
                <h2 key={index} className="text-heading-1 font-semibold text-text-primary mt-8 mb-4">
                  {paragraph.trim()}
                </h2>
              );
            }
            
            // Check for blockquote/callout patterns
            if (paragraph.trim().startsWith('>') || paragraph.includes('Important:') || paragraph.includes('Note:')) {
              return (
                <blockquote key={index} className="border-l-4 border-primary bg-accent-blue p-4 my-6 rounded-r">
                  <p className="text-body text-text-primary m-0">
                    {paragraph.replace(/^>\s*/, '').trim()}
                  </p>
                </blockquote>
              );
            }

            return (
              <p key={index} className="text-body text-text-primary leading-relaxed mb-4">
                {paragraph}
              </p>
            );
          })}
        </div>

        {/* Author Attribution */}
        <div className="mt-12 pt-8 border-t border-gray-200">
          <AuthorAttribution />
        </div>
      </div>
    </article>
  );
}

// Default export for FileText icon
import { FileText } from 'lucide-react';
