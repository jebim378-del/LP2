
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="py-20 border-t border-white/5 bg-black">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <div className="flex justify-center mb-8">
           <div className="flex items-center gap-2 text-xl font-black tracking-tighter">
            <span>TEDDY</span>
            <span className="text-gradient">AI</span>
          </div>
        </div>
        <div className="flex justify-center gap-8 text-gray-500 text-sm font-medium mb-8">
           <a href="#" className="hover:text-white transition-colors">Privacy</a>
           <a href="#" className="hover:text-white transition-colors">Terms</a>
           <a href="#" className="hover:text-white transition-colors">Instagram</a>
           <a href="#" className="hover:text-white transition-colors">YouTube</a>
        </div>
        <p className="text-gray-600 text-xs">© 2026 Teddy AI Systems. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
