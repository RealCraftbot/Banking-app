import { 
  AlertCircle, 
  AlertTriangle, 
  Info, 
  CheckCircle2, 
  Bell, 
  Plus,
  MoreVertical,
  Trash2,
  Send
} from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useState } from "react";
import CreateAlertModal from "./CreateAlertModal";

const initialAlerts = [
  {
    id: "ALT-001",
    title: "Scheduled Maintenance",
    message: "System will be down for maintenance on Sunday at 02:00 AM UTC.",
    type: "info",
    status: "active",
    date: "2024-03-15",
    target: "All Users"
  },
  {
    id: "ALT-002",
    title: "Security Update Required",
    message: "New security patches are available for the transaction processing engine.",
    type: "warning",
    status: "pending",
    date: "2024-03-15",
    target: "Admins"
  },
  {
    id: "ALT-003",
    title: "High Failure Rate",
    message: "Unusual number of failed crypto transfers detected in the last hour.",
    type: "critical",
    status: "active",
    date: "2024-03-15",
    target: "System Engineers"
  },
  {
    id: "ALT-004",
    title: "KYC Verification Backlog",
    message: "Over 50 pending KYC verifications require manual review.",
    type: "info",
    status: "active",
    date: "2024-03-14",
    target: "Compliance Team"
  },
];

export default function AdminAlerts() {
  const [alertsList, setAlertsList] = useState(initialAlerts);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [broadcastMessage, setBroadcastMessage] = useState("");

  const handleCreateAlert = (newAlert: any) => {
    setAlertsList([newAlert, ...alertsList]);
  };

  const handleDeleteAlert = (id: string) => {
    setAlertsList(alertsList.filter(a => a.id !== id));
  };

  const handleBroadcast = () => {
    if (!broadcastMessage.trim()) return;
    
    const newAlert = {
      id: `ALT-${Math.floor(Math.random() * 1000).toString().padStart(3, '0')}`,
      title: "Quick Broadcast",
      message: broadcastMessage,
      type: "info",
      status: "active",
      date: new Date().toISOString().split('T')[0],
      target: "All Users"
    };
    
    setAlertsList([newAlert, ...alertsList]);
    setBroadcastMessage("");
    alert("Broadcast sent successfully!");
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h2 className="text-2xl font-bold text-white">System Alerts</h2>
          <p className="text-sm text-slate-400">Manage global notifications and system-wide alerts.</p>
        </div>
        <Button 
          onClick={() => setIsModalOpen(true)}
          className="bg-emerald-500 hover:bg-emerald-600 text-slate-900 font-bold gap-2 rounded-xl h-11"
        >
          <Plus className="w-5 h-5" />
          Create New Alert
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {alertsList.map((alert) => (
          <Card key={alert.id} className="bg-slate-900 border-white/10 p-6 relative overflow-hidden group">
            <div className={cn(
              "absolute top-0 left-0 w-1 h-full",
              alert.type === "critical" ? "bg-red-500" :
              alert.type === "warning" ? "bg-amber-500" : "bg-blue-500"
            )} />
            
            <div className="flex justify-between items-start mb-4">
              <div className="flex items-center gap-3">
                <div className={cn(
                  "p-2 rounded-lg",
                  alert.type === "critical" ? "bg-red-500/10" :
                  alert.type === "warning" ? "bg-amber-500/10" : "bg-blue-500/10"
                )}>
                  {alert.type === "critical" && <AlertCircle className="w-5 h-5 text-red-500" />}
                  {alert.type === "warning" && <AlertTriangle className="w-5 h-5 text-amber-500" />}
                  {alert.type === "info" && <Info className="w-5 h-5 text-blue-500" />}
                </div>
                <div>
                  <h3 className="font-bold text-white">{alert.title}</h3>
                  <p className="text-[10px] text-slate-500 font-bold uppercase tracking-widest">{alert.id}</p>
                </div>
              </div>
              <Button variant="ghost" size="icon" className="text-slate-500 hover:text-white rounded-lg">
                <MoreVertical className="w-4 h-4" />
              </Button>
            </div>

            <p className="text-sm text-slate-400 mb-6 leading-relaxed">
              {alert.message}
            </p>

            <div className="flex items-center justify-between pt-4 border-t border-white/5">
              <div className="flex items-center gap-4">
                <div className="flex flex-col">
                  <span className="text-[10px] text-slate-500 uppercase font-bold tracking-widest">Target</span>
                  <span className="text-xs text-slate-300 font-medium">{alert.target}</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-[10px] text-slate-500 uppercase font-bold tracking-widest">Date</span>
                  <span className="text-xs text-slate-300 font-medium">{alert.date}</span>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Button 
                  onClick={() => handleDeleteAlert(alert.id)}
                  variant="ghost" 
                  size="sm" 
                  className="text-red-400 hover:text-red-300 hover:bg-red-500/10 rounded-lg h-8"
                >
                  <Trash2 className="w-3.5 h-3.5" />
                </Button>
                <Button variant="ghost" size="sm" className="text-emerald-400 hover:text-emerald-300 hover:bg-emerald-500/10 rounded-lg h-8 gap-1.5">
                  <Send className="w-3.5 h-3.5" />
                  Resend
                </Button>
              </div>
            </div>
          </Card>
        ))}
      </div>

      {/* Broadcast Section */}
      <Card className="bg-slate-900 border-white/10 p-8">
        <div className="flex items-center gap-4 mb-6">
          <div className="p-3 rounded-2xl bg-emerald-500/10">
            <Bell className="w-6 h-6 text-emerald-500" />
          </div>
          <div>
            <h3 className="text-xl font-bold text-white">Quick Broadcast</h3>
            <p className="text-sm text-slate-400">Send an immediate notification to all active users.</p>
          </div>
        </div>
        <div className="space-y-4">
          <textarea 
            placeholder="Type your message here..."
            value={broadcastMessage}
            onChange={(e) => setBroadcastMessage(e.target.value)}
            className="w-full h-32 bg-slate-800 border border-white/5 rounded-2xl p-4 text-white placeholder:text-slate-500 focus:ring-2 focus:ring-emerald-500/20 outline-none transition-all"
          />
          <div className="flex justify-end">
            <Button 
              onClick={handleBroadcast}
              className="bg-emerald-500 hover:bg-emerald-600 text-slate-900 font-bold px-8 rounded-xl h-12 gap-2"
            >
              <Send className="w-5 h-5" />
              Broadcast Now
            </Button>
          </div>
        </div>
      </Card>

      <CreateAlertModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        onSuccess={handleCreateAlert} 
      />
    </div>
  );
}
