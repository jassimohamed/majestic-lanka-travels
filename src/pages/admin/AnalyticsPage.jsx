import DashboardLayout from "../../layouts/DashboardLayout";

function AnalyticsPage() {
  return (
    <DashboardLayout>
      <h1 className="text-4xl font-bold mb-8">
        Analytics Dashboard
      </h1>

      <div className="grid md:grid-cols-4 gap-6 mb-10">
        <div className="bg-white p-6 rounded-xl shadow">
          <h3 className="font-bold">Monthly Revenue</h3>
          <p className="text-3xl mt-3">$12,500</p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow">
          <h3 className="font-bold">Monthly Bookings</h3>
          <p className="text-3xl mt-3">48</p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow">
          <h3 className="font-bold">Top Tour</h3>
          <p className="text-3xl mt-3">Ella</p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow">
          <h3 className="font-bold">Conversion Rate</h3>
          <p className="text-3xl mt-3">18%</p>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        <div className="bg-white p-6 rounded-xl shadow">
          <h2 className="text-2xl font-bold mb-6">Revenue Overview</h2>

          <div className="space-y-4">
            <div>
              <p>January</p>
              <div className="bg-gray-200 rounded-full h-4">
                <div className="bg-blue-900 h-4 rounded-full w-3/4"></div>
              </div>
            </div>

            <div>
              <p>February</p>
              <div className="bg-gray-200 rounded-full h-4">
                <div className="bg-blue-900 h-4 rounded-full w-2/3"></div>
              </div>
            </div>

            <div>
              <p>March</p>
              <div className="bg-gray-200 rounded-full h-4">
                <div className="bg-blue-900 h-4 rounded-full w-5/6"></div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl shadow">
          <h2 className="text-2xl font-bold mb-6">Popular Tours</h2>

          <ul className="space-y-4">
            <li className="flex justify-between">
              <span>Ella Tour</span>
              <strong>32 bookings</strong>
            </li>

            <li className="flex justify-between">
              <span>Sigiriya Tour</span>
              <strong>25 bookings</strong>
            </li>

            <li className="flex justify-between">
              <span>Kandy Tour</span>
              <strong>18 bookings</strong>
            </li>

            <li className="flex justify-between">
              <span>Yala Safari</span>
              <strong>14 bookings</strong>
            </li>
          </ul>
        </div>
      </div>
    </DashboardLayout>
  );
}

export default AnalyticsPage;