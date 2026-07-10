import { Link, useNavigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";

function DashboardSidebar({ onNavigate }) {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const role = user?.role;

  const handleNavigate = () => {
    if (onNavigate) {
      onNavigate();
    }
  };

  const handleLogout = () => {
    logout();
    handleNavigate();
    navigate("/");
  };

  const linkClass =
    "block w-full rounded-xl px-3 py-3 hover:bg-[#181818] hover:text-[#D4AF37] transition";

  return (
    <div className="w-full h-full min-h-screen bg-[#050505] text-white border-r border-[#D4AF37]/20 p-5 pt-6 overflow-y-auto">
      <h2 className="text-3xl font-bold text-[#D4AF37] mb-2 pr-12">
        Majestic Lanka
      </h2>

      <p className="text-gray-400 text-sm mb-8">
        {role === "admin"
          ? "Admin Dashboard"
          : role === "driver"
          ? "Driver Dashboard"
          : "Customer Dashboard"}
      </p>

      <ul className="space-y-2 text-base">
        <li>
          <Link to="/" onClick={handleNavigate} className={linkClass}>
            🏠 Website Home
          </Link>
        </li>

        {role === "admin" && (
          <>
            <li>
              <Link
                to="/admin"
                onClick={handleNavigate}
                className={linkClass}
              >
                📊 Dashboard
              </Link>
            </li>

            <li>
              <Link
                to="/admin/booking-management"
                onClick={handleNavigate}
                className={linkClass}
              >
                📋 Booking Management
              </Link>
            </li>

            <li>
              <Link
                to="/admin/vehicles"
                onClick={handleNavigate}
                className={linkClass}
              >
                🚗 Vehicles
              </Link>
            </li>

            <li>
              <Link
                to="/admin/customers"
                onClick={handleNavigate}
                className={linkClass}
              >
                👥 Customers
              </Link>
            </li>

            <li>
              <Link
                to="/admin/drivers"
                onClick={handleNavigate}
                className={linkClass}
              >
                👨‍✈️ Drivers
              </Link>
            </li>

            <li>
              <Link
                to="/admin/analytics"
                onClick={handleNavigate}
                className={linkClass}
              >
                📈 Analytics
              </Link>
            </li>

            <li>
              <Link
                to="/ai"
                onClick={handleNavigate}
                className={linkClass}
              >
                🤖 AI Assistant
              </Link>
            </li>

            <li>
              <Link
                to="/admin/settings"
                onClick={handleNavigate}
                className={linkClass}
              >
                ⚙️ Settings
              </Link>
            </li>
          </>
        )}

        {role === "customer" && (
          <>
            <li>
              <Link
                to="/customer"
                onClick={handleNavigate}
                className={linkClass}
              >
                📊 Customer Dashboard
              </Link>
            </li>

            <li>
              <Link
                to="/ai"
                onClick={handleNavigate}
                className={linkClass}
              >
                🤖 AI Assistant
              </Link>
            </li>
          </>
        )}

        {role === "driver" && (
          <>
            <li>
              <Link
                to="/driver"
                onClick={handleNavigate}
                className={linkClass}
              >
                🚖 Driver Dashboard
              </Link>
            </li>

            <li>
              <Link
                to="/ai"
                onClick={handleNavigate}
                className={linkClass}
              >
                🤖 AI Assistant
              </Link>
            </li>
          </>
        )}

        <li className="pt-4 border-t border-[#D4AF37]/20 mt-4">
          <button
            type="button"
            onClick={handleLogout}
            className="block w-full text-left rounded-xl px-3 py-3 text-red-400 hover:bg-red-500/10 hover:text-red-300 transition"
          >
            🚪 Logout
          </button>
        </li>
      </ul>
    </div>
  );
}

export default DashboardSidebar;