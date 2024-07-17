import { IoIosArrowForward } from "react-icons/io";
import { RiBankLine } from "react-icons/ri";

// eslint-disable-next-line react/prop-types
const NavItem = ({ activeSubMenu, handelActiveSubMenu }) => {
  return (
    <div>
      <div
        onClick={() => handelActiveSubMenu()}
        className={`flex justify-between items-center cursor-pointer h-10 px-2 font-bold text-[#2db0ce] hover:text-white  hover:bg-[#006980] bg-transparent rounded-md transition-all duration-500  ${
          activeSubMenu ? "" : "bg-[#006980]"
        }`}
      >
        <div className={`flex items-center gap-x-2 `}>
          <RiBankLine className="text-[20px]"></RiBankLine>
          <p className={`text-xs ${activeSubMenu && "hidden"}`}>Transactions</p>
        </div>
        <div>
          <IoIosArrowForward></IoIosArrowForward>
        </div>
      </div>
      <div
        className={`bg-[#002C36] w-[200px] h-full text-xs  absolute  top-0 right-0  transition-all duration-500 ${activeSubMenu ? "translate-x-0":"translate-x-64"}`}
      >
        <div className="border-b-[1px] border-green-700">
            <p className="text-center py-2 px-[14]">Transactions</p>
        </div>
        <ul className="mt-10">
          <li className="py-2 px-[14px] hover:text-white hover:bg-[#8ABAC5] w-full">Cash flow</li>
          <li className="py-2 px-[14px] hover:text-white hover:bg-[#8ABAC5] w-full">Cash flow</li>
          <li className="py-2 px-[14px] hover:text-white hover:bg-[#8ABAC5] w-full">Cash flow</li>
          <li className="py-2 px-[14px] hover:text-white hover:bg-[#8ABAC5] w-full">Cash flow</li>
          <li className="py-2 px-[14px] hover:text-white hover:bg-[#8ABAC5] w-full">Cash flow</li>
          <li className="py-2 px-[14px] hover:text-white hover:bg-[#8ABAC5] w-full">Cash flow</li>
          <li className="py-2 px-[14px] hover:text-white hover:bg-[#8ABAC5] w-full">Cash flow</li>
          <li className="py-2 px-[14px] hover:text-white hover:bg-[#8ABAC5] w-full">Cash flow</li>
          <li className="py-2 px-[14px] hover:text-white hover:bg-[#8ABAC5] w-full">Cash flow</li>
          <li className="py-2 px-[14px] hover:text-white hover:bg-[#8ABAC5] w-full">Cash flow</li>
        </ul>
      </div>
    </div>
  );
};

export default NavItem;
