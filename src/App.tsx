import React, { useEffect, lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// Fix import order - move useInView import up
import { useInView } from 'react-intersection-observer';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Cursor from './components/Cursor';

// Lazy load components
const Hero = lazy(() => import('./components/Hero'));
const About = lazy(() => import('./components/About'));
const Projects = lazy(() => import('./components/Projects'));
const Experience = lazy(() => import('./components/Experience'));
const Contact = lazy(() => import('./components/Contact'));
const Blog = lazy(() => import('./components/Blog'));
const BlogPost = lazy(() => import('./components/BlogPost'));

// Loading component
const Loading = () => (
  <div className="flex items-center justify-center min-h-screen">
    <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary-500"></div>
  </div>
);

// Add error boundary component
// Fix the ErrorBoundary component type definition
class ErrorBoundary extends React.Component<
  { fallback: React.ReactNode; children?: React.ReactNode },
  { hasError: boolean }
> {
  state = { hasError: false };

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error: Error, info: React.ErrorInfo) {
    console.error("App Error:", error, info);
  }

  render() {
    if (this.state.hasError) {
      return this.props.fallback;
    }
    return this.props.children;
  }
}

function HomePage() {
  useEffect(() => {
    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = (e.target as HTMLAnchorElement).getAttribute('href');
        if (targetId) {
          const targetElement = document.querySelector(targetId);
          if (targetElement) {
            targetElement.scrollIntoView({
              behavior: 'smooth'
            });
          }
        }
      });
    });
  }, []);

  // Add intersection observer for Experience component
  // Fix intersection observer usage
  const { ref, inView } = useInView({
    triggerOnce: true,
    rootMargin: '200px 0px',
    threshold: 0.1,
  });

  return (
    <div className="relative">
      <div className="noise-overlay"></div>
      <Cursor />
      <Navbar />
      <main>
        <ErrorBoundary fallback={<div className="text-red-500 p-8">Error loading content</div>}>
          <Suspense fallback={<Loading />}>
            <Hero />
            <About />
            <Projects />
            {/* Properly implement lazy loading for Experience */}
            <div ref={ref} className="min-h-[100vh]">
              {inView && <Experience />}
            </div>
            <Contact />
          </Suspense>
        </ErrorBoundary>
      </main>
      <Footer />
    </div>
  );
}

function App() {
  return (
    <Router>
      <ErrorBoundary fallback={<div className="text-red-500 p-8">App Error - Please refresh</div>}>
        <Suspense fallback={<Loading />}>
          <Routes>
            <Route path="" element={<HomePage />} />
            <Route path="blog" element={<Blog />} />
            <Route path="blog/:slug" element={<BlogPost />} />
          </Routes>
        </Suspense>
      </ErrorBoundary>
    </Router>
  );
}

export default App;