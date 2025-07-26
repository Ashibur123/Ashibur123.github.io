import Head from 'next/head';
import Hero from '../components/sections/Hero';
import About from '../components/sections/About';
import Skills from '../components/sections/Skills';
import Experience from '../components/sections/Experience';
import Projects from '../components/sections/Projects';
import Contact from '../components/sections/Contact';

export default function Home() {
  return (
    <>
      <Head>
        <title>Ashibur Rahman | Senior SQA Engineer</title>
        <meta
          name="description"
          content="Ashibur Rahman is a Senior SQA Engineer with expertise in automation testing using Cypress, Selenium, and Playwright."
        />
      </Head>
      
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Contact />
      </main>
    </>
  );
}