import { motion } from "framer-motion";
import { Car, Users, Star, Clock } from "lucide-react";
import Container from "../common/Container";
import SectionTitle from "../common/SectionTitle";

function StatisticsSection() {
  const stats = [
    { number: "500+", label: "Happy Travelers", icon: Users },
    { number: "120+", label: "Tours Completed", icon: Car },
    { number: "5★", label: "Customer Rating", icon: Star },
    { number: "24/7", label: "Support Available", icon: Clock },
  ];

  return (
    <section className="relative bg-[#050505] text-white py-28 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#050505] via-[#111111] to-[#050505]"></div>

      <Container>
        <div className="relative z-10">
          <SectionTitle
            label="Our Numbers"
            title="Trusted Travel Experience"
            description="Majestic Lanka Travels & Taxi is built around comfort, safety, and reliable service."
          />

          <div className="grid md:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const Icon = stat.icon;

              return (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.7 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -10, scale: 1.03 }}
                  className="bg-white/5 backdrop-blur-md border border-[#D4AF37]/20 rounded-3xl p-8 text-center hover:border-[#D4AF37] hover:shadow-[0_0_35px_rgba(212,175,55,0.25)] transition"
                >
                  <div className="w-16 h-16 mx-auto rounded-2xl bg-[#D4AF37]/10 flex items-center justify-center mb-6">
                    <Icon className="text-[#D4AF37]" size={32} />
                  </div>

                  <h3 className="text-4xl md:text-5xl font-bold text-[#D4AF37] mb-3">
                    {stat.number}
                  </h3>

                  <p className="text-gray-300">
                    {stat.label}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}

export default StatisticsSection;