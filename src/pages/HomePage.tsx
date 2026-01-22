import { HeroSection } from '@/components/HeroSection';

export function HomePage() {
  return (
    <div>
      <HeroSection />
      
      <div className="container mx-auto px-4 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Sidebar - Blog List (will be implemented) */}
          <aside className="lg:col-span-4">
            <h2 className="text-heading-1 text-text-primary mb-6">Latest Articles</h2>
            <div className="bg-bg-secondary rounded-lg p-6">
              <p className="text-text-secondary">Blog list will appear here...</p>
            </div>
          </aside>

          {/* Main Content - Blog Detail (will be implemented) */}
          <section className="lg:col-span-8">
            <div className="bg-white rounded-lg">
              <p className="text-text-secondary p-8">
                Select an article from the sidebar to read the full content.
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
