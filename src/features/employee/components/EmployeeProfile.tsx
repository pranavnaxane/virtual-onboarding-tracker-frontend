import React from "react";
import type { EmployeeProfileProps } from "../types/employee.types";

export const EmployeeProfile: React.FC<EmployeeProfileProps> = ({ employee }) => {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      month: "long",
      day: "numeric",
      year: "numeric",
    });
  };

  const calculateTenure = (startDate: string) => {
    const start = new Date(startDate);
    const now = new Date();
    const diffInMonths = Math.floor(
      (now.getFullYear() - start.getFullYear()) * 12 + 
      (now.getMonth() - start.getMonth())
    );
    
    if (diffInMonths < 1) {
      const diffInDays = Math.floor((now.getTime() - start.getTime()) / (1000 * 60 * 60 * 24));
      return `${diffInDays} day${diffInDays !== 1 ? 's' : ''}`;
    } else if (diffInMonths < 12) {
      return `${diffInMonths} month${diffInMonths !== 1 ? 's' : ''}`;
    } else {
      const years = Math.floor(diffInMonths / 12);
      const remainingMonths = diffInMonths % 12;
      if (remainingMonths === 0) {
        return `${years} year${years !== 1 ? 's' : ''}`;
      } else {
        return `${years} year${years !== 1 ? 's' : ''}, ${remainingMonths} month${remainingMonths !== 1 ? 's' : ''}`;
      }
    }
  };

  const getInitials = (name: string) => {
    return name
      .split(" ")
      .map((n) => n[0])
      .join("")
      .toUpperCase();
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "active":
        return "bg-green-100 text-green-800 border-green-200";
      case "pending":
        return "bg-yellow-100 text-yellow-800 border-yellow-200";
      case "inactive":
        return "bg-gray-100 text-gray-800 border-gray-200";
      default:
        return "bg-gray-100 text-gray-800 border-gray-200";
    }
  };

  return (
    <div className="theme-card p-6 h-fit">
      <div className="flex justify-between items-start mb-6">
        <h2 className="text-xl font-bold text-gray-900">Employee Profile</h2>
        <span className={`px-3 py-1 rounded-full text-xs font-medium border ${getStatusColor(employee.status)}`}>
          {employee.status}
        </span>
      </div>

      <div className="text-center mb-6">
        <div className="relative inline-block">
          {employee.avatar ? (
            <img
              src={employee.avatar}
              alt={employee.name}
              className="w-20 h-20 rounded-full object-cover mx-auto shadow-lg"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.style.display = 'none';
                const fallback = target.nextElementSibling as HTMLElement;
                if (fallback) fallback.style.display = 'flex';
              }}
            />
          ) : null}
          <div
            className={`w-20 h-20 rounded-full bg-gradient-to-r from-blue-500 to-blue-600 text-white flex items-center justify-center text-xl font-bold mx-auto shadow-lg ${
              employee.avatar ? 'hidden' : 'flex'
            }`}
          >
            {getInitials(employee.name)}
          </div>
          
          <div className={`absolute bottom-0 right-0 w-5 h-5 border-2 border-white rounded-full shadow-sm ${
            employee.status === "active" ? "bg-green-500" :
            employee.status === "pending" ? "bg-yellow-500" : "bg-gray-500"
          }`}></div>
        </div>
        
        <h3 className="text-xl font-bold text-gray-900 mt-3">{employee.name}</h3>
        <p className="text-gray-600 font-medium">{employee.position}</p>
        <p className="text-gray-500 text-sm">{employee.department}</p>
      </div>

      <div className="space-y-4">
        <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
          <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
            <svg className="w-4 h-4 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
              <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
              <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
            </svg>
          </div>
          <div>
            <label className="text-xs font-medium text-gray-500 uppercase tracking-wide">Email</label>
            <p className="text-gray-900 font-medium">{employee.email}</p>
          </div>
        </div>

        <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
          <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
            <svg className="w-4 h-4 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M4 4a2 2 0 00-2 2v4a2 2 0 002 2V6h10a2 2 0 00-2-2H4zm2 6a2 2 0 012-2h8a2 2 0 012 2v4a2 2 0 01-2 2H8a2 2 0 01-2-2v-4zm6 4a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
            </svg>
          </div>
          <div>
            <label className="text-xs font-medium text-gray-500 uppercase tracking-wide">Employee ID</label>
            <p className="text-gray-900 font-medium">{employee.id}</p>
          </div>
        </div>

        <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
          <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
            <svg className="w-4 h-4 text-green-600" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
            </svg>
          </div>
          <div>
            <label className="text-xs font-medium text-gray-500 uppercase tracking-wide">Start Date</label>
            <p className="text-gray-900 font-medium">{formatDate(employee.startDate)}</p>
          </div>
        </div>

        <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
          <div className="w-8 h-8 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
            <svg className="w-4 h-4 text-orange-600" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
            </svg>
          </div>
          <div>
            <label className="text-xs font-medium text-gray-500 uppercase tracking-wide">Tenure</label>
            <p className="text-gray-900 font-medium">{calculateTenure(employee.startDate)}</p>
          </div>
        </div>
      </div>

      {/* Onboarding Progress */}
      <div className="mt-6 pt-6 border-t border-gray-200">
        <div className="flex items-center justify-between mb-3">
          <h4 className="text-sm font-semibold text-gray-900 uppercase tracking-wide">Onboarding Progress</h4>
          <span className="text-lg font-bold text-blue-600">{employee.onboardingProgress}%</span>
        </div>
        
        <div className="w-full bg-gray-200 rounded-full h-2 mb-2">
          <div 
            className="bg-gradient-to-r from-blue-500 to-purple-500 h-2 rounded-full transition-all duration-500 ease-out"
            style={{ width: `${employee.onboardingProgress}%` }}
          ></div>
        </div>
        
        <p className="text-xs text-gray-500">
          {employee.onboardingProgress >= 100 ? "Onboarding Complete!" : 
           employee.onboardingProgress >= 75 ? "Almost there!" :
           employee.onboardingProgress >= 50 ? "Halfway done!" :
           "Getting started"}
        </p>
      </div>
    </div>
  );
};
