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
  AlertCircle, 
  AlertTriangle, 
  Info, 
  Bell, 
  Send,
  Users,
  Shield,
  Settings
} from "lucide-react";
import { cn } from "@/lib/utils";

interface CreateAlertModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSuccess: (alert: any) => void;
}

export default function CreateAlertModal({ isOpen, onClose, onSuccess }: CreateAlertModalProps) {
  const [formData, setFormData] = useState({
    title: "",
    message: "",
    type: "info",
    target: "All Users"
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newAlert = {
      id: `ALT-${Math.floor(Math.random() * 1000).toString().padStart(3, '0')}`,
      ...formData,
      status: "active",
      date: new Date().toISOString().split('T')[0]
    };
    onSuccess(newAlert);
    onClose();
    setFormData({ title: "", message: "", type: "info", target: "All Users" });
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md bg-slate-950 border-white/10 text-white p-0 overflow-hidden rounded-[2rem]">
        <DialogHeader className="p-8 pb-4 border-b border-white/5">
          <div className="flex items-center gap-4 mb-2">
            <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 flex items-center justify-center">
              <Bell className="w-6 h-6 text-emerald-500" />
            </div>
            <div>
              <DialogTitle className="text-xl font-bold text-white">Create System Alert</DialogTitle>
              <DialogDescription className="text-slate-400">Send a new notification to specific user groups.</DialogDescription>
            </div>
          </div>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="p-8 space-y-6">
          <div className="space-y-4">
            <div className="space-y-1.5">
              <label className="text-[10px] font-bold text-slate-500 uppercase tracking-widest ml-1">Alert Title</label>
              <Input 
                placeholder="e.g. Scheduled Maintenance"
                value={formData.title}
                onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                className="h-12 bg-slate-900 border-white/5 rounded-xl focus:ring-emerald-500/20 text-white"
                required
              />
            </div>

            <div className="space-y-1.5">
              <label className="text-[10px] font-bold text-slate-500 uppercase tracking-widest ml-1">Alert Message</label>
              <textarea 
                placeholder="Enter the detailed message..."
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full h-24 bg-slate-900 border border-white/5 rounded-xl p-4 text-white placeholder:text-slate-500 focus:ring-2 focus:ring-emerald-500/20 outline-none transition-all"
                required
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <label className="text-[10px] font-bold text-slate-500 uppercase tracking-widest ml-1">Alert Type</label>
                <div className="flex gap-2 p-1 bg-slate-900 rounded-xl border border-white/5">
                  {['info', 'warning', 'critical'].map((type) => (
                    <button
                      key={type}
                      type="button"
                      onClick={() => setFormData({ ...formData, type })}
                      className={cn(
                        "flex-1 py-2 rounded-lg text-[10px] font-bold uppercase tracking-wider transition-all",
                        formData.type === type 
                          ? type === 'critical' ? "bg-red-500 text-white" :
                            type === 'warning' ? "bg-amber-500 text-white" : "bg-blue-500 text-white"
                          : "text-slate-500 hover:text-slate-300"
                      )}
                    >
                      {type}
                    </button>
                  ))}
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="text-[10px] font-bold text-slate-500 uppercase tracking-widest ml-1">Target Audience</label>
                <select
                  value={formData.target}
                  onChange={(e) => setFormData({ ...formData, target: e.target.value })}
                  className="w-full h-11 bg-slate-900 border border-white/5 rounded-xl px-4 text-xs text-white focus:ring-2 focus:ring-emerald-500/20 outline-none appearance-none cursor-pointer"
                >
                  <option value="All Users">All Users</option>
                  <option value="Admins">Admins</option>
                  <option value="Compliance Team">Compliance Team</option>
                  <option value="System Engineers">System Engineers</option>
                </select>
              </div>
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
              <Send className="w-4 h-4" />
              Send Alert
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}
