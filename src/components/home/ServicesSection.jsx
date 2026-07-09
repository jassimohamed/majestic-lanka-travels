import { motion } from "framer-motion";
import { servicesData } from "../../data/servicesData";
import SectionTitle from "../common/SectionTitle";
import Container from "../common/Container";

function ServicesSection() {
  return (
    <section className="relative bg-[#050505] text-white py-28 overflow-hidden">
      <div className="absolute top-20 left-10 w-72 h-72 bg-[#D4AF37]/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#D4AF37]/5 rounded-full blur-3xl"></div>

      <Container>
        <SectionTitle
          label="Our Services"
          title="Travel Sri Lanka in Luxury"
          description="Premium transport and private travel experiences designed for comfort, safety, and unforgettable journeys."
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10">
          {servicesData.map((service, index) => {
            const Icon = service.icon;

            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.7 }}
                viewport={{ once: true }}
                whileHover={{ y: -12, scale: 1.02 }}
                className="group bg-white/5 backdrop-blur-md border border-[#D4AF37]/20 p-8 rounded-3xl hover:border-[#D4AF37] hover:shadow-[0_0_40px_rgba(212,175,55,0.25)] transition duration-500"
              >
                <div className="w-16 h-16 rounded-2xl bg-[#D4AF37]/10 flex items-center justify-center mb-7 group-hover:bg-[#D4AF37] transition duration-500">
                  <Icon
                    className="text-[#D4AF37] group-hover:text-black transition duration-500 group-hover:scale-110"
                    size={30}
                  />
                </div>

                <h3 className="text-2xl font-bold mb-4 group-hover:text-[#D4AF37] transition">
                  {service.title}
                </h3>

                <p className="text-gray-400 leading-relaxed">
                  {service.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}

export default ServicesSection;