import { type FC, useState } from "react";
import { useNavigate } from "react-router-dom";
import type { HeaderProps } from "../types/hr.types";

const Header: FC<HeaderProps> = ({
  profileInfo,
  onMenuToggle,
  isSidebarOpen = true,
}) => {
  const navigate = useNavigate();
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const navigateToHRProfile = () => {
    navigate(`/hr/profile`, {
      state: { hr: profileInfo },
    });
  };

  const toggleSearch = () => {
    setIsSearchOpen(!isSearchOpen);
  };

  return (
    <header className="fixed top-0 left-0 right-0 h-14 sm:h-16 md:h-20 bg-white shadow-sm border-b-2 border-black/20 z-50 transition-all duration-300">
      <div className="flex items-center justify-between h-full px-3 sm:px-4 md:px-6 lg:px-8">
        <div className="flex items-center gap-2 sm:gap-3 md:gap-4 min-w-0 flex-1 lg:flex-none">
          <button
            onClick={onMenuToggle}
            className="lg:hidden p-1.5 sm:p-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-200 border border-black/10 hover:border-black/20"
            aria-label="Toggle menu"
          >
            <svg
              className="w-5 h-5 sm:w-6 sm:h-6"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              viewBox="0 0 24 24"
            >
              {isSidebarOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>

          <h1 className="text-base sm:text-lg md:text-xl font-semibold text-gray-800 truncate min-w-0">
            <span className="hidden sm:inline">Onboarding-Tracker</span>
            <span className="sm:hidden text-sm">OT</span>
          </h1>
        </div>

        <div className="flex items-center gap-1 sm:gap-2 md:gap-4 min-w-0">
          <div className="hidden md:block relative flex-shrink-0">
            <input
              type="text"
              placeholder="Search..."
              className="w-48 lg:w-64 xl:w-80 pl-9 pr-4 py-2 rounded-lg bg-gray-50 text-gray-700 placeholder-gray-400 border border-black/20 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white focus:border-blue-500 transition-all duration-200 text-sm"
            />
            <svg
              className="w-4 h-4 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              viewBox="0 0 24 24"
            >
              <circle cx="11" cy="11" r="7" />
              <line x1="21" y1="21" x2="16.65" y2="16.65" />
            </svg>
          </div>

          <button
            onClick={toggleSearch}
            className="md:hidden p-1.5 sm:p-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-200 border border-black/10 hover:border-black/20 flex-shrink-0"
            aria-label="Search"
          >
            <svg
              className="w-4 h-4 sm:w-5 sm:h-5"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              viewBox="0 0 24 24"
            >
              <circle cx="11" cy="11" r="7" />
              <line x1="21" y1="21" x2="16.65" y2="16.65" />
            </svg>
          </button>

          <button
            onClick={navigateToHRProfile}
            className="flex items-center gap-1 sm:gap-2 p-1 rounded-full hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-200 border border-black/10 hover:border-black/20 min-w-0 flex-shrink-0"
            title="View Profile"
          >
            <img
              src={profileInfo.avatar || "https://i.pravatar.cc/40"}
              alt={`${profileInfo.name} Avatar`}
              className="rounded-full w-7 h-7 sm:w-8 sm:h-8 md:w-10 md:h-10 object-cover border-2 border-black/20"
            />
            <span className="hidden lg:block xl:block text-xs sm:text-sm font-medium text-gray-700 max-w-20 sm:max-w-32 truncate">
              {profileInfo.name}
            </span>
          </button>
        </div>
      </div>

      {isSearchOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white border-b-2 border-black/20 shadow-lg z-40 animate-in slide-in-from-top-2 duration-200">
          <div className="p-3 sm:p-4">
            <div className="relative">
              <input
                type="text"
                placeholder="Search..."
                className="w-full pl-9 pr-4 py-2.5 sm:py-3 rounded-lg bg-gray-50 text-gray-700 placeholder-gray-400 border border-black/20 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white focus:border-blue-500 transition-all duration-200 text-sm sm:text-base"
                autoFocus
              />
              <svg
                className="w-4 h-4 sm:w-5 sm:h-5 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                viewBox="0 0 24 24"
              >
                <circle cx="11" cy="11" r="7" />
                <line x1="21" y1="21" x2="16.65" y2="16.65" />
              </svg>
              <button
                onClick={toggleSearch}
                className="absolute right-3 top-1/2 -translate-y-1/2 p-1 rounded-md text-gray-400 hover:text-gray-600 transition-colors"
                aria-label="Close search"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
