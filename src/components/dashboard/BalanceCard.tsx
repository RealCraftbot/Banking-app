import { Eye, EyeOff, Plus } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { motion } from "motion/react";

interface BalanceCardProps {
  onFund?: () => void;
}

export default function BalanceCard({ onFund }: BalanceCardProps) {
  const [showBalance, setShowBalance] = useState(true);

  return (
    <div className="relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-emerald-900 via-emerald-800 to-emerald-950 p-6 text-white shadow-2xl shadow-emerald-100">
      {/* Decorative circles */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-2xl" />
      <div className="absolute bottom-0 left-0 w-24 h-24 bg-emerald-400/10 rounded-full translate-y-1/2 -translate-x-1/2 blur-xl" />

      <div className="relative z-10">
        <div className="flex justify-between items-start mb-4">
          <div>
            <p className="text-[10px] font-bold tracking-[0.2em] text-emerald-200/80 uppercase mb-1">
              Available Balance
            </p>
            <div className="flex items-center gap-3">
              <h2 className="text-4xl font-bold tracking-tight">
                {showBalance ? "$ 0.00" : "****"}
              </h2>
              <button 
                onClick={() => setShowBalance(!showBalance)}
                className="p-1 hover:bg-white/10 rounded-full transition-colors"
              >
                {showBalance ? <Eye className="w-5 h-5 text-emerald-300" /> : <EyeOff className="w-5 h-5 text-emerald-300" />}
              </button>
            </div>
          </div>
          <Button 
            onClick={onFund}
            className="bg-white/10 hover:bg-white/20 text-white border border-white/20 rounded-xl px-4 h-10 gap-2 backdrop-blur-sm"
          >
            <Plus className="w-4 h-4" />
            <span className="font-bold text-sm">Fund</span>
          </Button>
        </div>

        <div className="grid grid-cols-3 gap-4 pt-6 border-t border-white/10">
          <div className="space-y-1">
            <div className="flex items-center gap-1.5">
              <div className="w-4 h-4 rounded-full bg-orange-500 flex items-center justify-center text-[8px] font-bold">B</div>
              <span className="text-[10px] font-bold text-emerald-200/80">BTC</span>
            </div>
            <p className="text-sm font-bold">0.000000</p>
            <p className="text-[10px] text-emerald-300/60">≈ $0.00</p>
          </div>
          <div className="space-y-1">
            <div className="flex items-center gap-1.5">
              <div className="w-4 h-4 rounded-full bg-blue-500 flex items-center justify-center text-[8px] font-bold">E</div>
              <span className="text-[10px] font-bold text-emerald-200/80">ETH</span>
            </div>
            <p className="text-sm font-bold">0.000000</p>
            <p className="text-[10px] text-emerald-300/60">≈ $0.00</p>
          </div>
          <div className="space-y-1">
            <div className="flex items-center gap-1.5">
              <div className="w-4 h-4 rounded-full bg-emerald-500 flex items-center justify-center text-[8px] font-bold">T</div>
              <span className="text-[10px] font-bold text-emerald-200/80">USDT</span>
            </div>
            <p className="text-sm font-bold">0.00</p>
            <p className="text-[10px] text-emerald-300/60">≈ $0.00</p>
          </div>
        </div>
      </div>
    </div>
  );
}
