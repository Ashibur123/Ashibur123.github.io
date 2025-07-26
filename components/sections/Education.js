import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Card from '../ui/Card';

export default function Education() {
  const [education, setEducation] = useState({ degrees: [], certifications: [] });
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  useEffect(() => {
    async function fetchData() {
      const res = await import('../../data/education.json');
      setEducation(res.default);
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
    <section id="education" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Education & <span className="gradient-text">Certifications</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary-500 to-secondary-500 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Education */}
          <div>
            <h3 className="text-2xl font-bold mb-8 flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path d="M12 14l9-5-9-5-9 5 9 5z" />
                <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
              </svg>
              Academic Background
            </h3>
            
            <motion.div 
              ref={ref}
              className="space-y-6"
              variants={containerVariants}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
            >
              {education.degrees.map((degree) => (
                <motion.div key={degree.degree} variants={itemVariants}>
                  <Card className="border-l-4 border-primary-500">
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="text-lg font-semibold">{degree.degree}</h4>
                      <span className="text-sm text-gray-500 dark:text-gray-400">{degree.duration}</span>
                    </div>
                    <h5 className="text-primary-600 dark:text-primary-400 mb-2">{degree.institution}</h5>
                    <p className="text-gray-600 dark:text-gray-300 mb-2">{degree.description}</p>
                    <div className="mt-2 px-3 py-1 bg-primary-50 dark:bg-primary-900 text-primary-800 dark:text-primary-200 rounded-full text-sm inline-block">
                      GPA: {degree.gpa}
                    </div>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Certifications */}
          <div>
            <h3 className="text-2xl font-bold mb-8 flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-secondary-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
              </svg>
              Professional Certifications
            </h3>
            
            <motion.div 
              className="grid grid-cols-1 gap-6"
              variants={containerVariants}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
            >
              {education.certifications.map((cert) => (
                <motion.div key={cert.name} variants={itemVariants}>
                  <Card className="border-l-4 border-secondary-500">
                    <div className="flex justify-between items-start">
                      <h4 className="text-lg font-semibold">{cert.name}</h4>
                      <span className="text-sm text-gray-500 dark:text-gray-400">{cert.date}</span>
                    </div>
                    <h5 className="text-secondary-600 dark:text-secondary-400">{cert.issuer}</h5>
                  </Card>
                </motion.div>
              ))}
            </motion.div>

            <motion.div 
              className="mt-8 p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-100 dark:border-gray-700"
              variants={itemVariants}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
            >
              <h4 className="text-lg font-semibold mb-3">Additional Achievements</h4>
              <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-secondary-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Participated in the DIU AUPF-2019 program Protocol Team</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-secondary-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Participated in ICPC Regional Programming Contest</span>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
