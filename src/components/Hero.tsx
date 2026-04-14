import { Button } from "@/components/ui/button";
import { motion, useScroll, useTransform } from "motion/react";
import { ArrowRight, ShieldCheck, Globe, Zap } from "lucide-react";
import { useRef } from "react";

export default function Hero({ onGetStarted }: { onGetStarted?: () => void }) {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -150]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.9]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  return (
    <section ref={containerRef} className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
      {/* Background Elements */}
      <motion.div 
        style={{ y: y1 }}
        className="absolute top-0 right-0 -z-10 w-1/2 h-full bg-slate-50 rounded-l-[100px] hidden lg:block" 
      />
      <motion.div 
        style={{ y: y2, opacity }}
        className="absolute top-1/4 right-10 -z-10 w-64 h-64 bg-emerald-100 rounded-full blur-3xl opacity-50" 
      />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-100 text-emerald-700 text-sm font-medium mb-6">
              <ShieldCheck className="w-4 h-4" />
              <span>Fully Encrypted & Secure Banking</span>
            </motion.div>
            
            <motion.h1 variants={itemVariants} className="text-5xl lg:text-7xl font-bold text-emerald-900 leading-[1.1] mb-6">
              Credible, Innovative <br />
              <span className="text-emerald-600">and Secured</span> Banking
            </motion.h1>
            
            <motion.p variants={itemVariants} className="text-lg text-slate-600 mb-8 max-w-lg">
              Experience the future of finance with Everstandard Bank. We provide seamless, 
              secure, and innovative banking solutions tailored for your personal and corporate needs.
            </motion.p>
            
            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="bg-emerald-900 hover:bg-emerald-800 text-white h-14 px-8 text-lg group relative overflow-hidden"
                onClick={onGetStarted}
              >
                <motion.span 
                  whileHover={{ x: 5 }}
                  className="flex items-center"
                >
                  Get Started
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </motion.span>
              </Button>
              <Button size="lg" variant="outline" className="h-14 px-8 text-lg border-slate-200 text-slate-700 hover:bg-slate-50 transition-all hover:border-emerald-200">
                Learn More
              </Button>
            </motion.div>

            <motion.div variants={itemVariants} className="mt-12 grid grid-cols-3 gap-8 border-t border-slate-100 pt-8">
              {[
                { label: "Online Support", value: "24/7" },
                { label: "Safe & Secure", value: "100%" },
                { label: "Hidden Fees", value: "0%" },
              ].map((stat, i) => (
                <div key={i}>
                  <p className="text-3xl font-bold text-emerald-900">{stat.value}</p>
                  <p className="text-sm text-slate-500">{stat.label}</p>
                </div>
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            style={{ scale }}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.4 }}
            className="relative"
          >
            <motion.div 
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="relative z-10 rounded-3xl overflow-hidden shadow-2xl border-8 border-white"
            >
              <img 
                src="https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=1200" 
                alt="Modern Banking" 
                className="w-full h-[500px] object-cover"
                referrerPolicy="no-referrer"
              />
            </motion.div>
            
            {/* Floating Card UI */}
            <motion.div 
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              whileHover={{ scale: 1.05, rotate: -2 }}
              className="absolute -bottom-6 -left-6 z-20 bg-white p-6 rounded-2xl shadow-xl border border-slate-100 max-w-[240px] cursor-pointer"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center">
                  <Zap className="w-5 h-5 text-green-600" />
                </div>
                <div>
                  <p className="text-xs text-slate-500">Instant Transfer</p>
                  <p className="text-sm font-bold text-slate-900">Success</p>
                </div>
              </div>
              <div className="space-y-2">
                <div className="h-2 w-full bg-slate-100 rounded-full overflow-hidden">
                  <motion.div 
                    initial={{ width: 0 }}
                    animate={{ width: "75%" }}
                    transition={{ duration: 1.5, delay: 1 }}
                    className="h-full bg-emerald-600" 
                  />
                </div>
                <p className="text-[10px] text-slate-400 text-right">Processing 75%</p>
              </div>
            </motion.div>

            <motion.div 
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              whileHover={{ scale: 1.05, rotate: 2 }}
              className="absolute -top-6 -right-6 z-20 bg-white p-6 rounded-2xl shadow-xl border border-slate-100 cursor-pointer"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-emerald-900 flex items-center justify-center">
                  <Globe className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="text-sm font-bold text-slate-900">Global Access</p>
                  <p className="text-xs text-slate-500">150+ Countries</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

