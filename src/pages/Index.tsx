
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Typewriter } from 'react-simple-typewriter';
import Header from '../components/Header';
import Hero from '../components/Hero';
import About from '../components/About';
import Education from '../components/Education';
import Skills from '../components/Skills';
import Projects from '../components/Projects';
import Experience from '../components/Experience';
import Contact from '../components/Contact';
import Preloader from '../components/Preloader';
import FloatingIcons from '../components/FloatingIcons';
import { ScrollProvider } from '../contexts/ScrollContext';

const Index = () => {
  const [loading, setLoading] = useState(true);
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 4000); // 4 seconds for the AutoCAD-themed preloader

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  return (
    <ScrollProvider>
      <div className={`min-h-screen transition-colors duration-500 ${darkMode ? 'dark' : ''}`}>
        <AnimatePresence>
          {loading && <Preloader />}
        </AnimatePresence>
        
        {!loading && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 dark:from-gray-900 dark:via-slate-900 dark:to-black min-h-screen"
          >
            <Header darkMode={darkMode} setDarkMode={setDarkMode} />
            <Hero />
            <About />
            <Education />
            <Skills />
            <Projects />
            <Experience />
            <Contact />
            <FloatingIcons />
          </motion.div>
        )}
      </div>
    </ScrollProvider>
  );
};

export default Index;
