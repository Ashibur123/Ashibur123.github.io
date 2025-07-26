import Head from 'next/head';
import Projects from '../components/sections/Projects';
import { motion } from 'framer-motion';

export default function ProjectsPage() {
  return (
    <>
      <Head>
        <title>Projects | Ashibur Rahman</title>
        <meta
          name="description"
          content="Explore Ashibur Rahman's key projects in software testing, automation frameworks, and quality assurance implementation."
        />
      </Head>
      
      <div className="py-20">
        <div className="section">
          <motion.h1 
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-12 gradient-text"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Projects & Work
          </motion.h1>
          
          <motion.p 
            className="text-lg mb-16 max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Throughout my career, I've had the opportunity to work on various significant projects that have enhanced software quality, improved testing processes, and optimized development workflows. Here are some of my key projects.
          </motion.p>
        </div>
        
        <Projects isFullPage={true} />
      </div>
    </>
  );
}