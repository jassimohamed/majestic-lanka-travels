import { useEffect, useState } from "react";
import DashboardLayout from "../../layouts/DashboardLayout";

function CustomersPage() {
  const [customers, setCustomers] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const loadCustomers = async () => {
      fetch("https://majestic-lanka-travels-3.onrender.com/api/auth/users")
      const result = await res.json();

      if (result.success) {
        setCustomers(result.data.filter((user) => user.role === "customer"));
      }
    };

    loadCustomers();
  }, []);

  const filteredCustomers = customers.filter((customer) =>
    `${customer.fullName} ${customer.email} ${customer.phone} ${customer.country}`
      .toLowerCase()
      .includes(search.toLowerCase())
  );

  return (
    <DashboardLayout>
      <div className="p-8 bg-[#050505] min-h-screen text-white">
        <p className="uppercase tracking-[4px] text-[#D4AF37]">
          Admin Panel
        </p>

        <h1 className="text-5xl font-bold mt-3 mb-10">
          Customer Management
        </h1>

        <div className="bg-[#181818] border border-[#D4AF37]/20 rounded-3xl p-8 overflow-x-auto">
          <div className="flex justify-between items-center mb-6 gap-4">
            <h2 className="text-2xl font-bold">All Customers</h2>

            <input
              type="text"
              placeholder="Search customers..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="bg-[#111111] rounded-xl p-4 outline-none border border-transparent focus:border-[#D4AF37]"
            />
          </div>

          <table className="w-full min-w-[850px]">
            <thead>
              <tr className="border-b border-[#D4AF37]/20">
                <th className="text-left py-4">Customer</th>
                <th className="text-left py-4">Email</th>
                <th className="text-left py-4">Phone</th>
                <th className="text-left py-4">Country</th>
                <th className="text-left py-4">Role</th>
              </tr>
            </thead>

            <tbody>
              {filteredCustomers.map((customer) => (
                <tr
                  key={customer._id}
                  className="border-b border-[#D4AF37]/10 hover:bg-[#222222]"
                >
                  <td className="py-5 text-[#D4AF37] font-semibold">
                    {customer.fullName}
                  </td>
                  <td>{customer.email}</td>
                  <td>{customer.phone || "-"}</td>
                  <td>{customer.country || "-"}</td>
                  <td>{customer.role}</td>
                </tr>
              ))}
            </tbody>
          </table>

          {filteredCustomers.length === 0 && (
            <p className="text-gray-400 mt-6">No customers found.</p>
          )}
        </div>
      </div>
    </DashboardLayout>
  );
}

export default CustomersPage;