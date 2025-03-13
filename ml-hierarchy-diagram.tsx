import React from 'react';
import { ArrowDown, CornerDownRight, Clock, Briefcase, Brain } from 'lucide-react';

const MLHierarchyDiagram = () => {
  const boxStyle = "rounded-lg p-4 flex flex-col items-center justify-center text-center font-medium shadow-md";
  const timelinePointStyle = "relative flex items-center";
  const timelineConnectorStyle = "absolute left-6 w-px h-full bg-gray-300 -z-10";
  const skillBoxStyle = "mb-2 p-2 rounded-md text-xs font-medium";

  return (
    <div className="w-full max-w-6xl mx-auto bg-white p-6 rounded-xl shadow-lg">
      <h1 className="text-2xl font-bold text-center mb-8">AI & Machine Learning Hierarchy</h1>
      
      <div className="flex relative">
        {/* Connecting arrows between columns */}
        {/* Machine Learning connecting arrows */}
        <div className="absolute top-32 left-[30%] w-[13%] border-t-2 border-blue-400 border-dashed z-10"></div>
        <div className="absolute top-32 left-[62%] w-[13%] border-t-2 border-blue-400 border-dashed z-10"></div>
        
        {/* Deep Learning connecting arrows */}
        <div className="absolute top-[216px] left-[30%] w-[13%] border-t-2 border-indigo-400 border-dashed z-10"></div>
        <div className="absolute top-[216px] left-[62%] w-[13%] border-t-2 border-indigo-400 border-dashed z-10"></div>
        
        {/* LLM connecting arrows */}
        <div className="absolute top-[300px] left-[27%] w-[16%] border-t-2 border-purple-400 border-dashed z-10"></div>
        <div className="absolute top-[300px] left-[62%] w-[13%] border-t-2 border-purple-400 border-dashed z-10"></div>
        
        {/* LLM Client connecting arrows */}
        <div className="absolute top-[480px] left-[19%] w-[24%] border-t-2 border-teal-400 border-dashed z-10"></div>
        <div className="absolute top-[480px] left-[62%] w-[13%] border-t-2 border-teal-400 border-dashed z-10"></div>
        
        {/* LLM Agent connecting arrows */}
        <div className="absolute top-[480px] left-[41%] w-[2%] border-t-2 border-rose-400 border-dashed z-10"></div>
        <div className="absolute top-[580px] left-[41%] w-[2%] border-t-2 border-rose-400 border-dashed z-10 -rotate-90 origin-left"></div>
        <div className="absolute top-[580px] left-[42%] w-[33%] border-t-2 border-rose-400 border-dashed z-10"></div>
        {/* Main hierarchy diagram */}
        <div className="flex-1 flex flex-col items-center gap-6 pr-6">
          {/* Machine Learning */}
          <div className={`${boxStyle} w-full bg-blue-100 border-2 border-blue-500 text-blue-900`}>
            <h2 className="font-bold text-xl">Machine Learning</h2>
            <p className="text-sm mt-1">Algorithms that learn from data</p>
          </div>
          
          <ArrowDown className="text-gray-600" size={28} />
          
          {/* Deep Learning */}
          <div className={`${boxStyle} w-5/6 bg-indigo-100 border-2 border-indigo-500 text-indigo-900`}>
            <h2 className="font-bold text-lg">Deep Learning</h2>
            <p className="text-sm mt-1">Neural networks with multiple layers</p>
          </div>
          
          <ArrowDown className="text-gray-600" size={28} />
          
          {/* Large Language Models */}
          <div className={`${boxStyle} w-4/6 bg-purple-100 border-2 border-purple-500 text-purple-900 relative`}>
            <h2 className="font-bold text-lg">Large Language Models</h2>
            <p className="text-sm mt-1">Transformer-based models trained on text data</p>
            
            {/* LLM Companies */}
            <div className="absolute -right-40 top-1/2 transform -translate-y-1/2 bg-purple-50 border border-purple-300 rounded-lg px-3 py-2 shadow-sm">
              <p className="font-bold text-purple-800 text-sm mb-1">Key Organizations:</p>
              <ul className="text-xs text-left space-y-1">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-purple-500 rounded-full mr-2"></span>
                  OpenAI
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-purple-500 rounded-full mr-2"></span>
                  Anthropic
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-purple-500 rounded-full mr-2"></span>
                  DeepSeek
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-purple-500 rounded-full mr-2"></span>
                  Cohere
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-purple-500 rounded-full mr-2"></span>
                  Meta AI
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-purple-500 rounded-full mr-2"></span>
                  Google DeepMind
                </li>
              </ul>
            </div>
          </div>
          
          {/* "Wow, AI is there" line */}
          <div className="w-full mt-4 mb-4 relative">
            <div className="absolute left-0 right-0 border-t-4 border-yellow-500 border-dashed"></div>
            <div className="absolute right-0 bg-yellow-500 text-white px-3 py-1 rounded-lg -mt-3 font-bold text-sm">
              "Wow, AI is there" Moment
            </div>
          </div>
          
          {/* LLM Clients and Agents in two columns */}
          <div className="w-full flex justify-center mt-2">
            <div className="flex flex-col items-center">
              <CornerDownRight className="text-gray-600 -rotate-90 mb-2" size={28} />
              <div className="flex gap-6">
                {/* LLM Clients */}
                <div className="flex flex-col items-center">
                  <div className={`${boxStyle} w-48 bg-teal-100 border-2 border-teal-500 text-teal-900`}>
                    <h2 className="font-bold">LLM Clients</h2>
                    <p className="text-sm mt-1">Applications that use LLMs</p>
                  </div>
                  <ArrowDown className="text-gray-600 mt-2" size={18} />
                  <div className="px-3 py-2 bg-teal-50 border border-teal-300 text-teal-800 rounded-md mt-1 text-sm font-medium">
                    ChatGPT
                  </div>
                </div>
                
                {/* LLM Agents */}
                <div className={`${boxStyle} w-48 bg-rose-100 border-2 border-rose-500 text-rose-900`}>
                  <h2 className="font-bold">LLM Agents</h2>
                  <p className="text-sm mt-1">Autonomous systems powered by LLMs</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* "Wow, AI is there" line */}
          <div className="w-full mt-8 relative">
            <div className="absolute left-0 right-0 h-0 border-0"></div>
            <div className="absolute right-0 h-0 opacity-0">
              
            </div>
          </div>
        </div>
        
        {/* Timeline section */}
        <div className="w-80 border-l border-gray-300 pl-6 pr-6">
          <div className="flex items-center mb-6">
            <Clock className="text-gray-700 mr-2" size={20} />
            <h2 className="text-lg font-bold">Evolution Timeline</h2>
          </div>
          
          <div className="relative">
            {/* Machine Learning timeline point */}
            <div className={timelinePointStyle}>
              <div className="w-12 h-12 flex-shrink-0 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold text-xs">
                1990s-<br/>2000s
              </div>
              <div className="ml-4">
                <h3 className="font-bold text-blue-700">Machine Learning</h3>
                <div className="mt-1">
                  <p className="text-sm font-semibold">Notable Uses:</p>
                  <p className="text-sm">Recommendation systems, spam filtering</p>
                  <p className="text-sm mt-1">
                    <span className="font-medium">Key Milestone:</span> Random Forests (2001)
                  </p>
                </div>
              </div>
              <div className={timelineConnectorStyle}></div>
            </div>
            
            {/* Deep Learning timeline point */}
            <div className={`${timelinePointStyle} mt-16`}>
              <div className="w-12 h-12 flex-shrink-0 bg-indigo-500 rounded-full flex items-center justify-center text-white font-bold">
                2012
              </div>
              <div className="ml-4">
                <h3 className="font-bold text-indigo-700">Deep Learning</h3>
                <div className="mt-1">
                  <p className="text-sm font-semibold">Notable Uses:</p>
                  <p className="text-sm">Computer vision, speech recognition</p>
                  <p className="text-sm mt-1">
                    <span className="font-medium">Key Milestone:</span> AlexNet breakthrough
                  </p>
                </div>
              </div>
              <div className={timelineConnectorStyle}></div>
            </div>
            
            {/* LLMs timeline point */}
            <div className={`${timelinePointStyle} mt-16`}>
              <div className="w-12 h-12 flex-shrink-0 bg-purple-500 rounded-full flex items-center justify-center text-white font-bold text-xs">
                2018-<br/>2020
              </div>
              <div className="ml-4">
                <h3 className="font-bold text-purple-700">Large Language Models</h3>
                <div className="mt-1">
                  <p className="text-sm font-semibold">Notable Uses:</p>
                  <p className="text-sm">Text generation, translation</p>
                  <p className="text-sm mt-1">
                    <span className="font-medium">Key Milestone:</span> GPT series, BERT (2018)
                  </p>
                </div>
              </div>
              <div className={timelineConnectorStyle}></div>
            </div>
            
            {/* "Wow, AI is there" marker on timeline */}
            <div className="relative mt-6 mb-6 ml-6">
              <div className="absolute left-0 right-0 border-t-4 border-yellow-500 border-dashed"></div>
              <div className="absolute right-0 bg-yellow-500 text-white px-3 py-1 rounded-lg -mt-3 font-bold text-sm whitespace-nowrap">
                "Wow, AI is there" Moment
              </div>
            </div>
            
            {/* LLM Clients timeline point */}
            <div className={`${timelinePointStyle} mt-16`}>
              <div className="w-12 h-12 flex-shrink-0 bg-teal-500 rounded-full flex items-center justify-center text-white font-bold text-xs">
                2022-<br/>2023
              </div>
              <div className="ml-4">
                <h3 className="font-bold text-teal-700">LLM Clients</h3>
                <div className="mt-1">
                  <p className="text-sm font-semibold">Notable Uses:</p>
                  <p className="text-sm">ChatGPT, Claude, code assistants</p>
                  <p className="text-sm mt-1">
                    <span className="font-medium">Key Milestone:</span> ChatGPT (Nov 2022)
                  </p>
                </div>
              </div>
              <div className={timelineConnectorStyle}></div>
            </div>
            
            {/* LLM Agents timeline point */}
            <div className={`${timelinePointStyle} mt-16`}>
              <div className="w-12 h-12 flex-shrink-0 bg-rose-500 rounded-full flex items-center justify-center text-white font-bold text-xs">
                2023-<br/>2024
              </div>
              <div className="ml-4">
                <h3 className="font-bold text-rose-700">LLM Agents</h3>
                <div className="mt-1">
                  <p className="text-sm font-semibold">Notable Uses:</p>
                  <p className="text-sm">AutoGPT, reasoning agents</p>
                  <p className="text-sm mt-1">
                    <span className="font-medium">Key Milestone:</span> LangChain frameworks
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Skills section */}
        <div className="w-80 border-l border-gray-300 pl-6">
          <div className="flex items-center mb-6">
            <Briefcase className="text-gray-700 mr-2" size={20} />
            <h2 className="text-lg font-bold">Required Skills</h2>
          </div>
          
          {/* Machine Learning Skills */}
          <div className="mb-16">
            <h3 className="font-bold text-blue-700 mb-2">Machine Learning</h3>
            <div className="bg-blue-50 p-3 rounded-lg border border-blue-200">
              <div className={`${skillBoxStyle} bg-blue-100 text-blue-800`}>Statistics & Probability</div>
              <div className={`${skillBoxStyle} bg-blue-100 text-blue-800`}>Python/R Programming</div>
              <div className={`${skillBoxStyle} bg-blue-100 text-blue-800`}>Data Preprocessing</div>
              <div className={`${skillBoxStyle} bg-blue-100 text-blue-800`}>Feature Engineering</div>
              <div className={`${skillBoxStyle} bg-blue-100 text-blue-800`}>SQL & Data Manipulation</div>
              <p className="text-xs mt-2 text-blue-700 font-medium">
                <Brain size={14} className="inline mr-1" />
                Core concepts: Regression, Classification, Clustering
              </p>
            </div>
          </div>
          
          {/* Deep Learning Skills */}
          <div className="mb-16">
            <h3 className="font-bold text-indigo-700 mb-2">Deep Learning</h3>
            <div className="bg-indigo-50 p-3 rounded-lg border border-indigo-200">
              <div className={`${skillBoxStyle} bg-indigo-100 text-indigo-800`}>Neural Network Architecture</div>
              <div className={`${skillBoxStyle} bg-indigo-100 text-indigo-800`}>TensorFlow/PyTorch</div>
              <div className={`${skillBoxStyle} bg-indigo-100 text-indigo-800`}>GPU Programming</div>
              <div className={`${skillBoxStyle} bg-indigo-100 text-indigo-800`}>Optimization Algorithms</div>
              <div className={`${skillBoxStyle} bg-indigo-100 text-indigo-800`}>Model Regularization</div>
              <p className="text-xs mt-2 text-indigo-700 font-medium">
                <Brain size={14} className="inline mr-1" />
                Core concepts: CNN, RNN, Transformers
              </p>
            </div>
          </div>
          
          {/* LLM Skills */}
          <div className="mb-16">
            <h3 className="font-bold text-purple-700 mb-2">Large Language Models</h3>
            <div className="bg-purple-50 p-3 rounded-lg border border-purple-200">
              <div className={`${skillBoxStyle} bg-purple-100 text-purple-800`}>NLP Fundamentals</div>
              <div className={`${skillBoxStyle} bg-purple-100 text-purple-800`}>Transformer Architecture</div>
              <div className={`${skillBoxStyle} bg-purple-100 text-purple-800`}>Text Processing</div>
              <div className={`${skillBoxStyle} bg-purple-100 text-purple-800`}>Distributed Training</div>
              <div className={`${skillBoxStyle} bg-purple-100 text-purple-800`}>Prompt Engineering</div>
              <p className="text-xs mt-2 text-purple-700 font-medium">
                <Brain size={14} className="inline mr-1" />
                Core concepts: Attention, Embeddings, Fine-tuning
              </p>
            </div>
          </div>
          
          {/* "Wow, AI is there" marker on skills section */}
          <div className="relative mt-6 mb-6">
            <div className="absolute left-0 right-0 border-t-4 border-yellow-500 border-dashed"></div>
            <div className="absolute right-0 bg-yellow-500 text-white px-3 py-1 rounded-lg -mt-3 font-bold text-sm whitespace-nowrap">
              "Wow, AI is there" Moment
            </div>
          </div>
          
          {/* LLM Clients Skills */}
          <div className="mb-16">
            <h3 className="font-bold text-teal-700 mb-2">LLM Clients</h3>
            <div className="bg-teal-50 p-3 rounded-lg border border-teal-200">
              <div className={`${skillBoxStyle} bg-teal-100 text-teal-800`}>API Integration</div>
              <div className={`${skillBoxStyle} bg-teal-100 text-teal-800`}>Web/Mobile Development</div>
              <div className={`${skillBoxStyle} bg-teal-100 text-teal-800`}>UX Design</div>
              <div className={`${skillBoxStyle} bg-teal-100 text-teal-800`}>Prompt Design</div>
              <div className={`${skillBoxStyle} bg-teal-100 text-teal-800`}>Error Handling</div>
              <p className="text-xs mt-2 text-teal-700 font-medium">
                <Brain size={14} className="inline mr-1" />
                Core concepts: RAG, Embeddings, Vector DBs
              </p>
            </div>
          </div>
          
          {/* LLM Agents Skills */}
          <div>
            <h3 className="font-bold text-rose-700 mb-2">LLM Agents</h3>
            <div className="bg-rose-50 p-3 rounded-lg border border-rose-200">
              <div className={`${skillBoxStyle} bg-rose-100 text-rose-800`}>Multi-agent Systems</div>
              <div className={`${skillBoxStyle} bg-rose-100 text-rose-800`}>Tool Use & Integration</div>
              <div className={`${skillBoxStyle} bg-rose-100 text-rose-800`}>Chain-of-Thought Prompting</div>
              <div className={`${skillBoxStyle} bg-rose-100 text-rose-800`}>Agent Frameworks</div>
              <div className={`${skillBoxStyle} bg-rose-100 text-rose-800`}>Planning Algorithms</div>
              <p className="text-xs mt-2 text-rose-700 font-medium">
                <Brain size={14} className="inline mr-1" />
                Core concepts: ReAct, Agentic Workflows, LLM Reasoning
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MLHierarchyDiagram;