
import React from 'react';

const Features: React.FC = () => {
  return (
    <div className="space-y-40">
      {/* 01. Audit */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="bg-[#0c0c0e] p-8 rounded-3xl border border-white/10 shadow-xl order-2 lg:order-1">
          <div className="flex justify-between items-center mb-10">
            <span className="text-[10px] font-bold text-emerald-400 uppercase tracking-widest">Monthly Value</span>
            <span className="text-emerald-400 font-bold">$32,500</span>
          </div>
          <div className="space-y-4 text-xs">
            <ValueRow label="Lead Generation" hours="15 hrs" />
            <ValueRow label="Client Communication" hours="12 hrs" />
            <ValueRow label="Lead Qualification" hours="8 hrs" />
            <ValueRow label="Social Media Posting" hours="6 hrs" />
          </div>
          <div className="grid grid-cols-2 gap-4 mt-10">
            <div className="bg-indigo-900/20 p-5 rounded-xl border border-indigo-500/20">
              <div className="text-xl font-bold mb-1">$390k+</div>
              <div className="text-[10px] text-gray-500 font-bold uppercase">Projected Annual Value</div>
            </div>
            <div className="bg-purple-900/20 p-5 rounded-xl border border-purple-500/20">
              <div className="text-xl font-bold mb-1">13x</div>
              <div className="text-[10px] text-gray-500 font-bold uppercase">ROI Year 1</div>
            </div>
          </div>
        </div>
        <div className="order-1 lg:order-2">
          <div className="inline-block px-3 py-1 rounded-full bg-blue-500/10 text-blue-400 text-[10px] font-bold uppercase tracking-widest mb-6">01. Audit</div>
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6 leading-tight">Find the <br/><span className="text-gradient">Biggest Opportunities</span></h2>
          <p className="text-gray-400 text-lg leading-relaxed">We identify your bottlenecks, uncover high-value opportunities, and quantify exactly how much time and money you're leaving on the table. You get a clear roadmap with project value and ROI projections so you can make informed decisions.</p>
        </div>
      </div>

      {/* 02. Custom Projects */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div>
          <div className="inline-block px-3 py-1 rounded-full bg-purple-500/10 text-purple-400 text-[10px] font-bold uppercase tracking-widest mb-6">02. Custom Projects</div>
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6 leading-tight">Scale Without <br/><span className="text-gradient">Hiring More People</span></h2>
          <p className="text-gray-400 text-lg leading-relaxed">From advanced lead generation and social media automation to complex data systems. Imagine doubling your output without doubling your team. Custom AI systems that handle the work of 5-10 employees, running 24/7 with zero mistakes. That's not the future. That's what we build today.</p>
        </div>
        <div className="bg-[#0c0c0e] p-8 rounded-3xl border border-white/10 shadow-xl relative overflow-hidden group">
          <div className="absolute top-0 right-0 p-6 opacity-0 group-hover:opacity-100 transition-opacity">
            <div className="flex items-center gap-2 bg-emerald-500/20 text-emerald-400 px-3 py-1.5 rounded-full text-[10px] font-bold border border-emerald-500/30">
               <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
               New Lead Captured
            </div>
          </div>
          <div className="mb-8">
             <div className="w-12 h-12 bg-gray-800 rounded-full mb-4"></div>
             <div className="w-1/2 h-4 bg-gray-800 rounded-full mb-2"></div>
             <div className="w-1/3 h-4 bg-gray-900 rounded-full"></div>
          </div>
          <div className="space-y-3">
             <div className="w-full h-8 bg-gray-900 rounded-lg"></div>
             <div className="w-full h-8 bg-gray-900 rounded-lg"></div>
          </div>
        </div>
      </div>

       {/* 03. Education */}
       <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="bg-[#0c0c0e] p-8 rounded-3xl border border-white/10 shadow-xl relative overflow-hidden">
          <div className="text-[10px] text-gray-500 font-bold uppercase tracking-wider mb-2">Time Saved Monthly</div>
          <div className="text-3xl font-black mb-8">80-320hrs</div>
          <div className="grid grid-cols-2 gap-4">
             <div className="bg-emerald-900/20 p-5 rounded-xl border border-emerald-500/20">
                <div className="text-2xl font-black mb-1">$4.3M</div>
                <div className="text-[10px] text-gray-500 uppercase">Client Revenue</div>
             </div>
             <div className="bg-emerald-900/20 p-5 rounded-xl border border-emerald-500/20">
                <div className="text-2xl font-black mb-1">100%</div>
                <div className="text-[10px] text-gray-500 uppercase">ROI Guaranteed</div>
             </div>
          </div>
          <div className="mt-8 flex items-end gap-2 h-24">
             {[30, 45, 25, 60, 40, 90].map((h, i) => (
               <div key={i} className={`flex-1 rounded-t-lg bg-emerald-500/${i === 5 ? '100' : '20'} transition-all hover:bg-emerald-500/60`} style={{ height: `${h}%` }}></div>
             ))}
          </div>
        </div>
        <div>
          <div className="inline-block px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 text-[10px] font-bold uppercase tracking-widest mb-6">03. Education</div>
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6 leading-tight">Master <br/><span className="text-gradient">AI Systems Architecture</span></h2>
          <p className="text-gray-400 text-lg leading-relaxed mb-8">Learn the exact frameworks we use to build enterprise-grade AI systems. No theory, no fluff. Just the technical architecture that powers real businesses. Join 1,000+ founders building the future with AI.</p>
          <button className="bg-emerald-500 text-white font-bold py-4 px-8 rounded-xl glow-button flex items-center gap-3">
             Join the Community
             <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M3.75 9H14.25M14.25 9L9.75 4.5M14.25 9L9.75 13.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
             </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

const ValueRow = ({ label, hours }: { label: string, hours: string }) => (
  <div className="flex justify-between items-center py-3 border-b border-white/5">
    <span className="text-gray-400">{label}</span>
    <span className="font-bold">{hours}</span>
  </div>
);

export default Features;
