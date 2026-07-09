export function validateBooking(booking) {
  const errors = [];

  if (!booking.fullName.trim()) errors.push("Full name is required");

  if (!booking.email.trim()) {
    errors.push("Email is required");
  } else if (!booking.email.includes("@")) {
    errors.push("Email must contain @");
  }

  if (!booking.phone.trim()) {
    errors.push("Phone number is required");
  } else if (!/^[0-9]+$/.test(booking.phone)) {
    errors.push("Phone number must contain only numbers");
  } else if (booking.phone.length < 9 || booking.phone.length > 12) {
    errors.push("Phone number must be 9 to 12 digits");
  }

  if (!booking.country.trim()) errors.push("Country is required");
  if (!booking.pickup.trim()) errors.push("Pickup location is required");
  if (!booking.destination.trim()) errors.push("Destination is required");
  if (!booking.date) errors.push("Date is required");
  if (!booking.time) errors.push("Time is required");
  if (!booking.vehicle) errors.push("Vehicle is required");
  if (!booking.tourType) errors.push("Tour type is required");
  if (!booking.paymentMethod) errors.push("Payment method is required");

  return errors;
}