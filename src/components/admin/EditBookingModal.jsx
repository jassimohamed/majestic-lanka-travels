import { useEffect, useState } from "react";
import { updateBooking } from "../../services/adminBookingService";

function EditBookingModal({ booking, onClose }) {
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    country: "",
    pickup: "",
    destination: "",
    date: "",
    time: "",
    vehicle: "",
    tourType: "",
    paymentMethod: "",
    notes: "",
    price: "",
  });

  useEffect(() => {
    if (booking) {
      setFormData({
        fullName: booking.fullName || "",
        phone: booking.phone || "",
        email: booking.email || "",
        country: booking.country || "",
        pickup: booking.pickup || "",
        destination: booking.destination || "",
        date: booking.date || "",
        time: booking.time || "",
        vehicle: booking.vehicle || "",
        tourType: booking.tourType || "",
        paymentMethod: booking.paymentMethod || "",
        notes: booking.notes || "",
        price: booking.price || "",
      });
    }
  }, [booking]);

  if (!booking) return null;

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSave = async (e) => {
    e.preventDefault();

    try {
      await updateBooking(booking._id, {
        ...formData,
        price: Number(formData.price),
      });

      onClose();
    } catch (error) {
      alert("Failed to update booking");
      console.error(error);
    }
  };

  return (
    <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 px-6">
      <form
        onSubmit={handleSave}
        className="bg-[#181818] border border-[#D4AF37]/20 rounded-3xl p-8 w-full max-w-4xl text-white max-h-[90vh] overflow-y-auto"
      >
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold text-[#D4AF37]">
            Edit Booking
          </h2>

          <button
            type="button"
            onClick={onClose}
            className="text-gray-400 hover:text-white text-2xl"
          >
            ✕
          </button>
        </div>

        <div className="grid md:grid-cols-2 gap-5">
          <input
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            placeholder="Customer Name"
            className="bg-[#111111] rounded-xl p-4 outline-none border border-transparent focus:border-[#D4AF37]"
          />

          <input
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="Phone"
            className="bg-[#111111] rounded-xl p-4 outline-none border border-transparent focus:border-[#D4AF37]"
          />

          <input
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email"
            className="bg-[#111111] rounded-xl p-4 outline-none border border-transparent focus:border-[#D4AF37]"
          />

          <input
            name="country"
            value={formData.country}
            onChange={handleChange}
            placeholder="Country"
            className="bg-[#111111] rounded-xl p-4 outline-none border border-transparent focus:border-[#D4AF37]"
          />

          <input
            name="pickup"
            value={formData.pickup}
            onChange={handleChange}
            placeholder="Pickup"
            className="bg-[#111111] rounded-xl p-4 outline-none border border-transparent focus:border-[#D4AF37]"
          />

          <input
            name="destination"
            value={formData.destination}
            onChange={handleChange}
            placeholder="Destination"
            className="bg-[#111111] rounded-xl p-4 outline-none border border-transparent focus:border-[#D4AF37]"
          />

          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            className="bg-[#111111] rounded-xl p-4 outline-none border border-transparent focus:border-[#D4AF37]"
          />

          <input
            type="time"
            name="time"
            value={formData.time}
            onChange={handleChange}
            className="bg-[#111111] rounded-xl p-4 outline-none border border-transparent focus:border-[#D4AF37]"
          />

          <input
            name="vehicle"
            value={formData.vehicle}
            onChange={handleChange}
            placeholder="Vehicle"
            className="bg-[#111111] rounded-xl p-4 outline-none border border-transparent focus:border-[#D4AF37]"
          />

          <input
            name="tourType"
            value={formData.tourType}
            onChange={handleChange}
            placeholder="Tour Type"
            className="bg-[#111111] rounded-xl p-4 outline-none border border-transparent focus:border-[#D4AF37]"
          />

          <input
            name="paymentMethod"
            value={formData.paymentMethod}
            onChange={handleChange}
            placeholder="Payment Method"
            className="bg-[#111111] rounded-xl p-4 outline-none border border-transparent focus:border-[#D4AF37]"
          />

          <input
            type="number"
            name="price"
            value={formData.price}
            onChange={handleChange}
            placeholder="Price"
            className="bg-[#111111] rounded-xl p-4 outline-none border border-transparent focus:border-[#D4AF37]"
          />

          <textarea
            name="notes"
            value={formData.notes}
            onChange={handleChange}
            placeholder="Notes"
            rows="4"
            className="md:col-span-2 bg-[#111111] rounded-xl p-4 outline-none border border-transparent focus:border-[#D4AF37]"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-[#D4AF37] text-black py-4 rounded-xl font-bold mt-8 hover:bg-[#F5D76E] transition"
        >
          Save Changes
        </button>
      </form>
    </div>
  );
}

export default EditBookingModal;