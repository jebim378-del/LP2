
import React, { useState } from 'react';

const MultiStepForm: React.FC = () => {
  const [step, setStep] = useState(1);
  const totalSteps = 5;

  return (
    <div className="max-w-3xl mx-auto py-32 text-center">
      <h2 className="text-4xl md:text-5xl font-black mb-4">Unlock Jack's <span className="text-gradient">#1 AI System</span></h2>
      <p className="text-gray-400 mb-12">Customised blueprint in less than 30 seconds; businesses pay thousands for this; it's yours for free.</p>

      <div className="bg-[#0c0c0e] border border-white/10 rounded-3xl p-8 md:p-12 relative overflow-hidden">
        {/* Progress Bar */}
        <div className="absolute top-0 left-0 w-full h-1 bg-white/5">
          <div 
            className="h-full bg-gradient-to-r from-blue-500 to-purple-500 transition-all duration-500 ease-out" 
            style={{ width: `${(step / totalSteps) * 100}%` }}
          ></div>
        </div>

        {step === 1 && (
          <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
             <div>
                <h3 className="text-2xl font-bold mb-2">Let's start with your name</h3>
                <p className="text-gray-500 text-sm">Question {step} of {totalSteps}</p>
             </div>

             <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left">
                <div>
                   <label className="text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-2 block">First Name</label>
                   <input type="text" placeholder="John" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 focus:border-blue-500 focus:outline-none transition-colors" />
                </div>
                <div>
                   <label className="text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-2 block">Last Name</label>
                   <input type="text" placeholder="Doe" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 focus:border-blue-500 focus:outline-none transition-colors" />
                </div>
             </div>

             <button 
                onClick={() => setStep(2)}
                className="w-full bg-white text-black font-bold py-5 rounded-xl glow-button text-lg"
             >
                Start My Roadmap
             </button>
          </div>
        )}

        {step > 1 && (
          <div className="py-20 animate-in fade-in slide-in-from-bottom-4 duration-500">
             <h3 className="text-2xl font-bold mb-4">Step {step} content would go here</h3>
             <button 
                onClick={() => setStep(step === totalSteps ? 1 : step + 1)}
                className="bg-white/10 text-white font-bold py-3 px-8 rounded-xl hover:bg-white/20 transition-colors"
             >
                {step === totalSteps ? 'Reset' : 'Next Question'}
             </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default MultiStepForm;
