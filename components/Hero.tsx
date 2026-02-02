
import React from 'react';
import Dashboard from './Dashboard';

const Hero: React.FC = () => {
  return (
    <section className="relative pt-24 pb-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 text-center">
        {/* Logo */}
        <div className="flex justify-center mb-12">
          <div className="flex items-center gap-2 text-2xl font-black tracking-tighter">
            <span>TEDDY</span>
            <span className="text-gradient">AI</span>
          </div>
        </div>

        {/* Title */}
        <h1 className="text-5xl md:text-7xl font-extrabold mb-6 leading-tight">
          Scale Your Business <br />
          <span className="text-gradient">with AI Systems</span>
        </h1>

        {/* Subtitle */}
        <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto mb-16 leading-relaxed">
          Discover your AI bottlenecks, deploy high ROI systems, and access world-class AI education.
        </p>

        {/* Dashboard Mockup */}
        <div className="relative mx-auto max-w-5xl mb-12">
          <div className="absolute -inset-4 bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-pink-600/20 blur-3xl opacity-50"></div>
          <Dashboard />
        </div>

        {/* Main CTA */}
        <button className="bg-white text-black font-bold py-4 px-10 rounded-xl glow-button text-lg">
          Scale My Business
        </button>
      </div>
    </section>
  );
};

export default Hero;
