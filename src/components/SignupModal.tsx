import React, { useState } from "react";
import { 
  Dialog, 
  DialogContent, 
  DialogHeader, 
  DialogTitle,
  DialogDescription,
  DialogFooter
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Shield, User, Mail, Lock, Eye, EyeOff, ArrowRight } from "lucide-react";
import PasswordStrengthIndicator from "./dashboard/PasswordStrengthIndicator";
import { cn } from "@/lib/utils";

interface SignupModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSuccess: () => void;
}

export default function SignupModal({ isOpen, onClose, onSuccess }: SignupModalProps) {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate signup
    onSuccess();
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md bg-white border-slate-200 p-0 overflow-hidden rounded-[2rem]">
        <DialogHeader className="p-8 pb-4 bg-emerald-900 text-white">
          <div className="flex items-center gap-3 mb-4">
            <div className="bg-white/10 p-2 rounded-lg">
              <Shield className="w-6 h-6 text-emerald-400" />
            </div>
            <span className="text-xl font-bold tracking-tight">Everstandard Bank</span>
          </div>
          <DialogTitle className="text-2xl font-bold">Create Your Account</DialogTitle>
          <DialogDescription className="text-emerald-100/60">
            Join the future of innovative and secured banking.
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="p-8 space-y-5">
          <div className="space-y-4">
            <div className="space-y-1.5">
              <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest ml-1">Full Name</label>
              <div className="relative">
                <User className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                <Input 
                  placeholder="John Doe"
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  className="h-12 bg-slate-50 border-slate-100 rounded-xl pl-12 focus:ring-emerald-500/20"
                  required
                />
              </div>
            </div>

            <div className="space-y-1.5">
              <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest ml-1">Email Address</label>
              <div className="relative">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                <Input 
                  type="email"
                  placeholder="john@example.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="h-12 bg-slate-50 border-slate-100 rounded-xl pl-12 focus:ring-emerald-500/20"
                  required
                />
              </div>
            </div>

            <div className="space-y-1.5">
              <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest ml-1">Password</label>
              <div className="relative">
                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                <Input 
                  type={showPassword ? "text" : "password"}
                  placeholder="••••••••"
                  value={formData.password}
                  onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                  className="h-12 bg-slate-50 border-slate-100 rounded-xl px-12 focus:ring-emerald-500/20"
                  required
                />
                <button 
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 transition-colors"
                >
                  {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>
              
              {/* Password Strength Indicator */}
              <PasswordStrengthIndicator password={formData.password} />
            </div>

            <div className="space-y-1.5">
              <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest ml-1">Confirm Password</label>
              <div className="relative">
                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                <Input 
                  type="password"
                  placeholder="••••••••"
                  value={formData.confirmPassword}
                  onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
                  className={cn(
                    "h-12 bg-slate-50 border-slate-100 rounded-xl pl-12 focus:ring-emerald-500/20",
                    formData.confirmPassword && formData.password !== formData.confirmPassword && "border-red-200 focus:ring-red-500/20"
                  )}
                  required
                />
              </div>
              {formData.confirmPassword && formData.password !== formData.confirmPassword && (
                <p className="text-[10px] font-bold text-red-500 uppercase tracking-widest ml-1">Passwords do not match</p>
              )}
            </div>
          </div>

          <Button 
            type="submit"
            className="w-full h-14 bg-emerald-900 hover:bg-emerald-800 text-white font-bold rounded-xl gap-2 mt-4"
            disabled={!formData.password || formData.password !== formData.confirmPassword}
          >
            Create Account
            <ArrowRight className="w-5 h-5" />
          </Button>

          <p className="text-center text-xs text-slate-500">
            Already have an account?{" "}
            <button type="button" className="text-emerald-600 font-bold hover:underline">Log In</button>
          </p>
        </form>
      </DialogContent>
    </Dialog>
  );
}
