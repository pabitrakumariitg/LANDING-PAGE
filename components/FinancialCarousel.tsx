'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, BarChart3, FileText, Table, TrendingUp, DollarSign, Scan, Sparkles } from 'lucide-react';
import AIModelSelector from './AIModelSelector';
import ScanningEffect from './ScanningEffect';
import DataPointHighlight from './DataPointHighlight';
import { getTextProviders, generateText } from '@/lib/api/util';

// Financial data for charts
const financialData = [{
  title: "Financial Performance Dashboard",
  description: "",
  chartType: "chart",
  scanComplete: false,
  insightGenerated: false,
  insightGenerating: false
}, {
  title: "Q3 Financial Statement",
  description: "",
  chartType: "document",
  scanComplete: false,
  insightGenerated: false,
  insightGenerating: false
}, {
  title: "Revenue by Business Unit",
  description: "",
  chartType: "table",
  scanComplete: false,
  insightGenerated: false,
  insightGenerating: false
}];

// Chart components
const AdvancedChartVisual = () => {
  'use client';

  const data = [{
    month: 'Jan',
    revenue: 65,
    expenses: 45,
    profit: 20
  }, {
    month: 'Feb',
    revenue: 59,
    expenses: 49,
    profit: 10
  }, {
    month: 'Mar',
    revenue: 80,
    expenses: 52,
    profit: 28
  }, {
    month: 'Apr',
    revenue: 81,
    expenses: 56,
    profit: 25
  }, {
    month: 'May',
    revenue: 56,
    expenses: 48,
    profit: 8
  }, {
    month: 'Jun',
    revenue: 55,
    expenses: 50,
    profit: 5
  }, {
    month: 'Jul',
    revenue: 72,
    expenses: 55,
    profit: 17
  }];
  return <div className="relative h-full w-full flex items-center justify-center" data-unique-id="1cca9d5f-719a-4254-b1d5-5780937ac7c2" data-file-name="components/FinancialCarousel.tsx">
    <div className="absolute inset-0 bg-[#0000]  bg-opacity-10 rounded-lg" data-unique-id="ac14fea8-f06e-42b1-a6c2-3ab868a72997" data-file-name="components/FinancialCarousel.tsx"></div>
    <div className="relative z-10 flex flex-col items-center justify-center w-full h-full p-4" data-unique-id="7ade4999-78b4-44aa-99e3-e37d9b67302d" data-file-name="components/FinancialCarousel.tsx" data-dynamic-text="true">
      <div className="w-full flex justify-between mb-6" data-unique-id="0a373cd4-d575-4585-8a9a-251350618d85" data-file-name="components/FinancialCarousel.tsx">
        <div data-unique-id="5205e23b-6f31-449c-b832-6172d98946cc" data-file-name="components/FinancialCarousel.tsx">
          <h3 className="text-[#415d80] text-lg font-medium" data-unique-id="151b1a4f-aaf4-4c65-9e47-f3fe299bd867" data-file-name="components/FinancialCarousel.tsx"><span className="editable-text" data-unique-id="e9a24144-9795-4df6-b0dd-187751ef4061" data-file-name="components/FinancialCarousel.tsx">Financial Performance</span></h3>
          <p className="text-sm text-gray-500" data-unique-id="24b89764-d3b6-4a68-9497-31e1230021cf" data-file-name="components/FinancialCarousel.tsx"><span className="editable-text" data-unique-id="21f37172-8930-4e5c-9256-0592b91e0f27" data-file-name="components/FinancialCarousel.tsx">YTD Overview (in millions)</span></p>
        </div>
        <div className="flex space-x-2" data-unique-id="0d6388c0-71f8-4346-86f2-86f40b046208" data-file-name="components/FinancialCarousel.tsx">
          <div className="flex items-center" data-unique-id="684708d1-56a1-49ba-ac12-3d3c18f9bb56" data-file-name="components/FinancialCarousel.tsx">
            <div className="w-3 h-3 bg-[#415d80] rounded-full mr-1" data-unique-id="4f92abf3-93cd-4502-aea0-feafc065546b" data-file-name="components/FinancialCarousel.tsx"></div>
            <span className="text-xs text-gray-600" data-unique-id="f4b6f5b7-915a-4b78-9fd9-f2af756d7dd8" data-file-name="components/FinancialCarousel.tsx"><span className="editable-text" data-unique-id="89186597-6c49-499b-9230-b5a258d92b37" data-file-name="components/FinancialCarousel.tsx">Revenue</span></span>
          </div>
          <div className="flex items-center" data-unique-id="49563fdc-0099-4392-9619-6d30fd82aa08" data-file-name="components/FinancialCarousel.tsx">
            <div className="w-3 h-3 bg-red-400 rounded-full mr-1" data-unique-id="dc1dea06-382c-42f6-8eaa-beb072f0df9e" data-file-name="components/FinancialCarousel.tsx"></div>
            <span className="text-xs text-gray-600" data-unique-id="e74095f9-156a-4caa-8190-5ca51dda4d32" data-file-name="components/FinancialCarousel.tsx"><span className="editable-text" data-unique-id="e36c7a4c-c974-43f5-a877-736620c146d9" data-file-name="components/FinancialCarousel.tsx">Expenses</span></span>
          </div>
          <div className="flex items-center" data-unique-id="04898290-fe87-4e18-b28d-7381cee6f691" data-file-name="components/FinancialCarousel.tsx">
            <div className="w-3 h-3 bg-green-500 rounded-full mr-1" data-unique-id="11089444-3a3e-4270-bd0e-b10c4a573046" data-file-name="components/FinancialCarousel.tsx"></div>
            <span className="text-xs text-gray-600" data-unique-id="3f2a6483-5afc-4fc4-94b0-442444abcc9a" data-file-name="components/FinancialCarousel.tsx"><span className="editable-text" data-unique-id="836a6719-4045-4114-9b82-b9a5b2084a7b" data-file-name="components/FinancialCarousel.tsx">Profit</span></span>
          </div>
        </div>
      </div>

      {/* Main Chart Area */}
      <div className="w-full h-64 bg-white p-4 rounded-lg shadow-sm border border-gray-100" data-unique-id="8f86a718-58ab-48ac-9398-91af67e13d7f" data-file-name="components/FinancialCarousel.tsx" data-dynamic-text="true">
        {/* This would use recharts in a real implementation */}
        <div className="relative h-full" data-unique-id="a7ce237f-2899-4edd-8948-b5da87cbaa02" data-file-name="components/FinancialCarousel.tsx" data-dynamic-text="true">
          {/* Chart grid lines */}
          <div className="absolute inset-0 grid grid-cols-7 grid-rows-5" data-unique-id="1b8d1b03-2547-4d31-93d9-70a4c23d41d0" data-file-name="components/FinancialCarousel.tsx" data-dynamic-text="true">
            {Array(35).fill(0).map((_, i) => <div key={i} className="border border-gray-100" data-is-mapped="true" data-unique-id="8f848950-3439-4d8a-a1f7-38ea4ba07dd6" data-file-name="components/FinancialCarousel.tsx"></div>)}
          </div>

          {/* Data lines */}
          <svg className="absolute inset-0 w-full h-full" viewBox="0 0 700 400" preserveAspectRatio="none" data-unique-id="4c9ee0a4-0842-407b-bf73-c90ef696580d" data-file-name="components/FinancialCarousel.tsx" data-dynamic-text="true">
            {/* Revenue line */}
            <motion.path d="M 50,135 150,159 250,80 350,76 450,176 550,180 650,112" fill="none" stroke="#415d80" strokeWidth="3" initial={{
              pathLength: 0
            }} animate={{
              pathLength: 1
            }} transition={{
              duration: 1.5,
              ease: "easeInOut"
            }} />

            {/* Expenses line */}
            <motion.path d="M 50,225 150,196 250,192 350,176 450,204 550,200 650,180" fill="none" stroke="#f87171" strokeWidth="3" initial={{
              pathLength: 0
            }} animate={{
              pathLength: 1
            }} transition={{
              duration: 1.5,
              delay: 0.3,
              ease: "easeInOut"
            }} />

            {/* Profit line */}
            <motion.path d="M 50,280 150,320 250,220 350,250 450,320 550,340 650,280" fill="none" stroke="#22c55e" strokeWidth="3" initial={{
              pathLength: 0
            }} animate={{
              pathLength: 1
            }} transition={{
              duration: 1.5,
              delay: 0.6,
              ease: "easeInOut"
            }} />

            {/* Data points for revenue */}
            {data.map((point, index) => <motion.circle key={`revenue-${index}`} cx={50 + index * 100} cy={400 - point.revenue * 4} r="6" fill="#415d80" initial={{
              scale: 0
            }} animate={{
              scale: 1
            }} transition={{
              delay: 0.2 + index * 0.1,
              type: "spring"
            }} data-unique-id="992b600f-714e-4834-941e-b1e223d668c4" data-file-name="components/FinancialCarousel.tsx" data-dynamic-text="true" />)}

            {/* Data points for expenses */}
            {data.map((point, index) => <motion.circle key={`expense-${index}`} cx={50 + index * 100} cy={400 - point.expenses * 4} r="6" fill="#f87171" initial={{
              scale: 0
            }} animate={{
              scale: 1
            }} transition={{
              delay: 0.4 + index * 0.1,
              type: "spring"
            }} data-unique-id="df67898a-dd93-4e16-83bb-5485ea27d6b0" data-file-name="components/FinancialCarousel.tsx" data-dynamic-text="true" />)}

            {/* Data points for profit */}
            {data.map((point, index) => <motion.circle key={`profit-${index}`} cx={50 + index * 100} cy={400 - point.profit * 4} r="6" fill="#22c55e" initial={{
              scale: 0
            }} animate={{
              scale: 1
            }} transition={{
              delay: 0.6 + index * 0.1,
              type: "spring"
            }} data-unique-id="0396e115-757a-4d0a-9f48-70741c6b33da" data-file-name="components/FinancialCarousel.tsx" data-dynamic-text="true" />)}

            {/* Data values */}
            {data.map((point, index) => <motion.text key={`value-${index}`} x={50 + index * 100} y={400 - point.revenue * 4 - 15} textAnchor="middle" fill="#415d80" fontSize="12" fontWeight="bold" initial={{
              opacity: 0
            }} animate={{
              opacity: 1
            }} transition={{
              delay: 1 + index * 0.1
            }} data-unique-id="d07be61b-8ad3-4737-97e7-37573d11c733" data-file-name="components/FinancialCarousel.tsx" data-dynamic-text="true"><span className="editable-text" data-is-mapped="true" data-unique-id="1da3b49d-a422-4885-ad98-0689bd9a7945" data-file-name="components/FinancialCarousel.tsx">
                $</span>{point.revenue}<span className="editable-text" data-is-mapped="true" data-unique-id="305a2112-5551-467a-9b46-ae0b8c7a418e" data-file-name="components/FinancialCarousel.tsx">M
              </span></motion.text>)}
          </svg>
        </div>
      </div>

      {/* Key metrics */}
      <div className="flex justify-between w-full mt-4" data-unique-id="616d35fc-9c70-4b1f-aa0e-180b8ab6ea16" data-file-name="components/FinancialCarousel.tsx">
        <motion.div className="bg-white p-3 rounded-lg shadow-sm border border-[#415d80] border-opacity-20 w-1/3 mx-1" initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          delay: 0.2
        }} data-unique-id="7e71d22f-aba2-45dd-972c-e20c4c8e8b0b" data-file-name="components/FinancialCarousel.tsx">
          <div className="text-xs text-gray-500" data-unique-id="7b7da2c7-ae68-4a6c-b4a9-fac1b8866221" data-file-name="components/FinancialCarousel.tsx"><span className="editable-text" data-unique-id="f3324d70-98f6-404a-ac97-e85ec05922da" data-file-name="components/FinancialCarousel.tsx">Total Revenue</span></div>
          <div className="text-lg font-bold text-[#415d80]" data-unique-id="36cb0447-d063-40be-bf5e-1388f2cf9873" data-file-name="components/FinancialCarousel.tsx"><span className="editable-text" data-unique-id="ceaeafd2-0e44-4f5a-9470-d9c7727147dd" data-file-name="components/FinancialCarousel.tsx">$468M</span></div>
          <div className="text-xs text-green-600" data-unique-id="2940158f-30b5-432e-bb51-f17fb019c880" data-file-name="components/FinancialCarousel.tsx"><span className="editable-text" data-unique-id="38565efd-33af-4e56-b287-6e30ef69455d" data-file-name="components/FinancialCarousel.tsx">+12.5% YoY</span></div>
        </motion.div>

        <motion.div className="bg-white p-3 rounded-lg shadow-sm border border-[#415d80] border-opacity-20 w-1/3 mx-1" initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          delay: 0.4
        }} data-unique-id="89ce9906-57b6-46b3-8a55-317db130b6f9" data-file-name="components/FinancialCarousel.tsx">
          <div className="text-xs text-gray-500" data-unique-id="cbb41a94-c58f-4be6-aaa4-b8d294643b78" data-file-name="components/FinancialCarousel.tsx"><span className="editable-text" data-unique-id="9234f561-addc-4069-9310-309c954a1cea" data-file-name="components/FinancialCarousel.tsx">Total Expenses</span></div>
          <div className="text-lg font-bold text-[#415d80]" data-unique-id="2edf4c18-4fdb-45a5-818a-e0eb53f02526" data-file-name="components/FinancialCarousel.tsx"><span className="editable-text" data-unique-id="e5730811-8b60-4326-8477-910f4e3b7bf1" data-file-name="components/FinancialCarousel.tsx">$355M</span></div>
          <div className="text-xs text-red-400" data-unique-id="64d1b8d4-1eae-4997-a68f-ef7ea55245c2" data-file-name="components/FinancialCarousel.tsx"><span className="editable-text" data-unique-id="9989453f-63aa-4207-9a69-df12939ffc91" data-file-name="components/FinancialCarousel.tsx">+8.2% YoY</span></div>
        </motion.div>

        <motion.div className="bg-white p-3 rounded-lg shadow-sm border border-[#415d80] border-opacity-20 w-1/3 mx-1" initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          delay: 0.6
        }} data-unique-id="7b336737-5649-4372-ac1b-0211f3b325ba" data-file-name="components/FinancialCarousel.tsx">
          <div className="text-xs text-gray-500" data-unique-id="fe6fe2c4-488a-4d08-ad93-e53f2c14e702" data-file-name="components/FinancialCarousel.tsx"><span className="editable-text" data-unique-id="0ce672ba-0762-44a6-b089-65ab1c88b9b7" data-file-name="components/FinancialCarousel.tsx">Net Profit</span></div>
          <div className="text-lg font-bold text-[#415d80]" data-unique-id="b80f7c9a-accc-4aa6-89c2-e85d2b50ce23" data-file-name="components/FinancialCarousel.tsx"><span className="editable-text" data-unique-id="c14c018c-0dff-41a7-a0c7-e9b5296ad876" data-file-name="components/FinancialCarousel.tsx">$113M</span></div>
          <div className="text-xs text-green-600" data-unique-id="475be9aa-a6d7-4e8b-abb0-db7a4e05f764" data-file-name="components/FinancialCarousel.tsx"><span className="editable-text" data-unique-id="9cf7168a-cd83-4adc-be0c-3698a0eb808a" data-file-name="components/FinancialCarousel.tsx">+25.6% YoY</span></div>
        </motion.div>
      </div>
    </div>
  </div>;
};
const DocumentVisual = () => {
  return <div className="relative h-full w-full flex items-center justify-center" data-unique-id="eaf514a4-fdab-44d9-a4e3-a72e39b68eea" data-file-name="components/FinancialCarousel.tsx">
    <div className="absolute inset-0 bg-[#f0f5fa] rounded-lg" data-unique-id="a71ee785-ab03-4014-8ee9-c649200b040f" data-file-name="components/FinancialCarousel.tsx"></div>
    <div className="relative z-10 flex flex-col items-center justify-center w-full h-full p-6" data-unique-id="6a90bfe6-3bfe-4597-bc41-5e08d0f84070" data-file-name="components/FinancialCarousel.tsx">
      <motion.div className="w-full max-w-md bg-white rounded-lg p-6 shadow-md border border-gray-200" initial={{
        opacity: 0,
        y: 20
      }} animate={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 0.5
      }} style={{
        backgroundImage: "linear-gradient(to bottom, transparent 0px, transparent 28px, #e5e7eb 28px, #e5e7eb 29px)",
        backgroundSize: "100% 29px",
        backgroundRepeat: "repeat-y"
      }} data-unique-id="126bab2c-ac98-4d5c-a2d6-9486bfddb865" data-file-name="components/FinancialCarousel.tsx">
        <div className="flex justify-between items-center mb-6 border-b border-gray-300 pb-4" data-unique-id="dd878f75-aa76-4a9c-ab24-e313ab98f453" data-file-name="components/FinancialCarousel.tsx">
          <div data-unique-id="bae0da77-6d4a-41a8-8ea4-16ac91ef9504" data-file-name="components/FinancialCarousel.tsx">
            <div className="text-xl font-bold text-[#415d80]" data-unique-id="c006e67f-9c7a-4335-bf31-cdc86b4188b9" data-file-name="components/FinancialCarousel.tsx"><span className="editable-text" data-unique-id="5dbde111-490b-4d84-867f-d4bbbffbbf6c" data-file-name="components/FinancialCarousel.tsx">Quarterly Financial Statement</span></div>
            <div className="text-sm text-gray-500" data-unique-id="76cd7482-57f6-474d-af15-8a88ce05cb34" data-file-name="components/FinancialCarousel.tsx"><span className="editable-text" data-unique-id="5bf87543-6604-44ba-af33-4daa2ae1fc9a" data-file-name="components/FinancialCarousel.tsx">Q3 2024 • Confidential</span></div>
          </div>
          <div className="flex items-center" data-unique-id="1d029ff7-3d56-419c-a3e0-a8d4aa8740a6" data-file-name="components/FinancialCarousel.tsx">
            <div className="w-8 h-8 bg-[#415d80] rounded-full flex items-center justify-center text-white font-bold" data-unique-id="21f68f66-bd77-4a32-b437-7441ecf43e53" data-file-name="components/FinancialCarousel.tsx"><span className="editable-text" data-unique-id="8bae0419-42f1-4aa5-b3ad-005966f0bb32" data-file-name="components/FinancialCarousel.tsx">
              Q3
            </span></div>
          </div>
        </div>

        <div className="space-y-5" data-unique-id="4eb02131-d855-494e-8f71-ace4cc2d3553" data-file-name="components/FinancialCarousel.tsx">
          <motion.div initial={{
            opacity: 0,
            x: -10
          }} animate={{
            opacity: 1,
            x: 0
          }} transition={{
            duration: 0.3,
            delay: 0.2
          }} data-unique-id="6bdc4b8f-4676-442f-a4e1-64b532a2cab7" data-file-name="components/FinancialCarousel.tsx">
            <h3 className="font-semibold text-gray-800 mb-2" data-unique-id="524a8ebb-8aa5-4e73-9e30-9b984d60c8b2" data-file-name="components/FinancialCarousel.tsx"><span className="editable-text" data-unique-id="06df4f82-0f81-4eb8-b28a-201008cde278" data-file-name="components/FinancialCarousel.tsx">Executive Summary</span></h3>
            <p className="text-sm text-gray-600 leading-relaxed" data-unique-id="2b2b6246-e5c4-4c4b-8b43-63f44bf30efb" data-file-name="components/FinancialCarousel.tsx"><span className="editable-text" data-unique-id="672a4a5e-25df-45b7-be11-74929aada743" data-file-name="components/FinancialCarousel.tsx">
              The company shows strong financial performance in Q3 with revenue growth of 14.2% compared to the same period last year. Operating expenses increased by only 7.5%, resulting in improved profit margins across all business units.
            </span></p>
          </motion.div>

          <motion.div initial={{
            opacity: 0,
            x: -10
          }} animate={{
            opacity: 1,
            x: 0
          }} transition={{
            duration: 0.3,
            delay: 0.4
          }} data-unique-id="61c9b108-4dad-4c63-abea-de8ee3fffbda" data-file-name="components/FinancialCarousel.tsx">
            <h3 className="font-semibold text-gray-800 mb-2" data-unique-id="e84464c5-b7e7-453a-923a-bab144f558c0" data-file-name="components/FinancialCarousel.tsx"><span className="editable-text" data-unique-id="47668306-8a83-4a95-a8d8-28ce839776d2" data-file-name="components/FinancialCarousel.tsx">Key Financial Metrics</span></h3>
            <div className="grid grid-cols-2 gap-y-2 text-sm" data-unique-id="d28a704e-63e4-490a-8e8d-b6cf2a8f10ed" data-file-name="components/FinancialCarousel.tsx">
              <div className="text-gray-600" data-unique-id="c9d55dfc-d03c-4888-81e6-817025a562b7" data-file-name="components/FinancialCarousel.tsx"><span className="editable-text" data-unique-id="4c5e51f0-26f5-4726-be9c-894a48643120" data-file-name="components/FinancialCarousel.tsx">Total Revenue:</span></div>
              <div className="text-[#415d80] font-medium" data-unique-id="d47dd773-e13a-49f4-b2d4-b0816fa05b16" data-file-name="components/FinancialCarousel.tsx"><span className="editable-text" data-unique-id="e91b8cf7-d9b5-4312-b842-a69a8e2b7c4e" data-file-name="components/FinancialCarousel.tsx">$142.7 Million</span></div>

              <div className="text-gray-600" data-unique-id="9271f703-5773-452e-8e2e-5d1fcd07a044" data-file-name="components/FinancialCarousel.tsx"><span className="editable-text" data-unique-id="83d39eae-fdc6-4e2e-b8f7-22e0e7aff1d6" data-file-name="components/FinancialCarousel.tsx">Operating Expenses:</span></div>
              <div className="text-[#415d80] font-medium" data-unique-id="7483b0ca-d206-474b-8f87-1cdfd7ed94bb" data-file-name="components/FinancialCarousel.tsx"><span className="editable-text" data-unique-id="eb97a8f7-9c3c-4ca4-9461-e8bfc0c7b0d2" data-file-name="components/FinancialCarousel.tsx">$87.3 Million</span></div>

              <div className="text-gray-600" data-unique-id="aeaeda4a-2d1b-45dc-8859-860d20aa7012" data-file-name="components/FinancialCarousel.tsx"><span className="editable-text" data-unique-id="94809315-0c9c-4b47-a7e3-f977b503c690" data-file-name="components/FinancialCarousel.tsx">Net Profit:</span></div>
              <div className="text-[#415d80] font-medium" data-unique-id="a96cba86-dbee-452d-a468-94fa427cb913" data-file-name="components/FinancialCarousel.tsx"><span className="editable-text" data-unique-id="09ebe4e9-279d-42fa-abe6-6f3b2a27ebd3" data-file-name="components/FinancialCarousel.tsx">$38.2 Million</span></div>

              <div className="text-gray-600" data-unique-id="84553b8e-7781-492a-a257-81e5d6299a2b" data-file-name="components/FinancialCarousel.tsx"><span className="editable-text" data-unique-id="5c8b6fcb-cd18-4b8a-8957-c992bb52d6f5" data-file-name="components/FinancialCarousel.tsx">EPS (Diluted):</span></div>
              <div className="text-[#415d80] font-medium" data-unique-id="4b5b490d-b1ed-4e0e-8fd6-432311eddef4" data-file-name="components/FinancialCarousel.tsx"><span className="editable-text" data-unique-id="124dae0c-3036-4362-af0e-36c88e99f32f" data-file-name="components/FinancialCarousel.tsx">$2.47</span></div>
            </div>
          </motion.div>

          <motion.div initial={{
            opacity: 0,
            x: -10
          }} animate={{
            opacity: 1,
            x: 0
          }} transition={{
            duration: 0.3,
            delay: 0.6
          }} data-unique-id="df0111c7-4ef3-4ec9-93d4-9e0b00360d72" data-file-name="components/FinancialCarousel.tsx">
            <h3 className="font-semibold text-gray-800 mb-2" data-unique-id="de6b5d74-b926-4feb-8caf-846989713c5a" data-file-name="components/FinancialCarousel.tsx"><span className="editable-text" data-unique-id="9737edf5-b8d3-418a-adff-126dda6e7d2b" data-file-name="components/FinancialCarousel.tsx">Cash Position</span></h3>
            <div className="grid grid-cols-2 gap-y-2 text-sm" data-unique-id="a08bc4be-58be-4805-97e6-5a8b5502f9f8" data-file-name="components/FinancialCarousel.tsx">
              <div className="text-gray-600" data-unique-id="eaf76236-c2be-44f8-b47a-e221963c3859" data-file-name="components/FinancialCarousel.tsx"><span className="editable-text" data-unique-id="23cd9ade-ce0d-4e03-95c2-1c0502772f13" data-file-name="components/FinancialCarousel.tsx">Cash & Equivalents:</span></div>
              <div className="text-[#415d80] font-medium" data-unique-id="e8dcf89b-6fab-49e1-be0e-9d2cceb4ac50" data-file-name="components/FinancialCarousel.tsx"><span className="editable-text" data-unique-id="4478cdd8-6836-4184-b1a6-8684991b8125" data-file-name="components/FinancialCarousel.tsx">$97.2 Million</span></div>

              <div className="text-gray-600" data-unique-id="b347aa3b-271e-4c17-b31d-5888c11541b1" data-file-name="components/FinancialCarousel.tsx"><span className="editable-text" data-unique-id="ca106266-ef16-45c0-8561-0c4556f53038" data-file-name="components/FinancialCarousel.tsx">Operating Cash Flow:</span></div>
              <div className="text-[#415d80] font-medium" data-unique-id="2ef65cad-d971-4922-aea3-31a38ab5aaf3" data-file-name="components/FinancialCarousel.tsx"><span className="editable-text" data-unique-id="ea9d94e5-b512-401f-a476-0076113ce736" data-file-name="components/FinancialCarousel.tsx">$42.5 Million</span></div>

              <div className="text-gray-600" data-unique-id="a07d7c2b-b326-4c75-9e8d-d821ad3bd137" data-file-name="components/FinancialCarousel.tsx"><span className="editable-text" data-unique-id="361ed14a-fe4c-437a-921d-1d951ee6eec0" data-file-name="components/FinancialCarousel.tsx">Capital Expenditures:</span></div>
              <div className="text-[#415d80] font-medium" data-unique-id="5db39d2b-fdd4-4c3b-a283-a9843a96368f" data-file-name="components/FinancialCarousel.tsx"><span className="editable-text" data-unique-id="ee3ac3b1-dca5-4e3a-bcb6-7bd45d380796" data-file-name="components/FinancialCarousel.tsx">$12.1 Million</span></div>

              <div className="text-gray-600" data-unique-id="7d44e203-9ff9-424f-add8-633f0cb8e8e6" data-file-name="components/FinancialCarousel.tsx"><span className="editable-text" data-unique-id="4f090de9-5523-4f0f-8440-dbcc3a60aac3" data-file-name="components/FinancialCarousel.tsx">Free Cash Flow:</span></div>
              <div className="text-[#415d80] font-medium" data-unique-id="a3a7bffb-32d9-45cf-9bbb-07bff0857a64" data-file-name="components/FinancialCarousel.tsx"><span className="editable-text" data-unique-id="38608086-e53d-4b97-91f2-bc31d346ef53" data-file-name="components/FinancialCarousel.tsx">$30.4 Million</span></div>
            </div>
          </motion.div>
        </div>

        <motion.div className="mt-6 pt-4 border-t border-gray-200" initial={{
          opacity: 0
        }} animate={{
          opacity: 0.8
        }} transition={{
          duration: 0.5,
          delay: 0.8
        }} data-unique-id="17933dd5-8ff6-4d74-adf1-37f5ebcbc3d0" data-file-name="components/FinancialCarousel.tsx">
          <div className="text-xs text-gray-400 flex justify-between" data-unique-id="522c22fa-3d64-4bda-929e-0e0f36f27e97" data-file-name="components/FinancialCarousel.tsx">
            <span data-unique-id="ed3b4380-26cf-4450-aa48-e66accb2bbc3" data-file-name="components/FinancialCarousel.tsx"><span className="editable-text" data-unique-id="23e32568-38a0-4114-8fbf-694cfd9eaac0" data-file-name="components/FinancialCarousel.tsx">Prepared by: Finance Department</span></span>
            <span data-unique-id="4b087f9a-20b9-4529-8101-dd69a914bb94" data-file-name="components/FinancialCarousel.tsx"><span className="editable-text" data-unique-id="7c3d0465-cb22-4deb-974f-22c01e769a33" data-file-name="components/FinancialCarousel.tsx">Page 1 of 12</span></span>
          </div>
        </motion.div>
      </motion.div>
    </div>
  </div>;
};
const DataTableVisual = () => {
  const tableData = [{
    division: 'Enterprise Solutions',
    q1: 32.4,
    q2: 36.7,
    q3: 42.1,
    q4: 45.8,
    total: 157.0,
    growth: 18.5
  }, {
    division: 'Consumer Products',
    q1: 28.9,
    q2: 27.5,
    q3: 30.2,
    q4: 35.4,
    total: 122.0,
    growth: 8.2
  }, {
    division: 'Digital Services',
    q1: 18.5,
    q2: 21.3,
    q3: 25.7,
    q4: 29.1,
    total: 94.6,
    growth: 32.6
  }, {
    division: 'Cloud Infrastructure',
    q1: 15.2,
    q2: 17.8,
    q3: 21.4,
    q4: 24.3,
    total: 78.7,
    growth: 45.1
  }, {
    division: 'Professional Services',
    q1: 12.7,
    q2: 13.1,
    q3: 14.5,
    q4: 15.2,
    total: 55.5,
    growth: 5.8
  }, {
    division: 'Research & Innovation',
    q1: 5.8,
    q2: 6.2,
    q3: 8.8,
    q4: 9.5,
    total: 30.3,
    growth: 22.4
  }];
  return <div className="relative h-full w-full flex items-center justify-center" data-unique-id="ff24b667-3d36-47db-9022-018ca401f3ee" data-file-name="components/FinancialCarousel.tsx">
    <div className="absolute inset-0 bg-[#f0f5fa] rounded-lg" data-unique-id="af181fb7-8e26-41dc-af3f-ab6299a2a109" data-file-name="components/FinancialCarousel.tsx"></div>
    <div className="relative z-10 flex flex-col w-full h-full p-6" data-unique-id="17b9ec9e-c98b-4f16-a30d-ff581182a4bc" data-file-name="components/FinancialCarousel.tsx">
      <div className="flex justify-between items-center mb-4" data-unique-id="b0181b94-1642-446f-8231-a4a80052e319" data-file-name="components/FinancialCarousel.tsx">
        <div data-unique-id="0163f4f6-173d-4705-aef6-47b468e63d92" data-file-name="components/FinancialCarousel.tsx">
          <h3 className="text-lg font-semibold text-[#415d80]" data-unique-id="01e5e52c-ce98-4a0d-a4d5-f6d6b9c5d05d" data-file-name="components/FinancialCarousel.tsx"><span className="editable-text" data-unique-id="431615d9-3f92-4acd-8bbb-2b714249c4a4" data-file-name="components/FinancialCarousel.tsx">Revenue by Business Unit</span></h3>
          <p className="text-sm text-gray-500" data-unique-id="2ee129f3-c51e-4267-b64e-48b569491bac" data-file-name="components/FinancialCarousel.tsx"><span className="editable-text" data-unique-id="73bd2ebd-6dae-4669-8210-c4ef11967d8f" data-file-name="components/FinancialCarousel.tsx">FY 2024 (in millions $)</span></p>
        </div>
        <div className="flex space-x-2" data-unique-id="b84af7ca-77c5-4d61-a21f-2c07c5e85f9a" data-file-name="components/FinancialCarousel.tsx">
          <div className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-md flex items-center" data-unique-id="046a774a-1654-48a2-9371-7cf72df5e469" data-file-name="components/FinancialCarousel.tsx">
            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" data-unique-id="abf82d68-7382-4416-8357-4e10569263bd" data-file-name="components/FinancialCarousel.tsx"><path d="m12 19 9 2-9-18-9 18 9-2Z" /></svg>
            <span className="ml-1" data-unique-id="3e13b445-8ffd-4b43-9508-3562470a963d" data-file-name="components/FinancialCarousel.tsx"><span className="editable-text" data-unique-id="85c421e3-2b6f-4902-a373-8d957bf9f95b" data-file-name="components/FinancialCarousel.tsx">Growing</span></span>
          </div>
        </div>
      </div>

      <div className="flex-grow overflow-hidden" data-unique-id="80f00db8-5e5c-432a-b91e-88351ecf3dab" data-file-name="components/FinancialCarousel.tsx">
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden" data-unique-id="f9c8ebf7-7772-4f7e-8813-1d91c96565af" data-file-name="components/FinancialCarousel.tsx">
          <div className="overflow-x-auto" data-unique-id="719b64e0-6809-4432-a144-737c8345f1c5" data-file-name="components/FinancialCarousel.tsx">
            <table className="w-full" data-unique-id="4405909d-e8d5-4a1c-8f54-5f4db94ed201" data-file-name="components/FinancialCarousel.tsx">
              <thead data-unique-id="ab34471f-287b-4d70-a377-626f8990786e" data-file-name="components/FinancialCarousel.tsx">
                <tr className="bg-[#f0f5fa]" data-unique-id="1dbc326b-36fe-48c9-a26f-66788ef3aaac" data-file-name="components/FinancialCarousel.tsx">
                  <th className="px-4 py-3 text-left text-xs font-semibold text-[#415d80] uppercase tracking-wider border-b border-gray-200" data-unique-id="ce556720-283a-40b1-994f-def77d6097e1" data-file-name="components/FinancialCarousel.tsx"><span className="editable-text" data-unique-id="66d39197-a0a0-499c-a165-7816e727430f" data-file-name="components/FinancialCarousel.tsx">
                    Business Unit
                  </span></th>
                  <th className="px-4 py-3 text-right text-xs font-semibold text-[#415d80] uppercase tracking-wider border-b border-gray-200" data-unique-id="6f38217d-3aba-49c8-b701-0a4e729eac58" data-file-name="components/FinancialCarousel.tsx"><span className="editable-text" data-unique-id="850c7386-5682-4f9e-81d5-c4cb28d5351a" data-file-name="components/FinancialCarousel.tsx">
                    Q1
                  </span></th>
                  <th className="px-4 py-3 text-right text-xs font-semibold text-[#415d80] uppercase tracking-wider border-b border-gray-200" data-unique-id="9dfc8ec3-f20b-4e6d-a2a5-8894ae868b3b" data-file-name="components/FinancialCarousel.tsx"><span className="editable-text" data-unique-id="229d4187-3615-4b9a-a782-bbc7a4f7d3d9" data-file-name="components/FinancialCarousel.tsx">
                    Q2
                  </span></th>
                  <th className="px-4 py-3 text-right text-xs font-semibold text-[#415d80] uppercase tracking-wider border-b border-gray-200" data-unique-id="5c16f2c7-4208-490d-8477-b4c8676c808e" data-file-name="components/FinancialCarousel.tsx"><span className="editable-text" data-unique-id="c36c8f89-64ce-412a-960b-39196b659522" data-file-name="components/FinancialCarousel.tsx">
                    Q3
                  </span></th>
                  <th className="px-4 py-3 text-right text-xs font-semibold text-[#415d80] uppercase tracking-wider border-b border-gray-200" data-unique-id="edbc4d5d-ff2f-416a-bcb1-57260bb7c95b" data-file-name="components/FinancialCarousel.tsx"><span className="editable-text" data-unique-id="baed6e67-74e8-4dd2-8d08-3645080c31a1" data-file-name="components/FinancialCarousel.tsx">
                    Q4
                  </span></th>
                  <th className="px-4 py-3 text-right text-xs font-semibold text-[#415d80] uppercase tracking-wider border-b border-gray-200" data-unique-id="f183c251-9bd6-4125-a5c0-097e14d9c024" data-file-name="components/FinancialCarousel.tsx"><span className="editable-text" data-unique-id="a4cc278a-c9b8-4401-a3e4-7073f2d90c7f" data-file-name="components/FinancialCarousel.tsx">
                    Total
                  </span></th>
                  <th className="px-4 py-3 text-right text-xs font-semibold text-[#415d80] uppercase tracking-wider border-b border-gray-200" data-unique-id="d24e01c5-9df3-4356-9424-c49c0a22b4b5" data-file-name="components/FinancialCarousel.tsx"><span className="editable-text" data-unique-id="e86dec77-ce81-4b50-85b6-5810a74a587e" data-file-name="components/FinancialCarousel.tsx">
                    Growth
                  </span></th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200" data-unique-id="7e270339-cb66-4fa9-a3ed-115ce920ac96" data-file-name="components/FinancialCarousel.tsx" data-dynamic-text="true">
                {tableData.map((row, index) => <motion.tr key={index} initial={{
                  opacity: 0,
                  x: -10
                }} animate={{
                  opacity: 1,
                  x: 0
                }} transition={{
                  delay: index * 0.1
                }} whileHover={{
                  backgroundColor: "rgba(239, 246, 255, 0.5)"
                }} data-is-mapped="true" data-unique-id="da6beb9e-be6b-4346-a882-a28bfb9a8f4b" data-file-name="components/FinancialCarousel.tsx">
                  <td className="px-4 py-3 text-sm font-medium text-gray-800" data-is-mapped="true" data-unique-id="5057247d-72da-466e-8654-c95ba7f19f6e" data-file-name="components/FinancialCarousel.tsx" data-dynamic-text="true">
                    {row.division}
                  </td>
                  <td className="px-4 py-3 text-sm text-gray-600 text-right" data-is-mapped="true" data-unique-id="e183f717-0cf0-4056-a278-3f1e4d7d4a0f" data-file-name="components/FinancialCarousel.tsx" data-dynamic-text="true"><span className="editable-text" data-is-mapped="true" data-unique-id="4ce7a3f7-28c9-4509-bb83-c00f23319c66" data-file-name="components/FinancialCarousel.tsx">
                    $</span>{row.q1}<span className="editable-text" data-is-mapped="true" data-unique-id="43627724-18cc-4d3a-ae8d-6d989cc90939" data-file-name="components/FinancialCarousel.tsx">M
                    </span></td>
                  <td className="px-4 py-3 text-sm text-gray-600 text-right" data-is-mapped="true" data-unique-id="35e9dc00-a3de-49bc-a1e1-623b26f00b5d" data-file-name="components/FinancialCarousel.tsx" data-dynamic-text="true"><span className="editable-text" data-is-mapped="true" data-unique-id="b4658fa7-d99d-44db-b4f0-a28f0d475e09" data-file-name="components/FinancialCarousel.tsx">
                    $</span>{row.q2}<span className="editable-text" data-is-mapped="true" data-unique-id="1afb4b94-f412-4dba-9945-439c06064fc2" data-file-name="components/FinancialCarousel.tsx">M
                    </span></td>
                  <td className="px-4 py-3 text-sm text-gray-600 text-right" data-is-mapped="true" data-unique-id="83bf5c16-071c-4341-8239-7ef9abd2574d" data-file-name="components/FinancialCarousel.tsx" data-dynamic-text="true"><span className="editable-text" data-is-mapped="true" data-unique-id="a32fa657-bae2-459c-80e3-2e9253d8cfc0" data-file-name="components/FinancialCarousel.tsx">
                    $</span>{row.q3}<span className="editable-text" data-is-mapped="true" data-unique-id="029c8fd8-0250-4ca0-af08-b1b236a1484b" data-file-name="components/FinancialCarousel.tsx">M
                    </span></td>
                  <td className="px-4 py-3 text-sm text-gray-600 text-right" data-is-mapped="true" data-unique-id="329771ba-4588-4624-934b-8f1a876b0cd2" data-file-name="components/FinancialCarousel.tsx" data-dynamic-text="true"><span className="editable-text" data-is-mapped="true" data-unique-id="322aefed-47e7-403f-9dd1-e1bf9451ff52" data-file-name="components/FinancialCarousel.tsx">
                    $</span>{row.q4}<span className="editable-text" data-is-mapped="true" data-unique-id="341b389d-b629-4757-829f-aa360915caa3" data-file-name="components/FinancialCarousel.tsx">M
                    </span></td>
                  <td className="px-4 py-3 text-sm text-[#415d80] font-medium text-right" data-is-mapped="true" data-unique-id="bb4f3315-7f11-4075-9b51-1e383dcfda30" data-file-name="components/FinancialCarousel.tsx" data-dynamic-text="true"><span className="editable-text" data-is-mapped="true" data-unique-id="d9b6b12a-6a2c-4525-aa03-6c79e1bf9a4e" data-file-name="components/FinancialCarousel.tsx">
                    $</span>{row.total.toFixed(1)}<span className="editable-text" data-is-mapped="true" data-unique-id="c47e08aa-cdce-4334-9dab-b21638b7b3bb" data-file-name="components/FinancialCarousel.tsx">M
                    </span></td>
                  <td className={`px-4 py-3 text-sm text-right font-medium ${row.growth > 15 ? 'text-green-600' : row.growth > 5 ? 'text-[#415d80]' : 'text-amber-600'}`} data-is-mapped="true" data-unique-id="31a63322-1792-44da-9949-a7ec10583d10" data-file-name="components/FinancialCarousel.tsx" data-dynamic-text="true">
                    {row.growth}<span className="editable-text" data-is-mapped="true" data-unique-id="8a143b88-39eb-4fd0-a3a7-5aef1878ddbc" data-file-name="components/FinancialCarousel.tsx">%
                    </span></td>
                </motion.tr>)}
              </tbody>
              <tfoot data-unique-id="bce9af26-45f5-49ca-b948-41b9bc990245" data-file-name="components/FinancialCarousel.tsx">
                <motion.tr className="bg-[#f0f5fa]" initial={{
                  opacity: 0
                }} animate={{
                  opacity: 1
                }} transition={{
                  delay: 0.8
                }} data-unique-id="3e16359b-2cc9-4467-ba31-e7fa9e8bcb31" data-file-name="components/FinancialCarousel.tsx">
                  <td className="px-4 py-3 text-sm font-bold text-[#415d80]" data-unique-id="126806d4-820e-40d9-acda-3700ea2cdd9a" data-file-name="components/FinancialCarousel.tsx"><span className="editable-text" data-unique-id="12bfdcf1-fcc4-41f1-8a8d-2b9450f98232" data-file-name="components/FinancialCarousel.tsx">
                    Total Revenue
                  </span></td>
                  <td className="px-4 py-3 text-sm font-bold text-[#415d80] text-right" data-unique-id="71bfb78f-0340-4210-bbb6-f725a8b7e0f3" data-file-name="components/FinancialCarousel.tsx"><span className="editable-text" data-unique-id="39d31375-027a-4d0a-b7b2-5933e87440b0" data-file-name="components/FinancialCarousel.tsx">
                    $113.5M
                  </span></td>
                  <td className="px-4 py-3 text-sm font-bold text-[#415d80] text-right" data-unique-id="2ecdef21-e535-4d8d-bfd1-adf65b220ba9" data-file-name="components/FinancialCarousel.tsx"><span className="editable-text" data-unique-id="32c726c9-9fd2-4af1-8cd8-724adfc58a6d" data-file-name="components/FinancialCarousel.tsx">
                    $122.6M
                  </span></td>
                  <td className="px-4 py-3 text-sm font-bold text-[#415d80] text-right" data-unique-id="7d773060-4d0f-41fb-8022-5a0de6c4acbf" data-file-name="components/FinancialCarousel.tsx"><span className="editable-text" data-unique-id="f0eb291a-1038-4472-bd83-f850d7d12136" data-file-name="components/FinancialCarousel.tsx">
                    $142.7M
                  </span></td>
                  <td className="px-4 py-3 text-sm font-bold text-[#415d80] text-right" data-unique-id="d2f2cf21-d776-4849-ba2f-6f2bb5cd5fe7" data-file-name="components/FinancialCarousel.tsx"><span className="editable-text" data-unique-id="d9e40b39-e910-4a81-bf7e-1aaf6168b86e" data-file-name="components/FinancialCarousel.tsx">
                    $159.3M
                  </span></td>
                  <td className="px-4 py-3 text-sm font-bold text-[#415d80] text-right" data-unique-id="d5feb9ea-23b4-4a94-8559-d24b613cd650" data-file-name="components/FinancialCarousel.tsx"><span className="editable-text" data-unique-id="937b532a-8b72-4197-8f9c-d07a51de4965" data-file-name="components/FinancialCarousel.tsx">
                    $538.1M
                  </span></td>
                  <td className="px-4 py-3 text-sm font-bold text-green-600 text-right" data-unique-id="8d165e62-7c1e-46b5-a22d-64445cc8c507" data-file-name="components/FinancialCarousel.tsx"><span className="editable-text" data-unique-id="698b27d8-76b0-4c4f-ad29-913a4081b7a3" data-file-name="components/FinancialCarousel.tsx">
                    21.4%
                  </span></td>
                </motion.tr>
              </tfoot>
            </table>
          </div>
        </div>
      </div>

      <div className="mt-4 flex justify-between text-xs text-gray-500" data-unique-id="1bef7399-f846-4521-a551-41d645e29519" data-file-name="components/FinancialCarousel.tsx">
        <div data-unique-id="0aa8e229-f1a9-4097-87a3-becdb1b1a072" data-file-name="components/FinancialCarousel.tsx"><span className="editable-text" data-unique-id="7303b5c1-9a87-4fe7-8b5d-f1d808dfc41d" data-file-name="components/FinancialCarousel.tsx">Source: Financial Reporting System</span></div>
        <div data-unique-id="d3e1285b-b5da-4f04-a070-d2c49b0baf5c" data-file-name="components/FinancialCarousel.tsx"><span className="editable-text" data-unique-id="2b7af215-b695-4cb9-88d5-8c384fbc47ca" data-file-name="components/FinancialCarousel.tsx">Last Updated: August 12, 2024</span></div>
      </div>
    </div>
  </div>;
};
const LineChartVisual = () => <div className="relative h-full w-full flex items-center justify-center" data-unique-id="7efdc078-5ad3-42d4-a39d-61294d9b0b24" data-file-name="components/FinancialCarousel.tsx">
  <div className="absolute inset-0 bg-[#f0f5fa]0 bg-opacity-10 rounded-lg" data-unique-id="dde2f3b0-8f87-40a9-922b-b26885e233b6" data-file-name="components/FinancialCarousel.tsx"></div>
  <div className="relative z-10 flex flex-col items-center justify-center w-full h-full p-4" data-unique-id="3951a810-af54-44b6-a9f1-ca924fbd89f8" data-file-name="components/FinancialCarousel.tsx">
    <div className="w-full h-48 relative" data-unique-id="d0361d8f-b12f-4687-b3ac-23c9443c03db" data-file-name="components/FinancialCarousel.tsx" data-dynamic-text="true">
      {/* Grid lines */}
      <div className="absolute inset-0 grid grid-cols-4 grid-rows-4" data-unique-id="479d2400-e8f5-45b2-a786-4b9ee44a92e3" data-file-name="components/FinancialCarousel.tsx" data-dynamic-text="true">
        {Array(16).fill(0).map((_, i) => <div key={i} className="border-gray-200 border-opacity-30 border" data-is-mapped="true" data-unique-id="65a2643d-218f-4fbb-9b46-3dd90a71a42e" data-file-name="components/FinancialCarousel.tsx"></div>)}
      </div>

      {/* Line chart */}
      <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none" data-unique-id="5ce4de8e-d746-4a7b-9161-e1c215c7890f" data-file-name="components/FinancialCarousel.tsx" data-dynamic-text="true">
        <path d="M0,80 L20,70 L40,60 L60,40 L80,30 L100,20" fill="none" stroke="#3b82f6" strokeWidth="2" />
        <path d="M0,80 L20,70 L40,60 L60,40 L80,30 L100,20" fill="url(#gradient)" fillOpacity="0.2" stroke="none" />
        <defs>
          <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.5" />
            <stop offset="100%" stopColor="#3b82f6" stopOpacity="0" />
          </linearGradient>
        </defs>

        {/* Data points */}
        <circle cx="0" cy="80" r="2" fill="#3b82f6" />
        <circle cx="20" cy="70" r="2" fill="#3b82f6" />
        <circle cx="40" cy="60" r="2" fill="#3b82f6" />
        <circle cx="60" cy="40" r="2" fill="#3b82f6" />
        <circle cx="80" cy="30" r="2" fill="#3b82f6" />
        <circle cx="100" cy="20" r="2" fill="#3b82f6" />
      </svg>
    </div>

    <div className="w-full flex justify-between mt-2" data-unique-id="26b1796b-f662-451d-8726-79d8389a8203" data-file-name="components/FinancialCarousel.tsx">
      <span className="text-xs text-gray-500" data-unique-id="d7f69def-39f7-42bb-80ed-03ff73cc668a" data-file-name="components/FinancialCarousel.tsx"><span className="editable-text" data-unique-id="86dc3cbf-b091-4fc3-a234-025602a87231" data-file-name="components/FinancialCarousel.tsx">2020</span></span>
      <span className="text-xs text-gray-500" data-unique-id="7e9edc0a-895f-4489-9a6a-c82e579af6cd" data-file-name="components/FinancialCarousel.tsx"><span className="editable-text" data-unique-id="98195db6-5f12-4648-b40f-910aaac77479" data-file-name="components/FinancialCarousel.tsx">2021</span></span>
      <span className="text-xs text-gray-500" data-unique-id="7f5f5c43-9af6-47f1-873a-b10a8806c666" data-file-name="components/FinancialCarousel.tsx"><span className="editable-text" data-unique-id="9f6d77b8-6ef7-4725-8d31-c58ffba12a0a" data-file-name="components/FinancialCarousel.tsx">2022</span></span>
      <span className="text-xs text-gray-500" data-unique-id="90d72a7e-c5ed-4e71-80bd-6c04cfc1dcaa" data-file-name="components/FinancialCarousel.tsx"><span className="editable-text" data-unique-id="cb3de3fb-83bf-4616-95d4-a7675bf90bc6" data-file-name="components/FinancialCarousel.tsx">2023</span></span>
      <span className="text-xs text-gray-500" data-unique-id="e8e19132-0c57-416a-aa5e-b0f4f8486244" data-file-name="components/FinancialCarousel.tsx"><span className="editable-text" data-unique-id="2b9894e6-94b9-4713-b7d9-b5b025b2ec1b" data-file-name="components/FinancialCarousel.tsx">2024</span></span>
      <span className="text-xs text-gray-500" data-unique-id="0909414d-9cca-4397-914b-c3acc997fa9a" data-file-name="components/FinancialCarousel.tsx"><span className="editable-text" data-unique-id="3772cc2b-dddf-4956-8731-b0dd59377254" data-file-name="components/FinancialCarousel.tsx">2025</span></span>
    </div>

    <div className="text-gray-400 text-xs mt-2" data-unique-id="5cc723be-3cb8-478f-b9a5-683d12777cbf" data-file-name="components/FinancialCarousel.tsx"><span className="editable-text" data-unique-id="5e317666-07be-4583-aed0-545a789b4f75" data-file-name="components/FinancialCarousel.tsx">ANNUAL GROWTH TRAJECTORY</span></div>
  </div>
