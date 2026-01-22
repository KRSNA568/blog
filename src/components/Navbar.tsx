import { Link } from 'react-router-dom';

export function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <span className="text-2xl font-bold text-primary">CA MONK</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a
              href="#tools"
              className="text-text-secondary hover:text-primary transition-colors duration-200 font-medium"
            >
              Tools
            </a>
            <a
              href="#practice"
              className="text-text-secondary hover:text-primary transition-colors duration-200 font-medium"
            >
              Practice
            </a>
            <a
              href="#events"
              className="text-text-secondary hover:text-primary transition-colors duration-200 font-medium"
            >
              Events
            </a>
            <a
              href="#jobs"
              className="text-text-secondary hover:text-primary transition-colors duration-200 font-medium"
            >
              Job Board
            </a>
            <a
              href="#points"
              className="text-text-secondary hover:text-primary transition-colors duration-200 font-medium"
            >
              Points
            </a>

            {/* Profile CTA */}
            <Link
              to="/create"
              className="px-6 py-2 bg-primary text-white rounded-md hover:bg-primary/90 transition-colors duration-200 font-medium"
            >
              Create Post
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-text-secondary hover:text-primary"
            aria-label="Open menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
}
