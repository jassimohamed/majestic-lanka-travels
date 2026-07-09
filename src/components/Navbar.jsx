import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { companyData } from "../data/companyData";
import useScrollPosition from "../hooks/useScrollPosition";
import GlowButton from "./ui/GlowButton";

function Navbar() {
  const scrollY = useScrollPosition();
  const location = useLocation();

  const isScrolled = scrollY > 60;

  const links = [
    ["Home", "/"],
    ["About", "/about"],
    ["Tours", "/tours"],
    ["Fleet", "/fleet"],
    ["Booking", "/booking"],
    ["Contact", "/contact"],
    ["Login", "/login"],
    ["Register", "/register"],
  ];

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-black/85 backdrop-blur-xl border-b border-[#D4AF37]/20 shadow-lg"
          : "bg-black/20 backdrop-blur-sm border-b border-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <Link to="/" className="leading-tight group">
          <h1 className="text-[#D4AF37] text-xl md:text-2xl font-bold group-hover:text-[#F5D76E] transition">
            Majestic Lanka
          </h1>

          <p className="text-white text-xs tracking-widest">
            Travels & Taxi
          </p>
        </Link>

        <div className="hidden lg:flex gap-7 text-white font-medium items-center">
          {links.map(([label, path]) => {
            const active = location.pathname === path;

            return (
              <Link
                key={path}
                to={path}
                className={`relative hover:text-[#D4AF37] transition ${
                  active ? "text-[#D4AF37]" : ""
                }`}
              >
                {label}

                <span
                  className={`absolute left-0 -bottom-2 h-[2px] bg-[#D4AF37] transition-all duration-300 ${
                    active ? "w-full" : "w-0 hover:w-full"
                  }`}
                />
              </Link>
            );
          })}

          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <GlowButton
              variant="gold"
              href={`https://wa.me/${companyData.whatsapp}`}
              className="px-6 py-3"
            >
              WhatsApp
            </GlowButton>
          </motion.div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;