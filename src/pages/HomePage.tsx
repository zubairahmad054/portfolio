import React, { Suspense } from 'react';
import { motion } from 'framer-motion';
import MainLayout from '../layouts/MainLayout';
import BackgroundPattern from '../components/BackgroundPattern';
import LoadingAnimation from '../components/LoadingAnimation';
import SkillsSection from '../components/SkillsSection';

// Lazy load components that are not needed immediately
const ProjectsSection = React.lazy(() => import('../components/ProjectsSection'));
const ExperienceSection = React.lazy(() => import('../components/ExperienceSection'));
const CertificationsSection = React.lazy(() => import('../components/CertificationsSection'));

// Loading fallback component
const SectionLoader = () => (
  <div className="flex justify-center items-center min-h-[400px]">
    <LoadingAnimation size={64} />
  </div>
);

const HomePage: React.FC = () => {
  const fadeUpVariants = {
    initial: { opacity: 0, y: 20 },
    animate: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.1 * i,
        duration: 0.5,
        ease: "easeOut"
      }
    })
  };

  return (
    <MainLayout>
      {/* Hero Section */}
      <section className="relative min-h-screen flex flex-col justify-center py-20 overflow-hidden">
        <BackgroundPattern />
        <div className="container mx-auto px-4 relative">
          <div className="grid md:grid-cols-3 gap-8 items-center">
            <div className="md:col-span-2">
              <motion.p
                custom={0}
                variants={fadeUpVariants}
                initial="initial"
                animate="animate"
                className="text-secondary font-mono mb-4"
              >
                Hi, my name is
              </motion.p>
              
              <motion.h1
                custom={1}
                variants={fadeUpVariants}
                initial="initial"
                animate="animate"
                className="font-heading text-5xl md:text-7xl lg:text-8xl font-bold text-neutral-light mb-4"
              >
                Zubair Ahmad.
              </motion.h1>

              <motion.h2
                custom={2}
                variants={fadeUpVariants}
                initial="initial"
                animate="animate"
                className="font-heading text-3xl md:text-5xl lg:text-6xl font-bold text-neutral mb-6"
              >
                I transform data into insights.
              </motion.h2>

              <motion.p
                custom={3}
                variants={fadeUpVariants}
                initial="initial"
                animate="animate"
                className="text-lg md:text-xl text-neutral max-w-2xl mb-8"
              >
                I’m a data professional focused on building intelligent, data-driven systems that simplify complexity and drive business clarity.
              </motion.p>

              <motion.div
                custom={4}
                variants={fadeUpVariants}
                initial="initial"
                animate="animate"
                className="flex flex-wrap gap-4"
              >                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-secondary text-primary px-8 py-4 rounded-md font-medium relative group overflow-hidden"
                  onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  <span className="relative z-10">View My Work</span>
                  <div className="absolute inset-0 bg-secondary-dark transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
                </motion.button>
                
                <motion.a
                  href="/ZubairAhmad_CV_Tech.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="border-2 border-secondary text-secondary px-8 py-4 rounded-md font-medium relative group overflow-hidden inline-flex items-center justify-center"
                >
                  <span className="relative z-10">Resume</span>
                  <div className="absolute inset-0 bg-secondary/10 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
                </motion.a>
              </motion.div>

              <motion.div
                custom={5}
                variants={fadeUpVariants}
                initial="initial"
                animate="animate"
                className="mt-16"
              >
                <div className="flex items-center gap-4">
                  <div className="h-[1px] flex-1 bg-secondary/20" />
                  <span className="text-secondary font-mono text-sm">Scroll to explore</span>
                  <div className="h-[1px] flex-1 bg-secondary/20" />
                </div>
              </motion.div>
            </div>

            {/* Profile Image */}
            <motion.div
              custom={1}
              variants={fadeUpVariants}
              initial="initial"
              animate="animate"
              className="md:flex-1 flex justify-center"
            >
              <div className="rounded-full overflow-hidden border-4 border-secondary shadow-lg transform hover:scale-105 transition-transform duration-300 w-64 h-64 md:w-80 md:h-80">
                <img 
                  src="/zubair.jpg" 
                  alt="Zubair Ahmad" 
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-neutral/5">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="container mx-auto px-4"
        >
          <h2 className="text-4xl font-heading font-bold text-secondary mb-8">About Me</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 text-lg text-neutral">
              <p>
                Hey! I'm Zubair Ahmad currently pursuing my Master's in Business and Data Analytics 
                in the UK, with a deep interest in Data and AI engineered solutions. I specialize in building end-to-end 
                analytical workflows that simplify complex data, enabling teams to make informed decisions with confidence.
              </p>
              <p>
                My work spans data transformation, predictive modeling, and interactive dashboarding, all with a focus 
                on usability and impact. Lately, I've been exploring the power of AI agents and LLMs to enhance how 
                businesses interact with their data. I'm particularly excited about combining data pipelines with 
                intelligent automation to reduce manual effort and unlock real-time insights.
              </p>
              <p>
                At the core, I'm driven by the idea that technology should be accessible to all. In a world increasingly 
                shaped by data, I believe every individual and organization should have the tools to understand and 
                benefit from it.
              </p>
            </div>
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="bg-neutral/10 p-6 rounded-lg space-y-4"
            >
              <h3 className="text-2xl font-heading font-bold text-secondary">Education</h3>
              <ul className="space-y-6">
                <li className="relative">
                  <div className="flex flex-col border-l-2 border-secondary pl-4 py-2">
                    <h4 className="text-neutral-light font-medium text-lg">Anglia Ruskin University</h4>
                    <div className="flex justify-between">
                      <p className="text-secondary font-mono">MSc in Business and Data Analytics</p>
                      <span className="text-neutral text-sm">Present</span>
                    </div>
                    <p className="text-neutral mt-2 text-sm">
                      <span className="text-neutral-light italic">Relevant Coursework:</span> Big Data Analytics and Decision Making, Statistical Modeling of Data
                    </p>
                  </div>
                </li>
                
                <li className="relative">
                  <div className="flex flex-col border-l-2 border-secondary pl-4 py-2">
                    <h4 className="text-neutral-light font-medium text-lg">National University of Computer and Emerging Sciences</h4>
                    <div className="flex justify-between">
                      <p className="text-secondary font-mono">BSc in Computer Science</p>
                      <span className="text-neutral text-sm">June 2023</span>
                    </div>
                    <p className="text-neutral mt-2 text-sm">
                      <span className="text-neutral-light italic">Relevant Coursework:</span> Artificial Intelligence, Applied Machine Learning, Data Mining, Information Systems
                    </p>
                  </div>
                </li>
              </ul>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Lazy loaded sections - Reordered */}
      <Suspense fallback={<SectionLoader />}>
        <ExperienceSection />
      </Suspense>
      
      <Suspense fallback={<SectionLoader />}>
        <ProjectsSection />
      </Suspense>
      
      <Suspense fallback={<SectionLoader />}>
        <CertificationsSection />
      </Suspense>
      
      {/* Skills Section */}
      <SkillsSection />
    </MainLayout>
  );
};

export default HomePage;