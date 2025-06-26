import React from "react";
import type { TaskListProps, Task } from "../types/employee.types";

export const TaskList: React.FC<TaskListProps> = ({ tasks, onTaskStatusUpdate }) => {
  const getStatusColor = (status: Task["status"]) => {
    switch (status) {
      case "completed":
        return "bg-green-100 text-green-800 border-green-200";
      case "in-progress":
        return "bg-blue-100 text-blue-800 border-blue-200";
      case "pending":
        return "bg-orange-100 text-orange-800 border-orange-200";
      default:
        return "bg-gray-100 text-gray-800 border-gray-200";
    }
  };

  const getPriorityIcon = (priority: Task["priority"]) => {
    switch (priority) {
      case "high":
        return (
          <div className="w-2 h-2 bg-red-500 rounded-full"></div>
        );
      case "medium":
        return (
          <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
        );
      case "low":
        return (
          <div className="w-2 h-2 bg-green-500 rounded-full"></div>
        );
      default:
        return (
          <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
        );
    }
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    });
  };

  const handleStatusChange = (taskId: string, newStatus: Task["status"]) => {
    onTaskStatusUpdate(taskId, newStatus);
  };

  return (
    <div className="theme-card p-6">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h2 className="text-xl font-bold text-gray-900">Tasks</h2>
          <p className="text-gray-600 text-sm mt-1">Manage your onboarding tasks</p>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-sm text-gray-500">{tasks.length} total</span>
          <button className="text-sm text-blue-600 hover:text-blue-800 font-medium">
            View all
          </button>
        </div>
      </div>

      <div className="space-y-4">
        {tasks.map((task, index) => (
          <div
            key={task.id}
            className={`border rounded-xl p-5 hover:shadow-md transition-all duration-200 ${
              index === 0 ? 'border-blue-200 bg-blue-50/30' : 'border-gray-200 bg-white'
            }`}
          >
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-3">
                  <h3 className="font-semibold text-gray-900 text-lg">{task.title}</h3>
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-medium border ${getStatusColor(
                      task.status
                    )}`}
                  >
                    {task.status.replace("-", " ")}
                  </span>
                  <div className="flex items-center gap-1">
                    {getPriorityIcon(task.priority)}
                    <span className="text-xs text-gray-600 capitalize">
                      {task.priority} priority
                    </span>
                  </div>
                </div>
                <p className="text-gray-600 mb-4 leading-relaxed">{task.description}</p>
                <div className="flex items-center gap-6 text-sm text-gray-500">
                  <div className="flex items-center gap-1">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                    </svg>
                    <span>Due: {formatDate(task.dueDate)}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M17.707 9.293a1 1 0 010 1.414l-7 7a1 1 0 01-1.414 0l-7-7A.997.997 0 012 10V5a3 3 0 013-3h5c.256 0 .512.098.707.293l7 7zM5 6a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
                    </svg>
                    <span className="capitalize">{task.category}</span>
                  </div>
                </div>
              </div>

              <div className="ml-6">
                <select
                  value={task.status}
                  onChange={(e) =>
                    handleStatusChange(task.id, e.target.value as Task["status"])
                  }
                  className="text-sm border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white min-w-[120px]"
                >
                  <option value="pending">Pending</option>
                  <option value="in-progress">In Progress</option>
                  <option value="completed">Completed</option>
                </select>
              </div>
            </div>
          </div>
        ))}

        {tasks.length === 0 && (
          <div className="text-center py-12">
            <svg className="w-16 h-16 mx-auto text-gray-300 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
            </svg>
            <p className="text-gray-500 font-medium">No tasks assigned yet</p>
            <p className="text-gray-400 text-sm mt-1">Your onboarding tasks will appear here</p>
          </div>
        )}
      </div>
    </div>
  );
};
