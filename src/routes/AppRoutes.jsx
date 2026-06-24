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
    </Routes>
  );
}

export default AppRoutes;