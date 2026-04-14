import { 
  Search, 
  Filter, 
  MoreVertical, 
  Mail, 
  Phone, 
  MapPin, 
  Shield, 
  Ban, 
  CheckCircle2,
  UserPlus,
  Lock,
  Unlock,
  Key,
  ChevronDown
} from "lucide-react";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button, buttonVariants } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useState } from "react";
import { cn } from "@/lib/utils";
import UserDetailsModal from "./UserDetailsModal";
import AddUserModal from "./AddUserModal";

const users = [
  {
    id: "1",
    name: "Sunday Sunday",
    email: "sunnexobinna@gmail.com",
    phone: "+234 812 345 6789",
    location: "Lagos, Nigeria",
    status: "active",
    balance: "$12,450.00",
    joinDate: "Oct 12, 2023",
    cotActive: true,
    avatar: null
  },
  {
    id: "2",
    name: "Sarah Jenkins",
    email: "sarah.j@example.com",
    phone: "+1 202 555 0123",
    location: "London, UK",
    status: "active",
    balance: "$8,200.50",
    joinDate: "Nov 05, 2023",
    cotActive: false,
    avatar: null
  },
  {
    id: "3",
    name: "Michael Chen",
    email: "m.chen@tech.io",
    phone: "+852 2345 6789",
    location: "Hong Kong",
    status: "suspended",
    balance: "$1,100.00",
    joinDate: "Jan 20, 2024",
    cotActive: false,
    avatar: null
  },
  {
    id: "4",
    name: "Elena Rodriguez",
    email: "elena.rod@gmail.com",
    phone: "+34 912 345 678",
    location: "Madrid, Spain",
    status: "on hold",
    balance: "$0.00",
    joinDate: "Feb 28, 2024",
    cotActive: true,
    avatar: null
  },
];

