import React from "react";
import slide2 from "../assets/slide2.png";
import slide3 from "../assets/slide3.png";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import Breadcrumb from "./Breadcrumb";

const BodyComponent = () => {
  const blueWidth = Math.min(100, 75);
  const blackWidth = Math.max(100 - 75, 0);

  const blueWidth2 = Math.min(100, 50);
  const blackWidth2 = Math.max(100 - 50, 0);

  const breadcrumbItems = [
    { name: "Home", link: "#" },
    { name: "Create Listing", link: "#" },
    { name: "import Airbnb listing" }, //
  ];
  return (
    <div className="w-[100%] h-[88.5vh] bg-[#242526] relative">
      {/* ------------------------- Breadcrumb -----------------------------------------------------*/}
      <div className="absolute right-0 pr-16 py-6 text-[#59595d]">
        <Breadcrumb items={breadcrumbItems} />
      </div>
      {/* ------------------------------------- Buttons -------------------------------------------*/}
      <div
        className="w-[314px] h-[48px] py-[4px] px-[24px] absolute top-[83px] left-[109.84px] rounded-[40px] flex justify-center items-center"
        style={{
          backgroundColor: "#242526",
          filter:
            "drop-shadow(-2px -2px 6px #444A53) drop-shadow(4px 4px 12px #000000)",
        }}
      >
        <button className="hover:bg-slate-500 text-[16px] leading-[19.36px] text-white w-[107.38px] rounded-[40px] p-1">
          Your listing
        </button>

        <div
          style={{
            boxShadow:
              "2px 2px 6px 0px #000000 inset, -1px -1px 3px 0px #444A53 inset", // Combined shadow styles
            background: "#181919",
            borderRadius: "20px",
          }}
        >
          <button
            className="hover:bg-slate-500 text-[16px] leading-[19.36px] text-white w-[123.68px] rounded-[40px] p-[10px]"
            style={{
              boxShadow: "-2px -2px 6px 0px #444A53, 4px 4px 4px 0px #00000040", // Combined shadow styles
            }}
          >
            Finish Listing
          </button>
        </div>
      </div>

      {/* -------------------------1st Rectangular box --------------------------------------- */}
      <div className="absolute w-[738px] h-[209px] top-[160px] left-[109.84px] bg-[#18191a] rounded-md">
        <div className="flex text-white">
          {/* Images */}
          <div className="h-[209px]">
            <img
              src={slide3}
              alt="random pic"
              className="w-[100%] h-[100%] p-4"
            />
          </div>
          {/* Informations */}
          <div className="p-4">
            <p className="text-[22px] leading-[26.63px]">Ocean Villa</p>
            <p className="pb-4 text-[16px] leading-[19.36px] mb-2">
              Luxury place
            </p>
            {/* progress bar */}
            <div className="progress-container">
              <div className="progress-bar">
                <div
                  className="blue-segment"
                  style={{ width: `${blueWidth}%` }}
                ></div>
                <div
                  className="black-segment"
                  style={{ width: `${blackWidth}%` }}
                ></div>
              </div>
            </div>
            <p className="text-[14px] leading-[16.98px] text-[#B1B3B8] py-2">
              You are 75% done with your listing
            </p>

            <button className="w-[149px] h-[40px] p-2 rounded-sm text-[#FFFFFF] border-2 border-[#d0d1d2] bg-[#242526] !mt-5">
              Finish the listing
            </button>
          </div>
          {/* Three dot icon */}
          <div
            className="w-[40px] h-[40px] mt-4 rounded-sm bg-[242526] flex justify-center items-center "
            style={{
              backgroundColor: "#242526",
              filter:
                "drop-shadow(-2px -2px 6px #444A53) drop-shadow(3px 3px 12px #000000)",
            }}
          >
            <MoreHorizIcon />
          </div>
        </div>
      </div>

      {/* ----------------------------------- 2nd Rectangular Box ----------------------------------*/}
      <div className="absolute w-[738px] h-[209px] top-[393px] left-[109.84px] bg-[#18191a] rounded-md">
        <div className="flex text-white">
          {/* Images */}
          <div className="h-[209px]">
            <img
              src={slide2}
              alt="random pic"
              className="w-[100%] h-[100%] p-4"
            />
          </div>
          {/* Informations */}
          <div className="p-4">
            <p className="text-[22px] leading-[26.63px]">Boho Villa</p>
            <p className="pb-4 text-[16px] leading-[19.36px] mb-2">
              Luxury place
            </p>
            {/* progress bar */}
            <div className="progress-container">
              <div className="progress-bar">
                <div
                  className="blue-segment"
                  style={{ width: `${blueWidth2}%` }}
                ></div>
                <div
                  className="black-segment"
                  style={{ width: `${blackWidth2}%` }}
                ></div>
              </div>
            </div>
            <p className="text-[14px] leading-[16.98px] text-[#B1B3B8] py-2">
              You are 50% done with your listing
            </p>

            <button className="w-[149px] h-[40px] p-2 rounded-sm text-[#FFFFFF] border-2 border-[#d0d1d2] bg-[#242526] !mt-5">
              Finish the listing
            </button>
          </div>
          {/* Three dot icon */}
          <div
            className="w-[40px] h-[40px] mt-4 rounded-sm bg-[242526] flex justify-center items-center "
            style={{
              backgroundColor: "#242526",
              filter:
                "drop-shadow(-2px -2px 6px #444A53) drop-shadow(3px 3px 12px #000000)",
            }}
          >
            <MoreHorizIcon />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BodyComponent;
