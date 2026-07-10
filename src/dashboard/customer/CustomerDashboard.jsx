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
        const myBookings = result.data.filter(
          (booking) =>
            booking.email?.toLowerCase() === user?.email?.toLowerCase()
        );

        setBookings(myBookings);
      }
    } catch (error) {
      console.error("Failed to load customer bookings:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (user?.email) {
      loadBookings();
    }
  }, [user?.email]);

  const handleCancel = async (booking) => {
    const confirmCancel = window.confirm(
      `Are you sure you want to cancel booking ${booking.bookingId}?`
    );

    if (!confirmCancel) return;

    try {
      const result = await updateBooking(booking._id, {
        status: "Cancelled",
      });

      if (!result.success) {
        alert(result.message || "Failed to cancel booking.");
        return;
      }

      await loadBookings();
    } catch (error) {
      alert("Failed to cancel booking.");
      console.error(error);
    }
  };

  const upcomingTrips = bookings.filter(
    (booking) =>
      booking.status !== "Completed" &&
      booking.status !== "Cancelled"
  ).length;

  const completedTrips = bookings.filter(
    (booking) => booking.status === "Completed"
  ).length;

  return (
    <DashboardLayout>
      <div className="min-h-screen bg-[#050505] text-white px-4 py-6 sm:p-6 lg:p-8 overflow-hidden">
        <p className="uppercase tracking-[3px] sm:tracking-[4px] text-[#D4AF37] text-sm sm:text-base">
          Customer Panel
        </p>

        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mt-3 mb-3 break-words">
          Customer Dashboard
        </h1>

        <p className="text-gray-400 mb-8 sm:mb-10 break-words">
          Welcome, {user?.fullName || "Customer"}
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-6 mb-8 sm:mb-10">
          <div className="bg-[#181818] border border-[#D4AF37]/20 p-5 sm:p-6 rounded-2xl sm:rounded-3xl">
            <h3 className="text-gray-400 text-sm sm:text-base">
              Upcoming Trips
            </h3>

            <p className="text-3xl sm:text-4xl font-bold text-[#D4AF37] mt-3">
              {upcomingTrips}
            </p>
          </div>

          <div className="bg-[#181818] border border-[#D4AF37]/20 p-5 sm:p-6 rounded-2xl sm:rounded-3xl">
            <h3 className="text-gray-400 text-sm sm:text-base">
              Completed Trips
            </h3>

            <p className="text-3xl sm:text-4xl font-bold text-[#D4AF37] mt-3">
              {completedTrips}
            </p>
          </div>

          <div className="bg-[#181818] border border-[#D4AF37]/20 p-5 sm:p-6 rounded-2xl sm:rounded-3xl sm:col-span-2 xl:col-span-1">
            <h3 className="text-gray-400 text-sm sm:text-base">
              Total Bookings
            </h3>

            <p className="text-3xl sm:text-4xl font-bold text-[#D4AF37] mt-3">
              {bookings.length}
            </p>
          </div>
        </div>

        <div className="bg-[#181818] border border-[#D4AF37]/20 rounded-2xl sm:rounded-3xl p-4 sm:p-6 lg:p-8">
          <h2 className="text-2xl sm:text-3xl font-bold mb-6">
            My Bookings
          </h2>

          {loading ? (
            <p className="text-gray-400">Loading bookings...</p>
          ) : bookings.length === 0 ? (
            <p className="text-gray-400">No bookings yet.</p>
          ) : (
            <>
              {/* Mobile booking cards */}
              <div className="space-y-4 md:hidden">
                {bookings.map((booking) => (
                  <div
                    key={booking._id}
                    className="bg-[#111111] border border-[#D4AF37]/15 rounded-2xl p-5"
                  >
                    <div className="flex items-start justify-between gap-3 mb-4">
                      <div>
                        <p className="text-xs uppercase tracking-wider text-gray-500">
                          Booking ID
                        </p>

                        <p className="text-[#D4AF37] font-bold break-all">
                          {booking.bookingId}
                        </p>
                      </div>

                      <BookingStatusBadge
                        status={booking.status || "Pending"}
                      />
                    </div>

                    <div className="space-y-3 text-sm text-gray-300">
                      <div>
                        <p className="text-gray-500">Route</p>
                        <p className="break-words">
                          {booking.pickup || "-"} →{" "}
                          {booking.destination || "-"}
                        </p>
                      </div>

                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <p className="text-gray-500">Date</p>
                          <p>{booking.date || "-"}</p>
                        </div>

                        <div>
                          <p className="text-gray-500">Vehicle</p>
                          <p className="break-words">
                            {booking.vehicle || "-"}
                          </p>
                        </div>
                      </div>

                      <div>
                        <p className="text-gray-500">Driver</p>
                        <p className="break-words">
                          {booking.driver || "Not assigned"}
                        </p>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 mt-5">
                      <button
                        type="button"
                        onClick={() => setSelectedBooking(booking)}
                        className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-3 rounded-xl font-semibold transition"
                      >
                        View
                      </button>

                      {booking.status === "Pending" && (
                        <button
                          type="button"
                          onClick={() => setEditingBooking(booking)}
                          className="bg-[#D4AF37] hover:bg-[#F5D76E] text-black px-4 py-3 rounded-xl font-bold transition"
                        >
                          Edit
                        </button>
                      )}

                      {booking.status !== "Completed" &&
                        booking.status !== "Cancelled" && (
                          <button
                            type="button"
                            onClick={() => handleCancel(booking)}
                            className="bg-red-600 hover:bg-red-700 text-white px-4 py-3 rounded-xl font-semibold transition"
                          >
                            Cancel
                          </button>
                        )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Tablet and desktop table */}
              <div className="hidden md:block w-full overflow-x-auto">
                <table className="w-full min-w-[1000px]">
                  <thead>
                    <tr className="border-b border-[#D4AF37]/20">
                      <th className="text-left py-4 pr-5">
                        Booking ID
                      </th>

                      <th className="text-left py-4 pr-5">
                        Route
                      </th>

                      <th className="text-left py-4 pr-5">
                        Date
                      </th>

                      <th className="text-left py-4 pr-5">
                        Vehicle
                      </th>

                      <th className="text-left py-4 pr-5">
                        Driver
                      </th>

                      <th className="text-left py-4 pr-5">
                        Status
                      </th>

                      <th className="text-left py-4">
                        Actions
                      </th>
                    </tr>
                  </thead>

                  <tbody>
                    {bookings.map((booking) => (
                      <tr
                        key={booking._id}
                        className="border-b border-[#D4AF37]/10 hover:bg-[#222222]"
                      >
                        <td className="py-5 pr-5 text-[#D4AF37] font-semibold">
                          {booking.bookingId}
                        </td>

                        <td className="pr-5">
                          {booking.pickup || "-"} →{" "}
                          {booking.destination || "-"}
                        </td>

                        <td className="pr-5">
                          {booking.date || "-"}
                        </td>

                        <td className="pr-5">
                          {booking.vehicle || "-"}
                        </td>

                        <td className="pr-5">
                          {booking.driver || "Not assigned"}
                        </td>

                        <td className="pr-5">
                          <BookingStatusBadge
                            status={booking.status || "Pending"}
                          />
                        </td>

                        <td>
                          <div className="flex gap-2">
                            <button
                              type="button"
                              onClick={() =>
                                setSelectedBooking(booking)
                              }
                              className="bg-blue-600 hover:bg-blue-700 text-white px-3 py-2 rounded-lg transition"
                            >
                              View
                            </button>

                            {booking.status === "Pending" && (
                              <button
                                type="button"
                                onClick={() =>
                                  setEditingBooking(booking)
                                }
                                className="bg-[#D4AF37] hover:bg-[#F5D76E] text-black px-3 py-2 rounded-lg font-bold transition"
                              >
                                Edit
                              </button>
                            )}

                            {booking.status !== "Completed" &&
                              booking.status !== "Cancelled" && (
                                <button
                                  type="button"
                                  onClick={() =>
                                    handleCancel(booking)
                                  }
                                  className="bg-red-600 hover:bg-red-700 text-white px-3 py-2 rounded-lg transition"
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
              </div>
            </>
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