import { 
  Shield, 
  User, 
  Globe, 
  Clock, 
  AlertTriangle, 
  CheckCircle2,
  Search,
  Filter
} from "lucide-react";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const logs = [
  {
    id: "LOG-001",
    user: "Sunday Sunday",
    action: "Login Attempt",
    ip: "192.168.1.45",
    location: "Lagos, NG",
    status: "success",
    time: "2024-03-15 14:30:22",
    device: "Chrome / Windows"
  },
  {
    id: "LOG-002",
    user: "Unknown",
    action: "Failed Login",
    ip: "45.12.89.21",
    location: "Moscow, RU",
    status: "failed",
    time: "2024-03-15 14:35:10",
    device: "Firefox / Linux"
  },
  {
    id: "LOG-003",
    user: "Sarah Jenkins",
    action: "Password Change",
    ip: "82.45.12.33",
    location: "London, UK",
    status: "success",
    time: "2024-03-15 15:10:05",
    device: "Safari / iPhone"
  },
  {
    id: "LOG-004",
    user: "Michael Chen",
    action: "2FA Enabled",
    ip: "210.4.55.12",
    location: "Hong Kong",
    status: "success",
    time: "2024-03-15 16:20:45",
    device: "Chrome / macOS"
  },
  {
    id: "LOG-005",
    user: "Sunday Sunday",
    action: "Large Transfer",
    ip: "192.168.1.45",
    location: "Lagos, NG",
    status: "warning",
    time: "2024-03-15 17:05:12",
    device: "Chrome / Windows"
  },
];

export default function AdminSecurityLogs() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h2 className="text-2xl font-bold text-white">Security Logs</h2>
          <p className="text-sm text-slate-400">Monitor system access and security-related events.</p>
        </div>
        <div className="flex items-center gap-2">
          <div className="px-3 py-1 bg-red-500/10 border border-red-500/20 rounded-lg flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
            <span className="text-xs font-bold text-red-500">3 Suspicious Activities</span>
          </div>
        </div>
      </div>

      <Card className="bg-slate-900 border-white/10 overflow-hidden">
        <div className="p-4 border-b border-white/10 flex flex-col md:flex-row gap-4">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
            <Input 
              placeholder="Search logs by user, IP, or action..." 
              className="pl-10 bg-slate-800 border-white/5 text-white placeholder:text-slate-500 rounded-xl h-11"
            />
          </div>
          <Button variant="outline" className="border-white/10 text-slate-400 hover:text-white hover:bg-white/5 rounded-xl h-11 gap-2">
            <Filter className="w-4 h-4" />
            Filter Logs
          </Button>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-white/5 bg-white/5">
                <th className="p-4 text-[10px] font-bold text-slate-400 uppercase tracking-widest">Event</th>
                <th className="p-4 text-[10px] font-bold text-slate-400 uppercase tracking-widest">User</th>
                <th className="p-4 text-[10px] font-bold text-slate-400 uppercase tracking-widest">IP & Location</th>
                <th className="p-4 text-[10px] font-bold text-slate-400 uppercase tracking-widest">Status</th>
                <th className="p-4 text-[10px] font-bold text-slate-400 uppercase tracking-widest">Time</th>
                <th className="p-4 text-[10px] font-bold text-slate-400 uppercase tracking-widest">Device</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5">
              {logs.map((log) => (
                <tr key={log.id} className="hover:bg-white/5 transition-colors">
                  <td className="p-4">
                    <div className="flex items-center gap-3">
                      <div className={cn(
                        "p-2 rounded-lg",
                        log.status === "failed" ? "bg-red-500/10" : 
                        log.status === "warning" ? "bg-amber-500/10" : "bg-emerald-500/10"
                      )}>
                        <Shield className={cn(
                          "w-4 h-4",
                          log.status === "failed" ? "text-red-500" : 
                          log.status === "warning" ? "text-amber-500" : "text-emerald-500"
                        )} />
                      </div>
                      <span className="text-sm font-bold text-white">{log.action}</span>
                    </div>
                  </td>
                  <td className="p-4">
                    <div className="flex items-center gap-2">
                      <User className="w-3 h-3 text-slate-500" />
                      <span className="text-sm text-slate-300">{log.user}</span>
                    </div>
                  </td>
                  <td className="p-4">
                    <div className="space-y-0.5">
                      <p className="text-xs text-white font-mono">{log.ip}</p>
                      <p className="text-[10px] text-slate-500 flex items-center gap-1">
                        <Globe className="w-3 h-3" />
                        {log.location}
                      </p>
                    </div>
                  </td>
                  <td className="p-4">
                    <div className="flex items-center gap-2">
                      {log.status === "success" && <CheckCircle2 className="w-4 h-4 text-emerald-500" />}
                      {log.status === "failed" && <AlertTriangle className="w-4 h-4 text-red-500" />}
                      {log.status === "warning" && <AlertTriangle className="w-4 h-4 text-amber-500" />}
                      <span className={cn(
                        "text-[10px] font-bold uppercase tracking-wider",
                        log.status === "success" ? "text-emerald-500" :
                        log.status === "failed" ? "text-red-500" : "text-amber-500"
                      )}>
                        {log.status}
                      </span>
                    </div>
                  </td>
                  <td className="p-4">
                    <div className="flex items-center gap-2 text-[10px] text-slate-500 font-mono">
                      <Clock className="w-3 h-3" />
                      {log.time}
                    </div>
                  </td>
                  <td className="p-4">
                    <span className="text-[10px] text-slate-400 bg-slate-800 px-2 py-1 rounded border border-white/5">
                      {log.device}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>
    </div>
  );
}
