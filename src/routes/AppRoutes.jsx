import { Routes, Route } from "react-router-dom";

import HomePage from "../pages/HomePage";
import AboutPage from "../pages/AboutPage";
import ToursPage from "../pages/ToursPage";
import FleetPage from "../pages/FleetPage";
import ContactPage from "../pages/ContactPage";
import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage";
import AdminDashboard from "../dashboard/admin/AdminDashboard";
import CustomerDashboard from "../dashboard/customer/CustomerDashboard";
import DriverDashboard from "../dashboard/driver/DriverDashboard";
import BookingsPage from "../pages/admin/BookingsPage";
import VehiclesPage from "../pages/admin/VehiclesPage";
import DriversPage from "../pages/admin/DriversPage";
import CustomersPage from "../pages/admin/CustomersPage";
import AnalyticsPage from "../pages/admin/AnalyticsPage";
import AIAssistantPage from "../pages/admin/AIAssistantPage";
import SettingsPage from "../pages/admin/SettingsPage";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/tours" element={<ToursPage />} />
      <Route path="/fleet" element={<FleetPage />} />
      <Route path="/contact" element={<ContactPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/admin" element={<AdminDashboard />} />
<Route path="/customer" element={<CustomerDashboard />} />
<Route path="/driver" element={<DriverDashboard />} />
<Route path="/admin/bookings" element={<BookingsPage />} />
<Route path="/admin/vehicles" element={<VehiclesPage />} />
<Route path="/admin/drivers" element={<DriversPage />} />
<Route path="/admin/customers" element={<CustomersPage />} />
<Route path="/admin/analytics" element={<AnalyticsPage />} />
<Route path="/admin/ai" element={<AIAssistantPage />} />
<Route path="/admin/settings" element={<SettingsPage />} />
    </Routes>
  );
}

export default AppRoutes;