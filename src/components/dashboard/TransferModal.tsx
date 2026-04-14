import { X, Send, Landmark, User, CreditCard, DollarSign, ArrowLeft, CheckCircle2, Shield } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";

interface TransferModalProps {
  isOpen: boolean;
  onClose: () => void;
  type: string;
}

export default function TransferModal({ isOpen, onClose, type }: TransferModalProps) {
  const [step, setStep] = useState<"form" | "confirm" | "success">("form");
  const [formData, setFormData] = useState({
    bankName: "",
    accountName: "",
    accountNumber: "",
    accountType: "",
    amount: "",
  });

  const handleClose = () => {
    setStep("form");
    onClose();
  };

  const handleContinue = () => {
    if (formData.amount && formData.accountNumber) {
      setStep("confirm");
    }
  };

  const handleConfirm = () => {
    setStep("success");
    // In a real app, you'd trigger the API call here
  };

  const bankDisplayNames: Record<string, string> = {
    bank1: "Chase Bank",
    bank2: "Bank of America",
    bank3: "Wells Fargo",
  };

  const getTitle = () => {
    switch (type) {
      case "wire": return "International Wire Transfer";
      case "paypal": return "PayPal Transfer";
      case "skrill": return "Skrill Transfer";
      default: return "Local Bank Transfer";
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={handleClose}>
      <DialogContent className="sm:max-w-[425px] p-0 overflow-hidden rounded-[2rem] border-none shadow-2xl">
        <AnimatePresence mode="wait">
          {step === "form" && (
            <motion.div
              key="form"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
            >
              <div className="bg-emerald-50/50 p-6 border-b border-slate-100 relative">
                <div className="flex items-center gap-4 mb-2">
                  <div className="w-12 h-12 rounded-2xl bg-white flex items-center justify-center shadow-sm">
                    <Send className="w-6 h-6 text-emerald-600" />
                  </div>
                  <div>
                    <DialogTitle className="text-xl font-bold text-slate-900">{getTitle()}</DialogTitle>
                    <DialogDescription className="text-xs text-slate-500">Secure bank transfer</DialogDescription>
                  </div>
                </div>
              </div>

              <div className="p-6 space-y-6 max-h-[80vh] overflow-y-auto">
                {/* Beneficiary Information */}
                <div className="space-y-4">
                  <div className="flex items-center gap-2 text-xs font-bold text-emerald-800 uppercase tracking-widest">
                    <User className="w-4 h-4" />
                    <span>Beneficiary Information</span>
                  </div>
                  
                  <div className="space-y-4 p-4 rounded-2xl border border-slate-100 bg-slate-50/30">
                    <div className="space-y-1.5">
                      <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest ml-1">Bank Name</label>
                      <Select 
                        value={formData.bankName} 
                        onValueChange={(v) => setFormData(prev => ({ ...prev, bankName: v }))}
                      >
                        <SelectTrigger className="h-12 rounded-xl border-slate-100 bg-white focus:ring-emerald-500/20">
                          <SelectValue placeholder="Select your bank" />
                        </SelectTrigger>
                        <SelectContent className="rounded-xl border-slate-100">
                          <SelectItem value="bank1">Chase Bank</SelectItem>
                          <SelectItem value="bank2">Bank of America</SelectItem>
                          <SelectItem value="bank3">Wells Fargo</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest ml-1">Account Holder Name</label>
                      <Input 
                        placeholder="Full name as per bank records" 
                        className="h-12 rounded-xl border-slate-100 bg-white focus:ring-emerald-500/20"
                        value={formData.accountName}
                        onChange={(e) => setFormData(prev => ({ ...prev, accountName: e.target.value }))}
                      />
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-1.5">
                        <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest ml-1">Account Number</label>
                        <Input 
                          placeholder="123456789" 
                          className="h-12 rounded-xl border-slate-100 bg-white focus:ring-emerald-500/20"
                          value={formData.accountNumber}
                          onChange={(e) => setFormData(prev => ({ ...prev, accountNumber: e.target.value }))}
                        />
                      </div>
                      <div className="space-y-1.5">
                        <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest ml-1">Account Type</label>
                        <Select 
                          value={formData.accountType}
                          onValueChange={(v) => setFormData(prev => ({ ...prev, accountType: v }))}
                        >
                          <SelectTrigger className="h-12 rounded-xl border-slate-100 bg-white focus:ring-emerald-500/20">
                            <SelectValue placeholder="Select..." />
                          </SelectTrigger>
                          <SelectContent className="rounded-xl border-slate-100">
                            <SelectItem value="savings">Savings</SelectItem>
                            <SelectItem value="checking">Checking</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Transfer Details */}
                <div className="space-y-4">
                  <div className="flex items-center gap-2 text-xs font-bold text-emerald-800 uppercase tracking-widest">
                    <DollarSign className="w-4 h-4" />
                    <span>Transfer Details</span>
                  </div>
                  
                  <div className="space-y-4 p-4 rounded-2xl border border-emerald-100 bg-emerald-50/20">
                    <div className="space-y-1.5">
                      <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest ml-1">Amount to Transfer</label>
                      <div className="relative">
                        <div className="absolute left-4 top-1/2 -translate-y-1/2 text-xl font-bold text-emerald-800">$</div>
                        <Input 
                          type="number"
                          placeholder="0.00" 
                          className="h-16 pl-10 text-2xl font-bold rounded-xl border-emerald-100 bg-white focus:ring-emerald-500/20"
                          value={formData.amount}
                          onChange={(e) => setFormData(prev => ({ ...prev, amount: e.target.value }))}
                        />
                      </div>
                      <p className="text-[10px] text-slate-400 ml-1">Available: $24,500.00</p>
                    </div>
                  </div>
                </div>

                <Button 
                  onClick={handleContinue}
                  disabled={!formData.amount || !formData.accountNumber}
                  className="w-full h-14 bg-emerald-800 hover:bg-emerald-900 text-white rounded-xl font-bold text-lg shadow-lg shadow-emerald-100"
                >
                  Continue
                </Button>
              </div>
            </motion.div>
          )}

          {step === "confirm" && (
            <motion.div
              key="confirm"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="p-6 space-y-8"
            >
              <div className="flex items-center gap-4">
                <Button 
                  variant="ghost" 
                  size="icon" 
                  onClick={() => setStep("form")}
                  className="rounded-full hover:bg-slate-100"
                >
                  <ArrowLeft className="w-5 h-5 text-slate-600" />
                </Button>
                <div>
                  <DialogTitle className="text-xl font-bold text-slate-900">Review Transfer</DialogTitle>
                  <DialogDescription className="text-xs text-slate-500">Please confirm your transaction details</DialogDescription>
                </div>
              </div>

              <div className="space-y-6">
                <div className="p-6 rounded-[2rem] bg-emerald-50 border border-emerald-100 flex flex-col items-center justify-center text-center space-y-2">
                  <span className="text-xs font-bold text-emerald-600 uppercase tracking-widest">Total Amount</span>
                  <div className="text-4xl font-bold text-emerald-900">${parseFloat(formData.amount).toLocaleString(undefined, { minimumFractionDigits: 2 })}</div>
                </div>

                <div className="space-y-4">
                  <h4 className="text-[10px] font-bold text-slate-400 uppercase tracking-widest ml-1">Beneficiary Details</h4>
                  <div className="space-y-3 p-5 rounded-2xl border border-slate-100 bg-slate-50/50">
                    <div className="flex justify-between items-center">
                      <span className="text-xs text-slate-500">Bank Name</span>
                      <span className="text-sm font-bold text-slate-900">{bankDisplayNames[formData.bankName] || "N/A"}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-xs text-slate-500">Account Name</span>
                      <span className="text-sm font-bold text-slate-900">{formData.accountName || "N/A"}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-xs text-slate-500">Account Number</span>
                      <span className="text-sm font-bold text-slate-900">{formData.accountNumber}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-xs text-slate-500">Account Type</span>
                      <span className="text-sm font-bold text-slate-900 capitalize">{formData.accountType || "N/A"}</span>
                    </div>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-amber-50 border border-amber-100 flex gap-3">
                  <Shield className="w-5 h-5 text-amber-600 shrink-0" />
                  <p className="text-[10px] text-amber-800 leading-relaxed">
                    By clicking confirm, you authorize Everstandard Bank to process this transfer. This action cannot be undone once completed.
                  </p>
                </div>

                <Button 
                  onClick={handleConfirm}
                  className="w-full h-14 bg-emerald-800 hover:bg-emerald-900 text-white rounded-xl font-bold text-lg shadow-lg shadow-emerald-100"
                >
                  Confirm & Send
                </Button>
              </div>
            </motion.div>
          )}

          {step === "success" && (
            <motion.div
              key="success"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="p-8 flex flex-col items-center text-center space-y-6"
            >
              <div className="w-20 h-20 rounded-full bg-emerald-100 flex items-center justify-center">
                <CheckCircle2 className="w-10 h-10 text-emerald-600" />
              </div>
              <div className="space-y-2">
                <DialogTitle className="text-2xl font-bold text-slate-900">Transfer Successful!</DialogTitle>
                <DialogDescription className="text-sm text-slate-500">
                  Your transfer of <span className="font-bold text-emerald-600">${parseFloat(formData.amount).toLocaleString()}</span> has been processed successfully.
                </DialogDescription>
              </div>
              <div className="w-full p-4 rounded-2xl bg-slate-50 border border-slate-100 text-xs text-slate-500">
                Transaction ID: <span className="font-mono font-bold text-slate-900">TXN-{Math.random().toString(36).substr(2, 9).toUpperCase()}</span>
              </div>
              <Button 
                onClick={handleClose}
                className="w-full h-12 bg-slate-900 hover:bg-slate-800 text-white rounded-xl font-bold"
              >
                Done
              </Button>
            </motion.div>
          )}
        </AnimatePresence>
      </DialogContent>
    </Dialog>
  );
}
