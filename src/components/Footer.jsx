import { Link } from "react-router-dom";
import { Phone, Mail, MapPin } from "lucide-react";
import {
  FaFacebookF,
  FaInstagram,
  FaWhatsapp,
  FaYoutube,
} from "react-icons/fa";

import { companyData } from "../data/companyData";

function Footer() {
  return (
    <footer className="bg-[#050505] border-t border-[#D4AF37]/20 text-white">
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid md:grid-cols-4 gap-12">
          <div>
            <h2 className="text-3xl font-bold text-[#D4AF37]">
              Majestic Lanka
            </h2>

            <p className="tracking-[3px] text-sm mb-6">
              Travels & Taxi
            </p>

            <p className="text-gray-400 leading-8">
              Experience luxury travel across Sri Lanka with private tours,
              airport transfers, chauffeur services and unforgettable journeys.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-6 text-[#D4AF37]">
              Quick Links
            </h3>

            <div className="flex flex-col gap-3">
              <Link to="/" className="hover:text-[#D4AF37] transition">Home</Link>
              <Link to="/about" className="hover:text-[#D4AF37] transition">About</Link>
              <Link to="/tours" className="hover:text-[#D4AF37] transition">Tours</Link>
              <Link to="/fleet" className="hover:text-[#D4AF37] transition">Fleet</Link>
              <Link to="/contact" className="hover:text-[#D4AF37] transition">Contact</Link>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-6 text-[#D4AF37]">
              Contact
            </h3>

            <div className="space-y-5">
              <div className="flex items-center gap-3">
                <Phone className="text-[#D4AF37]" size={20} />
                <span>{companyData.contact?.phone || companyData.phone}</span>
              </div>

              <div className="flex items-center gap-3">
                <Mail className="text-[#D4AF37]" size={20} />
                <span>{companyData.contact?.email || companyData.email}</span>
              </div>

              <div className="flex items-center gap-3">
                <MapPin className="text-[#D4AF37]" size={20} />
                <span>{companyData.contact?.address || companyData.address}</span>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-6 text-[#D4AF37]">
              Follow Us
            </h3>

            <div className="flex gap-4">
              <a
                href={companyData.social.facebook || "#"}
                target="_blank"
                rel="noreferrer"
                className="w-12 h-12 rounded-full bg-[#181818] flex items-center justify-center hover:bg-[#D4AF37] hover:text-black transition duration-300 hover:scale-110"
              >
                <FaFacebookF size={18} />
              </a>

              <a
                href={companyData.social.instagram || "#"}
                target="_blank"
                rel="noreferrer"
                className="w-12 h-12 rounded-full bg-[#181818] flex items-center justify-center hover:bg-[#D4AF37] hover:text-black transition duration-300 hover:scale-110"
              >
                <FaInstagram size={18} />
              </a>

              <a
                href={`https://wa.me/${
                  companyData.contact?.whatsapp || companyData.whatsapp
                }`}
                target="_blank"
                rel="noreferrer"
                className="w-12 h-12 rounded-full bg-[#181818] flex items-center justify-center hover:bg-green-500 hover:text-white transition duration-300 hover:scale-110"
              >
                <FaWhatsapp size={20} />
              </a>

              <a
                href={companyData.social.youtube || "#"}
                target="_blank"
                rel="noreferrer"
                className="w-12 h-12 rounded-full bg-[#181818] flex items-center justify-center hover:bg-red-600 hover:text-white transition duration-300 hover:scale-110"
              >
                <FaYoutube size={18} />
              </a>
            </div>

            <p className="text-gray-500 mt-6 leading-7">
              Available 24/7 for airport transfers, luxury tours and chauffeur
              services across Sri Lanka.
            </p>
          </div>
        </div>

        <div className="border-t border-[#D4AF37]/20 mt-16 pt-8 text-center text-gray-500">
          © {new Date().getFullYear()} Majestic Lanka Travels & Taxi. All
          Rights Reserved.
        </div>
      </div>
    </footer>
  );
}

export default Footer;