'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, TrendingDown, AlertCircle, Check, Lightbulb, ArrowRight } from 'lucide-react';
import { getTextProviders, generateText } from '@/lib/api/util';
interface InsightType {
  title: string;
  content: string;
  type: 'positive' | 'negative' | 'neutral' | 'warning';
  loading?: boolean;
}
const FinancialInsightsCard = () => {
  const [insights, setInsights] = useState<InsightType[]>([{
    title: "Loading insights...",
    content: "",
    type: "neutral",
    loading: true
  }]);
  const [selectedModel, setSelectedModel] = useState<string>('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  useEffect(() => {
    const availableModels = getTextProviders();
    if (availableModels.length > 0) {
      setSelectedModel(availableModels[0]);
    }
    generateInsights();
  }, []);
  const generateInsights = async () => {
    setIsLoading(true);
    setError(null);
    const loadingInsights: InsightType[] = [{
      title: "Analyzing revenue trends...",
      content: "",
      type: "neutral",
      loading: true
    }, {
      title: "Evaluating market position...",
      content: "",
      type: "neutral",
      loading: true
    }, {
      title: "Calculating operational efficiency...",
      content: "",
      type: "neutral",
      loading: true
    }];
    setInsights(loadingInsights);
    try {
      const model = getTextProviders()[0];
      const prompt = `You are a financial analyst assistant. Generate 3 financial insights in JSON format for a business. 
      For each insight, provide a title (under 8 words), detailed content (2-3 sentences), and a type (positive, negative, neutral, or warning).
      Respond only with the JSON array, no explanations. Format:
      [
        {
          "title": "Revenue Growth Accelerating", 
          "content": "Q3 revenue has grown 18% YoY, outpacing industry average of 12%. This marks the fourth consecutive quarter of accelerating growth.", 
          "type": "positive"
        },
        ...
      ]`;
      const result = await generateText(prompt, model);
      try {
        const parsedInsights = JSON.parse(result.text);
        if (Array.isArray(parsedInsights) && parsedInsights.length > 0) {
          setInsights(parsedInsights);
        } else {
          throw new Error("Invalid response format");
        }
      } catch (parseError) {
        console.error("Failed to parse insights:", parseError);
        setError("Failed to parse insights. Please try again.");
        setInsights([{
          title: "Revenue Growth Accelerating",
          content: "Q3 revenue has grown 18% YoY, outpacing industry average of 12%. This marks the fourth consecutive quarter of accelerating growth.",
          type: "positive"
        }, {
          title: "Cash Reserves Below Target",
          content: "Cash reserves have fallen to 8.2% of annual operating costs, below the 10% target. Consider reviewing accounts receivable processes to improve cash flow.",
          type: "warning"
        }, {
          title: "Market Share Expansion",
          content: "Your market share has increased 2.3 points to 24.7% this quarter. The growth is primarily in enterprise segment where margins are typically higher.",
          type: "positive"
        }]);
      }
    } catch (error) {
      console.error("Error generating insights:", error);
      setError(`Error generating insights: ${error instanceof Error ? error.message : String(error)}`);
      setInsights([{
        title: "Revenue Growth Accelerating",
        content: "Q3 revenue has grown 18% YoY, outpacing industry average of 12%. This marks the fourth consecutive quarter of accelerating growth.",
        type: "positive"
      }, {
        title: "Cash Reserves Below Target",
        content: "Cash reserves have fallen to 8.2% of annual operating costs, below the 10% target. Consider reviewing accounts receivable processes to improve cash flow.",
        type: "warning"
      }, {
        title: "Market Share Expansion",
        content: "Your market share has increased 2.3 points to 24.7% this quarter. The growth is primarily in enterprise segment where margins are typically higher.",
        type: "positive"
      }]);
    } finally {
      setIsLoading(false);
    }
  };
  const getInsightIcon = (type: string) => {
    switch (type) {
      case 'positive':
        return <TrendingUp className="w-5 h-5 text-green-500" />;
      case 'negative':
        return <TrendingDown className="w-5 h-5 text-red-500" />;
      case 'warning':
        return <AlertCircle className="w-5 h-5 text-amber-500" />;
      default:
        return <Lightbulb className="w-5 h-5 text-blue-500" />;
    }
  };
  const getInsightColor = (type: string) => {
    switch (type) {
      case 'positive':
        return 'border-green-200 bg-green-50';
      case 'negative':
        return 'border-red-200 bg-red-50';
      case 'warning':
        return 'border-amber-200 bg-amber-50';
      default:
        return 'border-blue-200 bg-blue-50';
    }
  };
  return <div className="w-full max-w-2xl mx-auto bg-white rounded-xl shadow-md overflow-hidden" data-unique-id="0ab521d5-8412-48d9-b641-352c83a557a0" data-file-name="components/FinancialInsightsCard.tsx">
      <div className="p-6" data-unique-id="4c40dd93-f099-4811-b08a-c9a3b6bde78d" data-file-name="components/FinancialInsightsCard.tsx" data-dynamic-text="true">
        <div className="flex justify-between items-center mb-4" data-unique-id="454f1c4f-35bb-4ec7-8418-cf62d5edfc07" data-file-name="components/FinancialInsightsCard.tsx">
          <h2 className="text-xl font-bold text-gray-800" data-unique-id="1e9aa90c-afb9-468d-af76-0b692441956a" data-file-name="components/FinancialInsightsCard.tsx"><span className="editable-text" data-unique-id="258e16bb-dc1d-48a7-809c-1d854daa90cd" data-file-name="components/FinancialInsightsCard.tsx">Financial Insights</span></h2>
          
          <div className="flex items-center gap-3" data-unique-id="fa1bc192-07b9-4a18-88bb-96dbdc12287e" data-file-name="components/FinancialInsightsCard.tsx">
            <div className="relative" data-unique-id="f6f286b9-f0ca-4358-b115-ca80b81965f6" data-file-name="components/FinancialInsightsCard.tsx">
              <select value={selectedModel} onChange={e => setSelectedModel(e.target.value)} className="appearance-none bg-white border border-gray-200 rounded-md py-1 px-3 pr-8 text-sm text-gray-700 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500" data-unique-id="db3aba39-5ddb-45d7-a928-51d214fbed00" data-file-name="components/FinancialInsightsCard.tsx" data-dynamic-text="true">
                {getTextProviders().map(provider => <option key={provider} value={provider} data-is-mapped="true" data-unique-id="51a38ced-4b21-431b-bb75-8755f12c8ee4" data-file-name="components/FinancialInsightsCard.tsx" data-dynamic-text="true">
                    {provider === 'azure-gpt-4o' ? 'GPT-4o' : provider}
                  </option>)}
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700" data-unique-id="830909fd-52f4-4bd5-92bf-939f748f0a03" data-file-name="components/FinancialInsightsCard.tsx">
                <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" data-unique-id="97075530-d60a-4d65-b45f-49b2b4e2be92" data-file-name="components/FinancialInsightsCard.tsx">
                  <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                </svg>
              </div>
            </div>
            
            <button onClick={generateInsights} disabled={isLoading} className={`px-3 py-1 rounded-md text-sm bg-blue-500 hover:bg-blue-600 hover:bg-opacity-90 text-white flex items-center gap-1 transition-colors ${isLoading ? 'opacity-50 cursor-not-allowed' : ''}`} data-unique-id="d7673bb8-67f1-4c1e-95d6-3a60da21e2ea" data-file-name="components/FinancialInsightsCard.tsx" data-dynamic-text="true">
              {isLoading ? 'Generating...' : 'Refresh'}
            </button>
          </div>
        </div>
        
        {error && <div className="mb-4 p-3 bg-red-50 text-red-600 text-sm rounded-lg border border-red-200" data-unique-id="3ef6395c-f9e0-445d-b8c6-a6c4c013e194" data-file-name="components/FinancialInsightsCard.tsx" data-dynamic-text="true">
            {error}
          </div>}
        
        <div className="space-y-3" data-unique-id="bd88e2a5-6ff2-41e4-a4f6-205eb235029f" data-file-name="components/FinancialInsightsCard.tsx" data-dynamic-text="true">
          {insights.map((insight, index) => <motion.div key={index} initial={{
          opacity: 0,
          y: 10
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          delay: index * 0.15
        }} className={`p-4 border rounded-lg ${getInsightColor(insight.type)}`} data-is-mapped="true" data-unique-id="91f6126a-bdf7-4063-9170-468a09b33fba" data-file-name="components/FinancialInsightsCard.tsx">
              <div className="flex items-start gap-3" data-is-mapped="true" data-unique-id="37b0ab45-1ee4-4fa6-bfd7-19cf3ddd2053" data-file-name="components/FinancialInsightsCard.tsx">
                <div className="mt-1" data-is-mapped="true" data-unique-id="bc8feb02-e736-403b-a2c8-06bf10f9fedc" data-file-name="components/FinancialInsightsCard.tsx" data-dynamic-text="true">
                  {insight.loading ? <motion.div animate={{
                rotate: 360
              }} transition={{
                duration: 2,
                repeat: Infinity,
                ease: "linear"
              }} className="w-5 h-5 border-2 border-blue-500 border-t-transparent rounded-full" data-is-mapped="true" data-unique-id="15239a30-cccd-412e-868f-2c75419c4804" data-file-name="components/FinancialInsightsCard.tsx" /> : getInsightIcon(insight.type)}
                </div>
                <div className="flex-1" data-is-mapped="true" data-unique-id="5d0cb667-43fb-4dee-a55a-6eafc0e7d6fe" data-file-name="components/FinancialInsightsCard.tsx" data-dynamic-text="true">
                  <h3 className="font-medium text-gray-800 mb-1" data-is-mapped="true" data-unique-id="03fbde82-03a5-4cef-901e-35131fc3ba3d" data-file-name="components/FinancialInsightsCard.tsx" data-dynamic-text="true">{insight.title}</h3>
                  {insight.loading ? <div className="space-y-2" data-is-mapped="true" data-unique-id="ecb07738-6c13-4960-a111-da0baa685126" data-file-name="components/FinancialInsightsCard.tsx">
                      <motion.div className="h-3 bg-gray-200 rounded w-full max-w-[90%]" animate={{
                  opacity: [0.5, 0.8, 0.5]
                }} transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  repeatType: "reverse"
                }} data-is-mapped="true" data-unique-id="29c04efd-f7c3-4826-ac29-f165aa41e089" data-file-name="components/FinancialInsightsCard.tsx" />
                      <motion.div className="h-3 bg-gray-200 rounded w-full max-w-[70%]" animate={{
                  opacity: [0.3, 0.7, 0.3]
                }} transition={{
                  duration: 1.7,
                  repeat: Infinity,
                  repeatType: "reverse",
                  delay: 0.2
                }} data-is-mapped="true" data-unique-id="7560e08f-abc2-494c-9213-11f65eef50c9" data-file-name="components/FinancialInsightsCard.tsx" />
                    </div> : <p className="text-sm text-gray-600" data-is-mapped="true" data-unique-id="e7e6d119-89a7-430d-bda9-f23111ed2ad2" data-file-name="components/FinancialInsightsCard.tsx" data-dynamic-text="true">{insight.content}</p>}
                </div>
              </div>
            </motion.div>)}
        </div>
        
        {!isLoading && insights.some(i => i.type === 'positive') && <motion.div className="mt-4 text-sm text-right text-blue-600 flex items-center justify-end cursor-pointer group" initial={{
        opacity: 0
      }} animate={{
        opacity: 1
      }} transition={{
        delay: 0.5
      }} data-unique-id="807ba47d-fe94-45e8-aae6-b3fb8484e907" data-file-name="components/FinancialInsightsCard.tsx"><span className="editable-text" data-unique-id="d40c8bf1-fd5c-4fd2-bd8b-fe884cfe9ab6" data-file-name="components/FinancialInsightsCard.tsx">
            View detailed financial report
            </span><ArrowRight className="ml-1 w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </motion.div>}
      </div>
    </div>;
};
export default FinancialInsightsCard;