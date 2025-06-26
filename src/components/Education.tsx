
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { GraduationCap, Calendar, Award, BookOpen } from 'lucide-react';

const Education = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const educationData = [
    {
      level: "B.E. Mechanical Engineering",
      institution: "St. Joseph College of Engineering & Tech",
      percentage: "7.9 CGPA",
      year: "2025",
      icon: GraduationCap,
      color: "from-purple-500 to-pink-500",
      project: "Implementation of Unmanned Aerial Vehicle in Agricultural Irrigation"
    },
    {
      level: "Diploma in Mechanical",
      institution: "Periyar Centenary Polytechnic",
      percentage: "87.37%",
      year: "2022",
      icon: BookOpen,
      color: "from-blue-500 to-cyan-500",
      project: "Future Main Battle Military Tanker"
    },
    {
      level: "10th Standard",
      institution: "Don Bosco Matric HR Sec School",
      percentage: "74%",
      year: "2012",
      icon: Award,
      color: "from-green-500 to-teal-500",
      project: null
    }
  ];

  return (
    <section id="education" className="py-20 relative">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8 }}
        >
          {/* Section Title */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              <span className="text-blue-400">Education</span> Journey
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto"></div>
          </motion.div>

          {/* Timeline */}
          <div className="relative max-w-4xl mx-auto">
            {/* Timeline Line */}
            <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-500 to-cyan-500 rounded-full"></div>

            {educationData.map((item, index) => {
              const IconComponent = item.icon;
              const isEven = index % 2 === 0;

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.8, delay: 0.4 + index * 0.2 }}
                  className={`relative flex items-center mb-12 ${
                    isEven ? 'md:flex-row-reverse' : 'md:flex-row'
                  }`}
                >
                  {/* Timeline Node */}
                  <div className="absolute left-8 md:left-1/2 transform -translate-x-1/2 w-4 h-4 bg-white rounded-full border-4 border-blue-500 z-10"></div>

                  {/* Content Card */}
                  <motion.div
                    whileHover={{ scale: 1.02, y: -5 }}
                    transition={{ duration: 0.3 }}
                    className={`w-full md:w-5/12 ml-16 md:ml-0 ${
                      isEven ? 'md:mr-8' : 'md:ml-8'
                    }`}
                  >
                    <div className="bg-slate-800/50 backdrop-blur-md rounded-2xl p-6 border border-slate-700/50 hover:border-blue-400/50 transition-all duration-300">
                      {/* Header */}
                      <div className="flex items-center mb-4">
                        <div className={`bg-gradient-to-r ${item.color} p-3 rounded-full mr-4`}>
                          <IconComponent className="text-white" size={24} />
                        </div>
                        <div className="flex items-center text-slate-400">
                          <Calendar size={16} className="mr-2" />
                          <span className="font-semibold">{item.year}</span>
                        </div>
                      </div>

                      {/* Content */}
                      <h3 className="text-xl font-bold text-white mb-2">{item.level}</h3>
                      <p className="text-blue-400 font-semibold mb-2">{item.institution}</p>
                      <div className="flex items-center mb-4">
                        <div className={`bg-gradient-to-r ${item.color} text-white px-3 py-1 rounded-full text-sm font-semibold`}>
                          {item.percentage}
                        </div>
                      </div>

                      {/* Project Highlight */}
                      {item.project && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          transition={{ delay: 0.6 + index * 0.2 }}
                          className="bg-slate-700/50 rounded-lg p-4 mt-4"
                        >
                          <p className="text-slate-400 text-sm mb-1">Project Highlight:</p>
                          <p className="text-white font-medium">{item.project}</p>
                        </motion.div>
                      )}
                    </div>
                  </motion.div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Education;
