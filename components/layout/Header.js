import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { FaBars, FaTimes } from 'react-icons/fa';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Experience', path: '/experience' },
    { name: 'Projects', path: '/projects' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/90 dark:bg-dark/90 backdrop-blur-md shadow-lg py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link href="/" passHref>
          <div className="flex items-center space-x-2 cursor-pointer">
            <Image src="/svg/logo.svg" alt="Ashibur Rahman" width={40} height={40} />
            <span className={`text-xl font-bold ${scrolled ? 'text-dark dark:text-white' : 'text-dark dark:text-white'}`}>
              Ashibur<span className="text-primary-500">.</span>
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.path}
              className={`relative px-2 py-1 transition-all duration-300 ${
                router.pathname === item.path
                  ? 'text-primary-600 dark:text-primary-400'
                  : 'text-dark dark:text-light hover:text-primary-600 dark:hover:text-primary-400'
              }`}
            >
              {item.name}
              {router.pathname === item.path && (
                <motion.span
                  className="absolute bottom-0 left-0 w-full h-0.5 bg-primary-500"
                  layoutId="underline"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                />
              )}
            </Link>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-dark dark:text-light focus:outline-none"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <motion.div
        className={`fixed inset-0 z-40 bg-white dark:bg-dark pt-20 ${mobileMenuOpen ? 'flex' : 'hidden'} md:hidden flex-col items-center`}
        initial={{ opacity: 0, y: -20 }}
        animate={mobileMenuOpen ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
        transition={{ duration: 0.3 }}
      >
        <nav className="flex flex-col space-y-6 items-center">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.path}
              className={`text-lg ${
                router.pathname === item.path
                  ? 'text-primary-600 dark:text-primary-400 font-bold'
                  : 'text-dark dark:text-light'
              }`}
              onClick={() => setMobileMenuOpen(false)}
            >
              {item.name}
            </Link>
          ))}
        </nav>
      </motion.div>
    </header>
  );
}