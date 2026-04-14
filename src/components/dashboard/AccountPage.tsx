import { motion, AnimatePresence } from "motion/react";
import { User, Mail, Phone, MapPin, Shield, Bell, LogOut, ChevronRight, Camera, Key, Smartphone, Eye, EyeOff, Save, X } from "lucide-react";
import { cn } from "@/lib/utils";
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
import PasswordStrengthIndicator from "./PasswordStrengthIndicator";

interface AccountPageProps {
  onLogout?: () => void;
}

export default function AccountPage({ onLogout }: AccountPageProps) {
  const [isPasswordModalOpen, setIsPasswordModalOpen] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [passwords, setPasswords] = useState({
    current: "",
    new: "",
    confirm: ""
  });

  const handlePasswordChange = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would call an API
    console.log("Changing password...", passwords);
    setIsPasswordModalOpen(false);
    setPasswords({ current: "", new: "", confirm: "" });
  };

  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-2xl font-bold text-slate-900">Account Settings</h2>
        <p className="text-sm text-slate-500">Manage your profile and security preferences</p>
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        {/* Profile Sidebar */}
        <div className="space-y-6">
          <div className="bg-white rounded-[2rem] border border-slate-100 p-8 flex flex-col items-center text-center shadow-sm">
            <div className="relative mb-4">
              <div className="w-24 h-24 rounded-full bg-slate-100 flex items-center justify-center overflow-hidden border-4 border-white shadow-lg">
                <User className="w-12 h-12 text-slate-300" />
              </div>
              <button className="absolute bottom-0 right-0 w-8 h-8 bg-emerald-600 rounded-full flex items-center justify-center text-white border-2 border-white hover:bg-emerald-700 transition-colors">
                <Camera className="w-4 h-4" />
              </button>
            </div>
            
            <h3 className="text-xl font-bold text-slate-900">Sunday Sunday</h3>
            <p className="text-xs font-medium text-emerald-600 bg-emerald-50 px-3 py-1 rounded-full mt-1 uppercase tracking-wider">Platinum Member</p>
            
            <div className="w-full mt-8 space-y-2">
              <button 
                onClick={() => alert("Opening profile editor...")}
                className="w-full h-11 rounded-xl bg-slate-50 text-slate-600 text-sm font-bold flex items-center justify-center gap-2 hover:bg-slate-100 transition-colors"
              >
                Edit Profile
              </button>
              <button 
                onClick={onLogout}
                className="w-full h-11 rounded-xl bg-red-50 text-red-600 text-sm font-bold flex items-center justify-center gap-2 hover:bg-red-100 transition-colors"
              >
                <LogOut className="w-4 h-4" />
                Sign Out
              </button>
            </div>
          </div>

          <div className="bg-emerald-900 rounded-[2rem] p-6 text-white space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center">
                <Shield className="w-5 h-5 text-emerald-400" />
              </div>
              <h4 className="font-bold">Security Score</h4>
            </div>
            <div className="space-y-2">
              <div className="flex justify-between text-xs">
                <span className="text-emerald-200">Excellent</span>
                <span className="font-bold">85%</span>
              </div>
              <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                <div className="h-full bg-emerald-400 rounded-full" style={{ width: "85%" }} />
              </div>
            </div>
            <p className="text-[10px] text-emerald-100/60 leading-relaxed">
              Your account is highly secure. Enable 2FA to reach 100%.
            </p>
          </div>
        </div>

        {/* Settings Main */}
        <div className="lg:col-span-2 space-y-6">
          {/* Personal Info */}
          <div className="bg-white rounded-[2rem] border border-slate-100 p-6 space-y-6 shadow-sm">
            <h3 className="text-sm font-bold text-slate-900 uppercase tracking-widest flex items-center gap-2">
              <User className="w-4 h-4 text-emerald-600" />
              Personal Information
            </h3>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-1.5">
                <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest ml-1">Email Address</label>
                <div className="flex items-center gap-3 p-3 rounded-xl bg-slate-50 border border-slate-100">
                  <Mail className="w-4 h-4 text-slate-400" />
                  <span className="text-sm font-medium text-slate-600">sunday.s@example.com</span>
                </div>
              </div>
              <div className="space-y-1.5">
                <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest ml-1">Phone Number</label>
                <div className="flex items-center gap-3 p-3 rounded-xl bg-slate-50 border border-slate-100">
                  <Phone className="w-4 h-4 text-slate-400" />
                  <span className="text-sm font-medium text-slate-600">+234 801 234 5678</span>
                </div>
              </div>
              <div className="space-y-1.5 md:col-span-2">
                <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest ml-1">Residential Address</label>
                <div className="flex items-center gap-3 p-3 rounded-xl bg-slate-50 border border-slate-100">
                  <MapPin className="w-4 h-4 text-slate-400" />
                  <span className="text-sm font-medium text-slate-600">123 Emerald Avenue, Victoria Island, Lagos</span>
                </div>
              </div>
            </div>
          </div>

          {/* Security & Preferences */}
          <div className="bg-white rounded-[2rem] border border-slate-100 p-6 space-y-6 shadow-sm">
            <h3 className="text-sm font-bold text-slate-900 uppercase tracking-widest flex items-center gap-2">
              <Shield className="w-4 h-4 text-emerald-600" />
              Security & Preferences
            </h3>

            <div className="divide-y divide-slate-50">
              <button 
                onClick={() => setIsPasswordModalOpen(true)}
                className="w-full py-4 flex items-center justify-between group"
              >
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Key className="w-5 h-5 text-blue-600" />
                  </div>
                  <div className="text-left">
                    <p className="text-sm font-bold text-slate-900">Change Password</p>
                    <p className="text-xs text-slate-500">Last changed 3 months ago</p>
                  </div>
                </div>
                <ChevronRight className="w-5 h-5 text-slate-300 group-hover:text-slate-900 transition-colors" />
              </button>

              <button 
                onClick={() => alert("Opening 2FA setup...")}
                className="w-full py-4 flex items-center justify-between group"
              >
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-xl bg-emerald-50 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Smartphone className="w-5 h-5 text-emerald-600" />
                  </div>
                  <div className="text-left">
                    <p className="text-sm font-bold text-slate-900">Two-Factor Authentication</p>
                    <p className="text-xs text-slate-500">Add an extra layer of security</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Disabled</span>
                  <ChevronRight className="w-5 h-5 text-slate-300 group-hover:text-slate-900 transition-colors" />
                </div>
              </button>

              <button 
                onClick={() => alert("Opening notification settings...")}
                className="w-full py-4 flex items-center justify-between group"
              >
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-xl bg-amber-50 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Bell className="w-5 h-5 text-amber-600" />
                  </div>
                  <div className="text-left">
                    <p className="text-sm font-bold text-slate-900">Notification Preferences</p>
                    <p className="text-xs text-slate-500">Manage how you receive alerts</p>
                  </div>
                </div>
                <ChevronRight className="w-5 h-5 text-slate-300 group-hover:text-slate-900 transition-colors" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Change Password Modal */}
      <Dialog open={isPasswordModalOpen} onOpenChange={setIsPasswordModalOpen}>
        <DialogContent className="sm:max-w-md bg-white border-slate-200 p-0 overflow-hidden rounded-[2rem]">
          <DialogHeader className="p-8 pb-4 border-b border-slate-50">
            <div className="flex items-center gap-4 mb-2">
              <div className="w-12 h-12 rounded-2xl bg-blue-50 flex items-center justify-center">
                <Key className="w-6 h-6 text-blue-600" />
              </div>
              <div>
                <DialogTitle className="text-xl font-bold text-slate-900">Change Password</DialogTitle>
                <DialogDescription className="text-slate-500">Update your account security credentials</DialogDescription>
              </div>
            </div>
          </DialogHeader>

          <form onSubmit={handlePasswordChange} className="p-8 space-y-6">
            <div className="space-y-4">
              <div className="space-y-1.5">
                <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest ml-1">Current Password</label>
                <Input 
                  type="password"
                  placeholder="••••••••"
                  value={passwords.current}
                  onChange={(e) => setPasswords({ ...passwords, current: e.target.value })}
                  className="h-12 bg-slate-50 border-slate-100 rounded-xl focus:ring-blue-500/20"
                  required
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest ml-1">New Password</label>
                <div className="relative">
                  <Input 
                    type={showPassword ? "text" : "password"}
                    placeholder="••••••••"
                    value={passwords.new}
                    onChange={(e) => setPasswords({ ...passwords, new: e.target.value })}
                    className="h-12 bg-slate-50 border-slate-100 rounded-xl pr-12 focus:ring-blue-500/20"
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
                <PasswordStrengthIndicator password={passwords.new} />
              </div>

              <div className="space-y-1.5">
                <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest ml-1">Confirm New Password</label>
                <Input 
                  type="password"
                  placeholder="••••••••"
                  value={passwords.confirm}
                  onChange={(e) => setPasswords({ ...passwords, confirm: e.target.value })}
                  className={cn(
                    "h-12 bg-slate-50 border-slate-100 rounded-xl focus:ring-blue-500/20",
                    passwords.confirm && passwords.new !== passwords.confirm && "border-red-200 focus:ring-red-500/20"
                  )}
                  required
                />
                {passwords.confirm && passwords.new !== passwords.confirm && (
                  <p className="text-[10px] font-bold text-red-500 uppercase tracking-widest ml-1">Passwords do not match</p>
                )}
              </div>
            </div>

            <div className="flex gap-3 pt-2">
              <Button 
                type="button"
                variant="outline" 
                className="flex-1 h-12 rounded-xl border-slate-200 text-slate-600 font-bold"
                onClick={() => setIsPasswordModalOpen(false)}
              >
                Cancel
              </Button>
              <Button 
                type="submit"
                className="flex-1 h-12 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold gap-2"
                disabled={!passwords.new || passwords.new !== passwords.confirm}
              >
                <Save className="w-4 h-4" />
                Update Password
              </Button>
            </div>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
}
