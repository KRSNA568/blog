import { Suspense } from 'react';
import { useParams } from 'react-router-dom';
import { HeroSection } from '@/components/HeroSection';
import { BlogSidebar } from '@/components/BlogSidebar';
import { BlogDetail } from '@/components/BlogDetail';

export function HomePage() {
  // Get blog ID from URL if present (e.g., /blogs/1)
  const { id } = useParams<{ id: string }>();
  const blogId = id ? parseInt(id, 10) : undefined;

  return (
    <div>
      <HeroSection />
      
      <div className="container mx-auto px-4 lg:px-8 py-12">
        {/* Two-column layout on large screens, stacked on mobile */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Left sidebar with blog list */}
          <aside className="lg:col-span-4">
            <Suspense fallback={<div className="text-center p-4">Loading articles...</div>}>
              <BlogSidebar />
            </Suspense>
          </aside>

          {/* Right side with blog detail - shows selected or first blog */}
          <section className="lg:col-span-8">
            <Suspense fallback={<div className="text-center p-8">Loading article...</div>}>
              <BlogDetail blogId={blogId} />
            </Suspense>
          </section>
        </div>
      </div>
    </div>
  );
}
