import MainLayout from "../layouts/MainLayout";
import HomeHero from "../components/home/HomeHero";
import BookingBar from "../components/home/BookingBar";
import ServicesSection from "../components/home/ServicesSection";
import StatisticsSection from "../components/home/StatisticsSection";
import WhyChooseUs from "../components/home/WhyChooseUs";
import FeaturedTours from "../components/home/FeaturedTours";
import FleetPreview from "../components/home/FleetPreview";
import TestimonialsSection from "../components/home/TestimonialsSection";
import HomeCTA from "../components/home/HomeCTA";

function HomePage() {
  return (
    <MainLayout>
      <HomeHero />
      <BookingBar />
      <ServicesSection />
      <StatisticsSection />
      <WhyChooseUs />
      <FeaturedTours />
      <FleetPreview />
      <TestimonialsSection />
      <HomeCTA />
    </MainLayout>
  );
}

export default HomePage;