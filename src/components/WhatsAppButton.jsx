import { FaWhatsapp } from "react-icons/fa";
import { motion } from "framer-motion";
import { companyData } from "../data/companyData";

function WhatsAppButton() {
  return (
    <motion.a
      href={`https://wa.me/${
        companyData.contact?.whatsapp || companyData.whatsapp
      }`}
      target="_blank"
      rel="noreferrer"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      whileHover={{
        scale: 1.12,
        rotate: 5,
      }}
      whileTap={{
        scale: 0.95,
      }}
      transition={{
        duration: 0.3,
      }}
      className="fixed bottom-6 right-6 z-[999] group"
    >
      {/* Pulse Ring */}
      <span className="absolute inset-0 rounded-full bg-green-500 animate-ping opacity-20"></span>

      {/* Button */}
      <div className="relative w-16 h-16 rounded-full bg-green-500 flex items-center justify-center shadow-[0_0_25px_rgba(34,197,94,0.45)] transition-all duration-300 group-hover:shadow-[0_0_45px_rgba(34,197,94,0.8)]">
        <FaWhatsapp className="text-white text-3xl" />
      </div>

      {/* Tooltip */}
      <div className="absolute right-20 top-1/2 -translate-y-1/2 bg-[#111111] text-white px-4 py-2 rounded-xl border border-[#D4AF37]/20 opacity-0 group-hover:opacity-100 transition duration-300 whitespace-nowrap shadow-lg">
        Chat with us
      </div>
    </motion.a>
  );
}

export default WhatsAppButton;