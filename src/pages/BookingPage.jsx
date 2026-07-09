import MainLayout from "../layouts/MainLayout";
import BookingForm from "../components/booking/BookingForm";
import BookingSummary from "../components/booking/BookingSummary";
import BookingSteps from "../components/booking/BookingSteps";
import useBookingStep from "../hooks/useBookingStep";
import useBooking from "../hooks/useBooking";
import { validateBooking } from "../utils/validateBooking";

function BookingPage() {
  const { currentStep, nextStep, previousStep } = useBookingStep();
  const { booking } = useBooking();

  const handleNext = () => {
    if (currentStep === 1) {
      const errors = validateBooking(booking);

      if (errors.length > 0) {
        alert(errors.join("\n"));
        return;
      }
    }

    nextStep();
  };

  return (
    <MainLayout>
      <section className="bg-[#050505] text-white pt-36 pb-24 text-center">
        <p className="text-[#D4AF37] uppercase tracking-[5px]">Booking</p>

        <h1 className="text-5xl md:text-7xl font-bold mt-4">
          Book Your Journey
        </h1>

        <p className="text-gray-400 text-xl mt-6">
          Request your tour, airport transfer or private chauffeur service.
        </p>
      </section>

      <section className="bg-[#111111] text-white py-24">
        <div className="max-w-7xl mx-auto px-6">
          <BookingSteps />

          {currentStep === 1 && <BookingForm />}

          {currentStep === 2 && <BookingSummary />}

          {currentStep === 3 && (
            <div className="bg-[#181818] border border-[#D4AF37]/20 rounded-3xl p-10 text-center max-w-3xl mx-auto">
              <h2 className="text-4xl font-bold text-[#D4AF37] mb-4">
                Confirm Your Booking
              </h2>

              <p className="text-gray-300 mb-8">
                Please review your booking details and send the request via WhatsApp.
              </p>

              <BookingSummary />
            </div>
          )}

          <div className="flex justify-center gap-4 mt-10">
            {currentStep > 1 && (
              <button
                onClick={previousStep}
                className="px-8 py-4 rounded-full border border-[#D4AF37] text-white hover:bg-[#D4AF37] hover:text-black transition"
              >
                Previous
              </button>
            )}

            {currentStep < 3 && (
              <button
                onClick={handleNext}
                className="px-8 py-4 rounded-full bg-[#D4AF37] text-black font-bold hover:bg-[#F5D76E] transition"
              >
                Next
              </button>
            )}
          </div>
        </div>
      </section>
    </MainLayout>
  );
}

export default BookingPage;