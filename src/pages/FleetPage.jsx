import MainLayout from "../layouts/MainLayout";
import VehicleCard from "../components/VehicleCard";

function FleetPage() {
  return (
    <MainLayout>
      <section className="bg-blue-900 text-white py-32 text-center">
        <h1 className="text-5xl font-bold mb-4">
          Our Vehicle Fleet
        </h1>

        <p className="text-xl">
          Comfortable and reliable transportation across Sri Lanka
        </p>
      </section>

      <section className="py-20 bg-gray-100">
        <div className="max-w-7xl mx-auto px-6">

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

            <VehicleCard
              image="https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=800"
              name="Toyota Prius"
              seats="3"
            />

            <VehicleCard
              image="https://images.unsplash.com/photo-1511919884226-fd3cad34687c?w=800"
              name="Toyota KDH Van"
              seats="10"
            />

            <VehicleCard
              image="https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=800"
              name="Luxury Sedan"
              seats="4"
            />

            <VehicleCard
              image="https://images.unsplash.com/photo-1549399542-7e3f8b79c341?w=800"
              name="Tourist Mini Bus"
              seats="15"
            />

            <VehicleCard
              image="https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=800"
              name="SUV"
              seats="5"
            />

            <VehicleCard
              image="https://images.unsplash.com/photo-1502877338535-766e1452684a?w=800"
              name="Premium Car"
              seats="4"
            />

          </div>

        </div>
      </section>
    </MainLayout>
  );
}

export default FleetPage;