
import React, { useState } from 'react';
import { Calendar as CalendarIcon, Video, Globe, ChevronLeft, ChevronRight } from 'lucide-react';

const BookingCalendar: React.FC = () => {
  const [selectedDate, setSelectedDate] = useState<number | null>(3);
  const days = Array.from({ length: 28 }, (_, i) => i + 1);

  return (
    <div className="py-20 text-center">
      <h2 className="text-4xl md:text-5xl font-black mb-4">Book Your 25 Minute <span className="text-gradient">Strategy Call</span></h2>
      <p className="text-gray-400 mb-16">Get a custom deployment strategy and automate your workflow to scale revenue on autopilot.</p>

      <div className="max-w-5xl mx-auto bg-[#0c0c0e] border border-white/10 rounded-3xl overflow-hidden shadow-2xl flex flex-col lg:flex-row text-left">
        {/* Sidebar */}
        <div className="lg:w-1/3 p-8 border-r border-white/10 bg-white/[0.02]">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center text-[10px] font-bold">
               Ai
            </div>
            <span className="text-sm font-bold">🧸 Teddy AI</span>
          </div>
          <h3 className="text-2xl font-black mb-4">📊 Strategy Call (AI Automations)</h3>
          <p className="text-gray-500 text-sm leading-relaxed mb-8">
            We'll discuss your current situation, goals and what you need support with, and plan next steps.
          </p>
          <div className="space-y-4 text-xs font-medium text-gray-400">
            <div className="flex items-center gap-3"><CalendarIcon size={16} /> 25Min</div>
            <div className="flex items-center gap-3"><Video size={16} /> Cal Video</div>
            <div className="flex items-center gap-3 text-white"><Globe size={16} /> Asia/Bangkok <ChevronRight size={12} /></div>
          </div>
        </div>

        {/* Calendar Grid */}
        <div className="flex-1 p-8">
          <div className="flex items-center justify-between mb-8">
            <h4 className="font-bold">Februar <span className="text-gray-500 font-normal">2026</span></h4>
            <div className="flex gap-4">
              <button className="p-2 hover:bg-white/5 rounded-lg"><ChevronLeft size={18} /></button>
              <button className="p-2 hover:bg-white/5 rounded-lg"><ChevronRight size={18} /></button>
            </div>
          </div>

          <div className="grid grid-cols-7 gap-2 text-center text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-4">
             <div>So</div><div>Mo</div><div>Di</div><div>Mi</div><div>Do</div><div>Fr</div><div>Sa</div>
          </div>
          <div className="grid grid-cols-7 gap-2">
            {days.map(d => (
              <button 
                key={d}
                onClick={() => setSelectedDate(d)}
                className={`aspect-square flex items-center justify-center rounded-xl font-bold transition-all ${
                  selectedDate === d 
                  ? 'bg-white text-black scale-110 shadow-lg' 
                  : 'hover:bg-white/10 text-gray-300'
                }`}
              >
                {d}
              </button>
            ))}
          </div>
        </div>

        {/* Time Slots */}
        <div className="lg:w-1/4 p-8 bg-white/[0.01] border-l border-white/10">
           <div className="flex items-center justify-between mb-6">
              <span className="font-bold">Di 03</span>
              <div className="flex bg-white/5 p-1 rounded-lg text-[9px] font-bold">
                 <button className="px-2 py-1 hover:bg-white/5">12 Std</button>
                 <button className="px-2 py-1 bg-white/10 rounded-md">24 Std</button>
              </div>
           </div>
           <div className="space-y-3">
              {['9:00pm', '9:25pm', '11:00pm', '11:25pm', '11:50pm'].map(time => (
                <button key={time} className="w-full py-3 border border-white/10 rounded-lg hover:border-white/40 hover:bg-white/5 transition-all font-bold text-sm">
                   {time}
                </button>
              ))}
           </div>
        </div>
      </div>
      <div className="mt-8 text-gray-600 font-bold text-sm">Cal.com</div>
    </div>
  );
};

export default BookingCalendar;
