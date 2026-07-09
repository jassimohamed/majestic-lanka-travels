import { motion } from "framer-motion";

function AnimatedCounter({ value, label }) {
  return (
    <motion.div
      whileHover={{ y: -8 }}
      className="text-center"
    >
      <h3 className="text-4xl md:text-5xl font-bold text-[#D4AF37] mb-3">
        {value}
      </h3>

      <p className="text-gray-300">
        {label}
      </p>
    </motion.div>
  );
}

export default AnimatedCounter;