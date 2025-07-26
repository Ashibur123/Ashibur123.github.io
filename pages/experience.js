import Head from 'next/head';
import Experience from '../components/sections/Experience';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function ExperiencePage() {
  const [experience, setExperience] = useState({ jobs: [] });

  useEffect(() => {
    async function fetchData() {
      const res = await import('../data/experience.json');
      setExperience(res.default);
    }
    fetchData();
  }, []);

  return (
    <>
      <Head>
        <title>Experience | Ashibur Rahman</title>
        <meta
          name="description"
          content="Explore Ashibur Rahman's professional experience as a Senior SQA Engineer, including roles at City Bank PLC, Gain Solutions, and Cycas IT."
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
            Professional Experience
          </motion.h1>
          
          <motion.p 
            className="text-lg mb-16 max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            With over 4 years of experience in software quality assurance, I have worked with diverse teams across multiple industries, particularly focusing on financial and enterprise applications. Here's my professional journey so far.
          </motion.p>
        </div>
        
        <Experience isFullPage={true} />
      </div>
    </>
  );
}