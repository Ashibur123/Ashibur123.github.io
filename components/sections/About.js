import { useEffect, useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaLinkedinIn, FaGithub, FaTwitter } from 'react-icons/fa';

export default function About({ isFullPage = false }) {
  const [personalInfo, setPersonalInfo] = useState(null);
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  useEffect(() => {
    async function fetchData() {
      const res = await import('../../data/personalInfo.json');
      setPersonalInfo(res.default);
    }
    fetchData();
  }, []);

  if (!personalInfo) {
    return null;
  }

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
    <section id="about" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        {!isFullPage && (
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              About <span className="gradient-text">Me</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-primary-500 to-secondary-500 mx-auto"></div>
          </div>
        )}
        
        <motion.div 
          ref={ref}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <motion.div variants={itemVariants} className={`relative ${isFullPage ? 'order-1' : 'order-2 lg:order-1'}`}>
            <div className="relative h-[400px] md:h-[500px] rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="/images/about.jpg"
                alt={personalInfo.name}
                layout="fill"
                objectFit="cover"
                className="transition-transform duration-500 hover:scale-105"
              />
            </div>
            
            <div className="absolute -bottom-6 -right-6 bg-white dark:bg-gray-800 p-4 rounded-xl shadow-lg">
              <div className="flex space-x-3">
                {personalInfo.social.map((item) => {
                  let Icon;
                  switch (item.icon) {
                    case 'FaLinkedinIn':
                      Icon = FaLinkedinIn;
                      break;
                    case 'FaGithub':
                      Icon = FaGithub;
                      break;
                    case 'FaTwitter':
                      Icon = FaTwitter;
                      break;
                    default:
                      Icon = FaLinkedinIn;
                  }
                  
                  return (
                    <a
                      key={item.name}
                      href={item.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-full bg-gradient-to-r from-primary-500 to-secondary-500 flex items-center justify-center text-white transition-transform hover:scale-110"
                      aria-label={item.name}
                    >
                      <Icon />
                    </a>
                  );
                })}
              </div>
            </div>
          </motion.div>

          <motion.div variants={itemVariants} className={isFullPage ? 'order-2' : 'order-1 lg:order-2'}>
            <h3 className="text-2xl md:text-3xl font-bold mb-6">
              Senior SQA Engineer with <span className="text-primary-500">4+ years</span> of experience
            </h3>

            <p className="text-gray-600 dark:text-gray-300 mb-6">
              I am a process-focused SQA professional with technical expertise and considerable 
              software development experience. With over 4 years in the industry, I have gained 
              expertise in both automation and manual testing, supporting various financial and 
              enterprise applications.
            </p>
            
            <p className="text-gray-600 dark:text-gray-300 mb-8">
              My experience encompasses manual testing with different techniques, database testing, 
              QA automation using Cypress, Selenium & Playwright, as well as API testing using SOAPUI & Postman. 
              I excel in project management using tools like JIRA and have deep knowledge of SDLC, STLC, 
              documentation, and Agile (Scrum) methodologies.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              <div>
                <h4 className="font-semibold mb-3 text-lg">Personal Info</h4>
                <ul className="space-y-2">
                  <li className="flex">
                    <span className="font-medium w-24">Name:</span>
                    <span className="text-gray-600 dark:text-gray-300">{personalInfo.name}</span>
                  </li>
                  <li className="flex">
                    <span className="font-medium w-24">Email:</span>
                    <a href={`mailto:${personalInfo.email}`} className="text-primary-600 hover:underline">{personalInfo.email}</a>
                  </li>
                  <li className="flex">
                    <span className="font-medium w-24">Phone:</span>
                    <a href={`tel:${personalInfo.phone}`} className="text-primary-600 hover:underline">{personalInfo.phone}</a>
                  </li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-semibold mb-3 text-lg">Interests</h4>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-primary-100 text-primary-800 dark:bg-primary-900 dark:text-primary-200 rounded-full text-sm">Traveling</span>
                  <span className="px-3 py-1 bg-secondary-100 text-secondary-800 dark:bg-secondary-900 dark:text-secondary-200 rounded-full text-sm">Researching</span>
                  <span className="px-3 py-1 bg-primary-100 text-primary-800 dark:bg-primary-900 dark:text-primary-200 rounded-full text-sm">Cricket</span>
                  <span className="px-3 py-1 bg-secondary-100 text-secondary-800 dark:bg-secondary-900 dark:text-secondary-200 rounded-full text-sm">Badminton</span>
                  <span className="px-3 py-1 bg-primary-100 text-primary-800 dark:bg-primary-900 dark:text-primary-200 rounded-full text-sm">Riding Bike</span>
                </div>
              </div>
            </div>
            
            {!isFullPage && (
              <a 
                href="/about" 
                className="inline-flex items-center text-primary-600 font-medium hover:text-primary-700 transition-colors"
              >
                Learn more about me
                <svg className="w-5 h-5 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                </svg>
              </a>
            )}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
