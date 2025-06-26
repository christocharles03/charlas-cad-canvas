
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

const Preloader = () => {
  const [progress, setProgress] = useState(0);
  const [currentLine, setCurrentLine] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) return 100;
        return prev + 2;
      });
    }, 80);

    const lineInterval = setInterval(() => {
      setCurrentLine(prev => (prev + 1) % 4);
    }, 500);

    return () => {
      clearInterval(interval);
      clearInterval(lineInterval);
    };
  }, []);

  const blueprintLines = [
    { x1: "10%", y1: "20%", x2: "90%", y2: "20%" },
    { x1: "10%", y1: "40%", x2: "70%", y2: "40%" },
    { x1: "10%", y1: "60%", x2: "85%", y2: "60%" },
    { x1: "10%", y1: "80%", x2: "75%", y2: "80%" },
  ];

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900"
    >
      <div className="text-center">
        {/* Blueprint Animation */}
        <div className="relative w-80 h-60 mb-8 mx-auto border-2 border-blue-400 bg-slate-800 rounded-lg overflow-hidden">
          <svg className="w-full h-full">
            {blueprintLines.map((line, index) => (
              <motion.line
                key={index}
                x1={line.x1}
                y1={line.y1}
                x2={line.x2}
                y2={line.y2}
                stroke="#60a5fa"
                strokeWidth="2"
                initial={{ pathLength: 0 }}
                animate={{ 
                  pathLength: currentLine >= index ? 1 : 0,
                  opacity: currentLine >= index ? 1 : 0.3
                }}
                transition={{ duration: 0.8, ease: "easeInOut" }}
              />
            ))}
            
            {/* Grid Pattern */}
            <defs>
              <pattern id="grid" width="20" height="20" patternUnits="userSpaceOnUse">
                <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#1e3a8a" strokeWidth="0.5" opacity="0.3"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
          
          {/* CAD Cursor */}
          <motion.div
            className="absolute w-4 h-4 border-2 border-yellow-400"
            animate={{
              x: ["10%", "90%", "70%", "85%", "75%"],
              y: ["20%", "20%", "40%", "60%", "80%"]
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "linear"
            }}
          />
        </div>

        {/* Loading Text */}
        <motion.h2
          className="text-3xl font-bold text-blue-400 mb-4"
          animate={{ opacity: [1, 0.5, 1] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          Initializing CAD Workspace...
        </motion.h2>

        {/* Progress Bar */}
        <div className="w-80 mx-auto bg-slate-700 rounded-full h-2 overflow-hidden">
          <motion.div
            className="h-full bg-gradient-to-r from-blue-500 to-cyan-400"
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