</div>;
const InvestmentVisual = () => <div className="relative h-full w-full flex items-center justify-center" data-unique-id="9e754f9e-8116-4b34-b41c-6cb662e82c3a" data-file-name="components/FinancialCarousel.tsx">
  <div className="absolute inset-0 bg-[#f0f5fa]0 bg-opacity-10 rounded-lg" data-unique-id="8b48d56d-f886-452e-913d-f3f6b1822775" data-file-name="components/FinancialCarousel.tsx"></div>
  <div className="relative z-10 flex flex-col items-center justify-center w-full h-full p-6" data-unique-id="9d65754a-c0b2-4ee5-a627-3a6fabebf73d" data-file-name="components/FinancialCarousel.tsx">
    <div className="w-full max-w-md bg-white bg-opacity-90 rounded-lg p-4 shadow-lg" data-unique-id="dbe66dc4-dd5d-4837-9008-4d8a6b0452e4" data-file-name="components/FinancialCarousel.tsx">
      <div className="text-lg font-semibold text-gray-800 mb-3" data-unique-id="ac636bf9-208c-4ba6-bb3e-8aaa6ded2b14" data-file-name="components/FinancialCarousel.tsx"><span className="editable-text" data-unique-id="aa9e07b4-10e1-4869-aedd-611558bdcb70" data-file-name="components/FinancialCarousel.tsx">Investment Portfolio</span></div>

      <div className="space-y-3" data-unique-id="678fc790-0b28-454c-9c76-3e846650c4d0" data-file-name="components/FinancialCarousel.tsx">
        <div data-unique-id="e7b2e408-cb4c-49fb-860d-eb96bb3afa97" data-file-name="components/FinancialCarousel.tsx">
          <div className="flex justify-between mb-1" data-unique-id="d60b6b0e-81a1-4c3a-869f-db0721cefb70" data-file-name="components/FinancialCarousel.tsx">
            <span className="text-sm text-gray-600" data-unique-id="67a0c982-bbd3-4ab1-b300-a7b12f21d2fc" data-file-name="components/FinancialCarousel.tsx"><span className="editable-text" data-unique-id="8dc2cb75-6c2d-49b7-9b15-a7b27dd98a76" data-file-name="components/FinancialCarousel.tsx">Technology</span></span>
            <span className="text-sm font-medium text-gray-700" data-unique-id="abf4726c-24d4-4a9e-b292-96ddb3f479b1" data-file-name="components/FinancialCarousel.tsx"><span className="editable-text" data-unique-id="5774c565-0c4f-4447-a7f3-acf59635c706" data-file-name="components/FinancialCarousel.tsx">43%</span></span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div className="bg-[#415d80] h-2 rounded-full" style={{
              width: '43%'
            }}></div>
          </div>
        </div>

        <div data-unique-id="c842ded0-8141-4f02-8808-419043bbfa6b" data-file-name="components/FinancialCarousel.tsx">
          <div className="flex justify-between mb-1" data-unique-id="7731ae17-5ab7-45e5-a32b-683da9d4997e" data-file-name="components/FinancialCarousel.tsx">
            <span className="text-sm text-gray-600" data-unique-id="bb903557-3b82-42df-9b5a-1b936a62c9f4" data-file-name="components/FinancialCarousel.tsx"><span className="editable-text" data-unique-id="58e0d455-de79-498e-a034-60031ed7d8db" data-file-name="components/FinancialCarousel.tsx">Financial Services</span></span>
            <span className="text-sm font-medium text-gray-700" data-unique-id="ceb3de6c-8f49-450f-9417-d676a4eb01ab" data-file-name="components/FinancialCarousel.tsx"><span className="editable-text" data-unique-id="0c72d370-52b3-41a1-b0b0-47c646dd8a31" data-file-name="components/FinancialCarousel.tsx">28%</span></span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div className="bg-[#415d80] h-2 rounded-full" style={{
              width: '28%'
            }}></div>
          </div>
        </div>

        <div data-unique-id="fd5b5414-2f7e-415d-8165-ddb674ed4bf1" data-file-name="components/FinancialCarousel.tsx">
          <div className="flex justify-between mb-1" data-unique-id="dba8e2db-b42d-4a70-8426-8a1afa1bef81" data-file-name="components/FinancialCarousel.tsx">
            <span className="text-sm text-gray-600" data-unique-id="d8ff2fa9-17df-4c5f-8842-87e8b393d18d" data-file-name="components/FinancialCarousel.tsx"><span className="editable-text" data-unique-id="dcfb521a-bedc-45f9-81ff-9f5de7a88448" data-file-name="components/FinancialCarousel.tsx">Healthcare</span></span>
            <span className="text-sm font-medium text-gray-700" data-unique-id="79b75a38-7f3c-42fe-a453-2b1551d6962c" data-file-name="components/FinancialCarousel.tsx"><span className="editable-text" data-unique-id="7949d3d9-52ba-4788-a1e0-b979368970a1" data-file-name="components/FinancialCarousel.tsx">15%</span></span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div className="bg-[#415d80] h-2 rounded-full" style={{
              width: '15%'
            }}></div>
          </div>
        </div>

        <div data-unique-id="0b8f0462-e311-412d-95e1-9ee430e4dd57" data-file-name="components/FinancialCarousel.tsx">
          <div className="flex justify-between mb-1" data-unique-id="0ef8984b-f89d-4cc7-8047-be34880c58ad" data-file-name="components/FinancialCarousel.tsx">
            <span className="text-sm text-gray-600" data-unique-id="ee7419dc-085e-4f10-ad1a-8a52badbebde" data-file-name="components/FinancialCarousel.tsx"><span className="editable-text" data-unique-id="87579a31-da5c-4ed7-837a-11b5dbb7d9dc" data-file-name="components/FinancialCarousel.tsx">Consumer Goods</span></span>
            <span className="text-sm font-medium text-gray-700" data-unique-id="6fdc321a-454f-4975-973f-4fcff6e1fb24" data-file-name="components/FinancialCarousel.tsx"><span className="editable-text" data-unique-id="7c69d25a-5d2c-42f7-a124-4fdc526457bd" data-file-name="components/FinancialCarousel.tsx">14%</span></span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div className="bg-[#415d80] h-2 rounded-full" style={{
              width: '14%'
            }}></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>;
