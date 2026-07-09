import { Link, useNavigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";

function DashboardSidebar() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const role = user?.role;

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  return (
    <div className="w-64 min-h-screen bg-[#050505] text-white border-r border-[#D4AF37]/20 p-6">
      <h2 className="text-3xl font-bold text-[#D4AF37] mb-2">
        Majestic Lanka
      </h2>

      <p className="text-gray-400 text-sm mb-10">
        {role === "admin"
          ? "Admin Dashboard"
          : role === "driver"
          ? "Driver Dashboard"
          : "Customer Dashboard"}
      </p>

      <ul className="space-y-5 text-lg">
        <li>
          <Link to="/" className="block hover:text-[#D4AF37] transition">
            🏠 Website Home
          </Link>
        </li>

        {role === "admin" && (
          <>
            <li><Link to="/admin" className="block hover:text-[#D4AF37]">📊 Dashboard</Link></li>
            <li><Link to="/admin/booking-management" className="block hover:text-[#D4AF37]">📋 Booking Management</Link></li>
            <li><Link to="/admin/vehicles" className="block hover:text-[#D4AF37]">🚗 Vehicles</Link></li>
            <li><Link to="/admin/pricing" className="block hover:text-[#D4AF37]">💰 Pricing</Link></li>
            <li><Link to="/admin/customers" className="block hover:text-[#D4AF37]">👥 Customers</Link></li>
            <li><Link to="/admin/drivers" className="block hover:text-[#D4AF37]">👨‍✈️ Drivers</Link></li>
            <li><Link to="/admin/analytics" className="block hover:text-[#D4AF37]">📈 Analytics</Link></li>
            <li><Link to="/ai" className="block hover:text-[#D4AF37]">🤖 AI Assistant</Link></li>
            <li><Link to="/admin/settings" className="block hover:text-[#D4AF37]">⚙️ Settings</Link></li>
          </>
        )}

        {role === "customer" && (
          <>
            <li><Link to="/customer" className="block hover:text-[#D4AF37]">📊 Customer Dashboard</Link></li>
            <li><Link to="/ai" className="block hover:text-[#D4AF37]">🤖 AI Assistant</Link></li>
          </>
        )}

        {role === "driver" && (
          <>
            <li><Link to="/driver" className="block hover:text-[#D4AF37]">🚖 Driver Dashboard</Link></li>
            <li><Link to="/ai" className="block hover:text-[#D4AF37]">🤖 AI Assistant</Link></li>
          </>
        )}

        <li>
          <button
            onClick={handleLogout}
            className="w-full text-left text-red-400 hover:text-red-300 transition"
          >
            🚪 Logout
          </button>
        </li>
      </ul>
    </div>
  );
}

export default DashboardSidebar;