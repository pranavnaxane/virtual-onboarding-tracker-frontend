import { type FC } from "react";
import Header from "./layout/Header";
import Sidebar from "./layout/Sidebar";
import UsersPage from "../Dashboard/Users";
import { useSidebar } from '../../context';


const HRDashboard: FC = () => {
  const { selectedTab } = useSidebar();

  return (
    <div className="h-screen w-screen overflow-hidden bg-gray-50">
      <Header />
      <Sidebar />
      <main
        className="ml-64 mt-16 h-[calc(100vh-64px)] overflow-y-auto p-6"
        role="main"
      >
        {selectedTab === 'Users' ? <UsersPage />:<h2>home</h2>}
      </main>
    </div>
  );
};

export default HRDashboard;
