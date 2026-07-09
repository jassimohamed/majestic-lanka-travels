import DashboardSidebar from "../components/DashboardSidebar";

function DashboardLayout({ children }) {
  return (
    <div className="min-h-screen bg-[#050505] text-white flex">
      <aside className="w-64 shrink-0 relative z-50">
        <DashboardSidebar />
      </aside>

      <main className="flex-1 min-w-0 relative z-10">
        {children}
      </main>
    </div>
  );
}

export default DashboardLayout;