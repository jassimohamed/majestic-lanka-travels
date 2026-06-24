function DashboardSidebar() {
  return (
    <div className="w-64 min-h-screen bg-blue-900 text-white p-6">
      <h2 className="text-2xl font-bold mb-10">
        Majestic Lanka
      </h2>

      <ul className="space-y-4">

        <li className="hover:text-amber-400 cursor-pointer">
          Dashboard
        </li>

        <li className="hover:text-amber-400 cursor-pointer">
          Bookings
        </li>

        <li className="hover:text-amber-400 cursor-pointer">
          Tours
        </li>

        <li className="hover:text-amber-400 cursor-pointer">
          Vehicles
        </li>

        <li className="hover:text-amber-400 cursor-pointer">
          Customers
        </li>

        <li className="hover:text-amber-400 cursor-pointer">
          Drivers
        </li>

        <li className="hover:text-amber-400 cursor-pointer">
          AI Assistant
        </li>

        <li className="hover:text-amber-400 cursor-pointer">
          Settings
        </li>

      </ul>
    </div>
  );
}

export default DashboardSidebar;