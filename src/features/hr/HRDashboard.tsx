import { type FC } from "react";
import Header from "./layout/Header";
import Sidebar from "./layout/Sidebar";
import type { HRProfileData } from "./types/hr.types";

const HRDashboard: FC = () => {
  const hrProfile: HRProfileData = {
    hrId: "HR123",
    name: "Jane Doe",
    designation: "HR Manager",
    email: "jane.doe@example.com",
    region: "North",
    assignedDepartments: "Sales, Engineering",
    isActive: true,
    createdAt: "2024-01-01T10:00:00Z",
    updatedAt: "2024-06-01T15:30:00Z",
    avatar: "https://i.pravatar.cc/150?img=47",
  };

  return (
    <div className="h-screen w-screen overflow-hidden bg-gray-50">
      <Header profileInfo={hrProfile} />
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
