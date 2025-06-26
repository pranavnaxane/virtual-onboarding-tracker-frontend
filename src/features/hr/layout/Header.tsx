import { type FC } from "react";

const Header: FC = () => {
  return (
    <header className="fixed top-0 left-0 right-0 h-20 bg-white shadow border-b border-gray-200 px-6 flex items-center justify-between z-50">
      <h1 className="text-xl font-semibold text-gray-800">Onboarding-Tracker</h1>
      <div className="flex items-center gap-6">
        {/* Search Box */}
        <div className="relative">
          <input
            type="text"
            placeholder="Search..."
            className="pl-10 pr-4 py-2 rounded-md bg-gray-100 text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition"
          />
          <svg
            className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            viewBox="0 0 24 24"
          >
            <circle cx="11" cy="11" r="7" />
            <line x1="21" y1="21" x2="16.65" y2="16.65" />
          </svg>
        </div>

        {/* Avatar */}
        <img
          src="https://i.pravatar.cc/40"
          alt="Avatar"
          className="rounded-full w-10 h-10 object-cover"
        />
      </div>
    </header>
  );
};

export default Header;
