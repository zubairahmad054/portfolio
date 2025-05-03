import React from 'react';
import { motion } from 'framer-motion';

const LoadingAnimation: React.FC<{ size?: number; color?: string }> = ({ 
  size = 48,
  color = 'rgb(100, 255, 218)'
}) => {
  return (
    <div className="flex items-center justify-center" style={{ width: size, height: size }}>
      <motion.div
        className="relative w-full h-full"
        animate={{
          rotate: 360
        }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          ease: "linear"
        }}
      >
        <div className="absolute inset-0 rounded-full border-2 border-transparent border-t-secondary"
          style={{ borderTopColor: color }}
        />
        <motion.div
          className="absolute inset-0 rounded-full border-2 border-transparent border-l-secondary/30"
          animate={{ rotate: -360 }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "linear"
          }}
          style={{ borderLeftColor: `${color}30` }}
        />
      </motion.div>
    </div>
  );
};

export default LoadingAnimation;