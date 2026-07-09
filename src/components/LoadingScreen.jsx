import { motion } from "framer-motion";

function LoadingScreen() {
  return (
    <div className="fixed inset-0 bg-[#050505] z-[2000] flex items-center justify-center text-center">
      <div>
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-[#D4AF37] text-4xl md:text-6xl font-bold"
        >
          Majestic Lanka
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="text-white tracking-[6px] mt-4"
        >
          TRAVELS & TAXI
        </motion.p>
      </div>
    </div>
  );
}

export default LoadingScreen;