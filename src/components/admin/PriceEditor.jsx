import { useState } from "react";

function PriceEditor({ addPrice }) {
  const [formData, setFormData] = useState({
    service: "",
    vehicle: "",
    price: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.service || !formData.vehicle || !formData.price) {
      alert("Please fill all fields");
      return;
    }

    addPrice({
      service: formData.service,
      vehicle: formData.vehicle,
      price: Number(formData.price),
    });

    setFormData({
      service: "",
      vehicle: "",
      price: "",
    });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-[#181818] rounded-3xl border border-[#D4AF37]/20 p-8"
    >
      <h2 className="text-2xl font-bold mb-6">
        Add / Edit Price
      </h2>

      <input
        type="text"
        name="service"
        placeholder="Service"
        value={formData.service}
        onChange={handleChange}
        className="w-full bg-[#111111] rounded-xl p-4 mb-4 outline-none border border-transparent focus:border-[#D4AF37]"
      />

      <input
        type="text"
        name="vehicle"
        placeholder="Vehicle"
        value={formData.vehicle}
        onChange={handleChange}
        className="w-full bg-[#111111] rounded-xl p-4 mb-4 outline-none border border-transparent focus:border-[#D4AF37]"
      />

      <input
        type="number"
        name="price"
        placeholder="Price"
        value={formData.price}
        onChange={handleChange}
        className="w-full bg-[#111111] rounded-xl p-4 mb-6 outline-none border border-transparent focus:border-[#D4AF37]"
      />

      <button
        type="submit"
        className="w-full bg-[#D4AF37] text-black py-4 rounded-xl font-bold hover:bg-[#F5D76E] transition"
      >
        Save Price
      </button>
    </form>
  );
}

export default PriceEditor;