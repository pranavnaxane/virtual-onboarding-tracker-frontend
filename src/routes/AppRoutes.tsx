import { Navigate, Route, Routes } from "react-router-dom";
import LoginPage from "../features/loginPage/loginPage";
import { HRDashboard } from "../features/hr";
import { HRProfile } from "../features/hr/HRProfile";

const AppRoutes = () => {
  return (
    <Routes>
      {/* Public route */}
      <Route path="/login" element={<LoginPage />} />

      {/* Protected route */}
      <Route path="/hr-dashboard" element={<HRDashboard />} />
      <Route path="/hr-profile" element={<HRProfile />} />

      {/* Fallback route */}
      <Route path="*" element={<Navigate to={"/login"} />} />
    </Routes>
  );
};

export default AppRoutes;
