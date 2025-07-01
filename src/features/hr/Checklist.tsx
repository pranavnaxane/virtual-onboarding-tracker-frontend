import React from "react";
import { useParams } from "react-router-dom";
import taskList, { type Task } from "../../mocks/dummy_tasklist";

const statusColors = {
  pending: "bg-yellow-100 text-yellow-700",
  "in-progress": "bg-blue-100 text-blue-700",
  completed: "bg-green-100 text-green-700",
};

const priorityColors = {
  high: "text-red-600",
  medium: "text-orange-500",
  low: "text-gray-500",
};
const Checklist = () => {
  const { employeeId } = useParams<{ employeeId: string }>();

  if (!employeeId) return <p>Invalid employee</p>;
  const handleRemind = (taskId: string) => {
    // You can trigger a toast, notification, or backend call here
    alert(`Reminder sent for task: ${taskId}`);
  };
  return (
    <div className="space-y-4">
      <h2 className="text-xl font-semibold text-indigo-700">
        Checklist for Employee: {employeeId}
      </h2>

      {taskList.length === 0 ? (
        <p className="text-gray-500">No tasks assigned.</p>
      ) : (
        taskList.map((task: Task) => (
          <div
            key={task.taskId}
            className="p-4 border rounded-xl bg-white shadow-sm space-y-1"
          >
            <div className="flex justify-between items-center">
              <h3 className="text-lg font-medium text-gray-800">
                {task.title}
              </h3>
              <span
                className={`px-2 py-1 text-xs rounded-full font-semibold ${
                  statusColors[task.status]
                }`}
              >
                {task.status}
              </span>
            </div>
            <p className="text-sm text-gray-600">{task.description}</p>
            <p className="text-sm text-gray-400">
              Due: {new Date(task.dueDate).toLocaleDateString()}
            </p>
            <p
              className={`text-sm font-semibold ${
                priorityColors[task.priority]
              }`}
            >
              Priority: {task.priority}
            </p>
            <p className="text-xs text-gray-400">
              Assigned by: {task.assignedBy} • Created:{" "}
              {new Date(task.createdAt).toLocaleDateString()}
            </p>
            {task.status === "pending" && (
              <button
                onClick={() => handleRemind(task.taskId)}
                className="mt-2 inline-block px-3 py-1 text-sm bg-indigo-100 text-indigo-700 font-medium rounded hover:bg-indigo-200 transition"
              >
                Remind
              </button>
            )}
          </div>
        ))
      )}
    </div>
  );
};
export default Checklist;
