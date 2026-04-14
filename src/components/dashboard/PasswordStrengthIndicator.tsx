import React from "react";
import { cn } from "@/lib/utils";
import { Check, X } from "lucide-react";

interface PasswordStrengthIndicatorProps {
  password: string;
}

export default function PasswordStrengthIndicator({ password }: PasswordStrengthIndicatorProps) {
  const requirements = [
    { label: "At least 8 characters", test: (p: string) => p.length >= 8 },
    { label: "At least one uppercase letter", test: (p: string) => /[A-Z]/.test(p) },
    { label: "At least one lowercase letter", test: (p: string) => /[a-z]/.test(p) },
    { label: "At least one number", test: (p: string) => /[0-9]/.test(p) },
    { label: "At least one special character", test: (p: string) => /[^A-Za-z0-9]/.test(p) },
  ];

  const strength = requirements.filter((req) => req.test(password)).length;
  
  const getStrengthColor = () => {
    if (password.length === 0) return "bg-slate-200";
    if (strength <= 2) return "bg-red-500";
    if (strength <= 4) return "bg-amber-500";
    return "bg-emerald-500";
  };

  const getStrengthLabel = () => {
    if (password.length === 0) return "Enter a password";
    if (strength <= 2) return "Weak";
    if (strength <= 4) return "Medium";
    return "Strong";
  };

  return (
    <div className="space-y-4 mt-4">
      <div className="space-y-2">
        <div className="flex justify-between items-center">
          <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Strength: {getStrengthLabel()}</span>
          <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{strength}/5</span>
        </div>
        <div className="h-1.5 w-full bg-slate-100 rounded-full overflow-hidden flex gap-1">
          {[1, 2, 3, 4, 5].map((i) => (
            <div
              key={i}
              className={cn(
                "h-full flex-1 transition-all duration-300",
                i <= strength ? getStrengthColor() : "bg-slate-200"
              )}
            />
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
        {requirements.map((req, index) => {
          const isMet = req.test(password);
          return (
            <div key={index} className="flex items-center gap-2">
              <div className={cn(
                "w-4 h-4 rounded-full flex items-center justify-center transition-colors",
                isMet ? "bg-emerald-100" : "bg-slate-100"
              )}>
                {isMet ? (
                  <Check className="w-2.5 h-2.5 text-emerald-600" />
                ) : (
                  <X className="w-2.5 h-2.5 text-slate-400" />
                )}
              </div>
              <span className={cn(
                "text-[10px] font-medium transition-colors",
                isMet ? "text-slate-900" : "text-slate-400"
              )}>
                {req.label}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
