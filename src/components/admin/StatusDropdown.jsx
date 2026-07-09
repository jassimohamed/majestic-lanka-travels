import { bookingStatus } from "../../data/bookingStatus";
import { updateBooking } from "../../services/adminBookingService";

function StatusDropdown({ booking, reloadBookings }) {
  const handleChange = async (e) => {
    const newStatus = e.target.value;

    try {
      await updateBooking(booking._id, {
        status: newStatus,
      });

      reloadBookings();
    } catch (error) {
      alert("Failed to update booking status");
      console.error(error);
    }
  };

  return (
    <select
      value={booking.status || "Pending"}
      onChange={handleChange}
      className="bg-[#111111] border border-[#D4AF37]/30 rounded-lg p-2 text-white"
    >
      {bookingStatus.map((status) => (
        <option key={status} value={status} className="text-black">
          {status}
        </option>
      ))}
    </select>
  );
}

export default StatusDropdown;