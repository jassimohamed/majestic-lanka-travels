import { driversData } from "../../data/driversData";
import { updateBooking } from "../../services/adminBookingService";

function AssignDriverModal({ booking, reloadBookings }) {
  if (!booking) return null;

  const handleAssignDriver = async (e) => {
    const driverName = e.target.value;

    try {
      await updateBooking(booking._id, {
        driver: driverName,
        status: driverName ? "Driver Assigned" : "Pending",
      });

      reloadBookings();
    } catch (error) {
      alert("Failed to assign driver");
      console.error(error);
    }
  };

  return (
    <select
      value={booking.driver || ""}
      onChange={handleAssignDriver}
      className="bg-[#111111] border border-[#D4AF37]/30 rounded-lg p-2 text-white"
    >
      <option value="" className="text-black">
        Assign Driver
      </option>

      {driversData.map((driver) => (
        <option
          key={driver.id}
          value={driver.name}
          disabled={driver.status !== "Available"}
          className="text-black"
        >
          {driver.name} ({driver.status})
        </option>
      ))}
    </select>
  );
}

export default AssignDriverModal;