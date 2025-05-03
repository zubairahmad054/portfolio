import React, { useState } from 'react';
import { motion } from 'framer-motion';

interface Project {
  title: string;
  description: string;
  technologies: string[];
  category: string;
  githubUrl?: string;
  liveUrl?: string;
  image?: string;
}

const projects: Project[] = [
  {
    title: 'Asaan Kisaan',
    description: 'A market trend analysis tool helping farmers make data-driven decisions. Features price prediction models and real-time market insights.',
    technologies: ['Python', 'React.js', 'Node.js', 'MongoDB'],
    category: 'Full Stack',
    githubUrl: 'https://github.com/zubairahmad054/agriculture-e-commerce-and-advisory.git',
    liveUrl: '#'
  },
  {
    title: 'Student Grades Predictor',
    description: 'Machine learning model predicting student performance using historical data and various environmental factors.',
    technologies: ['Python', 'Scikit-learn', 'Pandas', 'Data Analysis'],
    category: 'Machine Learning',
    githubUrl: 'https://github.com/zubairahmad054/student-grades-predictor-model.git'
  },
  {
    title: 'Blinding Lights: How Artificial Lights Affect Marine Ecology',
    description: 'Research publication analyzing the impact of artificial lighting on marine ecosystems, featuring comprehensive data visualization.',
    technologies: ['Statistical Analysis', 'Data Visualization', 'Research'],
    category: 'Research',
    liveUrl: 'https://thecitizenry.pk/2024/01/15/the-dark-cost-of-artificial-lights-on-karachi-coast/'
  },
  {
    title: 'Boston Crime Data Analysis',
    description: 'Geo spatial data analysis of Boston crime data using Python and Folium. Interactive maps and insights generated from real-world datasets.',
    technologies: ['Python', 'Folium'],
    category: 'Geo Spatial Data Analysis',
    liveUrl: 'https://colab.research.google.com/drive/1qqVlxX0nBYHV0X3cKaQEbv3DufA7rgF0?usp=sharing'
  }
];

const ProjectsSection: React.FC = () => {
  const [filter, setFilter] = useState<string>('all');
  
  // Fix for Set iteration TypeScript error
  const categories = ['all', ...Array.from(new Set(projects.map(project => project.category)))];

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter);

  return (
    <section id="projects" className="py-20 relative">
      <div className="absolute inset-0 bg-neutral/5" />
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="container mx-auto px-4 relative"
      >
        <h2 className="text-4xl font-heading font-bold text-secondary mb-8">Featured Projects</h2>
        
        <div className="mb-12 flex flex-wrap gap-4">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setFilter(category)}
              className={`px-4 py-2 rounded-md transition-colors ${
                filter === category
                  ? 'bg-secondary text-primary'
                  : 'border border-secondary text-secondary'
              }`}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
          ))}
        </div>
        
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 md:left-1/2 h-full w-0.5 bg-secondary/20 transform -translate-x-1/2" />

          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true, margin: "-100px" }}
              className={`relative grid grid-cols-1 md:grid-cols-2 gap-8 mb-16 last:mb-0 ${
                index % 2 === 0 ? '' : 'md:flex-row-reverse'
              }`}
            >
              {/* Timeline dot */}
              <div className="absolute left-8 md:left-1/2 w-4 h-4 bg-secondary rounded-full transform -translate-x-1/2 mt-2">
                <div className="absolute inset-0 bg-secondary/20 rounded-full animate-ping" />
              </div>

              {/* Content */}
              <div className={`ml-16 md:ml-0 ${index % 2 === 0 ? 'md:pr-16' : 'md:pl-16 md:col-start-2'}`}>
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="bg-neutral/10 p-6 rounded-lg backdrop-blur-sm border border-neutral/10 hover:border-secondary/20 transition-all duration-300"
                >
                  <div className="text-left mb-4">
                    <h3 className="text-2xl font-heading font-bold text-secondary">{project.title}</h3>
                    <p className="text-neutral font-mono">{project.category}</p>
                  </div>

                  <div className="text-neutral-light mb-6 text-left">
                    <p>{project.description}</p>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech) => (
                      <motion.span
                        key={tech}
                        whileHover={{ scale: 1.05 }}
                        className="px-3 py-1 bg-secondary/5 text-secondary rounded-full text-sm border border-secondary/10 hover:border-secondary/30 transition-colors"
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>

                  <div className="flex flex-wrap gap-4 mt-4">
                    {project.githubUrl && (
                      <motion.a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center text-secondary hover:underline"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                        </svg>
                        <span>View Code</span>
                      </motion.a>
                    )}
                    {project.liveUrl && project.title === "Boston Crime Data Analysis" && (
                      <motion.a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center text-secondary hover:underline"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                        <span>View Analysis</span>
                      </motion.a>
                    )}
                    {project.liveUrl && project.title.includes("Artificial Lights") && (
                      <motion.a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center text-secondary hover:underline"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                        <span>View Publication</span>
                      </motion.a>
                    )}
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default ProjectsSection;