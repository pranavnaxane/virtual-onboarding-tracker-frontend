import React, { useState } from "react";

type AuthMode = "login" | "signup";

interface FormData {
  email: string;
  password: string;
}

const LoginPage: React.FC = () => {
  const [mode, setMode] = useState<AuthMode>("login");
  const [formData, setFormData] = useState<FormData>({
    email: "",
    password: "",
  });
  const [error, setError] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleLogin = async () => {
    try {
      if (
        formData.email === "test@example.com" &&
        formData.password === "password"
      ) {
        alert("Login successful!");
      } else {
        throw new Error("Invalid email or password");
      }
    } catch (err: any) {
      setError(err.message || "Login failed");
    }
  };

  const handleSignup = async () => {
    try {
      if (formData.email && formData.password.length >= 6) {
        alert("Signup successful!");
      } else {
        throw new Error("Password must be at least 6 characters");
      }
    } catch (err: any) {
      setError(err.message || "Signup failed");
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    if (mode === "login") {
      handleLogin();
    } else {
      handleSignup();
    }
  };

  const toggleMode = () => {
    setMode(mode === "login" ? "signup" : "login");
    setError(null);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded shadow-md w-full max-w-md"
      >
        <h2 className="text-2xl font-semibold mb-6 text-center">
          {mode === "login" ? "Login" : "Sign Up"}
        </h2>

        <div className="mb-4">
          <label
            htmlFor="email"
            className="block text-gray-700 font-medium mb-1"
          >
            Email
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        <div className="mb-6">
          <label
            htmlFor="password"
            className="block text-gray-700 font-medium mb-1"
          >
            Password
          </label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        {error && <p className="text-red-600 mb-4">{error}</p>}

        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition"
        >
          {mode === "login" ? "Login" : "Sign Up"}
        </button>

        <p className="mt-4 text-center text-gray-600">
          {mode === "login"
            ? "Don't have an account?"
            : "Already have an account?"}{" "}
          <button
            type="button"
            onClick={toggleMode}
            className="text-blue-500 hover:underline"
          >
            {mode === "login" ? "Sign Up" : "Login"}
          </button>
        </p>
      </form>
    </div>
  );
};

export default LoginPage;
