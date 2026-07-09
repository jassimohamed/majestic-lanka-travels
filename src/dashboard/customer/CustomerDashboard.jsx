import { useEffect, useState } from "react";
import DashboardLayout from "../../layouts/DashboardLayout";
import BookingStatusBadge from "../../components/admin/BookingStatusBadge";
import BookingDetailsModal from "../../components/admin/BookingDetailsModal";
import EditBookingModal from "../../components/admin/EditBookingModal";
import {
  fetchBookings,
  updateBooking,
} from "../../services/adminBookingService";
import useAuth from "../../hooks/useAuth";

function CustomerDashboard() {
  const { user } = useAuth();

  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedBooking, setSelectedBooking] = useState(null);
  const [editingBooking, setEditingBooking] = useState(null);

  const loadBookings = async () => {
    try {
      setLoading(true);
      const result = await fetchBookings();

      if (result.success) {
        setBookings(
          result.data.filter((booking) => booking.email === user?.email)
        );
      }
    } catch (error) {
      console.error("Failed to load customer bookings:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadBookings();
  }, []);

  const handleCancel = async (booking) => {
    if (!window.confirm("Cancel this booking?")) return;

    await updateBooking(booking._id, {
      status: "Cancelled",
    });

    loadBookings();
  };

  const upcomingTrips = bookings.filter(
    (booking) =>
      booking.status !== "Completed" && booking.status !== "Cancelled"
  ).length;

  const completedTrips = bookings.filter(
    (booking) => booking.status === "Completed"
  ).length;

  return (
    <DashboardLayout>
      <div className="p-8 bg-[#050505] min-h-screen text-white">
        <p className="uppercase tracking-[4px] text-[#D4AF37]">
          Customer Panel
        </p>

        <h1 className="text-5xl font-bold mt-3 mb-4">
          Customer Dashboard
        </h1>

        <p className="text-gray-400 mb-10">
          Welcome, {user?.fullName || "Customer"}
        </p>

        <div className="grid md:grid-cols-3 gap-6 mb-10">
          <div className="bg-[#181818] border border-[#D4AF37]/20 p-6 rounded-3xl">
            <h3 className="text-gray-400">Upcoming Trips</h3>
            <p className="text-4xl font-bold text-[#D4AF37] mt-3">
              {upcomingTrips}
            </p>
          </div>

          <div className="bg-[#181818] border border-[#D4AF37]/20 p-6 rounded-3xl">
            <h3 className="text-gray-400">Completed Trips</h3>
            <p className="text-4xl font-bold text-[#D4AF37] mt-3">
              {completedTrips}
            </p>
          </div>

          <div className="bg-[#181818] border border-[#D4AF37]/20 p-6 rounded-3xl">
            <h3 className="text-gray-400">Total Bookings</h3>
            <p className="text-4xl font-bold text-[#D4AF37] mt-3">
              {bookings.length}
            </p>
          </div>
        </div>

        <div className="bg-[#181818] border border-[#D4AF37]/20 rounded-3xl p-8 overflow-x-auto">
          <h2 className="text-2xl font-bold mb-6">My Bookings</h2>

          {loading ? (
            <p className="text-gray-400">Loading bookings...</p>
          ) : bookings.length === 0 ? (
            <p className="text-gray-400">No bookings yet.</p>
          ) : (
            <table className="w-full min-w-[1000px]">
              <thead>
                <tr className="border-b border-[#D4AF37]/20">
                  <th className="text-left py-4">Booking ID</th>
                  <th className="text-left py-4">Route</th>
                  <th className="text-left py-4">Date</th>
                  <th className="text-left py-4">Vehicle</th>
                  <th className="text-left py-4">Driver</th>
                  <th className="text-left py-4">Price</th>
                  <th className="text-left py-4">Status</th>
                  <th className="text-left py-4">Actions</th>
                </tr>
              </thead>

              <tbody>
                {bookings.map((booking) => (
                  <tr
                    key={booking._id}
                    className="border-b border-[#D4AF37]/10 hover:bg-[#222222]"
                  >
                    <td className="py-5 text-[#D4AF37] font-semibold">
                      {booking.bookingId}
                    </td>

                    <td>
                      {booking.pickup || "-"} → {booking.destination || "-"}
                    </td>

                    <td>{booking.date || "-"}</td>
                    <td>{booking.vehicle || "-"}</td>
                    <td>{booking.driver || "Not assigned"}</td>

                    <td>
                      LKR {Number(booking.price || 0).toLocaleString()}
                    </td>

                    <td>
                      <BookingStatusBadge status={booking.status || "Pending"} />
                    </td>

                    <td>
                      <div className="flex gap-2">
                        <button
                          onClick={() => setSelectedBooking(booking)}
                          className="bg-blue-600 px-3 py-2 rounded-lg"
                        >
                          View
                        </button>

                        {booking.status === "Pending" && (
                          <button
                            onClick={() => setEditingBooking(booking)}
                            className="bg-[#D4AF37] text-black px-3 py-2 rounded-lg font-bold"
                          >
                            Edit
                          </button>
                        )}

                        {booking.status !== "Completed" &&
                          booking.status !== "Cancelled" && (
                            <button
                              onClick={() => handleCancel(booking)}
                              className="bg-red-600 px-3 py-2 rounded-lg"
                            >
                              Cancel
                            </button>
                          )}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>

        <BookingDetailsModal
          booking={selectedBooking}
          onClose={() => setSelectedBooking(null)}
        />

        <EditBookingModal
          booking={editingBooking}
          onClose={() => {
            setEditingBooking(null);
            loadBookings();
          }}
        />
      </div>
    </DashboardLayout>
  );
}

export default CustomerDashboard;