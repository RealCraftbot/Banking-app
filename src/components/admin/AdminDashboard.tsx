import { useState } from "react";
import AdminSidebar from "./AdminSidebar";
import AdminOverview from "./AdminOverview";
import AdminUsers from "./AdminUsers";
import AdminTransactions from "./AdminTransactions";
import AdminSecurityLogs from "./AdminSecurityLogs";
import AdminReports from "./AdminReports";
import AdminAlerts from "./AdminAlerts";
import { motion, AnimatePresence } from "motion/react";
import { Bell, Search, User, Menu, X } from "lucide-react";

interface AdminDashboardProps {
  onExit: () => void;
}

export default function AdminDashboard({ onExit }: AdminDashboardProps) {
  const [activeSection, setActiveSection] = useState("overview");
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const renderContent = () => {
    switch (activeSection) {
      case "overview":
        return <AdminOverview />;
      case "users":
        return <AdminUsers />;
      case "transactions":
        return <AdminTransactions />;
      case "security":
        return <AdminSecurityLogs />;
      case "reports":
        return <AdminReports />;
      case "alerts":
        return <AdminAlerts />;
      default:
        return (
          <div className="flex flex-col items-center justify-center h-[60vh] text-center space-y-4">
            <div className="w-16 h-16 rounded-full bg-slate-800 flex items-center justify-center">
              <Search className="w-8 h-8 text-slate-600" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-white">Section Under Development</h3>
              <p className="text-slate-400 max-w-xs mx-auto">This part of the admin panel is currently being built. Check back soon!</p>
            </div>
          </div>
        );
    }
  };

  return (
    <div className="min-h-screen bg-[#0f172a] text-slate-200 overflow-x-hidden">
      <AdminSidebar 
        activeSection={activeSection} 
        setActiveSection={setActiveSection} 
        onExit={onExit}
        isOpen={isSidebarOpen}
        onClose={() => setIsSidebarOpen(false)}
      />

      <div className="lg:pl-64 min-h-screen flex flex-col transition-all duration-300">
        {/* Admin Header */}
        <header className="h-20 border-b border-white/5 bg-slate-900/50 backdrop-blur-md sticky top-0 z-40 px-4 md:px-8 flex items-center justify-between">
          <div className="flex items-center gap-3 md:gap-4">
            <button 
              onClick={() => setIsSidebarOpen(true)}
              className="p-2 text-slate-400 hover:text-white lg:hidden"
            >
              <Menu className="w-6 h-6" />
            </button>
            <h1 className="text-sm md:text-lg font-bold text-white uppercase tracking-widest truncate">
              {activeSection}
            </h1>
            <div className="h-4 w-px bg-white/10 hidden sm:block" />
            <p className="text-[10px] md:text-xs text-slate-500 font-medium hidden sm:block">System Status: <span className="text-emerald-500">Operational</span></p>
          </div>

          <div className="flex items-center gap-6">
            <div className="relative hidden md:block">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
              <input 
                type="text" 
                placeholder="Search system..." 
                className="bg-slate-800 border-white/5 rounded-xl pl-10 pr-4 py-2 text-sm focus:ring-emerald-500/20 w-64"
              />
            </div>
            
            <button className="relative p-2 text-slate-400 hover:text-white transition-colors">
              <Bell className="w-5 h-5" />
              <span className="absolute top-2 right-2 w-2 h-2 bg-emerald-500 rounded-full border-2 border-slate-900" />
            </button>

            <div className="flex items-center gap-3 pl-4 border-l border-white/10">
              <div className="text-right hidden sm:block">
                <p className="text-sm font-bold text-white">Admin User</p>
                <p className="text-[10px] text-slate-500 font-bold uppercase tracking-widest">Super Admin</p>
              </div>
              <div className="w-10 h-10 rounded-xl bg-emerald-500 flex items-center justify-center shadow-lg shadow-emerald-500/20">
                <User className="w-6 h-6 text-slate-900" />
              </div>
            </div>
          </div>
        </header>

        {/* Admin Content */}
        <main className="flex-1 p-4 md:p-8">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeSection}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
            >
              {renderContent()}
            </motion.div>
          </AnimatePresence>
        </main>

        {/* Admin Footer */}
        <footer className="p-8 border-t border-white/5 text-center">
          <p className="text-xs text-slate-600 font-medium">
            &copy; 2024 Everstandard Bank Infrastructure. All Rights Reserved.
          </p>
        </footer>
      </div>
    </div>
  );
}
