import React, { useState } from "react";
import { ShieldCheck, Lock, Mail, ArrowRight, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";

interface AdminLoginProps {
  onLogin: () => void;
  onBack: () => void;
}

export default function AdminLogin({ onLogin, onBack }: AdminLoginProps) {
  const [isLoading, setIsLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    // Simulate admin login
    setTimeout(() => {
      setIsLoading(false);
      onLogin();
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-[#0f172a] flex flex-col items-center justify-center p-4 relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] right-[-10%] w-[40%] h-[40%] bg-emerald-500/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-500/10 rounded-full blur-[120px]" />
      </div>

      <div className="w-full max-w-md relative z-10">
        <div className="flex flex-col items-center mb-10">
          <div className="w-16 h-16 bg-emerald-500 rounded-2xl flex items-center justify-center shadow-lg shadow-emerald-500/20 mb-6 transform rotate-3">
            <ShieldCheck className="w-10 h-10 text-slate-900" />
          </div>
          <h1 className="text-3xl font-bold text-white tracking-tight">Admin Portal</h1>
          <p className="text-slate-400 mt-2">Everstandard Bank Infrastructure</p>
        </div>

        <Card className="bg-slate-900/50 backdrop-blur-xl border-white/10 p-8 rounded-[2.5rem] shadow-2xl">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-4">
              <div className="space-y-1.5">
                <label className="text-[10px] font-bold text-slate-500 uppercase tracking-widest ml-1">Admin Email</label>
                <div className="relative">
                  <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
                  <Input 
                    type="email"
                    placeholder="admin@everstandard.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="h-12 bg-slate-800/50 border-white/5 rounded-xl pl-12 text-white focus:ring-emerald-500/20"
                    required
                  />
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="text-[10px] font-bold text-slate-500 uppercase tracking-widest ml-1">Security Key</label>
                <div className="relative">
                  <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
                  <Input 
                    type="password"
                    placeholder="••••••••••••"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="h-12 bg-slate-800/50 border-white/5 rounded-xl pl-12 text-white focus:ring-emerald-500/20"
                    required
                  />
                </div>
              </div>
            </div>

            <Button 
              type="submit"
              disabled={isLoading}
              className="w-full h-14 bg-emerald-500 hover:bg-emerald-600 text-slate-900 font-bold rounded-xl text-lg shadow-lg shadow-emerald-500/10 transition-all group"
            >
              {isLoading ? (
                <Loader2 className="w-6 h-6 animate-spin" />
              ) : (
                <>
                  Authenticate
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </>
              )}
            </Button>
          </form>
        </Card>

        <button 
          onClick={onBack}
          className="mt-8 text-slate-500 hover:text-white transition-colors text-sm font-medium flex items-center justify-center w-full gap-2"
        >
          Return to Public Site
        </button>
      </div>

      <div className="absolute bottom-8 left-0 w-full text-center">
        <p className="text-[10px] text-slate-600 font-bold uppercase tracking-[0.2em]">
          Secure Infrastructure &copy; 2024
        </p>
      </div>
    </div>
  );
}
