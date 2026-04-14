import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { Shield, Menu, X } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";

export default function Navbar({ onLogin, onSignup }: { onLogin?: () => void, onSignup?: () => void }) {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80; // Navbar height
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
    setIsOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center gap-2 cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
            <div className="bg-emerald-900 p-2 rounded-lg">
              <Shield className="w-6 h-6 text-white" />
            </div>
            <span className="text-xl font-bold text-emerald-900 tracking-tight">
              Everstandard<span className="text-emerald-600">Bank</span>
            </span>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-slate-600 hover:text-emerald-900">Personal</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="p-4 w-[400px] grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <h4 className="font-semibold text-emerald-900">Accounts</h4>
                        <ul className="text-sm text-slate-500 space-y-1">
                          <li className="hover:text-emerald-600 cursor-pointer transition-colors" onClick={() => scrollToSection("features")}>Savings Account</li>
                          <li className="hover:text-emerald-600 cursor-pointer transition-colors" onClick={() => scrollToSection("features")}>Current Account</li>
                          <li className="hover:text-emerald-600 cursor-pointer transition-colors" onClick={() => scrollToSection("features")}>Fixed Deposit</li>
                        </ul>
                      </div>
                      <div className="space-y-2">
                        <h4 className="font-semibold text-emerald-900">Cards</h4>
                        <ul className="text-sm text-slate-500 space-y-1">
                          <li className="hover:text-emerald-600 cursor-pointer transition-colors" onClick={() => scrollToSection("features")}>Credit Cards</li>
                          <li className="hover:text-emerald-600 cursor-pointer transition-colors" onClick={() => scrollToSection("features")}>Debit Cards</li>
                          <li className="hover:text-emerald-600 cursor-pointer transition-colors" onClick={() => scrollToSection("features")}>Prepaid Cards</li>
                        </ul>
                      </div>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-slate-600 hover:text-emerald-900">Corporate</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="p-4 w-[400px]">
                      <h4 className="font-semibold text-emerald-900 mb-2">Business Solutions</h4>
                      <p className="text-sm text-slate-500 mb-4">Tailored financial services for your growing enterprise.</p>
                      <ul className="text-sm text-slate-500 space-y-1">
                        <li className="hover:text-emerald-600 cursor-pointer transition-colors" onClick={() => scrollToSection("about")}>Merchant Services</li>
                        <li className="hover:text-emerald-600 cursor-pointer transition-colors" onClick={() => scrollToSection("about")}>Treasury Management</li>
                        <li className="hover:text-emerald-600 cursor-pointer transition-colors" onClick={() => scrollToSection("about")}>Business Loans</li>
                      </ul>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <button 
                    onClick={() => scrollToSection("about")}
                    className="text-slate-600 hover:text-emerald-900 px-4 py-2 text-sm font-medium"
                  >
                    International
                  </button>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
            <div className="flex items-center gap-4">
              <Button 
                variant="ghost" 
                className="text-emerald-900 font-semibold"
                onClick={onLogin}
              >
                Login
              </Button>
              <Button 
                className="bg-emerald-900 hover:bg-emerald-800 text-white px-6"
                onClick={onSignup}
              >
                Open Account
              </Button>
            </div>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="p-2 text-slate-600">
              {isOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-b border-slate-200 overflow-hidden"
          >
            <div className="px-4 pt-2 pb-6 space-y-4">
              <div className="space-y-2">
                <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">Menu</p>
                <button onClick={() => scrollToSection("features")} className="block w-full text-left py-2 text-lg font-medium text-emerald-900">Personal</button>
                <button onClick={() => scrollToSection("about")} className="block w-full text-left py-2 text-lg font-medium text-emerald-900">Corporate</button>
                <button onClick={() => scrollToSection("about")} className="block w-full text-left py-2 text-lg font-medium text-emerald-900">International</button>
              </div>
              <div className="pt-4 flex flex-col gap-3">
                <Button 
                  variant="outline" 
                  className="w-full border-emerald-900 text-emerald-900"
                  onClick={() => {
                    onLogin?.();
                    setIsOpen(false);
                  }}
                >
                  Login
                </Button>
                <Button 
                  className="w-full bg-emerald-900 text-white"
                  onClick={() => {
                    onSignup?.();
                    setIsOpen(false);
                  }}
                >
                  Open Account
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
