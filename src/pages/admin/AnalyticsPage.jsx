import { useEffect, useMemo, useState } from "react";
import DashboardLayout from "../../layouts/DashboardLayout";
import { fetchBookings } from "../../services/adminBookingService";

function AnalyticsPage() {
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadAnalytics() {
      try {
        const result = await fetchBookings();

        if (result.success) {
          setBookings(result.data);
        }
      } catch (error) {
        console.error("Failed to load analytics:", error);
      } finally {
        setLoading(false);
      }
    }

    loadAnalytics();
  }, []);

  const analytics = useMemo(() => {
    const totalBookings = bookings.length;

    const completedBookings = bookings.filter(
      (booking) => booking.status === "Completed"
    );

    const totalRevenue = completedBookings.reduce(
      (total, booking) => total + Number(booking.price || 0),
      0
    );

    const conversionRate =
      totalBookings > 0
        ? Math.round((completedBookings.length / totalBookings) * 100)
        : 0;

    const tourCounts = bookings.reduce((acc, booking) => {
      const tour = booking.tourType || "Other";
      acc[tour] = (acc[tour] || 0) + 1;
      return acc;
    }, {});

    const popularTours = Object.entries(tourCounts)
      .map(([tour, count]) => ({ tour, count }))
      .sort((a, b) => b.count - a.count);

    const topTour = popularTours[0]?.tour || "No data";

    const monthlyStats = bookings.reduce((acc, booking) => {
      const date = booking.createdAt ? new Date(booking.createdAt) : null;

      if (!date || Number.isNaN(date.getTime())) return acc;

      const month = date.toLocaleString("default", { month: "long" });

      if (!acc[month]) {
        acc[month] = {
          bookings: 0,
          revenue: 0,
        };
      }

      acc[month].bookings += 1;

      if (booking.status === "Completed") {
        acc[month].revenue += Number(booking.price || 0);
      }

      return acc;
    }, {});

    const monthlyData = Object.entries(monthlyStats).map(([month, data]) => ({
      month,
      ...data,
    }));

    return {
      totalBookings,
      totalRevenue,
      conversionRate,
      popularTours,
      topTour,
      monthlyData,
    };
  }, [bookings]);

  const maxMonthlyRevenue =
    Math.max(...analytics.monthlyData.map((item) => item.revenue), 1) || 1;

  if (loading) {
    return (
      <DashboardLayout>
        <div className="p-8 bg-[#050505] min-h-screen text-white">
          <p className="text-gray-400">Loading analytics...</p>
        </div>
      </DashboardLayout>
    );
  }

  return (
    <DashboardLayout>
      <div className="p-8 bg-[#050505] min-h-screen text-white">
        <p className="uppercase tracking-[4px] text-[#D4AF37]">
          Admin Panel
        </p>

        <h1 className="text-5xl font-bold mt-3 mb-10">
          Analytics Dashboard
        </h1>

        <div className="grid md:grid-cols-4 gap-6 mb-10">
          <div className="bg-[#181818] border border-[#D4AF37]/20 rounded-3xl p-6">
            <h3 className="text-gray-400">Total Revenue</h3>
            <p className="text-3xl font-bold text-[#D4AF37] mt-4">
              LKR {analytics.totalRevenue.toLocaleString()}
            </p>
          </div>

          <div className="bg-[#181818] border border-[#D4AF37]/20 rounded-3xl p-6">
            <h3 className="text-gray-400">Total Bookings</h3>
            <p className="text-3xl font-bold text-[#D4AF37] mt-4">
              {analytics.totalBookings}
            </p>
          </div>

          <div className="bg-[#181818] border border-[#D4AF37]/20 rounded-3xl p-6">
            <h3 className="text-gray-400">Top Tour</h3>
            <p className="text-3xl font-bold text-[#D4AF37] mt-4">
              {analytics.topTour}
            </p>
          </div>

          <div className="bg-[#181818] border border-[#D4AF37]/20 rounded-3xl p-6">
            <h3 className="text-gray-400">Conversion Rate</h3>
            <p className="text-3xl font-bold text-[#D4AF37] mt-4">
              {analytics.conversionRate}%
            </p>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          <div className="bg-[#181818] border border-[#D4AF37]/20 rounded-3xl p-8">
            <h2 className="text-2xl font-bold mb-8">
              Monthly Revenue
            </h2>

            {analytics.monthlyData.length === 0 ? (
              <p className="text-gray-400">No monthly data yet.</p>
            ) : (
              <div className="space-y-6">
                {analytics.monthlyData.map((item) => {
                  const width = Math.max(
                    (item.revenue / maxMonthlyRevenue) * 100,
                    5
                  );

                  return (
                    <div key={item.month}>
                      <div className="flex justify-between mb-2">
                        <span>{item.month}</span>
                        <span className="text-[#D4AF37]">
                          LKR {item.revenue.toLocaleString()}
                        </span>
                      </div>

                      <div className="w-full bg-[#111111] rounded-full h-3">
                        <div
                          className="bg-[#D4AF37] h-3 rounded-full"
                          style={{ width: `${width}%` }}
                        />
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </div>

          <div className="bg-[#181818] border border-[#D4AF37]/20 rounded-3xl p-8">
            <h2 className="text-2xl font-bold mb-8">
              Popular Tours
            </h2>

            {analytics.popularTours.length === 0 ? (
              <p className="text-gray-400">No tour data yet.</p>
            ) : (
              <div className="space-y-5">
                {analytics.popularTours.map((item) => (
                  <div
                    key={item.tour}
                    className="flex justify-between border-b border-[#D4AF37]/10 pb-4"
                  >
                    <span>{item.tour}</span>
                    <span className="font-bold text-[#D4AF37]">
                      {item.count} booking(s)
                    </span>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}

export default AnalyticsPage;