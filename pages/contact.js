import Head from 'next/head';
import Contact from '../components/sections/Contact';
import { motion } from 'framer-motion';
import Image from 'next/image';

export default function ContactPage() {
  return (
    <>
      <Head>
        <title>Contact | Ashibur Rahman</title>
        <meta
          name="description"
          content="Get in touch with Ashibur Rahman, Senior SQA Engineer, for collaboration, opportunities, or inquiries."
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
            Let's Connect
          </motion.h1>
          
          <motion.p 
            className="text-lg mb-16 max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            I'm always interested in new opportunities, collaborations, or just a friendly chat about software testing and quality assurance. Feel free to reach out through any of the channels below.
          </motion.p>
        </div>
        
        <div className="relative">
          <div className="absolute inset-0 z-0 opacity-10">
            <Image
              src="/svg/circle-pattern.svg"
              alt="Background Pattern"
              layout="fill"
              objectFit="cover"
            />
          </div>
          <Contact isFullPage={true} />
        </div>
      </div>
    </>
  );
}