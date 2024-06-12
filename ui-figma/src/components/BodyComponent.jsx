import React from "react";
import slide2 from "../assets/slide2.png";
import slide3 from "../assets/slide3.png";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import Breadcrumb from "./Breadcrumb";
import Container from "./Container";

const BodyComponent = () => {
 

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
        className="w-[314px] h-[48px] py-[4px] px-[24px] absolute top-[83px] left-[109.84px] rounded-[40px] flex justify-center items-center gap-[16px]"
        style={{
          backgroundColor: "#242526",
          filter:
            "drop-shadow(-2px -2px 6px #444A53) drop-shadow(4px 4px 12px #000000)",
        }}
      >
        <button className="hover:bg-slate-500 text-[16px] leading-[19.36px] text-[#E5E6EB] w-[107.38px] rounded-[40px] p-1">
          Your listing
        </button>

        <div
          style={{
            boxShadow:
              "2px 2px 6px 0px #000000 inset, -1px -1px 3px 0px #444A53 inset", // Combined shadow styles
            background: "#18191A",
            borderRadius: "40px",
          }}
        >
          <button
            className="hover:bg-slate-500 text-[16px] leading-[19.36px] text-[#E5E6EB] w-[123.68px] rounded-[40px] p-[10px]"
            style={{
              boxShadow: "-2px -2px 6px 0px #444A53, 4px 4px 4px 0px #00000040", // Combined shadow styles
            }}
          >
            Finish Listing
          </button>
        </div>
      </div>

      {/* -------------------------1st Rectangular box --------------------------------------- */}
      <div className="absolute w-[738px] h-[209px] top-[160px] left-[109.84px] bg-[#18191A] rounded-md">
        <Container image={slide3} blueWidth="75" blackWidth="25" />
      </div>

      {/* ----------------------------------- 2nd Rectangular Box ----------------------------------*/}
      <div className="absolute w-[738px] h-[209px] top-[393px] left-[109.84px] bg-[#18191a] rounded-md">
        <Container image={slide2} blueWidth="50" blackWidth="50" />
      </div>
    </div>
  );
};

export default BodyComponent;
