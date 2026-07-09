import { bookingOptions } from "../../data/bookingOptions";
import useBooking from "../../hooks/useBooking";

function BookingForm() {
  const { booking, updateBooking } = useBooking();

  const inputClass =
    "bg-[#111111] p-4 rounded-xl outline-none border border-transparent focus:border-[#D4AF37] transition text-white";

  return (
    <div className="bg-[#181818] rounded-3xl border border-[#D4AF37]/20 p-8">
      <h2 className="text-3xl font-bold mb-8">Customer Details</h2>

      <div className="grid md:grid-cols-2 gap-6 mb-10">
        <input
          type="text"
          placeholder="Full Name"
          value={booking.fullName}
          onChange={(e) => updateBooking("fullName", e.target.value)}
          required
          minLength={3}
          maxLength={50}
          className={inputClass}
        />

        <input
          type="email"
          placeholder="Email Address"
          value={booking.email}
          onChange={(e) => updateBooking("email", e.target.value)}
          required
          className={inputClass}
        />

        <input
          type="tel"
          placeholder="Phone Number"
          value={booking.phone}
          onChange={(e) => {
            const value = e.target.value.replace(/\D/g, "");
            updateBooking("phone", value);
          }}
          required
          maxLength={12}
          pattern="[0-9]{9,12}"
          className={inputClass}
        />

        <input
          type="text"
          placeholder="Country"
          value={booking.country}
          onChange={(e) => updateBooking("country", e.target.value)}
          required
          className={inputClass}
        />
      </div>

      <h2 className="text-3xl font-bold mb-8">Journey Details</h2>

      <div className="grid md:grid-cols-2 gap-6">
        <input
          type="text"
          placeholder="Pickup Location"
          value={booking.pickup}
          onChange={(e) => updateBooking("pickup", e.target.value)}
          required
          className={inputClass}
        />

        <input
          type="text"
          placeholder="Destination"
          value={booking.destination}
          onChange={(e) => updateBooking("destination", e.target.value)}
          required
          className={inputClass}
        />

        <input
          type="date"
          value={booking.date}
          onChange={(e) => updateBooking("date", e.target.value)}
          required
          className={inputClass}
        />

        <div className="grid grid-cols-2 gap-4">
          <input
            type="text"
            placeholder="Time e.g. 10:30"
            value={booking.time}
            onChange={(e) => updateBooking("time", e.target.value)}
            required
            className={inputClass}
          />

          <select
            value={booking.timePeriod}
            onChange={(e) => updateBooking("timePeriod", e.target.value)}
            required
            className={inputClass}
          >
            <option value="AM" className="text-black">AM</option>
            <option value="PM" className="text-black">PM</option>
          </select>
        </div>

        <select
          value={booking.vehicle}
          onChange={(e) => updateBooking("vehicle", e.target.value)}
          required
          className={inputClass}
        >
          {bookingOptions.vehicles.map((vehicle) => (
            <option key={vehicle} value={vehicle} className="text-black">
              {vehicle}
            </option>
          ))}
        </select>

        <select
          value={booking.passengers}
          onChange={(e) => updateBooking("passengers", Number(e.target.value))}
          required
          className={inputClass}
        >
          {bookingOptions.passengers.map((passenger) => (
            <option key={passenger} value={passenger} className="text-black">
              {passenger} Passenger(s)
            </option>
          ))}
        </select>

        <select
          value={booking.tourType}
          onChange={(e) => updateBooking("tourType", e.target.value)}
          required
          className={inputClass}
        >
          {bookingOptions.tourTypes.map((type) => (
            <option key={type} value={type} className="text-black">
              {type}
            </option>
          ))}
        </select>

        <select
          value={booking.paymentMethod}
          onChange={(e) => updateBooking("paymentMethod", e.target.value)}
          required
          className={inputClass}
        >
          {bookingOptions.paymentMethods.map((method) => (
            <option key={method} value={method} className="text-black">
              {method}
            </option>
          ))}
        </select>
      </div>

      <textarea
        rows="5"
        placeholder="Special Requests..."
        value={booking.notes}
        onChange={(e) => updateBooking("notes", e.target.value)}
        maxLength={300}
        className="w-full bg-[#111111] rounded-xl mt-6 p-4 outline-none border border-transparent focus:border-[#D4AF37] transition text-white"
      />
    </div>
  );
}

export default BookingForm;