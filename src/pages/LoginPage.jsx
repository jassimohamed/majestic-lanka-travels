import { useState } from "react";
import { useNavigate } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import { loginUser } from "../services/authService";
import { isEmail, isPassword } from "../utils/validationRules";
import useAuth from "../hooks/useAuth";

function LoginPage() {
  const { login } = useAuth();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    if (!isEmail(formData.email)) {
      alert("Please enter a valid email address.");
      return;
    }

    if (!isPassword(formData.password)) {
      alert("Password must be at least 6 characters.");
      return;
    }

    try {
      setLoading(true);

      const result = await loginUser(formData);

      if (!result.success) {
        alert(result.message || "Login failed");
        return;
      }

      login(result.data);

      if (result.data.role === "admin") {
        navigate("/admin");
      } else if (result.data.role === "driver") {
        navigate("/driver");
      } else {
        navigate("/customer");
      }
    } catch (error) {
      alert("Login failed. Check backend server.");
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
            Login
          </h1>

          <form onSubmit={handleLogin} className="space-y-4">
            <input
              name="email"
              type="email"
              placeholder="Email"
              required
              className="w-full p-4 bg-[#111111] rounded-xl outline-none border border-transparent focus:border-[#D4AF37]"
              value={formData.email}
              onChange={handleChange}
            />

            <input
              name="password"
              type="password"
              placeholder="Password"
              minLength={6}
              required
              className="w-full p-4 bg-[#111111] rounded-xl outline-none border border-transparent focus:border-[#D4AF37]"
              value={formData.password}
              onChange={handleChange}
            />

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-[#D4AF37] text-black py-4 rounded-xl font-bold hover:bg-[#F5D76E] transition disabled:bg-gray-500"
            >
              {loading ? "Logging in..." : "Login"}
            </button>
          </form>
        </div>
      </section>
    </MainLayout>
  );
}

export default LoginPage;