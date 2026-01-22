import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Layout } from './components/Layout';
import { ScrollToTop } from './components/ScrollToTop';
import { HomePage } from './pages/HomePage';
import { CreateBlogPage } from './pages/CreateBlogPage';
import { NotFoundPage } from './pages/NotFoundPage';
import { usePageTracking } from './hooks/useAnalytics';

// Main content wrapper - I separated this so I could use the usePageTracking hook
// (hooks can't be used directly in the router setup)
function AppContent() {
  usePageTracking(); // tracks page views for analytics

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        {/* Using the same HomePage component for both / and /blogs/:id
            because the sidebar+detail layout works for both */}
        <Route path="blogs/:id" element={<HomePage />} />
        <Route path="create" element={<CreateBlogPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
}

function App() {
  return (
    <BrowserRouter>
      {/* ScrollToTop ensures page scrolls to top on route change */}
      <ScrollToTop />
      <AppContent />
    </BrowserRouter>
  );
}

export default App
