import { useState } from "react";
import DashboardLayout from "../../layouts/DashboardLayout";

function DriversPage() {
  const [drivers, setDrivers] = useState([
    {
      id: 1,
      name: "Kamal Perera",
      email: "kamal@majesticlanka.com",
      phone: "0771234567",
      vehicle: "Toyota Prius",
      status: "Available",
    },
    {
      id: 2,
      name: "Nimal Silva",
      email: "nimal@majesticlanka.com",
      phone: "0719876543",
      vehicle: "Honda Vezel",
      status: "Available",
    },
    {
      id: 3,
      name: "Sameera Fernando",
      email: "sameera@majesticlanka.com",
      phone: "0714567890",
      vehicle: "Toyota Raize",
      status: "On Trip",
    },
  ]);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    vehicle: "",
    status: "Available",
  });

  const [editingId, setEditingId] = useState(null);
  const [search, setSearch] = useState("");

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const resetForm = () => {
    setFormData({
      name: "",
      email: "",
      phone: "",
      vehicle: "",
      status: "Available",
    });
    setEditingId(null);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.phone || !formData.vehicle) {
      alert("Please fill all driver details");
      return;
    }

    if (editingId) {
      setDrivers((prev) =>
        prev.map((driver) =>
          driver.id === editingId ? { ...driver, ...formData } : driver
        )
      );
    } else {
      setDrivers((prev) => [
        {
          id: Date.now(),
          ...formData,
        },
        ...prev,
      ]);
    }

    resetForm();
  };

  const handleEdit = (driver) => {
    setEditingId(driver.id);
    setFormData({
      name: driver.name,
      email: driver.email,
      phone: driver.phone,
      vehicle: driver.vehicle,
      status: driver.status,
    });
  };

  const handleDelete = (id) => {
    if (!window.confirm("Delete this driver?")) return;
    setDrivers((prev) => prev.filter((driver) => driver.id !== id));
  };

  const filteredDrivers = drivers.filter((driver) =>
    `${driver.name} ${driver.email} ${driver.phone} ${driver.vehicle} ${driver.status}`
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
          Driver Management
        </h1>

        <div className="grid lg:grid-cols-3 gap-8">
          <form
            onSubmit={handleSubmit}
            className="bg-[#181818] border border-[#D4AF37]/20 rounded-3xl p-8"
          >
            <h2 className="text-2xl font-bold text-[#D4AF37] mb-6">
              {editingId ? "Edit Driver" : "Add Driver"}
            </h2>

            <input
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Driver Name"
              className="w-full bg-[#111111] rounded-xl p-4 mb-4 outline-none border border-transparent focus:border-[#D4AF37]"
            />

            <input
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Driver Email"
              className="w-full bg-[#111111] rounded-xl p-4 mb-4 outline-none border border-transparent focus:border-[#D4AF37]"
            />

            <input
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Phone Number"
              className="w-full bg-[#111111] rounded-xl p-4 mb-4 outline-none border border-transparent focus:border-[#D4AF37]"
            />

            <input
              name="vehicle"
              value={formData.vehicle}
              onChange={handleChange}
              placeholder="Assigned Vehicle"
              className="w-full bg-[#111111] rounded-xl p-4 mb-4 outline-none border border-transparent focus:border-[#D4AF37]"
            />

            <select
              name="status"
              value={formData.status}
              onChange={handleChange}
              className="w-full bg-[#111111] rounded-xl p-4 mb-6 outline-none border border-transparent focus:border-[#D4AF37]"
            >
              <option value="Available">Available</option>
              <option value="On Trip">On Trip</option>
              <option value="Inactive">Inactive</option>
            </select>

            <button
              type="submit"
              className="w-full bg-[#D4AF37] text-black py-4 rounded-xl font-bold hover:bg-[#F5D76E] transition"
            >
              {editingId ? "Update Driver" : "Add Driver"}
            </button>

            {editingId && (
              <button
                type="button"
                onClick={resetForm}
                className="w-full mt-4 border border-[#D4AF37] py-3 rounded-xl"
              >
                Cancel Edit
              </button>
            )}
          </form>

          <div className="lg:col-span-2 bg-[#181818] border border-[#D4AF37]/20 rounded-3xl p-8 overflow-x-auto">
            <div className="flex justify-between items-center mb-6 gap-4">
              <h2 className="text-2xl font-bold">All Drivers</h2>

              <input
                type="text"
                placeholder="Search drivers..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="bg-[#111111] rounded-xl p-4 outline-none border border-transparent focus:border-[#D4AF37]"
              />
            </div>

            <table className="w-full min-w-[850px]">
              <thead>
                <tr className="border-b border-[#D4AF37]/20">
                  <th className="text-left py-4">Driver</th>
                  <th className="text-left py-4">Email</th>
                  <th className="text-left py-4">Phone</th>
                  <th className="text-left py-4">Vehicle</th>
                  <th className="text-left py-4">Status</th>
                  <th className="text-left py-4">Actions</th>
                </tr>
              </thead>

              <tbody>
                {filteredDrivers.map((driver) => (
                  <tr
                    key={driver.id}
                    className="border-b border-[#D4AF37]/10 hover:bg-[#222222]"
                  >
                    <td className="py-5 text-[#D4AF37] font-semibold">
                      {driver.name}
                    </td>
                    <td>{driver.email}</td>
                    <td>{driver.phone}</td>
                    <td>{driver.vehicle}</td>
                    <td>{driver.status}</td>
                    <td>
                      <div className="flex gap-2">
                        <button
                          onClick={() => handleEdit(driver)}
                          className="bg-[#D4AF37] text-black px-4 py-2 rounded-lg font-bold"
                        >
                          Edit
                        </button>

                        <button
                          onClick={() => handleDelete(driver.id)}
                          className="bg-red-600 text-white px-4 py-2 rounded-lg"
                        >
                          Delete
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            {filteredDrivers.length === 0 && (
              <p className="text-gray-400 mt-6">No drivers found.</p>
            )}
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}

export default DriversPage;