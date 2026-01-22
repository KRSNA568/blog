import { Link } from 'react-router-dom';
import { FileQuestion } from 'lucide-react';

export function NotFoundPage() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center px-4">
      <div className="max-w-md w-full text-center">
        <div className="flex justify-center mb-6">
          <div className="w-20 h-20 bg-accent-blue rounded-full flex items-center justify-center">
            <FileQuestion className="w-10 h-10 text-primary" />
          </div>
        </div>
        
        <h1 className="text-display-1 text-text-primary mb-3">
          Page Not Found
        </h1>
        
        <p className="text-body text-text-secondary mb-8">
          Sorry, the page you're looking for doesn't exist or has been moved.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/"
            className="px-6 py-3 bg-primary text-white rounded-lg font-medium hover:bg-primary/90 transition-colors"
          >
            Go to Homepage
          </Link>
          <Link
            to="/create"
            className="px-6 py-3 bg-gray-100 text-text-secondary rounded-lg font-medium hover:bg-gray-200 transition-colors"
          >
            Create Article
          </Link>
        </div>
      </div>
    </div>
  );
}
