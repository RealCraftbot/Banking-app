import { Button } from "@/components/ui/button";
import { motion } from "motion/react";
import { Apple, PlayCircle, CheckCircle2 } from "lucide-react";

export default function AppPromo() {
  return (
    <section className="py-24 bg-emerald-900 text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-emerald-400 font-bold tracking-widest uppercase text-sm mb-4">Bank On The Go</h2>
            <h3 className="text-4xl lg:text-5xl font-bold mb-8">Download Our Mobile App</h3>
            <p className="text-emerald-100 text-lg mb-10 leading-relaxed">
              Take control of your finances with our powerful mobile application. 
              Check balances, transfer funds, and pay bills with just a few taps.
            </p>

            <div className="space-y-4 mb-10">
              {[
                "Real-time balance updates",
                "Secure biometric login",
                "Instant fund transfers",
                "Mobile check deposit"
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400" />
                  <span className="text-emerald-50 font-medium">{item}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="bg-white text-emerald-900 hover:bg-emerald-50 h-14 px-8 rounded-xl font-bold">
                <Apple className="mr-2 w-6 h-6" />
                App Store
              </Button>
              <Button size="lg" variant="outline" className="border-emerald-400 text-white hover:bg-emerald-800 h-14 px-8 rounded-xl font-bold">
                <PlayCircle className="mr-2 w-6 h-6" />
                Google Play
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative flex justify-center"
          >
            <div className="relative w-[300px] h-[600px] bg-slate-900 rounded-[3rem] border-[8px] border-slate-800 shadow-2xl overflow-hidden">
              {/* Phone Screen Content */}
              <div className="p-6 pt-12">
                <div className="flex justify-between items-center mb-8">
                  <div>
                    <p className="text-xs text-slate-400">Welcome back,</p>
                    <p className="text-lg font-bold">Alex Johnson</p>
                  </div>
                  <div className="w-10 h-10 rounded-full bg-emerald-600" />
                </div>

                <div className="bg-gradient-to-br from-emerald-600 to-emerald-800 p-6 rounded-2xl mb-8 shadow-lg">
                  <p className="text-xs text-emerald-200 mb-1">Current Balance</p>
                  <p className="text-3xl font-bold mb-4">$24,580.50</p>
                  <div className="flex justify-between items-center">
                    <p className="text-xs text-emerald-200">**** 4582</p>
                    <div className="flex -space-x-2">
                      <div className="w-6 h-6 rounded-full bg-red-500/80" />
                      <div className="w-6 h-6 rounded-full bg-yellow-500/80" />
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <p className="text-sm font-bold">Recent Transactions</p>
                  {[
                    { name: "Apple Store", date: "Oct 24", amount: "-$199.00" },
                    { name: "Salary Deposit", date: "Oct 22", amount: "+$4,500.00" },
                    { name: "Starbucks", date: "Oct 21", amount: "-$12.50" }
                  ].map((t, i) => (
                    <div key={i} className="flex justify-between items-center p-3 bg-slate-800 rounded-xl">
                      <div>
                        <p className="text-sm font-medium">{t.name}</p>
                        <p className="text-[10px] text-slate-400">{t.date}</p>
                      </div>
                      <p className={`text-sm font-bold ${t.amount.startsWith('+') ? 'text-green-400' : 'text-white'}`}>
                        {t.amount}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            {/* Decorative circles */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-emerald-600/20 rounded-full blur-3xl -z-10" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
