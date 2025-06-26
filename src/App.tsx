import LoginPage from "./features/loginPage/loginPage";
import { EmployeeDashboard } from "./features/employee";

function App() {
  // For demo purposes, you can toggle between login and dashboard
  // In a real app, this would be controlled by authentication state
  const showDashboard = true; // Change to false to show login page

  return <div>
    {showDashboard ? <EmployeeDashboard /> : <LoginPage />}
  </div>;
}

export default App;
