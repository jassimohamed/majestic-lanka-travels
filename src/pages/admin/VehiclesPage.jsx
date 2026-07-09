import { useState } from "react";
import DashboardLayout from "../../layouts/DashboardLayout";

function VehiclesPage() {
  const [vehicles, setVehicles] = useState([
    { id: 1, name: "Toyota Prius", type: "Sedan", seats: 3, status: "Available" },
    { id: 2, name: "Toyota Raize", type: "SUV", seats: 3, status: "Available" },
    { id: 3, name: "Honda Vezel", type: "SUV", seats: 3, status: "Available" },
    { id: 4, name: "Suzuki Every", type: "Mini Van", seats: 5, status: "Available" },
  ]);

  const [formData, setFormData] = useState({
    name: "",
    type: "",
    seats: "",
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
      type: "",
      seats: "",
      status: "Available",
    });
    setEditingId(null);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name || !formData.type || !formData.seats) {
      alert("Please fill all vehicle details");
      return;
    }

    if (editingId) {
      setVehicles((prev) =>
        prev.map((vehicle) =>
          vehicle.id === editingId
            ? { ...vehicle, ...formData, seats: Number(formData.seats) }
            : vehicle
        )
      );
    } else {
      setVehicles((prev) => [
        {
          id: Date.now(),
          ...formData,
          seats: Number(formData.seats),
        },
        ...prev,
      ]);
    }

    resetForm();
  };

  const handleEdit = (vehicle) => {
    setEditingId(vehicle.id);
    setFormData({
      name: vehicle.name,
      type: vehicle.type,
      seats: vehicle.seats,
      status: vehicle.status,
    });
  };

  const handleDelete = (id) => {
    if (!window.confirm("Delete this vehicle?")) return;
    setVehicles((prev) => prev.filter((vehicle) => vehicle.id !== id));
  };

  const filteredVehicles = vehicles.filter((vehicle) =>
    `${vehicle.name} ${vehicle.type} ${vehicle.status}`
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
          Vehicle Management
        </h1>

        <div className="grid lg:grid-cols-3 gap-8">
          <form
            onSubmit={handleSubmit}
            className="bg-[#181818] border border-[#D4AF37]/20 rounded-3xl p-8"
          >
            <h2 className="text-2xl font-bold text-[#D4AF37] mb-6">
              {editingId ? "Edit Vehicle" : "Add Vehicle"}
            </h2>

            <input
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Vehicle Name"
              className="w-full bg-[#111111] rounded-xl p-4 mb-4 outline-none border border-transparent focus:border-[#D4AF37]"
            />

            <input
              name="type"
              value={formData.type}
              onChange={handleChange}
              placeholder="Vehicle Type"
              className="w-full bg-[#111111] rounded-xl p-4 mb-4 outline-none border border-transparent focus:border-[#D4AF37]"
            />

            <input
              type="number"
              name="seats"
              value={formData.seats}
              onChange={handleChange}
              placeholder="Seats"
              className="w-full bg-[#111111] rounded-xl p-4 mb-4 outline-none border border-transparent focus:border-[#D4AF37]"
            />

            <select
              name="status"
              value={formData.status}
              onChange={handleChange}
              className="w-full bg-[#111111] rounded-xl p-4 mb-6 outline-none border border-transparent focus:border-[#D4AF37]"
            >
              <option value="Available">Available</option>
              <option value="Booked">Booked</option>
              <option value="Maintenance">Maintenance</option>
            </select>

            <button
              type="submit"
              className="w-full bg-[#D4AF37] text-black py-4 rounded-xl font-bold hover:bg-[#F5D76E] transition"
            >
              {editingId ? "Update Vehicle" : "Add Vehicle"}
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
              <h2 className="text-2xl font-bold">All Vehicles</h2>

              <input
                type="text"
                placeholder="Search vehicles..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="bg-[#111111] rounded-xl p-4 outline-none border border-transparent focus:border-[#D4AF37]"
              />
            </div>

            <table className="w-full min-w-[800px]">
              <thead>
                <tr className="border-b border-[#D4AF37]/20">
                  <th className="text-left py-4">Vehicle</th>
                  <th className="text-left py-4">Type</th>
                  <th className="text-left py-4">Seats</th>
                  <th className="text-left py-4">Status</th>
                  <th className="text-left py-4">Actions</th>
                </tr>
              </thead>

              <tbody>
                {filteredVehicles.map((vehicle) => (
                  <tr
                    key={vehicle.id}
                    className="border-b border-[#D4AF37]/10 hover:bg-[#222222]"
                  >
                    <td className="py-5 text-[#D4AF37] font-semibold">
                      {vehicle.name}
                    </td>
                    <td>{vehicle.type}</td>
                    <td>{vehicle.seats}</td>
                    <td>{vehicle.status}</td>
                    <td>
                      <div className="flex gap-2">
                        <button
                          onClick={() => handleEdit(vehicle)}
                          className="bg-[#D4AF37] text-black px-4 py-2 rounded-lg font-bold"
                        >
                          Edit
                        </button>

                        <button
                          onClick={() => handleDelete(vehicle.id)}
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

            {filteredVehicles.length === 0 && (
              <p className="text-gray-400 mt-6">No vehicles found.</p>
            )}
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}

export default VehiclesPage;