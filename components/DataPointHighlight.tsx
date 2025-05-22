'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
interface DataPointHighlightProps {
  isActive: boolean;
  points: {
    x: number;
    y: number;
  }[];
  duration?: number;
}
const DataPointHighlight: React.FC<DataPointHighlightProps> = ({
  isActive,
  points,
  duration = 3
}) => {
  const [activePointIndex, setActivePointIndex] = useState(-1);
  useEffect(() => {
    if (!isActive) {
      setActivePointIndex(-1);
      return;
    }
    let currentIndex = 0;
    const interval = setInterval(() => {
      if (currentIndex >= points.length) {
        clearInterval(interval);
        return;
      }
      setActivePointIndex(currentIndex);
      currentIndex++;
    }, duration * 1000 / (points.length + 1));
    return () => {
      clearInterval(interval);
      setActivePointIndex(-1);
    };
  }, [isActive, points.length, duration]);
  if (!isActive || points.length === 0) return null;
  return <>
      {points.map((point, index) => <motion.div key={index} className="absolute w-6 h-6 -ml-3 -mt-3 pointer-events-none" style={{
      left: `${point.x}%`,
      top: `${point.y}%`
    }} data-is-mapped="true" data-unique-id="0c5a0f5a-1cb9-4be7-9ef9-14fd87f97b94" data-file-name="components/DataPointHighlight.tsx">
          <motion.div className="absolute inset-0 rounded-full border-2 border-blue-500" initial={{
        scale: 0,
        opacity: 0
      }} animate={activePointIndex === index ? {
        scale: [0, 1.2, 1],
        opacity: [0, 0.8, 0]
      } : {
        scale: 0,
        opacity: 0
      }} transition={{
        duration: 1,
        ease: "easeInOut"
      }} data-is-mapped="true" data-unique-id="6e111492-bfef-42e8-a839-f26905bf1e52" data-file-name="components/DataPointHighlight.tsx" />
        </motion.div>)}
    </>;
};
export default DataPointHighlight;