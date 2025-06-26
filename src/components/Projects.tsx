
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useState } from 'react';
import { ExternalLink, Calendar, Award } from 'lucide-react';

const Projects = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      id: 1,
      title: "Implementation of Unmanned Aerial Vehicle in Agricultural Irrigation",
      type: "B.E Project",
      year: "2025",
      description: "Advanced UAV system designed for precision agricultural irrigation, incorporating smart sensors and automated control systems.",
      technologies: ["UAV Design", "Sensor Integration", "Automation", "Agricultural Tech"],
      image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=800&h=600&fit=crop",
      details: "This project focuses on developing an autonomous UAV system for agricultural irrigation management. The system incorporates advanced sensors for soil moisture detection, weather monitoring, and crop health assessment. The UAV is equipped with precision irrigation equipment and utilizes AI algorithms for optimal water distribution patterns.",
      achievements: ["Improved irrigation efficiency by 40%", "Reduced water wastage by 35%", "Automated crop monitoring system"]
    },
    {
      id: 2,
      title: "Future Main Battle Military Tanker",
      type: "Diploma Project", 
      year: "2022",
      description: "Innovative military vehicle design incorporating advanced armor systems and next-generation propulsion technology.",
      technologies: ["CAD Design", "Armor Systems", "Propulsion", "Military Engineering"],
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&h=600&fit=crop",
      details: "This project involved designing a next-generation military tank with enhanced protection systems, improved mobility, and advanced weapon systems. The design incorporates lightweight composite materials, reactive armor systems, and hybrid propulsion technology for better fuel efficiency and reduced environmental impact.",
      achievements: ["30% weight reduction", "Enhanced armor protection", "Improved fuel efficiency by 25%"]
    }
  ];

  const ProjectModal = ({ project, onClose }) => {
    if (!project) return null;

    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.7, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.7, opacity: 0 }}
          className="bg-slate-800 rounded-2xl p-8 max-w-4xl w-full max-h-[90vh] overflow-y-auto"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-64 object-cover rounded-xl"
              />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-white mb-4">{project.title}</h3>
              <div className="flex items-center gap-4 mb-4">
                <span className="px-3 py-1 bg-blue-500 text-white rounded-full text-sm">{project.type}</span>
                <span className="text-slate-400 flex items-center">
                  <Calendar size={16} className="mr-1" />
                  {project.year}
                </span>
              </div>
              <p className="text-slate-300 mb-6">{project.details}</p>
              
              <div className="mb-6">
                <h4 className="text-lg font-semibold text-white mb-3">Key Achievements</h4>
                <ul className="space-y-2">
                  {project.achievements.map((achievement, index) => (
                    <li key={index} className="text-slate-300 flex items-center">
                      <Award size={16} className="text-green-400 mr-2" />
                      {achievement}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-slate-700 text-slate-300 rounded-full text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
          
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-slate-400 hover:text-white text-2xl"
          >
            ×
          </button>
        </motion.div>
      </motion.div>
    );
  };

  return (
    <section id="projects" className="py-20 relative">
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
              Featured <span className="text-blue-400">Projects</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto"></div>
          </motion.div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.4 + index * 0.2 }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="group cursor-pointer"
                onClick={() => setSelectedProject(project)}
              >
                <div className="bg-slate-800/50 backdrop-blur-md rounded-2xl overflow-hidden border border-slate-700/50 hover:border-blue-400/50 transition-all duration-300">
                  {/* Project Image */}
                  <div className="relative overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent"></div>
                    <div className="absolute top-4 right-4">
                      <ExternalLink className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" size={20} />
                    </div>
                  </div>

                  {/* Project Content */}
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <span className="px-3 py-1 bg-blue-500 text-white rounded-full text-sm font-semibold">
                        {project.type}
                      </span>
                      <span className="text-slate-400 text-sm flex items-center">
                        <Calendar size={14} className="mr-1" />
                        {project.year}
                      </span>
                    </div>
                    
                    <h3 className="text-xl font-bold text-white mb-3 line-clamp-2">
                      {project.title}
                    </h3>
                    
                    <p className="text-slate-300 mb-4 line-clamp-3">
                      {project.description}
                    </p>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.slice(0, 3).map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-2 py-1 bg-slate-700 text-slate-300 rounded text-xs"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 3 && (
                        <span className="px-2 py-1 bg-slate-700 text-slate-300 rounded text-xs">
                          +{project.technologies.length - 3} more
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Project Modal */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  );
};

export default Projects;
