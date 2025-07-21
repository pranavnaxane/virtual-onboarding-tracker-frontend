import React, { createContext, useState } from 'react';

type SidebarContextType = {
  selectedTab: string;
  setSelectedTab: (tab: string) => void;
};

const SidebarContext = createContext<SidebarContextType | undefined>(undefined);

export const SidebarProvider = ({ children }: { children: React.ReactNode }) => {
  const [selectedTab, setSelectedTab] = useState<string>('Home');

  return (
    <SidebarContext.Provider value={{ selectedTab, setSelectedTab }}>
      {children}
    </SidebarContext.Provider>
  );
};
export { SidebarContext };
