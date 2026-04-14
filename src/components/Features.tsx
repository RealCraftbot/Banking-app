import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Building2, User, Globe2, Mail, Smartphone, Bell } from "lucide-react";
import { motion } from "motion/react";

const features = [
  {
    title: "Corporate Banking",
    description: "Advanced financial tools and dedicated support for businesses of all sizes.",
    icon: Building2,
    color: "bg-emerald-100 text-emerald-700",
  },
  {
    title: "Personal Banking",
    description: "Flexible accounts and personalized services to help you manage your wealth.",
    icon: User,
    color: "bg-emerald-50 text-emerald-600",
  },
  {
    title: "International Banking",
    description: "Seamless cross-border transactions and multi-currency support.",
    icon: Globe2,
    color: "bg-emerald-100 text-emerald-800",
  },
  {
    title: "Email Notifications",
    description: "Stay informed with real-time email alerts for every transaction.",
    icon: Mail,
    color: "bg-amber-100 text-amber-700",
  },
  {
    title: "Remote Access",
    description: "Manage your finances from anywhere in the world, 24/7.",
    icon: Smartphone,
    color: "bg-purple-100 text-purple-700",
  },
  {
    title: "Instant Notifications",
    description: "Get push notifications on your mobile device for immediate updates.",
    icon: Bell,
    color: "bg-rose-100 text-rose-700",
  },
];

export default function Features() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-emerald-600 font-bold tracking-widest uppercase text-sm mb-4">Our Features</h2>
          <p className="text-4xl font-bold text-emerald-900 mb-6">Choose What's Right for You</p>
          <p className="text-slate-600 max-w-2xl mx-auto">
            We offer a comprehensive suite of banking services designed to meet the evolving needs 
            of our customers in a digital-first world.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="h-full border-slate-100 hover:shadow-xl transition-shadow duration-300 group">
                <CardHeader>
                  <div className={`w-12 h-12 rounded-xl ${feature.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                    <feature.icon className="w-6 h-6" />
                  </div>
                  <CardTitle className="text-xl text-emerald-900">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-slate-600 text-base leading-relaxed">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
