import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import { useState } from "react";

const Layout = () => {
  const [activeSidebar, setActiveSidebar] = useState(false);
  const handelSidebar = (activeSidebar) => {
    setActiveSidebar(!activeSidebar);
  };
  console.log(activeSidebar);
  return (
      <div>
        <div className="flex">
          <div
            className={`${
              activeSidebar && "hidden"
            } h-screen bg-[#003a46] transition-all  delay-150 w-[260px] px-4 py-2 overflow-hidden relative`}
          >
            <Sidebar></Sidebar>
          </div>
          <div className="flex-1 bg-[#f7f7f7] h-screen overflow-y-auto">
            <Header
              sidebar={handelSidebar}
              activeSidebar={activeSidebar}
            ></Header>
            <div className="mx-3 ">
              <Outlet></Outlet>
            </div>
          </div>
        </div>
      </div>
    
  );
};

export default Layout;
