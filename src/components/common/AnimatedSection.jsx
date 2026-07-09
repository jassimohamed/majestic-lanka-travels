import { motion } from "framer-motion";

function AnimatedSection({ children, className = "" }) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      viewport={{ once: true }}
      className={className}
    >
      {children}
    </motion.section>
  );
}

export default AnimatedSection;