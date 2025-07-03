import React from "react";
import type { EmployeeStatsProps } from "../types/employee.types";

export const EmployeeStats: React.FC<EmployeeStatsProps> = ({ stats, onboardingProgress }) => {
  return (
    <div className="theme-card p-6">
      <h2 className="text-xl font-bold text-gray-900 mb-6">Onboarding Overview</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
  
        <div className="bg-blue-50 rounded-xl p-5 border border-blue-100">
          <div className="flex items-center justify-between mb-3">
            <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center">
              <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M6 2a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V4a2 2 0 00-2-2H6zm1 2a1 1 0 000 2h6a1 1 0 100-2H7zm6 7a1 1 0 011 1v3a1 1 0 11-2 0v-3a1 1 0 011-1zm-3 3a1 1 0 100 2h.01a1 1 0 100-2H10zm-4 1a1 1 0 011-1h.01a1 1 0 110 2H7a1 1 0 01-1-1zm1-4a1 1 0 100 2h.01a1 1 0 100-2H7zm2 1a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1zm4-4a1 1 0 100 2h.01a1 1 0 100-2H13zM9 9a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1zM7 8a1 1 0 000 2h.01a1 1 0 000-2H7z" clipRule="evenodd" />
              </svg>
            </div>
            <span className="text-3xl font-bold text-blue-600">{stats.totalTasks}</span>
          </div>
          <div>
            <h3 className="font-semibold text-gray-900 mb-1">Total Tasks</h3>
            <p className="text-sm text-gray-600">Assigned to you</p>
          </div>
        </div>

   
        <div className="bg-green-50 rounded-xl p-5 border border-green-100">
          <div className="flex items-center justify-between mb-3">
            <div className="w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center">
              <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
            </div>
            <span className="text-3xl font-bold text-green-600">{stats.completedTasks}</span>
          </div>
          <div>
            <h3 className="font-semibold text-gray-900 mb-1">Completed</h3>
            <p className="text-sm text-gray-600">
              {stats.totalTasks > 0 ? Math.round((stats.completedTasks / stats.totalTasks) * 100) : 0}% completion rate
            </p>
            {stats.completedTasks > 0 && (
              <div className="flex items-center mt-2">
                <span className="text-xs text-green-600 font-medium">↗ Good progress</span>
              </div>
            )}
          </div>
        </div>

   
        <div className="bg-orange-50 rounded-xl p-5 border border-orange-100">
          <div className="flex items-center justify-between mb-3">
            <div className="w-12 h-12 bg-orange-500 rounded-lg flex items-center justify-center">
              <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
              </svg>
            </div>
            <span className="text-3xl font-bold text-orange-600">{stats.pendingTasks}</span>
          </div>
          <div>
            <h3 className="font-semibold text-gray-900 mb-1">Pending</h3>
            <p className="text-sm text-gray-600">Awaiting action</p>
          </div>
        </div>


        <div className="bg-purple-50 rounded-xl p-5 border border-purple-100">
          <div className="flex items-center justify-between mb-3">
            <div className="w-12 h-12 bg-purple-500 rounded-lg flex items-center justify-center">
              <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z" clipRule="evenodd" />
              </svg>
            </div>
            <span className="text-3xl font-bold text-purple-600">
              {stats.documentsUploaded}/{stats.documentsRequired}
            </span>
          </div>
          <div>
            <h3 className="font-semibold text-gray-900 mb-1">Documents</h3>
            <p className="text-sm text-gray-600">Uploaded/Required</p>
            {stats.documentsRequired > 0 && (
              <div className="mt-2">
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div 
                    className="bg-purple-500 h-2 rounded-full transition-all duration-300"
                    style={{ 
                      width: `${Math.round((stats.documentsUploaded / stats.documentsRequired) * 100)}%` 
                    }}
                  ></div>
                </div>
                <span className="text-xs text-purple-600 font-medium mt-1 block">
                  {Math.round((stats.documentsUploaded / stats.documentsRequired) * 100)}% complete
                </span>
              </div>
            )}
          </div>
        </div>
      </div>


      <div className="mt-8 p-6 bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl border border-blue-100">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h3 className="text-lg font-semibold text-gray-900">Overall Onboarding Progress</h3>
            <p className="text-sm text-gray-600">Track your journey to becoming fully onboarded</p>
          </div>
          <div className="text-right">
            <span className="text-3xl font-bold text-blue-600">{onboardingProgress}%</span>
            <p className="text-sm text-gray-600">Complete</p>
          </div>
        </div>
        
        <div className="w-full bg-gray-200 rounded-full h-3 mb-2">
          <div 
            className="bg-gradient-to-r from-blue-500 to-purple-500 h-3 rounded-full transition-all duration-500 ease-out"
            style={{ width: `${onboardingProgress}%` }}
          ></div>
        </div>
        
        <div className="flex justify-between text-xs text-gray-500">
          <span>Started: January 15, 2024</span>
          <span>
            {onboardingProgress >= 100 ? "Completed!" : 
             onboardingProgress >= 75 ? "Almost there!" :
             onboardingProgress >= 50 ? "Halfway done!" :
             "Getting started"}
          </span>
        </div>
      </div>
    </div>
  );
};
