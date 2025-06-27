
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
import VantaBackground from '../components/VantaBackground';
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
      <div className={`min-h-screen transition-colors duration-500 ${darkMode ? 'dark' : ''} autocad-cursor`}>
        <AnimatePresence>
          {loading && <Preloader />}
        </AnimatePresence>
        
        {!loading && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="relative min-h-screen"
          >
            <VantaBackground />
            <div className="relative z-10 bg-gradient-to-br from-gray-900/90 via-red-900/30 to-gray-800/90 dark:from-gray-900/80 dark:via-red-900/20 dark:to-black/80 min-h-screen backdrop-blur-sm autocad-grid">
              <Header darkMode={darkMode} setDarkMode={setDarkMode} />
              <Hero />
              <About />
              <Education />
              <Skills />
              <Projects />
              <Experience />
              <Contact />
              <FloatingIcons />
            </div>
          </motion.div>
        )}
      </div>
    </ScrollProvider>
  );
};

export default Index;
