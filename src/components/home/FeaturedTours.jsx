import { tourData } from "../../data/tourData";
import ImageSlider from "../ImageSlider";
import PremiumCard from "../ui/PremiumCard";
import Rating from "../ui/Rating";
import Badge from "../ui/Badge";
import GlowButton from "../ui/GlowButton";

function FeaturedTours() {
  return (
    <section className="bg-[#050505] text-white py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-[#D4AF37] uppercase tracking-[4px] mb-4">
            Popular Tours
          </p>

          <h2 className="text-4xl md:text-5xl font-bold">
            Explore Sri Lanka
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {tourData.slice(0, 3).map((tour) => (
            <PremiumCard key={tour.id} className="p-5">
              <ImageSlider images={tour.images} alt={tour.title} />

              <div className="mt-5 flex justify-between items-center">
                <Badge>{tour.duration}</Badge>
                <Rating />
              </div>

              <h3 className="text-2xl font-bold mt-5">{tour.title}</h3>

              <p className="text-gray-400 mt-3 leading-relaxed">
                {tour.description}
              </p>
            </PremiumCard>
          ))}
        </div>

        <div className="text-center mt-12">
          <GlowButton to="/tours">View All Tours</GlowButton>
        </div>
      </div>
    </section>
  );
}

export default FeaturedTours;