import DashboardLayout from "../../layouts/DashboardLayout";

function CustomersPage() {
  const customers = [
    { id: 1, name: "John Smith", email: "john@example.com", country: "UK", bookings: 3 },
    { id: 2, name: "Sarah Lee", email: "sarah@example.com", country: "Australia", bookings: 2 },
    { id: 3, name: "Ahmed Khan", email: "ahmed@example.com", country: "UAE", bookings: 4 },
  ];

  return (
    <DashboardLayout>
      <h1 className="text-4xl font-bold mb-8">Customer Management</h1>

      <div className="bg-white rounded-xl shadow p-6">
        <div className="flex justify-between items-center mb-6">
          <input
            type="text"
            placeholder="Search customers..."
            className="border p-3 rounded-lg w-72"
          />

          <button className="bg-amber-500 text-white px-5 py-3 rounded-lg">
            Add Customer
          </button>
        </div>

        <table className="w-full">
          <thead>
            <tr className="border-b bg-gray-100">
              <th className="text-left p-3">Customer</th>
              <th className="text-left p-3">Email</th>
              <th className="text-left p-3">Country</th>
              <th className="text-left p-3">Bookings</th>
              <th className="text-left p-3">Action</th>
            </tr>
          </thead>

          <tbody>
            {customers.map((customer) => (
              <tr key={customer.id} className="border-b">
                <td className="p-3">{customer.name}</td>
                <td className="p-3">{customer.email}</td>
                <td className="p-3">{customer.country}</td>
                <td className="p-3">{customer.bookings}</td>
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

export default CustomersPage;