import { useEffect, useState } from "react";
import { fetchBookings } from "../../services/adminBookingService";
import { driversData } from "../../data/driversData";

function DashboardStats() {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    async function loadStats() {
      const result = await fetchBookings();
      if (result.success) {
        setBookings(result.data);
      }
    }

    loadStats();
  }, []);

  const pending = bookings.filter((b) => b.status === "Pending").length;
  const completed = bookings.filter((b) => b.status === "Completed").length;

  const revenue = bookings
    .filter((b) => b.status === "Completed")
    .reduce((total, b) => total + Number(b.price || 0), 0);

  const availableDrivers = driversData.filter(
    (driver) => driver.status === "Available"
  ).length;

  const stats = [
    { label: "Total Bookings", value: bookings.length },
    { label: "Pending", value: pending },
    { label: "Completed", value: completed },
    { label: "Revenue", value: `LKR ${revenue.toLocaleString()}` },
    { label: "Available Drivers", value: availableDrivers },
  ];

  return (
    <div className="grid md:grid-cols-5 gap-6">
      {stats.map((stat) => (
        <div
          key={stat.label}
          className="bg-[#181818] border border-[#D4AF37]/20 rounded-3xl p-6"
        >
          <p className="text-gray-400">{stat.label}</p>
          <h3 className="text-3xl font-bold text-[#D4AF37] mt-3">
            {stat.value}
          </h3>
        </div>
      ))}
    </div>
  );
}

export default DashboardStats;