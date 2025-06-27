'use client'; // For Next.js if applicable

import { memo, type FC } from "react";
import { useSidebar } from "../../../context";
import type { SidebarLinkProps } from "../types/hr.types";

interface SidebarProps {
  isOpen?: boolean;
  onClose?: () => void;
}

const Sidebar: FC<SidebarProps> = ({ isOpen = true, onClose }) => {
  const { setSelectedTab, selectedTab } = useSidebar();

  const sideBarClicked = (menuItem: string) => {
    setSelectedTab(menuItem);
  };
  return (
    <>
      {/* Mobile Overlay */}
      {isOpen && (
        <div
          className="lg:hidden fixed inset-0 bg-black/20 backdrop-blur-sm z-30 transition-opacity duration-300"
          onClick={onClose}
          aria-hidden="true"
        />
      )}

      {/* Desktop Sidebar */}
      <aside className="hidden lg:fixed lg:top-14 xl:top-16 lg:left-0 lg:w-56 xl:w-64 lg:h-[calc(100vh-3.5rem)] xl:h-[calc(100vh-4rem)] lg:bg-white lg:border-r-2 lg:border-black/20 lg:shadow-sm lg:flex lg:flex-col lg:z-40 transition-all duration-300">
        <nav className="flex-1 px-4 xl:px-6 py-4 xl:py-5 overflow-y-auto text-gray-800 scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100">
          <div className="space-y-1">
            <SidebarLink label="Home" className="mt-2 mb-1" isActive={selectedTab === 'Home'} onPress={sideBarClicked}/>
            <SidebarLink label="Users" isActive={selectedTab === 'Users'} onPress={sideBarClicked}/>
            <SidebarLink label="Dashboard" />
            <SidebarLink label="Reports" />
            <SidebarLink label="Settings" />
          </div>
        </nav>

        <div className="border-t-2 border-black/10 p-3 xl:p-4 bg-gray-50/50">
          <button
            type="button"
            className="w-full text-left px-3 py-2.5 xl:py-3 text-gray-600 rounded-md font-medium hover:bg-red-50 hover:text-red-600 transition-all duration-200 border border-black/10 hover:border-red-200 text-sm xl:text-base"
          >
            <div className="flex items-center gap-2">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
              </svg>
              <span>Logout</span>
            </div>
          </button>
        </div>
      </aside>

      {/* Mobile Sidebar */}
      <aside
        className={`
          lg:hidden fixed top-14 sm:top-16 left-0 w-64 sm:w-72 h-[calc(100vh-3.5rem)] sm:h-[calc(100vh-4rem)]
          bg-white border-r-2 border-black/20 shadow-xl flex flex-col z-40
          transform transition-all duration-300 ease-in-out
          ${isOpen ? "translate-x-0" : "-translate-x-full"}
        `}
      >
        <nav className="flex-1 px-4 sm:px-6 py-4 sm:py-5 overflow-y-auto text-gray-800 scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100">
          <div className="space-y-1">
            <SidebarLink label="Home" className="mt-2 mb-1" onClick={onClose} />
            <SidebarLink label="Users" onClick={onClose} />
            <SidebarLink label="Dashboard" onClick={onClose} />
            <SidebarLink label="Reports" onClick={onClose} />
            <SidebarLink label="Settings" onClick={onClose} />
          </div>
        </nav>

        <div className="border-t-2 border-black/10 p-3 sm:p-4 bg-gray-50/50">
          <button
            type="button"
            className="w-full text-left px-3 py-2.5 sm:py-3 text-gray-600 rounded-md font-medium hover:bg-red-50 hover:text-red-600 transition-all duration-200 border border-black/10 hover:border-red-200 text-sm sm:text-base"
            onClick={onClose}
          >
            <div className="flex items-center gap-2">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
              </svg>
              <span>Logout</span>
            </div>
          </button>
        </div>
      </aside>
    </>
  );
};

// Extend the SidebarLinkProps to accept extra optional props
interface SidebarLinkPropsExtended extends SidebarLinkProps {
  className?: string;
}

const SidebarLink: FC<SidebarLinkPropsExtended> = memo(
  ({ label, href = "#", isActive = false, className = "", onClick, onPress }) => {
    const handleClick = (e: React.MouseEvent) => {
      if (onClick) {
        e.preventDefault();
        onClick();
      }
      onPress?.(label)
    };

    return (
      <a
        href={href}
        onClick={handleClick}
        className={`
          block px-3 py-2.5 sm:py-3 rounded-lg text-sm sm:text-base font-medium 
          transition-all duration-200 cursor-pointer border border-transparent
          hover:border-black/10 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-1
          ${
            isActive
              ? "bg-blue-100 text-blue-700 border-blue-200 shadow-sm"
              : "text-gray-700 hover:bg-blue-50 hover:text-blue-600 hover:shadow-sm"
          } ${className}
        `}
        aria-current={isActive ? "page" : undefined}
      >
        <div className="flex items-center gap-2">
          {/* Icon placeholder - you can add specific icons for each link */}
          <div className="w-1.5 h-1.5 rounded-full bg-current opacity-60"></div>
          <span className="truncate">{label}</span>
        </div>
      </a>
    );
  }
);

export default Sidebar;
