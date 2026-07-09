import { useState } from "react";
import { FaWhatsapp } from "react-icons/fa";
import useBooking from "../../hooks/useBooking";
import useAppData from "../../hooks/useAppData";
import { createWhatsappMessage } from "../../utils/whatsappMessage";
import { companyData } from "../../data/companyData";
import { createBooking } from "../../services/bookingService";

function BookingSummary() {
  const { booking, resetBooking } = useBooking();
  const { addBooking } = useAppData();
  const [loading, setLoading] = useState(false);

  const bookingData = {
    ...booking,
    price: 0,
    driver: "",
  };

  const message = createWhatsappMessage(bookingData);

  const whatsappLink = `https://wa.me/${
    companyData.contact?.whatsapp || companyData.whatsapp
  }?text=${encodeURIComponent(message)}`;

  const handleBooking = async () => {
    try {
      setLoading(true);

      await createBooking(bookingData);
      addBooking(bookingData);

      window.open(whatsappLink, "_blank");
      resetBooking();
    } catch (error) {
      alert("Booking could not be saved. Please check backend server.");
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="space-y-6">
      <div className="bg-[#181818] rounded-3xl border border-[#D4AF37]/20 p-8">
        <h2 className="text-2xl font-bold text-[#D4AF37] mb-6">
          Booking Summary
        </h2>

        <div className="space-y-4 text-gray-300">
          <p><strong>Booking ID:</strong> {booking.bookingId}</p>
          <p><strong>Status:</strong> {booking.status}</p>

          <div className="border-t border-[#D4AF37]/20 pt-4 mt-4">
            <p><strong>Name:</strong> {booking.fullName || "-"}</p>
            <p><strong>Email:</strong> {booking.email || "-"}</p>
            <p><strong>Phone:</strong> {booking.phone || "-"}</p>
            <p><strong>Country:</strong> {booking.country || "-"}</p>
          </div>

          <div className="border-t border-[#D4AF37]/20 pt-4 mt-4">
            <p><strong>Pickup:</strong> {booking.pickup || "-"}</p>
            <p><strong>Destination:</strong> {booking.destination || "-"}</p>
            <p><strong>Date:</strong> {booking.date || "-"}</p>
            <p>
              <strong>Time:</strong> {booking.time || "-"} {booking.timePeriod || ""}
            </p>
            <p><strong>Vehicle:</strong> {booking.vehicle}</p>
            <p><strong>Passengers:</strong> {booking.passengers}</p>
            <p><strong>Tour:</strong> {booking.tourType}</p>
            <p><strong>Payment:</strong> {booking.paymentMethod}</p>
          </div>

          <div className="border-t border-[#D4AF37]/20 pt-4 mt-4">
            <p className="text-[#D4AF37] font-semibold">
              Final price will be sent after we review your booking request.
            </p>
          </div>
        </div>
      </div>

      <button
        onClick={handleBooking}
        disabled={loading}
        className="w-full flex items-center justify-center gap-3 bg-green-500 hover:bg-green-600 disabled:bg-gray-600 text-white font-bold py-4 rounded-2xl transition"
      >
        <FaWhatsapp size={24} />
        {loading ? "Saving Booking..." : "Send Booking via WhatsApp"}
      </button>
    </div>
  );
}

export default BookingSummary;