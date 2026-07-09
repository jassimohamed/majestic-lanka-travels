import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

import { AuthProvider } from "./context/AuthContext";
import { BookingProvider } from "./context/BookingContext.jsx";
import { AppDataProvider } from "./context/AppDataContext.jsx";
import { BookingStepProvider } from "./context/BookingStepContext";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <AppDataProvider>
        <BookingProvider>
          <BookingStepProvider>
            <App />
          </BookingStepProvider>
        </BookingProvider>
      </AppDataProvider>
    </AuthProvider>
  </StrictMode>
);