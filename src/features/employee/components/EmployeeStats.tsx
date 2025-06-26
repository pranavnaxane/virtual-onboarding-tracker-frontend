import React from "react";
import type { EmployeeStatsProps } from "../types/employee.types";

export const EmployeeStats: React.FC<EmployeeStatsProps> = ({
  totalTasks,
  completedTasks,
  pendingTasks,
  onboardingProgress,
}) => {
  const inProgressTasks = totalTasks - completedTasks - pendingTasks;
  const completionRate = totalTasks > 0 ? Math.round((completedTasks / totalTasks) * 100) : 0;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 lg:gap-6">
      {/* Total Tasks Card */}
      <div className="theme-card p-4 lg:p-6 hover:shadow-lg transition-all duration-200 min-h-[120px] flex flex-col justify-between">
        <div className="flex items-start justify-between">
          <div className="flex-1 min-w-0">
            <h4 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-1">{totalTasks}</h4>
            <p className="text-gray-600 font-medium text-sm lg:text-base">Total Tasks</p>
            <p className="text-xs lg:text-sm text-gray-500 mt-1">Assigned to you</p>
          </div>
          <div className="w-10 h-10 lg:w-12 lg:h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0 ml-3">
            <svg className="w-5 h-5 lg:w-6 lg:h-6 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
            </svg>
          </div>
        </div>
      </div>

      {/* Completed Tasks Card */}
      <div className="theme-card p-4 lg:p-6 hover:shadow-lg transition-all duration-200 min-h-[120px] flex flex-col justify-between">
        <div className="flex items-start justify-between">
          <div className="flex-1 min-w-0">
            <h4 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-1">{completedTasks}</h4>
            <p className="text-gray-600 font-medium text-sm lg:text-base">Completed</p>
            <div className="flex items-center mt-1 flex-wrap">
              <span className="text-xs lg:text-sm text-green-600 font-medium">+{completionRate}%</span>
              <span className="text-xs lg:text-sm text-gray-500 ml-1">completion rate</span>
            </div>
          </div>
          <div className="w-10 h-10 lg:w-12 lg:h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0 ml-3">
            <svg className="w-5 h-5 lg:w-6 lg:h-6 text-green-600" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
          </div>
        </div>
      </div>

      {/* Pending Tasks Card */}
      <div className="theme-card p-4 lg:p-6 hover:shadow-lg transition-all duration-200 min-h-[120px] flex flex-col justify-between">
        <div className="flex items-start justify-between">
          <div className="flex-1 min-w-0">
            <h4 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-1">{pendingTasks}</h4>
            <p className="text-gray-600 font-medium text-sm lg:text-base">Pending</p>
            <p className="text-xs lg:text-sm text-gray-500 mt-1">Awaiting action</p>
          </div>
          <div className="w-10 h-10 lg:w-12 lg:h-12 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0 ml-3">
            <svg className="w-5 h-5 lg:w-6 lg:h-6 text-orange-600" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
            </svg>
          </div>
        </div>
      </div>

      {/* Onboarding Progress Card */}
      <div className="theme-card p-4 lg:p-6 hover:shadow-lg transition-all duration-200 min-h-[120px] flex flex-col justify-between">
        <div className="flex items-start justify-between mb-3">
          <div className="flex-1 min-w-0">
            <h4 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-1">{onboardingProgress}%</h4>
            <p className="text-gray-600 font-medium text-sm lg:text-base">Onboarding</p>
            <div className="flex items-center mt-1 flex-wrap">
              <span className="text-xs lg:text-sm text-blue-600 font-medium">Progress</span>
              <span className="text-xs lg:text-sm text-gray-500 ml-1">completion</span>
            </div>
          </div>
          <div className="w-10 h-10 lg:w-12 lg:h-12 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0 ml-3">
            <svg className="w-5 h-5 lg:w-6 lg:h-6 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
        </div>
        
        {/* Progress Bar */}
        <div className="mt-auto">
          <div className="theme-progress-bar">
            <div 
              className="theme-progress-fill bg-gradient-to-r from-blue-500 to-purple-600"
              style={{ width: `${onboardingProgress}%` }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
};
