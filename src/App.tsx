import LoginPage from "./features/loginPage/loginPage";
import { HRDashboard } from "./features/hr";
import { SidebarProvider } from "./context";
function App() {
  return (
    <div>
      <SidebarProvider>
        <HRDashboard />
      </SidebarProvider>
    </div>
  );
}

export default App;
