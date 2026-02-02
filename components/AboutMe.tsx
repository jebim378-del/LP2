
import React from 'react';
import { Youtube, Instagram, Users } from 'lucide-react';

const AboutMe: React.FC = () => {
  return (
    <div className="pt-20">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div className="relative group">
          <div className="absolute -inset-4 bg-blue-500/20 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
          <img 
            src="https://picsum.photos/seed/founder/800/600" 
            className="rounded-3xl shadow-2xl relative z-10 border border-white/10" 
            alt="Founder" 
          />
        </div>
        <div>
          <div className="inline-block px-3 py-1 rounded-full bg-blue-500/10 text-blue-400 text-[10px] font-bold uppercase tracking-widest mb-6">About</div>
          <h2 className="text-5xl font-black mb-8 leading-tight">Jack Roberts</h2>
          <blockquote className="text-2xl italic text-gray-300 mb-10 leading-relaxed font-light">
            "After building and selling a Top-100 UK startup and working with hundreds of businesses, I've learned that growth doesn't come from more tools - it comes from better systems, built with clarity, speed, and measurable ROI"
          </blockquote>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
             <SocialStat icon={<Youtube className="text-red-500" />} label="YouTube" value="93k" />
             <SocialStat icon={<Instagram className="text-pink-500" />} label="Instagram" value="37k" />
             <SocialStat icon={<Users className="text-yellow-500" />} label="Business Owners" value="4,600+" />
          </div>
        </div>
      </div>
    </div>
  );
};

const SocialStat = ({ icon, label, value }: { icon: React.ReactNode, label: string, value: string }) => (
  <div className="bg-white/5 border border-white/10 p-5 rounded-xl hover:bg-white/10 transition-colors cursor-default">
    <div className="flex items-center gap-2 mb-2">
      <div className="text-xl font-black">{value}</div>
      {icon}
    </div>
    <div className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">{label}</div>
  </div>
);

export default AboutMe;
