
import React from 'react';

const icons = [
  'https://cdn.simpleicons.org/messenger/666',
  'https://cdn.simpleicons.org/github/fff',
  'https://cdn.simpleicons.org/notion/fff',
  'https://cdn.simpleicons.org/gmail/fff',
  'https://cdn.simpleicons.org/figma/fff',
  'https://cdn.simpleicons.org/microsoftoutlook/fff',
  'https://cdn.simpleicons.org/instagram/fff',
  'https://cdn.simpleicons.org/tinder/fff',
  'https://cdn.simpleicons.org/slack/fff',
  'https://cdn.simpleicons.org/discord/fff',
  'https://cdn.simpleicons.org/linear/fff',
  'https://cdn.simpleicons.org/openai/fff'
];

const IconMarquee: React.FC = () => {
  return (
    <div className="py-20 border-y border-white/5 bg-black/40 relative overflow-hidden group">
      <div className="text-center mb-10 text-[10px] font-bold tracking-[0.3em] text-gray-500 uppercase">
        Build with your favorite tech
      </div>
      <div className="flex animate-scroll whitespace-nowrap gap-16 w-max">
        {[...icons, ...icons].map((icon, idx) => (
          <img 
            key={idx} 
            src={icon} 
            className="h-10 w-10 opacity-30 grayscale hover:opacity-100 hover:grayscale-0 transition-all cursor-pointer" 
            alt="app icon" 
          />
        ))}
      </div>
    </div>
  );
};

export default IconMarquee;
