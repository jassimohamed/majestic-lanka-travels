import DashboardLayout from "../../layouts/DashboardLayout";
import BookingTable from "../../components/admin/BookingTable";
import BookingSearch from "../../components/admin/BookingSearch";

function BookingManagementPage() {
  return (
    <DashboardLayout>
      <div className="p-8 bg-[#050505] min-h-screen text-white">
        <p className="uppercase tracking-[4px] text-[#D4AF37]">
          Admin Panel
        </p>

        <h1 className="text-5xl font-bold mt-3">
          Booking Management
        </h1>

        <p className="text-gray-400 mt-4">
          View, search and manage customer booking requests.
        </p>

        <div className="mt-10">
          <BookingSearch />
        </div>

        <div className="mt-8">
          <BookingTable />
        </div>
      </div>
    </DashboardLayout>
  );
}

export default BookingManagementPage;