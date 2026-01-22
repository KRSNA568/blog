import { useParams } from 'react-router-dom';
import { HeroSection } from '@/components/HeroSection';
import { BlogSidebar } from '@/components/BlogSidebar';
import { BlogDetail } from '@/components/BlogDetail';

export function HomePage() {
  const { id } = useParams<{ id: string }>();
  const blogId = id ? parseInt(id, 10) : undefined;

  return (
    <div>
      <HeroSection />
      
      <div className="container mx-auto px-4 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Sidebar - Blog List */}
          <aside className="lg:col-span-4">
            <BlogSidebar />
          </aside>

          {/* Main Content - Blog Detail */}
          <section className="lg:col-span-8">
            <BlogDetail blogId={blogId} />
          </section>
        </div>
      </div>
    </div>
  );
}
