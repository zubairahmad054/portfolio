import React from 'react';
import { motion } from 'framer-motion';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  const socialLinks = [
    {
      name: 'GitHub',
      url: 'https://github.com/zubairahmad054',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
        </svg>
      ),
    },
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/zubairahmad054',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
        </svg>
      ),
    },
    {
      name: 'Email',
      url: 'mailto:m.zubairahmad@hotmail.com',
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
    },
  ];

  return (
    <footer className="relative pt-32 pb-8 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-primary/90 backdrop-blur-sm">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-secondary/5 via-transparent to-transparent" />
      </div>

      {/* Wave Pattern */}
      <div className="absolute top-0 left-0 right-0">
        <svg className="w-full h-24 fill-primary transform rotate-180" viewBox="0 0 1440 74" xmlns="http://www.w3.org/2000/svg">
          <path d="M0,37 C240,37 480,0 720,0 C960,0 1200,37 1440,37 L1440,74 L0,74 Z" />
        </svg>
      </div>

      <div className="container mx-auto px-4 relative">
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {/* Contact Info */}
          <div>
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-xl font-heading font-bold text-secondary mb-4"
            >
              Contact
            </motion.h3>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="space-y-2 text-neutral-light"
            >
              <p>Email: m.zubairahmad@hotmail.com</p>
              <p>Location: London, United Kingdom</p>
            </motion.div>
          </div>

          {/* Quick Links */}
          <div>
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-xl font-heading font-bold text-secondary mb-4"
            >
              Quick Links
            </motion.h3>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="space-y-2"
            >
              {['About', 'Experience', 'Projects', 'Certifications', 'Skills'].map((link, index) => (
                <motion.a
                  key={link}
                  href={`#${link.toLowerCase()}`}
                  className="block text-neutral-light hover:text-secondary transition-colors"
                  whileHover={{ x: 5 }}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                >
                  {link}
                </motion.a>
              ))}
            </motion.div>
          </div>

          {/* Connect */}
          <div>
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-xl font-heading font-bold text-secondary mb-4"
            >
              Connect
            </motion.h3>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="flex space-x-4"
            >
              {socialLinks.map((link, index) => (
                <motion.a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-neutral hover:text-secondary transition-colors p-2 hover:bg-secondary/5 rounded-full"
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  whileHover={{ scale: 1.2 }}
                  transition={{
                    type: "spring",
                    stiffness: 260,
                    damping: 20,
                    delay: index * 0.1
                  }}
                >
                  {link.icon}
                  <span className="sr-only">{link.name}</span>
                </motion.a>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Copyright */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="border-t border-neutral/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4"
        >
          <p className="text-neutral text-sm">
            © {currentYear} Zubair Ahmad. All rights reserved.
          </p>
          <div className="flex items-center gap-2 text-sm text-neutral">
            <span>Built with</span>
            <span className="text-secondary">♥</span>
            <span>using React & TailwindCSS</span>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;