import { AnimatePresence, motion } from "framer-motion";

function HeroBackgroundSlider({ image }) {
  return (
    <AnimatePresence mode="wait">
      <motion.img
        key={image}
        src={image}
        alt="Sri Lanka"
        initial={{
          opacity: 0,
          scale: 1.12,
        }}
        animate={{
          opacity: 1,
          scale: 1,
        }}
        exit={{
          opacity: 0,
        }}
        transition={{
          duration: 1.5,
        }}
        className="absolute inset-0 w-full h-full object-cover"
      />
    </AnimatePresence>
  );
}

export default HeroBackgroundSlider;