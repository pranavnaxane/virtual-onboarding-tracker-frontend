import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const UsersPage = () => {
  const [users, setUsers] = useState<any[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const token = localStorage.getItem("token");
        if (!token) {
          alert("You are not logged in!");
          return;
        }

        const response = await fetch("http://localhost:5001/api/users/list", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        const result = await response.json();

        if (response.ok) {
          setUsers(result.users || []);
        } else {
          alert("Failed to fetch users: " + (result.message || "Unknown error"));
        }
      } catch (error) {
        console.error("Error fetching users:", error);
        alert("An error occurred while fetching users.");
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  const filteredUsers = users.filter(
    (user) =>
      user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (loading) {
    return <div className="p-6">Loading users...</div>;
  }

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <div className="flex justify-between">
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search for the employee"
          className="max-w-7xl w-full max-w-md px-4 py-3 rounded-xl border border-gray-300 bg-white text-gray-700 placeholder-gray-400 shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition duration-300 ease-in-out mb-10"
        />
        <button
          className="max-w-7xl w-full max-w-md rounded-xl border border-gray-300 bg-indigo-600 text-white shadow-sm hover:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition duration-300 ease-in-out mb-10"
          onClick={() => navigate("/hr/dashboard/users/newuser")}
        >
          Create user
        </button>
      </div>
      <div className="max-w-7xl mx-auto">
        {filteredUsers.length === 0 ? (
          <p className="text-gray-500">No users found.</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {filteredUsers.slice(0, 3).map((user: any) => (
              <div
                key={user._id}
                className="bg-gradient-to-tr from-white via-gray-50 to-gray-100 border border-gray-200 rounded-2xl shadow-lg hover:shadow-xl transform hover:scale-[1.03] transition duration-300 ease-in-out p-6 flex flex-col"
              >
                <h3 className="text-xl font-semibold text-indigo-700 mb-2" style={{textTransform:"capitalize"}}>
                  {user.name}
                </h3>
                <p className="text-sm text-gray-600 mb-1">
                  <span className="font-medium text-gray-800">Email:</span>{" "}
                  {user.email}
                </p>
                <p className="text-sm text-indigo-600 font-semibold mb-1 capitalize">
                  {user.role}
                </p>
                <p className="text-xs text-gray-400 mt-auto">
                  Joined: {new Date(user.createdAt).toLocaleDateString()}
                </p>
                <button
                  onClick={() =>
                    navigate(`/hr/dashboard/checklist/${user._id}`)
                  }
                  className="mt-4 w-full py-2 text-sm font-medium bg-indigo-600 text-white rounded-xl hover:bg-indigo-700 shadow hover:shadow-md transition duration-300"
                >
                  Checklist
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
