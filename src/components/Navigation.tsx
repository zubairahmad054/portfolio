import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, useScroll, useSpring } from 'framer-motion';

const Navigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', href: '#' },
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Certifications', href: '#certifications' },
    { name: 'Skills', href: '#skills' },
    { name: 'Contact', href: '#contact' },
  ];

  const menuVariants = {
    open: { opacity: 1, y: 0 },
    closed: { opacity: 0, y: -20 },
  };

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 right-0 h-0.5 bg-secondary origin-left z-50"
        style={{ scaleX }}
      />
      <nav className={`fixed w-full top-0 z-40 transition-all duration-300 ${
        scrolled ? 'bg-primary/80 backdrop-blur-lg shadow-lg' : 'bg-transparent'
      }`}>
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            <motion.a
              href="#"
              className="text-secondary font-heading text-2xl font-bold"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="relative">
                ZA
                <motion.span
                  className="absolute -bottom-1 left-0 w-full h-0.5 bg-secondary"
                  initial={{ scaleX: 0 }}
                  whileHover={{ scaleX: 1 }}
                  transition={{ duration: 0.2 }}
                />
              </span>
            </motion.a>

            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              {navItems.map((item, index) => (
                <motion.a
                  key={item.name}
                  href={item.href}
                  className="text-neutral-light hover:text-secondary relative px-2 py-1"
                  whileHover={{ y: -2 }}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <span className="relative z-10">{item.name}</span>
                  <motion.span
                    className="absolute bottom-0 left-0 w-full h-0.5 bg-secondary"
                    initial={{ scaleX: 0 }}
                    whileHover={{ scaleX: 1 }}
                    transition={{ duration: 0.2 }}
                  />
                </motion.a>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <motion.button
              className="md:hidden text-neutral-light w-10 h-10 relative focus:outline-none"
              onClick={() => setIsOpen(!isOpen)}
              whileTap={{ scale: 0.95 }}
            >
              <div className="absolute w-6 transform left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                <span
                  className={`absolute h-0.5 w-6 bg-secondary transform transition-all duration-300 ${
                    isOpen ? 'rotate-45' : '-translate-y-1.5'
                  }`}
                />
                <span
                  className={`absolute h-0.5 w-6 bg-secondary transform transition-all duration-300 ${
                    isOpen ? 'opacity-0' : 'opacity-100'
                  }`}
                />
                <span
                  className={`absolute h-0.5 w-6 bg-secondary transform transition-all duration-300 ${
                    isOpen ? '-rotate-45' : 'translate-y-1.5'
                  }`}
                />
              </div>
            </motion.button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial="closed"
              animate="open"
              exit="closed"
              variants={menuVariants}
              className="md:hidden bg-primary/95 backdrop-blur-lg border-t border-neutral/10"
            >
              <div className="container mx-auto px-4 py-4">
                <div className="space-y-3">
                  {navItems.map((item, index) => (
                    <motion.a
                      key={item.name}
                      href={item.href}
                      className="block py-2 text-neutral-light hover:text-secondary transition-colors"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      onClick={() => setIsOpen(false)}
                    >
                      <span className="relative">
                        {item.name}
                        <motion.span
                          className="absolute -bottom-1 left-0 w-0 h-0.5 bg-secondary"
                          whileHover={{ width: '100%' }}
                          transition={{ duration: 0.2 }}
                        />
                      </span>
                    </motion.a>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </>
  );
};

export default Navigation;