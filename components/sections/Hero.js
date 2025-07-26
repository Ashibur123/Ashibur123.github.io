import { useEffect, useState } from 'react';
import Image from 'next/image';
import Button from '../ui/Button';
import { motion } from 'framer-motion';
import { FaDownload, FaArrowRight } from 'react-icons/fa';

export default function Hero() {
  const [personalInfo, setPersonalInfo] = useState(null);

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

  return (
    <section className="min-h-screen flex items-center relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/svg/hero-pattern.svg"
          alt=""
          layout="fill"
          objectFit="cover"
          className="opacity-50"
        />
      </div>
      
      <div className="absolute top-0 right-0 h-full w-1/2 z-0 opacity-10">
        <Image
          src="/svg/blob-shape.svg"
          alt=""
          layout="fill"
          objectFit="contain"
          objectPosition="right"
        />
      </div>

      <div className="container mx-auto px-4 pt-24 md:pt-0 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <motion.p 
              className="text-primary-600 font-medium mb-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              Hi there 👋 I am
            </motion.p>
            
            <motion.h1 
              className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              {personalInfo.name} <span className="text-primary-500">({personalInfo.nickname})</span>
            </motion.h1>
            
            <motion.h2 
              className="text-2xl md:text-3xl lg:text-4xl font-bold mb-8 gradient-text"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              {personalInfo.title}
            </motion.h2>
            
            <motion.p 
              className="text-lg text-gray-600 dark:text-gray-300 mb-10 max-w-lg"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              {personalInfo.bio}
            </motion.p>
            
            <motion.div 
              className="flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <Button href={personalInfo.resumeUrl} icon={<FaDownload />}>
                Download Resume
              </Button>
              <Button href="/contact" variant="outline" icon={<FaArrowRight />}>
                Get In Touch
              </Button>
            </motion.div>
          </div>
          
          <motion.div 
            className="relative hidden lg:block"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <div className="relative w-full h-[500px] rounded-3xl overflow-hidden shadow-2xl border-8 border-white">
              <Image
                src="/images/profile.jpg"
                alt={personalInfo.name}
                layout="fill"
                objectFit="cover"
                priority
              />
            </div>
            <div className="absolute -bottom-6 -left-6 p-6 bg-white dark:bg-gray-800 rounded-xl shadow-xl">
              <div className="flex items-center gap-x-4">
                <div className="flex -space-x-2">
                  <div className="w-10 h-10 rounded-full bg-primary-500 flex items-center justify-center text-white">
                    4+
                  </div>
                </div>
                <div>
                  <p className="font-medium">Years of Experience</p>
                  <p className="text-sm text-gray-500">Software QA & Testing</p>
                </div>
              </div>
            </div>
            <div className="absolute -top-6 -right-6 p-6 bg-white dark:bg-gray-800 rounded-xl shadow-xl">
              <div className="flex items-center gap-x-4">
                <div className="w-10 h-10 rounded-full bg-secondary-500 flex items-center justify-center text-white">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <p className="font-medium">Best Performer</p>
                  <p className="text-sm text-gray-500">EA IT Division, 2024</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
      
      <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 flex justify-center animate-bounce">
        <a href="#about" aria-label="Scroll down">
          <svg className="w-6 h-6 text-gray-500" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
            <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </svg>
        </a>
      </div>
    </section>
  );
}
