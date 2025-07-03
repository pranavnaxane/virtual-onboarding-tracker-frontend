import React, { useState, useEffect } from "react";
import { EmployeeStats } from "./components/EmployeeStats";
import { TaskList } from "./components/TaskList";
import { DocumentUpload } from "./components/DocumentUpload";
import type { 
  EmployeeDashboardData, 
  DocumentUpload as DocumentUploadType,
  Activity,
  UploadedDocument
} from "./types/employee.types";

const EmployeeDashboard: React.FC = () => {
  const [dashboardData, setDashboardData] = useState<EmployeeDashboardData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchDashboardData = async () => {
      try {
        const mockData: EmployeeDashboardData = {
          employee: {
            id: "emp-001",
            name: "John Doe",
            email: "john.doe@company.com",
            department: "Engineering",
            position: "Software Developer",
            startDate: "2024-01-15",
            avatar: "https://via.placeholder.com/150",
            onboardingProgress: 65,
            status: "active"
          },
          tasks: [
            {
              id: "task-1",
              title: "Complete IT Security Training",
              description: "Mandatory security training for all employees. This includes cybersecurity awareness, password policies, and data protection guidelines.",
              status: "pending",
              priority: "high",
              dueDate: "2024-07-15",
              category: "training",
              assignedBy: "HR Team",
              assignedDate: "2024-07-01"
            },
            {
              id: "task-2",
              title: "Upload Identity Documents",
              description: "Upload required identity documents including PAN card, Aadhaar card, and address proof for verification.",
              status: "in-progress",
              priority: "high",
              dueDate: "2024-07-10",
              category: "upload",
              assignedBy: "HR Team",
              assignedDate: "2024-07-01",
              requiredDocuments: ["PAN", "ID", "Address_Proof"]
            },
            {
              id: "task-3",
              title: "Set up Development Environment",
              description: "Install required software and tools for development work including IDE, version control, and project dependencies.",
              status: "completed",
              priority: "medium",
              dueDate: "2024-06-20",
              category: "setup",
              assignedBy: "Tech Lead",
              assignedDate: "2024-06-15",
              completedDate: "2024-06-18"
            },
            {
              id: "task-4",
              title: "Meet with Team Lead",
              description: "Initial meeting with direct supervisor to discuss role expectations, team structure, and project assignments.",
              status: "pending",
              priority: "medium",
              dueDate: "2024-07-08",
              category: "meeting",
              assignedBy: "Team Lead",
              assignedDate: "2024-07-01"
            },
            {
              id: "task-5",
              title: "Complete Employee Handbook Review",
              description: "Read and acknowledge the employee handbook covering company policies, benefits, and code of conduct.",
              status: "completed",
              priority: "low",
              dueDate: "2024-06-25",
              category: "documentation",
              assignedBy: "HR Team",
              assignedDate: "2024-06-20",
              completedDate: "2024-06-22"
            }
          ],
          documents: [
            {
              id: "doc-1",
              name: "PAN Card",
              type: "PAN",
              required: true,
              description: "Permanent Account Number card for tax identification",
              status: "uploaded",
              uploadedFile: {
                id: "file-1",
                name: "pan_card.pdf",
                type: "application/pdf",
                size: 245760,
                uploadDate: "2024-07-02T10:30:00Z",
                status: "approved",
                url: "/uploads/pan_card.pdf"
              }
            },
            {
              id: "doc-2",
              name: "Aadhaar Card",
              type: "ID",
              required: true,
              description: "Government issued identity card",
              status: "not_uploaded"
            },
            {
              id: "doc-3",
              name: "Address Proof",
              type: "Address_Proof",
              required: true,
              description: "Utility bill or bank statement as address proof",
              status: "not_uploaded"
            },
            {
              id: "doc-4",
              name: "Educational Certificate",
              type: "Educational_Certificate",
              required: false,
              description: "Highest educational qualification certificate",
              status: "not_uploaded"
            },
            {
              id: "doc-5",
              name: "Experience Letter",
              type: "Experience_Letter",
              required: false,
              description: "Previous employment experience letter",
              status: "not_uploaded"
            }
          ],
          activities: [
            {
              id: "act-1",
              type: "document_uploaded",
              description: "Uploaded PAN Card document",
              timestamp: "2024-07-02T10:30:00Z",
              relatedId: "doc-1"
            },
            {
              id: "act-2",
              type: "task_completed",
              description: "Completed 'Set up Development Environment'",
              timestamp: "2024-06-18T14:20:00Z",
              relatedId: "task-3"
            },
            {
              id: "act-3",
              type: "task_completed",
              description: "Completed 'Employee Handbook Review'",
              timestamp: "2024-06-22T09:15:00Z",
              relatedId: "task-5"
            },
            {
              id: "act-4",
              type: "document_approved",
              description: "PAN Card document approved by HR",
              timestamp: "2024-07-02T16:45:00Z",
              relatedId: "doc-1"
            }
          ],
          stats: {
            totalTasks: 5,
            completedTasks: 2,
            pendingTasks: 3,
            documentsUploaded: 1,
            documentsRequired: 3
          }
        };

        setDashboardData(mockData);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching dashboard data:", error);
        setLoading(false);
      }
    };

    fetchDashboardData();
  }, []);

  const handleTaskComplete = (taskId: string) => {
    if (!dashboardData) return;

    const updatedTasks = dashboardData.tasks.map(task => {
      if (task.id === taskId && task.status !== "completed") {
        return {
          ...task,
          status: "completed" as const,
          completedDate: new Date().toISOString()
        };
      }
      return task;
    });

    const newActivity: Activity = {
      id: `act-${Date.now()}`,
      type: "task_completed",
      description: `Completed '${dashboardData.tasks.find(t => t.id === taskId)?.title}'`,
      timestamp: new Date().toISOString(),
      relatedId: taskId
    };

    const updatedStats = {
      ...dashboardData.stats,
      completedTasks: updatedTasks.filter(t => t.status === "completed").length,
      pendingTasks: updatedTasks.filter(t => t.status === "pending").length
    };

    setDashboardData({
      ...dashboardData,
      tasks: updatedTasks,
      activities: [newActivity, ...dashboardData.activities],
      stats: updatedStats
    });
  };

  const handleDocumentUpload = (documentType: DocumentUploadType['type'], files: FileList) => {
    if (!dashboardData || !files.length) return;

    const file = files[0];
    const uploadedDocument: UploadedDocument = {
      id: `file-${Date.now()}`,
      name: file.name,
      type: file.type,
      size: file.size,
      uploadDate: new Date().toISOString(),
      status: "pending",
      url: URL.createObjectURL(file)
    };

    const updatedDocuments = dashboardData.documents.map(doc => {
      if (doc.type === documentType) {
        return {
          ...doc,
          status: "uploaded" as const,
          uploadedFile: uploadedDocument
        };
      }
      return doc;
    });

    const newActivity: Activity = {
      id: `act-${Date.now()}`,
      type: "document_uploaded",
      description: `Uploaded ${documentType.replace('_', ' ')} document`,
      timestamp: new Date().toISOString(),
      relatedId: dashboardData.documents.find(d => d.type === documentType)?.id
    };

    const updatedStats = {
      ...dashboardData.stats,
      documentsUploaded: updatedDocuments.filter(d => d.status === "uploaded").length
    };

    setDashboardData({
      ...dashboardData,
      documents: updatedDocuments,
      activities: [newActivity, ...dashboardData.activities],
      stats: updatedStats
    });
  };

  const handleTaskDocumentUpload = (taskId: string, files: FileList) => {
    if (!dashboardData || !files.length) return;

    const task = dashboardData.tasks.find(t => t.id === taskId);
    if (!task || !task.requiredDocuments) return;
    const documentType = task.requiredDocuments[0] as DocumentUploadType['type'];
    handleDocumentUpload(documentType, files);
  };

  const handleDocumentDelete = (documentId: string) => {
    if (!dashboardData) return;

    const updatedDocuments = dashboardData.documents.map(doc => {
      if (doc.id === documentId) {
        return {
          ...doc,
          status: "not_uploaded" as const,
          uploadedFile: undefined
        };
      }
      return doc;
    });

    const updatedStats = {
      ...dashboardData.stats,
      documentsUploaded: updatedDocuments.filter(d => d.status === "uploaded").length
    };

    setDashboardData({
      ...dashboardData,
      documents: updatedDocuments,
      stats: updatedStats
    });
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

  if (!dashboardData) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-25">
        <div className="text-center">
          <p className="text-danger-600 font-medium">Error loading dashboard data</p>
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
              <p className="text-gray-700 text-lg">Track your onboarding progress and complete assigned tasks</p>
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
              stats={dashboardData.stats}
              onboardingProgress={dashboardData.employee.onboardingProgress}
            />

            <TaskList 
              tasks={dashboardData.tasks}
              onTaskComplete={handleTaskComplete}
              onDocumentUpload={handleTaskDocumentUpload}
            />

           
          </div>

          <div className="lg:col-span-4 space-y-8">
             <DocumentUpload 
              documents={dashboardData.documents}
              onDocumentUpload={handleDocumentUpload}
              onDocumentDelete={handleDocumentDelete}
            />
          </div>
        </div>
      </main>
    </div>
  );
};

export default EmployeeDashboard;
