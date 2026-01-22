import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';

export function Navbar() {
  // Track mobile menu state - needed for hamburger menu toggle
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // Close menu when user clicks a link (better UX on mobile)
  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center" onClick={closeMobileMenu}>
            <span className="text-2xl font-bold text-primary">CA MONK</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a
              href="#tools"
              className="text-text-secondary hover:text-primary transition-colors duration-200 font-medium focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded"
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
            onClick={toggleMobileMenu}
            className="md:hidden p-2 text-text-secondary hover:text-primary transition-colors focus:outline-none focus:ring-2 focus:ring-primary rounded"
            aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isMobileMenuOpen}
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200 animate-in slide-in-from-top duration-200">
            <div className="flex flex-col space-y-4">
              <a
                href="#tools"
                onClick={closeMobileMenu}
                className="text-text-secondary hover:text-primary transition-colors duration-200 font-medium px-2 py-2"
              >
                Tools
              </a>
              <a
                href="#practice"
                onClick={closeMobileMenu}
                className="text-text-secondary hover:text-primary transition-colors duration-200 font-medium px-2 py-2"
              >
                Practice
              </a>
              <a
                href="#events"
                onClick={closeMobileMenu}
                className="text-text-secondary hover:text-primary transition-colors duration-200 font-medium px-2 py-2"
              >
                Events
              </a>
              <a
                href="#jobs"
                onClick={closeMobileMenu}
                className="text-text-secondary hover:text-primary transition-colors duration-200 font-medium px-2 py-2"
              >
                Job Board
              </a>
              <a
                href="#points"
                onClick={closeMobileMenu}
                className="text-text-secondary hover:text-primary transition-colors duration-200 font-medium px-2 py-2"
              >
                Points
              </a>
              <Link
                to="/create"
                onClick={closeMobileMenu}
                className="px-6 py-3 bg-primary text-white rounded-md hover:bg-primary/90 transition-colors duration-200 font-medium text-center"
              >
                Create Post
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
