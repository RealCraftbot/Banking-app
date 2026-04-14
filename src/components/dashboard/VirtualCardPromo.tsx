import { CreditCard, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

interface VirtualCardPromoProps {
  onClick?: () => void;
}

export default function VirtualCardPromo({ onClick }: VirtualCardPromoProps) {
  return (
    <Card className="p-8 border-slate-100 flex flex-col items-center text-center gap-4 bg-white">
      <div className="w-16 h-16 rounded-full bg-slate-50 flex items-center justify-center">
        <CreditCard className="w-8 h-8 text-slate-300" />
      </div>
      <div className="space-y-2">
        <h3 className="font-bold text-slate-900">No Cards Yet</h3>
        <p className="text-sm text-slate-500 max-w-[240px]">
          Apply for a virtual card to make secure online payments.
        </p>
      </div>
      <Button 
        onClick={onClick}
        className="bg-emerald-800 hover:bg-emerald-900 text-white rounded-xl px-8 h-12 gap-2 mt-2"
      >
        <Plus className="w-5 h-5" />
        <span className="font-bold">Apply for Card</span>
      </Button>
    </Card>
  );
}
