import MainLayout from "../layouts/MainLayout";
import { motion } from "framer-motion";
import { ShieldCheck, Car, MapPin, Clock } from "lucide-react";
import GlowButton from "../components/ui/GlowButton";
import { companyData } from "../data/companyData";

function AboutPage() {
  const values = [
    { title: "Safe Travel", icon: ShieldCheck },
    { title: "Comfortable Fleet", icon: Car },
    { title: "Islandwide Tours", icon: MapPin },
    { title: "24/7 Service", icon: Clock },
  ];

  return (
    <MainLayout>
      <section className="bg-[#050505] text-white pt-36 pb-24 text-center">
        <p className="text-[#D4AF37] uppercase tracking-[5px] mb-4">
          About Us
        </p>
        <h1 className="text-5xl md:text-7xl font-bold">
          {companyData.name}
        </h1>
        <p className="text-gray-300 text-xl mt-6">
          Your trusted luxury travel partner in Sri Lanka.
        </p>
      </section>

      <section className="bg-[#111111] text-white py-24">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-14 items-center">
          <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <p className="text-[#D4AF37] uppercase tracking-[4px] mb-4">
              Who We Are
            </p>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Luxury Travel Across Beautiful Sri Lanka
            </h2>
            <p className="text-gray-400 leading-8">
              Majestic Lanka Travels & Taxi provides professional airport
              transfers, private tours, chauffeur services and customized travel
              experiences across Sri Lanka with comfort, safety and elegance.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-[#181818] border border-[#D4AF37]/20 rounded-3xl p-8 shadow-[0_0_35px_rgba(212,175,55,0.12)]"
          >
            <h3 className="text-3xl font-bold text-[#D4AF37] mb-6">
              Our Promise
            </h3>
            <p className="text-gray-300 leading-8">
              We focus on clean vehicles, professional drivers, clear
              communication and reliable service, helping every traveler enjoy
              Sri Lanka with confidence.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="bg-[#050505] text-white py-24">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-8">
          <div className="bg-[#181818] border border-[#D4AF37]/20 rounded-3xl p-8">
            <h2 className="text-3xl font-bold text-[#D4AF37] mb-4">
              Our Mission
            </h2>
            <p className="text-gray-400 leading-8">
              To deliver safe, comfortable and memorable travel experiences for
              every visitor exploring Sri Lanka.
            </p>
          </div>

          <div className="bg-[#181818] border border-[#D4AF37]/20 rounded-3xl p-8">
            <h2 className="text-3xl font-bold text-[#D4AF37] mb-4">
              Our Vision
            </h2>
            <p className="text-gray-400 leading-8">
              To become one of Sri Lanka's most trusted private tour and taxi
              service providers.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-[#111111] text-white py-24">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p className="text-[#D4AF37] uppercase tracking-[4px] mb-4">
            Why Travelers Trust Us
          </p>
          <h2 className="text-4xl md:text-5xl font-bold mb-14">
            Built for Comfort, Safety and Trust
          </h2>

          <div className="grid md:grid-cols-4 gap-8">
            {values.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className="bg-[#181818] border border-[#D4AF37]/20 rounded-3xl p-8 hover:border-[#D4AF37] hover:shadow-[0_0_35px_rgba(212,175,55,0.2)] transition"
                >
                  <Icon className="text-[#D4AF37] mx-auto mb-5" size={42} />
                  <h3 className="text-xl font-bold">{item.title}</h3>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-[#050505] text-white py-24 text-center">
        <p className="text-[#D4AF37] uppercase tracking-[4px] mb-4">
          Start Your Journey
        </p>
        <h2 className="text-4xl md:text-6xl font-bold mb-8">
          Ready to Explore Sri Lanka?
        </h2>
        <GlowButton href={`https://wa.me/${companyData.contact?.whatsapp || companyData.whatsapp}`}>
          Book Your Tour Today
        </GlowButton>
      </section>
    </MainLayout>
  );
}

export default AboutPage;