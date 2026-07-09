import MainLayout from "../layouts/MainLayout";
import GlowButton from "../components/ui/GlowButton";

function BookingSuccessPage() {
  return (
    <MainLayout>
      <section className="bg-[#050505] text-white pt-36 pb-24 text-center min-h-screen">
        <p className="text-[#D4AF37] uppercase tracking-[5px] mb-4">
          Booking Request
        </p>

        <h1 className="text-5xl font-bold mb-6">
          Booking Request Ready
        </h1>

        <p className="text-gray-400 mb-8">
          Your booking details are ready. We will confirm availability through WhatsApp.
        </p>

        <GlowButton to="/">
          Back to Home
        </GlowButton>
      </section>
    </MainLayout>
  );
}

export default BookingSuccessPage;