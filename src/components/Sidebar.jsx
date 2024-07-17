import { GiNetworkBars } from "react-icons/gi";
import { BiSolidDashboard } from "react-icons/bi";

import { useState } from "react";
import NavItem from "./Transactions/NavItem";

const Sidebar = () => {
  const [activeSubMenu, setActiveSubMenu] = useState(false);
  const handelActiveSubMenu = () => {
    setActiveSubMenu(!activeSubMenu);
  };

  return (
    <div className=" transition-all duration-500 ">
      <div className="flex text-white  gap-1  font-bold">
        <GiNetworkBars className="text-2xl"></GiNetworkBars>
        <h3 className={`${activeSubMenu&& "text-transparent"} text-2xl`}>Financfy</h3>
      </div>
      <div className="pt-6">
        <ul className="text-[#AEB4CB] space-y-3">
          <div className={`flex items-center gap-2 h-10 px-2 text-white rounded-md  ${activeSubMenu? "":"bg-[#006980]"}`}>
            <BiSolidDashboard className="text-[20px]"></BiSolidDashboard>
            <p className={`text-xs ${activeSubMenu && "hidden"}`}>Dashboard</p>
          </div>

          {/*  */}

          <NavItem handelActiveSubMenu={handelActiveSubMenu} activeSubMenu={activeSubMenu}></NavItem>
          <NavItem handelActiveSubMenu={handelActiveSubMenu} activeSubMenu={activeSubMenu}></NavItem>
          <NavItem handelActiveSubMenu={handelActiveSubMenu} activeSubMenu={activeSubMenu}></NavItem>
          <NavItem handelActiveSubMenu={handelActiveSubMenu} activeSubMenu={activeSubMenu}></NavItem>
          <NavItem handelActiveSubMenu={handelActiveSubMenu} activeSubMenu={activeSubMenu}></NavItem>
          <NavItem handelActiveSubMenu={handelActiveSubMenu} activeSubMenu={activeSubMenu}></NavItem>
          <NavItem handelActiveSubMenu={handelActiveSubMenu} activeSubMenu={activeSubMenu}></NavItem>
          <NavItem handelActiveSubMenu={handelActiveSubMenu} activeSubMenu={activeSubMenu}></NavItem>
          <NavItem handelActiveSubMenu={handelActiveSubMenu} activeSubMenu={activeSubMenu}></NavItem>
         

          {/*  */}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
