import DashboardLayout from "../../layouts/DashboardLayout";

function DriversPage() {
  const drivers = [
    { id: 1, name: "Nimal Perera", phone: "+94 77 123 4567", vehicle: "Toyota Prius", status: "Available" },
    { id: 2, name: "Kamal Silva", phone: "+94 76 234 5678", vehicle: "Toyota KDH Van", status: "On Trip" },
    { id: 3, name: "Ruwan Fernando", phone: "+94 71 345 6789", vehicle: "SUV", status: "Available" },
  ];

  return (
    <DashboardLayout>
      <h1 className="text-4xl font-bold mb-8">Driver Management</h1>

      <div className="bg-white rounded-xl shadow p-6">
        <div className="flex justify-between items-center mb-6">
          <input
            type="text"
            placeholder="Search drivers..."
            className="border p-3 rounded-lg w-72"
          />

          <button className="bg-amber-500 text-white px-5 py-3 rounded-lg">
            Add Driver
          </button>
        </div>

        <table className="w-full">
          <thead>
            <tr className="border-b bg-gray-100">
              <th className="text-left p-3">Driver</th>
              <th className="text-left p-3">Phone</th>
              <th className="text-left p-3">Vehicle</th>
              <th className="text-left p-3">Status</th>
              <th className="text-left p-3">Action</th>
            </tr>
          </thead>

          <tbody>
            {drivers.map((driver) => (
              <tr key={driver.id} className="border-b">
                <td className="p-3">{driver.name}</td>
                <td className="p-3">{driver.phone}</td>
                <td className="p-3">{driver.vehicle}</td>
                <td className="p-3">{driver.status}</td>
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

export default DriversPage;