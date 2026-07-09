import { Routes, Route } from "react-router-dom";

import HomePage from "../pages/HomePage";
import AboutPage from "../pages/AboutPage";
import ToursPage from "../pages/ToursPage";
import FleetPage from "../pages/FleetPage";
import ContactPage from "../pages/ContactPage";
import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage";
import BookingPage from "../pages/BookingPage";
import BookingSuccessPage from "../pages/BookingSuccessPage";

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
import PricingPage from "../pages/admin/PricingPage";
import BookingManagementPage from "../pages/admin/BookingManagementPage";

import ProtectedRoute from "../components/auth/ProtectedRoute";
import RoleProtectedRoute from "../components/auth/RoleProtectedRoute";

function AdminOnly({ children }) {
  return (
    <ProtectedRoute>
      <RoleProtectedRoute allowedRoles={["admin"]}>
        {children}
      </RoleProtectedRoute>
    </ProtectedRoute>
  );
}

function CustomerOnly({ children }) {
  return (
    <ProtectedRoute>
      <RoleProtectedRoute allowedRoles={["customer"]}>
        {children}
      </RoleProtectedRoute>
    </ProtectedRoute>
  );
}

function DriverOnly({ children }) {
  return (
    <ProtectedRoute>
      <RoleProtectedRoute allowedRoles={["driver"]}>
        {children}
      </RoleProtectedRoute>
    </ProtectedRoute>
  );
}

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/tours" element={<ToursPage />} />
      <Route path="/fleet" element={<FleetPage />} />
      <Route path="/contact" element={<ContactPage />} />
      <Route path="/booking" element={<BookingPage />} />
      <Route path="/booking/success" element={<BookingSuccessPage />} />

      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />

      <Route
        path="/admin"
        element={
          <AdminOnly>
            <AdminDashboard />
          </AdminOnly>
        }
      />

      <Route
        path="/admin/bookings"
        element={
          <AdminOnly>
            <BookingsPage />
          </AdminOnly>
        }
      />

      <Route
        path="/admin/booking-management"
        element={
          <AdminOnly>
            <BookingManagementPage />
          </AdminOnly>
        }
      />

      <Route
        path="/admin/vehicles"
        element={
          <AdminOnly>
            <VehiclesPage />
          </AdminOnly>
        }
      />

      <Route
        path="/admin/drivers"
        element={
          <AdminOnly>
            <DriversPage />
          </AdminOnly>
        }
      />

      <Route
        path="/admin/customers"
        element={
          <AdminOnly>
            <CustomersPage />
          </AdminOnly>
        }
      />

      <Route
        path="/admin/analytics"
        element={
          <AdminOnly>
            <AnalyticsPage />
          </AdminOnly>
        }
      />

      <Route
        path="/admin/ai"
        element={
          <AdminOnly>
            <AIAssistantPage />
          </AdminOnly>
        }
      />

      <Route
        path="/admin/settings"
        element={
          <AdminOnly>
            <SettingsPage />
          </AdminOnly>
        }
      />

      <Route
        path="/admin/pricing"
        element={
          <AdminOnly>
            <PricingPage />
          </AdminOnly>
        }
      />

      <Route
        path="/customer"
        element={
          <CustomerOnly>
            <CustomerDashboard />
          </CustomerOnly>
        }
      />
      <Route
  path="/ai"
  element={
    <ProtectedRoute>
      <AIAssistantPage />
    </ProtectedRoute>
  }
/>
<Route
  path="/ai"
  element={
    <ProtectedRoute>
      <AIAssistantPage />
    </ProtectedRoute>
  }
/>
      <Route
        path="/driver"
        element={
          <DriverOnly>
            <DriverDashboard />
          </DriverOnly>
        }
      />
    </Routes>
  );
}

export default AppRoutes;