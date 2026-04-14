import { motion } from "motion/react";
import { Plus, CreditCard, Shield, Settings, Eye, EyeOff, Lock, Smartphone } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";

export default function CardsPage() {
  const [showNumbers, setShowNumbers] = useState(false);

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-slate-900">My Cards</h2>
          <p className="text-sm text-slate-500">Manage your physical and virtual cards</p>
        </div>
        
        <button className="h-10 px-4 rounded-xl bg-emerald-800 text-white text-sm font-bold flex items-center gap-2 hover:bg-emerald-900 transition-all shadow-lg shadow-emerald-100">
          <Plus className="w-4 h-4" />
          New Card
        </button>
      </div>

      <div className="grid lg:grid-cols-2 gap-8">
        {/* Card Preview */}
        <div className="space-y-6">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="relative aspect-[1.586/1] w-full max-w-md mx-auto rounded-[2rem] bg-gradient-to-br from-emerald-900 via-emerald-800 to-emerald-950 p-8 text-white shadow-2xl shadow-emerald-200 overflow-hidden group"
          >
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -mr-20 -mt-20 blur-3xl group-hover:bg-white/10 transition-all duration-700" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-emerald-400/10 rounded-full -ml-20 -mb-20 blur-2xl" />
            
            <div className="relative h-full flex flex-col justify-between">
              <div className="flex justify-between items-start">
                <div className="space-y-1">
                  <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-emerald-300/80">Everstandard Platinum</p>
                  <div className="flex items-center gap-2">
                    <Shield className="w-4 h-4 text-emerald-400" />
                    <span className="text-xs font-medium">Secure Chip</span>
                  </div>
                </div>
                <div className="w-12 h-8 bg-white/10 rounded-md backdrop-blur-sm border border-white/10 flex items-center justify-center">
                  <div className="w-6 h-6 bg-amber-400/80 rounded-full -mr-2" />
                  <div className="w-6 h-6 bg-red-400/80 rounded-full" />
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <p className="text-2xl font-mono tracking-[0.15em] font-bold">
                    {showNumbers ? "4532 8892 1002 4456" : "•••• •••• •••• 4456"}
                  </p>
                  <button 
                    onClick={() => setShowNumbers(!showNumbers)}
                    className="p-1.5 hover:bg-white/10 rounded-lg transition-colors"
                  >
                    {showNumbers ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                  </button>
                </div>

                <div className="flex gap-8">
                  <div>
                    <p className="text-[8px] font-bold uppercase tracking-widest text-emerald-300/60 mb-1">Expiry Date</p>
                    <p className="text-sm font-bold">08/29</p>
                  </div>
                  <div>
                    <p className="text-[8px] font-bold uppercase tracking-widest text-emerald-300/60 mb-1">CVV</p>
                    <p className="text-sm font-bold">{showNumbers ? "882" : "•••"}</p>
                  </div>
                </div>
              </div>

              <div className="flex justify-between items-end">
                <p className="text-sm font-bold tracking-wide uppercase">Sunday Sunday</p>
                <div className="flex items-center gap-1 opacity-60">
                  <div className="w-1 h-1 rounded-full bg-white" />
                  <div className="w-1 h-1 rounded-full bg-white" />
                  <div className="w-1 h-1 rounded-full bg-white" />
                </div>
              </div>
            </div>
          </motion.div>

          <div className="grid grid-cols-3 gap-4">
            <button className="p-4 rounded-2xl border border-slate-100 bg-white hover:bg-slate-50 transition-all flex flex-col items-center gap-2 group">
              <div className="w-10 h-10 rounded-xl bg-emerald-50 flex items-center justify-center group-hover:scale-110 transition-transform">
                <Lock className="w-5 h-5 text-emerald-600" />
              </div>
              <span className="text-[10px] font-bold text-slate-600 uppercase tracking-widest">Freeze</span>
            </button>
            <button className="p-4 rounded-2xl border border-slate-100 bg-white hover:bg-slate-50 transition-all flex flex-col items-center gap-2 group">
              <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center group-hover:scale-110 transition-transform">
                <Settings className="w-5 h-5 text-blue-600" />
              </div>
              <span className="text-[10px] font-bold text-slate-600 uppercase tracking-widest">Limits</span>
            </button>
            <button className="p-4 rounded-2xl border border-slate-100 bg-white hover:bg-slate-50 transition-all flex flex-col items-center gap-2 group">
              <div className="w-10 h-10 rounded-xl bg-amber-50 flex items-center justify-center group-hover:scale-110 transition-transform">
                <Smartphone className="w-5 h-5 text-amber-600" />
              </div>
              <span className="text-[10px] font-bold text-slate-600 uppercase tracking-widest">Apple Pay</span>
            </button>
          </div>
        </div>

        {/* Card Details & Settings */}
        <div className="space-y-6">
          <div className="bg-white rounded-[2rem] border border-slate-100 p-6 space-y-6 shadow-sm">
            <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
              <Settings className="w-4 h-4 text-emerald-600" />
              Card Settings
            </h3>

            <div className="space-y-4">
              <div className="flex items-center justify-between p-4 rounded-2xl bg-slate-50/50">
                <div className="space-y-0.5">
                  <p className="text-sm font-bold text-slate-900">Online Payments</p>
                  <p className="text-xs text-slate-500">Allow card to be used for web purchases</p>
                </div>
                <div className="w-10 h-5 bg-emerald-500 rounded-full relative cursor-pointer">
                  <div className="absolute right-1 top-1 w-3 h-3 bg-white rounded-full" />
                </div>
              </div>

              <div className="flex items-center justify-between p-4 rounded-2xl bg-slate-50/50">
                <div className="space-y-0.5">
                  <p className="text-sm font-bold text-slate-900">International Usage</p>
                  <p className="text-xs text-slate-500">Enable payments outside your country</p>
                </div>
                <div className="w-10 h-5 bg-slate-200 rounded-full relative cursor-pointer">
                  <div className="absolute left-1 top-1 w-3 h-3 bg-white rounded-full" />
                </div>
              </div>

              <div className="flex items-center justify-between p-4 rounded-2xl bg-slate-50/50">
                <div className="space-y-0.5">
                  <p className="text-sm font-bold text-slate-900">Contactless Payments</p>
                  <p className="text-xs text-slate-500">Tap to pay at physical terminals</p>
                </div>
                <div className="w-10 h-5 bg-emerald-500 rounded-full relative cursor-pointer">
                  <div className="absolute right-1 top-1 w-3 h-3 bg-white rounded-full" />
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-slate-100">
              <button className="w-full h-12 rounded-xl border border-red-100 text-red-600 text-sm font-bold hover:bg-red-50 transition-colors">
                Report Lost or Stolen
              </button>
            </div>
          </div>

          <div className="p-6 bg-emerald-900 rounded-[2rem] text-white space-y-4 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -mr-10 -mt-10 blur-2xl" />
            <h3 className="text-lg font-bold">Upgrade to Metal</h3>
            <p className="text-xs text-emerald-100/80 leading-relaxed">
              Get exclusive benefits, higher limits, and a premium stainless steel card.
            </p>
            <button className="h-10 px-6 rounded-xl bg-white text-emerald-900 text-sm font-bold hover:bg-emerald-50 transition-all">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
