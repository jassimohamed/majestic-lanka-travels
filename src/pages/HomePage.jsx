import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import DestinationCard from "../components/DestinationCard";
import VehicleCard from "../components/VehicleCard";

function HomePage() {
  return (
    <div>
      <Navbar />

      {/* Hero Section */}
      <div
        className="min-h-screen bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1586861635167-e5223aadc9fe')",
        }}
      >
        <div className="bg-black/50 min-h-screen flex items-center">
          <div className="max-w-6xl mx-auto px-6 text-white">
            <h1 className="text-6xl font-bold mb-6">
              Majestic Lanka Travels & Taxi
            </h1>

            <h2 className="text-3xl mb-4">
              Discover the Beauty of Sri Lanka
            </h2>

            <p className="text-lg max-w-2xl mb-8">
              Airport Transfers, Private Tours, Chauffeur Services,
              and AI-Powered Travel Planning.
            </p>

            <div className="flex gap-4">
              <button className="bg-amber-500 px-6 py-3 rounded-lg font-semibold hover:bg-amber-600 transition">
                Book Now
              </button>

              <button className="bg-white text-black px-6 py-3 rounded-lg font-semibold hover:bg-gray-200 transition">
                Plan My Trip
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Popular Destinations */}
      <section className="py-20 bg-gray-100">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12">
            Popular Destinations
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <DestinationCard
              image="https://images.unsplash.com/photo-1590736969955-71cc94901144"
              title="Sigiriya"
              description="Explore the world-famous Lion Rock Fortress."
            />

            <DestinationCard
              image="https://images.unsplash.com/photo-1580674285054-bed31e145f59"
              title="Kandy"
              description="Visit the cultural capital of Sri Lanka."
            />

            <DestinationCard
              image="https://images.unsplash.com/photo-1578662996442-48f60103fc96"
              title="Ella"
              description="Discover breathtaking mountain scenery."
            />

            <DestinationCard
              image="https://images.unsplash.com/photo-1564507592333-c60657eea523"
              title="Galle"
              description="Walk through the historic Dutch Fort."
            />
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12">
            Why Choose Us
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-gray-100 p-6 rounded-xl text-center hover:shadow-xl transition">
              <h3 className="text-4xl mb-3">🚖</h3>
              <h4 className="font-bold text-lg mb-2">
                Professional Drivers
              </h4>
              <p className="text-gray-600">
                Experienced and friendly chauffeurs for safe travel.
              </p>
            </div>

            <div className="bg-gray-100 p-6 rounded-xl text-center hover:shadow-xl transition">
              <h3 className="text-4xl mb-3">✈️</h3>
              <h4 className="font-bold text-lg mb-2">
                Airport Transfers
              </h4>
              <p className="text-gray-600">
                Reliable pickup and drop-off services across Sri Lanka.
              </p>
            </div>

            <div className="bg-gray-100 p-6 rounded-xl text-center hover:shadow-xl transition">
              <h3 className="text-4xl mb-3">🌴</h3>
              <h4 className="font-bold text-lg mb-2">
                Custom Tours
              </h4>
              <p className="text-gray-600">
                Personalized travel experiences based on your interests.
              </p>
            </div>

            <div className="bg-gray-100 p-6 rounded-xl text-center hover:shadow-xl transition">
              <h3 className="text-4xl mb-3">🕒</h3>
              <h4 className="font-bold text-lg mb-2">
                24/7 Support
              </h4>
              <p className="text-gray-600">
                Assistance whenever you need it during your journey.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Fleet Section */}
      <section className="py-20 bg-gray-100">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12">
            Our Fleet
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <VehicleCard
              image="https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=800"
              name="Sedan Car"
              seats="3"
            />

            <VehicleCard
              image="https://images.unsplash.com/photo-1511919884226-fd3cad34687c?w=800"
              name="SUV"
              seats="5"
            />

            <VehicleCard
              image="https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=800"
              name="Luxury Vehicle"
              seats="4"
            />

            <VehicleCard
              image="https://images.unsplash.com/photo-1549399542-7e3f8b79c341?w=800"
              name="Tourist Van"
              seats="10"
            />
          </div>
        </div>
      </section>
      {/* Testimonials */}
<section className="py-20 bg-white">
  <div className="max-w-7xl mx-auto px-6">
    <h2 className="text-4xl font-bold text-center mb-12">
      What Our Travelers Say
    </h2>

    <div className="grid md:grid-cols-3 gap-8">

      <div className="bg-gray-100 p-6 rounded-xl shadow">
        <p className="mb-4">
          "Amazing service! Our Sri Lanka tour was perfectly organized."
        </p>
        <h4 className="font-bold">- John, UK</h4>
      </div>

      <div className="bg-gray-100 p-6 rounded-xl shadow">
        <p className="mb-4">
          "Professional driver and comfortable vehicle. Highly recommended."
        </p>
        <h4 className="font-bold">- Sarah, Australia</h4>
      </div>

      <div className="bg-gray-100 p-6 rounded-xl shadow">
        <p className="mb-4">
          "Excellent airport transfer and sightseeing experience."
        </p>
        <h4 className="font-bold">- Ahmed, UAE</h4>
      </div>

    </div>
  </div>
</section>
{/* AI Trip Planner */}
<section className="py-20 bg-gradient-to-r from-blue-900 to-blue-700 text-white">
  <div className="max-w-5xl mx-auto px-6 text-center">

    <h2 className="text-4xl font-bold mb-6">
      AI Trip Planner
    </h2>

    <p className="text-xl mb-10">
      Let our AI create your perfect Sri Lanka travel itinerary.
    </p>

    <div className="grid md:grid-cols-3 gap-6">

      <input
        type="text"
        placeholder="Number of Days"
        className="p-4 rounded-lg bg-white text-black"
      />

      <input
        type="text"
        placeholder="Budget"
        className="p-4 rounded-lg bg-white text-black"
      />

      <input
        type="text"
        placeholder="Interests (Beach, Nature, Culture)"
        className="p-4 rounded-lg bg-white text-black"
      />

    </div>

    <button className="mt-8 bg-amber-500 px-8 py-4 rounded-lg font-bold hover:bg-amber-600 transition">
      Generate My Trip
    </button>

  </div>
</section>
<Footer />
    </div>
  );
}

export default HomePage;