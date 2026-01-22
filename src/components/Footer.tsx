import { Link } from 'react-router-dom';

export function Footer() {
  return (
    <footer className="bg-footer-dark text-white mt-auto">
      <div className="container mx-auto px-4 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand/About */}
          <div>
            <h3 className="text-xl font-bold mb-4">CA MONK</h3>
            <p className="text-sm text-gray-300 leading-relaxed mb-4">
              Empowering Chartered Accountants with insights, tools, and knowledge 
              to excel in the modern financial landscape.
            </p>
            <p className="text-xs text-gray-400">
              © 2026 CA Monk. All rights reserved.
            </p>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Resources</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/blogs" className="text-sm text-gray-300 hover:text-white transition-colors">
                  Blog Articles
                </Link>
              </li>
              <li>
                <a href="#guides" className="text-sm text-gray-300 hover:text-white transition-colors">
                  Study Guides
                </a>
              </li>
              <li>
                <a href="#webinars" className="text-sm text-gray-300 hover:text-white transition-colors">
                  Webinars
                </a>
              </li>
              <li>
                <a href="#tools" className="text-sm text-gray-300 hover:text-white transition-colors">
                  Tools & Calculators
                </a>
              </li>
            </ul>
          </div>

          {/* Platform */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Platform</h4>
            <ul className="space-y-2">
              <li>
                <a href="#about" className="text-sm text-gray-300 hover:text-white transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#careers" className="text-sm text-gray-300 hover:text-white transition-colors">
                  Careers
                </a>
              </li>
              <li>
                <a href="#contact" className="text-sm text-gray-300 hover:text-white transition-colors">
                  Contact
                </a>
              </li>
              <li>
                <a href="#community" className="text-sm text-gray-300 hover:text-white transition-colors">
                  Community
                </a>
              </li>
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Connect</h4>
            <ul className="space-y-2 mb-4">
              <li>
                <a href="#linkedin" className="text-sm text-gray-300 hover:text-white transition-colors">
                  LinkedIn
                </a>
              </li>
              <li>
                <a href="#twitter" className="text-sm text-gray-300 hover:text-white transition-colors">
                  Twitter
                </a>
              </li>
              <li>
                <a href="#facebook" className="text-sm text-gray-300 hover:text-white transition-colors">
                  Facebook
                </a>
              </li>
              <li>
                <a href="#instagram" className="text-sm text-gray-300 hover:text-white transition-colors">
                  Instagram
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Legal Strip */}
        <div className="border-t border-gray-700 mt-8 pt-6 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
          <p>Designed for Chartered Accountants by CA Professionals</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#privacy" className="hover:text-white transition-colors">
              Privacy Policy
            </a>
            <a href="#terms" className="hover:text-white transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
