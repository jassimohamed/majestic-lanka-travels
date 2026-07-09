import { useState } from "react";
import MainLayout from "../layouts/MainLayout";
import { companyData } from "../data/companyData";
import { Mail, MapPin, Phone, Clock } from "lucide-react";
import GlowButton from "../components/ui/GlowButton";
import { isRequired, isEmail, isPhone, onlyNumbers } from "../utils/validationRules";

function ContactPage() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: name === "phone" ? onlyNumbers(value) : value,
    }));
  };

  const handleSubmit = () => {
    const errors = [];

    if (!isRequired(formData.fullName)) errors.push("Full name is required");
    if (!isEmail(formData.email)) errors.push("Enter a valid email address");
    if (!isPhone(formData.phone)) errors.push("Phone must be 9 to 12 numbers");
    if (!isRequired(formData.message)) errors.push("Message is required");

    if (errors.length > 0) {
      alert(errors.join("\n"));
      return;
    }

    const text = `Hello Majestic Lanka Travels & Taxi,

Name: ${formData.fullName}
Email: ${formData.email}
Phone: ${formData.phone}

Message:
${formData.message}`;

    const whatsappNumber = companyData.contact?.whatsapp || companyData.whatsapp;

    window.open(
      `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(text)}`,
      "_blank"
    );
  };

  return (
    <MainLayout>
      <section className="bg-[#050505] text-white pt-36 pb-24 text-center">
        <p className="text-[#D4AF37] uppercase tracking-[5px] mb-4">
          Contact Us
        </p>

        <h1 className="text-5xl md:text-7xl font-bold">
          Let's Plan Your Journey
        </h1>

        <p className="text-gray-400 mt-6 text-xl">
          We're available 24/7 to help you explore Sri Lanka.
        </p>
      </section>

      <section className="bg-[#111111] py-24 text-white">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12">
          <div>
            <h2 className="text-4xl font-bold mb-8">Get In Touch</h2>

            <div className="space-y-6">
              <div className="bg-[#181818] rounded-2xl p-6 border border-[#D4AF37]/20 flex gap-5">
                <Phone className="text-[#D4AF37]" />
                <div>
                  <h3 className="font-bold">Phone</h3>
                  <p>{companyData.contact?.phone || companyData.phone}</p>
                </div>
              </div>

              <div className="bg-[#181818] rounded-2xl p-6 border border-[#D4AF37]/20 flex gap-5">
                <Mail className="text-[#D4AF37]" />
                <div>
                  <h3 className="font-bold">Email</h3>
                  <p>{companyData.contact?.email || companyData.email}</p>
                </div>
              </div>

              <div className="bg-[#181818] rounded-2xl p-6 border border-[#D4AF37]/20 flex gap-5">
                <MapPin className="text-[#D4AF37]" />
                <div>
                  <h3 className="font-bold">Address</h3>
                  <p>{companyData.contact?.address || companyData.address}</p>
                </div>
              </div>

              <div className="bg-[#181818] rounded-2xl p-6 border border-[#D4AF37]/20 flex gap-5">
                <Clock className="text-[#D4AF37]" />
                <div>
                  <h3 className="font-bold">Business Hours</h3>
                  <p>24 Hours / 7 Days</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-[#181818] rounded-3xl border border-[#D4AF37]/20 p-8">
            <h2 className="text-3xl font-bold mb-8">Send a Message</h2>

            <div className="space-y-5">
              <input
                name="fullName"
                type="text"
                placeholder="Full Name"
                value={formData.fullName}
                onChange={handleChange}
                className="w-full bg-[#111111] rounded-xl p-4 outline-none border border-transparent focus:border-[#D4AF37]"
              />

              <input
                name="email"
                type="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                className="w-full bg-[#111111] rounded-xl p-4 outline-none border border-transparent focus:border-[#D4AF37]"
              />

              <input
                name="phone"
                type="tel"
                placeholder="Phone Number"
                value={formData.phone}
                onChange={handleChange}
                maxLength="12"
                className="w-full bg-[#111111] rounded-xl p-4 outline-none border border-transparent focus:border-[#D4AF37]"
              />

              <textarea
                name="message"
                rows="5"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleChange}
                className="w-full bg-[#111111] rounded-xl p-4 outline-none border border-transparent focus:border-[#D4AF37]"
              />

              <button onClick={handleSubmit} className="w-full">
                <GlowButton className="w-full justify-center">
                  Send via WhatsApp
                </GlowButton>
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#050505] py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="h-[400px] rounded-3xl border border-[#D4AF37]/20 bg-[#181818] flex items-center justify-center text-gray-500 text-xl">
            Google Map will be added here
          </div>
        </div>
      </section>
    </MainLayout>
  );
}

export default ContactPage;