'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Scan, FileText, CheckCircle, AlertCircle } from 'lucide-react';

const FinancialScanner = () => {
  const [scanProgress, setScanProgress] = useState(0);
  const [scanStatus, setScanStatus] = useState<'idle' | 'scanning' | 'complete' | 'error'>('idle');
  const [scanResults, setScanResults] = useState<{type: string, count: number}[]>([
    { type: 'Financial Statements', count: 0 },
    { type: 'Annual Reports', count: 0 },
    { type: 'Quarterly Results', count: 0 },
    { type: 'Market Analysis', count: 0 },
  ]);

  const startScan = () => {
    setScanStatus('scanning');
    setScanProgress(0);
    
    // Simulate scanning progress
    const interval = setInterval(() => {
      setScanProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          setScanStatus('complete');
          // Update scan results with random counts
          setScanResults(prev => prev.map(item => ({
            ...item,
            count: Math.floor(Math.random() * 10) + 1
          })));
          return 100;
        }
        return prev + 2;
      });
    }, 150);
  };

  const getScanStatusIcon = () => {
    switch (scanStatus) {
      case 'idle':
        return <Scan className="w-6 h-6 text-[#415d80]" />;
      case 'scanning':
        return (
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
          >
            <Scan className="w-6 h-6 text-[#415d80]" />
          </motion.div>
        );
      case 'complete':
        return <CheckCircle className="w-6 h-6 text-green-500" />;
      case 'error':
        return <AlertCircle className="w-6 h-6 text-red-500" />;
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-100">
      <div className="p-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-medium text-[#415d80]">Financial Document Scanner</h3>
          <div className="flex items-center space-x-2">
            {getScanStatusIcon()}
            <span className="text-sm text-gray-600">
              {scanStatus === 'idle' && 'Ready to scan'}
              {scanStatus === 'scanning' && 'Scanning...'}
              {scanStatus === 'complete' && 'Scan complete'}
              {scanStatus === 'error' && 'Scan error'}
            </span>
          </div>
        </div>

        {scanStatus === 'scanning' && (
          <motion.div 
            className="w-full bg-gray-200 rounded-full h-2.5 mb-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <motion.div 
              className="bg-[#415d80] h-2.5 rounded-full"
              initial={{ width: '0%' }}
              animate={{ width: `${scanProgress}%` }}
              transition={{ duration: 0.3 }}
            />
          </motion.div>
        )}

        {scanStatus === 'complete' && (
          <motion.div 
            className="grid grid-cols-2 gap-4 mt-4"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {scanResults.map((result, index) => (
              <motion.div 
                key={result.type}
                className="bg-gray-50 p-3 rounded-lg border border-gray-100 flex items-center justify-between"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="flex items-center">
                  <FileText className="w-4 h-4 text-[#415d80] mr-2" />
                  <span className="text-sm text-gray-700">{result.type}</span>
                </div>
                <span className="text-sm font-medium text-[#415d80]">{result.count}</span>
              </motion.div>
            ))}
          </motion.div>
        )}

        {scanStatus === 'idle' && (
          <div className="flex justify-center mt-6">
            <button
              onClick={startScan}
              className="px-4 py-2 bg-[#415d80] hover:bg-[#415d80] hover:bg-opacity-90 text-white rounded-md transition-colors flex items-center"
            >
              <Scan className="w-4 h-4 mr-2" />
              Start Financial Scan
            </button>
          </div>
        )}

        {scanStatus === 'complete' && (
          <div className="flex justify-end mt-6">
            <button
              onClick={() => setScanStatus('idle')}
              className="px-4 py-2 bg-white border border-[#415d80] text-[#415d80] hover:bg-gray-50 rounded-md transition-colors text-sm"
            >
              Scan Again
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default FinancialScanner;
