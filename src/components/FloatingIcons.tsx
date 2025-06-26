
import { motion } from 'framer-motion';
import { Linkedin, Github, Mail, Twitter } from 'lucide-react';

const FloatingIcons = () => {
  const socialLinks = [
    { 
      icon: Linkedin, 
      href: 'https://linkedin.com', 
      color: '#0077b5',
      label: 'LinkedIn'
    },
    { 
      icon: Github, 
      href: 'https://github.com', 
      color: '#333',
      label: 'GitHub'
    },
    { 
      icon: Mail, 
      href: 'mailto:christocharly04@gmail.com', 
      color: '#ea4335',
      label: 'Email'
    },
    { 
      icon: Twitter, 
      href: 'https://twitter.com', 
      color: '#1da1f2',
      label: 'Twitter'
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, delay: 1 }}
      className="fixed left-6 top-1/2 transform -translate-y-1/2 z-30 hidden lg:block"
    >
      <div className="flex flex-col space-y-4">
        {socialLinks.map((social, index) => {
          const IconComponent = social.icon;
          return (
            <motion.a
              key={index}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1.2 + index * 0.1 }}
              whileHover={{ 
                scale: 1.2, 
                rotate: 10,
                boxShadow: `0 0 20px ${social.color}50`
              }}
              whileTap={{ scale: 0.9 }}
              className="group relative p-3 bg-slate-800/80 backdrop-blur-md rounded-xl border border-slate-700/50 hover:border-blue-400/50 transition-all duration-300"
              style={{ 
                boxShadow: `0 4px 15px ${social.color}20` 
              }}
            >
              <IconComponent 
                size={20} 
                className="text-slate-300 group-hover:text-white transition-colors duration-300"
              />
              
              {/* Tooltip */}
              <div className="absolute left-full ml-3 top-1/2 transform -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                <div className="bg-slate-900 text-white px-3 py-1 rounded-lg text-sm whitespace-nowrap">
                  {social.label}
                  <div className="absolute right-full top-1/2 transform -translate-y-1/2 border-4 border-transparent border-r-slate-900"></div>
                </div>
              </div>
            </motion.a>
          );
        })}
        
        {/* Vertical Line */}
        <motion.div
          initial={{ height: 0 }}
          animate={{ height: 60 }}
          transition={{ duration: 0.8, delay: 1.8 }}
          className="w-px bg-gradient-to-b from-blue-500 to-transparent mx-auto"
        ></motion.div>
      </div>
    </motion.div>
  );
};

export default FloatingIcons;
