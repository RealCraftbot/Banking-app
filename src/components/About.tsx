import { Button } from "@/components/ui/button";
import { motion } from "motion/react";
import { Shield, Lock, History, HelpCircle } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function About() {
  return (
    <section className="py-24 bg-slate-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="rounded-3xl overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&q=80&w=1200" 
                alt="Private Banking" 
                className="w-full h-[600px] object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -bottom-10 -right-10 bg-emerald-900 text-white p-10 rounded-3xl shadow-2xl hidden md:block max-w-xs">
              <div className="flex items-center gap-3 mb-4">
                <History className="w-8 h-8 text-emerald-400" />
                <span className="text-2xl font-bold">25+ Years</span>
              </div>
              <p className="text-emerald-100 text-sm">
                Of excellence in providing secure and innovative banking solutions globally.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-emerald-600 font-bold tracking-widest uppercase text-sm mb-4">Discreet & Private Banking</h2>
            <h3 className="text-4xl font-bold text-emerald-900 mb-6">Everstandard Bank Over The Years</h3>
            <p className="text-slate-600 mb-8 text-lg leading-relaxed">
              For over two decades, we have been at the forefront of financial innovation. 
              Our commitment to privacy and security has made us a trusted partner for 
              thousands of individuals and corporations worldwide.
            </p>

            <div className="space-y-6 mb-10">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-emerald-100 flex items-center justify-center">
                  <Lock className="w-6 h-6 text-emerald-700" />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-emerald-900 mb-1">Unmatched Security</h4>
                  <p className="text-slate-600">Your assets are protected by state-of-the-art encryption and multi-layered security protocols.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-emerald-100 flex items-center justify-center">
                  <Shield className="w-6 h-6 text-emerald-700" />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-emerald-900 mb-1">Privacy First</h4>
                  <p className="text-slate-600">We maintain the highest standards of confidentiality for our private banking clients.</p>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="bg-emerald-900 hover:bg-emerald-800 text-white px-8 h-12">Ready to Talk?</Button>
              <Button variant="outline" className="border-slate-200 text-slate-700 px-8 h-12">Have any question?</Button>
            </div>
          </motion.div>
        </div>

        {/* FAQ Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto"
        >
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-100 text-emerald-700 text-sm font-medium mb-4">
              <HelpCircle className="w-4 h-4" />
              <span>Common Questions</span>
            </div>
            <h3 className="text-3xl font-bold text-emerald-900">Frequently Asked Questions</h3>
          </div>

          <Accordion type="single" collapsible className="w-full space-y-4">
            <AccordionItem value="item-1" className="bg-white border border-slate-200 rounded-2xl px-6">
              <AccordionTrigger className="text-emerald-900 font-bold hover:no-underline py-6">
                How long has Everstandard Bank been in operation?
              </AccordionTrigger>
              <AccordionContent className="text-slate-600 text-base pb-6">
                Everstandard Bank has been a leader in the financial industry for over 25 years. 
                Founded on the principles of trust and innovation, we have grown from a boutique 
                private bank to a global institution serving thousands of clients worldwide.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2" className="bg-white border border-slate-200 rounded-2xl px-6">
              <AccordionTrigger className="text-emerald-900 font-bold hover:no-underline py-6">
                What types of accounts do you offer?
              </AccordionTrigger>
              <AccordionContent className="text-slate-600 text-base pb-6">
                We offer a comprehensive range of accounts including Personal Savings, 
                High-Interest Current Accounts, Corporate Business Accounts, and specialized 
                International Multi-Currency accounts. Each is designed with specific features 
                to meet different financial goals.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3" className="bg-white border border-slate-200 rounded-2xl px-6">
              <AccordionTrigger className="text-emerald-900 font-bold hover:no-underline py-6">
                How does Everstandard Bank protect my data?
              </AccordionTrigger>
              <AccordionContent className="text-slate-600 text-base pb-6">
                Security is our top priority. We utilize military-grade end-to-end encryption, 
                multi-factor authentication (MFA), and real-time fraud monitoring systems. 
                Our infrastructure is regularly audited to ensure the highest standards of 
                data protection and privacy are maintained.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
}

