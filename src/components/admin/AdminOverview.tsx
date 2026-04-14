import { 
  Users, 
  ArrowUpRight, 
  ArrowDownLeft, 
  Activity, 
  DollarSign,
  TrendingUp,
  CreditCard
} from "lucide-react";
import { Card } from "@/components/ui/card";
import { 
  AreaChart, 
  Area, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  BarChart,
  Bar
} from "recharts";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";

const data = [
  { name: "Mon", deposits: 4000, withdrawals: 2400 },
  { name: "Tue", deposits: 3000, withdrawals: 1398 },
  { name: "Wed", deposits: 2000, withdrawals: 9800 },
  { name: "Thu", deposits: 2780, withdrawals: 3908 },
  { name: "Fri", deposits: 1890, withdrawals: 4800 },
  { name: "Sat", deposits: 2390, withdrawals: 3800 },
  { name: "Sun", deposits: 3490, withdrawals: 4300 },
];

const stats = [
  { 
    label: "Total Users", 
    value: "1,284", 
    change: "+12%", 
    trend: "up", 
    icon: Users,
    color: "text-blue-500",
    bgColor: "bg-blue-500/10"
  },
  { 
    label: "Total Deposits", 
    value: "$4.2M", 
    change: "+8.4%", 
    trend: "up", 
    icon: ArrowUpRight,
    color: "text-emerald-500",
    bgColor: "bg-emerald-500/10"
  },
  { 
    label: "Total Withdrawals", 
    value: "$1.8M", 
    change: "-2.1%", 
    trend: "down", 
    icon: ArrowDownLeft,
    color: "text-red-500",
    bgColor: "bg-red-500/10"
  },
  { 
    label: "Active Cards", 
    value: "842", 
    change: "+5.2%", 
    trend: "up", 
    icon: CreditCard,
    color: "text-purple-500",
    bgColor: "bg-purple-500/10"
  },
];

export default function AdminOverview() {
  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-white">System Overview</h2>
          <p className="text-sm text-slate-400">Real-time monitoring of bank operations.</p>
        </div>
        <div className="flex items-center gap-2 bg-slate-800 p-1 rounded-xl border border-white/5">
          <button className="px-4 py-1.5 text-xs font-bold text-white bg-slate-700 rounded-lg shadow-sm">24h</button>
          <button className="px-4 py-1.5 text-xs font-bold text-slate-400 hover:text-white transition-colors">7d</button>
          <button className="px-4 py-1.5 text-xs font-bold text-slate-400 hover:text-white transition-colors">30d</button>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <Card className="p-6 bg-slate-900 border-white/10 hover:border-emerald-500/50 transition-all group">
              <div className="flex justify-between items-start mb-4">
                <div className={`p-3 rounded-2xl ${stat.bgColor}`}>
                  <stat.icon className={`w-6 h-6 ${stat.color}`} />
                </div>
                <div className={cn(
                  "flex items-center gap-1 text-xs font-bold",
                  stat.trend === "up" ? "text-emerald-500" : "text-red-500"
                )}>
                  {stat.change}
                  <TrendingUp className={cn("w-3 h-3", stat.trend === "down" && "rotate-180")} />
                </div>
              </div>
              <div className="space-y-1">
                <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">{stat.label}</p>
                <h3 className="text-2xl font-bold text-white tracking-tight">{stat.value}</h3>
              </div>
            </Card>
          </motion.div>
        ))}
      </div>

      {/* Charts Section */}
      <div className="grid lg:grid-cols-12 gap-8">
        <Card className="lg:col-span-8 p-6 bg-slate-900 border-white/10">
          <div className="flex items-center justify-between mb-8">
            <h3 className="font-bold text-white flex items-center gap-2">
              <Activity className="w-5 h-5 text-emerald-500" />
              Transaction Volume
            </h3>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-emerald-500" />
                <span className="text-xs text-slate-400">Deposits</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-blue-500" />
                <span className="text-xs text-slate-400">Withdrawals</span>
              </div>
            </div>
          </div>
          <div className="h-[300px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={data}>
                <defs>
                  <linearGradient id="colorDeposits" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#10b981" stopOpacity={0.3}/>
                    <stop offset="95%" stopColor="#10b981" stopOpacity={0}/>
                  </linearGradient>
                  <linearGradient id="colorWithdrawals" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.3}/>
                    <stop offset="95%" stopColor="#3b82f6" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="#1e293b" vertical={false} />
                <XAxis 
                  dataKey="name" 
                  stroke="#64748b" 
                  fontSize={12} 
                  tickLine={false} 
                  axisLine={false} 
                />
                <YAxis 
                  stroke="#64748b" 
                  fontSize={12} 
                  tickLine={false} 
                  axisLine={false}
                  tickFormatter={(value) => `$${value}`}
                />
                <Tooltip 
                  contentStyle={{ backgroundColor: '#0f172a', border: '1px solid #1e293b', borderRadius: '12px' }}
                  itemStyle={{ fontSize: '12px' }}
                />
                <Area 
                  type="monotone" 
                  dataKey="deposits" 
                  stroke="#10b981" 
                  strokeWidth={3}
                  fillOpacity={1} 
                  fill="url(#colorDeposits)" 
                />
                <Area 
                  type="monotone" 
                  dataKey="withdrawals" 
                  stroke="#3b82f6" 
                  strokeWidth={3}
                  fillOpacity={1} 
                  fill="url(#colorWithdrawals)" 
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </Card>

        <Card className="lg:col-span-4 p-6 bg-slate-900 border-white/10">
          <h3 className="font-bold text-white mb-6 flex items-center gap-2">
            <DollarSign className="w-5 h-5 text-emerald-500" />
            Revenue by Channel
          </h3>
          <div className="h-[300px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={data}>
                <CartesianGrid strokeDasharray="3 3" stroke="#1e293b" vertical={false} />
                <XAxis 
                  dataKey="name" 
                  stroke="#64748b" 
                  fontSize={12} 
                  tickLine={false} 
                  axisLine={false} 
                />
                <YAxis 
                  stroke="#64748b" 
                  fontSize={12} 
                  tickLine={false} 
                  axisLine={false}
                />
                <Tooltip 
                  contentStyle={{ backgroundColor: '#0f172a', border: '1px solid #1e293b', borderRadius: '12px' }}
                />
                <Bar dataKey="deposits" fill="#10b981" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </Card>
      </div>
    </div>
  );
}
