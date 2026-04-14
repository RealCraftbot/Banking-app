import { Bell, Check, CreditCard, Shield, MessageSquare, AlertCircle, X } from "lucide-react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Button, buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useState } from "react";

interface Notification {
  id: string;
  type: "transaction" | "security" | "message" | "alert";
  title: string;
  description: string;
  time: string;
  isRead: boolean;
}

const initialNotifications: Notification[] = [
  {
    id: "1",
    type: "transaction",
    title: "Transaction Successful",
    description: "You sent $50.00 to Sunday Sunday via Local Transfer.",
    time: "2 mins ago",
    isRead: false,
  },
  {
    id: "2",
    type: "security",
    title: "New Login Detected",
    description: "A new login was detected from a Chrome browser on Windows.",
    time: "1 hour ago",
    isRead: false,
  },
  {
    id: "3",
    type: "message",
    title: "Monthly Statement",
    description: "Your account statement for March 2026 is now available for download.",
    time: "5 hours ago",
    isRead: true,
  },
  {
    id: "4",
    type: "alert",
    title: "Security Update",
    description: "We've updated our terms of service regarding international transfers.",
    time: "Yesterday",
    isRead: true,
  },
];

export default function NotificationCenter() {
  const [notifications, setNotifications] = useState<Notification[]>(initialNotifications);
  const unreadCount = notifications.filter(n => !n.isRead).length;

  const markAsRead = (id: string) => {
    setNotifications(prev => prev.map(n => n.id === id ? { ...n, isRead: true } : n));
  };

  const markAllAsRead = () => {
    setNotifications(prev => prev.map(n => ({ ...n, isRead: true })));
  };

  const deleteNotification = (id: string) => {
    setNotifications(prev => prev.filter(n => n.id !== id));
  };

  const getIcon = (type: Notification["type"]) => {
    switch (type) {
      case "transaction": return <CreditCard className="w-4 h-4 text-emerald-600" />;
      case "security": return <Shield className="w-4 h-4 text-amber-600" />;
      case "message": return <MessageSquare className="w-4 h-4 text-blue-600" />;
      case "alert": return <AlertCircle className="w-4 h-4 text-red-600" />;
    }
  };

  const getBgColor = (type: Notification["type"]) => {
    switch (type) {
      case "transaction": return "bg-emerald-50";
      case "security": return "bg-amber-50";
      case "message": return "bg-blue-50";
      case "alert": return "bg-red-50";
    }
  };

  return (
    <Popover>
      <PopoverTrigger className={cn(buttonVariants({ variant: "ghost", size: "icon" }), "relative text-slate-600 hover:bg-slate-50 rounded-full")}>
        <Bell className="w-6 h-6" />
        {unreadCount > 0 && (
          <span className="absolute top-2 right-2 w-2.5 h-2.5 bg-red-500 rounded-full border-2 border-white animate-pulse"></span>
        )}
      </PopoverTrigger>
      <PopoverContent align="end" className="w-80 sm:w-96 p-0 rounded-[2rem] shadow-2xl border-slate-100 overflow-hidden">
        <div className="p-5 bg-white border-b border-slate-50 flex items-center justify-between">
          <div>
            <h3 className="font-bold text-slate-900">Notifications</h3>
            <p className="text-[10px] text-slate-500 font-medium uppercase tracking-wider">
              {unreadCount} Unread Messages
            </p>
          </div>
          {unreadCount > 0 && (
            <Button 
              variant="ghost" 
              size="sm" 
              onClick={markAllAsRead}
              className="text-xs text-emerald-600 hover:text-emerald-700 hover:bg-emerald-50 h-8 px-3 rounded-lg"
            >
              Mark all as read
            </Button>
          )}
        </div>

        <div className="max-h-[400px] overflow-y-auto">
          {notifications.length > 0 ? (
            <div className="divide-y divide-slate-50">
              {notifications.map((n) => (
                <div 
                  key={n.id}
                  className={cn(
                    "p-4 flex gap-4 transition-colors relative group",
                    !n.isRead ? "bg-emerald-50/30" : "hover:bg-slate-50"
                  )}
                  onClick={() => markAsRead(n.id)}
                >
                  <div className={cn(
                    "w-10 h-10 rounded-xl flex items-center justify-center shrink-0",
                    getBgColor(n.type)
                  )}>
                    {getIcon(n.type)}
                  </div>
                  <div className="space-y-1 pr-6">
                    <div className="flex items-center justify-between">
                      <p className={cn(
                        "text-sm font-bold",
                        !n.isRead ? "text-slate-900" : "text-slate-600"
                      )}>
                        {n.title}
                      </p>
                      <span className="text-[10px] text-slate-400 font-medium">{n.time}</span>
                    </div>
                    <p className="text-xs text-slate-500 leading-relaxed">
                      {n.description}
                    </p>
                  </div>
                  
                  <button 
                    onClick={(e) => {
                      e.stopPropagation();
                      deleteNotification(n.id);
                    }}
                    className="absolute top-4 right-4 p-1 opacity-0 group-hover:opacity-100 transition-opacity text-slate-300 hover:text-slate-500"
                  >
                    <X className="w-3.5 h-3.5" />
                  </button>

                  {!n.isRead && (
                    <div className="absolute left-1 top-1/2 -translate-y-1/2 w-1 h-8 bg-emerald-500 rounded-full" />
                  )}
                </div>
              ))}
            </div>
          ) : (
            <div className="p-12 text-center space-y-3">
              <div className="w-16 h-16 bg-slate-50 rounded-full flex items-center justify-center mx-auto">
                <Bell className="w-8 h-8 text-slate-200" />
              </div>
              <div className="space-y-1">
                <p className="font-bold text-slate-900">All caught up!</p>
                <p className="text-xs text-slate-400">No new notifications at the moment.</p>
              </div>
            </div>
          )}
        </div>

        <div className="p-4 bg-slate-50/50 border-t border-slate-50 text-center">
          <Button variant="ghost" className="w-full text-xs font-bold text-slate-500 hover:text-slate-900 rounded-xl">
            View All Activity
          </Button>
        </div>
      </PopoverContent>
    </Popover>
  );
}
