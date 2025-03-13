import React from 'react';
import { ArrowRight, Cpu, Cloud, Server, Globe, Database } from 'lucide-react';

const LLMSimpleFlow = () => {
  // Common styles
  const boxStyle = "rounded-lg p-4 flex flex-col items-center justify-center text-center font-medium shadow-md";
  const arrowStyle = "flex items-center justify-center text-gray-500 mx-2";
  const cardTitleStyle = "font-bold text-lg mb-1";
  const cardDescStyle = "text-sm";

  return (
    <div className="w-full max-w-6xl mx-auto bg-white p-6 rounded-xl shadow-lg">
      <h1 className="text-2xl font-bold text-center mb-8">LLM Model to API Server Flow</h1>
      
      {/* Main flow diagram */}
      <div className="flex flex-row items-center justify-between">
        {/* LLM Models */}
        <div className={`${boxStyle} bg-indigo-50 border-2 border-indigo-300 w-64 h-96`}>
          <Cpu className="text-indigo-600 mb-3" size={40} />
          <h2 className="text-xl font-bold mb-2">LLM Models</h2>
          <p className={cardDescStyle}>Neural network models for language processing</p>
          
          <div className="w-full mt-4 grid grid-cols-1 gap-3">
            <div className="bg-indigo-100 p-3 rounded-lg">
              <h3 className="font-medium text-indigo-800 mb-1">Base Models</h3>
              <ul className="text-xs text-left space-y-1">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-indigo-500 rounded-full mr-2"></span>
                  GPT-4, Claude, Llama
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-indigo-500 rounded-full mr-2"></span>
                  8K-128K context size
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-indigo-500 rounded-full mr-2"></span>
                  7B-1.5T parameters
                </li>
              </ul>
            </div>
            
            <div className="bg-indigo-100 p-3 rounded-lg">
              <h3 className="font-medium text-indigo-800 mb-1">Key Capabilities</h3>
              <ul className="text-xs text-left space-y-1">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-indigo-500 rounded-full mr-2"></span>
                  Text generation
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-indigo-500 rounded-full mr-2"></span>
                  Reasoning & problem-solving
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-indigo-500 rounded-full mr-2"></span>
                  Knowledge & instruction following
                </li>
              </ul>
            </div>
          </div>
        </div>
        
        {/* Arrow */}
        <div className={arrowStyle}>
          <ArrowRight size={40} />
        </div>
        
        {/* API Server Types */}
        <div className="flex flex-row space-x-4">
          {/* Public API */}
          <div className={`${boxStyle} bg-green-50 border-2 border-green-300 w-64 h-96`}>
            <Globe className="text-green-600 mb-3" size={36} />
            <h2 className="text-xl font-bold mb-2">Public API</h2>
            <p className={cardDescStyle}>Provider-managed LLM APIs</p>
            
            <div className="w-full mt-4 grid grid-cols-1 gap-3">
              <div className="bg-green-100 p-3 rounded-lg">
                <h3 className="font-medium text-green-800 mb-1">Providers</h3>
                <ul className="text-xs text-left space-y-1">
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                    OpenAI, Anthropic
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                    Cohere, AI21 Labs
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                    Google Gemini, Meta
                  </li>
                </ul>
              </div>
              
              <div className="bg-green-100 p-3 rounded-lg">
                <h3 className="font-medium text-green-800 mb-1">Characteristics</h3>
                <ul className="text-xs text-left space-y-1">
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                    Pay-per-token pricing
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                    No infrastructure management
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                    Latest models available
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                    Data privacy concerns
                  </li>
                </ul>
              </div>
            </div>
          </div>
          
          {/* Cloud Hosted API */}
          <div className={`${boxStyle} bg-blue-50 border-2 border-blue-300 w-64 h-96`}>
            <Cloud className="text-blue-600 mb-3" size={36} />
            <h2 className="text-xl font-bold mb-2">Cloud Hosted</h2>
            <p className={cardDescStyle}>Cloud provider managed services</p>
            
            <div className="w-full mt-4 grid grid-cols-1 gap-3">
              <div className="bg-blue-100 p-3 rounded-lg">
                <h3 className="font-medium text-blue-800 mb-1">Providers</h3>
                <ul className="text-xs text-left space-y-1">
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                    AWS Bedrock, SageMaker
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                    Azure OpenAI Service
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                    Google Vertex AI
                  </li>
                </ul>
              </div>
              
              <div className="bg-blue-100 p-3 rounded-lg">
                <h3 className="font-medium text-blue-800 mb-1">Characteristics</h3>
                <ul className="text-xs text-left space-y-1">
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                    Balance of control & management
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                    Integration with cloud services
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                    Semi-managed operations
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                    Enterprise compliance options
                  </li>
                </ul>
              </div>
            </div>
          </div>
          
          {/* Self-Hosted API */}
          <div className={`${boxStyle} bg-amber-50 border-2 border-amber-300 w-64 h-96`}>
            <Server className="text-amber-600 mb-3" size={36} />
            <h2 className="text-xl font-bold mb-2">Self-Hosted</h2>
            <p className={cardDescStyle}>On-premises deployment</p>
            
            <div className="w-full mt-4 grid grid-cols-1 gap-3">
              <div className="bg-amber-100 p-3 rounded-lg">
                <h3 className="font-medium text-amber-800 mb-1">Solutions</h3>
                <ul className="text-xs text-left space-y-1">
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-amber-500 rounded-full mr-2"></span>
                    Llama, Falcon, Mistral
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-amber-500 rounded-full mr-2"></span>
                    LocalAI, Ollama
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-amber-500 rounded-full mr-2"></span>
                    vLLM, text-generation-inference
                  </li>
                </ul>
              </div>
              
              <div className="bg-amber-100 p-3 rounded-lg">
                <h3 className="font-medium text-amber-800 mb-1">Characteristics</h3>
                <ul className="text-xs text-left space-y-1">
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-amber-500 rounded-full mr-2"></span>
                    Complete data privacy & control
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-amber-500 rounded-full mr-2"></span>
                    Full customization potential
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-amber-500 rounded-full mr-2"></span>
                    High infrastructure costs
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-amber-500 rounded-full mr-2"></span>
                    Requires ML/DevOps expertise
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Comparison footer */}
      <div className="mt-8 p-4 bg-gray-50 rounded-lg border border-gray-200">
        <h2 className="font-bold text-lg text-center mb-3">Deployment Comparison</h2>
        <div className="grid grid-cols-3 gap-4">
          <div className="bg-white p-3 rounded border border-gray-300">
            <h3 className="font-bold text-green-700 text-center mb-2">Public API</h3>
            <div className="space-y-2">
              <p className="text-xs flex items-center">
                <span className="text-green-600 font-bold mr-2">✓</span>
                <span>Fastest time-to-market</span>
              </p>
              <p className="text-xs flex items-center">
                <span className="text-green-600 font-bold mr-2">✓</span>
                <span>No infrastructure management</span>
              </p>
              <p className="text-xs flex items-center">
                <span className="text-red-600 font-bold mr-2">✗</span>
                <span>Higher cost at scale</span>
              </p>
              <p className="text-xs flex items-center">
                <span className="text-red-600 font-bold mr-2">✗</span>
                <span>Less control over fine-tuning</span>
              </p>
            </div>
          </div>
          
          <div className="bg-white p-3 rounded border border-gray-300">
            <h3 className="font-bold text-blue-700 text-center mb-2">Cloud Hosted</h3>
            <div className="space-y-2">
              <p className="text-xs flex items-center">
                <span className="text-green-600 font-bold mr-2">✓</span>
                <span>Enterprise security compliance</span>
              </p>
              <p className="text-xs flex items-center">
                <span className="text-green-600 font-bold mr-2">✓</span>
                <span>Integration with existing cloud stack</span>
              </p>
              <p className="text-xs flex items-center">
                <span className="text-red-600 font-bold mr-2">✗</span>
                <span>Vendor lock-in potential</span>
              </p>
              <p className="text-xs flex items-center">
                <span className="text-red-600 font-bold mr-2">✗</span>
                <span>Limited model selection</span>
              </p>
            </div>
          </div>
          
          <div className="bg-white p-3 rounded border border-gray-300">
            <h3 className="font-bold text-amber-700 text-center mb-2">Self-Hosted</h3>
            <div className="space-y-2">
              <p className="text-xs flex items-center">
                <span className="text-green-600 font-bold mr-2">✓</span>
                <span>Maximum data privacy control</span>
              </p>
              <p className="text-xs flex items-center">
                <span className="text-green-600 font-bold mr-2">✓</span>
                <span>Customizable model architecture</span>
              </p>
              <p className="text-xs flex items-center">
                <span className="text-red-600 font-bold mr-2">✗</span>
                <span>Highest operational overhead</span>
              </p>
              <p className="text-xs flex items-center">
                <span className="text-red-600 font-bold mr-2">✗</span>
                <span>Hardware/scaling challenges</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LLMSimpleFlow;