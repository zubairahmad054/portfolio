import React from 'react';
import { motion } from 'framer-motion';

interface ProjectCardProps {
  title: string;
  description: string;
  technologies: string[];
  image?: string;
  githubUrl?: string;
  liveUrl?: string;
  category: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  technologies,
  image,
  githubUrl,
  liveUrl,
  category,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true, margin: "-100px" }}
      className="group relative bg-neutral/10 rounded-lg overflow-hidden backdrop-blur-sm border border-neutral/10 hover:border-secondary/20 transition-colors"
    >
      {image && (
        <div className="relative h-64 overflow-hidden">
          <motion.img
            src={image}
            alt={title}
            className="w-full h-full object-cover"
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.6 }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transform group-hover:translate-y-0 translate-y-4 transition-all duration-300">
              <div className="flex gap-4">
                {githubUrl && (
                  <motion.a
                    href={githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-secondary text-primary px-6 py-3 rounded-md font-medium group/btn relative overflow-hidden"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <span className="relative z-10">View Code</span>
                    <div className="absolute inset-0 bg-white/20 transform -skew-x-12 -translate-x-full group-hover/btn:translate-x-0 transition-transform duration-300" />
                  </motion.a>
                )}
                {liveUrl && (
                  <motion.a
                    href={liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="border-2 border-secondary text-secondary px-6 py-3 rounded-md font-medium group/btn relative overflow-hidden"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <span className="relative z-10">Live Demo</span>
                    <div className="absolute inset-0 bg-secondary/10 transform -skew-x-12 -translate-x-full group-hover/btn:translate-x-0 transition-transform duration-300" />
                  </motion.a>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
      <div className="p-6 space-y-4">
        <div className="flex justify-between items-start">
          <div>
            <motion.h3 
              className="text-xl font-heading font-bold text-secondary group-hover:text-secondary/80 transition-colors"
              whileHover={{ x: 5 }}
              transition={{ duration: 0.2 }}
            >
              {title}
            </motion.h3>
            <span className="text-sm text-neutral font-mono">{category}</span>
          </div>
          <div className="flex gap-3">
            {liveUrl && title.includes("Artificial Lights") && (
              <motion.a
                href={liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-neutral-light hover:text-secondary transition-colors"
                whileHover={{ scale: 1.1, rotate: -5 }}
                whileTap={{ scale: 0.95 }}
                title="View Publication"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14 4h-13v18h20v-11h1v12h-22v-20h14v1zm10 5h-1v-6.293l-11.646 11.647-.708-.708 11.647-11.646h-6.293v-1h8v8z"/>
                </svg>
              </motion.a>
            )}
            {githubUrl && (title === "Asaan Kisaan" || title === "Student Grades Predictor") && (
              <motion.a
                href={githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-neutral-light hover:text-secondary transition-colors"
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.95 }}
                title="View GitHub Repository"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
              </motion.a>
            )}
          </div>
        </div>
        <p className="text-neutral-light">{description}</p>
        <div className="flex flex-wrap gap-2 pt-2">
          {technologies.map((tech) => (
            <motion.span
              key={tech}
              className="px-3 py-1 bg-secondary/5 text-secondary rounded-full text-sm border border-secondary/10 hover:border-secondary/30 transition-colors"
              whileHover={{ scale: 1.05 }}
            >
              {tech}
            </motion.span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;