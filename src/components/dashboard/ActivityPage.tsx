import { motion } from "motion/react";
import { Search, Filter, ArrowUpRight, ArrowDownLeft, CreditCard, ShoppingBag, Smartphone, Landmark } from "lucide-react";
import { cn } from "@/lib/utils";

const transactions = [
  {
    id: "1",
    type: "outgoing",
    title: "Transfer to Sunday Sunday",
    category: "Transfer",
    amount: "-$50.00",
    date: "Today, 2:45 PM",
    status: "Completed",
    icon: Landmark,
    color: "text-red-600",
    bgColor: "bg-red-50",
  },
  {
    id: "2",
    type: "incoming",
    title: "Salary Deposit",
    category: "Income",
    amount: "+$4,500.00",
    date: "Yesterday, 9:00 AM",
    status: "Completed",
    icon: CreditCard,
    color: "text-emerald-600",
    bgColor: "bg-emerald-50",
  },
  {
    id: "3",
    type: "outgoing",
    title: "Apple Store",
    category: "Shopping",
    amount: "-$1,299.00",
    date: "12 Apr 2026",
    status: "Completed",
    icon: ShoppingBag,
    color: "text-red-600",
    bgColor: "bg-red-50",
  },
  {
    id: "4",
    type: "outgoing",
    title: "Netflix Subscription",
    category: "Entertainment",
    amount: "-$15.99",
    date: "10 Apr 2026",
    status: "Completed",
    icon: Smartphone,
    color: "text-red-600",
    bgColor: "bg-red-50",
  },
  {
    id: "5",
    type: "incoming",
    title: "Refund from Amazon",
    category: "Shopping",
    amount: "+$45.50",
    date: "08 Apr 2026",
    status: "Completed",
    icon: ShoppingBag,
    color: "text-emerald-600",
    bgColor: "bg-emerald-50",
  },
];

export default function ActivityPage() {
  return (
    <div className="space-y-8">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h2 className="text-2xl font-bold text-slate-900">Transaction History</h2>
          <p className="text-sm text-slate-500">Track and manage your recent activity</p>
        </div>
        
        <div className="flex items-center gap-2">
          <div className="relative flex-1 md:w-64">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <input 
              type="text" 
              placeholder="Search transactions..." 
              className="w-full h-10 pl-10 pr-4 rounded-xl border border-slate-100 bg-white text-sm focus:ring-2 focus:ring-emerald-500/20 outline-none transition-all"
            />
          </div>
          <button className="h-10 px-4 rounded-xl border border-slate-100 bg-white text-sm font-medium text-slate-600 flex items-center gap-2 hover:bg-slate-50 transition-colors">
            <Filter className="w-4 h-4" />
            Filter
          </button>
        </div>
      </div>

      <div className="bg-white rounded-[2rem] border border-slate-100 overflow-hidden shadow-sm">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-slate-50/50 border-b border-slate-100">
                <th className="px-6 py-4 text-[10px] font-bold text-slate-400 uppercase tracking-widest">Transaction</th>
                <th className="px-6 py-4 text-[10px] font-bold text-slate-400 uppercase tracking-widest">Category</th>
                <th className="px-6 py-4 text-[10px] font-bold text-slate-400 uppercase tracking-widest">Date</th>
                <th className="px-6 py-4 text-[10px] font-bold text-slate-400 uppercase tracking-widest">Amount</th>
                <th className="px-6 py-4 text-[10px] font-bold text-slate-400 uppercase tracking-widest">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-50">
              {transactions.map((tx, index) => {
                const Icon = tx.icon;
                return (
                  <motion.tr 
                    key={tx.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.05 }}
                    className="hover:bg-slate-50/50 transition-colors group cursor-pointer"
                  >
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <div className={cn("w-10 h-10 rounded-xl flex items-center justify-center shrink-0", tx.bgColor)}>
                          <Icon className={cn("w-5 h-5", tx.color)} />
                        </div>
                        <span className="text-sm font-bold text-slate-900">{tx.title}</span>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <span className="text-xs font-medium text-slate-500 bg-slate-100 px-2.5 py-1 rounded-full">
                        {tx.category}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <span className="text-xs text-slate-500">{tx.date}</span>
                    </td>
                    <td className="px-6 py-4">
                      <span className={cn("text-sm font-bold", tx.color)}>
                        {tx.amount}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-1.5">
                        <div className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                        <span className="text-xs font-medium text-emerald-600">{tx.status}</span>
                      </div>
                    </td>
                  </motion.tr>
                );
              })}
            </tbody>
          </table>
        </div>
        
        <div className="p-4 bg-slate-50/50 border-t border-slate-50 flex items-center justify-between">
          <p className="text-xs text-slate-500">Showing 5 of 24 transactions</p>
          <div className="flex items-center gap-2">
            <button className="px-3 py-1.5 rounded-lg border border-slate-200 bg-white text-xs font-medium text-slate-400 disabled:opacity-50" disabled>Previous</button>
            <button className="px-3 py-1.5 rounded-lg border border-slate-200 bg-white text-xs font-medium text-slate-600 hover:bg-slate-50">Next</button>
          </div>
        </div>
      </div>
    </div>
  );
}
