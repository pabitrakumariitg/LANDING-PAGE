'use client';

import React, { useState } from 'react';
import { getTextProviders, generateText } from '@/lib/api/util';
interface AIModelSelectorProps {
  onInsightGenerated: (insight: string) => void;
  topic: string;
}
const AIModelSelector: React.FC<AIModelSelectorProps> = ({
  onInsightGenerated,
  topic
}) => {
  const [selectedModel, setSelectedModel] = useState<string>(getTextProviders()[0]);
  const [isGenerating, setIsGenerating] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const availableModels = getTextProviders();
  const generateInsight = async () => {
    setIsGenerating(true);
    setError(null);
    try {
      const prompt = `You are a financial analyst AI assistant. Provide a concise, professional insight about ${topic}. 
      Include specific metrics, trends, and actionable recommendations. Keep your response under 100 words.`;
      const result = await generateText(prompt, selectedModel);
      onInsightGenerated(result.text);
    } catch (err) {
      setError(`Error generating insight: ${err instanceof Error ? err.message : String(err)}`);
      console.error(err);
    } finally {
      setIsGenerating(false);
    }
  };
  return <div className="flex flex-col space-y-3" data-unique-id="cf0b6dc3-a2b6-439e-bf78-be73ee05afad" data-file-name="components/AIModelSelector.tsx" data-dynamic-text="true">
      <div className="flex items-center justify-between" data-unique-id="292913eb-dfe1-47f4-a49a-295cee285d60" data-file-name="components/AIModelSelector.tsx">
        <div className="flex items-center" data-unique-id="8ff9613d-236a-4d9f-9e35-a4883dd1f2b1" data-file-name="components/AIModelSelector.tsx">
          <span className="text-sm text-blue-600 mr-2" data-unique-id="a99df669-84d9-45c3-9b56-5384e8d5ecfd" data-file-name="components/AIModelSelector.tsx"><span className="editable-text" data-unique-id="d55eed42-6fd9-4615-84e5-42f2a09680af" data-file-name="components/AIModelSelector.tsx">AI Model:</span></span>
          <select value={selectedModel} onChange={e => setSelectedModel(e.target.value)} className="bg-white text-blue-800 text-sm rounded-md border border-blue-200 px-2 py-1" data-unique-id="2ac61a54-0f83-41e5-b2ac-0d33873a4e06" data-file-name="components/AIModelSelector.tsx" data-dynamic-text="true">
            {availableModels.map(model => <option key={model} value={model} data-is-mapped="true" data-unique-id="d052b040-cec0-46b4-a687-836c00c13da4" data-file-name="components/AIModelSelector.tsx" data-dynamic-text="true">
                {model === 'azure-gpt-4o' ? 'Azure GPT-4o' : model}
              </option>)}
          </select>
        </div>
        
        <button onClick={generateInsight} disabled={isGenerating} className={`px-3 py-1 rounded-md text-sm ${isGenerating ? 'bg-gray-300 text-gray-600' : 'bg-blue-500 hover:bg-blue-600 hover:bg-opacity-90 text-white'} transition-colors`} data-unique-id="b525c270-6b9e-427b-9be4-0fa539e91d3e" data-file-name="components/AIModelSelector.tsx" data-dynamic-text="true">
          {isGenerating ? 'Generating...' : 'Generate Insight'}
        </button>
      </div>
      
      {error && <div className="text-red-400 text-xs" data-unique-id="74f5c3d2-0db2-45f5-9518-ed5211d255f4" data-file-name="components/AIModelSelector.tsx" data-dynamic-text="true">
          {error}
        </div>}
    </div>;
};
export default AIModelSelector;