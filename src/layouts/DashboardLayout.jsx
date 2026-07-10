import { useState } from "react";
import { Menu, X } from "lucide-react";
import DashboardSidebar from "../components/DashboardSidebar";

function DashboardLayout({ children }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#050505] text-white">
      {/* Mobile top bar */}
      <header className="lg:hidden fixed top-0 left-0 right-0 z-[60] h-16 bg-[#050505] border-b border-[#D4AF37]/20 flex items-center justify-between px-4">
        <div>
          <h1 className="text-[#D4AF37] text-xl font-bold">
            Majestic Lanka
          </h1>

          <p className="text-gray-400 text-[10px] tracking-widest">
            Travels & Taxi
          </p>
        </div>

        <button
          type="button"
          onClick={() => setSidebarOpen(true)}
          aria-label="Open dashboard menu"
          className="border border-[#D4AF37]/40 text-[#D4AF37] rounded-xl p-2 hover:bg-[#D4AF37] hover:text-black transition"
        >
          <Menu size={26} />
        </button>
      </header>

      {/* Desktop sidebar */}
      <aside className="hidden lg:block fixed top-0 left-0 bottom-0 w-64 z-40">
        <DashboardSidebar />
      </aside>

      {/* Mobile dark overlay */}
      {sidebarOpen && (
        <button
          type="button"
          aria-label="Close dashboard menu"
          onClick={() => setSidebarOpen(false)}
          className="lg:hidden fixed inset-0 z-[70] bg-black/70 backdrop-blur-sm"
        />
      )}

      {/* Mobile sidebar drawer */}
      <aside
        className={`lg:hidden fixed top-0 left-0 bottom-0 z-[80] w-[82%] max-w-[300px] bg-[#050505] transition-transform duration-300 ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <button
          type="button"
          onClick={() => setSidebarOpen(false)}
          aria-label="Close dashboard menu"
          className="absolute top-4 right-4 z-10 text-[#D4AF37] border border-[#D4AF37]/40 rounded-xl p-2"
        >
          <X size={24} />
        </button>

        <DashboardSidebar onNavigate={() => setSidebarOpen(false)} />
      </aside>

      {/* Dashboard content */}
      <main className="min-w-0 pt-16 lg:pt-0 lg:ml-64">
        {children}
      </main>
    </div>
  );
}

export default DashboardLayout;