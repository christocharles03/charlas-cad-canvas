
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
    // Replace with actual resume file path
    const link = document.createElement('a');
    link.href = '/resume.pdf'; // You'll need to add your resume file to the public folder
    link.download = 'Christo_Charlas_Resume.pdf';
    link.click();
  };

  const handleViewResume = () => {
    // Replace with actual resume file path
    window.open('/resume.pdf', '_blank');
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Enhanced Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-red-100/20 via-orange-100/30 to-red-50/20 dark:from-cyan-900/20 dark:via-blue-900/30 dark:to-cyan-800/20"></div>

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
            <span className="bg-gradient-to-r from-red-500 via-orange-500 to-red-600 dark:from-cyan-400 dark:via-blue-400 dark:to-cyan-500 bg-clip-text text-transparent">
              Christo
            </span>
            <br />
            <span className="bg-gradient-to-r from-orange-500 via-red-500 to-red-700 dark:from-blue-400 dark:via-cyan-400 dark:to-blue-600 bg-clip-text text-transparent">
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
              whileHover={{ scale: 1.05, boxShadow: "0 10px 25px rgba(220, 38, 38, 0.4)" }}
              whileTap={{ scale: 0.95 }}
              onClick={scrollToAbout}
              className="px-8 py-4 bg-gradient-to-r from-red-500 via-orange-500 to-red-600 dark:from-cyan-500 dark:via-blue-500 dark:to-cyan-600 text-white rounded-full font-semibold text-lg transition-all duration-300 hover:shadow-lg shadow-red-500/25 dark:shadow-cyan-500/25"
            >
              Discover My Work
            </motion.button>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => window.open('mailto:christocharly04@gmail.com')}
              className="px-8 py-4 border-2 border-red-500 dark:border-cyan-400 text-red-600 dark:text-cyan-300 rounded-full font-semibold text-lg hover:bg-red-500 dark:hover:bg-cyan-400 hover:text-white dark:hover:text-gray-900 transition-all duration-300"
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
              className="flex items-center gap-2 px-6 py-3 bg-red-600/80 dark:bg-cyan-600/80 text-white rounded-lg font-medium text-sm hover:bg-red-600 dark:hover:bg-cyan-600 transition-all duration-300 backdrop-blur-sm"
            >
              <Download size={18} />
              Download Resume
            </motion.button>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleViewResume}
              className="flex items-center gap-2 px-6 py-3 bg-gray-600/80 dark:bg-gray-700/80 text-white rounded-lg font-medium text-sm hover:bg-gray-600 dark:hover:bg-gray-700 transition-all duration-300 backdrop-blur-sm"
            >
              <Eye size={18} />
              View Resume
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
            className="text-gray-600 dark:text-white hover:text-red-500 dark:hover:text-cyan-400 transition-colors"
          >
            <ChevronDown size={32} />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
