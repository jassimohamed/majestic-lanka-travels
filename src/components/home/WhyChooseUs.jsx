import { motion } from "framer-motion";
import { ShieldCheck, Clock, Car, Star } from "lucide-react";

function WhyChooseUs() {
  const items = [
    { title: "Safe & Reliable", icon: ShieldCheck },
    { title: "24/7 Support", icon: Clock },
    { title: "Comfortable Vehicles", icon: Car },
    { title: "Trusted Service", icon: Star },
  ];

  return (
    <section className="bg-[#111111] text-white py-24">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <p className="text-[#D4AF37] uppercase tracking-[4px] mb-4">
          Why Choose Us
        </p>

        <h2 className="text-4xl md:text-5xl font-bold mb-14">
          Travel With Confidence
        </h2>

        <div className="grid md:grid-cols-4 gap-8">
          {items.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-[#181818] border border-[#D4AF37]/20 p-8 rounded-2xl hover:border-[#D4AF37] transition"
              >
                <Icon className="text-[#D4AF37] mx-auto mb-5" size={40} />
                <h3 className="text-xl font-bold">{item.title}</h3>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default WhyChooseUs;