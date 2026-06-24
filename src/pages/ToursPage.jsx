import MainLayout from "../layouts/MainLayout";
import TourCard from "../components/TourCard";

function ToursPage() {
  return (
    <MainLayout>
      <section className="bg-blue-900 text-white py-32 text-center">
        <h1 className="text-5xl font-bold mb-4">
          Sri Lanka Tour Packages
        </h1>

        <p className="text-xl">
          Explore the best destinations in Sri Lanka
        </p>
      </section>

      <section className="py-20 bg-gray-100">
        <div className="max-w-7xl mx-auto px-6">

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

            <TourCard
              image="https://images.unsplash.com/photo-1590736969955-71cc94901144"
              title="Sigiriya Tour"
              duration="1 Day Tour"
              description="Visit the famous Lion Rock Fortress."
            />

            <TourCard
              image="https://images.unsplash.com/photo-1580674285054-bed31e145f59"
              title="Kandy Tour"
              duration="2 Days"
              description="Explore Sri Lanka's cultural capital."
            />

            <TourCard
              image="https://images.unsplash.com/photo-1578662996442-48f60103fc96"
              title="Ella Tour"
              duration="2 Days"
              description="Enjoy mountain views and train journeys."
            />

            <TourCard
              image="https://images.unsplash.com/photo-1564507592333-c60657eea523"
              title="Southern Coast"
              duration="3 Days"
              description="Visit beaches and Galle Fort."
            />

            <TourCard
              image="https://images.unsplash.com/photo-1516939884455-1445c8652f83"
              title="Yala Safari"
              duration="1 Day"
              description="Experience wildlife and leopard safaris."
            />

            <TourCard
              image="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee"
              title="Nuwara Eliya"
              duration="2 Days"
              description="Tea plantations and cool climate."
            />

          </div>

        </div>
      </section>
    </MainLayout>
  );
}

export default ToursPage;