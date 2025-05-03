import React from 'react';
import { motion } from 'framer-motion';

interface Experience {
  title: string;
  company: string;
  period: string;
  description: string[];
  technologies: string[];
}

const experiences: Experience[] = [
  {
    title: 'Data Analyst',
    company: 'Centre for Strategic and Contemporary Research (CSCR)',
    period: 'September 2023 - January 2025',
    description: [
      'Designed end-to-end data analysis workflows supporting policy research on development projects worth $46 billion.',
      'Used Azure Synapse Analytics platform for unified data processing, created data segmentation using dedicated SQL pools for efficient organizing and querying of data.',
      'Performed extensive cleaning, anomaly detection, and transformation on the distributed dataset using PySpark.',
      'Analyzed datasets to identify critical patterns and trends, developed machine learning models such as Linear Regression, Gradient Boosting via Sklearn for predictive insights supporting executive level policy decisions.',
      'Linked structured data and integrated Azure MAPs to Power BI dashboards to geographically map each projects location and providing all essential detail with a single click on project icon on map.'
    ],
    technologies: ['Python', 'Power BI', 'Machine Learning', 'Data Visualization']
  },
  {
    title: 'Research Assistant Internship',
    company: 'Pantellica',
    period: 'Jan 2023 - June 2023',
    description: [
      'Collaborated on an open-source research project by collecting, cleaning and transforming data.',
      'Built automated data collection and processing pipelines',
    ],
    technologies: ['Python', 'R', 'Statistical Analysis', 'Data Modeling']
  }
];

const ExperienceSection: React.FC = () => {
  return (
    <section id="experience" className="py-20 relative">
      <div className="absolute inset-0 bg-neutral/5" />
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="container mx-auto px-4 relative"
      >
        <h2 className="text-4xl font-heading font-bold text-secondary mb-16">Work Experience</h2>
        
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 md:left-1/2 h-full w-0.5 bg-secondary/20 transform -translate-x-1/2" />

          {experiences.map((exp, index) => (
            <motion.div
              key={exp.title}
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
                  <div className="mb-4">
                    <h3 className="text-2xl font-heading font-bold text-secondary">{exp.title}</h3>
                    <p className="text-neutral-light">{exp.company}</p>
                    <p className="text-neutral font-mono">{exp.period}</p>
                  </div>

                  <ul className="space-y-3 text-neutral-light mb-4">
                    {exp.description.map((item, i) => (
                      <motion.li
                        key={i}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3, delay: i * 0.1 }}
                        viewport={{ once: true }}
                        className="flex items-start gap-2 text-left"
                      >
                        <span className="text-secondary mt-1.5">▹</span>
                        <span>{item}</span>
                      </motion.li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech) => (
                      <motion.span
                        key={tech}
                        whileHover={{ scale: 1.05 }}
                        className="px-3 py-1 bg-secondary/5 text-secondary rounded-full text-sm border border-secondary/10 hover:border-secondary/30 transition-colors"
                      >
                        {tech}
                      </motion.span>
                    ))}
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

export default ExperienceSection;