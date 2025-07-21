export interface Employee {
  id: string;
  name: string;
  email: string;
  department: string;
  position: string;
  startDate: string;
  avatar?: string;
  onboardingProgress: number;
  status: "active" | "pending" | "inactive";
}

export interface OnboardingTask {
  id: string;
  title: string;
  description: string;
  status: "pending" | "in-progress" | "completed";
  priority: "low" | "medium" | "high";
  dueDate: string;
  category: "training" | "setup" | "documentation" | "meeting" | "upload";
  assignedBy: string;
  assignedDate: string;
  completedDate?: string;
  requiredDocuments?: string[];
  uploadedDocuments?: UploadedDocument[];
}

export interface UploadedDocument {
  id: string;
  name: string;
  type: string;
  size: number;
  uploadDate: string;
  status: "pending" | "approved" | "rejected";
  url: string;
  taskId?: string;
}

export interface DocumentUpload {
  id: string;
  name: string;
  type: "PAN" | "ID" | "Address_Proof" | "Educational_Certificate" | "Experience_Letter" | "Other";
  required: boolean;
  description: string;
  status: "not_uploaded" | "uploaded" | "approved" | "rejected";
  uploadedFile?: UploadedDocument;
}

export interface Activity {
  id: string;
  type: "task_completed" | "task_started" | "document_uploaded" | "document_approved" | "document_rejected" | "profile_updated";
  description: string;
  timestamp: string;
  relatedId?: string;
}

export interface EmployeeDashboardData {
  employee: Employee;
  tasks: OnboardingTask[];
  documents: DocumentUpload[];
  activities: Activity[];
  stats: {
    totalTasks: number;
    completedTasks: number;
    pendingTasks: number;
    documentsUploaded: number;
    documentsRequired: number;
  };
}

export interface EmployeeStatsProps {
  stats: EmployeeDashboardData['stats'];
  onboardingProgress: number;
}

export interface TaskListProps {
  tasks: OnboardingTask[];
  onTaskComplete: (taskId: string) => void;
  onDocumentUpload: (taskId: string, files: FileList) => void;
}

export interface DocumentUploadProps {
  documents: DocumentUpload[];
  onDocumentUpload: (documentType: DocumentUpload['type'], files: FileList) => void;
  onDocumentDelete: (documentId: string) => void;
}

export interface RecentActivityProps {
  activities: Activity[];
}

export interface EmployeeProfileProps {
  employee: Employee;
}

export interface OnboardingProgressProps {
  progress: number;
  employee: Employee;
}