export default function AdminUsers() {
  const [userList, setUserList] = useState(users);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedUser, setSelectedUser] = useState<any>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);

  const handleRowClick = (user: any) => {
    setSelectedUser(user);
    setIsModalOpen(true);
  };

  const handleStatusChange = (userId: string, newStatus: string) => {
    setUserList(prev => prev.map(user => 
      user.id === userId ? { ...user, status: newStatus } : user
    ));
  };

  const toggleCot = (userId: string) => {
    setUserList(prev => prev.map(user => 
      user.id === userId ? { ...user, cotActive: !user.cotActive } : user
    ));
  };

  const handleAddUser = (newUser: any) => {
    setUserList([newUser, ...userList]);
  };

  const filteredUsers = userList.filter(user => 
    user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    user.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h2 className="text-2xl font-bold text-white">User Management</h2>
          <p className="text-sm text-slate-400">View and manage all registered bank users.</p>
        </div>
        <Button 
          onClick={() => setIsAddModalOpen(true)}
          className="bg-emerald-500 hover:bg-emerald-600 text-slate-900 font-bold gap-2 rounded-xl h-11"
        >
          <UserPlus className="w-5 h-5" />
          Add New User
        </Button>
      </div>

      <Card className="bg-slate-900 border-white/10 overflow-hidden">
        <div className="p-4 border-b border-white/10 flex flex-col md:flex-row gap-4">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
            <Input 
              placeholder="Search by name or email..." 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 bg-slate-800 border-white/5 text-white placeholder:text-slate-500 rounded-xl h-11 focus:ring-emerald-500/20"
            />
          </div>
          <div className="flex gap-2">
            <Button variant="outline" className="border-white/10 text-slate-400 hover:text-white hover:bg-white/5 rounded-xl h-11 gap-2">
              <Filter className="w-4 h-4" />
              Filter
            </Button>
            <Button variant="outline" className="border-white/10 text-slate-400 hover:text-white hover:bg-white/5 rounded-xl h-11">
              Export CSV
            </Button>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-white/5 bg-white/5">
                <th className="p-4 text-[10px] font-bold text-slate-400 uppercase tracking-widest">User</th>
                <th className="p-4 text-[10px] font-bold text-slate-400 uppercase tracking-widest">Contact</th>
                <th className="p-4 text-[10px] font-bold text-slate-400 uppercase tracking-widest">Status</th>
                <th className="p-4 text-[10px] font-bold text-slate-400 uppercase tracking-widest">COT</th>
                <th className="p-4 text-[10px] font-bold text-slate-400 uppercase tracking-widest">Balance</th>
                <th className="p-4 text-[10px] font-bold text-slate-400 uppercase tracking-widest">Joined</th>
                <th className="p-4 text-[10px] font-bold text-slate-400 uppercase tracking-widest text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5">
              {filteredUsers.map((user) => (
                <tr 
                  key={user.id} 
                  onClick={() => handleRowClick(user)}
                  className="hover:bg-white/5 transition-colors group cursor-pointer"
                >
                  <td className="p-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center border border-white/10">
                        <span className="text-sm font-bold text-emerald-500">{user.name.charAt(0)}</span>
                      </div>
                      <div>
                        <p className="text-sm font-bold text-white">{user.name}</p>
                        <p className="text-xs text-slate-500 flex items-center gap-1">
                          <MapPin className="w-3 h-3" />
                          {user.location}
                        </p>
                      </div>
                    </div>
                  </td>
                  <td className="p-4">
                    <div className="space-y-1">
                      <p className="text-xs text-slate-300 flex items-center gap-2">
                        <Mail className="w-3 h-3 text-slate-500" />
                        {user.email}
                      </p>
                      <p className="text-xs text-slate-300 flex items-center gap-2">
                        <Phone className="w-3 h-3 text-slate-500" />
                        {user.phone}
                      </p>
                    </div>
                  </td>
                  <td className="p-4">
                    <DropdownMenu>
                      <DropdownMenuTrigger 
                        onClick={(e) => e.stopPropagation()}
                        className="flex items-center gap-2 hover:bg-white/5 p-1 rounded-lg transition-colors group/status focus:outline-none"
                      >
                        <span className={cn(
                          "px-2 py-1 rounded-lg text-[10px] font-bold uppercase tracking-wider",
                          user.status === "active" ? "bg-emerald-500/10 text-emerald-500" :
                          user.status === "suspended" ? "bg-red-500/10 text-red-500" :
                          user.status === "on hold" ? "bg-amber-500/10 text-amber-500" :
                          "bg-slate-500/10 text-slate-500"
                        )}>
                          {user.status}
                        </span>
                        <ChevronDown className="w-3 h-3 text-slate-500 group-hover/status:text-white transition-colors" />
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="start" className="bg-slate-900 border-white/10 text-white w-40 p-1 rounded-xl shadow-2xl">
                        <DropdownMenuItem 
                          onClick={() => handleStatusChange(user.id, "active")}
                          className="flex items-center gap-2 p-2 rounded-lg cursor-pointer hover:bg-emerald-500/10 text-emerald-500"
                        >
                          <CheckCircle2 className="w-4 h-4" />
                          <span className="text-xs font-bold uppercase tracking-wider">Set Active</span>
                        </DropdownMenuItem>
                        <DropdownMenuItem 
                          onClick={() => handleStatusChange(user.id, "on hold")}
                          className="flex items-center gap-2 p-2 rounded-lg cursor-pointer hover:bg-amber-500/10 text-amber-500"
                        >
                          <Lock className="w-4 h-4" />
                          <span className="text-xs font-bold uppercase tracking-wider">Set On Hold</span>
                        </DropdownMenuItem>
                        <DropdownMenuItem 
                          onClick={() => handleStatusChange(user.id, "suspended")}
                          className="flex items-center gap-2 p-2 rounded-lg cursor-pointer hover:bg-red-500/10 text-red-500"
                        >
                          <Ban className="w-4 h-4" />
                          <span className="text-xs font-bold uppercase tracking-wider">Suspend</span>
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </td>
                  <td className="p-4">
                    <button 
                      onClick={(e) => {
                        e.stopPropagation();
                        toggleCot(user.id);
                      }}
                      className="flex items-center gap-2 hover:bg-white/5 p-1 rounded-lg transition-colors group/cot cursor-pointer focus:outline-none"
                    >
                      <div className={cn(
                        "w-2 h-2 rounded-full transition-all",
                        user.cotActive ? "bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.5)]" : "bg-slate-600"
                      )} />
                      <span className="text-[10px] font-bold text-slate-400 uppercase group-hover/cot:text-white transition-colors">
                        {user.cotActive ? "Active" : "Inactive"}
                      </span>
                    </button>
                  </td>
                  <td className="p-4">
                    <p className="text-sm font-bold text-white">{user.balance}</p>
                  </td>
                  <td className="p-4">
                    <p className="text-xs text-slate-400">{user.joinDate}</p>
                  </td>
                  <td className="p-4 text-right">
                    <div onClick={(e) => e.stopPropagation()}>
                      <DropdownMenu>
                        <DropdownMenuTrigger className={cn(buttonVariants({ variant: "ghost", size: "icon" }), "text-slate-500 hover:text-white hover:bg-white/10 rounded-lg focus:outline-none")}>
                          <MoreVertical className="w-4 h-4" />
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end" className="bg-slate-900 border-white/10 text-white w-48 p-1 rounded-xl">
                          <DropdownMenuItem 
                            onClick={() => handleRowClick(user)}
                            className="flex items-center gap-2 p-2 rounded-lg cursor-pointer hover:bg-white/5"
                          >
                            <Shield className="w-4 h-4 text-blue-400" />
                            <span>View Profile</span>
                          </DropdownMenuItem>
                          <DropdownMenuItem className="flex items-center gap-2 p-2 rounded-lg cursor-pointer hover:bg-white/5">
                            <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                            <span>Verify KYC</span>
                          </DropdownMenuItem>
                          <DropdownMenuItem 
                            onClick={() => toggleCot(user.id)}
                            className="flex items-center gap-2 p-2 rounded-lg cursor-pointer hover:bg-white/5"
                          >
                            <Key className="w-4 h-4 text-amber-400" />
                            <span>{user.cotActive ? "Deactivate COT" : "Activate COT"}</span>
                          </DropdownMenuItem>
                          <DropdownMenuItem 
                            onClick={() => handleStatusChange(user.id, user.status === "on hold" ? "active" : "on hold")}
                            className="flex items-center gap-2 p-2 rounded-lg cursor-pointer hover:bg-white/5"
                          >
                            {user.status === "on hold" ? (
                              <>
                                <Unlock className="w-4 h-4 text-emerald-400" />
                                <span>Remove Hold</span>
                              </>
                            ) : (
                              <>
                                <Lock className="w-4 h-4 text-amber-400" />
                                <span>Put on Hold</span>
                              </>
                            )}
                          </DropdownMenuItem>
                          <DropdownMenuItem 
                            onClick={() => handleStatusChange(user.id, "suspended")}
                            className="flex items-center gap-2 p-2 rounded-lg cursor-pointer hover:bg-red-500/10 text-red-400"
                          >
                            <Ban className="w-4 h-4" />
                            <span>Suspend User</span>
                          </DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>

      <UserDetailsModal 
        user={selectedUser} 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />

      <AddUserModal 
        isOpen={isAddModalOpen} 
        onClose={() => setIsAddModalOpen(false)} 
        onSuccess={handleAddUser} 
      />
    </div>
  );
}
