import { type FC } from "react";
import type { HRProfileData } from "./types/hr.types";
import { useLocation } from "react-router-dom";

export const HRProfile: FC = () => {
  const location = useLocation();
  const hr = (location.state as { hr: HRProfileData })?.hr;

  const formatDate = (dateString: string) => {
    if (!dateString) return "N/A";
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      month: "long",
      day: "numeric",
      year: "numeric",
    });
  };

  const getInitials = (name: string) =>
    name
      .split(" ")
      .map((n) => n[0])
      .join("")
      .toUpperCase();

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 p-6 md:p-10">
      {/* Back Button */}
      <button
        onClick={() => window.history.back()}
        className="flex items-center text-blue-600 hover:text-blue-800 font-medium mb-8 transition-colors duration-200"
      >
        <svg
          className="w-5 h-5 mr-2"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15 19l-7-7 7-7"
          />
        </svg>
        Home
      </button>

      {/* Profile Card */}
      <div className="max-w-5xl mx-auto bg-white rounded-xl shadow-xl overflow-hidden">
        <div className="flex flex-col md:flex-row">
          {/* Profile Image Section */}
          <div className="w-full md:w-1/3 p-8 bg-gradient-to-b from-blue-50 to-gray-50 flex flex-col items-center">
            <div className="relative w-48 h-48 md:w-56 md:h-56 rounded-full overflow-hidden shadow-2xl border-4 border-white mb-6">
              {hr.avatar ? (
                <img
                  src={hr.avatar}
                  alt={`Profile photo of ${hr.name}`}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.style.display = "none";
                  }}
                />
              ) : (
                <div className="w-full h-full bg-gradient-to-r from-blue-500 to-blue-600 text-white flex items-center justify-center text-5xl font-bold">
                  {getInitials(hr.name)}
                </div>
              )}
            </div>

            {/* Role/Designation */}
            <div className="text-center">
              <h2 className="text-2xl font-bold text-gray-900">
                {hr.designation}
              </h2>
              <p className="text-gray-500 mt-2 flex items-center justify-center">
                <svg
                  className="w-4 h-4 mr-1"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                {hr.region}
              </p>

              {/* Status Badge */}
              <div className="mt-6">
                <span
                  className={`inline-flex items-center px-4 py-2 rounded-full text-sm font-semibold ${
                    hr.isActive
                      ? "bg-green-100 text-green-800"
                      : "bg-red-100 text-red-800"
                  }`}
                >
                  <span
                    className={`w-3 h-3 rounded-full mr-2 ${
                      hr.isActive ? "bg-green-500" : "bg-red-500"
                    }`}
                  ></span>
                  {hr.isActive ? "Active" : "Inactive"}
                </span>
              </div>
            </div>
          </div>

          {/* Profile Info Section */}
          <div className="w-full md:w-2/3 p-8 md:p-10">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">{hr.name}</h1>
            <div className="border-b border-gray-200 pb-6 mb-6">
              <p className="text-gray-600">HR Professional | {hr.email}</p>
            </div>

            {/* Info Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <DetailCard label="HR ID" value={hr.hrId} icon="id" />
              <DetailCard label="Email" value={hr.email} icon="mail" />
              <DetailCard
                label="Departments"
                value={hr.assignedDepartments || "None assigned"}
                icon="department"
              />
              <DetailCard
                label="Created At"
                value={formatDate(hr.createdAt)}
                icon="calendar"
              />
              <DetailCard
                label="Updated At"
                value={formatDate(hr.updatedAt)}
                icon="refresh"
              />
            </div>

            {/* Action Buttons */}
            <div className="mt-12 flex flex-col sm:flex-row justify-end gap-4">
              <button
                className="px-6 py-3 rounded-lg border border-gray-300 text-gray-700 hover:bg-gray-100 transition-colors duration-200 font-medium flex items-center justify-center"
                onClick={() => window.history.back()}
              >
                <svg
                  className="w-5 h-5 mr-2"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
                Cancel
              </button>
              <button
                className="px-6 py-3 rounded-lg bg-blue-600 hover:bg-blue-700 text-white transition-colors duration-200 font-medium flex items-center justify-center shadow-md"
                onClick={() => alert("Save clicked!")}
              >
                <svg
                  className="w-5 h-5 mr-2"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                Save Profile
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const DetailCard: FC<{ label: string; value: string; icon: string }> = ({
  label,
  value,
  icon,
}) => {
  const getIcon = () => {
    switch (icon) {
      case "id":
        return (
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V5a2 2 0 114 0v1m-4 0a2 2 0 104 0m-5 8a2 2 0 100-4 2 2 0 000 4zm0 0c1.306 0 2.417.835 2.83 2M9 14a3.001 3.001 0 00-2.83 2M15 11h3m-3 4h2"
            />
          </svg>
        );
      case "mail":
        return (
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
            />
          </svg>
        );
      case "department":
        return (
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
            />
          </svg>
        );
      case "calendar":
        return (
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
            />
          </svg>
        );
      case "refresh":
        return (
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
            />
          </svg>
        );
      default:
        return (
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        );
    }
  };

  return (
    <div className="bg-gray-50 rounded-xl p-4 shadow-sm hover:shadow-md transition-shadow duration-200">
      <div className="flex items-center space-x-3">
        <span className="text-blue-500">{getIcon()}</span>
        <div>
          <div className="text-xs font-semibold text-gray-500 uppercase tracking-wider">
            {label}
          </div>
          <div className="text-gray-900 font-medium break-words mt-1">
            {value}
          </div>
        </div>
      </div>
    </div>
  );
};
