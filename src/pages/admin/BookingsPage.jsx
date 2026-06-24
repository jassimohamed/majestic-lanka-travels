import DashboardLayout from "../../layouts/DashboardLayout";

function BookingsPage() {
  const bookings = [
    {
      id: 1,
      customer: "John Smith",
      tour: "Sigiriya Tour",
      date: "2026-06-25",
      vehicle: "Toyota Prius",
      status: "Confirmed",
    },
    {
      id: 2,
      customer: "Sarah Lee",
      tour: "Ella Tour",
      date: "2026-06-27",
      vehicle: "Toyota KDH Van",
      status: "Pending",
    },
    {
      id: 3,
      customer: "Ahmed Khan",
      tour: "Yala Safari",
      date: "2026-06-30",
      vehicle: "SUV",
      status: "Assigned",
    },
  ];

  return (
    <DashboardLayout>
      <h1 className="text-4xl font-bold mb-8">
        Booking Management
      </h1>

      <div className="bg-white rounded-xl shadow p-6">
        <div className="flex justify-between items-center mb-6">
          <input
            type="text"
            placeholder="Search bookings..."
            className="border p-3 rounded-lg w-72"
          />

          <button className="bg-amber-500 text-white px-5 py-3 rounded-lg">
            Add Booking
          </button>
        </div>

        <table className="w-full">
          <thead>
            <tr className="border-b bg-gray-100">
              <th className="text-left p-3">Customer</th>
              <th className="text-left p-3">Tour</th>
              <th className="text-left p-3">Date</th>
              <th className="text-left p-3">Vehicle</th>
              <th className="text-left p-3">Status</th>
              <th className="text-left p-3">Action</th>
            </tr>
          </thead>

          <tbody>
            {bookings.map((booking) => (
              <tr key={booking.id} className="border-b">
                <td className="p-3">{booking.customer}</td>
                <td className="p-3">{booking.tour}</td>
                <td className="p-3">{booking.date}</td>
                <td className="p-3">{booking.vehicle}</td>
                <td className="p-3">{booking.status}</td>
                <td className="p-3">
                  <button className="bg-blue-900 text-white px-4 py-2 rounded-lg">
                    View
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </DashboardLayout>
  );
}

export default BookingsPage;