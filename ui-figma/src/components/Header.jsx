import React from "react";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import TelegramIcon from "@mui/icons-material/Telegram";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import SearchIcon from "@mui/icons-material/Search";
import avatar from "../assets/dp.png";
import chat from "../assets/button.png";

const Header = () => {
  return (
    <div className="w-[100%] h-[80px] bg-[#18191a] flex ">
      {/* Header left section which contains 3 sections */}
      <div className="flex justify-start items-center w-[90%] h-[80px] pl-[109.84px]">
        {/* For logo and names */}
        <div className="w-[143.17px] h-[28.32px]   ">
          <p className="text-[#FFFFFF] text-xl">
            Stay<span className="text-[#60B0FB]">n</span>
            <span className="">Earn</span>
          </p>
        </div>

        {/* A single line  */}

        <div className="w-[48px] border-[1px] bg-[#D3D4D5]   transform -translate-x-1/2 -translate-y-1/2 -rotate-90"></div>
        {/* dropdown menu */}
        <div className="">
          <div className="flex">
            <p className="w-[39px] h-[22px] text-[18px] text-[#E5E6EB] leading-[21.78px]">
              stay
            </p>
            <ArrowDropDownIcon className="text-[#E5E6EB]" />
          </div>
        </div>
        {/* Check-in and Check-out */}
        <div className="bg-[#242526] flex ml-[150px] gap-10 px-2 py-2 border-[#a0a1a2] rounded-md border-2">
          <div className="flex">
            <TelegramIcon className="text-[#B1B3B8] rounded-[1.5px]" />
            <p className="text-[#B1B3B8] pl-2 text-[16px] ">Location</p>
          </div>
          <div className="flex">
            <CalendarMonthIcon className="text-[#B1B3B8] rounded-[1.5px]" />
            <p className="text-[#B1B3B8] pl-2 text-[16px]">
              check in - check out
            </p>
          </div>
          <div className="flex">
            <PersonOutlineIcon className="text-[#B1B3B8] rounded-[1.5px]" />
            <p className="text-[#B1B3B8] pl-2">Guests</p>
          </div>
          <div className=" relative w-[28px] h-[28px] rounded-full bg-[#0066ff] mr-2">
            <SearchIcon className="absolute text-[#B1B3B8] top-1 left-1 text-[16px]" />
          </div>
        </div>
      </div>
      {/* Header right section which contains one section */}
      <div className="flex justify-start h-[80px] items-center gap-6">
        <img src={chat} alt="message" className="w-[48px] h-[48px] rounded-[1.5px]" />
        <img src={avatar} alt="profilePic" className="w-[40px] h-[40px] rounded-[1.5px]" />
      </div>
    </div>
  );
};

export default Header;
