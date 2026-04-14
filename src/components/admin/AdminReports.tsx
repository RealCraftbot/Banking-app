import { 
  TrendingUp, 
  TrendingDown, 
  DollarSign, 
  Users, 
  ArrowUpRight, 
  Download,
  Calendar,
  PieChart as PieChartIcon,
  BarChart3
} from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  PieChart, 
  Pie, 
  Cell, 
  ResponsiveContainer, 
  Tooltip,
  Legend,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid
} from "recharts";

const channelData = [
  { name: "Wire Transfer", value: 45, color: "#10b981" },
  { name: "Crypto", value: 30, color: "#3b82f6" },
  { name: "Local Bank", value: 15, color: "#f59e0b" },
  { name: "PayPal/Skrill", value: 10, color: "#8b5cf6" },
];

const growthData = [
  { month: "Jan", users: 400, revenue: 2400 },
  { month: "Feb", users: 600, revenue: 3500 },
  { month: "Mar", users: 800, revenue: 4200 },
  { month: "Apr", users: 1000, revenue: 5800 },
  { month: "May", users: 1200, revenue: 7100 },
  { month: "Jun", users: 1284, revenue: 8400 },
];

export default function AdminReports() {
  return (
    <div className="space-y-8">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h2 className="text-2xl font-bold text-white">Financial Reports</h2>
          <p className="text-sm text-slate-400">In-depth analysis of platform growth and revenue.</p>
        </div>
        <div className="flex gap-2">
          <Button 
            onClick={() => alert("Opening date range selector...")}
            variant="outline" 
            className="border-white/10 text-slate-400 hover:text-white hover:bg-white/5 rounded-xl h-11 gap-2"
          >
            <Calendar className="w-4 h-4" />
            Last 6 Months
          </Button>
          <Button 
            onClick={() => alert("Generating PDF report...")}
            className="bg-emerald-500 hover:bg-emerald-600 text-slate-900 font-bold gap-2 rounded-xl h-11"
          >
            <Download className="w-5 h-5" />
            Download PDF
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Revenue Breakdown */}
        <Card className="lg:col-span-1 p-6 bg-slate-900 border-white/10">
          <h3 className="font-bold text-white mb-6 flex items-center gap-2">
            <PieChartIcon className="w-5 h-5 text-emerald-500" />
            Revenue by Channel
          </h3>
          <div className="h-[300px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={channelData}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={80}
                  paddingAngle={5}
                  dataKey="value"
                >
                  {channelData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip 
                  contentStyle={{ backgroundColor: '#0f172a', border: '1px solid #1e293b', borderRadius: '12px' }}
                />
                <Legend verticalAlign="bottom" height={36}/>
              </PieChart>
            </ResponsiveContainer>
          </div>
        </Card>

        {/* User Growth */}
        <Card className="lg:col-span-2 p-6 bg-slate-900 border-white/10">
          <h3 className="font-bold text-white mb-6 flex items-center gap-2">
            <BarChart3 className="w-5 h-5 text-emerald-500" />
            User Growth & Revenue
          </h3>
          <div className="h-[300px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={growthData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#1e293b" vertical={false} />
                <XAxis dataKey="month" stroke="#64748b" fontSize={12} axisLine={false} tickLine={false} />
                <YAxis stroke="#64748b" fontSize={12} axisLine={false} tickLine={false} />
                <Tooltip 
                  contentStyle={{ backgroundColor: '#0f172a', border: '1px solid #1e293b', borderRadius: '12px' }}
                />
                <Bar dataKey="users" fill="#3b82f6" radius={[4, 4, 0, 0]} name="New Users" />
                <Bar dataKey="revenue" fill="#10b981" radius={[4, 4, 0, 0]} name="Revenue ($)" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </Card>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="p-6 bg-slate-900 border-white/10">
          <div className="flex items-center gap-4">
            <div className="p-3 rounded-2xl bg-emerald-500/10">
              <TrendingUp className="w-6 h-6 text-emerald-500" />
            </div>
            <div>
              <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">Net Profit</p>
              <h4 className="text-xl font-bold text-white">$245,800.00</h4>
              <p className="text-[10px] text-emerald-500 font-bold">+12.5% from last month</p>
            </div>
          </div>
        </Card>
        <Card className="p-6 bg-slate-900 border-white/10">
          <div className="flex items-center gap-4">
            <div className="p-3 rounded-2xl bg-blue-500/10">
              <Users className="w-6 h-6 text-blue-500" />
            </div>
            <div>
              <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">Active Users</p>
              <h4 className="text-xl font-bold text-white">1,284</h4>
              <p className="text-[10px] text-blue-500 font-bold">+5.2% from last month</p>
            </div>
          </div>
        </Card>
        <Card className="p-6 bg-slate-900 border-white/10">
          <div className="flex items-center gap-4">
            <div className="p-3 rounded-2xl bg-purple-500/10">
              <ArrowUpRight className="w-6 h-6 text-purple-500" />
            </div>
            <div>
              <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">Avg. Transaction</p>
              <h4 className="text-xl font-bold text-white">$1,420.00</h4>
              <p className="text-[10px] text-purple-500 font-bold">+2.1% from last month</p>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}
