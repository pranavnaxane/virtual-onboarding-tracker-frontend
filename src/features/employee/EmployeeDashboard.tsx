import React, { useState, useEffect } from "react";
import { EmployeeStats } from "./components/EmployeeStats";
import { TaskList } from "./components/TaskList";
import { OnboardingProgress } from "./components/OnboardingProgress";
import { RecentActivity } from "./components/RecentActivity";
import { EmployeeProfile } from "./components/EmployeeProfile";
import type { Task, Employee, Activity } from "./types/employee.types";

const EmployeeDashboard: React.FC = () => {
  const [employee, setEmployee] = useState<Employee | null>(null);
  const [tasks, setTasks] = useState<Task[]>([]);
  const [activities, setActivities] = useState<Activity[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchEmployeeData = async () => {
      try {
        const mockEmployee: Employee = {
          id: "emp-001",
          name: "John Doe",
          email: "john.doe@company.com",
          department: "Engineering",
          position: "Software Developer",
          startDate: "2024-01-15",
          avatar: "https://via.placeholder.com/150",
          onboardingProgress: 75,
        };

        const mockTasks: Task[] = [
          {
            id: "task-1",
            title: "Complete IT Security Training",
            description: "Mandatory security training for all employees",
            status: "pending",
            priority: "high",
            dueDate: "2024-07-01",
            category: "training",
          },
          {
            id: "task-2",
            title: "Set up Development Environment",
            description: "Install required software and tools",
            status: "completed",
            priority: "medium",
            dueDate: "2024-06-20",
            category: "setup",
          },
          {
            id: "task-3",
            title: "Meet with Team Lead",
            description: "Initial meeting with direct supervisor",
            status: "in-progress",
            priority: "high",
            dueDate: "2024-06-28",
            category: "meeting",
          },
        ];

        const mockActivities: Activity[] = [
          {
            id: "act-1",
            type: "task_completed",
            description: "Completed 'Set up Development Environment'",
            timestamp: "2024-06-26T10:30:00Z",
          },
          {
            id: "act-2",
            type: "document_viewed",
            description: "Viewed Employee Handbook",
            timestamp: "2024-06-26T09:15:00Z",
          },
          {
            id: "act-3",
            type: "training_started",
            description: "Started IT Security Training",
            timestamp: "2024-06-25T14:20:00Z",
          },
        ];

        setEmployee(mockEmployee);
        setTasks(mockTasks);
        setActivities(mockActivities);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching employee data:", error);
        setLoading(false);
      }
    };

    fetchEmployeeData();
  }, []);

  const handleTaskStatusUpdate = (taskId: string, newStatus: Task["status"]) => {
    setTasks(prevTasks =>
      prevTasks.map(task =>
        task.id === taskId ? { ...task, status: newStatus } : task
      )
    );
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-25">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto"></div>
          <p className="mt-4 text-gray-700 font-medium">Loading dashboard...</p>
        </div>
      </div>
    );
  }

  if (!employee) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-25">
        <div className="text-center">
          <p className="text-danger-600 font-medium">Error loading employee data</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-25">
      <header className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div>
              <h1 className="text-3xl font-bold text-gray-1100 mb-1">Employee Dashboard</h1>
              <p className="text-gray-700 text-lg">Here's what's happening with your onboarding</p>
            </div>
            <div className="flex items-center space-x-3">
              <button className="bg-primary text-white px-6 py-2.5 rounded-lg hover:bg-primary-dark transition-all duration-200 font-medium shadow-sm">
                View Profile
              </button>
              <button className="bg-gray-100 text-gray-700 px-6 py-2.5 rounded-lg hover:bg-gray-200 transition-all duration-200 font-medium">
                Logout
              </button>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <div className="lg:col-span-8 space-y-8">
            <EmployeeStats 
              totalTasks={tasks.length}
              completedTasks={tasks.filter(t => t.status === "completed").length}
              pendingTasks={tasks.filter(t => t.status === "pending").length}
              onboardingProgress={employee.onboardingProgress}
            />

            <TaskList 
              tasks={tasks}
              onTaskStatusUpdate={handleTaskStatusUpdate}
            />

            <OnboardingProgress 
              progress={employee.onboardingProgress}
              employee={employee}
            />
          </div>

          <div className="lg:col-span-4 space-y-8">
            <EmployeeProfile employee={employee} />

            <RecentActivity activities={activities} />
          </div>
        </div>
      </main>
    </div>
  );
};

export default EmployeeDashboard;
