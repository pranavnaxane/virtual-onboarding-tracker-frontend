import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSidebar } from "../../context/useSidebar";

interface UserData {
  name: string;
  email: string;
  password: string;
  role: "hr" | "user";
}

const AddUser: React.FC = () => {
  const handleUserCreate = (userData: UserData) => {
    console.log("user data submitted:", userData);
    alert(
      `User "${userData.name}" with role "${userData.role}" created successfully!`
    );
  };

  return (
    <div className="min-h-screen flex items-center justify-center font-sans text-white p-4">
      <div className="w-full max-w-md mx-auto">
        <CreateUserForm onCreateUser={handleUserCreate} />
      </div>
    </div>
  );
};

// Props for the CreateUserForm component
interface CreateUserFormProps {
  onCreateUser: (userData: UserData) => void;
}

const CreateUserForm: React.FC<CreateUserFormProps> = ({ onCreateUser }) => {
  // State to hold all form data in a single object
  const [formData, setFormData] = useState<UserData>({
    name: "",
    email: "",
    password: "",
    role: "user", // Default role
  });

  const [errors, setErrors] = useState<Partial<Record<keyof UserData, string>>>(
    {}
  );

  const { setSelectedTab } = useSidebar();
  const navigate = useNavigate();

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value.toLowerCase() === "hr" ? "hr" : value.toLowerCase(),
    }));
  };

const addUser = async () => {
  try {
    const token = localStorage.getItem("token");
    console.log("Using token:", token);
    console.log("Form Data:", formData);

    const response = await fetch("http://localhost:5001/api/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(formData),
    });

    const result = await response.json();
    console.log("Response:", result);

    if (response.ok) {
      alert("User created successfully!");
      onCreateUser(formData);
    } else {
      alert("Failed to create user: " + result.message);
    }
  } catch (error) {
    console.error("Error creating user:", error);
    alert("An error occurred while creating the user.");
  }
};


  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    addUser();
  };

  const goToHome = () => {
    navigate("/hr/dashboard/home");
    setSelectedTab("Home");
  };

  return (
    <div className="bg-gray-50 p-8 rounded-xl shadow-2xl border border-gray-300">
      <h2 className="text-2xl font-bold mb-6 text-center text-indigo-600">
        Create New User
      </h2>
      <form onSubmit={handleSubmit} noValidate className="space-y-4">
        <div>
          <label
            htmlFor="name"
            className="block mb-2 text-sm font-medium text-black"
          >
            Full Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Name"
            className="w-full px-4 py-3 border border-gray-600 rounded-lg text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-300"
          />
          {errors.name && (
            <p className="text-red-500 text-xs mt-1">{errors.name}</p>
          )}
        </div>

        <div>
          <label
            htmlFor="email"
            className="block mb-2 text-sm font-medium text-black"
          >
            Email Address
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email Address"
            className="w-full px-4 py-3 border border-gray-600 rounded-lg text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-300"
          />
          {errors.email && (
            <p className="text-red-500 text-xs mt-1">{errors.email}</p>
          )}
        </div>

        <div>
          <label
            htmlFor="password"
            className="block mb-2 text-sm font-medium text-black"
          >
            Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="••••••••"
            className="w-full px-4 py-3 border border-gray-600 rounded-lg text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-300"
          />
          {errors.password && (
            <p className="text-red-500 text-xs mt-1">{errors.password}</p>
          )}
        </div>

        <div>
          <label
            htmlFor="role"
            className="block mb-2 text-sm font-medium text-black"
          >
            Role
          </label>
          <select
            id="role"
            name="role"
            value={formData.role}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-600 rounded-lg text-black focus:outline-none focus:ring-2 focus:ring-gray-300"
          >
            <option value="hr">Hr</option>
            <option value="user">User</option>
          </select>
        </div>

        <div className="flex">
          <button
            type="submit"
            className="m-2 bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-4 rounded-lg transition-transform duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-gray-300 mt-6"
          >
            Create User
          </button>

          <button
            onClick={goToHome}
            type="button"
            className="m-2 bg-transparent border border-black text-black font-bold py-3 px-4 rounded-lg transition-transform duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-gray-300 mt-6"
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddUser;

