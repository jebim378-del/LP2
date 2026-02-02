
import React from 'react';
import { AreaChart, Area, ResponsiveContainer, BarChart, Bar, XAxis } from 'recharts';
import { TrendingUp, ArrowUpRight } from 'lucide-react';

const mockChartData = [
  { value: 400 }, { value: 300 }, { value: 500 }, { value: 450 },
  { value: 600 }, { value: 550 }, { value: 700 }, { value: 800 }
];

const mockBarData = [
  { val: 40 }, { val: 60 }, { val: 45 }, { val: 80 }, { val: 50 }, { val: 70 }
];

const Dashboard: React.FC = () => {
  return (
    <div className="bg-[#0a0a0c]/80 backdrop-blur-xl border border-white/10 rounded-2xl overflow-hidden shadow-2xl">
      {/* OS Bar */}
      <div className="flex items-center justify-between px-4 py-3 bg-white/5 border-b border-white/5">
        <div className="flex gap-1.5">
          <div className="w-3 h-3 rounded-full bg-red-500/50"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-500/50"></div>
          <div className="w-3 h-3 rounded-full bg-green-500/50"></div>
        </div>
        <div className="flex items-center gap-2 text-[10px] text-gray-500 uppercase tracking-widest font-semibold">
          <span className="w-1.5 h-1.5 rounded-full bg-purple-500 animate-pulse"></span>
          Live AI Dashboard
        </div>
        <div className="w-12"></div>
      </div>

      <div className="p-6 grid grid-cols-12 gap-6">
        {/* User Card */}
        <div className="col-span-12 lg:col-span-4 flex flex-col gap-6">
          <div className="bg-white/5 p-4 rounded-xl border border-white/10 flex items-center gap-3">
            <img src="https://picsum.photos/seed/jack/100/100" className="w-10 h-10 rounded-full border border-white/20" alt="Jack" />
            <div>
              <div className="text-sm font-bold">Jack Roberts</div>
              <div className="text-[10px] text-purple-400 font-bold uppercase">Teddy AI</div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-indigo-900/40 to-purple-900/40 p-6 rounded-xl border border-white/10 flex-1 relative overflow-hidden">
             <div className="relative z-10">
                <div className="text-[10px] text-gray-400 font-bold uppercase mb-4 tracking-wider">AI Systems Deployed</div>
                <div className="text-4xl font-black mb-6">713</div>
                <div className="h-20 w-full">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={mockBarData}>
                      <Bar dataKey="val" fill="#818cf8" radius={[2, 2, 0, 0]} />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
             </div>
             <div className="absolute inset-0 bg-grid-white/[0.02] bg-[length:20px_20px]"></div>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="col-span-12 lg:col-span-8 space-y-6">
          <div className="grid grid-cols-3 gap-4">
            <StatCard label="Total Revenue" value="$985,000" change="+12% vs last month" color="emerald" />
            <StatCard label="Pipeline Value" value="$320,000" change="+8% vs last month" color="emerald" />
            <StatCard label="Booked Calls" value="142" change="+24% vs last month" color="emerald" />
          </div>

          {/* Growth Chart */}
          <div className="bg-white/5 p-6 rounded-xl border border-white/10">
            <div className="flex justify-between items-start mb-6">
               <div>
                  <div className="text-[10px] text-gray-400 font-bold uppercase tracking-wider mb-1">Weekly Growth</div>
                  <div className="text-2xl font-black">+24.5%</div>
               </div>
               <div className="p-2 bg-emerald-500/10 text-emerald-400 rounded-lg">
                  <TrendingUp size={16} />
               </div>
            </div>
            <div className="h-48 w-full">
               <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={mockChartData}>
                    <defs>
                      <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#10b981" stopOpacity={0.3}/>
                        <stop offset="95%" stopColor="#10b981" stopOpacity={0}/>
                      </linearGradient>
                    </defs>
                    <Area type="monotone" dataKey="value" stroke="#10b981" fillOpacity={1} fill="url(#colorValue)" strokeWidth={3} />
                  </AreaChart>
               </ResponsiveContainer>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const StatCard = ({ label, value, change, color }: { label: string, value: string, change: string, color: string }) => (
  <div className="bg-white/5 p-4 rounded-xl border border-white/10">
    <div className="text-[10px] text-gray-400 font-bold uppercase tracking-wider mb-2">{label}</div>
    <div className="text-xl font-black mb-1">{value}</div>
    <div className={`text-[9px] font-bold text-${color}-400 flex items-center gap-1`}>
      <ArrowUpRight size={10} /> {change}
    </div>
  </div>
);

export default Dashboard;
