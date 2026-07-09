import MainLayout from "../layouts/MainLayout";
import ImageSlider from "../components/ImageSlider";
import { fleetData } from "../data/fleetData";
import { companyData } from "../data/companyData";

import PremiumCard from "../components/ui/PremiumCard";
import Rating from "../components/ui/Rating";
import Badge from "../components/ui/Badge";
import GlowButton from "../components/ui/GlowButton";

function FleetPage() {
  return (
    <MainLayout>
      {/* Hero */}
      <section className="bg-[#050505] text-white pt-36 pb-24 text-center">
        <p className="text-[#D4AF37] uppercase tracking-[5px] mb-4">
          Our Fleet
        </p>

        <h1 className="text-5xl md:text-7xl font-bold">
          Premium Vehicles
        </h1>

        <p className="text-gray-400 mt-6 text-xl">
          Clean, comfortable and professionally maintained vehicles for every journey.
        </p>
      </section>

      {/* Fleet */}
      <section className="bg-[#111111] py-24 text-white">
        <div className="max-w-7xl mx-auto px-6">

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

            {fleetData.map((vehicle) => (
              <PremiumCard key={vehicle.id} className="p-5">

                <ImageSlider
                  images={vehicle.images}
                  alt={vehicle.name}
                />

                <div className="mt-5 flex justify-between items-center">
                  <Badge>{vehicle.type}</Badge>
                  <Rating />
                </div>

                <h3 className="text-2xl font-bold mt-5">
                  {vehicle.name}
                </h3>

                <div className="mt-5 space-y-2 text-gray-400">

                  <p>
                    👥 Seats : {vehicle.seats}
                  </p>

                  <p>
                    ❄ Air Conditioning : {vehicle.ac}
                  </p>

                  <p>
                    🧳 Luggage : {vehicle.luggage}
                  </p>

                </div>

                <div className="mt-6">

                  <GlowButton
                    href={`https://wa.me/${
                      companyData.contact?.whatsapp || companyData.whatsapp
                    }?text=Hello%20Majestic%20Lanka%20Travels%20%26%20Taxi,%20I%20want%20to%20book%20${encodeURIComponent(
                      vehicle.name
                    )}`}
                    className="w-full justify-center"
                  >
                    Book This Vehicle
                  </GlowButton>

                </div>

              </PremiumCard>
            ))}

          </div>

        </div>
      </section>
    </MainLayout>
  );
}

export default FleetPage;