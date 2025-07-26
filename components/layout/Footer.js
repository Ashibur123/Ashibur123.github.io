import Link from 'next/link';
import Image from 'next/image';
import { FaLinkedinIn, FaGithub, FaTwitter, FaEnvelope } from 'react-icons/fa';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-white dark:bg-dark border-t border-gray-100 dark:border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <Link href="/" passHref>
              <div className="flex items-center space-x-2 cursor-pointer">
                <Image src="/svg/logo.svg" alt="Ashibur Rahman" width={40} height={40} />
                <span className="text-xl font-bold text-dark dark:text-white">
                  Ashibur<span className="text-primary-500">.</span>
                </span>
              </div>
            </Link>
            <p className="mt-4 text-gray-600 dark:text-gray-300 max-w-md">
              Senior SQA Engineer with expertise in automation testing, process optimization, 
              and quality assurance. Specializing in Cypress, Selenium, and Playwright.
            </p>
            <div className="flex space-x-4 mt-6">
              <a 
                href="https://linkedin.com/in/ashiburprince" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-primary-500 transition-colors duration-300"
                aria-label="LinkedIn"
              >
                <FaLinkedinIn size={20} />
              </a>
              <a 
                href="https://github.com/ashiburprince" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-primary-500 transition-colors duration-300"
                aria-label="GitHub"
              >
                <FaGithub size={20} />
              </a>
              <a 
                href="https://twitter.com/ashiburprince" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-primary-500 transition-colors duration-300"
                aria-label="Twitter"
              >
                <FaTwitter size={20} />
              </a>
              <a 
                href="mailto:ashiburprince@gmail.com" 
                className="text-gray-500 hover:text-primary-500 transition-colors duration-300"
                aria-label="Email"
              >
                <FaEnvelope size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-dark dark:text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link 
                  href="/" 
                  className="text-gray-600 dark:text-gray-300 hover:text-primary-500 dark:hover:text-primary-400 transition-colors duration-300"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link 
                  href="/about" 
                  className="text-gray-600 dark:text-gray-300 hover:text-primary-500 dark:hover:text-primary-400 transition-colors duration-300"
                >
                  About
                </Link>
              </li>
              <li>
                <Link 
                  href="/experience" 
                  className="text-gray-600 dark:text-gray-300 hover:text-primary-500 dark:hover:text-primary-400 transition-colors duration-300"
                >
                  Experience
                </Link>
              </li>
              <li>
                <Link 
                  href="/projects" 
                  className="text-gray-600 dark:text-gray-300 hover:text-primary-500 dark:hover:text-primary-400 transition-colors duration-300"
                >
                  Projects
                </Link>
              </li>
              <li>
                <Link 
                  href="/contact" 
                  className="text-gray-600 dark:text-gray-300 hover:text-primary-500 dark:hover:text-primary-400 transition-colors duration-300"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-dark dark:text-white mb-4">Contact</h3>
            <ul className="space-y-2">
              <li className="text-gray-600 dark:text-gray-300">
                <span className="block">Ashibur Rahman</span>
              </li>
              <li className="text-gray-600 dark:text-gray-300">
                <a href="mailto:ashiburprince@gmail.com" className="hover:text-primary-500 dark:hover:text-primary-400 transition-colors duration-300">
                  ashiburprince@gmail.com
                </a>
              </li>
              <li className="text-gray-600 dark:text-gray-300">
                <a href="tel:+8801614994249" className="hover:text-primary-500 dark:hover:text-primary-400 transition-colors duration-300">
                  +8801614994249
                </a>
              </li>
              <li className="text-gray-600 dark:text-gray-300">
                <span className="block">256/2 Index Aurora,</span>
                <span className="block">Tajlane, Mirpur,</span>
                <span className="block">Dhaka-1216</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-100 dark:border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-600 dark:text-gray-300 text-sm">
            &copy; {currentYear} Ashibur Rahman. All rights reserved.
          </p>
          <p className="text-gray-500 text-sm mt-2 md:mt-0">
            Designed & Developed with ❤️
          </p>
        </div>
      </div>
    </footer>
  );
}