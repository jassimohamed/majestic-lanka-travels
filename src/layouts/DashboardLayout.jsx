import DashboardSidebar from "../components/DashboardSidebar";

function DashboardLayout({ children }) {
  return (
    <div className="flex">

      <DashboardSidebar />

      <div className="flex-1 p-8 bg-gray-100 min-h-screen">
        {children}
      </div>

    </div>
  );
}

export default DashboardLayout;