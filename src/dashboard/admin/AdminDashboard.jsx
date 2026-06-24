import DashboardLayout from "../../layouts/DashboardLayout";

function AdminDashboard() {
  return (
    <DashboardLayout>

      <h1 className="text-4xl font-bold mb-8">
        Admin Dashboard
      </h1>

      <div className="grid md:grid-cols-4 gap-6">

        <div className="bg-white p-6 rounded-xl shadow">
          <h3 className="text-lg font-bold">
            Total Bookings
          </h3>
          <p className="text-3xl mt-3">125</p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow">
          <h3 className="text-lg font-bold">
            Customers
          </h3>
          <p className="text-3xl mt-3">85</p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow">
          <h3 className="text-lg font-bold">
            Drivers
          </h3>
          <p className="text-3xl mt-3">12</p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow">
          <h3 className="text-lg font-bold">
            Vehicles
          </h3>
          <p className="text-3xl mt-3">18</p>
        </div>

      </div>

<div className="mt-10 bg-white rounded-xl shadow p-6">
  <h2 className="text-2xl font-bold mb-6">
    Recent Bookings
  </h2>

  <table className="w-full">
    <thead>
      <tr className="border-b">
        <th className="text-left p-3">Customer</th>
        <th className="text-left p-3">Tour</th>
        <th className="text-left p-3">Date</th>
        <th className="text-left p-3">Status</th>
      </tr>
    </thead>

    <tbody>
      <tr className="border-b">
        <td className="p-3">John Smith</td>
        <td className="p-3">Sigiriya Tour</td>
        <td className="p-3">2026-06-25</td>
        <td className="p-3 text-green-600">Confirmed</td>
      </tr>

      <tr className="border-b">
        <td className="p-3">Sarah Lee</td>
        <td className="p-3">Ella Tour</td>
        <td className="p-3">2026-06-27</td>
        <td className="p-3 text-yellow-600">Pending</td>
      </tr>

      <tr>
        <td className="p-3">Ahmed Khan</td>
        <td className="p-3">Yala Safari</td>
        <td className="p-3">2026-06-30</td>
        <td className="p-3 text-blue-600">Assigned</td>
      </tr>
    </tbody>
  </table>
</div>

    </DashboardLayout>
  );
}

export default AdminDashboard;