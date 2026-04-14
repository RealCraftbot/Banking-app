import { 
  Search, 
  Filter, 
  ArrowUpRight, 
  ArrowDownLeft, 
  Clock, 
  CheckCircle2, 
  XCircle,
  Download,
  ExternalLink
} from "lucide-react";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { cn } from "@/lib/utils";

const transactions = [
  {
    id: "TX-9021",
    user: "Sunday Sunday",
    type: "deposit",
    method: "Wire Transfer",
    amount: "$5,000.00",
    status: "completed",
    date: "2024-03-15 14:30",
  },
  {
    id: "TX-9022",
    user: "Sarah Jenkins",
    type: "withdrawal",
    method: "Local Bank",
    amount: "$1,200.00",
    status: "pending",
    date: "2024-03-15 15:45",
  },
  {
    id: "TX-9023",
    user: "Michael Chen",
    type: "transfer",
    method: "Internal",
    amount: "$450.00",
    status: "failed",
    date: "2024-03-14 09:20",
  },
  {
    id: "TX-9024",
    user: "Elena Rodriguez",
    type: "deposit",
    method: "Crypto (BTC)",
    amount: "$2,800.00",
    status: "completed",
    date: "2024-03-14 11:10",
  },
  {
    id: "TX-9025",
    user: "Sunday Sunday",
    type: "withdrawal",
    method: "PayPal",
    amount: "$800.00",
    status: "completed",
    date: "2024-03-13 16:55",
  },
];

export default function AdminTransactions() {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h2 className="text-2xl font-bold text-white">Global Transactions</h2>
          <p className="text-sm text-slate-400">Monitor all financial movements across the platform.</p>
        </div>
        <Button 
          onClick={() => alert("Exporting transaction report...")}
          className="bg-slate-800 hover:bg-slate-700 text-white font-bold gap-2 rounded-xl h-11 border border-white/5"
        >
          <Download className="w-5 h-5" />
          Export Report
        </Button>
      </div>

      <Card className="bg-slate-900 border-white/10 overflow-hidden">
        <div className="p-4 border-b border-white/10 flex flex-col md:flex-row gap-4">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
            <Input 
              placeholder="Search by ID, user, or method..." 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 bg-slate-800 border-white/5 text-white placeholder:text-slate-500 rounded-xl h-11 focus:ring-emerald-500/20"
            />
          </div>
          <div className="flex gap-2">
            <Button variant="outline" className="border-white/10 text-slate-400 hover:text-white hover:bg-white/5 rounded-xl h-11 gap-2">
              <Filter className="w-4 h-4" />
              Type
            </Button>
            <Button variant="outline" className="border-white/10 text-slate-400 hover:text-white hover:bg-white/5 rounded-xl h-11 gap-2">
              Status
            </Button>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-white/5 bg-white/5">
                <th className="p-4 text-[10px] font-bold text-slate-400 uppercase tracking-widest">Transaction ID</th>
                <th className="p-4 text-[10px] font-bold text-slate-400 uppercase tracking-widest">User</th>
                <th className="p-4 text-[10px] font-bold text-slate-400 uppercase tracking-widest">Type</th>
                <th className="p-4 text-[10px] font-bold text-slate-400 uppercase tracking-widest">Method</th>
                <th className="p-4 text-[10px] font-bold text-slate-400 uppercase tracking-widest">Amount</th>
                <th className="p-4 text-[10px] font-bold text-slate-400 uppercase tracking-widest">Status</th>
                <th className="p-4 text-[10px] font-bold text-slate-400 uppercase tracking-widest">Date</th>
                <th className="p-4 text-[10px] font-bold text-slate-400 uppercase tracking-widest text-right">Details</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5">
              {transactions.map((tx) => (
                <tr key={tx.id} className="hover:bg-white/5 transition-colors group">
                  <td className="p-4">
                    <span className="text-xs font-mono text-emerald-500 font-bold">{tx.id}</span>
                  </td>
                  <td className="p-4">
                    <p className="text-sm font-medium text-white">{tx.user}</p>
                  </td>
                  <td className="p-4">
                    <div className="flex items-center gap-2">
                      {tx.type === "deposit" ? (
                        <ArrowDownLeft className="w-4 h-4 text-emerald-500" />
                      ) : (
                        <ArrowUpRight className="w-4 h-4 text-red-500" />
                      )}
                      <span className="text-xs capitalize text-slate-300">{tx.type}</span>
                    </div>
                  </td>
                  <td className="p-4">
                    <span className="text-xs text-slate-400">{tx.method}</span>
                  </td>
                  <td className="p-4">
                    <p className={cn(
                      "text-sm font-bold",
                      tx.type === "deposit" ? "text-emerald-500" : "text-white"
                    )}>
                      {tx.type === "deposit" ? "+" : "-"}{tx.amount}
                    </p>
                  </td>
                  <td className="p-4">
                    <div className="flex items-center gap-2">
                      {tx.status === "completed" && <CheckCircle2 className="w-4 h-4 text-emerald-500" />}
                      {tx.status === "pending" && <Clock className="w-4 h-4 text-amber-500" />}
                      {tx.status === "failed" && <XCircle className="w-4 h-4 text-red-500" />}
                      <span className={cn(
                        "text-[10px] font-bold uppercase tracking-wider",
                        tx.status === "completed" ? "text-emerald-500" :
                        tx.status === "pending" ? "text-amber-500" :
                        "text-red-500"
                      )}>
                        {tx.status}
                      </span>
                    </div>
                  </td>
                  <td className="p-4">
                    <p className="text-[10px] text-slate-500 font-mono">{tx.date}</p>
                  </td>
                  <td className="p-4 text-right">
                    <Button 
                      onClick={() => alert(`Viewing details for ${tx.id}`)}
                      variant="ghost" 
                      size="icon" 
                      className="text-slate-500 hover:text-emerald-500 hover:bg-emerald-500/10 rounded-lg"
                    >
                      <ExternalLink className="w-4 h-4" />
                    </Button>
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
