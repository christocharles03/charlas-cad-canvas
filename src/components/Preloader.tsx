
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
      className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-green-50 via-emerald-100 to-teal-200"
    >
      <div className="text-center">
        {/* Spring Nature Animation */}
        <div className="relative w-80 h-80 mb-8 mx-auto flex items-center justify-center">
          {/* Animated Sun */}
          <motion.div
            className="absolute top-8 left-16 w-16 h-16 bg-yellow-400 rounded-full shadow-lg"
            animate={{ 
              scale: [1, 1.1, 1],
              rotate: 360 
            }}
            transition={{ 
              scale: { duration: 2, repeat: Infinity },
              rotate: { duration: 20, repeat: Infinity, ease: "linear" }
            }}
          >
            {/* Sun rays */}
            {Array.from({ length: 8 }).map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-1 h-6 bg-yellow-300 rounded-full"
                style={{
                  top: '-12px',
                  left: '50%',
                  transformOrigin: '50% 20px',
                  transform: `translateX(-50%) rotate(${i * 45}deg)`
                }}
                animate={{ opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 1.5, repeat: Infinity, delay: i * 0.1 }}
              />
            ))}
          </motion.div>

          {/* Animated Trees */}
          <div className="absolute bottom-20 left-8">
            <motion.svg 
              width="60" 
              height="80" 
              viewBox="0 0 60 80"
              animate={{ y: [-2, 2, -2] }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              {/* Tree trunk */}
              <rect x="26" y="50" width="8" height="30" fill="#8B4513" />
              {/* Tree leaves - multiple layers for depth */}
              <motion.ellipse 
                cx="30" 
                cy="35" 
                rx="20" 
                ry="25" 
                fill="#22C55E"
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
              <motion.ellipse 
                cx="30" 
                cy="25" 
                rx="15" 
                ry="20" 
                fill="#16A34A"
                animate={{ scale: [1, 1.08, 1] }}
                transition={{ duration: 2.5, repeat: Infinity }}
              />
            </motion.svg>
          </div>

          {/* Second tree */}
          <div className="absolute bottom-20 right-12">
            <motion.svg 
              width="50" 
              height="70" 
              viewBox="0 0 50 70"
              animate={{ y: [2, -2, 2] }}
              transition={{ duration: 2.5, repeat: Infinity }}
            >
              <rect x="21" y="45" width="8" height="25" fill="#8B4513" />
              <motion.ellipse 
                cx="25" 
                cy="32" 
                rx="18" 
                ry="22" 
                fill="#22C55E"
                animate={{ scale: [1, 1.06, 1] }}
                transition={{ duration: 2.2, repeat: Infinity }}
              />
              <motion.ellipse 
                cx="25" 
                cy="22" 
                rx="13" 
                ry="18" 
                fill="#16A34A"
                animate={{ scale: [1, 1.09, 1] }}
                transition={{ duration: 2.8, repeat: Infinity }}
              />
            </motion.svg>
          </div>

          {/* Animated Flowers */}
          {Array.from({ length: 6 }).map((_, i) => (
            <motion.div
              key={i}
              className="absolute bottom-16"
              style={{
                left: `${20 + i * 40}px`,
              }}
              animate={{ 
                y: [0, -5, 0],
                rotate: [-2, 2, -2]
              }}
              transition={{ 
                duration: 2 + i * 0.3, 
                repeat: Infinity,
                delay: i * 0.2
              }}
            >
              <svg width="20" height="25" viewBox="0 0 20 25">
                {/* Flower stem */}
                <line x1="10" y1="15" x2="10" y2="25" stroke="#16A34A" strokeWidth="2" />
                {/* Flower petals */}
                <circle cx="6" cy="8" r="3" fill="#EC4899" opacity="0.8" />
                <circle cx="14" cy="8" r="3" fill="#EC4899" opacity="0.8" />
                <circle cx="10" cy="4" r="3" fill="#EC4899" opacity="0.8" />
                <circle cx="10" cy="12" r="3" fill="#EC4899" opacity="0.8" />
                {/* Flower center */}
                <circle cx="10" cy="8" r="2" fill="#FDE047" />
              </svg>
            </motion.div>
          ))}

          {/* Floating Butterflies */}
          <motion.div
            className="absolute top-24 right-20"
            animate={{ 
              x: [0, 20, 0, -15, 0],
              y: [0, -10, -5, 5, 0]
            }}
            transition={{ duration: 8, repeat: Infinity }}
          >
            <svg width="24" height="20" viewBox="0 0 24 20">
              {/* Butterfly wings */}
              <ellipse cx="6" cy="6" rx="5" ry="4" fill="#F97316" opacity="0.8" />
              <ellipse cx="18" cy="6" rx="5" ry="4" fill="#F97316" opacity="0.8" />
              <ellipse cx="6" cy="14" rx="4" ry="3" fill="#EA580C" opacity="0.8" />
              <ellipse cx="18" cy="14" rx="4" ry="3" fill="#EA580C" opacity="0.8" />
              {/* Butterfly body */}
              <line x1="12" y1="2" x2="12" y2="18" stroke="#7C2D12" strokeWidth="2" />
              {/* Antennae */}
              <line x1="12" y1="2" x2="10" y2="0" stroke="#7C2D12" strokeWidth="1" />
              <line x1="12" y1="2" x2="14" y2="0" stroke="#7C2D12" strokeWidth="1" />
            </svg>
          </motion.div>

          {/* Grass animation */}
          <div className="absolute bottom-0 left-0 right-0 h-16 overflow-hidden">
            {Array.from({ length: 20 }).map((_, i) => (
              <motion.div
                key={i}
                className="absolute bottom-0 w-1 bg-green-400 rounded-t-full"
                style={{
                  left: `${i * 5}%`,
                  height: `${20 + Math.random() * 20}px`
                }}
                animate={{ 
                  scaleY: [1, 1.1, 1],
                  x: [0, 2, 0]
                }}
                transition={{ 
                  duration: 2 + Math.random() * 2, 
                  repeat: Infinity,
                  delay: i * 0.1
                }}
              />
            ))}
          </div>
        </div>

        {/* Spring Loading Text */}
        <motion.h2
          className="text-3xl font-bold text-green-700 mb-4"
          animate={{ 
            color: ['#15803d', '#16a34a', '#22c55e', '#16a34a', '#15803d']
          }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          Spring is Loading...
        </motion.h2>

        {/* Progress Bar with Spring Theme */}
        <div className="w-80 mx-auto bg-green-100 rounded-full h-3 overflow-hidden border border-green-200">
          <motion.div
            className="h-full bg-gradient-to-r from-green-400 via-emerald-500 to-teal-500 rounded-full"
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.1 }}
          />
        </div>
        
        <p className="text-green-600 mt-4 font-medium">
          Blooming Christo's Portfolio... {progress}%
        </p>

        {/* Floating particles effect */}
        {Array.from({ length: 8 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-green-300 rounded-full opacity-60"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.6, 1, 0.3, 0.6]
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: i * 0.5
            }}
          />
        ))}
      </div>
    </motion.div>
  );
};

export default Preloader;
