import { useEffect, useState } from "react";
import { fetchBookings } from "../../services/adminBookingService";
import BookingStatusBadge from "./BookingStatusBadge";

function RecentBookings() {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    async function loadRecentBookings() {
      const result = await fetchBookings();
      if (result.success) {
        setBookings(result.data);
      }
    }

    loadRecentBookings();
  }, []);

  const recent = bookings.slice(0, 5);

  return (
    <div className="bg-[#181818] border border-[#D4AF37]/20 rounded-3xl p-8">
      <h2 className="text-2xl font-bold mb-6">Recent Bookings</h2>

      {recent.length === 0 ? (
        <p className="text-gray-400">No recent bookings.</p>
      ) : (
        <div className="space-y-4">
          {recent.map((booking) => (
            <div
              key={booking._id}
              className="flex justify-between gap-4 border-b border-[#D4AF37]/10 pb-4"
            >
              <div>
                <p className="text-[#D4AF37] font-bold">
                  {booking.bookingId}
                </p>
                <p className="text-gray-300">
                  {booking.fullName || "Customer"} — {booking.pickup || "-"} to{" "}
                  {booking.destination || "-"}
                </p>
              </div>

              <BookingStatusBadge status={booking.status || "Pending"} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default RecentBookings;