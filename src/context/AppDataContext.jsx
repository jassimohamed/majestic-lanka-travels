import { createContext, useState } from "react";
import { sampleBookings } from "../data/sampleBookings";

export const AppDataContext = createContext();

export function AppDataProvider({ children }) {
  const [bookings, setBookings] = useState(sampleBookings);

  const addBooking = (booking) => {
    setBookings((prev) => [booking, ...prev]);
  };

  const updateBookingStatus = (bookingId, status) => {
    setBookings((prev) =>
      prev.map((booking) =>
        booking.bookingId === bookingId
          ? { ...booking, status }
          : booking
      )
    );
  };

  const assignDriver = (bookingId, driver) => {
    setBookings((prev) =>
      prev.map((booking) =>
        booking.bookingId === bookingId
          ? { ...booking, driver, status: "Driver Assigned" }
          : booking
      )
    );
  };

  const deleteBooking = (bookingId) => {
    setBookings((prev) =>
      prev.filter((booking) => booking.bookingId !== bookingId)
    );
  };

  const updateBooking = (bookingId, data) => {
    setBookings((prev) =>
      prev.map((booking) =>
        booking.bookingId === bookingId
          ? { ...booking, ...data }
          : booking
      )
    );
  };

  return (
    <AppDataContext.Provider
      value={{
        bookings,
        addBooking,
        updateBookingStatus,
        assignDriver,
        deleteBooking,
        updateBooking,
      }}
    >
      {children}
    </AppDataContext.Provider>
  );
}