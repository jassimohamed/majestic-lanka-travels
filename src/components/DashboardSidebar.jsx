import { Link } from "react-router-dom";

function DashboardSidebar() {
  return (
    <div className="w-64 min-h-screen bg-blue-900 text-white p-6">
      <h2 className="text-2xl font-bold mb-10">
        Majestic Lanka
      </h2>

      <ul className="space-y-6 text-lg">

        <li>
          <Link to="/admin" className="hover:text-amber-400">
            Dashboard
          </Link>
        </li>

        <li>
          <Link to="/admin/bookings" className="hover:text-amber-400">
            Bookings
          </Link>
        </li>

        <li>
          <Link to="/tours" className="hover:text-amber-400">
            Tours
          </Link>
        </li>

        <li>
          <Link to="/admin/vehicles" className="hover:text-amber-400">
            Vehicles
          </Link>
        </li>

        <li>
          <Link to="/admin/customers" className="hover:text-amber-400">
            Customers
          </Link>
        </li>

        <li>
          <Link to="/admin/drivers" className="hover:text-amber-400">
            Drivers
          </Link>
        </li>

        <li>
          <Link to="/admin/analytics" className="hover:text-amber-400">
            Analytics
          </Link>
        </li>

        <li>
          <Link to="/admin/ai" className="hover:text-amber-400">
            AI Assistant
          </Link>
        </li>

        <li>
          <Link to="/admin/settings" className="hover:text-amber-400">
            Settings
          </Link>
        </li>

      </ul>
    </div>
  );
}

export default DashboardSidebar;
