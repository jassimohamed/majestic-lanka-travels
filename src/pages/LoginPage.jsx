import { useState } from "react";
import { useNavigate } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";

function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    if (email === "admin@gmail.com") {
      navigate("/admin");
    } else if (email === "customer@gmail.com") {
      navigate("/customer");
    } else if (email === "driver@gmail.com") {
      navigate("/driver");
    } else {
      alert("Invalid email");
    }
  };

  return (
    <MainLayout>
      <section className="min-h-screen bg-gray-100 flex items-center justify-center px-6">
        <div className="bg-white p-10 rounded-2xl shadow-xl w-full max-w-md">

          <h1 className="text-4xl font-bold text-center mb-8">
            Login
          </h1>

          <form onSubmit={handleLogin} className="space-y-4">

            <input
              type="email"
              placeholder="Email"
              className="w-full p-4 border rounded-lg"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <input
              type="password"
              placeholder="Password"
              className="w-full p-4 border rounded-lg"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            <button
              type="submit"
              className="w-full bg-blue-900 text-white py-4 rounded-lg font-bold"
            >
              Login
            </button>

          </form>

        </div>
      </section>
    </MainLayout>
  );
}

export default LoginPage;