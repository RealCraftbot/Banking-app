import { 
  X, 
  Mail, 
  Phone, 
  MapPin, 
  Calendar, 
  Shield, 
  ArrowUpRight, 
  ArrowDownLeft, 
  Clock, 
  CheckCircle2, 
  AlertTriangle,
  Globe,
  User,
  CreditCard,
  History,
  Lock,
  Plus,
  Edit2,
  Trash2,
  DollarSign,
  Save,
  Trash
} from "lucide-react";
import { 
  Dialog, 
  DialogContent, 
  DialogHeader, 
  DialogTitle,
  DialogDescription,
  DialogFooter
} from "@/components/ui/dialog";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from "@/components/ui/select";
import { cn } from "@/lib/utils";
import { useState, useEffect } from "react";

interface UserDetailsModalProps {
  user: any;
  isOpen: boolean;
  onClose: () => void;
}

// Mock data for specific user
const mockTransactions = [
  { id: "TX-101", type: "deposit", amount: "$5,000.00", status: "completed", date: "2024-03-10 10:30", method: "Wire Transfer" },
  { id: "TX-102", type: "withdrawal", amount: "$1,200.00", status: "pending", date: "2024-03-12 15:45", method: "Local Bank" },
  { id: "TX-103", type: "transfer", amount: "$450.00", status: "completed", date: "2024-03-14 09:20", method: "Internal" },
];

const mockLogs = [
  { id: "L-1", action: "Login", ip: "192.168.1.45", location: "Lagos, NG", time: "2024-03-15 14:30", status: "success" },
  { id: "L-2", action: "Transfer Attempt", ip: "192.168.1.45", location: "Lagos, NG", time: "2024-03-15 15:10", status: "warning" },
  { id: "L-3", action: "Password Change", ip: "192.168.1.45", location: "Lagos, NG", time: "2024-03-14 11:20", status: "success" },
];

