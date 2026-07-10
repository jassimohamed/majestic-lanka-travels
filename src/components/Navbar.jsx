import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { companyData } from "../data/companyData";
import useScrollPosition from "../hooks/useScrollPosition";
import GlowButton from "./ui/GlowButton";

function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  const whatsappNumber =
    companyData.contact?.whatsapp || companyData.whatsapp;

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        isScrolled || mobileMenuOpen
          ? "bg-black/95 backdrop-blur-xl border-b border-[#D4AF37]/20 shadow-lg"
          : "bg-black/70 backdrop-blur-md border-b border-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-5 md:px-6 py-4 flex justify-between items-center">
        <Link to="/" className="leading-tight group">
          <h1 className="text-[#D4AF37] text-xl md:text-2xl font-bold group-hover:text-[#F5D76E] transition">
            Majestic Lanka
          </h1>

          <p className="text-white text-[10px] md:text-xs tracking-widest">
            Travels & Taxi
          </p>
        </Link>

        {/* Desktop navigation */}
        <div className="hidden lg:flex gap-6 xl:gap-7 text-white font-medium items-center">
          {links.map(([label, path]) => {
            const active = location.pathname === path;

            return (
              <Link
                key={path}
                to={path}
                className={`group relative hover:text-[#D4AF37] transition ${
                  active ? "text-[#D4AF37]" : ""
                }`}
              >
                {label}

                <span
                  className={`absolute left-0 -bottom-2 h-[2px] bg-[#D4AF37] transition-all duration-300 ${
                    active ? "w-full" : "w-0 group-hover:w-full"
                  }`}
                />
              </Link>
            );
          })}

          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <GlowButton
              variant="gold"
              href={`https://wa.me/${whatsappNumber}`}
              className="px-6 py-3"
            >
              WhatsApp
            </GlowButton>
          </motion.div>
        </div>

        {/* Mobile menu button */}
        <button
          type="button"
          onClick={() => setMobileMenuOpen((prev) => !prev)}
          aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={mobileMenuOpen}
          className="lg:hidden text-[#D4AF37] border border-[#D4AF37]/40 rounded-xl p-2 hover:bg-[#D4AF37] hover:text-black transition"
        >
          {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile navigation */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-black/95 border-t border-[#D4AF37]/20">
          <div className="px-6 py-6 space-y-2">
            {links.map(([label, path]) => {
              const active = location.pathname === path;

              return (
                <Link
                  key={path}
                  to={path}
                  className={`block rounded-xl px-4 py-3 font-medium transition ${
                    active
                      ? "bg-[#D4AF37] text-black"
                      : "text-white hover:bg-[#181818] hover:text-[#D4AF37]"
                  }`}
                >
                  {label}
                </Link>
              );
            })}

            <a
              href={`https://wa.me/${whatsappNumber}`}
              target="_blank"
              rel="noreferrer"
              className="block text-center mt-4 bg-green-500 hover:bg-green-600 text-white font-bold rounded-xl px-4 py-4 transition"
            >
              WhatsApp
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;