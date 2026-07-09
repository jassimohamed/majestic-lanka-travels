const API = "http://localhost:5000/api/bookings";

export async function fetchBookings() {
  const res = await fetch(API);
  return res.json();
}

export async function updateBooking(id, data) {
  const res = await fetch(`${API}/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  return res.json();
}

export async function deleteBooking(id) {
  const res = await fetch(`${API}/${id}`, {
    method: "DELETE",
  });

  return res.json();
}