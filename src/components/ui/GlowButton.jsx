import { Link } from "react-router-dom";
import { motion } from "framer-motion";

function GlowButton({
  children,
  to,
  href,
  variant = "gold",
  className = "",
}) {
  const base =
    "relative overflow-hidden inline-flex items-center justify-center px-8 py-4 rounded-full font-bold transition duration-300 group";

  const variants = {
    gold:
      "bg-[#D4AF37] text-black hover:bg-[#F5D76E] shadow-[0_0_25px_rgba(212,175,55,0.35)]",
    outline:
      "border border-[#D4AF37] text-white hover:bg-[#D4AF37] hover:text-black",
    green:
      "bg-green-500 text-white hover:bg-green-600 shadow-[0_0_25px_rgba(34,197,94,0.35)]",
    dark:
      "bg-[#181818] border border-[#D4AF37]/30 text-white hover:border-[#D4AF37]",
  };

  const content = (
    <>
      <span className="relative z-10">{children}</span>
      <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/50 to-transparent skew-x-12"></span>
    </>
  );

  const classes = `${base} ${variants[variant]} ${className}`;

  if (href) {
    return (
      <motion.a
        whileHover={{ scale: 1.05, y: -2 }}
        whileTap={{ scale: 0.96 }}
        href={href}
        target="_blank"
        rel="noreferrer"
        className={classes}
      >
        {content}
      </motion.a>
    );
  }

  return (
    <motion.div whileHover={{ scale: 1.05, y: -2 }} whileTap={{ scale: 0.96 }}>
      <Link to={to} className={classes}>
        {content}
      </Link>
    </motion.div>
  );
}

export default GlowButton;