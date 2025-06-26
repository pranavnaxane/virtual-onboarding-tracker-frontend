export interface Employee {
  id: string;
  name: string;
  email: string;
  department: string;
  position: string;
  startDate: string;
  avatar: string;
  onboardingProgress: number;
}

export interface Task {
  id: string;
  title: string;
  description: string;
  status: "pending" | "in-progress" | "completed";
  priority: "low" | "medium" | "high";
  dueDate: string;
  category: "training" | "setup" | "meeting" | "documentation" | "other";
}

export interface Activity {
  id: string;
  type: "task_completed" | "task_started" | "document_viewed" | "training_started" | "training_completed" | "meeting_scheduled" | "profile_updated";
  description: string;
  timestamp: string;
}

export interface EmployeeStatsProps {
  totalTasks: number;
  completedTasks: number;
  pendingTasks: number;
  onboardingProgress: number;
}

export interface TaskListProps {
  tasks: Task[];
  onTaskStatusUpdate: (taskId: string, newStatus: Task["status"]) => void;
}

export interface OnboardingProgressProps {
  progress: number;
  employee: Employee;
}

export interface RecentActivityProps {
  activities: Activity[];
}

export interface EmployeeProfileProps {
  employee: Employee;
}
