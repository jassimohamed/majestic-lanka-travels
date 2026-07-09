import { useEffect, useState } from "react";
import { fetchBookings } from "../../services/adminBookingService";

function RevenueCard() {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    async function loadRevenue() {
      const result = await fetchBookings();
      if (result.success) {
        setBookings(result.data);
      }
    }

    loadRevenue();
  }, []);

  const revenue = bookings
    .filter((b) => b.status === "Completed")
    .reduce((total, b) => total + Number(b.price || 0), 0);

  return (
    <div className="bg-[#181818] border border-[#D4AF37]/20 rounded-3xl p-8">
      <p className="text-gray-400">Completed Booking Revenue</p>
      <h2 className="text-4xl font-bold text-[#D4AF37] mt-4">
        LKR {revenue.toLocaleString()}
      </h2>
    </div>
  );
}

export default RevenueCard;