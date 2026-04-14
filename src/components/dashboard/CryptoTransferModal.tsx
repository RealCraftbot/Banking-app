import { X, Send, QrCode, Shield, ArrowLeft, CheckCircle2, Wallet } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";

interface CryptoTransferModalProps {
  isOpen: boolean;
  onClose: () => void;
  coin: {
    id: string;
    title: string;
    symbol: string;
    network: string;
    icon: string;
  } | null;
}

export default function CryptoTransferModal({ isOpen, onClose, coin }: CryptoTransferModalProps) {
  const [step, setStep] = useState<"form" | "confirm" | "success">("form");
  const [formData, setFormData] = useState({
    walletAddress: "",
    amount: "",
  });

  if (!coin) return null;

  const handleClose = () => {
    setStep("form");
    setFormData({ walletAddress: "", amount: "" });
    onClose();
  };

  const handleContinue = () => setStep("confirm");
  const handleConfirm = () => setStep("success");

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
              <div className="bg-slate-900 p-6 border-b border-white/10 relative">
                <div className="flex items-center gap-4 mb-2">
                  <div className="w-12 h-12 rounded-2xl bg-white p-2 shadow-sm">
                    <img src={coin.icon} alt={coin.title} className="w-full h-full object-contain" referrerPolicy="no-referrer" />
                  </div>
                  <div>
                    <DialogTitle className="text-xl font-bold text-white">Send {coin.title}</DialogTitle>
                    <DialogDescription className="text-xs text-slate-400">Network: {coin.network}</DialogDescription>
                  </div>
                </div>
              </div>

              <div className="p-6 space-y-6">
                <div className="space-y-4">
                  <div className="space-y-1.5">
                    <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest ml-1">Recipient Wallet Address</label>
                    <div className="relative">
                      <Input 
                        placeholder="Paste address here"
                        value={formData.walletAddress}
                        onChange={(e) => setFormData(prev => ({ ...prev, walletAddress: e.target.value }))}
                        className="h-12 pl-4 pr-12 rounded-xl border-slate-100 bg-slate-50/50 focus:ring-emerald-500/20"
                      />
                      <QrCode className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400 cursor-pointer hover:text-emerald-600 transition-colors" />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest ml-1">Amount ({coin.symbol})</label>
                    <div className="relative">
                      <Input 
                        type="number"
                        placeholder="0.00"
                        value={formData.amount}
                        onChange={(e) => setFormData(prev => ({ ...prev, amount: e.target.value }))}
                        className="h-12 pl-4 pr-12 rounded-xl border-slate-100 bg-slate-50/50 focus:ring-emerald-500/20"
                      />
                      <span className="absolute right-4 top-1/2 -translate-y-1/2 text-xs font-bold text-slate-400">{coin.symbol}</span>
                    </div>
                    <p className="text-[10px] text-slate-400 text-right">Balance: 0.45 {coin.symbol}</p>
                  </div>
                </div>

                <Button 
                  onClick={handleContinue}
                  disabled={!formData.walletAddress || !formData.amount}
                  className="w-full h-12 bg-emerald-800 hover:bg-emerald-900 text-white rounded-xl font-bold shadow-lg shadow-emerald-100 disabled:opacity-50"
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
              className="p-8 space-y-6"
            >
              <button 
                onClick={() => setStep("form")}
                className="flex items-center gap-2 text-slate-400 hover:text-slate-900 transition-colors text-xs font-bold uppercase tracking-widest"
              >
                <ArrowLeft className="w-4 h-4" />
                Back
              </button>

              <div className="text-center space-y-2">
                <h3 className="text-2xl font-bold text-slate-900">Confirm Transfer</h3>
                <p className="text-sm text-slate-500">Please review the details below</p>
              </div>

              <div className="p-6 rounded-[2rem] bg-slate-50 border border-slate-100 space-y-4">
                <div className="flex justify-between items-center pb-4 border-b border-slate-200/50">
                  <span className="text-xs text-slate-500">Asset</span>
                  <div className="flex items-center gap-2">
                    <img src={coin.icon} alt="" className="w-4 h-4" referrerPolicy="no-referrer" />
                    <span className="text-sm font-bold text-slate-900">{coin.title}</span>
                  </div>
                </div>
                <div className="flex justify-between items-center pb-4 border-b border-slate-200/50">
                  <span className="text-xs text-slate-500">Amount</span>
                  <span className="text-sm font-bold text-emerald-600">{formData.amount} {coin.symbol}</span>
                </div>
                <div className="space-y-1">
                  <span className="text-xs text-slate-500">Recipient Address</span>
                  <p className="text-[10px] font-mono bg-white p-2 rounded-lg border border-slate-200 break-all">
                    {formData.walletAddress}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3 p-4 rounded-2xl bg-amber-50 border border-amber-100">
                <Shield className="w-5 h-5 text-amber-600 shrink-0" />
                <p className="text-[10px] text-amber-800 leading-relaxed">
                  Crypto transfers are irreversible. Please ensure the recipient address and network are correct.
                </p>
              </div>

              <Button 
                onClick={handleConfirm}
                className="w-full h-12 bg-slate-900 hover:bg-slate-800 text-white rounded-xl font-bold"
              >
                Confirm & Send
              </Button>
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
                <DialogTitle className="text-2xl font-bold text-slate-900">Transfer Initiated!</DialogTitle>
                <DialogDescription className="text-sm text-slate-500">
                  Your transfer of <span className="font-bold text-emerald-600">{formData.amount} {coin.symbol}</span> is being processed on the network.
                </DialogDescription>
              </div>
              <div className="w-full p-4 rounded-2xl bg-slate-50 border border-slate-100 text-xs text-slate-500">
                TX Hash: <span className="font-mono font-bold text-slate-900">0x{Math.random().toString(36).substr(2, 12)}...</span>
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
