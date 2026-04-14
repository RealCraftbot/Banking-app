import { Bell, Menu, User, ChevronDown, LogOut, Settings, Shield, History, HelpCircle, ShieldCheck } from "lucide-react";
import NotificationCenter from "./NotificationCenter";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button, buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface DashboardHeaderProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  onLogout?: () => void;
}

export default function DashboardHeader({ activeTab, setActiveTab, onLogout }: DashboardHeaderProps) {
  return (
    <header className="fixed top-0 left-0 right-0 z-40 bg-white border-b border-slate-100 px-4 h-16 flex items-center justify-between">
      <div className="flex items-center gap-4 lg:gap-8">
        <Button variant="ghost" size="icon" className="text-slate-600 lg:hidden">
          <Menu className="w-6 h-6" />
        </Button>
        <div className="flex items-center gap-1 cursor-pointer" onClick={() => setActiveTab("home")}>
          <span className="text-sm lg:text-base font-bold text-slate-900 tracking-tight uppercase">
            Everstandard <span className="text-emerald-600">Bank</span>
          </span>
        </div>

        {/* Desktop Nav Links */}
        <nav className="hidden lg:flex items-center gap-6 ml-4">
          <Button 
            variant="ghost" 
            onClick={() => setActiveTab("home")}
            className={cn(
              "text-sm font-medium rounded-xl px-4 transition-all",
              activeTab === "home" ? "text-emerald-800 bg-emerald-50 font-bold" : "text-slate-500 hover:text-emerald-800 hover:bg-emerald-50"
            )}
          >
            Home
          </Button>
          <Button 
            variant="ghost" 
            onClick={() => setActiveTab("activity")}
            className={cn(
              "text-sm font-medium rounded-xl px-4 transition-all",
              activeTab === "activity" ? "text-emerald-800 bg-emerald-50 font-bold" : "text-slate-500 hover:text-emerald-800 hover:bg-emerald-50"
            )}
          >
            Activity
          </Button>
          <Button 
            variant="ghost" 
            onClick={() => setActiveTab("cards")}
            className={cn(
              "text-sm font-medium rounded-xl px-4 transition-all",
              activeTab === "cards" ? "text-emerald-800 bg-emerald-50 font-bold" : "text-slate-500 hover:text-emerald-800 hover:bg-emerald-50"
            )}
          >
            Cards
          </Button>
          <Button 
            variant="ghost" 
            onClick={() => setActiveTab("account")}
            className={cn(
              "text-sm font-medium rounded-xl px-4 transition-all",
              activeTab === "account" ? "text-emerald-800 bg-emerald-50 font-bold" : "text-slate-500 hover:text-emerald-800 hover:bg-emerald-50"
            )}
          >
            Account
          </Button>
        </nav>
      </div>

      <div className="flex items-center gap-2">
        <NotificationCenter />

        <DropdownMenu>
          <DropdownMenuTrigger className={cn(buttonVariants({ variant: "ghost" }), "flex items-center gap-2 p-1 hover:bg-slate-50 rounded-full")}>
            <div className="w-8 h-8 rounded-full bg-slate-200 flex items-center justify-center overflow-hidden">
              <User className="w-5 h-5 text-slate-500" />
            </div>
            <ChevronDown className="w-4 h-4 text-slate-400" />
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-72 p-2 rounded-2xl shadow-xl border-slate-100">
            <div className="p-4 flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-slate-100 flex items-center justify-center">
                <User className="w-6 h-6 text-slate-400" />
              </div>
              <div>
                <p className="font-bold text-slate-900">Sunday Sunday</p>
                <p className="text-xs text-slate-500">sunnexobinna@gmail.com</p>
                <div className="mt-1 inline-block px-2 py-0.5 bg-slate-100 rounded text-[10px] font-medium text-slate-600 uppercase">
                  Checking Account
                </div>
              </div>
            </div>
            <DropdownMenuSeparator className="bg-slate-50" />
            <DropdownMenuItem 
              onClick={() => setActiveTab("account")}
              className="flex items-center gap-3 p-3 rounded-xl cursor-pointer focus:bg-slate-50"
            >
              <Settings className="w-5 h-5 text-slate-400" />
              <div className="flex flex-col">
                <span className="font-medium text-slate-900">Account Settings</span>
                <span className="text-[10px] text-slate-500">Manage your profile</span>
              </div>
            </DropdownMenuItem>
            <DropdownMenuItem 
              onClick={() => setActiveTab("account")}
              className="flex items-center gap-3 p-3 rounded-xl cursor-pointer focus:bg-slate-50"
            >
              <Shield className="w-5 h-5 text-slate-400" />
              <div className="flex flex-col">
                <span className="font-medium text-slate-900">Security & PIN</span>
                <span className="text-[10px] text-slate-500">Update your PIN</span>
              </div>
            </DropdownMenuItem>
            <DropdownMenuItem 
              onClick={() => setActiveTab("activity")}
              className="flex items-center gap-3 p-3 rounded-xl cursor-pointer focus:bg-slate-50"
            >
              <History className="w-5 h-5 text-slate-400" />
              <div className="flex flex-col">
                <span className="font-medium text-slate-900">Transaction History</span>
                <span className="text-[10px] text-slate-500">View all activities</span>
              </div>
            </DropdownMenuItem>
            <DropdownMenuItem className="flex items-center gap-3 p-3 rounded-xl cursor-pointer focus:bg-slate-50">
              <HelpCircle className="w-5 h-5 text-slate-400" />
              <div className="flex flex-col">
                <span className="font-medium text-slate-900">Support Center</span>
                <span className="text-[10px] text-slate-500">Get help</span>
              </div>
            </DropdownMenuItem>
            <DropdownMenuSeparator className="bg-slate-50" />
            <DropdownMenuItem 
              onClick={onLogout}
              className="flex items-center gap-3 p-3 rounded-xl cursor-pointer focus:bg-red-50 text-red-600"
            >
              <LogOut className="w-5 h-5" />
              <div className="flex flex-col">
                <span className="font-medium">Log Out</span>
                <span className="text-[10px] opacity-70">Sign out of your account</span>
              </div>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  );
}
