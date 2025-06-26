
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Briefcase, MapPin, Calendar, Building } from 'lucide-react';

const Experience = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const experiences = [
    {
      title: "Tekla Steel Detailer",
      company: "Yugo Steels Solutions",
      location: "Trichy",
      duration: "Feb – May 2025",
      type: "Internship",
      description: "Specialized in steel detailing using Tekla Structures software, creating detailed 3D models and drawings for structural steel projects.",
      responsibilities: [
        "Created detailed steel connection drawings",
        "Developed 3D models for complex steel structures",
        "Collaborated with engineering teams on project specifications",
        "Ensured compliance with industry standards and codes"
      ],
      color: "from-green-500 to-teal-500"
    },
    {
      title: "Design Engineer Intern",
      company: "New Tech Auto Components",
      location: "Chennai",
      duration: "Internship",
      type: "Design Engineering",
      description: "Gained hands-on experience in automotive component design and engineering processes using CAD software and industry best practices.",
      responsibilities: [
        "Assisted in automotive component design",
        "Performed design analysis and validation",
        "Created technical drawings and specifications",
        "Participated in design review meetings"
      ],
      color: "from-blue-500 to-cyan-500"
    }
  ];

  return (
    <section id="experience" className="py-20 relative">
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
              Professional <span className="text-blue-400">Experience</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto"></div>
          </motion.div>

          {/* Experience Timeline */}
          <div className="max-w-4xl mx-auto">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.4 + index * 0.2 }}
                className="relative mb-12 last:mb-0"
              >
                {/* Timeline Line */}
                {index < experiences.length - 1 && (
                  <div className="absolute left-8 top-20 w-1 h-32 bg-gradient-to-b from-blue-500 to-transparent"></div>
                )}

                <div className="flex items-start">
                  {/* Timeline Node */}
                  <motion.div
                    whileHover={{ scale: 1.2 }}
                    className={`flex-shrink-0 w-16 h-16 bg-gradient-to-r ${exp.color} rounded-full flex items-center justify-center mr-6 relative z-10`}
                  >
                    <Briefcase className="text-white" size={24} />
                  </motion.div>

                  {/* Experience Card */}
                  <motion.div
                    whileHover={{ scale: 1.02, y: -5 }}
                    transition={{ duration: 0.3 }}
                    className="flex-1 bg-slate-800/50 backdrop-blur-md rounded-2xl p-8 border border-slate-700/50 hover:border-blue-400/50 transition-all duration-300"
                  >
                    {/* Header */}
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                      <div>
                        <h3 className="text-2xl font-bold text-white mb-2">{exp.title}</h3>
                        <div className="flex items-center text-blue-400 mb-2">
                          <Building size={18} className="mr-2" />
                          <span className="font-semibold">{exp.company}</span>
                        </div>
                      </div>
                      <div className="flex flex-col md:items-end">
                        <div className="flex items-center text-slate-400 mb-2">
                          <MapPin size={16} className="mr-2" />
                          <span>{exp.location}</span>
                        </div>
                        <div className="flex items-center text-slate-400">
                          <Calendar size={16} className="mr-2" />
                          <span>{exp.duration}</span>
                        </div>
                      </div>
                    </div>

                    {/* Type Badge */}
                    <div className="mb-4">
                      <span className={`px-4 py-2 bg-gradient-to-r ${exp.color} text-white rounded-full text-sm font-semibold`}>
                        {exp.type}
                      </span>
                    </div>

                    {/* Description */}
                    <p className="text-slate-300 mb-6 leading-relaxed">
                      {exp.description}
                    </p>

                    {/* Responsibilities */}
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-4">Key Responsibilities:</h4>
                      <div className="grid md:grid-cols-2 gap-3">
                        {exp.responsibilities.map((responsibility, respIndex) => (
                          <motion.div
                            key={respIndex}
                            initial={{ opacity: 0, x: -20 }}
                            animate={inView ? { opacity: 1, x: 0 } : {}}
                            transition={{ delay: 0.6 + index * 0.2 + respIndex * 0.1 }}
                            className="flex items-start"
                          >
                            <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                            <span className="text-slate-300 text-sm">{responsibility}</span>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
