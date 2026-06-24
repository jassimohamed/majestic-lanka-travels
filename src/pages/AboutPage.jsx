import MainLayout from "../layouts/MainLayout";

function AboutPage() {
  return (
    <MainLayout>
      {/* Hero */}
      <section className="bg-blue-900 text-white py-32 text-center">
        <h1 className="text-5xl font-bold mb-4">
          About Majestic Lanka Travels & Taxi
        </h1>

        <p className="text-xl">
          Your trusted travel partner in Sri Lanka
        </p>
      </section>

      {/* Company Story */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-bold mb-6">
            Who We Are
          </h2>

          <p className="text-lg text-gray-700">
            Majestic Lanka Travels & Taxi provides professional
            airport transfers, chauffeur services, sightseeing tours,
            and customized travel experiences across Sri Lanka.
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="bg-gray-100 py-20">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-10">

          <div>
            <h2 className="text-3xl font-bold mb-4">
              Our Mission
            </h2>

            <p>
              To deliver safe, comfortable and memorable travel
              experiences for every visitor to Sri Lanka.
            </p>
          </div>

          <div>
            <h2 className="text-3xl font-bold mb-4">
              Our Vision
            </h2>

            <p>
              To become one of Sri Lanka's most trusted tourism and
              transportation service providers.
            </p>
          </div>

        </div>
      </section>

      {/* Services */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">

          <h2 className="text-4xl font-bold text-center mb-12">
            Our Services
          </h2>

          <div className="grid md:grid-cols-3 gap-8">

            <div className="bg-white shadow-lg p-6 rounded-xl">
              <h3 className="text-xl font-bold mb-3">
                Airport Transfers
              </h3>
              <p>Reliable pickup and drop-off services.</p>
            </div>

            <div className="bg-white shadow-lg p-6 rounded-xl">
              <h3 className="text-xl font-bold mb-3">
                Private Tours
              </h3>
              <p>Customized tours around Sri Lanka.</p>
            </div>

            <div className="bg-white shadow-lg p-6 rounded-xl">
              <h3 className="text-xl font-bold mb-3">
                Chauffeur Service
              </h3>
              <p>Comfortable travel with professional drivers.</p>
            </div>

          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="bg-amber-500 py-20 text-center">
        <h2 className="text-4xl font-bold mb-4">
          Ready to Explore Sri Lanka?
        </h2>

        <button className="bg-black text-white px-8 py-4 rounded-lg">
          Book Your Tour Today
        </button>
      </section>
    </MainLayout>
  );
}

export default AboutPage;