export default function UserDetailsModal({ user, isOpen, onClose }: UserDetailsModalProps) {
  const [userTransactions, setUserTransactions] = useState(mockTransactions);
  const [isAddingTx, setIsAddingTx] = useState(false);
  const [editingTx, setEditingTx] = useState<any>(null);
  const [isAdjustingBalance, setIsAdjustingBalance] = useState(false);
  const [balanceAdjustment, setBalanceAdjustment] = useState({ type: 'credit', amount: '' });

  // New transaction form state
  const [txForm, setTxForm] = useState({
    method: '',
    amount: '',
    type: 'deposit',
    status: 'completed',
    date: new Date().toISOString().split('T')[0] + ' ' + new Date().toLocaleTimeString().slice(0, 5)
  });

  useEffect(() => {
    if (editingTx) {
      setTxForm({
        method: editingTx.method,
        amount: editingTx.amount.replace('$', '').replace(',', ''),
        type: editingTx.type,
        status: editingTx.status,
        date: editingTx.date
      });
    } else {
      setTxForm({
        method: '',
        amount: '',
        type: 'deposit',
        status: 'completed',
        date: new Date().toISOString().split('T')[0] + ' ' + new Date().toLocaleTimeString().slice(0, 5)
      });
    }
  }, [editingTx, isAddingTx]);

  if (!user) return null;

  const handleAddTransaction = () => {
    const newTx = {
      id: `TX-${Math.floor(Math.random() * 10000)}`,
      ...txForm,
      amount: `$${parseFloat(txForm.amount).toLocaleString(undefined, { minimumFractionDigits: 2 })}`
    };
    setUserTransactions([newTx, ...userTransactions]);
    setIsAddingTx(false);
  };

  const handleUpdateTransaction = () => {
    setUserTransactions(userTransactions.map(tx => 
      tx.id === editingTx.id 
        ? { ...tx, ...txForm, amount: `$${parseFloat(txForm.amount).toLocaleString(undefined, { minimumFractionDigits: 2 })}` } 
        : tx
    ));
    setEditingTx(null);
  };

  const handleDeleteTransaction = (id: string) => {
    setUserTransactions(userTransactions.filter(tx => tx.id !== id));
  };

  const handleBalanceAdjustment = () => {
    // In a real app, this would call an API
    const amount = parseFloat(balanceAdjustment.amount);
    if (isNaN(amount)) return;

    const newTx = {
      id: `TX-${Math.floor(Math.random() * 10000)}`,
      type: balanceAdjustment.type === 'credit' ? 'deposit' : 'withdrawal',
      method: 'Admin Adjustment',
      amount: `$${amount.toLocaleString(undefined, { minimumFractionDigits: 2 })}`,
      status: 'completed',
      date: new Date().toISOString().split('T')[0] + ' ' + new Date().toLocaleTimeString().slice(0, 5)
    };

    setUserTransactions([newTx, ...userTransactions]);
    setIsAdjustingBalance(false);
    setBalanceAdjustment({ type: 'credit', amount: '' });
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="!max-w-4xl w-[95vw] max-h-[90vh] overflow-y-auto bg-slate-950 border-white/10 text-white p-0 gap-0 flex flex-col">
        <DialogHeader className="p-6 md:p-8 pb-4 flex flex-row items-center justify-between sticky top-0 bg-slate-950 z-20 border-b border-white/5 w-full">
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center">
              <span className="text-2xl font-bold text-emerald-500">{user.name.charAt(0)}</span>
            </div>
            <div>
              <DialogTitle className="text-2xl font-bold text-white">{user.name}</DialogTitle>
              <DialogDescription className="text-slate-400 flex items-center gap-2">
                User ID: <span className="font-mono text-emerald-500">{user.id}</span>
                <span className="w-1 h-1 rounded-full bg-slate-700" />
                Joined {user.joinDate}
              </DialogDescription>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <span className={cn(
              "px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest",
              user.status === "active" ? "bg-emerald-500/10 text-emerald-500" :
              user.status === "suspended" ? "bg-red-500/10 text-red-500" : "bg-amber-500/10 text-amber-500"
            )}>
              {user.status}
            </span>
          </div>
        </DialogHeader>

        <div className="p-4 md:p-8 space-y-8 flex-1">
          {/* Quick Info Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            <Card className="p-6 bg-slate-900/50 border-white/5 space-y-4">
              <h4 className="text-[10px] font-bold text-slate-500 uppercase tracking-widest flex items-center gap-2">
                <User className="w-3 h-3" />
                Contact Details
              </h4>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <Mail className="w-4 h-4 text-slate-400" />
                  <span className="text-sm text-slate-200">{user.email}</span>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="w-4 h-4 text-slate-400" />
                  <span className="text-sm text-slate-200">{user.phone}</span>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="w-4 h-4 text-slate-400" />
                  <span className="text-sm text-slate-200">{user.location}</span>
                </div>
              </div>
            </Card>

            <Card className="p-6 bg-slate-900/50 border-white/5 space-y-4">
              <div className="flex items-center justify-between">
                <h4 className="text-[10px] font-bold text-slate-500 uppercase tracking-widest flex items-center gap-2">
                  <CreditCard className="w-3 h-3" />
                  Financial Status
                </h4>
                <Button 
                  variant="ghost" 
                  size="sm" 
                  className="h-6 text-[10px] font-bold text-emerald-500 hover:text-emerald-400 hover:bg-emerald-500/10"
                  onClick={() => setIsAdjustingBalance(!isAdjustingBalance)}
                >
                  {isAdjustingBalance ? "Cancel" : "Adjust"}
                </Button>
              </div>
              
              {isAdjustingBalance ? (
                <div className="space-y-3 p-3 bg-slate-950 rounded-xl border border-white/5">
                  <div className="flex gap-2">
                    <Button 
                      size="sm" 
                      variant={balanceAdjustment.type === 'credit' ? 'default' : 'outline'}
                      className={cn("flex-1 h-8 text-[10px]", balanceAdjustment.type === 'credit' && "bg-emerald-600 hover:bg-emerald-700")}
                      onClick={() => setBalanceAdjustment({ ...balanceAdjustment, type: 'credit' })}
                    >
                      Credit
                    </Button>
                    <Button 
                      size="sm" 
                      variant={balanceAdjustment.type === 'debit' ? 'default' : 'outline'}
                      className={cn("flex-1 h-8 text-[10px]", balanceAdjustment.type === 'debit' && "bg-red-600 hover:bg-red-700")}
                      onClick={() => setBalanceAdjustment({ ...balanceAdjustment, type: 'debit' })}
                    >
                      Debit
                    </Button>
                  </div>
                  <div className="relative">
                    <DollarSign className="absolute left-2 top-1/2 -translate-y-1/2 w-3 h-3 text-slate-500" />
                    <Input 
                      type="number"
                      placeholder="Amount"
                      value={balanceAdjustment.amount}
                      onChange={(e) => setBalanceAdjustment({ ...balanceAdjustment, amount: e.target.value })}
                      className="pl-7 h-8 bg-slate-900 border-white/5 text-xs"
                    />
                  </div>
                  <Button 
                    size="sm" 
                    className="w-full h-8 bg-emerald-600 hover:bg-emerald-700 text-[10px] font-bold"
                    onClick={handleBalanceAdjustment}
                  >
                    Apply Adjustment
                  </Button>
                </div>
              ) : (
                <div className="space-y-3">
                  <div>
                    <p className="text-[10px] text-slate-500 uppercase font-bold">Current Balance</p>
                    <p className="text-2xl font-bold text-white">{user.balance}</p>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-slate-400">COT Status</span>
                    <span className={cn(
                      "text-[10px] font-bold px-2 py-0.5 rounded",
                      user.cotActive ? "bg-emerald-500/10 text-emerald-500" : "bg-slate-800 text-slate-500"
                    )}>
                      {user.cotActive ? "ACTIVE" : "INACTIVE"}
                    </span>
                  </div>
                </div>
              )}
            </Card>

            <Card className="p-6 bg-slate-900/50 border-white/5 space-y-4">
              <h4 className="text-[10px] font-bold text-slate-500 uppercase tracking-widest flex items-center gap-2">
                <Shield className="w-3 h-3" />
                Security Overview
              </h4>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs text-slate-400">KYC Status</span>
                  <span className="text-[10px] font-bold text-emerald-500 bg-emerald-500/10 px-2 py-0.5 rounded">VERIFIED</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-slate-400">2FA Enabled</span>
                  <span className="text-[10px] font-bold text-emerald-500 bg-emerald-500/10 px-2 py-0.5 rounded">YES</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-slate-400">Last Login</span>
                  <span className="text-[10px] font-bold text-slate-300">2 hours ago</span>
                </div>
              </div>
            </Card>
          </div>

          {/* Detailed Sections */}
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
            {/* Recent Transactions */}
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-bold text-white flex items-center gap-2">
                  <History className="w-5 h-5 text-emerald-500" />
                  Recent Transactions
                </h3>
                <Button 
                  size="sm" 
                  className="h-8 bg-emerald-600 hover:bg-emerald-700 text-xs font-bold gap-2"
                  onClick={() => {
                    setEditingTx(null);
                    setIsAddingTx(!isAddingTx);
                  }}
                >
                  <Plus className="w-4 h-4" />
                  {isAddingTx ? "Cancel" : "Add New"}
                </Button>
              </div>

              {(isAddingTx || editingTx) && (
                <Card className="p-4 bg-slate-900 border-emerald-500/20 space-y-4">
                  <h4 className="text-sm font-bold text-white">
                    {editingTx ? "Edit Transaction" : "Create New Transaction"}
                  </h4>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-[10px] font-bold text-slate-500 uppercase">Method</label>
                      <Input 
                        placeholder="e.g. Wire Transfer"
                        value={txForm.method}
                        onChange={(e) => setTxForm({ ...txForm, method: e.target.value })}
                        className="h-9 bg-slate-950 border-white/5 text-xs"
                      />
                    </div>
                    <div className="space-y-1.5">
                      <label className="text-[10px] font-bold text-slate-500 uppercase">Amount</label>
                      <Input 
                        type="number"
                        placeholder="0.00"
                        value={txForm.amount}
                        onChange={(e) => setTxForm({ ...txForm, amount: e.target.value })}
                        className="h-9 bg-slate-950 border-white/5 text-xs"
                      />
                    </div>
                    <div className="space-y-1.5">
                      <label className="text-[10px] font-bold text-slate-500 uppercase">Type</label>
                      <Select 
                        value={txForm.type} 
                        onValueChange={(val) => setTxForm({ ...txForm, type: val })}
                      >
                        <SelectTrigger className="h-9 bg-slate-950 border-white/5 text-xs">
                          <SelectValue placeholder="Select type" />
                        </SelectTrigger>
                        <SelectContent className="bg-slate-900 border-white/10 text-white">
                          <SelectItem value="deposit">Deposit</SelectItem>
                          <SelectItem value="withdrawal">Withdrawal</SelectItem>
                          <SelectItem value="transfer">Transfer</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-1.5">
                      <label className="text-[10px] font-bold text-slate-500 uppercase">Status</label>
                      <Select 
                        value={txForm.status} 
                        onValueChange={(val) => setTxForm({ ...txForm, status: val })}
                      >
                        <SelectTrigger className="h-9 bg-slate-950 border-white/5 text-xs">
                          <SelectValue placeholder="Select status" />
                        </SelectTrigger>
                        <SelectContent className="bg-slate-900 border-white/10 text-white">
                          <SelectItem value="completed">Completed</SelectItem>
                          <SelectItem value="pending">Pending</SelectItem>
                          <SelectItem value="failed">Failed</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <Button 
                      className="flex-1 bg-emerald-600 hover:bg-emerald-700 h-9 text-xs font-bold gap-2"
                      onClick={editingTx ? handleUpdateTransaction : handleAddTransaction}
                    >
                      <Save className="w-4 h-4" />
                      {editingTx ? "Update Transaction" : "Save Transaction"}
                    </Button>
                    <Button 
                      variant="outline" 
                      className="h-9 text-xs border-white/10"
                      onClick={() => {
                        setIsAddingTx(false);
                        setEditingTx(null);
                      }}
                    >
                      Cancel
                    </Button>
                  </div>
                </Card>
              )}

              <div className="space-y-3">
                {userTransactions.map((tx) => (
                  <div key={tx.id} className="p-4 rounded-xl bg-white/5 border border-white/5 flex items-center justify-between group/tx">
                    <div className="flex items-center gap-3">
                      <div className={cn(
                        "p-2 rounded-lg",
                        tx.type === "deposit" ? "bg-emerald-500/10" : "bg-red-500/10"
                      )}>
                        {tx.type === "deposit" ? (
                          <ArrowDownLeft className="w-4 h-4 text-emerald-500" />
                        ) : (
                          <ArrowUpRight className="w-4 h-4 text-red-500" />
                        )}
                      </div>
                      <div>
                        <p className="text-sm font-bold text-white">{tx.method}</p>
                        <p className="text-[10px] text-slate-500">{tx.date}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="text-right">
                        <p className={cn(
                          "text-sm font-bold",
                          tx.type === "deposit" ? "text-emerald-500" : "text-white"
                        )}>
                          {tx.type === "deposit" ? "+" : "-"}{tx.amount}
                        </p>
                        <span className="text-[10px] font-bold text-slate-500 uppercase">{tx.status}</span>
                      </div>
                      <div className="flex items-center gap-1 opacity-0 group-hover/tx:opacity-100 transition-opacity">
                        <Button 
                          variant="ghost" 
                          size="icon" 
                          className="h-8 w-8 text-slate-400 hover:text-white hover:bg-white/10"
                          onClick={() => setEditingTx(tx)}
                        >
                          <Edit2 className="w-3.5 h-3.5" />
                        </Button>
                        <Button 
                          variant="ghost" 
                          size="icon" 
                          className="h-8 w-8 text-slate-400 hover:text-red-500 hover:bg-red-500/10"
                          onClick={() => handleDeleteTransaction(tx.id)}
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Security Logs */}
            <div className="space-y-4">
              <h3 className="text-lg font-bold text-white flex items-center gap-2">
                <Lock className="w-5 h-5 text-blue-500" />
                Security Logs
              </h3>
              <div className="space-y-3">
                {mockLogs.map((log) => (
                  <div key={log.id} className="p-4 rounded-xl bg-white/5 border border-white/5 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className={cn(
                        "w-2 h-2 rounded-full",
                        log.status === "success" ? "bg-emerald-500" : "bg-amber-500"
                      )} />
                      <div>
                        <p className="text-sm font-bold text-white">{log.action}</p>
                        <p className="text-[10px] text-slate-500 flex items-center gap-1">
                          <Globe className="w-3 h-3" /> {log.ip} • {log.location}
                        </p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-[10px] text-slate-400 font-mono">{log.time}</p>
                      <span className={cn(
                        "text-[10px] font-bold uppercase",
                        log.status === "success" ? "text-emerald-500" : "text-amber-500"
                      )}>{log.status}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
