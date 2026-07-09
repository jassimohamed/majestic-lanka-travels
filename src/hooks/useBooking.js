import { useContext } from "react";
import { BookingContext } from "../context/BookingContext";

function useBooking() {
  return useContext(BookingContext);
}

export default useBooking;