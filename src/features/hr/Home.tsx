import React from "react";
const HomePage = () => {
    return (
        <div className="max-w-7xl mx-auto space-y-4 sm:space-y-6">
          <div className="bg-white rounded-lg shadow-sm border border-black/10 p-4 sm:p-6 transition-all duration-200 hover:shadow-md">
            <h2 className="text-lg sm:text-xl font-semibold text-gray-900">
              Welcome to the HR Dashboard
            </h2>
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
    )
}

export default HomePage;
