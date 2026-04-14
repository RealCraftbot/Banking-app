import { 
  LayoutDashboard, 
  Users, 
  ArrowLeftRight, 
  ShieldCheck, 
  Settings, 
  LogOut, 
  ChevronLeft,
  Banknote,
  AlertCircle
} from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

interface AdminSidebarProps {
  activeSection: string;
  setActiveSection: (section: string) => void;
  onExit: () => void;
  isOpen: boolean;
  onClose: () => void;
}

const menuItems = [
  { id: "overview", label: "Overview", icon: LayoutDashboard },
  { id: "users", label: "User Management", icon: Users },
  { id: "transactions", label: "Transactions", icon: ArrowLeftRight },
  { id: "security", label: "Security Logs", icon: ShieldCheck },
  { id: "reports", label: "Financial Reports", icon: Banknote },
  { id: "alerts", label: "System Alerts", icon: AlertCircle },
];

export default function AdminSidebar({ activeSection, setActiveSection, onExit, isOpen, onClose }: AdminSidebarProps) {
  return (
    <>
      {/* Mobile Overlay */}
      <div 
        className={cn(
          "fixed inset-0 bg-slate-950/80 backdrop-blur-sm z-[60] lg:hidden transition-opacity duration-300",
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        )}
        onClick={onClose}
      />

      <aside className={cn(
        "w-64 bg-slate-900 border-r border-white/10 flex flex-col h-screen fixed left-0 top-0 z-[70] transition-transform duration-300 lg:translate-x-0",
        isOpen ? "translate-x-0" : "-translate-x-full"
      )}>
        <div className="p-6 border-b border-white/10 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="bg-emerald-500 p-1.5 rounded-lg">
              <ShieldCheck className="w-5 h-5 text-slate-900" />
            </div>
            <span className="text-lg font-bold text-white tracking-tight">
              Admin<span className="text-emerald-500">Panel</span>
            </span>
          </div>
          <button onClick={onClose} className="lg:hidden p-1 text-slate-500 hover:text-white">
            <ChevronLeft className="w-5 h-5" />
          </button>
        </div>
        <div className="px-6 py-2">
          <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">Everstandard Bank</p>
        </div>

      <nav className="flex-1 p-4 space-y-2 overflow-y-auto">
        {menuItems.map((item) => (
          <button
            key={item.id}
            onClick={() => {
              setActiveSection(item.id);
              onClose();
            }}
            className={cn(
              "w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all group",
              activeSection === item.id 
                ? "bg-emerald-500 text-slate-900 font-bold shadow-lg shadow-emerald-500/20" 
                : "text-slate-400 hover:text-white hover:bg-white/5"
            )}
          >
            <item.icon className={cn(
              "w-5 h-5",
              activeSection === item.id ? "text-slate-900" : "text-slate-500 group-hover:text-emerald-400"
            )} />
            <span className="text-sm">{item.label}</span>
          </button>
        ))}
      </nav>

      <div className="p-4 border-t border-white/10 space-y-2">
        <button
          className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-slate-400 hover:text-white hover:bg-white/5 transition-all"
        >
          <Settings className="w-5 h-5" />
          <span className="text-sm font-medium">Settings</span>
        </button>
        <button
          onClick={onExit}
          className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-red-400 hover:text-red-300 hover:bg-red-500/10 transition-all"
        >
          <LogOut className="w-5 h-5" />
          <span className="text-sm font-medium">Exit Admin</span>
        </button>
      </div>
    </aside>
    </>
  );
}
