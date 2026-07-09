import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import { companyData } from "../../data/companyData";
import { themeImages } from "../../data/themeImages";
import HeroButtons from "./HeroButtons";
import ScrollIndicator from "../ui/ScrollIndicator";

function HomeHero() {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) =>
        prev === themeImages.length - 1 ? 0 : prev + 1
      );
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative h-screen overflow-hidden bg-black">
      <AnimatePresence mode="wait">
        <motion.img
          key={currentImage}
          src={themeImages[currentImage]}
          alt="Beautiful Sri Lanka landscape"
          initial={{ opacity: 0, scale: 1.15 }}
          animate={{ opacity: 1, scale: 1.05 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 2 }}
          className="absolute inset-0 w-full h-full object-cover"
        />
      </AnimatePresence>

      <div className="absolute inset-0 bg-black/70"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/25 to-black"></div>

      <div className="absolute top-1/2 left-1/2 w-[500px] h-[500px] -translate-x-1/2 -translate-y-1/2 bg-[#D4AF37]/10 rounded-full blur-3xl"></div>

      <div className="relative z-10 h-full flex items-center justify-center">
        <div className="text-center px-6 max-w-5xl">
          <motion.p
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.9 }}
            className="text-[#D4AF37] uppercase tracking-[6px] mb-6"
          >
            Welcome to Sri Lanka
          </motion.p>

          <motion.h1
            initial={{ y: 70, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.9 }}
            className="text-white text-5xl md:text-8xl font-bold leading-tight drop-shadow-2xl"
          >
            {companyData.name}
          </motion.h1>

          <motion.p
            initial={{ y: 60, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.45, duration: 0.9 }}
            className="text-gray-200 text-xl md:text-2xl mt-8 max-w-3xl mx-auto"
          >
            Luxury Tours • Airport Transfers • Private Chauffeur •
            Multi-Day Adventures
          </motion.p>

          <motion.div
            initial={{ y: 60, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.9 }}
          >
            <HeroButtons />
          </motion.div>
        </div>
      </div>

      <ScrollIndicator />
    </section>
  );
}

export default HomeHero;