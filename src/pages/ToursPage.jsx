import MainLayout from "../layouts/MainLayout";
import ImageSlider from "../components/ImageSlider";
import { tourData } from "../data/tourData";
import { companyData } from "../data/companyData";
import PremiumCard from "../components/ui/PremiumCard";
import Rating from "../components/ui/Rating";
import Badge from "../components/ui/Badge";
import GlowButton from "../components/ui/GlowButton";

function ToursPage() {
  return (
    <MainLayout>
      <section className="bg-[#050505] text-white pt-36 pb-24 text-center">
        <p className="text-[#D4AF37] uppercase tracking-[5px] mb-4">
          Tour Packages
        </p>

        <h1 className="text-5xl md:text-7xl font-bold">
          Explore Sri Lanka
        </h1>

        <p className="text-gray-400 mt-6 text-xl">
          Private day tours, multi-day adventures and custom travel experiences.
        </p>
      </section>

      <section className="bg-[#111111] py-24 text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {tourData.map((tour) => (
              <PremiumCard key={tour.id} className="p-5">
                <ImageSlider images={tour.images} alt={tour.title} />

                <div className="mt-5 flex justify-between items-center">
                  <Badge>{tour.duration}</Badge>
                  <Rating />
                </div>

                <h3 className="text-2xl font-bold mt-5">
                  {tour.title}
                </h3>

                <p className="text-gray-400 mt-3 leading-relaxed">
                  {tour.description}
                </p>

                <div className="mt-6">
                  <GlowButton
                    href={`https://wa.me/${
                      companyData.contact?.whatsapp || companyData.whatsapp
                    }?text=Hello%20Majestic%20Lanka%20Travels%20%26%20Taxi,%20I%20want%20to%20book%20${encodeURIComponent(
                      tour.title
                    )}`}
                    className="w-full justify-center"
                  >
                    Book via WhatsApp
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

export default ToursPage;