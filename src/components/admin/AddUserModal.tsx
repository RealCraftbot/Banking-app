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
import { 
  UserPlus,
  Mail,
  Phone,
  MapPin,
  Shield,
  Save
} from "lucide-react";
import { cn } from "@/lib/utils";

interface AddUserModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSuccess: (user: any) => void;
}

export default function AddUserModal({ isOpen, onClose, onSuccess }: AddUserModalProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    location: "",
    balance: "$0.00"
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newUser = {
      id: Math.floor(Math.random() * 1000).toString(),
      ...formData,
      status: "active",
      joinDate: new Date().toLocaleDateString('en-US', { month: 'short', day: '2-digit', year: 'numeric' }),
      cotActive: false,
      avatar: null
    };
    onSuccess(newUser);
    onClose();
    setFormData({ name: "", email: "", phone: "", location: "", balance: "$0.00" });
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md bg-slate-950 border-white/10 text-white p-0 overflow-hidden rounded-[2rem]">
        <DialogHeader className="p-8 pb-4 border-b border-white/5">
          <div className="flex items-center gap-4 mb-2">
            <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 flex items-center justify-center">
              <UserPlus className="w-6 h-6 text-emerald-500" />
            </div>
            <div>
              <DialogTitle className="text-xl font-bold text-white">Add New User</DialogTitle>
              <DialogDescription className="text-slate-400">Register a new customer to the banking system.</DialogDescription>
            </div>
          </div>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="p-8 space-y-6">
          <div className="space-y-4">
            <div className="space-y-1.5">
              <label className="text-[10px] font-bold text-slate-500 uppercase tracking-widest ml-1">Full Name</label>
              <Input 
                placeholder="John Doe"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="h-12 bg-slate-900 border-white/5 rounded-xl focus:ring-emerald-500/20 text-white"
                required
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <label className="text-[10px] font-bold text-slate-500 uppercase tracking-widest ml-1">Email Address</label>
                <Input 
                  type="email"
                  placeholder="john@example.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="h-12 bg-slate-900 border-white/5 rounded-xl focus:ring-emerald-500/20 text-white"
                  required
                />
              </div>
              <div className="space-y-1.5">
                <label className="text-[10px] font-bold text-slate-500 uppercase tracking-widest ml-1">Phone Number</label>
                <Input 
                  placeholder="+1 234 567 890"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="h-12 bg-slate-900 border-white/5 rounded-xl focus:ring-emerald-500/20 text-white"
                  required
                />
              </div>
            </div>

            <div className="space-y-1.5">
              <label className="text-[10px] font-bold text-slate-500 uppercase tracking-widest ml-1">Location</label>
              <Input 
                placeholder="City, Country"
                value={formData.location}
                onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                className="h-12 bg-slate-900 border-white/5 rounded-xl focus:ring-emerald-500/20 text-white"
                required
              />
            </div>

            <div className="space-y-1.5">
              <label className="text-[10px] font-bold text-slate-500 uppercase tracking-widest ml-1">Initial Balance</label>
              <Input 
                placeholder="$0.00"
                value={formData.balance}
                onChange={(e) => setFormData({ ...formData, balance: e.target.value })}
                className="h-12 bg-slate-900 border-white/5 rounded-xl focus:ring-emerald-500/20 text-white"
                required
              />
            </div>
          </div>

          <div className="flex gap-3 pt-2">
            <Button 
              type="button"
              variant="ghost" 
              className="flex-1 h-12 rounded-xl text-slate-400 hover:text-white hover:bg-white/5 font-bold"
              onClick={onClose}
            >
              Cancel
            </Button>
            <Button 
              type="submit"
              className="flex-1 h-12 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-slate-900 font-bold gap-2"
            >
              <Save className="w-4 h-4" />
              Create User
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}
