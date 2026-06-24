import DashboardLayout from "../../layouts/DashboardLayout";

function CustomerDashboard() {
  return (
    <DashboardLayout>
      <h1 className="text-4xl font-bold mb-8">
        Customer Dashboard
      </h1>

      <div className="grid md:grid-cols-3 gap-6 mb-10">
        <div className="bg-white p-6 rounded-xl shadow">
          <h3 className="font-bold">Upcoming Trips</h3>
          <p className="text-3xl mt-3">2</p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow">
          <h3 className="font-bold">Completed Trips</h3>
          <p className="text-3xl mt-3">5</p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow">
          <h3 className="font-bold">Saved Tours</h3>
          <p className="text-3xl mt-3">3</p>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow p-6">
        <h2 className="text-2xl font-bold mb-6">
          My Bookings
        </h2>

        <table className="w-full">
          <thead>
            <tr className="border-b bg-gray-100">
              <th className="text-left p-3">Tour</th>
              <th className="text-left p-3">Date</th>
              <th className="text-left p-3">Vehicle</th>
              <th className="text-left p-3">Status</th>
            </tr>
          </thead>

          <tbody>
            <tr className="border-b">
              <td className="p-3">Ella Tour</td>
              <td className="p-3">2026-07-10</td>
              <td className="p-3">Toyota KDH Van</td>
              <td className="p-3 text-green-600">Confirmed</td>
            </tr>

            <tr>
              <td className="p-3">Galle Tour</td>
              <td className="p-3">2026-07-15</td>
              <td className="p-3">SUV</td>
              <td className="p-3 text-yellow-600">Pending</td>
            </tr>
          </tbody>
        </table>
      </div>
    </DashboardLayout>
  );
}

export default CustomerDashboard;