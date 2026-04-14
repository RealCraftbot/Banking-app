import { Shield, Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from "lucide-react";

interface FooterProps {
  onAdminClick?: () => void;
}

export default function Footer({ onAdminClick }: FooterProps) {
  return (
    <footer className="bg-slate-950 text-slate-400 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <div className="bg-emerald-900 p-2 rounded-lg">
                <Shield className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl font-bold text-white tracking-tight">
                Everstandard<span className="text-emerald-500">Bank</span>
              </span>
            </div>
            <p className="text-sm leading-relaxed">
              Providing secure, innovative, and credible banking solutions for individuals 
              and corporations worldwide. Your trusted partner in financial growth.
            </p>
            <div className="flex gap-4">
              <a href="#" className="hover:text-emerald-500 transition-colors"><Facebook className="w-5 h-5" /></a>
              <a href="#" className="hover:text-emerald-500 transition-colors"><Twitter className="w-5 h-5" /></a>
              <a href="#" className="hover:text-emerald-500 transition-colors"><Instagram className="w-5 h-5" /></a>
              <a href="#" className="hover:text-emerald-500 transition-colors"><Linkedin className="w-5 h-5" /></a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Company</h4>
            <ul className="space-y-4 text-sm">
              <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Cookie Policy</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Financial Services</h4>
            <ul className="space-y-4 text-sm">
              <li><a href="#" className="hover:text-white transition-colors">Personal Banking</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Corporate Banking</a></li>
              <li><a href="#" className="hover:text-white transition-colors">International Banking</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Credit Cards</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Loans & Mortgages</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Contact Info</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex gap-3">
                <MapPin className="w-5 h-5 text-emerald-500 flex-shrink-0" />
                <span>123 Financial District, London, UK</span>
              </li>
              <li className="flex gap-3">
                <Phone className="w-5 h-5 text-emerald-500 flex-shrink-0" />
                <span>+44 20 7123 4567</span>
              </li>
              <li className="flex gap-3">
                <Mail className="w-5 h-5 text-emerald-500 flex-shrink-0" />
                <span>support@everstandardb.online</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-900 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs">
          <p>© 2026 Everstandard Bank. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">Privacy</a>
            <a href="#" className="hover:text-white transition-colors">Terms</a>
            <a href="#" className="hover:text-white transition-colors">Cookies</a>
            <button 
              onClick={onAdminClick}
              className="hover:text-emerald-500 transition-colors opacity-50 hover:opacity-100"
            >
              Admin
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
