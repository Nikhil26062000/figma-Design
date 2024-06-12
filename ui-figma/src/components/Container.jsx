import React from 'react'
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";

const Container = ({image,blueWidth,blackWidth}) => {
  return (
    <div>
        <div className="flex text-[#E5E6EB]">
          {/* Images */}
          <div className="h-[209px]">
            <img
              src={image}
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
            <p className="text-[14px] leading-[16.94px] text-[#B1B3B8] py-2">
             {`You are ${blueWidth} % done with your listing`}
            </p>

            <button className="w-[149px] h-[40px] p-2 rounded-[6px] text-[#E5E6EB] border-2 border-[#d0d1d2] bg-[#242526] !mt-5 text-[16px] leading-[19.36px] ">
              Finish the listing
            </button>
          </div>
          {/* Three dot icon */}
          <div
            className="w-[40px] h-[40px] mt-4 rounded-[1.5px] bg-[#242526] flex justify-center items-center "
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
  )
}

export default Container