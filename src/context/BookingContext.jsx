import { createContext, useState } from "react";
import { bookingStatus } from "../data/bookingStatus";
import { generateBookingId } from "../utils/generateBookingId";

export const BookingContext = createContext();

export function BookingProvider({ children }) {
  const defaultBooking = {
    bookingId: generateBookingId(),
    fullName: "",
    email: "",
    phone: "",
    country: "",
    pickup: "",
    destination: "",
    date: "",
    time: "",
    timePeriod: "AM",
    vehicle: "Toyota Prius",
    passengers: 1,
    tourType: "Airport Transfer",
    paymentMethod: "Cash",
    notes: "",
    status: bookingStatus[0],
  };

  const [booking, setBooking] = useState(defaultBooking);

  const updateBooking = (field, value) => {
    setBooking((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const resetBooking = () => {
    setBooking({
      ...defaultBooking,
      bookingId: generateBookingId(),
    });
  };

  return (
    <BookingContext.Provider value={{ booking, updateBooking, resetBooking }}>
      {children}
    </BookingContext.Provider>
  );
}