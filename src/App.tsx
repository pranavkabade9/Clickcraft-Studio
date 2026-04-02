import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { Navbar, Footer } from '@/src/components/Layout';
import HomePage from '@/src/pages/HomePage';
import BlogPage from '@/src/pages/BlogPage';
import BlogPostPage from '@/src/pages/BlogPostPage';
import LandingPage from '@/src/pages/LandingPage';
import StrategyPage from '@/src/pages/StrategyPage';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white font-sans text-black selection:bg-[#E60023] selection:text-white">
        <ScrollToTop />
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/blog/:slug" element={<BlogPostPage />} />
            <Route path="/starter-kit" element={<LandingPage />} />
            <Route path="/strategy" element={<StrategyPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}
