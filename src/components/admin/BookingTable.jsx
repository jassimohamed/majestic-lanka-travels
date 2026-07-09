import { useEffect, useMemo, useState } from "react";
import BookingSearch from "./BookingSearch";
import StatusDropdown from "./StatusDropdown";
import AssignDriverModal from "./AssignDriverModal";
import BookingDetailsModal from "./BookingDetailsModal";
import EditBookingModal from "./EditBookingModal";
import {
  fetchBookings,
  deleteBooking,
} from "../../services/adminBookingService";

function BookingTable() {
  const [bookings, setBookings] = useState([]);
  const [selectedBooking, setSelectedBooking] = useState(null);
  const [editingBooking, setEditingBooking] = useState(null);
  const [loading, setLoading] = useState(true);

  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");
  const [sortOption, setSortOption] = useState("newest");
  const [currentPage, setCurrentPage] = useState(1);

  const bookingsPerPage = 10;

  const loadBookings = async () => {
    try {
      setLoading(true);
      const result = await fetchBookings();

      if (result.success) {
        setBookings(result.data);
      }
    } catch (error) {
      console.error("Failed to load bookings:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (booking) => {
    const confirmDelete = window.confirm(
      `Delete booking ${booking.bookingId}?`
    );

    if (!confirmDelete) return;

    try {
      await deleteBooking(booking._id);
      loadBookings();
    } catch (error) {
      alert("Failed to delete booking");
      console.error(error);
    }
  };

  useEffect(() => {
    loadBookings();
  }, []);

  useEffect(() => {
    setCurrentPage(1);
  }, [searchTerm, statusFilter, sortOption]);

  const filteredBookings = useMemo(() => {
    let data = [...bookings];

    if (searchTerm.trim()) {
      const term = searchTerm.toLowerCase();

      data = data.filter((booking) =>
        [
          booking.bookingId,
          booking.fullName,
          booking.email,
          booking.phone,
        ]
          .join(" ")
          .toLowerCase()
          .includes(term)
      );
    }

    if (statusFilter !== "All") {
      data = data.filter((booking) => booking.status === statusFilter);
    }

    if (sortOption === "newest") {
      data.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
    }

    if (sortOption === "oldest") {
      data.sort((a, b) => new Date(a.createdAt) - new Date(b.createdAt));
    }

    if (sortOption === "highest") {
      data.sort((a, b) => Number(b.price || 0) - Number(a.price || 0));
    }

    if (sortOption === "lowest") {
      data.sort((a, b) => Number(a.price || 0) - Number(b.price || 0));
    }

    if (sortOption === "date") {
      data.sort((a, b) => new Date(a.date || 0) - new Date(b.date || 0));
    }

    return data;
  }, [bookings, searchTerm, statusFilter, sortOption]);

  const totalPages = Math.ceil(filteredBookings.length / bookingsPerPage);

  const paginatedBookings = filteredBookings.slice(
    (currentPage - 1) * bookingsPerPage,
    currentPage * bookingsPerPage
  );

  if (loading) {
    return (
      <div className="bg-[#181818] rounded-3xl border border-[#D4AF37]/20 p-8">
        <p className="text-gray-400">Loading bookings...</p>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      <BookingSearch
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        statusFilter={statusFilter}
        setStatusFilter={setStatusFilter}
        sortOption={sortOption}
        setSortOption={setSortOption}
      />

      <div className="bg-[#181818] rounded-3xl border border-[#D4AF37]/20 p-8 overflow-x-auto">
        <h2 className="text-2xl font-bold mb-8">All Bookings</h2>

        {filteredBookings.length === 0 ? (
          <p className="text-gray-400">No bookings found.</p>
        ) : (
          <>
            <table className="w-full min-w-[1300px]">
              <thead>
                <tr className="border-b border-[#D4AF37]/20">
                  <th className="text-left py-4">Booking ID</th>
                  <th className="text-left py-4">Customer</th>
                  <th className="text-left py-4">Route</th>
                  <th className="text-left py-4">Vehicle</th>
                  <th className="text-left py-4">Date</th>
                  <th className="text-left py-4">Price</th>
                  <th className="text-left py-4">Status</th>
                  <th className="text-left py-4">Driver</th>
                  <th className="text-left py-4">Actions</th>
                </tr>
              </thead>

              <tbody>
                {paginatedBookings.map((booking) => (
                  <tr
                    key={booking._id}
                    className="border-b border-[#D4AF37]/10 hover:bg-[#222222]"
                  >
                    <td className="py-5 text-[#D4AF37] font-semibold">
                      {booking.bookingId}
                    </td>

                    <td>{booking.fullName || "Customer"}</td>

                    <td>
                      {booking.pickup || "-"} → {booking.destination || "-"}
                    </td>

                    <td>{booking.vehicle || "-"}</td>
                    <td>{booking.date || "-"}</td>

                    <td>LKR {Number(booking.price || 0).toLocaleString()}</td>

                    <td>
                      <StatusDropdown
                        booking={booking}
                        reloadBookings={loadBookings}
                      />
                    </td>

                    <td>
                      <AssignDriverModal
                        booking={booking}
                        reloadBookings={loadBookings}
                      />
                    </td>

                    <td>
                      <div className="flex gap-2">
                        <button
                          onClick={() => setSelectedBooking(booking)}
                          className="bg-blue-600 hover:bg-blue-700 text-white px-3 py-2 rounded-lg"
                        >
                          View
                        </button>

                        <button
                          onClick={() => setEditingBooking(booking)}
                          className="bg-[#D4AF37] hover:bg-[#F5D76E] text-black px-3 py-2 rounded-lg font-bold"
                        >
                          Edit
                        </button>

                        <button
                          onClick={() => handleDelete(booking)}
                          className="bg-red-600 hover:bg-red-700 text-white px-3 py-2 rounded-lg"
                        >
                          Delete
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            {totalPages > 1 && (
              <div className="flex justify-between items-center mt-8">
                <button
                  disabled={currentPage === 1}
                  onClick={() => setCurrentPage((prev) => prev - 1)}
                  className="px-5 py-2 rounded-lg border border-[#D4AF37]/40 disabled:opacity-40"
                >
                  Previous
                </button>

                <p className="text-gray-400">
                  Page {currentPage} of {totalPages}
                </p>

                <button
                  disabled={currentPage === totalPages}
                  onClick={() => setCurrentPage((prev) => prev + 1)}
                  className="px-5 py-2 rounded-lg border border-[#D4AF37]/40 disabled:opacity-40"
                >
                  Next
                </button>
              </div>
            )}
          </>
        )}

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
    </div>
  );
}

export default BookingTable;