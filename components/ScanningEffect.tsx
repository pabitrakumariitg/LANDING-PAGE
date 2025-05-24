'use client';

import React, { useState, useEffect, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
interface ScanningEffectProps {
  isActive: boolean;
  color?: string;
  duration?: number;
  onScanComplete?: () => void;
  intensity?: number;
  particleCount?: number;
}
const ScanningEffect: React.FC<ScanningEffectProps> = ({
  isActive,
  color = 'rgba(65, 93, 128, 0.7)',
  duration = 2,
  onScanComplete,
  intensity = 1,
  particleCount = 15
}) => {
  const [scanComplete, setScanComplete] = useState(false);
  const [scanProgress, setScanProgress] = useState(0);
  
  // Generate random particles for the scanning effect
  const particles = useMemo(() => {
    return Array.from({ length: particleCount }).map((_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 3 + 1,
      delay: Math.random() * duration * 0.5
    }));
  }, [particleCount, duration]);

  useEffect(() => {
    if (!isActive) {
      setScanComplete(false);
      setScanProgress(0);
      return;
    }
    
    // Animate progress
    let startTime = Date.now();
    const interval = setInterval(() => {
      const elapsed = (Date.now() - startTime) / (duration * 1000);
      setScanProgress(Math.min(elapsed, 1));
      
      if (elapsed >= 1) {
        clearInterval(interval);
        setScanComplete(true);
        if (onScanComplete) onScanComplete();
      }
    }, 16);
    
    return () => clearInterval(interval);
  }, [isActive, duration, onScanComplete]);
  if (!isActive && !scanComplete) return null;
  
  if (scanComplete) {
    return (
      <motion.div 
        className="absolute inset-0 bg-[#415d80] bg-opacity-5 z-20 overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{
          opacity: [0, 0.5, 0],
          scale: [0.98, 1.02, 1]
        }}
        transition={{
          duration: 0.8,
          times: [0, 0.5, 1]
        }}
        onAnimationComplete={() => setScanComplete(false)}
      >
        {/* Completion pulse effect */}
        <motion.div 
          className="absolute inset-0 rounded-md"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1.1, opacity: [0, 0.7, 0] }}
          transition={{ duration: 0.8 }}
          style={{ borderColor: color, border: '2px solid' }}
        />
        
        {/* Particles burst effect */}
        {particles.map(particle => (
          <motion.div
            key={`complete-${particle.id}`}
            className="absolute rounded-full"
            style={{
              backgroundColor: color,
              width: particle.size,
              height: particle.size,
              left: '50%',
              top: '50%',
            }}
            initial={{ x: 0, y: 0, opacity: 0.8 }}
            animate={{
              x: (Math.random() - 0.5) * 200,
              y: (Math.random() - 0.5) * 200,
              opacity: 0
            }}
            transition={{ duration: 0.8 }}
          />
        ))}
      </motion.div>
    );
  }
  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Grid pattern overlay */}
      <div className="absolute inset-0 z-5 opacity-30" 
        style={{
          backgroundImage: `linear-gradient(${color} 1px, transparent 1px), linear-gradient(90deg, ${color} 1px, transparent 1px)`,
          backgroundSize: '20px 20px',
          opacity: scanProgress * 0.3
        }}
      />
      
      {/* Progress indicator */}
      <div className="absolute bottom-0 left-0 h-0.5 z-20 transition-all" 
        style={{ 
          width: `${scanProgress * 100}%`, 
          backgroundColor: color,
          boxShadow: `0 0 8px ${color}, 0 0 12px ${color}`
        }} 
      />
      
      {/* Horizontal scanning line with enhanced effect */}
      <motion.div 
        className="absolute left-0 right-0 z-10" 
        style={{
          height: `${Math.max(1, intensity * 2)}px`,
          backgroundColor: color,
          boxShadow: `0 0 ${8 * intensity}px ${color}, 0 0 ${12 * intensity}px ${color}`
        }} 
        initial={{
          top: 0,
          opacity: 0
        }} 
        animate={{
          top: '100%',
          opacity: [0, 1, 1, 0]
        }} 
        transition={{
          duration: duration,
          ease: 'linear',
          times: [0, 0.1, 0.9, 1]
        }} 
      />
      
      {/* Vertical scanning line with enhanced effect */}
      <motion.div 
        className="absolute top-0 bottom-0 z-10" 
        style={{
          width: `${Math.max(1, intensity * 2)}px`,
          backgroundColor: color,
          boxShadow: `0 0 ${8 * intensity}px ${color}, 0 0 ${12 * intensity}px ${color}`
        }} 
        initial={{
          left: 0,
          opacity: 0
        }} 
        animate={{
          left: '100%',
          opacity: [0, 1, 1, 0]
        }} 
        transition={{
          duration: duration * 0.8,
          ease: 'linear',
          times: [0, 0.1, 0.9, 1],
          delay: duration * 0.3
        }} 
      />
      
      {/* Scanning particles */}
      {particles.map(particle => (
        <motion.div
          key={particle.id}
          className="absolute rounded-full z-15"
          style={{
            backgroundColor: color,
            width: particle.size,
            height: particle.size,
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            boxShadow: `0 0 ${particle.size * 2}px ${color}`
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 0.8, 0] }}
          transition={{
            duration: duration * 0.4,
            delay: particle.delay,
            repeat: Math.floor(duration / 0.4),
            repeatDelay: Math.random() * 0.5
          }}
        />
      ))}
      
      {/* Scanning glow effect */}
      <motion.div 
        className="absolute inset-0 z-5 rounded-md" 
        initial={{
          boxShadow: `0 0 0 ${color}`
        }} 
        animate={{
          boxShadow: [`0 0 0 ${color}`, `0 0 ${10 * intensity}px ${color}`, `0 0 0 ${color}`]
        }} 
        transition={{
          duration: duration * 1.2,
          repeat: isActive ? Infinity : 0,
          ease: "easeInOut"
        }} 
      />
      
      {/* Corner markers */}
      {[0, 1, 2, 3].map(corner => {
        const isTop = corner < 2;
        const isLeft = corner % 2 === 0;
        return (
          <motion.div 
            key={`corner-${corner}`}
            className="absolute w-4 h-4 z-10"
            style={{
              top: isTop ? '0' : 'auto',
              bottom: !isTop ? '0' : 'auto',
              left: isLeft ? '0' : 'auto',
              right: !isLeft ? '0' : 'auto',
              borderTop: isTop ? `2px solid ${color}` : 'none',
              borderBottom: !isTop ? `2px solid ${color}` : 'none',
              borderLeft: isLeft ? `2px solid ${color}` : 'none',
              borderRight: !isLeft ? `2px solid ${color}` : 'none',
            }}
            animate={{
              opacity: [0.3, 1, 0.3],
              scale: [1, 1.05, 1]
            }}
            transition={{
              duration: duration * 0.8,
              repeat: Infinity,
              repeatType: "reverse"
            }}
          />
        );
      })}
    </div>
  );
};
export default ScanningEffect;