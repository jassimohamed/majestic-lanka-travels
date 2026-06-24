import MainLayout from "../layouts/MainLayout";
import ImageSlider from "../components/ImageSlider";
import { fleetData } from "../data/fleetData";

function FleetPage() {
  return (
    <MainLayout>
      <section className="bg-blue-900 text-white py-32 text-center">
        <h1 className="text-5xl font-bold mb-4">
          Our Vehicle Fleet
        </h1>

        <p className="text-xl">
          Real vehicles from Majestic Lanka Tours and Taxi
        </p>
      </section>

      <section className="py-20 bg-gray-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {fleetData.map((vehicle) => (
              <div
                key={vehicle.id}
                className="bg-white rounded-xl shadow-lg p-5 hover:shadow-2xl transition"
              >
                <ImageSlider
                  images={vehicle.images}
                  alt={vehicle.name}
                />

                <h3 className="text-2xl font-bold mt-5 mb-2">
                  {vehicle.name}
                </h3>

                <p className="text-gray-600 mb-2">
                  Type: {vehicle.type}
                </p>

                <p className="text-gray-600 mb-2">
                  Seats: {vehicle.seats} Passengers
                </p>

                <p className="text-gray-600 mb-2">
                  AC: {vehicle.ac}
                </p>

                <p className="text-gray-600 mb-4">
                  Luggage: {vehicle.luggage}
                </p>

                <a
                  href="https://wa.me/94703368386"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-block bg-amber-500 text-white px-5 py-3 rounded-lg hover:bg-amber-600"
                >
                  Book via WhatsApp
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>
    </MainLayout>
  );
}

export default FleetPage;