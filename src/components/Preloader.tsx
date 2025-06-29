
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

const Preloader = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) return 100;
        return prev + 2;
      });
    }, 80);

    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-slate-900 via-gray-900 to-slate-800"
    >
      {/* AutoCAD Grid Background */}
      <div className="absolute inset-0 opacity-20">
        <div className="w-full h-full bg-grid-pattern"></div>
      </div>

      <div className="text-center relative z-10">
        {/* CAD Logo/Icon */}
        <motion.div
          className="w-32 h-32 mx-auto mb-8 relative"
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        >
          <svg viewBox="0 0 120 120" className="w-full h-full">
            {/* Outer circle */}
            <motion.circle
              cx="60"
              cy="60"
              r="55"
              fill="none"
              stroke="#124E66"
              strokeWidth="2"
              strokeDasharray="10,5"
              animate={{ rotate: 360 }}
              transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
            />
            
            {/* Inner technical elements */}
            <motion.g
              animate={{ rotate: -360 }}
              transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
            >
              <line x1="30" y1="60" x2="90" y2="60" stroke="#748D92" strokeWidth="2"/>
              <line x1="60" y1="30" x2="60" y2="90" stroke="#748D92" strokeWidth="2"/>
              <circle cx="60" cy="60" r="15" fill="none" stroke="#2E3944" strokeWidth="2"/>
              <circle cx="60" cy="60" r="25" fill="none" stroke="#2E3944" strokeWidth="1"/>
            </motion.g>

            {/* CAD symbols */}
            <text x="60" y="67" textAnchor="middle" className="text-xl font-bold fill-[#124E66]">
              CAD
            </text>
          </svg>
        </motion.div>

        {/* Technical Loading Text */}
        <motion.h2
          className="text-2xl font-bold text-[#748D92] mb-2"
          animate={{ opacity: [1, 0.7, 1] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          Initializing CAD Environment
        </motion.h2>

        <motion.p
          className="text-[#2E3944] mb-6 font-mono text-sm"
          animate={{ opacity: [0.7, 1, 0.7] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          Loading Christo's Engineering Portfolio...
        </motion.p>

        {/* Progress Bar */}
        <div className="w-80 mx-auto bg-slate-700 rounded-none h-2 mb-4 border border-[#124E66]">
          <motion.div
            className="h-full bg-gradient-to-r from-[#124E66] to-[#748D92]"
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.1 }}
          />
        </div>
        
        <p className="text-[#748D92] font-mono text-sm">
          Progress: {progress}% | Status: Loading...
        </p>

        {/* Technical corner elements */}
        <div className="absolute top-4 left-4">
          <div className="w-8 h-8 border-l-2 border-t-2 border-[#124E66]"></div>
        </div>
        <div className="absolute top-4 right-4">
          <div className="w-8 h-8 border-r-2 border-t-2 border-[#124E66]"></div>
        </div>
        <div className="absolute bottom-4 left-4">
          <div className="w-8 h-8 border-l-2 border-b-2 border-[#124E66]"></div>
        </div>
        <div className="absolute bottom-4 right-4">
          <div className="w-8 h-8 border-r-2 border-b-2 border-[#124E66]"></div>
        </div>
      </div>

      {/* Animated technical lines */}
      {Array.from({ length: 3 }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-full h-px bg-gradient-to-r from-transparent via-[#124E66] to-transparent"
          style={{ top: `${30 + i * 20}%` }}
          animate={{ 
            scaleX: [0, 1, 0],
            opacity: [0, 0.5, 0]
          }}
          transition={{ 
            duration: 3, 
            repeat: Infinity,
            delay: i * 0.5
          }}
        />
      ))}
    </motion.div>
  );
};

export default Preloader;
