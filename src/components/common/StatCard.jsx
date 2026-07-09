import { motion } from "framer-motion";

function StatCard({ number, label }) {
  return (
    <motion.div
      whileHover={{ y: -8 }}
      className="bg-[#181818] border border-[#D4AF37]/20 rounded-2xl p-8 text-center hover:border-[#D4AF37] transition"
    >
      <h3 className="text-4xl md:text-5xl font-bold text-[#D4AF37] mb-3">
        {number}
      </h3>
      <p className="text-gray-300">{label}</p>
    </motion.div>
  );
}

export default StatCard;