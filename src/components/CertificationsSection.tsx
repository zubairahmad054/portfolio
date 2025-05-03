import React from 'react';
import { motion } from 'framer-motion';

interface Certification {
  name: string;
  link: string;
  awardedBy: string;
}

const certifications: Certification[] = [
  {
    name: "Building AI Browser Agents",
    link: "https://learn.deeplearning.ai/accomplishments/f8159dd2-1cf0-494c-bf13-ef41b1f050c1?usp=sharing",
    awardedBy: "DeepLearning.AI"
  },
  {
    name: "Exploratory Data Analysis",
    link: "https://coursera.org/verify/AYQ93HR7GYQM",
    awardedBy: "Coursera"
  },
  {
    name: "Data Visualization using Plotly",
    link: "https://www.coursera.org/account/accomplishments/verify/NQADJFZLLWT9",
    awardedBy: "Coursera"
  },
  {
    name: "Investigating Suspicious Apps using OSINT",
    link: "https://pantellica.com/certificates/ow1-zubair-ahmad/",
    awardedBy: "Pantellica"
  }
];

const CertificationsSection: React.FC = () => {
  return (
    <section id="certifications" className="py-20 relative">
      <div className="absolute inset-0 bg-neutral/5" />
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="container mx-auto px-4 relative"
      >
        <h2 className="text-4xl font-heading font-bold text-secondary mb-16">Certifications</h2>
        
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 md:left-1/2 h-full w-0.5 bg-secondary/20 transform -translate-x-1/2" />

          {certifications.map((cert, index) => (
            <motion.div
              key={cert.name}
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
                  <div className="text-left">
                    <h3 className="text-2xl font-heading font-bold text-secondary mb-2">{cert.name}</h3>
                    <p className="text-neutral-light">Awarded by: {cert.awardedBy}</p>
                    <div className="mt-4">
                      <a 
                        href={cert.link} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-secondary hover:underline"
                      >
                        <span>View Certificate</span>
                        <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                      </a>
                    </div>
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

export default CertificationsSection;
