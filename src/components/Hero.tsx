
import { motion } from 'framer-motion';
import { Typewriter } from 'react-simple-typewriter';
import { ChevronDown } from 'lucide-react';

const Hero = () => {
  const scrollToAbout = () => {
    const element = document.querySelector('#about');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Enhanced Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-blue-900/30 to-cyan-900/20"></div>

      <div className="container mx-auto px-6 text-center z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <motion.h1 
            className="text-5xl md:text-7xl font-bold text-white mb-6"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <span className="bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Christo
            </span>
            <br />
            <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Charlas
            </span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
            className="text-xl md:text-2xl text-slate-200 mb-8 h-16"
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
            className="text-lg text-slate-300 mb-10 max-w-3xl mx-auto leading-relaxed"
          >
            Passionate about creating innovative engineering solutions through advanced CAD/REVIT MEP design. 
            Combining technical expertise with creative problem-solving to build the future of engineering.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 2 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: "0 10px 25px rgba(139, 92, 246, 0.4)" }}
              whileTap={{ scale: 0.95 }}
              onClick={scrollToAbout}
              className="px-8 py-4 bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-500 text-white rounded-full font-semibold text-lg transition-all duration-300 hover:shadow-lg shadow-purple-500/25"
            >
              Discover My Work
            </motion.button>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => window.open('mailto:christocharly04@gmail.com')}
              className="px-8 py-4 border-2 border-purple-400 text-purple-300 rounded-full font-semibold text-lg hover:bg-purple-400 hover:text-white transition-all duration-300"
            >
              Get In Touch
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
            className="text-white hover:text-purple-400 transition-colors"
          >
            <ChevronDown size={32} />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
