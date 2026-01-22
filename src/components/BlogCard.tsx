import { useNavigate, useLocation } from 'react-router-dom';
import type { Blog } from '@/types/blog';
import { formatRelativeDate } from '@/utils/formatters';
import { FileText } from 'lucide-react';

interface BlogCardProps {
  blog: Blog;
}

export function BlogCard({ blog }: BlogCardProps) {
  const navigate = useNavigate();
  const location = useLocation();
  
  // Check if this blog is currently active
  const isActive = location.pathname === `/blogs/${blog.id}`;

  const handleClick = () => {
    navigate(`/blogs/${blog.id}`);
  };

  return (
    <article
      onClick={handleClick}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          handleClick();
        }
      }}
      tabIndex={0}
      role="button"
      aria-label={`Read article: ${blog.title}`}
      className={`
        cursor-pointer rounded-lg p-4 transition-all duration-200
        hover:bg-bg-secondary hover:shadow-md
        focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2
        ${isActive ? 'bg-bg-secondary border-l-4 border-primary' : 'border-l-4 border-transparent'}
      `}
    >
      {/* Category and Date Header */}
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center gap-2">
          <FileText className="w-4 h-4 text-primary" />
          <span className="text-tiny font-medium text-primary">
            {blog.category[0]}
          </span>
        </div>
        <span className="text-tiny text-text-secondary">
          {formatRelativeDate(blog.date)}
        </span>
      </div>

      {/* Title */}
      <h3 className="text-base font-semibold text-text-primary mb-2 line-clamp-2">
        {blog.title}
      </h3>

      {/* Description */}
      <p className="text-small text-text-secondary mb-3 line-clamp-2">
        {blog.description}
      </p>

      {/* Category Tags */}
      <div className="flex flex-wrap gap-1.5">
        {blog.category.map((cat) => (
          <span
            key={cat}
            className="text-tiny px-2 py-1 rounded bg-accent-blue text-primary font-medium"
          >
            {cat}
          </span>
        ))}
      </div>
    </article>
  );
}
