import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Badge from '../ui/Badge';

export default function Experience({ isFullPage = false }) {
  const [experience, setExperience] = useState({ jobs: [] });
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  useEffect(() => {
    async function fetchData() {
      const res = await import('../../data/experience.json');
      setExperience(res.default);
    }
    fetchData();
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.2
      } 
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <section id="experience" className={`py-20 ${isFullPage ? 'bg-white dark:bg-dark' : 'bg-gray-50 dark:bg-gray-900'}`}>
      <div className="container mx-auto px-4">
        {!isFullPage && (
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Work <span className="gradient-text">Experience</span>
            </h2>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              My professional journey across multiple organizations, building expertise in software quality assurance and testing automation.
            </p>
            <div className="w-20 h-1 bg-gradient-to-r from-primary-500 to-secondary-500 mx-auto mt-4"></div>
          </div>
        )}
        
        <motion.div 
          ref={ref}
          className="relative"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {/* Timeline connector */}
          <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-1 bg-gray-200 dark:bg-gray-700"></div>
          
          {experience.jobs.map((job, index) => (
            <motion.div 
              key={job.company}
              className={`relative mb-16 md:w-1/2 ${index % 2 === 0 ? 'md:pr-12 md:self-end md:ml-auto' : 'md:pl-12'}`}
              variants={itemVariants}
            >
              {/* Timeline dot */}
              <div className="absolute left-0 md:left-auto md:right-0 md:translate-x-1/2 top-0 w-6 h-6 rounded-full bg-gradient-to-r from-primary-500 to-secondary-500 transform -translate-x-1/2 z-10 flex items-center justify-center">
                <div className="w-3 h-3 rounded-full bg-white"></div>
              </div>
              
              <div className="ml-8 md:ml-0 bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 md:p-8">
                <div className="flex flex-col md:flex-row justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold">{job.position}</h3>
                    <h4 className="text-lg text-primary-600 dark:text-primary-400">{job.company}</h4>
                  </div>
                  <div className="mt-2 md:mt-0 px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-full text-sm inline-flex items-center">
                    {job.duration}
                  </div>
                </div>
                
                <p className="text-gray-600 dark:text-gray-300 mb-6">{job.description}</p>
                
                <div className="mb-6">
                  <h5 className="font-semibold mb-3 text-gray-700 dark:text-gray-200">Key Highlights:</h5>
                  <ul className="list-disc pl-5 space-y-1 text-gray-600 dark:text-gray-300">
                    {job.highlights.map((highlight, i) => (
                      <li key={i}>{highlight}</li>
                    ))}
                  </ul>
                </div>
                
                <div className="mb-6">
                  <h5 className="font-semibold mb-3 text-gray-700 dark:text-gray-200">Technologies:</h5>
                  <div className="flex flex-wrap gap-2">
                    {job.technologies.map((tech, i) => (
                      <Badge key={i} variant={i % 2 === 0 ? 'primary' : 'secondary'}>{tech}</Badge>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h5 className="font-semibold mb-3 text-gray-700 dark:text-gray-200">Projects:</h5>
                  <div className="flex flex-wrap gap-2">
                    {job.projects.map((project, i) => (
                      <Badge key={i} variant="gray">{project}</Badge>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
        
        {!isFullPage && (
          <div className="text-center mt-12">
            <a 
              href="/experience" 
              className="inline-flex items-center text-primary-600 font-medium hover:text-primary-700 transition-colors"
            >
              View full professional experience
              <svg className="w-5 h-5 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
              </svg>
            </a>
          </div>
        )}
      </div>
    </section>
  );
}
