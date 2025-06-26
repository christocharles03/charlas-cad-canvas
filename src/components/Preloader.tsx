
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
      className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900"
    >
      <div className="text-center">
        {/* AutoCAD-inspired 3D Logo Animation */}
        <div className="relative w-80 h-80 mb-8 mx-auto flex items-center justify-center">
          <svg className="w-64 h-64" viewBox="0 0 200 200">
            {/* Main Triangle Structure - inspired by AutoCAD logo */}
            <motion.path
              d="M100 20 L170 160 L30 160 Z"
              fill="none"
              stroke="#dc2626"
              strokeWidth="3"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{ duration: 2, ease: "easeInOut" }}
            />
            
            {/* Inner geometric lines */}
            <motion.path
              d="M100 20 L100 160"
              fill="none"
              stroke="#ef4444"
              strokeWidth="2"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 1.5, delay: 0.5 }}
            />
            
            <motion.path
              d="M65 90 L135 90"
              fill="none"
              stroke="#f87171"
              strokeWidth="2"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 1.5, delay: 0.8 }}
            />
            
            <motion.path
              d="M82.5 125 L117.5 125"
              fill="none"
              stroke="#fca5a5"
              strokeWidth="2"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 1.5, delay: 1.1 }}
            />

            {/* 3D effect shadows */}
            <motion.path
              d="M105 25 L175 165 L35 165 Z"
              fill="#991b1b"
              opacity="0.3"
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.3 }}
              transition={{ duration: 1, delay: 1.5 }}
            />

            {/* Rotating engineering compass */}
            <motion.g
              animate={{ rotate: 360 }}
              transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
              style={{ transformOrigin: "100px 100px" }}
            >
              <circle cx="100" cy="100" r="8" fill="#3b82f6" opacity="0.8" />
              <path d="M100 92 L100 108 M92 100 L108 100" stroke="#60a5fa" strokeWidth="2" />
            </motion.g>
          </svg>

          {/* Grid background with animation */}
          <div className="absolute inset-0 opacity-10">
            <svg className="w-full h-full">
              <defs>
                <pattern id="engineeringGrid" width="20" height="20" patternUnits="userSpaceOnUse">
                  <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#3b82f6" strokeWidth="0.5"/>
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#engineeringGrid)" />
            </svg>
          </div>
        </div>

        {/* Loading Text with CAD theme */}
        <motion.h2
          className="text-3xl font-bold text-red-400 mb-4"
          animate={{ opacity: [1, 0.5, 1] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          Initializing CAD Workspace...
        </motion.h2>

        {/* Progress Bar */}
        <div className="w-80 mx-auto bg-slate-700 rounded-full h-2 overflow-hidden">
          <motion.div
            className="h-full bg-gradient-to-r from-red-500 to-red-600"
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.1 }}
          />
        </div>
        
        <p className="text-slate-400 mt-4 font-mono">
          Loading Christo's Portfolio... {progress}%
        </p>
      </div>
    </motion.div>
  );
};

export default Preloader;
