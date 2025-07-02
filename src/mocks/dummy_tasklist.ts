export interface Task {
  taskId: string;
  title: string;
  description: string;
  assignedTo: string;
  assignedBy: string;
  dueDate: string;
  status: 'pending' | 'in-progress' | 'completed';
  priority: 'high' | 'medium' | 'low';
  tags: string;
  attachments: string;
  createdAt: string;
  updatedAt: string;
}
const taskList: Task[] = [
  {
    taskId: "task-001",
    title: "Complete Onboarding Docs",
    description: "Submit identity verification and tax forms.",
    assignedTo: "f9859bef-0d77-4aa2-a116-1218c07bc70d",
    assignedBy: "600b18f1-bdef-4ec3-8819-96a84058f786",
    dueDate: "2024-07-05",
    status: "pending",
    priority: "high",
    tags: "onboarding,docs",
    attachments: "onboarding-pack.zip",
    createdAt: "2024-06-28T10:00:00Z",
    updatedAt: "2024-06-28T10:00:00Z",
  },
  {
    taskId: "task-002",
    title: "Review Engineering Handbook",
    description: "Read through the engineering team processes and expectations.",
    assignedTo: "f9859bef-0d77-4aa2-a116-1218c07bc70d",
    assignedBy: "600b18f1-bdef-4ec3-8819-96a84058f786",
    dueDate: "2024-07-10",
    status: "in-progress",
    priority: "medium",
    tags: "reading,training",
    attachments: "engineering-handbook.pdf",
    createdAt: "2024-06-30T08:45:00Z",
    updatedAt: "2024-07-01T11:12:00Z",
  },
  {
    taskId: "task-003",
    title: "Set Up Development Environment",
    description: "Install required tools and configure local dev environment.",
    assignedTo: "f9859bef-0d77-4aa2-a116-1218c07bc70d",
    assignedBy: "600b18f1-bdef-4ec3-8819-96a84058f786",
    dueDate: "2024-07-07",
    status: "completed",
    priority: "high",
    tags: "setup,devtools",
    attachments: "",
    createdAt: "2024-06-29T14:20:00Z",
    updatedAt: "2024-07-01T16:10:00Z",
  },
  {
    taskId: "task-004",
    title: "Schedule 1-on-1 with Team Lead",
    description: "Coordinate with your manager to set up an introductory call.",
    assignedTo: "f9859bef-0d77-4aa2-a116-1218c07bc70d",
    assignedBy: "600b18f1-bdef-4ec3-8819-96a84058f786",
    dueDate: "2024-07-08",
    status: "pending",
    priority: "low",
    tags: "communication,meeting",
    attachments: "",
    createdAt: "2024-07-01T09:00:00Z",
    updatedAt: "2024-07-01T09:00:00Z",
  }
];

export default taskList;