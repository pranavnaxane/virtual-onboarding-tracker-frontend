import { Navigate, Route, Routes } from "react-router-dom";
import LoginPage from "../features/loginPage/loginPage";
import { HRDashboard, HRProfile, UsersPage } from "../features/hr";
import AddUser from "../features/hr/AddUser";
import Checklist from "../features/hr/checklist/Checklist";
import HomePage from "../features/hr/Home";
import {EmployeeDashboard} from "../features/employee/";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/login" replace />} />

      <Route path="/login" element={<LoginPage />} />
      <Route
        path="/register"
        element={<div>Register Page - Coming Soon</div>}
      />
      <Route
        path="/forgot-password"
        element={<div>Forgot Password - Coming Soon</div>}
      />

      <Route
        path="/hr"
        element={<Navigate to="/hr/dashboard/home" replace />}
      />

      <Route path="/hr/dashboard" element={<HRDashboard />}>
        <Route index element={<Navigate to="home" replace />} />
        <Route path="home" element={<HomePage />} />
        <Route path="users" element={<UsersPage />} />
        <Route path="checklist/:employeeId" element={<Checklist />} />
      </Route>

      <Route path="/hr/dashboard/users/newuser" element={<AddUser />}/>

      <Route path="/employee/dashboard" element={<EmployeeDashboard />}/>

      <Route path="/hr/profile" element={<HRProfile />} />

      <Route path="/404" element={<div>Page Not Found</div>} />
      <Route path="*" element={<Navigate to="/404" replace />} />
    </Routes>
  );
};

export default AppRoutes;
