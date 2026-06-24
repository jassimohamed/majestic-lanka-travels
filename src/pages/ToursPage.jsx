import MainLayout from "../layouts/MainLayout";
import ImageSlider from "../components/ImageSlider";
import { tourData } from "../data/tourData";

function ToursPage() {
  return (
    <MainLayout>
      <section className="bg-blue-900 text-white py-32 text-center">
        <h1 className="text-5xl font-bold mb-4">
          Sri Lanka Tour Packages
        </h1>

        <p className="text-xl">
          Explore Sri Lanka with Majestic Lanka Tours and Taxi
        </p>
      </section>

      <section className="py-20 bg-gray-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {tourData.map((tour) => (
              <div
                key={tour.id}
                className="bg-white rounded-xl shadow-lg p-5 hover:shadow-2xl transition"
              >
                <ImageSlider images={tour.images} alt={tour.title} />

                <h3 className="text-2xl font-bold mt-5 mb-2">
                  {tour.title}
                </h3>

                <p className="text-amber-600 font-semibold mb-3">
                  {tour.duration}
                </p>

                <p className="text-gray-600 mb-5">
                  {tour.description}
                </p>

                <a
                  href={`https://wa.me/94703368386?text=Hello%20Majestic%20Lanka%20Tours%20and%20Taxi,%20I%20want%20to%20book%20${encodeURIComponent(
                    tour.title
                  )}`}
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

export default ToursPage;