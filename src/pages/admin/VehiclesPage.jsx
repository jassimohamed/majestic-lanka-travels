import DashboardLayout from "../../layouts/DashboardLayout";

function VehiclesPage() {
  const vehicles = [
    { id: 1, name: "Toyota Prius", type: "Sedan", seats: 3, status: "Available" },
    { id: 2, name: "Toyota KDH Van", type: "Van", seats: 10, status: "Booked" },
    { id: 3, name: "SUV", type: "SUV", seats: 5, status: "Available" },
    { id: 4, name: "Luxury Sedan", type: "Luxury", seats: 4, status: "Maintenance" },
  ];

  return (
    <DashboardLayout>
      <h1 className="text-4xl font-bold mb-8">Vehicle Management</h1>

      <div className="bg-white rounded-xl shadow p-6">
        <div className="flex justify-between items-center mb-6">
          <input
            type="text"
            placeholder="Search vehicles..."
            className="border p-3 rounded-lg w-72"
          />

          <button className="bg-amber-500 text-white px-5 py-3 rounded-lg">
            Add Vehicle
          </button>
        </div>

        <table className="w-full">
          <thead>
            <tr className="border-b bg-gray-100">
              <th className="text-left p-3">Vehicle</th>
              <th className="text-left p-3">Type</th>
              <th className="text-left p-3">Seats</th>
              <th className="text-left p-3">Status</th>
              <th className="text-left p-3">Action</th>
            </tr>
          </thead>

          <tbody>
            {vehicles.map((vehicle) => (
              <tr key={vehicle.id} className="border-b">
                <td className="p-3">{vehicle.name}</td>
                <td className="p-3">{vehicle.type}</td>
                <td className="p-3">{vehicle.seats}</td>
                <td className="p-3">{vehicle.status}</td>
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

export default VehiclesPage;