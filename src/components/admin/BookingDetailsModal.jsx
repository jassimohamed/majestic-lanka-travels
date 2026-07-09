import { getDriverByName } from "../../utils/getDriverByName";

function BookingDetailsModal({ booking, onClose }) {
  if (!booking) return null;

  const driver = getDriverByName(booking.driver);

  return (
    <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 px-6">
      <div className="bg-[#181818] border border-[#D4AF37]/20 rounded-3xl p-8 w-full max-w-3xl text-white">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold text-[#D4AF37]">
            Booking Details
          </h2>

          <button
            onClick={onClose}
            className="text-gray-400 hover:text-white text-2xl"
          >
            ✕
          </button>
        </div>

        <div className="grid md:grid-cols-2 gap-6 text-gray-300">
          <div>
            <p className="text-gray-500">Booking ID</p>
            <p>{booking.bookingId || "-"}</p>
          </div>

          <div>
            <p className="text-gray-500">Status</p>
            <p>{booking.status || "Pending"}</p>
          </div>

          <div>
            <p className="text-gray-500">Customer</p>
            <p>{booking.fullName || "-"}</p>
          </div>

          <div>
            <p className="text-gray-500">Phone</p>
            <p>{booking.phone || "-"}</p>
          </div>

          <div>
            <p className="text-gray-500">Email</p>
            <p>{booking.email || "-"}</p>
          </div>

          <div>
            <p className="text-gray-500">Country</p>
            <p>{booking.country || "-"}</p>
          </div>

          <div>
            <p className="text-gray-500">Pickup</p>
            <p>{booking.pickup || "-"}</p>
          </div>

          <div>
            <p className="text-gray-500">Destination</p>
            <p>{booking.destination || "-"}</p>
          </div>

          <div>
            <p className="text-gray-500">Vehicle</p>
            <p>{booking.vehicle || "-"}</p>
          </div>

          <div>
            <p className="text-gray-500">Date / Time</p>
            <p>
              {booking.date || "-"} {booking.time || ""}
            </p>
          </div>

          <div>
            <p className="text-gray-500">Payment</p>
            <p>{booking.paymentMethod || "-"}</p>
          </div>

          <div>
            <p className="text-gray-500">Assigned Driver</p>
            {driver ? (
              <>
                <p>{driver.name}</p>
                <p className="text-sm text-gray-400">{driver.phone}</p>
                <p className="text-sm text-gray-400">{driver.vehicle}</p>
              </>
            ) : (
              <p>Not Assigned</p>
            )}
          </div>

          <div>
            <p className="text-gray-500">Price</p>
            <p className="text-[#D4AF37] font-bold">
              LKR {Number(booking.price || 0).toLocaleString()}
            </p>
          </div>

          <div className="md:col-span-2">
            <p className="text-gray-500">Notes</p>
            <p>{booking.notes || "-"}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BookingDetailsModal;