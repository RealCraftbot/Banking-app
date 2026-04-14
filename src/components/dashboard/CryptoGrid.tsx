import { ArrowUpRight } from "lucide-react";
import { Card } from "@/components/ui/card";

const cryptoOptions = [
  {
    id: "btc",
    title: "Bitcoin",
    network: "BTC Network",
    symbol: "BTC",
    icon: "https://cryptologos.cc/logos/bitcoin-btc-logo.png",
  },
  {
    id: "eth",
    title: "Ethereum",
    network: "ETH Network",
    symbol: "ETH",
    icon: "https://cryptologos.cc/logos/ethereum-eth-logo.png",
  },
  {
    id: "usdt",
    title: "Tether",
    network: "USDT (TRC-20)",
    symbol: "USDT",
    icon: "https://cryptologos.cc/logos/tether-usdt-logo.png",
  },
];

interface CryptoGridProps {
  onOptionClick: (coin: any) => void;
}

export default function CryptoGrid({ onOptionClick }: CryptoGridProps) {
  return (
    <div className="space-y-4">
      <h3 className="text-xs font-bold text-slate-400 uppercase tracking-widest">Crypto Transfer</h3>
      <div className="grid grid-cols-3 gap-3">
        {cryptoOptions.map((option) => (
          <Card 
            key={option.id}
            onClick={() => onOptionClick(option)}
            className="p-3 border-slate-100 hover:border-emerald-200 transition-all cursor-pointer flex flex-col items-center text-center gap-2"
          >
            <div className="w-10 h-10 rounded-full bg-slate-50 p-2">
              <img src={option.icon} alt={option.title} className="w-full h-full object-contain" referrerPolicy="no-referrer" />
            </div>
            <div>
              <p className="font-bold text-slate-900 text-[11px]">{option.title}</p>
              <p className="text-[9px] text-slate-400">{option.network}</p>
            </div>
            <div className="mt-1 flex items-center gap-1 text-emerald-600 font-bold text-[10px]">
              <span>Send {option.symbol}</span>
              <ArrowUpRight className="w-3 h-3" />
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
