import { fleetData } from "../../data/fleetData";
import ImageSlider from "../ImageSlider";
import PremiumCard from "../ui/PremiumCard";
import Rating from "../ui/Rating";
import Badge from "../ui/Badge";
import GlowButton from "../ui/GlowButton";

function FleetPreview() {
  return (
    <section className="bg-[#111111] text-white py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-[#D4AF37] uppercase tracking-[4px] mb-4">
            Our Fleet
          </p>

          <h2 className="text-4xl md:text-5xl font-bold">
            Comfort for Every Journey
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {fleetData.slice(0, 3).map((vehicle) => (
            <PremiumCard key={vehicle.id} className="p-5">
              <ImageSlider images={vehicle.images} alt={vehicle.name} />

              <div className="mt-5 flex justify-between items-center">
                <Badge>{vehicle.type}</Badge>
                <Rating />
              </div>

              <h3 className="text-2xl font-bold mt-5">{vehicle.name}</h3>

              <p className="text-gray-400 mt-3">
                Seats: {vehicle.seats} | AC: {vehicle.ac}
              </p>

              <p className="text-gray-400">
                Luggage: {vehicle.luggage}
              </p>
            </PremiumCard>
          ))}
        </div>

        <div className="text-center mt-12">
          <GlowButton to="/fleet">View Full Fleet</GlowButton>
        </div>
      </div>
    </section>
  );
}

export default FleetPreview;