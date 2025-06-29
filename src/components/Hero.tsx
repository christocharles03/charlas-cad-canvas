import { motion } from 'framer-motion';
import { Typewriter } from 'react-simple-typewriter';
import { ChevronDown, Download, Eye } from 'lucide-react';

const Hero = () => {
  const scrollToAbout = () => {
    const element = document.querySelector('#about');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleDownloadResume = () => {
    const link = document.createElement('a');
    link.href = '/lovable-uploads/7d943b4f-9b17-45fe-95ce-b442bcaef992.png';
    link.download = 'Christo_Charles_CV.png';
    link.click();
  };

  const handleViewResume = () => {
    window.open('/lovable-uploads/7d943b4f-9b17-45fe-95ce-b442bcaef992.png', '_blank');
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Enhanced Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-100/20 via-stone-100/30 to-gray-200/20 dark:from-slate-900/20 dark:via-slate-800/30 dark:to-gray-900/20"></div>

      <div className="container mx-auto px-6 text-center z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <motion.h1 
            className="text-5xl md:text-7xl font-bold text-gray-800 dark:text-white mb-6"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <span className="bg-gradient-to-r from-slate-700 via-sky-600 to-slate-800 dark:from-slate-300 dark:via-slate-400 dark:to-slate-200 bg-clip-text text-transparent">
              Christo
            </span>
            <br />
            <span className="bg-gradient-to-r from-sky-600 via-slate-700 to-slate-900 dark:from-slate-400 dark:via-slate-300 dark:to-slate-100 bg-clip-text text-transparent">
              Charlas
            </span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
            className="text-xl md:text-2xl text-gray-600 dark:text-slate-200 mb-8 h-16"
          >
            <Typewriter
              words={[
                'CAD/REVIT MEP Aspirant',
                'Design Engineer',
                'Technical Innovator',
                'Future Builder'
              ]}
              loop={true}
              cursor
              cursorStyle="_"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1000}
            />
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.5 }}
            className="text-lg text-gray-500 dark:text-slate-300 mb-10 max-w-3xl mx-auto leading-relaxed"
          >
            Passionate about creating innovative engineering solutions through advanced CAD/REVIT MEP design. 
            Combining technical expertise with creative problem-solving to build the future of engineering.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 2 }}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-8"
          >
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: "0 10px 25px rgba(14, 116, 144, 0.4)" }}
              whileTap={{ scale: 0.95 }}
              onClick={scrollToAbout}
              className="px-8 py-4 bg-gradient-to-r from-slate-700 via-sky-600 to-slate-800 dark:from-slate-600 dark:via-slate-500 dark:to-slate-400 text-white rounded-full font-semibold text-lg transition-all duration-300 hover:shadow-lg shadow-sky-500/25 dark:shadow-slate-500/25"
            >
              Discover My Work
            </motion.button>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => window.open('mailto:christocharly04@gmail.com')}
              className="px-8 py-4 border-2 border-sky-600 dark:border-slate-400 text-sky-700 dark:text-slate-300 rounded-full font-semibold text-lg hover:bg-sky-600 dark:hover:bg-slate-400 hover:text-white dark:hover:text-gray-900 transition-all duration-300"
            >
              Get In Touch
            </motion.button>
          </motion.div>

          {/* Resume Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 2.2 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleDownloadResume}
              className="flex items-center gap-2 px-6 py-3 bg-slate-700/80 dark:bg-slate-600/80 text-white rounded-lg font-medium text-sm hover:bg-slate-700 dark:hover:bg-slate-600 transition-all duration-300 backdrop-blur-sm"
            >
              <Download size={18} />
              Download CV
            </motion.button>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleViewResume}
              className="flex items-center gap-2 px-6 py-3 bg-gray-600/80 dark:bg-gray-700/80 text-white rounded-lg font-medium text-sm hover:bg-gray-600 dark:hover:bg-gray-700 transition-all duration-300 backdrop-blur-sm"
            >
              <Eye size={18} />
              View CV
            </motion.button>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 3 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.button
            onClick={scrollToAbout}
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="text-gray-600 dark:text-white hover:text-sky-600 dark:hover:text-slate-400 transition-colors"
          >
            <ChevronDown size={32} />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
