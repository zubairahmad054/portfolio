import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Navigation from '../components/Navigation';
import ContactSection from '../components/ContactSection';
import Footer from '../components/Footer';
import ThemeSwitcher from '../components/ThemeSwitcher';
import { useScroll } from '../hooks/useScroll';

interface MainLayoutProps {
  children: React.ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  const { showScrollTop, scrollToTop } = useScroll();

  return (
    <div className="min-h-screen bg-primary text-neutral-light flex flex-col">
      <Navigation />
      <main className="flex-grow">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {children}
          <ContactSection />
        </motion.div>
      </main>
      <Footer />
      
      <ThemeSwitcher />

      {/* Scroll to top button */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={scrollToTop}
            className="fixed bottom-8 right-8 p-3 bg-secondary text-primary rounded-full shadow-lg shadow-secondary/20 z-50"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 10l7-7m0 0l7 7m-7-7v18"
              />
            </svg>
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
};

export default MainLayout;