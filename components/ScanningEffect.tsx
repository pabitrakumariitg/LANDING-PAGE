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
  chartType?: string; // Added to determine which type of popup to show
}
const ScanningEffect: React.FC<ScanningEffectProps> = ({
  isActive,
  color = 'rgba(25, 118, 210, 0.8)', // Changed to a more vibrant blue
  duration = 3, // Increased duration for more natural feel
  onScanComplete,
  intensity = 1.5, // Increased intensity for better visibility
  particleCount = 25, // Increased particle count for more animation
  chartType = 'chart' // Default to chart if not specified
}) => {
  const [scanComplete, setScanComplete] = useState(false);
  const [scanProgress, setScanProgress] = useState(0);
  const [showPopup, setShowPopup] = useState(false);
  const [popupPosition, setPopupPosition] = useState({ x: 50, y: 50 });
  const [popupContent, setPopupContent] = useState('');
  
  // Generate random particles for the scanning effect with more variation
  const particles = useMemo(() => {
    return Array.from({ length: particleCount }).map((_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 4 + 1, // Increased size variation
      delay: Math.random() * duration * 0.7, // More varied delays
      speed: 0.3 + Math.random() * 0.7 // Random speed for more natural movement
    }));
  }, [particleCount, duration]);

  useEffect(() => {
    if (!isActive) {
      setScanComplete(false);
      setScanProgress(0);
      setShowPopup(false);
      return;
    }
    
    // Animate progress continuously
    let startTime = Date.now();
    const interval = setInterval(() => {
      const elapsed = ((Date.now() - startTime) % (duration * 1000)) / (duration * 1000);
      setScanProgress(elapsed);
      
      // Call onScanComplete at the end of each cycle but don't stop the animation
      if (elapsed < 0.01 && scanProgress > 0.99) {
        if (onScanComplete) onScanComplete();
        
        // Randomly show popup with insights
        if (Math.random() > 0.5) {
          // Generate random position for the popup
          const x = 20 + Math.random() * 60; // Between 20-80% of width
          const y = 20 + Math.random() * 60; // Between 20-80% of height
          setPopupPosition({ x, y });
          
          // Set popup content based on chart type
          if (chartType === 'chart') {
            setPopupContent(getRandomChartInsight());
          } else if (chartType === 'document') {
            setPopupContent(getRandomDocumentInsight());
          } else if (chartType === 'table') {
            setPopupContent(getRandomTableInsight());
          }
          
          // Show popup
          setShowPopup(true);
          
          // Hide popup after a delay
          setTimeout(() => {
            setShowPopup(false);
          }, 2000);
        }
      }
    }, 16);
    
    return () => clearInterval(interval);
  }, [isActive, duration, onScanComplete, chartType]);

  // Helper functions to generate random insights based on chart type
  const getRandomChartInsight = () => {
    const insights = [
      'Revenue trend +23%',
      'Q3 growth detected',
      'Pattern identified',
      'Outlier detected',
      'Peak value: 1.2M'
    ];
    return insights[Math.floor(Math.random() * insights.length)];
  };
  
  const getRandomDocumentInsight = () => {
    const insights = [
      'Key term found',
      'Sentiment: positive',
      'Risk factor identified',
      'Compliance verified',
      'Keyword match: 87%'
    ];
    return insights[Math.floor(Math.random() * insights.length)];
  };
  
  const getRandomTableInsight = () => {
    const insights = [
      'Data anomaly found',
      'Row 7: significant',
      'Column correlation',
      'Missing data: 2%',
      'Trend in column 3'
    ];
    return insights[Math.floor(Math.random() * insights.length)];
  };

  if (!isActive) return null;

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
      
      {/* Progress indicator removed as requested */}
      
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
          ease: 'easeInOut', // Changed from linear to easeInOut for more natural movement
          times: [0, 0.1, 0.9, 1],
          repeat: Infinity,
          repeatDelay: 0.2 // Small delay between scans for more natural rhythm
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
          duration: duration * 0.9, // Slightly longer duration
          ease: 'easeInOut', // More natural movement
          times: [0, 0.1, 0.9, 1],
          delay: duration * 0.2, // Reduced delay for better coordination
          repeat: Infinity,
          repeatDelay: 0.3 // Small delay between scans
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
            duration: duration * particle.speed, // Dynamic duration based on particle speed
            delay: particle.delay,
            repeat: Infinity,
            repeatDelay: Math.random() * 0.8, // More varied repeat delay
            ease: "easeInOut" // Smoother animation
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
          boxShadow: [`0 0 0 ${color}`, `0 0 ${15 * intensity}px ${color}`, `0 0 0 ${color}`]
        }} 
        transition={{
          duration: duration * 1.5, // Longer duration for more pronounced effect
          repeat: isActive ? Infinity : 0,
          ease: "easeInOut",
          repeatType: "reverse" // Smoother transitions between cycles
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
              repeatType: "reverse",
              ease: "easeInOut" // Smoother animation
            }}
          />
        );
      })}
      
      {/* Insight popup animation */}
      <AnimatePresence>
        {showPopup && (
          <motion.div
            className="absolute z-30 bg-white bg-opacity-90 px-3 py-1 rounded-md text-xs font-medium text-blue-700 border border-blue-300 shadow-lg"
            style={{
              left: `${popupPosition.x}%`,
              top: `${popupPosition.y}%`,
              transform: 'translate(-50%, -50%)'
            }}
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.5 }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex items-center">
              <svg className="w-3 h-3 mr-1 text-blue-600" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"></path>
              </svg>
              {popupContent}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
export default ScanningEffect;