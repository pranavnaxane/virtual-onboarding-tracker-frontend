import React from "react";
import type { EmployeeStatsProps } from "../types/employee.types";

export const EmployeeStats: React.FC<EmployeeStatsProps> = ({
  totalTasks,
  completedTasks,
  pendingTasks,
  onboardingProgress,
}) => {
  const completionRate = totalTasks > 0 ? Math.round((completedTasks / totalTasks) * 100) : 0;

  const stats = [
    {
      id: 'total',
      title: 'Total Tasks',
      value: totalTasks,
      subtitle: 'Assigned to you',
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
        </svg>
      ),
      bgColor: 'bg-blue-50',
      iconBg: 'bg-blue-100',
      iconColor: 'text-blue-600',
      valueColor: 'text-blue-600',
    },
    {
      id: 'completed',
      title: 'Completed',
      value: completedTasks,
      subtitle: `${completionRate}% completion rate`,
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
        </svg>
      ),
      bgColor: 'bg-green-50',
      iconBg: 'bg-green-100',
      iconColor: 'text-green-600',
      valueColor: 'text-green-600',
      showTrend: true,
    },
    {
      id: 'pending',
      title: 'Pending',
      value: pendingTasks,
      subtitle: 'Awaiting action',
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
        </svg>
      ),
      bgColor: 'bg-orange-50',
      iconBg: 'bg-orange-100',
      iconColor: 'text-orange-600',
      valueColor: 'text-orange-600',
    },
    {
      id: 'progress',
      title: 'Onboarding',
      value: `${onboardingProgress}%`,
      subtitle: 'Progress completion',
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
          <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      bgColor: 'bg-purple-50',
      iconBg: 'bg-purple-100',
      iconColor: 'text-purple-600',
      valueColor: 'text-purple-600',
      hasProgressBar: true,
      progressValue: onboardingProgress,
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {stats.map((stat) => (
        <div
          key={stat.id}
          className={`relative overflow-hidden rounded-xl border border-gray-200 ${stat.bgColor} p-6 transition-all duration-300 hover:shadow-lg hover:scale-105 group`}
        >
          <div className="absolute inset-0 opacity-5">
            <div className="absolute -right-4 -top-4 h-24 w-24 rounded-full bg-current"></div>
            <div className="absolute -bottom-2 -left-2 h-16 w-16 rounded-full bg-current"></div>
          </div>

          <div className="relative">
            <div className="flex items-center justify-between mb-4">
              <div className={`inline-flex h-12 w-12 items-center justify-center rounded-lg ${stat.iconBg} ${stat.iconColor} transition-transform duration-300 group-hover:scale-110`}>
                {stat.icon}
              </div>
              <div className="text-right">
                <div className={`text-3xl font-bold ${stat.valueColor} transition-colors duration-300`}>
                  {stat.value}
                </div>
              </div>
            </div>

            <div className="space-y-1">
              <h3 className="text-lg font-semibold text-gray-900">{stat.title}</h3>
              <p className="text-sm text-gray-600">{stat.subtitle}</p>
            </div>

            {stat.hasProgressBar && (
              <div className="mt-4">
                <div className="flex items-center justify-between text-xs text-gray-600 mb-2">
                  <span>Progress</span>
                  <span>{stat.progressValue}%</span>
                </div>
                <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-purple-500 to-purple-600 rounded-full transition-all duration-700 ease-out"
                    style={{ width: `${stat.progressValue}%` }}
                  ></div>
                </div>
              </div>
            )}

            {stat.showTrend && completionRate > 0 && (
              <div className="mt-3 flex items-center text-xs">
                <svg className="w-3 h-3 text-green-500 mr-1" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.293 7.707a1 1 0 010-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L10 8.414 6.707 11.707a1 1 0 01-1.414-1.414z" clipRule="evenodd" />
                </svg>
                <span className="text-green-600 font-medium">Good progress</span>
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};
