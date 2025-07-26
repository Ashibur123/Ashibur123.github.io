import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import ProgressBar from '../ui/ProgressBar';
import * as FaIcons from 'react-icons/fa';
import * as SiIcons from 'react-icons/si';

export default function Skills() {
  const [skills, setSkills] = useState({ categories: [] });
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  useEffect(() => {
    async function fetchData() {
      const res = await import('../../data/skills.json');
      setSkills(res.default);
    }
    fetchData();
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.1
      } 
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  // Function to dynamically get icon component
  const getIcon = (iconName) => {
    if (iconName.startsWith('Fa')) {
      return FaIcons[iconName];
    } else if (iconName.startsWith('Si')) {
      return SiIcons[iconName];
    }
    return null;
  };

  return (
    <section id="skills" className="py-20 bg-white dark:bg-dark">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Professional <span className="gradient-text">Skills</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            With experience across various technologies and methodologies, I bring a comprehensive skill set to ensure software quality and process efficiency.
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-primary-500 to-secondary-500 mx-auto mt-4"></div>
        </div>
        
        <motion.div 
          ref={ref}
          className="grid grid-cols-1 md:grid-cols-2 gap-12"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {skills.categories.map((category) => (
            <motion.div key={category.name} variants={itemVariants} className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-8 shadow-lg">
              <h3 className="text-xl font-bold mb-6 border-b pb-2 border-gray-200 dark:border-gray-700">
                {category.name}
              </h3>
              
              <div className="space-y-6">
                {category.skills.map((skill) => {
                  const Icon = getIcon(skill.icon);
                  
                  return (
                    <div key={skill.name} className="flex flex-col">
                      <div className="flex items-center mb-2">
                        {Icon && <Icon className="text-primary-500 mr-2" />}
                        <span className="font-medium">{skill.name}</span>
                      </div>
                      <ProgressBar value={skill.level} />
                    </div>
                  );
                })}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
