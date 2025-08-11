import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import taskList, { type Task } from "../../../mocks/dummy_tasklist";
import "./Checklist.css";

interface UserData {
  name: string;
  email: string;
  role: "hr" | "user";
}

const Checklist = () => {
  const { employeeId } = useParams<{ employeeId: string }>();
  const [user, setUser] = useState<UserData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
  if (employeeId) {
    fetch(`http://localhost:5001/api/users/${employeeId}`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    })
      .then((res) => {
        if (!res.ok) {
          return res.json().then(err => {
            throw new Error(err.message || "Failed to fetch user");
          });
        }
        return res.json();
      })
      .then((data) => {
        console.log("API response:", data);
        setUser(data.user); // ✅ correct field
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }
}, [employeeId]);


  if (!employeeId) return <p>Invalid employee</p>;
  if (loading) return <p>Loading employee details...</p>;
  if (error) return <p className="text-red-500">Error: {error}</p>;

  return (
    <div className="space-y-4">
      <h2 className="text-xl font-semibold text-indigo-700" style={{textTransform:"capitalize"}}>
        Checklist for Employee: {user?.name || "Unknown"}
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
                className={`px-2 py-1 text-xs rounded-full font-semibold status-${task.status}`}
              >
                {task.status}
              </span>
            </div>
            <p className="text-sm text-gray-600">{task.description}</p>
            <p className="text-sm text-gray-400">
              Due: {new Date(task.dueDate).toLocaleDateString()}
            </p>
            <p className={`text-sm font-semibold priority-${task.priority}`}>
              Priority: {task.priority}
            </p>
            <p className="text-xs text-gray-400">
              Assigned by: {task.assignedBy} • Created:{" "}
              {new Date(task.createdAt).toLocaleDateString()}
            </p>
            {task.status === "pending" && (
              <button
                onClick={() => alert(`Reminder sent for task: ${task.taskId}`)}
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
