/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import About from "./components/About";
import AppPromo from "./components/AppPromo";
import Footer from "./components/Footer";
import Dashboard from "./components/dashboard/Dashboard";
import AdminDashboard from "./components/admin/AdminDashboard";
import AdminLogin from "./components/admin/AdminLogin";
import SignupModal from "./components/SignupModal";
import { motion, useScroll, useSpring } from "motion/react";
import { useState } from "react";

export default function App() {
  const [view, setView] = useState<"landing" | "dashboard" | "admin" | "admin-login">("landing");
  const [isSignupOpen, setIsSignupOpen] = useState(false);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="min-h-screen bg-white font-sans selection:bg-blue-100 selection:text-blue-900">
      {view === "landing" ? (
        <>
          {/* Progress Bar */}
          <motion.div
            className="fixed top-0 left-0 right-0 h-1 bg-emerald-600 z-[60] origin-left"
            style={{ scaleX }}
          />

          <Navbar onLogin={() => setView("dashboard")} onSignup={() => setIsSignupOpen(true)} />
          
          <main>
            <Hero onGetStarted={() => setIsSignupOpen(true)} />
            
            <div id="features">
              <Features />
            </div>

            <div id="about">
              <About />
            </div>

            <section className="py-24 bg-white">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="bg-emerald-50 rounded-[3rem] p-12 lg:p-20 relative overflow-hidden">
                  <div className="relative z-10 max-w-2xl">
                    <h2 className="text-4xl font-bold text-emerald-900 mb-6">Apply for an Account in Minutes</h2>
                    <p className="text-lg text-slate-600 mb-10">
                      Join thousands of satisfied customers who have chosen Everstandard Bank for their 
                      financial journey. Our application process is quick, easy, and entirely digital.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4">
                      <button 
                        onClick={() => setIsSignupOpen(true)}
                        className="bg-emerald-900 hover:bg-emerald-800 text-white px-10 py-4 rounded-xl font-bold transition-all transform hover:scale-105"
                      >
                        Open Your Account Now
                      </button>
                      <button className="bg-white border border-slate-200 text-slate-700 px-10 py-4 rounded-xl font-bold hover:bg-slate-50 transition-all">
                        Contact Sales
                      </button>
                    </div>
                  </div>
                  
                  {/* Decorative elements */}
                  <div className="absolute top-0 right-0 w-1/3 h-full bg-emerald-100/50 -skew-x-12 translate-x-1/2 hidden lg:block" />
                  <div className="absolute bottom-0 right-10 w-64 h-64 bg-emerald-200/30 rounded-full blur-3xl" />
                </div>
              </div>
            </section>

            <AppPromo />
          </main>

          <Footer onAdminClick={() => setView("admin-login")} />

          <SignupModal 
            isOpen={isSignupOpen} 
            onClose={() => setIsSignupOpen(false)} 
            onSuccess={() => setView("dashboard")} 
          />
        </>
      ) : view === "dashboard" ? (
        <Dashboard onLogout={() => setView("landing")} />
      ) : view === "admin-login" ? (
        <AdminLogin onLogin={() => setView("admin")} onBack={() => setView("landing")} />
      ) : (
        <AdminDashboard onExit={() => setView("landing")} />
      )}
    </div>
  );
}

