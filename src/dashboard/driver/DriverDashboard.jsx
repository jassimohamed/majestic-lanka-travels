import { useEffect, useState } from "react";
import DashboardLayout from "../../layouts/DashboardLayout";
import BookingStatusBadge from "../../components/admin/BookingStatusBadge";
import { fetchBookings } from "../../services/adminBookingService";
import useAuth from "../../hooks/useAuth";

function DriverDashboard() {
  const { user } = useAuth();

  const [trips, setTrips] = useState([]);
  const [loading, setLoading] = useState(true);

  const loadTrips = async () => {
    try {
      setLoading(true);

      const result = await fetchBookings();

      if (result.success) {
        const assignedTrips = result.data.filter(
          (booking) => booking.driver === user?.fullName
        );

        setTrips(assignedTrips);
      }
    } catch (error) {
      console.error("Failed to load driver trips:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadTrips();
  }, []);

  const activeTrips = trips.filter(
    (trip) => trip.status !== "Completed" && trip.status !== "Cancelled"
  ).length;

  const completedTrips = trips.filter(
    (trip) => trip.status === "Completed"
  ).length;

  return (
    <DashboardLayout>
     <div className="px-4 py-6 sm:p-6 lg:p-8 bg-[#050505] min-h-screen text-white overflow-hidden">
        <p className="uppercase tracking-[4px] text-[#D4AF37]">
          Driver Panel
        </p>
<h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mt-3 mb-4 break-words">
          Driver Dashboard
        </h1>

        <p className="text-gray-400 mb-10">
          Welcome, {user?.fullName || "Driver"}
        </p>

        <div className="grid md:grid-cols-3 gap-6 mb-10">
          <div className="bg-[#181818] border border-[#D4AF37]/20 rounded-3xl p-6">
            <h3 className="text-gray-400">Assigned Trips</h3>
            <p className="text-4xl font-bold text-[#D4AF37] mt-3">
              {activeTrips}
            </p>
          </div>

          <div className="bg-[#181818] border border-[#D4AF37]/20 rounded-3xl p-6">
            <h3 className="text-gray-400">Completed Trips</h3>
            <p className="text-4xl font-bold text-[#D4AF37] mt-3">
              {completedTrips}
            </p>
          </div>

          <div className="bg-[#181818] border border-[#D4AF37]/20 rounded-3xl p-6">
            <h3 className="text-gray-400">Current Status</h3>
            <p className="text-2xl font-bold text-green-400 mt-3">
              Available
            </p>
          </div>
        </div>

        <div className="bg-[#181818] border border-[#D4AF37]/20 rounded-3xl p-8 overflow-x-auto">
          <h2 className="text-2xl font-bold mb-6">Assigned Trips</h2>

          {loading ? (
            <p className="text-gray-400">Loading trips...</p>
          ) : trips.length === 0 ? (
            <p className="text-gray-400">No assigned trips yet.</p>
          ) : (
            <table className="w-full min-w-[1000px]">
              <thead>
                <tr className="border-b border-[#D4AF37]/20">
                  <th className="text-left py-4">Booking ID</th>
                  <th className="text-left py-4">Customer</th>
                  <th className="text-left py-4">Phone</th>
                  <th className="text-left py-4">Pickup</th>
                  <th className="text-left py-4">Destination</th>
                  <th className="text-left py-4">Vehicle</th>
                  <th className="text-left py-4">Date</th>
                  <th className="text-left py-4">Status</th>
                </tr>
              </thead>

              <tbody>
                {trips.map((trip) => (
                  <tr
                    key={trip._id}
                    className="border-b border-[#D4AF37]/10 hover:bg-[#222222]"
                  >
                    <td className="py-5 text-[#D4AF37] font-semibold">
                      {trip.bookingId}
                    </td>
                    <td>{trip.fullName || "Customer"}</td>
                    <td>{trip.phone || "-"}</td>
                    <td>{trip.pickup || "-"}</td>
                    <td>{trip.destination || "-"}</td>
                    <td>{trip.vehicle || "-"}</td>
                    <td>{trip.date || "-"}</td>
                    <td>
                      <BookingStatusBadge status={trip.status || "Pending"} />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </div>
    </DashboardLayout>
  );
}

export default DriverDashboard;