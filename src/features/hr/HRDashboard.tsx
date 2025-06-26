import { type FC } from "react";
import Header from "./layout/Header";
import Sidebar from "./layout/Sidebar";

const HRDashboard: FC = () => {
  return (
    <div className="h-screen w-screen overflow-hidden bg-gray-50">
      <Header />
      <Sidebar />
      <main
        className="ml-64 mt-16 h-[calc(100vh-64px)] overflow-y-auto p-6"
        role="main"
      >
        <div className="p-6 space-y-4">
          <h2 className="text-lg font-semibold">Welcome to the HR Dashboard</h2>
          <p>
            This area scrolls independently. Add onboarding forms, task lists,
            or reports here.
          </p>
        </div>
      </main>
    </div>
  );
};

export default HRDashboard;
