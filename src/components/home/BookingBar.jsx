import { Calendar, Car, MapPin } from "lucide-react";
import GlowButton from "../ui/GlowButton";

function BookingBar() {
  return (
    <section className="bg-[#050505] text-white px-6 py-12 relative z-20">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8">
          <p className="text-[#D4AF37] uppercase tracking-[4px] text-sm">
            Book Your Trip
          </p>
          <h2 className="text-3xl md:text-4xl font-bold mt-3">
            Start Your Sri Lanka Journey
          </h2>
        </div>

        <div className="bg-[#111111]/95 backdrop-blur-xl border border-[#D4AF37]/20 rounded-3xl shadow-[0_0_40px_rgba(0,0,0,0.6)] p-6">
          <div className="grid md:grid-cols-5 gap-4 items-center">
            <div className="h-14 flex items-center gap-3 bg-[#181818] rounded-2xl px-4 border border-transparent focus-within:border-[#D4AF37] transition">
              <MapPin className="text-[#D4AF37]" size={20} />
              <input
                type="text"
                placeholder="Pickup"
                className="bg-transparent outline-none w-full text-white placeholder-gray-400"
              />
            </div>

            <div className="h-14 flex items-center gap-3 bg-[#181818] rounded-2xl px-4 border border-transparent focus-within:border-[#D4AF37] transition">
              <MapPin className="text-[#D4AF37]" size={20} />
              <input
                type="text"
                placeholder="Destination"
                className="bg-transparent outline-none w-full text-white placeholder-gray-400"
              />
            </div>

            <div className="h-14 flex items-center gap-3 bg-[#181818] rounded-2xl px-4 border border-transparent focus-within:border-[#D4AF37] transition">
              <Calendar className="text-[#D4AF37]" size={20} />
              <input
                type="date"
                className="bg-transparent outline-none w-full text-white"
              />
            </div>

            <div className="h-14 flex items-center gap-3 bg-[#181818] rounded-2xl px-4 border border-transparent focus-within:border-[#D4AF37] transition">
              <Car className="text-[#D4AF37]" size={20} />
              <select className="bg-transparent outline-none w-full text-white">
                <option className="text-black">Select Vehicle</option>
                <option className="text-black">Toyota Prius</option>
                <option className="text-black">Toyota Raize</option>
                <option className="text-black">Honda Vezel</option>
                <option className="text-black">Suzuki Every</option>
              </select>
            </div>

            <div className="h-14">
              <GlowButton to="/contact" className="w-full h-14 px-4">
                Book Now
              </GlowButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default BookingBar;