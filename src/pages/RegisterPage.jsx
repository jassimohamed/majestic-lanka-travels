import { useState } from "react";
import { useNavigate } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import { registerUser } from "../services/authService";
import {
  isRequired,
  isEmail,
  isPhone,
  isPassword,
  onlyNumbers,
} from "../utils/validationRules";

function RegisterPage() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    country: "",
    password: "",
    role: "customer",
  });

  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const validateForm = () => {
    const errors = [];

    if (!isRequired(formData.fullName)) errors.push("Full name is required");
    if (!isEmail(formData.email)) errors.push("Enter a valid email address");
    if (!isPhone(formData.phone)) errors.push("Phone must be 9 to 12 numbers");
    if (!isRequired(formData.country)) errors.push("Country is required");
    if (!isPassword(formData.password)) errors.push("Password must be at least 6 characters");

    return errors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: name === "phone" ? onlyNumbers(value) : value,
    }));
  };

  const handleRegister = async (e) => {
    e.preventDefault();

    const errors = validateForm();

    if (errors.length > 0) {
      alert(errors.join("\n"));
      return;
    }

    try {
      setLoading(true);

      const result = await registerUser({
        ...formData,
        role: "customer",
      });

      if (!result.success) {
        alert(result.message || "Registration failed");
        return;
      }

      localStorage.setItem("user", JSON.stringify(result.data));
      localStorage.setItem("token", result.data.token);

      navigate("/customer");
    } catch (error) {
      alert("Registration failed. Check backend server.");
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <MainLayout>
      <section className="min-h-screen bg-[#050505] flex items-center justify-center px-6 pt-28">
        <div className="bg-[#181818] border border-[#D4AF37]/20 p-10 rounded-3xl shadow-xl w-full max-w-md text-white">
          <h1 className="text-4xl font-bold text-center mb-8 text-[#D4AF37]">
            Create Account
          </h1>

          <form onSubmit={handleRegister} className="space-y-4">
            <input
              name="fullName"
              type="text"
              placeholder="Full Name"
              className="w-full p-4 bg-[#111111] rounded-xl outline-none border border-transparent focus:border-[#D4AF37]"
              value={formData.fullName}
              onChange={handleChange}
            />

            <input
              name="email"
              type="email"
              placeholder="Email"
              className="w-full p-4 bg-[#111111] rounded-xl outline-none border border-transparent focus:border-[#D4AF37]"
              value={formData.email}
              onChange={handleChange}
            />

            <input
              name="phone"
              type="tel"
              placeholder="Phone Number"
              maxLength="12"
              className="w-full p-4 bg-[#111111] rounded-xl outline-none border border-transparent focus:border-[#D4AF37]"
              value={formData.phone}
              onChange={handleChange}
            />

            <input
              name="country"
              type="text"
              placeholder="Country"
              className="w-full p-4 bg-[#111111] rounded-xl outline-none border border-transparent focus:border-[#D4AF37]"
              value={formData.country}
              onChange={handleChange}
            />

            <input
              name="password"
              type="password"
              placeholder="Password"
              className="w-full p-4 bg-[#111111] rounded-xl outline-none border border-transparent focus:border-[#D4AF37]"
              value={formData.password}
              onChange={handleChange}
            />

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-[#D4AF37] text-black py-4 rounded-xl font-bold hover:bg-[#F5D76E] transition disabled:bg-gray-500"
            >
              {loading ? "Creating Account..." : "Register"}
            </button>
          </form>
        </div>
      </section>
    </MainLayout>
  );
}

export default RegisterPage;