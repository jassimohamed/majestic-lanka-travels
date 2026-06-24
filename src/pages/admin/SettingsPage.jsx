import DashboardLayout from "../../layouts/DashboardLayout";

function SettingsPage() {
  return (
    <DashboardLayout>
      <h1 className="text-4xl font-bold mb-8">
        Settings
      </h1>

      <div className="bg-white rounded-xl shadow p-6">
        <h2 className="text-2xl font-bold mb-6">
          Company Information
        </h2>

        <div className="grid md:grid-cols-2 gap-4">

          <input
            type="text"
            defaultValue="Majestic Lanka Travels & Taxi"
            className="border p-3 rounded-lg"
          />

          <input
            type="email"
            defaultValue="info@majesticlanka.com"
            className="border p-3 rounded-lg"
          />

          <input
            type="text"
            defaultValue="+94 77 123 4567"
            className="border p-3 rounded-lg"
          />

          <input
            type="text"
            defaultValue="Sri Lanka"
            className="border p-3 rounded-lg"
          />

        </div>

        <button className="mt-6 bg-blue-900 text-white px-6 py-3 rounded-lg">
          Save Settings
        </button>
      </div>
    </DashboardLayout>
  );
}

export default SettingsPage;