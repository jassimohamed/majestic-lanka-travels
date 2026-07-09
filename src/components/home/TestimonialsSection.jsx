import { motion } from "framer-motion";
import { Star } from "lucide-react";

function TestimonialsSection() {
  const reviews = [
    {
      name: "John Smith",
      country: "United Kingdom",
      text: "Excellent service, clean vehicle and a very friendly driver. Our Sri Lanka tour was smooth and comfortable.",
    },
    {
      name: "Sarah Lee",
      country: "Australia",
      text: "Highly recommended for airport transfers and private tours. Very professional and reliable.",
    },
    {
      name: "Ahmed Khan",
      country: "UAE",
      text: "Great experience from Colombo to Kandy and Ella. The vehicle was comfortable and the service was on time.",
    },
  ];

  return (
    <section className="bg-[#050505] text-white py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-[#D4AF37] uppercase tracking-[4px] mb-4">
            Testimonials
          </p>

          <h2 className="text-4xl md:text-5xl font-bold">
            What Travelers Say
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <motion.div
              key={review.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-[#181818] border border-[#D4AF37]/20 rounded-2xl p-8"
            >
              <div className="flex gap-1 text-[#D4AF37] mb-5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={18} fill="currentColor" />
                ))}
              </div>

              <p className="text-gray-300 leading-relaxed mb-6">
                "{review.text}"
              </p>

              <h3 className="font-bold">{review.name}</h3>
              <p className="text-gray-500">{review.country}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default TestimonialsSection;