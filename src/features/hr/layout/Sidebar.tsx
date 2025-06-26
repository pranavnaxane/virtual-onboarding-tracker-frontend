import { memo, type FC } from "react";
import type { SidebarLinkProps } from "../types/hr.types";

const Sidebar: FC = () => {
  return (
    <aside className="fixed top-16 left-0 w-64 h-[calc(100vh-64px)] bg-white border-r border-gray-200 shadow-md flex flex-col z-40">
      <nav className="flex-1 px-6 py-5 overflow-y-auto text-gray-800">
        <SidebarLink label="Home" className="mt-4 mb-2" />
        <SidebarLink label="Users" />
      </nav>

      <div className="border-t border-gray-100 p-3">
        <button
          type="button"
          className="w-full text-left px-3 py-3 text-black-600 rounded-md font-semibold hover:bg-blue-50 transition"
        >
          Logout
        </button>
      </div>
    </aside>
  );
};

interface SidebarLinkPropsExtended extends SidebarLinkProps {
  className?: string;
}

const SidebarLink: FC<SidebarLinkPropsExtended> = memo(
  ({ label, href = "#", isActive = false, className = "" }) => {
    return (
      <a
        href={href}
        className={`block px-2 py-3 rounded-md text-sm font-medium transition-colors
          ${
            isActive
              ? "bg-blue-100 text-blue-700"
              : "text-gray-700 hover:bg-blue-50 hover:text-blue-600"
          } ${className}`}
        aria-current={isActive ? "page" : undefined}
      >
        {label}
      </a>
    );
  }
);

export default Sidebar;
