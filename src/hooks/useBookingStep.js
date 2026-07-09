import { useContext } from "react";
import { BookingStepContext } from "../context/BookingStepContext";

function useBookingStep() {
  return useContext(BookingStepContext);
}

export default useBookingStep;
