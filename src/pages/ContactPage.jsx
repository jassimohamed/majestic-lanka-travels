import MainLayout from "../layouts/MainLayout";

function ContactPage() {
  return (
    <MainLayout>
      {/* Hero */}
      <section className="bg-blue-900 text-white py-32 text-center">
        <h1 className="text-5xl font-bold mb-4">
          Contact Us
        </h1>

        <p className="text-xl">
          We'd love to help plan your Sri Lanka journey
        </p>
      </section>

      {/* Contact Info + Form */}
      <section className="py-20 bg-gray-100">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12">

          {/* Company Info */}
          <div>
            <h2 className="text-3xl font-bold mb-6">
              Get In Touch
            </h2>

            <div className="space-y-4 text-lg">
              <p>📞 Phone: +94 XX XXX XXXX</p>
              <p>📧 Email: info@majesticlankatravels.com</p>
              <p>📍 Location: Sri Lanka</p>
              <p>🟢 WhatsApp Available 24/7</p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white p-8 rounded-xl shadow-lg">
            <h3 className="text-2xl font-bold mb-6">
              Send Us a Message
            </h3>

            <form className="space-y-4">

              <input
                type="text"
                placeholder="Your Name"
                className="w-full p-4 border rounded-lg"
              />

              <input
                type="email"
                placeholder="Your Email"
                className="w-full p-4 border rounded-lg"
              />

              <input
                type="text"
                placeholder="Subject"
                className="w-full p-4 border rounded-lg"
              />

              <textarea
                rows="5"
                placeholder="Your Message"
                className="w-full p-4 border rounded-lg"
              ></textarea>

              <button
                type="submit"
                className="bg-amber-500 text-white px-6 py-3 rounded-lg hover:bg-amber-600"
              >
                Send Message
              </button>

            </form>
          </div>

        </div>
      </section>

      {/* Map Placeholder */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="bg-gray-300 h-96 rounded-xl flex items-center justify-center">
            <h3 className="text-2xl font-bold">
              Google Map Coming Soon
            </h3>
          </div>
        </div>
      </section>
    </MainLayout>
  );
}

export default ContactPage;