'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
interface ScanningEffectProps {
  isActive: boolean;
  color?: string;
  duration?: number;
  onScanComplete?: () => void;
}
const ScanningEffect: React.FC<ScanningEffectProps> = ({
  isActive,
  color = 'rgba(65, 93, 128, 0.7)',
  duration = 2,
  onScanComplete
}) => {
  const [scanComplete, setScanComplete] = useState(false);
  useEffect(() => {
    if (!isActive) {
      setScanComplete(false);
      return;
    }
    const timer = setTimeout(() => {
      setScanComplete(true);
      if (onScanComplete) onScanComplete();
    }, duration * 1000);
    return () => clearTimeout(timer);
  }, [isActive, duration, onScanComplete]);
  if (!isActive && !scanComplete) return null;
  if (scanComplete) {
    return <motion.div className="absolute inset-0 bg-[#415d80] bg-opacity-5 z-20" initial={{
      opacity: 0
    }} animate={{
      opacity: [0, 0.3, 0],
      scale: [0.98, 1.02, 1]
    }} transition={{
      duration: 0.8,
      times: [0, 0.5, 1]
    }} onAnimationComplete={() => setScanComplete(false)} data-unique-id="35358789-4720-49fc-a663-a6dd3100b1ed" data-file-name="components/ScanningEffect.tsx" />;
  }
  return <>
      {/* Horizontal scanning line */}
      <motion.div className="absolute left-0 right-0 h-0.5 z-10" style={{
      backgroundColor: color
    }} initial={{
      top: 0,
      opacity: 0
    }} animate={{
      top: '100%',
      opacity: [0, 1, 1, 0]
    }} transition={{
      duration: duration,
      ease: 'linear',
      times: [0, 0.1, 0.9, 1]
    }} data-unique-id="60e2936e-2b9f-41be-9a5f-83cebf54edb7" data-file-name="components/ScanningEffect.tsx" />
      
      {/* Vertical scanning line */}
      <motion.div className="absolute top-0 bottom-0 w-0.5 z-10" style={{
      backgroundColor: color
    }} initial={{
      left: 0,
      opacity: 0
    }} animate={{
      left: '100%',
      opacity: [0, 1, 1, 0]
    }} transition={{
      duration: duration * 0.8,
      ease: 'linear',
      times: [0, 0.1, 0.9, 1],
      delay: duration * 0.5
    }} data-unique-id="eeb3ec70-3a9e-4a36-a3a1-8f9897d4f811" data-file-name="components/ScanningEffect.tsx" />
      
      {/* Scanning glow effect */}
      <motion.div className="absolute inset-0 z-5 rounded-md" initial={{
      boxShadow: `0 0 0 ${color}`
    }} animate={{
      boxShadow: [`0 0 0 ${color}`, `0 0 10px ${color}`, `0 0 0 ${color}`]
    }} transition={{
      duration: duration * 1.5,
      repeat: isActive ? Infinity : 0,
      ease: "easeInOut"
    }} data-unique-id="92a0d6b3-9b8a-4684-90bc-47b75121dc50" data-file-name="components/ScanningEffect.tsx" />
    </>;
};
export default ScanningEffect;