import { type FC, useState } from "react";
import Header from "./layout/Header";
import Sidebar from "./layout/Sidebar";
import type { HRProfileData } from "./types/hr.types";
import { useSidebar } from "../../context";
import { Outlet } from "react-router-dom";

const HRDashboard: FC = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { selectedTab } = useSidebar();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

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

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="h-screen w-screen overflow-hidden bg-gray-50">
      <Header
        profileInfo={hrProfile}
        onMenuToggle={toggleSidebar}
        isSidebarOpen={isSidebarOpen}
      />
      <Sidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />

      <main
        className={`
          transition-all duration-300 ease-in-out
          mt-14 sm:mt-16 md:mt-20 
          lg:ml-56 xl:ml-64 
          h-[calc(100vh-3.5rem)] sm:h-[calc(100vh-4rem)] md:h-[calc(100vh-5rem)]
          overflow-y-auto 
          p-3 sm:p-4 md:p-6
          scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100
        `}
        role="main"
      >
        <Outlet />
      </main>
    </div>
  );
};

export default HRDashboard;
