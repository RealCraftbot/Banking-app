import { Home, History, Send, CreditCard, User } from "lucide-react";
import { cn } from "@/lib/utils";

interface BottomNavProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  onTransferClick: () => void;
}

export default function BottomNav({ activeTab, setActiveTab, onTransferClick }: BottomNavProps) {
  const tabs = [
    { id: "home", label: "Home", icon: Home },
    { id: "activity", label: "Activity", icon: History },
    { id: "transfer", label: "Transfer", icon: Send, isSpecial: true },
    { id: "cards", label: "Cards", icon: CreditCard },
    { id: "account", label: "Account", icon: User },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-40 bg-white border-t border-slate-100 px-2 pb-6 pt-2 flex items-center justify-around lg:hidden">
      {tabs.map((tab) => {
        const Icon = tab.icon;
        if (tab.isSpecial) {
          return (
            <button
              key={tab.id}
              onClick={onTransferClick}
              className="relative -top-6 flex flex-col items-center gap-1"
            >
              <div className="w-14 h-14 bg-emerald-800 rounded-2xl flex items-center justify-center shadow-lg shadow-emerald-200 transform rotate-45">
                <Icon className="w-7 h-7 text-white -rotate-45" />
              </div>
              <span className="text-[10px] font-medium text-emerald-800 mt-1">{tab.label}</span>
            </button>
          );
        }

        return (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={cn(
              "flex flex-col items-center gap-1 px-3 py-1 rounded-xl transition-colors",
              activeTab === tab.id ? "text-emerald-800" : "text-slate-400"
            )}
          >
            <div className={cn(
              "p-1 rounded-lg",
              activeTab === tab.id && "bg-emerald-50"
            )}>
              <Icon className="w-6 h-6" />
            </div>
            <span className="text-[10px] font-medium">{tab.label}</span>
          </button>
        );
      })}
    </nav>
  );
}
