
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { User, Phone, Mail, Target } from 'lucide-react';

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut" as const,
      },
    },
  };

  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="max-w-6xl mx-auto"
        >
          {/* Section Title */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              About <span className="text-blue-400">Me</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto"></div>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <motion.div variants={itemVariants} className="space-y-8">
              {/* Main Description */}
              <div className="bg-slate-800/50 backdrop-blur-md rounded-2xl p-8 border border-slate-700/50">
                <div className="flex items-center mb-6">
                  <Target className="text-blue-400 mr-3" size={24} />
                  <h3 className="text-2xl font-semibold text-white">Professional Objective</h3>
                </div>
                <p className="text-slate-300 leading-relaxed text-lg">
                  Seeking a challenging position in CAD/REVIT MEP to achieve professional growth and 
                  contribute effectively to organizational success. I'm confident that my presence will 
                  add value to any engineering team.
                </p>
              </div>

              {/* Core Strengths */}
              <div className="bg-slate-800/50 backdrop-blur-md rounded-2xl p-8 border border-slate-700/50">
                <h3 className="text-2xl font-semibold text-white mb-6 flex items-center">
                  <User className="text-cyan-400 mr-3" size={24} />
                  Core Strengths
                </h3>
                <div className="space-y-4">
                  {[
                    'Proven track record in drafting',
                    'Strong organizational skills',
                    'Excellent communication abilities'
                  ].map((strength, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={inView ? { opacity: 1, x: 0 } : {}}
                      transition={{ delay: 0.5 + index * 0.1 }}
                      className="flex items-center"
                    >
                      <div className="w-2 h-2 bg-blue-400 rounded-full mr-4"></div>
                      <span className="text-slate-300">{strength}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Right Content - Contact Info */}
            <motion.div variants={itemVariants} className="space-y-6">
              {/* Contact Cards */}
              <div className="space-y-4">
                <motion.div
                  whileHover={{ scale: 1.02, y: -5 }}
                  transition={{ duration: 0.3 }}
                  className="bg-gradient-to-r from-slate-800/50 to-slate-700/50 backdrop-blur-md rounded-xl p-6 border border-slate-600/50 hover:border-blue-400/50 transition-all duration-300"
                >
                  <div className="flex items-center">
                    <div className="bg-blue-500/20 p-3 rounded-full mr-4">
                      <Phone className="text-blue-400" size={20} />
                    </div>
                    <div>
                      <p className="text-slate-400 text-sm">Mobile</p>
                      <p className="text-white font-semibold">8825856423</p>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.02, y: -5 }}
                  transition={{ duration: 0.3 }}
                  className="bg-gradient-to-r from-slate-800/50 to-slate-700/50 backdrop-blur-md rounded-xl p-6 border border-slate-600/50 hover:border-cyan-400/50 transition-all duration-300"
                >
                  <div className="flex items-center">
                    <div className="bg-cyan-500/20 p-3 rounded-full mr-4">
                      <Mail className="text-cyan-400" size={20} />
                    </div>
                    <div>
                      <p className="text-slate-400 text-sm">Email</p>
                      <p className="text-white font-semibold">christocharly04@gmail.com</p>
                    </div>
                  </div>
                </motion.div>
              </div>

              {/* Decorative Element */}
              <motion.div
                animate={{ 
                  rotate: [0, 360],
                  scale: [1, 1.1, 1]
                }}
                transition={{ 
                  duration: 20,
                  repeat: Infinity,
                  ease: "linear"
                }}
                className="mx-auto w-32 h-32 border-4 border-blue-400/30 rounded-full flex items-center justify-center"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center">
                  <User className="text-white" size={32} />
                </div>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
