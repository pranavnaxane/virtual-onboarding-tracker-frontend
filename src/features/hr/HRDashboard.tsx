import { type FC, useState } from "react";
import Header from "./layout/Header";
import Sidebar from "./layout/Sidebar";
import type { HRProfileData } from "./types/hr.types";
import UsersPage from "./Users";
import { useSidebar } from "../../context";

const HRDashboard: FC = () => {
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
        <div className="max-w-7xl mx-auto space-y-4 sm:space-y-6">
          <div className="bg-white rounded-lg shadow-sm border border-black/10 p-4 sm:p-6 transition-all duration-200 hover:shadow-md">
            <h2 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3 sm:mb-4">
              Welcome to the HR Dashboard
            </h2>
            <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
              This area scrolls independently and is fully responsive. Add
              onboarding forms, task lists, or reports here. The layout adapts
              seamlessly across all device sizes.
            </p>
          </div>

          {/* Sample content cards for demonstration */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            <div className="bg-white rounded-lg shadow-sm border border-black/10 p-4 sm:p-6 transition-all duration-200 hover:shadow-md hover:border-black/20">
              <h3 className="font-semibold text-gray-900 mb-2 text-sm sm:text-base">
                Quick Stats
              </h3>
              <p className="text-gray-600 text-sm">
                Dashboard metrics and KPIs
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-sm border border-black/10 p-4 sm:p-6 transition-all duration-200 hover:shadow-md hover:border-black/20">
              <h3 className="font-semibold text-gray-900 mb-2 text-sm sm:text-base">
                Recent Activity
              </h3>
              <p className="text-gray-600 text-sm">
                Latest onboarding activities
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-sm border border-black/10 p-4 sm:p-6 transition-all duration-200 hover:shadow-md hover:border-black/20">
              <h3 className="font-semibold text-gray-900 mb-2 text-sm sm:text-base">
                Pending Tasks
              </h3>
              <p className="text-gray-600 text-sm">Items requiring attention</p>
            </div>
          </div>

          {/* Additional content for scroll demonstration */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
            <div className="bg-white rounded-lg shadow-sm border border-black/10 p-4 sm:p-6 transition-all duration-200 hover:shadow-md hover:border-black/20">
              <h3 className="font-semibold text-gray-900 mb-3 text-sm sm:text-base">
                Employee Onboarding
              </h3>
              <div className="space-y-2">
                <div className="flex justify-between items-center text-sm">
                  <span className="text-gray-600">New Hires This Month</span>
                  <span className="font-medium text-gray-900">12</span>
                </div>
                <div className="flex justify-between items-center text-sm">
                  <span className="text-gray-600">Pending Reviews</span>
                  <span className="font-medium text-orange-600">3</span>
                </div>
                <div className="flex justify-between items-center text-sm">
                  <span className="text-gray-600">Completed</span>
                  <span className="font-medium text-green-600">9</span>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-sm border border-black/10 p-4 sm:p-6 transition-all duration-200 hover:shadow-md hover:border-black/20">
              <h3 className="font-semibold text-gray-900 mb-3 text-sm sm:text-base">
                Department Overview
              </h3>
              <div className="space-y-2">
                <div className="flex justify-between items-center text-sm">
                  <span className="text-gray-600">Sales Team</span>
                  <span className="font-medium text-gray-900">24 members</span>
                </div>
                <div className="flex justify-between items-center text-sm">
                  <span className="text-gray-600">Engineering</span>
                  <span className="font-medium text-gray-900">18 members</span>
                </div>
                <div className="flex justify-between items-center text-sm">
                  <span className="text-gray-600">Marketing</span>
                  <span className="font-medium text-gray-900">8 members</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        {selectedTab === "Users" ? <UsersPage /> : <h2>home</h2>}
      </main>
    </div>
  );
};

export default HRDashboard;
