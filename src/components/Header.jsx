import { CgMoveRight } from "react-icons/cg";
import { CgMoveLeft } from "react-icons/cg";
import { IoHandLeftSharp } from "react-icons/io5";
import { HiLightBulb } from "react-icons/hi";
import flag from "../assets/english_flag.png";
import avater from "../assets/no_profile_picture.png";
import { IoIosNotifications } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";

// eslint-disable-next-line react/prop-types
const Header = ({ sidebar, activeSidebar }) => {
  return (
    <section className="bg-white px-3 h-16 flex justify-between items-center">
      <article className="flex items-center gap-2">
        <div className="text-4xl text-[#006980] font-[100]">
          {activeSidebar ? (
            <button onClick={() => sidebar(activeSidebar)}>
              <CgMoveRight></CgMoveRight>
            </button>
          ) : (
            <button onClick={() => sidebar(activeSidebar)}>
              <CgMoveLeft></CgMoveLeft>
            </button>
          )}
        </div>
        <div>
          <p className="flex items-center text-sm font-semibold">
            Hello, A S Architect.!{" "}
            <IoHandLeftSharp className="text-yellow-500"></IoHandLeftSharp>{" "}
          </p>
          <p className="text-[10px] text-gray-400"> 17 July 2024</p>
        </div>
      </article>
      <article className="flex gap-6 items-center">
        <div className="text-[#006980] flex items-center gap-1">
          <HiLightBulb className="text-xl"></HiLightBulb>
          <p className="text-xs ">Take a tour</p>
        </div>
        <div className="">
          <button className="bg-[#006980] text-white text-sm px-3 py-1 rounded-md flex items-center gap-1">
            <span className="text-2xl font-bold">+</span> Add new cash book
          </button>
        </div>
        <div className="flex gap-1 items-center">
          <img src={flag} alt="USA" />
          <p className=" text-sm">EN</p>
        </div>
        <div className="flex items-center gap-4">
          <div className="h-10 w-10 rounded-full bg-[#B0D1D8] flex justify-center items-center">
            <IoIosNotifications className="text-xl"></IoIosNotifications>
          </div>
          <div className="flex items-center gap-1">
            <div className="w-10 h-10 border-[1px] border-black rounded-full">
              <img src={avater} alt="avater" />
            </div>
            <IoIosArrowDown></IoIosArrowDown>
          </div>
        </div>
      </article>
    </section>
  );
};

export default Header;
