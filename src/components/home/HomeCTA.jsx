import { Link } from "react-router-dom";
import { companyData } from "../../data/companyData";

function HomeCTA() {
  return (
    <section className="bg-[#111111] text-white py-24">
      <div className="max-w-5xl mx-auto px-6 text-center">
        <p className="text-[#D4AF37] uppercase tracking-[4px] mb-4">
          Start Your Journey
        </p>

        <h2 className="text-4xl md:text-6xl font-bold mb-6">
          Ready to Explore Sri Lanka?
        </h2>

        <p className="text-gray-400 text-lg mb-10">
          Contact Majestic Lanka Travels & Taxi today for airport transfers,
          private tours, multi-day adventures and chauffeur services.
        </p>

        <div className="flex flex-wrap justify-center gap-4">
          <a
            href={`https://wa.me/${companyData.whatsapp}`}
            target="_blank"
            rel="noreferrer"
            className="bg-[#D4AF37] text-black px-8 py-4 rounded-full font-bold hover:bg-[#F5D76E] transition"
          >
            Chat on WhatsApp
          </a>

          <Link
            to="/contact"
            className="border border-[#D4AF37] text-white px-8 py-4 rounded-full hover:bg-[#D4AF37] hover:text-black transition"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </section>
  );
}

export default HomeCTA;