const EfficiencyVisual = () => <div className="relative h-full w-full flex items-center justify-center" data-unique-id="ec829a11-a9b5-4cac-9dae-f89267180c00" data-file-name="components/FinancialCarousel.tsx">
  <div className="absolute inset-0 bg-[#f0f5fa]0 bg-opacity-10 rounded-lg" data-unique-id="53cbeba5-11e0-4648-8e46-8d1236511604" data-file-name="components/FinancialCarousel.tsx"></div>
  <div className="relative z-10 flex flex-col items-center justify-center space-y-4 w-full h-full" data-unique-id="69df548e-0547-4e95-b271-beb93c681118" data-file-name="components/FinancialCarousel.tsx">
    <div className="w-full flex justify-around items-end h-48 px-4" data-unique-id="7046723a-c36c-49c9-9f2f-606d7c6f3f23" data-file-name="components/FinancialCarousel.tsx">
      <div className="flex flex-col items-center" data-unique-id="0452f42f-99f8-4816-a6d0-8b0378f37ef4" data-file-name="components/FinancialCarousel.tsx">
        <div className="h-32 w-16 bg-gradient-to-t from-[#415d80] to-[#6889ad] rounded-t-md relative" data-unique-id="31dfd3c9-dccc-454b-b7d8-c8963bbf86ce" data-file-name="components/FinancialCarousel.tsx">
          <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 -translate-y-full bg-[#2b3e55] text-white px-2 py-1 rounded text-xs" data-unique-id="41560cbd-3461-41a3-b64f-307dd67b77d2" data-file-name="components/FinancialCarousel.tsx"><span className="editable-text" data-unique-id="7197a79e-16f6-4e9a-822f-b4546185c2d0" data-file-name="components/FinancialCarousel.tsx">Current</span></div>
        </div>
        <div className="mt-2 text-xs text-gray-500" data-unique-id="e03f3494-af15-45ad-99c2-772d1f7662fb" data-file-name="components/FinancialCarousel.tsx"><span className="editable-text" data-unique-id="a9ca19a5-a76b-4e25-871d-56ebee703fe5" data-file-name="components/FinancialCarousel.tsx">Process A</span></div>
      </div>

      <div className="flex flex-col items-center" data-unique-id="ab318fcd-537e-427e-a29c-78344bfde44b" data-file-name="components/FinancialCarousel.tsx">
        <div className="h-32 w-16 relative" data-unique-id="9905f4eb-9acb-4b24-8522-6b00dd4591ad" data-file-name="components/FinancialCarousel.tsx">
          <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#415d80] to-[#6889ad] rounded-t-md" data-unique-id="37f6429a-7514-4220-acba-88db4685c804" data-file-name="components/FinancialCarousel.tsx"></div>
          <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-green-600 to-green-400 rounded-t-md border-t-2 border-dashed border-white" data-unique-id="0fd8efee-f277-4ac0-9b05-deb9386eacc3" data-file-name="components/FinancialCarousel.tsx">
            <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 -translate-y-full bg-green-600 text-white px-2 py-1 rounded text-xs" data-unique-id="753c56e5-a270-405c-93ff-571926e90299" data-file-name="components/FinancialCarousel.tsx"><span className="editable-text" data-unique-id="f6d0e2be-26db-4dd5-aefb-a5c4cc116a26" data-file-name="components/FinancialCarousel.tsx">-17%</span></div>
          </div>
        </div>
        <div className="mt-2 text-xs text-gray-500" data-unique-id="00919fcc-87f1-4f3a-86ad-b46186c56272" data-file-name="components/FinancialCarousel.tsx"><span className="editable-text" data-unique-id="44b93a85-e46d-4fa8-9684-c9c61a5d206e" data-file-name="components/FinancialCarousel.tsx">Process B</span></div>
      </div>

      <div className="flex flex-col items-center" data-unique-id="a9ec3fb1-8fb3-4825-8594-113c1c47a324" data-file-name="components/FinancialCarousel.tsx">
        <div className="h-32 w-16 relative" data-unique-id="cb56ae50-042b-4e86-9bd8-028789dbc689" data-file-name="components/FinancialCarousel.tsx">
          <div className="absolute bottom-0 left-0 right-0 h-28 bg-gradient-to-t from-[#415d80] to-[#6889ad] rounded-t-md" data-unique-id="4fd755a5-09fe-4f63-9ec8-49cbe651eeee" data-file-name="components/FinancialCarousel.tsx"></div>
          <div className="absolute bottom-0 left-0 right-0 h-22 bg-gradient-to-t from-green-600 to-green-400 rounded-t-md border-t-2 border-dashed border-white" data-unique-id="f9cfd35f-40c6-438e-90dc-00b954747573" data-file-name="components/FinancialCarousel.tsx">
            <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 -translate-y-full bg-green-600 text-white px-2 py-1 rounded text-xs" data-unique-id="b0b41d53-1155-49f6-8a0e-64ae0bfb0df2" data-file-name="components/FinancialCarousel.tsx"><span className="editable-text" data-unique-id="1f3b7ac5-bcab-46ed-810b-0e891260c6d6" data-file-name="components/FinancialCarousel.tsx">-21%</span></div>
          </div>
        </div>
        <div className="mt-2 text-xs text-gray-500" data-unique-id="c0831de9-2595-470e-a42f-299058e631ce" data-file-name="components/FinancialCarousel.tsx"><span className="editable-text" data-unique-id="13f6079a-f43d-451f-8c19-c2eb1b67b303" data-file-name="components/FinancialCarousel.tsx">Process C</span></div>
      </div>
    </div>
    <div className="text-gray-400 text-xs" data-unique-id="8030a3e5-94d7-4e04-b131-c195fd3baeee" data-file-name="components/FinancialCarousel.tsx"><span className="editable-text" data-unique-id="1ce92a5f-4053-4903-a258-6827d9953b60" data-file-name="components/FinancialCarousel.tsx">OPERATIONAL COST REDUCTION POTENTIAL</span></div>
  </div>
</div>;

// Render the appropriate chart based on type
const renderChart = (type: string) => {
  switch (type) {
    case 'chart':
      return <AdvancedChartVisual />;
    case 'document':
      return <DocumentVisual />;
    case 'table':
      return <DataTableVisual />;
    default:
      return <AdvancedChartVisual />;
  }
};

// Render the appropriate icon based on chart type
const renderIcon = (type: string) => {
  switch (type) {
    case 'chart':
      return <BarChart3 className="w-6 h-6" />;
    case 'document':
      return <FileText className="w-6 h-6" />;
    case 'table':
      return <Table className="w-6 h-6" data-unique-id="97fe5f3a-35e4-4a4f-ad58-8d0ec07407f3" data-file-name="components/FinancialCarousel.tsx" />;
    default:
      return <BarChart3 className="w-6 h-6" />;
  }
};
const FinancialCarousel: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [direction, setDirection] = useState(0);

  // Auto-advance slides
  useEffect(() => {
    const timer = setTimeout(() => {
      nextSlide();
    }, 8000);
    return () => clearTimeout(timer);
  }, [currentSlide]);
  const nextSlide = () => {
    setDirection(1);
    setCurrentSlide(prev => prev === financialData.length - 1 ? 0 : prev + 1);
  };
  const prevSlide = () => {
    setDirection(-1);
    setCurrentSlide(prev => prev === 0 ? financialData.length - 1 : prev - 1);
  };

  // Animation variants
  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0
    }),
    center: {
      x: 0,
      opacity: 1
    },
    exit: (direction: number) => ({
      x: direction > 0 ? -1000 : 1000,
      opacity: 0
    })
  };

  // Light theme holographic effect for AI insights
  const holographicEffect = {
    boxShadow: '0 0 15px rgba(59, 130, 246, 0.3), 0 0 30px rgba(59, 130, 246, 0.2), 0 0 45px rgba(59, 130, 246, 0.05)',
    background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.95) 0%, rgba(240, 249, 255, 0.95) 100%)'
  };

  // Animation states for scanning and insight generation
  const [isScanning, setIsScanning] = useState(false);
  const [currentData, setCurrentData] = useState([...financialData]);

  // Trigger scanning animation when slide changes
  useEffect(() => {
    // Reset states for current slide
    setIsScanning(true);
    setCurrentData(prev => {
      const newData = [...prev];
      newData[currentSlide] = {
        ...newData[currentSlide],
        scanComplete: false,
        insightGenerated: false,
        insightGenerating: false,
        description: ""
      };
      return newData;
    });

    // Scanning animation timeout
    const scanTimer = setTimeout(() => {
      setIsScanning(false);

      // Mark scan as complete
      setCurrentData(prev => {
        const newData = [...prev];
        newData[currentSlide] = {
          ...newData[currentSlide],
          scanComplete: true,
          insightGenerating: true
        };
        return newData;
      });

      // After scan completes, start generating insight
      const insightTimer = setTimeout(() => {
        // Simulate insight generation
        generateInsightForCurrentSlide();
      }, 500);
      return () => clearTimeout(insightTimer);
    }, 3000);
    return () => clearTimeout(scanTimer);
  }, [currentSlide]);

  // Function to generate insight for current slide
  const generateInsightForCurrentSlide = async () => {
    // Add a slight delay for visual effect
    await new Promise(resolve => setTimeout(resolve, 800));
    try {
      const topic = currentData[currentSlide].title;
      const prompt = `You are a financial analyst AI assistant. Provide a concise, professional insight about ${topic}. 
      Include specific metrics, trends, and actionable recommendations. Keep your response under 100 words.`;

      // Use the first available model
      const model = getTextProviders()[0];
      const result = await generateText(prompt, model);

      // Update with generated insight
      setCurrentData(prev => {
        const newData = [...prev];
        newData[currentSlide] = {
          ...newData[currentSlide],
          description: result.text,
          insightGenerated: true,
          insightGenerating: false
        };
        return newData;
      });
    } catch (error) {
      console.error("Error generating insight:", error);

      // If error, set a default insight
      setCurrentData(prev => {
        const newData = [...prev];
        const defaultInsights = ["Analysis reveals a 23% increase in quarterly revenue, with strongest growth in the technology sector. Recommend increasing investment in cloud services division for maximum ROI in the next fiscal year.", "Balance sheet analysis indicates a healthy liquidity ratio of 2.3. Current assets exceed liabilities by 43%. Recommend maintaining current cash reserves while exploring strategic acquisitions in complementary markets.", "Market analysis shows enterprise clients now represent 62% of revenue, up from 48% last year. Recommend expanding enterprise sales team by 15% to capitalize on this trend and develop specialized enterprise solutions."];
        newData[currentSlide] = {
          ...newData[currentSlide],
          description: defaultInsights[currentSlide],
          insightGenerated: true,
          insightGenerating: false
        };
        return newData;
      });
    }
  };

  // Scanner animation variants
  const scannerVariants = {
    initial: {
      top: 0
    },
    animate: {
      top: '100%',
      transition: {
        duration: 3,
        ease: 'linear'
      }
    }
  };

  // Data point highlight animation variants
  const highlightVariants = {
    initial: {
      opacity: 0.3,
      scale: 1
    },
    animate: (custom: number) => ({
      opacity: [0.3, 1, 0.3],
      scale: [1, 1.2, 1],
      transition: {
        delay: custom * 0.2,
        duration: 0.6
      }
    })
  };
  return <div className="w-full h-screen bg-gray-50 flex flex-col items-center justify-center overflow-hidden" data-unique-id="e5ac3d63-d769-41eb-b297-a975e0a4c980" data-file-name="components/FinancialCarousel.tsx" data-dynamic-text="true">
    {/* Header */}
    <div className="w-full text-center mb-8" data-unique-id="f605e4f7-5e94-49b1-abeb-acc5d1948765" data-file-name="components/FinancialCarousel.tsx">
      <h1 className="text-4xl font-bold text-[#415d80] tracking-tight" data-unique-id="1667a66f-6431-4ccd-9108-c1096182c524" data-file-name="components/FinancialCarousel.tsx"><span className="editable-text" data-unique-id="15f6e61a-dcb4-4452-9f28-cf335de1721e" data-file-name="components/FinancialCarousel.tsx">
        LLM-Powered Financial Intelligence
      </span></h1>
      <p className="text-[#415d80] mt-2" data-unique-id="5883623b-0e01-4a28-a7b5-34b092465207" data-file-name="components/FinancialCarousel.tsx"><span className="editable-text" data-unique-id="433efdbe-b0ec-4eb7-985f-97377ca4f479" data-file-name="components/FinancialCarousel.tsx">Advanced analytics and AI-driven insights for strategic decision making</span></p>
    </div>

    {/* Carousel */}
    <div className="relative w-full max-w-6xl h-[500px] mx-auto" data-unique-id="47ba1500-cf74-41cc-b649-63c8f96d0040" data-file-name="components/FinancialCarousel.tsx" data-dynamic-text="true">
      <AnimatePresence initial={false} custom={direction} mode="wait">
        <motion.div key={currentSlide} custom={direction} variants={slideVariants} initial="enter" animate="center" exit="exit" transition={{
          x: {
            type: "spring",
            stiffness: 300,
            damping: 30
          },
          opacity: {
            duration: 0.2
          }
        }} className="absolute inset-0 flex" data-unique-id="6583e53b-0ba4-4e77-ac5b-d14404818d14" data-file-name="components/FinancialCarousel.tsx" data-dynamic-text="true">
          {/* Left section - Financial Visuals */}
          <div className="w-1/2 bg-white p-6 rounded-l-xl border-r border-gray-200 shadow-md relative overflow-hidden" data-unique-id="ffa65320-572c-4ebb-89ce-a69b35efc784" data-file-name="components/FinancialCarousel.tsx">
            <div className="h-full flex flex-col" data-unique-id="1101ac9d-2189-4760-8e49-45b33b2b78cd" data-file-name="components/FinancialCarousel.tsx">
              <div className="flex items-center mb-4" data-unique-id="5ccb257e-6d5f-4642-aba2-fb8a90990af2" data-file-name="components/FinancialCarousel.tsx" data-dynamic-text="true">
                {renderIcon(financialData[currentSlide].chartType)}
                <h2 className="text-xl font-semibold text-[#415d80] ml-2" data-unique-id="2c5d4157-dc89-40bc-9d31-c8ea7d26890f" data-file-name="components/FinancialCarousel.tsx" data-dynamic-text="true">{currentData[currentSlide].title}</h2>
              </div>
              <div className="flex-grow relative" data-unique-id="828d0a81-119a-4582-841a-1fc9b142ab53" data-file-name="components/FinancialCarousel.tsx" data-dynamic-text="true">
                {renderChart(currentData[currentSlide].chartType)}

                {/* Advanced scanner effect */}
                <ScanningEffect isActive={isScanning} />

                {/* Data point highlight effects */}
                {currentData[currentSlide].chartType === "chart" && <DataPointHighlight isActive={isScanning} points={[{
                  x: 10,
                  y: 30
                }, {
                  x: 25,
                  y: 40
                }, {
                  x: 40,
                  y: 20
                }, {
                  x: 55,
                  y: 20
                }, {
                  x: 70,
                  y: 45
                }, {
                  x: 85,
                  y: 50
                }, {
                  x: 95,
                  y: 28
                }]} />}

                {currentData[currentSlide].chartType === "document" && <DataPointHighlight isActive={isScanning} points={[{
                  x: 25,
                  y: 15
                }, {
                  x: 75,
                  y: 15
                }, {
                  x: 30,
                  y: 30
                }, {
                  x: 70,
                  y: 30
                }, {
                  x: 30,
                  y: 45
                }, {
                  x: 70,
                  y: 45
                }, {
                  x: 30,
                  y: 60
                }, {
                  x: 70,
                  y: 60
                }, {
                  x: 30,
                  y: 75
                }, {
                  x: 70,
                  y: 75
                }]} />}

                {currentData[currentSlide].chartType === "table" && <DataPointHighlight isActive={isScanning} points={[{
                  x: 15,
                  y: 25
                }, {
                  x: 35,
                  y: 25
                }, {
                  x: 55,
                  y: 25
                }, {
                  x: 75,
                  y: 25
                }, {
                  x: 15,
                  y: 35
                }, {
                  x: 35,
                  y: 35
                }, {
                  x: 55,
                  y: 35
                }, {
                  x: 75,
                  y: 35
                }, {
                  x: 15,
                  y: 45
                }, {
                  x: 35,
                  y: 45
                }, {
                  x: 55,
                  y: 45
                }, {
                  x: 75,
                  y: 45
                }, {
                  x: 15,
                  y: 55
                }, {
                  x: 35,
                  y: 55
                }, {
                  x: 55,
                  y: 55
                }, {
                  x: 75,
                  y: 55
                }]} />}
              </div>
            </div>
          </div>

          {/* Right section - AI Insights */}
          <div className="w-1/2 bg-white p-6 rounded-r-xl shadow-md" data-unique-id="47d66e79-6a21-4e66-a4dc-d3a964bd63e9" data-file-name="components/FinancialCarousel.tsx">
            <div className="h-full flex flex-col justify-center p-6 rounded-lg border border-[#e6f0f9]" style={holographicEffect} data-unique-id="0a2873cd-ab19-4040-bfc6-1808b49daa8d" data-file-name="components/FinancialCarousel.tsx">
              <div className="mb-4 flex items-center" data-unique-id="bf4d5ad0-8388-45aa-9aab-2c72303c9209" data-file-name="components/FinancialCarousel.tsx">
                <motion.div animate={{
                  rotate: isScanning || currentData[currentSlide].insightGenerating ? [0, 360] : 0,
                  scale: currentData[currentSlide].insightGenerated ? [1, 1.2, 1] : 1
                }} transition={{
                  rotate: {
                    duration: 2,
                    repeat: isScanning || currentData[currentSlide].insightGenerating ? Infinity : 0,
                    ease: "linear"
                  },
                  scale: {
                    duration: 0.5,
                    times: [0, 0.5, 1]
                  }
                }} className="text-[#415d80] mr-2" data-unique-id="f630d57a-a963-4d45-ac1c-435287f8a199" data-file-name="components/FinancialCarousel.tsx" data-dynamic-text="true">
                  {currentData[currentSlide].insightGenerated ? <motion.div initial={{
                    scale: 0
                  }} animate={{
                    scale: 1
                  }} transition={{
                    type: "spring",
                    bounce: 0.5
                  }} data-unique-id="d0b00406-6435-4935-9234-744ac2d50f63" data-file-name="components/FinancialCarousel.tsx">
                    <Sparkles className="w-5 h-5" />
                  </motion.div> : isScanning ? <Scan className="w-5 h-5" /> : <Sparkles className="w-5 h-5" />}
                </motion.div>
                <h3 className="text-lg font-medium text-[#415d80]" data-unique-id="11306408-f1de-476a-8d7c-666c628f97cf" data-file-name="components/FinancialCarousel.tsx">
                  <span className="editable-text" data-unique-id="dc667316-da43-44ea-bd34-b59ba273b8f6" data-file-name="components/FinancialCarousel.tsx" data-dynamic-text="true">
                    {currentData[currentSlide].insightGenerated ? "AI-Generated Insights" : currentData[currentSlide].scanComplete ? "Generating Insights..." : "Scanning Data..."}
                  </span>
                </h3>
              </div>

              <div className="text-gray-700 leading-relaxed relative min-h-[120px]" data-unique-id="1e196ca6-6063-46b0-bacf-5db64515cbf7" data-file-name="components/FinancialCarousel.tsx" data-dynamic-text="true">
                {currentData[currentSlide].scanComplete ? currentData[currentSlide].insightGenerated ? <motion.div initial={{
                  opacity: 0
                }} animate={{
                  opacity: 1
                }} transition={{
                  duration: 0.8
                }} data-unique-id="80e0d5c3-99fa-46fe-8874-f401f717010b" data-file-name="components/FinancialCarousel.tsx" data-dynamic-text="true">
                  {currentData[currentSlide].description}
                </motion.div> : <div className="space-y-3" data-unique-id="851df194-a866-4254-8fd3-42c52222d60b" data-file-name="components/FinancialCarousel.tsx">
                  <motion.div className="h-4 bg-[#e6f0f9] rounded w-full max-w-[80%]" animate={{
                    opacity: [0.4, 0.8, 0.4]
                  }} transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    repeatType: "reverse"
                  }} data-unique-id="37f2ec60-2f88-4335-a654-94811fe7431e" data-file-name="components/FinancialCarousel.tsx" />
                  <motion.div className="h-4 bg-[#e6f0f9] rounded w-full max-w-[90%]" animate={{
                    opacity: [0.3, 0.7, 0.3]
                  }} transition={{
                    duration: 1.7,
                    repeat: Infinity,
                    repeatType: "reverse",
                    delay: 0.2
                  }} data-unique-id="e0efc431-0386-4a5e-b7da-9cedd37d929c" data-file-name="components/FinancialCarousel.tsx" />
                  <motion.div className="h-4 bg-[#e6f0f9] rounded w-full max-w-[70%]" animate={{
                    opacity: [0.5, 0.9, 0.5]
                  }} transition={{
                    duration: 1.3,
                    repeat: Infinity,
                    repeatType: "reverse",
                    delay: 0.4
                  }} data-unique-id="88a224a0-03cc-422b-b1bf-f24017c4e6e5" data-file-name="components/FinancialCarousel.tsx" />
                  <motion.div className="text-[#415d80] text-sm mt-2 flex items-center" data-unique-id="8229cba1-2ee1-4711-9364-595c880882a0" data-file-name="components/FinancialCarousel.tsx">
                    <Sparkles className="w-4 h-4 mr-2" /><span className="editable-text" data-unique-id="0877ea72-bdc4-4ef6-a677-f1b87fe32f0b" data-file-name="components/FinancialCarousel.tsx">
                      Generating insights...
                    </span></motion.div>
                </div> : <motion.div className="text-[#415d80] text-center py-6 italic" animate={{
                  opacity: [0.7, 1, 0.7]
                }} transition={{
                  duration: 2,
                  repeat: Infinity,
                  repeatType: "reverse"
                }} data-unique-id="7e10d65b-47ef-41f4-8b5f-136ecadd5342" data-file-name="components/FinancialCarousel.tsx" data-dynamic-text="true"><span className="editable-text" data-unique-id="0a36e622-65e3-4bb1-8ef5-a998b2c8901a" data-file-name="components/FinancialCarousel.tsx">
                    Scanning </span>{currentData[currentSlide].chartType === "bar" ? "chart" : currentData[currentSlide].chartType === "document" ? "document" : "data"}<span className="editable-text" data-unique-id="8a7854ee-d43a-4293-a8da-33d9fdfdfca0" data-file-name="components/FinancialCarousel.tsx"> for insights...
                  </span></motion.div>}

                {/* Text analysis animation */}
                {currentData[currentSlide].insightGenerating && <motion.div className="absolute inset-0 bg-[#415d80] bg-opacity-5" animate={{
                  opacity: [0, 0.3, 0],
                  x: [0, 2, 0, -2, 0]
                }} transition={{
                  duration: 0.5,
                  repeat: 5,
                  repeatType: "reverse"
                }} data-unique-id="4a3d89ba-319e-4a4c-a51d-ffec3ad09b41" data-file-name="components/FinancialCarousel.tsx" />}
              </div>

              <div className="mt-6 flex items-center" data-unique-id="72ec9c7d-5c0a-4732-b722-a5567b1ca0c7" data-file-name="components/FinancialCarousel.tsx">
                <div className="flex-grow h-[1px] bg-[#415d80] bg-opacity-20" data-unique-id="25f6c97c-f396-4320-b1f5-1ef156c03b2c" data-file-name="components/FinancialCarousel.tsx"></div>
                <div className="mx-4 text-[#415d80] text-sm flex items-center" data-unique-id="268f5d1a-dcab-432d-9473-93ede1c9289a" data-file-name="components/FinancialCarousel.tsx" data-dynamic-text="true">
                  {currentData[currentSlide].insightGenerated ? <motion.div initial={{
                    opacity: 0
                  }} animate={{
                    opacity: 1
                  }} transition={{
                    delay: 0.3,
                    duration: 0.5
                  }} data-unique-id="a512e159-6b6c-47ec-845e-e2427d12e780" data-file-name="components/FinancialCarousel.tsx">
                    <span className="editable-text" data-unique-id="2a47ebde-98a8-4bd4-979f-85daf8ebf348" data-file-name="components/FinancialCarousel.tsx">Confidence: 94%</span>
                  </motion.div> : currentData[currentSlide].scanComplete ? <motion.div animate={{
                    opacity: [0.5, 1, 0.5]
                  }} transition={{
                    duration: 1.5,
                    repeat: Infinity
                  }} data-unique-id="1436dc40-458a-47be-831d-f3c2b1bb95db" data-file-name="components/FinancialCarousel.tsx">
                    <span className="editable-text" data-unique-id="184d1f3c-f285-4468-b2f4-e6198fc4114c" data-file-name="components/FinancialCarousel.tsx">Analyzing data...</span>
                  </motion.div> : <motion.div animate={{
                    opacity: [0.5, 1, 0.5]
                  }} transition={{
                    duration: 1.5,
                    repeat: Infinity
                  }} data-unique-id="c4955db0-f470-429f-99da-5c935b78bfc8" data-file-name="components/FinancialCarousel.tsx">
                    <span className="editable-text" data-unique-id="21796b2c-e42b-4161-b2fa-9a9f771cfb41" data-file-name="components/FinancialCarousel.tsx">Scanning...</span>
                  </motion.div>}
                </div>
                <div className="flex-grow h-[1px] bg-[#415d80] bg-opacity-20" data-unique-id="b0086d3b-99db-4444-841f-9ad7230b08bb" data-file-name="components/FinancialCarousel.tsx"></div>
              </div>

              <div className="mt-6" data-unique-id="bee55972-030e-423c-bb78-7d6fc052ff7b" data-file-name="components/FinancialCarousel.tsx" data-dynamic-text="true">
                {currentData[currentSlide].insightGenerated && <motion.div initial={{
                  opacity: 0,
                  y: 10
                }} animate={{
                  opacity: 1,
                  y: 0
                }} transition={{
                  delay: 0.5,
                  duration: 0.5
                }} data-unique-id="d2d600ed-57e9-439c-9a5e-51d84ff41860" data-file-name="components/FinancialCarousel.tsx">
                  <AIModelSelector onInsightGenerated={newInsight => {
                    setCurrentData(prev => {
                      const newData = [...prev];
                      newData[currentSlide] = {
                        ...newData[currentSlide],
                        description: newInsight
                      };
                      return newData;
                    });
                  }} topic={currentData[currentSlide].title} />
                </motion.div>}
              </div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Navigation controls */}
      {/* <button onClick={prevSlide} className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-[#415d80] hover:bg-[#415d80] hover:bg-opacity-90 text-white p-2 rounded-full z-10 transition-colors" aria-label="Previous slide" data-unique-id="7fc3f8ee-4f01-4c8f-b23f-05f952e570d9" data-file-name="components/FinancialCarousel.tsx">
        <ChevronLeft className="w-6 h-6" />
      </button>

      <button onClick={nextSlide} className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-[#415d80] hover:bg-[#415d80] hover:bg-opacity-90 text-white p-2 rounded-full z-10 transition-colors" aria-label="Next slide" data-unique-id="fc447118-cee1-4366-811d-35d898130779" data-file-name="components/FinancialCarousel.tsx">
        <ChevronRight className="w-6 h-6" />
      </button> */}

      {/* Slide indicators */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2" data-unique-id="99914f04-f595-4dc5-870c-5e6c846a34a8" data-file-name="components/FinancialCarousel.tsx" data-dynamic-text="true">
        {currentData.map((_, index) => <button key={index} onClick={() => {
          setDirection(index > currentSlide ? 1 : -1);
          setCurrentSlide(index);
        }} className={`w-2 h-2 rounded-full transition-colors ${index === currentSlide ? 'bg-[#415d80]' : 'bg-gray-500'}`} aria-label={`Go to slide ${index + 1}`} data-is-mapped="true" data-unique-id="92f9b378-3d59-43ea-9578-915ace2d8c55" data-file-name="components/FinancialCarousel.tsx" />)}
      </div>
    </div>

    {/* Footer */}
    <div className="w-full flex justify-center mt-8" data-unique-id="45dd83c9-a7bf-4b5b-b4a4-b3df8154cfdf" data-file-name="components/FinancialCarousel.tsx">
      <div className="flex items-center space-x-6" data-unique-id="1d204079-16bb-48dc-ac71-4582292fb71f" data-file-name="components/FinancialCarousel.tsx">

      </div>
    </div>
  </div>;
};
export default FinancialCarousel;