import { Navigate, Route, Routes } from "react-router-dom";
import LoginPage from "../features/loginPage/loginPage";
import { HRDashboard, HRProfile } from "../features/hr";

const AppRoutes = () => {
  return (
    <Routes>
      {/* Root redirect */}
      <Route path="/" element={<Navigate to="/login" replace />} />

      {/* Authentication Routes */}
      <Route path="/login" element={<LoginPage />} />
      <Route
        path="/register"
        element={<div>Register Page - Coming Soon</div>}
      />
      <Route
        path="/forgot-password"
        element={<div>Forgot Password - Coming Soon</div>}
      />

      {/* HR Routes */}
      <Route path="/hr">
        <Route index element={<Navigate to="/hr/dashboard" replace />} />
        <Route path="dashboard" element={<HRDashboard />} />
        <Route path="profile" element={<HRProfile />} />
      </Route>

      {/* 404 and fallback routes */}
      <Route path="/404" element={<div>Page Not Found</div>} />
      <Route path="*" element={<Navigate to="/404" replace />} />
    </Routes>
  );
};

export default AppRoutes;
