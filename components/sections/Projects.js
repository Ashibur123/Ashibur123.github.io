import { useEffect, useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Card from '../ui/Card';
import Badge from '../ui/Badge';
import Button from '../ui/Button';

export default function Projects({ isFullPage = false }) {
  const [projects, setProjects] = useState({ projects: [] });
  const [activeFilter, setActiveFilter] = useState('All');
  const [filteredProjects, setFilteredProjects] = useState([]);
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  useEffect(() => {
    async function fetchData() {
      const res = await import('../../data/projects.json');
      setProjects(res.default);
      setFilteredProjects(res.default.projects);
    }
    fetchData();
  }, []);

  useEffect(() => {
    if (projects.projects.length > 0) {
      if (activeFilter === 'All') {
        setFilteredProjects(projects.projects);
      } else {
        setFilteredProjects(
          projects.projects.filter((project) => project.category === activeFilter)
        );
      }
    }
  }, [activeFilter, projects.projects]);

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

  const getUniqueCategories = () => {
    const categories = projects.projects.map((project) => project.category);
    return ['All', ...new Set(categories)];
  };

  return (
    <section id="projects" className={`py-20 ${isFullPage ? 'bg-gray-50 dark:bg-gray-900' : 'bg-white dark:bg-dark'}`}>
      <div className="container mx-auto px-4">
        {!isFullPage && (
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Featured <span className="gradient-text">Projects</span>
            </h2>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Explore some of my key projects in software testing, automation frameworks, and quality assurance implementation.
            </p>
            <div className="w-20 h-1 bg-gradient-to-r from-primary-500 to-secondary-500 mx-auto mt-4"></div>
          </div>
        )}
        
        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {getUniqueCategories().map((category) => (
            <button
              key={category}
              onClick={() => setActiveFilter(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                activeFilter === category
                  ? 'bg-gradient-to-r from-primary-500 to-secondary-500 text-white'
                  : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
        
        <motion.div 
          ref={ref}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {filteredProjects.map((project) => (
            <motion.div key={project.title} variants={itemVariants}>
              <Card className="h-full flex flex-col overflow-hidden">
                <div className="relative w-full h-48 mb-4 overflow-hidden rounded-lg">
                  <Image
                    src={project.image || '/images/project-placeholder.jpg'}
                    alt={project.title}
                    layout="fill"
                    objectFit="cover"
                    className="transition-transform duration-500 hover:scale-110"
                  />
                  <div className="absolute top-2 right-2">
                    <Badge variant="primary" className="opacity-90">{project.category}</Badge>
                  </div>
                </div>
                
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4 flex-grow">{project.description}</p>
                
                <div className="mb-4">
                  <h4 className="font-semibold mb-2 text-gray-700 dark:text-gray-200">Key Highlights:</h4>
                  <ul className="list-disc pl-5 space-y-1 text-gray-600 dark:text-gray-300">
                    {project.highlights.map((highlight, i) => (
                      <li key={i}>{highlight}</li>
                    ))}
                  </ul>
                </div>
                
                <div className="mb-4">
                  <h4 className="font-semibold mb-2 text-gray-700 dark:text-gray-200">Technologies:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, i) => (
                      <Badge key={i} variant={i % 2 === 0 ? 'secondary' : 'primary'}>{tech}</Badge>
                    ))}
                  </div>
                </div>
                
                <Button variant="outline" fullWidth>View Details</Button>
              </Card>
            </motion.div>
          ))}
        </motion.div>
        
        {!isFullPage && filteredProjects.length > 3 && (
          <div className="text-center mt-12">
            <a 
              href="/projects" 
              className="inline-flex items-center text-primary-600 font-medium hover:text-primary-700 transition-colors"
            >
              View all projects
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
