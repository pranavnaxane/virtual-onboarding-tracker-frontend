export interface SidebarLinkProps {
  label: string;
  href?: string;
  isActive?: boolean;
  onClick?: () => void;
  onPress?: (label: string) => void
}


export type HRProfileData = {
  hrId: string;
  name: string;
  designation: string;
  email: string;
  region: string;
  assignedDepartments: string;
  isActive: string | boolean;
  createdAt: string;
  updatedAt: string;
  avatar?: string;
};

export interface HeaderProps {
  profileInfo: HRProfileData;
  onMenuToggle?: () => void;
  isSidebarOpen?: boolean;
}