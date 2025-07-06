import React, { useEffect, lazy, Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// Fix import order - move useInView import up
import { useInView } from "react-intersection-observer";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Cursor from "./components/Cursor";
import "./styles/blog.css";

// Lazy load components
const Hero = lazy(() => import("./components/Hero"));
const About = lazy(() => import("./components/About"));
const Projects = lazy(() => import("./components/Projects"));
const Experience = lazy(() => import("./components/Experience"));
const Contact = lazy(() => import("./components/Contact"));
const Blog = lazy(() => import("./components/Blog"));
const BlogPost = lazy(() => import("./components/BlogPost"));
const MVPServices = lazy(() => import("./components/MVPServices"));
const Consultation = lazy(() => import("./components/Consultation"));
// import CommunityPantry from './components/CommunityPantry'; // Remove direct import if only used as a route
const CommunityPantryPage = lazy(() => import("./components/CommunityPantry")); // Lazy load it
const MaywDaw = lazy(() => import("./components/MaywDaw"));
import Brands from "./components/Brands";
const NotFound = lazy(() => import("./components/NotFound"));

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
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
      anchor.addEventListener("click", (e) => {
        e.preventDefault();
        const targetId = (e.target as HTMLAnchorElement).getAttribute("href");
        if (targetId) {
          const targetElement = document.querySelector(targetId);
          if (targetElement) {
            targetElement.scrollIntoView({
              behavior: "smooth",
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
    rootMargin: "200px 0px",
    threshold: 0.1,
  });

  return (
    <div className="relative">
      <div className="noise-overlay"></div>
      <Cursor />
      <Navbar />
      <main>
        <ErrorBoundary
          fallback={
            <div className="text-red-500 p-8">Error loading content</div>
          }
        >
          <Suspense fallback={<Loading />}>
            <Hero />
            <About />
            <Projects />
            {/* Properly implement lazy loading for Experience */}
            <div ref={ref} className="min-h-[100vh]">
              {inView && <Experience />}
            </div>
            <Brands />
            <Contact />
          </Suspense>
        </ErrorBoundary>
      </main>
      <Footer />
    </div>
  );
}

// Add this import at the top of the file with your other imports

function App() {
  // Easter Egg: Konami Code
  useEffect(() => {
    const konamiCode = [
      "ArrowUp",
      "ArrowUp",
      "ArrowDown",
      "ArrowDown",
      "ArrowLeft",
      "ArrowRight",
      "ArrowLeft",
      "ArrowRight",
      "b",
      "a",
    ];
    let konamiIndex = 0;
    function onKeyDown(e: KeyboardEvent) {
      if (e.key === konamiCode[konamiIndex]) {
        konamiIndex++;
        if (konamiIndex === konamiCode.length) {
          document.body.classList.toggle("konami-dark");
          alert("🎉 Konami Code Activated! Enjoy the secret dark mode!");
          konamiIndex = 0;
        }
      } else {
        konamiIndex = 0;
      }
    }
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);
  useEffect(() => {
    const rainCode = ["r", "a", "i", "n"];
    let rainIndex = 0;

    function createEmojiRain() {
      const emojis = ["🍕", "🌱", "💻", "🎉", "🚀"];
      for (let i = 0; i < 40; i++) {
        const emoji = document.createElement("div");
        emoji.textContent = emojis[Math.floor(Math.random() * emojis.length)];
        emoji.style.position = "fixed";
        emoji.style.left = `${Math.random() * 100}vw`;
        emoji.style.top = `-2em`;
        emoji.style.fontSize = `${1.5 + Math.random()}em`;
        emoji.style.opacity = "1";
        emoji.style.transform = `rotate(${Math.random() * 360}deg)`;
        emoji.style.pointerEvents = "none";
        emoji.style.zIndex = "9999";

        document.body.appendChild(emoji);

        let top = -32;
        let rotation = Math.random() * 360;
        const fallSpeed = 2 + Math.random() * 3;
        const rotateSpeed = 1 + Math.random();

        function animate() {
          top += fallSpeed;
          rotation += rotateSpeed;
          emoji.style.top = `${top}px`;
          emoji.style.transform = `rotate(${rotation}deg)`;
          emoji.style.opacity = `${Math.max(0, 1 - top / window.innerHeight)}`;

          if (top < window.innerHeight) {
            requestAnimationFrame(animate);
          } else {
            emoji.remove();
          }
        }

        requestAnimationFrame(animate);
      }
    }

    function onKeyDown(e: KeyboardEvent) {
      if (e.key.toLowerCase() === rainCode[rainIndex]) {
        rainIndex++;
        if (rainIndex === rainCode.length) {
          createEmojiRain();
          rainIndex = 0;
        }
      } else {
        rainIndex = 0;
      }
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  return (
    <Router>
      <ErrorBoundary
        fallback={
          <div className="text-red-500 p-8">App Error - Please refresh</div>
        }
      >
        <Suspense fallback={<Loading />}>
          <Routes>
            <Route path="" element={<HomePage />} />
            <Route path="blog" element={<Blog />} />
            <Route path="blog/:slug" element={<BlogPost />} />
            <Route path="mvp-services" element={<MVPServices />} />
            <Route path="consultation" element={<Consultation />} />
            <Route path="community-pantry" element={<CommunityPantryPage />} />
            <Route path="may-w-daw" element={<MaywDaw />} />
            {/* Add this catch-all route at the end */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </ErrorBoundary>
    </Router>
  );
}

export default App;
