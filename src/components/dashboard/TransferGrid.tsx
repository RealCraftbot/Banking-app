import { Landmark, Globe, CreditCard, Wallet } from "lucide-react";
import { Card } from "@/components/ui/card";

const transferOptions = [
  {
    id: "wire",
    title: "Wire Transfer",
    subtitle: "International bank transfer",
    icon: Landmark,
    iconColor: "text-blue-600",
    bgColor: "bg-blue-50",
  },
  {
    id: "local",
    title: "Local Transfer",
    subtitle: "Domestic bank transfer",
    icon: Globe,
    iconColor: "text-purple-600",
    bgColor: "bg-purple-50",
  },
  {
    id: "paypal",
    title: "PayPal",
    subtitle: "Send via PayPal",
    icon: Wallet,
    iconColor: "text-blue-500",
    bgColor: "bg-blue-50",
    logo: "https://www.paypalobjects.com/webstatic/mktg/logo/pp_cc_mark_37x23.jpg"
  },
  {
    id: "skrill",
    title: "Skrill",
    subtitle: "Send via Skrill",
    icon: CreditCard,
    iconColor: "text-purple-800",
    bgColor: "bg-purple-50",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/70/Skrill_logo.svg/1200px-Skrill_logo.svg.png"
  },
];

interface TransferGridProps {
  onOptionClick: (id: string) => void;
}

export default function TransferGrid({ onOptionClick }: TransferGridProps) {
  return (
    <div className="space-y-4">
      <h3 className="text-xs font-bold text-slate-400 uppercase tracking-widest">Send Money</h3>
      <div className="grid grid-cols-2 gap-4">
        {transferOptions.map((option) => (
          <Card 
            key={option.id}
            onClick={() => onOptionClick(option.id)}
            className="p-4 border-slate-100 hover:border-emerald-200 transition-all cursor-pointer group"
          >
            <div className="flex flex-col gap-3">
              <div className={`w-12 h-12 rounded-2xl ${option.bgColor} flex items-center justify-center overflow-hidden`}>
                {option.logo ? (
                  <img src={option.logo} alt={option.title} className="w-8 h-auto object-contain" referrerPolicy="no-referrer" />
                ) : (
                  <option.icon className={`w-6 h-6 ${option.iconColor}`} />
                )}
              </div>
              <div>
                <p className="font-bold text-slate-900 text-sm">{option.title}</p>
                <p className="text-[10px] text-slate-500">{option.subtitle}</p>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
