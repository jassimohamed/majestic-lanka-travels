import DashboardLayout from "../../layouts/DashboardLayout";
import DashboardStats from "../../components/admin/DashboardStats";
import RevenueCard from "../../components/admin/RevenueCard";
import DriverStats from "../../components/admin/DriverStats";
import RecentBookings from "../../components/admin/RecentBookings";

function AdminDashboard() {
  return (
    <DashboardLayout>
      <div className="p-8 bg-[#050505] min-h-screen text-white">

        <p className="uppercase tracking-[4px] text-[#D4AF37]">
          Admin Panel
        </p>

        <h1 className="text-5xl font-bold mt-3 mb-10">
          Dashboard
        </h1>

        {/* Statistics */}
        <DashboardStats />

        {/* Revenue & Driver Stats */}
        <div className="grid lg:grid-cols-2 gap-8 mt-10">

          <RevenueCard />

          <DriverStats />

        </div>

        {/* Recent Bookings */}
        <div className="mt-10">

          <RecentBookings />

        </div>

      </div>
    </DashboardLayout>
  );
}

export default AdminDashboard;