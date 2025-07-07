import { useState } from "react";
import Users from "../../mocks/dummy_users_1000";
import { useNavigate } from "react-router-dom";

export const UsersPage = () => {
  const [hrId, setHrId] = useState("600b18f1-bdef-4ec3-8819-96a84058f786");
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();
  const filteredUsers = Users.filter(
    (user: any) =>
      user.hrId === hrId &&
      (user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        user.email.toLowerCase().includes(searchTerm.toLowerCase()))
  );
  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Search for the employee"
        className="max-w-7xl w-full max-w-md px-4 py-3 rounded-xl border border-gray-300 bg-white text-gray-700 placeholder-gray-400 shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition duration-300 ease-in-out  mb-10"
      />
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {filteredUsers
            .filter((user: any) => user.hrId === hrId)
            .slice(0,3)
            .map((user: any) => (
              <div
                key={user.userId}
                className="bg-gradient-to-tr from-white via-gray-50 to-gray-100 border border-gray-200 rounded-2xl shadow-lg hover:shadow-xl transform hover:scale-[1.03] transition duration-300 ease-in-out p-6 flex flex-col"
              >
                <h3 className="text-xl font-semibold text-indigo-700 mb-2">
                  {user.name}
                </h3>
                <p className="text-sm text-gray-600 mb-1">
                  <span className="font-medium text-gray-800">Email:</span>{" "}
                  {user.email}
                </p>
                <p className="text-sm text-gray-600 mb-1">
                  <span className="font-medium text-gray-800">Contact:</span>{" "}
                  {user.contactNumber}
                </p>
                <p className="text-sm text-indigo-600 font-semibold mb-1 capitalize">
                  {user.role}
                </p>
                <p className="text-sm text-gray-600 mb-1">
                  <span className="font-medium text-gray-800">Department:</span>{" "}
                  {user.department}
                </p>
                <p className="text-xs text-gray-400 mt-auto">
                  Joined: {user.joiningDate}
                </p>
                <button onClick={() => navigate(`/hr/dashboard/checklist/${user.userId}`)} className="mt-4 w-full py-2 text-sm font-medium bg-indigo-600 text-white rounded-xl hover:bg-indigo-700 shadow hover:shadow-md transition duration-300">
                  checklist
                </button>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};
