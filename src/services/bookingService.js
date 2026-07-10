const API_URL =
  "https://majestic-lanka-travels-3.onrender.com/api/bookings";

export async function getBookings() {
  const response = await fetch(API_URL);

  if (!response.ok) {
    throw new Error("Failed to fetch bookings");
  }

  return response.json();
}

export async function createBooking(booking) {
  const response = await fetch(API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(booking),
  });

  if (!response.ok) {
    throw new Error("Failed to create booking");
  }

  return response.json();
}