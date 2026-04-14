import { useState } from "react";
import DashboardHeader from "./Header";
import BottomNav from "./BottomNav";
import BalanceCard from "./BalanceCard";
import TransferGrid from "./TransferGrid";
import CryptoGrid from "./CryptoGrid";
import VirtualCardPromo from "./VirtualCardPromo";
import TransferModal from "./TransferModal";
import CryptoTransferModal from "./CryptoTransferModal";
import ActivityPage from "./ActivityPage";
import CardsPage from "./CardsPage";
import AccountPage from "./AccountPage";
import { motion, AnimatePresence } from "motion/react";

interface DashboardProps {
  onLogout: () => void;
}

export default function Dashboard({ onLogout }: DashboardProps) {
  const [activeTab, setActiveTab] = useState("home");
  const [isTransferModalOpen, setIsTransferModalOpen] = useState(false);
  const [isCryptoModalOpen, setIsCryptoModalOpen] = useState(false);
  const [transferType, setTransferType] = useState("local");
  const [selectedCoin, setSelectedCoin] = useState<any>(null);

  const handleTransferClick = (type: string = "local") => {
    setTransferType(type);
    setIsTransferModalOpen(true);
  };

  const handleCryptoClick = (coin: any) => {
    setSelectedCoin(coin);
    setIsCryptoModalOpen(true);
  };

  const renderContent = () => {
    switch (activeTab) {
      case "activity":
        return <ActivityPage />;
      case "cards":
        return <CardsPage />;
      case "account":
        return <AccountPage onLogout={onLogout} />;
      default:
        return (
          <div className="grid lg:grid-cols-12 gap-8">
            {/* Left Column: Welcome & Balance */}
            <div className="lg:col-span-8 space-y-8">
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="space-y-1"
              >
                <h1 className="text-3xl font-bold text-slate-900 tracking-tight">
                  Welcome back, <br />
                  <span className="text-emerald-600">Sunday Sunday</span>
                </h1>
                <p className="text-sm text-slate-500">Here's an overview of your account activity.</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.1 }}
              >
                <BalanceCard onFund={() => handleTransferClick("local")} />
              </motion.div>

              <div className="grid md:grid-cols-2 gap-8">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  <TransferGrid onOptionClick={handleTransferClick} />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  <CryptoGrid onOptionClick={handleCryptoClick} />
                </motion.div>
              </div>
            </div>

            {/* Right Column: Cards & Extras */}
            <div className="lg:col-span-4 space-y-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                <VirtualCardPromo onClick={() => setActiveTab("cards")} />
              </motion.div>

              {/* Quick Actions or Recent Activity could go here on desktop */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="p-6 bg-white rounded-[2rem] border border-slate-100 hidden lg:block"
              >
                <h3 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4">Quick Tips</h3>
                <ul className="space-y-4">
                  <li className="flex gap-3 text-sm text-slate-600">
                    <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-1.5 shrink-0" />
                    Enable 2FA for enhanced account security.
                  </li>
                  <li className="flex gap-3 text-sm text-slate-600">
                    <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-1.5 shrink-0" />
                    You can now send crypto to external wallets.
                  </li>
                </ul>
              </motion.div>
            </div>
          </div>
        );
    }
  };

  return (
    <div className="min-h-screen bg-slate-50/50 pb-32">
      <DashboardHeader 
        activeTab={activeTab} 
        setActiveTab={setActiveTab} 
        onLogout={onLogout} 
      />
      
      <main className="max-w-7xl mx-auto px-4 pt-24 pb-20 space-y-8">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
          >
            {renderContent()}
          </motion.div>
        </AnimatePresence>
      </main>

      <BottomNav 
        activeTab={activeTab} 
        setActiveTab={setActiveTab} 
        onTransferClick={() => handleTransferClick()}
      />

      <TransferModal 
        isOpen={isTransferModalOpen} 
        onClose={() => setIsTransferModalOpen(false)} 
        type={transferType}
      />

      <CryptoTransferModal 
        isOpen={isCryptoModalOpen}
        onClose={() => setIsCryptoModalOpen(false)}
        coin={selectedCoin}
      />
    </div>
  );
}
