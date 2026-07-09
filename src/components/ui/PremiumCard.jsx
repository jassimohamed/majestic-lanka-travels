import { motion } from "framer-motion";

function PremiumCard({ children, className = "" }) {
  return (
    <motion.div
      whileHover={{ y: -10 }}
      className={`bg-[#181818] border border-[#D4AF37]/20 rounded-2xl overflow-hidden hover:border-[#D4AF37] hover:shadow-[0_0_35px_rgba(212,175,55,0.25)] transition ${className}`}
    >
      {children}
    </motion.div>
  );
}

export default PremiumCard;