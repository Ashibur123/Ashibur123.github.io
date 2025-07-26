import '../styles/globals.css';
import Layout from '../components/layout/Layout';
import { useEffect } from 'react';
import { initAnimations } from '../utils/animation';

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    // Only run on client-side
    if (typeof window !== 'undefined') {
      initAnimations();
    }
  }, []);

  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
