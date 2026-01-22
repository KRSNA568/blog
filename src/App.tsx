import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Layout } from './components/Layout';
import { ScrollToTop } from './components/ScrollToTop';
import { HomePage } from './pages/HomePage';
import { CreateBlogPage } from './pages/CreateBlogPage';
import { NotFoundPage } from './pages/NotFoundPage';
import { usePageTracking } from './hooks/useAnalytics';

function AppContent() {
  usePageTracking();

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
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
      <ScrollToTop />
      <AppContent />
    </BrowserRouter>
  );
}

export default App
