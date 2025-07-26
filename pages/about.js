import Head from 'next/head';
import About from '../components/sections/About';
import Education from '../components/sections/Education';

export default function AboutPage() {
  return (
    <>
      <Head>
        <title>About | Ashibur Rahman</title>
        <meta
          name="description"
          content="Learn more about Ashibur Rahman, his background, education, and professional journey in software quality assurance."
        />
      </Head>
      
      <div className="py-20">
        <div className="section">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-12 gradient-text">About Me</h1>
        </div>
        <About isFullPage={true} />
        <Education />
      </div>
    </>
  );
}