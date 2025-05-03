import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from '../hooks/useTheme';

const themes = [
  {
    name: 'Default',
    primary: '#0A192F',
    secondary: '#64FFDA',
    neutral: {
      light: '#CCD6F6',
      DEFAULT: '#8892B0',
    },
  },
  {
    name: 'Ocean',
    primary: '#1A1F2C',
    secondary: '#00B4D8',
    neutral: {
      light: '#E0FBFC',
      DEFAULT: '#98C1D9',
    },
  },
  {
    name: 'Forest',
    primary: '#1B2021',
    secondary: '#7CB518',
    neutral: {
      light: '#E5E5E5',
      DEFAULT: '#96A397',
    },
  },
];

const ThemeSwitcher: React.FC = () => {
  const { theme, updateTheme } = useTheme();
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <div className="fixed bottom-8 left-8 z-50">
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(!isOpen)}
        className="p-3 bg-secondary text-primary rounded-full shadow-lg shadow-secondary/20"
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
            d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"
          />
        </svg>
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="absolute bottom-full mb-4 left-0 bg-primary/90 backdrop-blur-lg rounded-lg shadow-lg shadow-secondary/10 border border-neutral/10 p-4 min-w-[200px]"
          >
            <div className="space-y-3">
              {themes.map((themeOption, index) => (
                <motion.button
                  key={themeOption.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  onClick={() => {
                    updateTheme(themeOption);
                    setIsOpen(false);
                  }}
                  className={`w-full px-4 py-2 rounded-md text-left transition-colors ${
                    theme.primary === themeOption.primary
                      ? 'bg-secondary text-primary'
                      : 'text-neutral-light hover:bg-neutral/10'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div 
                      className="w-4 h-4 rounded-full border-2 border-current"
                      style={{ backgroundColor: themeOption.secondary }}
                    />
                    {themeOption.name}
                  </div>
                </motion.button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ThemeSwitcher;