import React from "react";
import illus1 from "../../assets/images/whyChooseUs/illus1.svg";
import illus2 from "../../assets/images/whyChooseUs/illus2.svg";

const OptionCard = ({ upColor, downColor, data, layoutReversed = false }) => {
  return (
    <div className=" h-fit w-[100%] flex flex-col gap-8">
      {/* the column that holds all the cards */}
      <div className="h-fit w-full grid grid-cols-1 mbl:grid-cols-2 gap-8">
        {/* the container that holds the two cards together */}
        <div className="flex flex-col h-full w-full gap-8 ">
          <div
            className={` w-full h-[10rem] ${upColor} ${
              layoutReversed ? "cstmr:h-[8rem]" : ""
            } rounded-[1rem] flex flex-col items-center justify-around hover:scale-[105%] duration-100`}
          >
            <div className="h-[4.7rem] w-[4.7rem]">
              <img src={data[0].imgUrl} className="h-[4.7rem] w-[4.7rem]" />
            </div>
            <div className="font-poppins font-medium text-[1.1rem] text-center px-4">
              {data[0].title}
            </div>
          </div>
          <div
            className={` w-full h-[10rem] ${downColor} ${
              layoutReversed ? "cstmr:h-[12rem]" : ""
            }  rounded-[1rem] flex flex-col items-center justify-around hover:scale-[105%] duration-100`}
          >
            <div className="h-[4.7rem] w-[4.7rem]">
              <img src={data[1].imgUrl} className="h-[4.7rem] w-[4.7rem]" />
            </div>
            <div className="font-poppins font-medium text-[1.1rem] text-center px-4">
              {data[1].title}
            </div>
          </div>
        </div>
        <div className="flex flex-col h-full w-full gap-8">
          <div
            className={` w-full h-[10rem] ${upColor} ${
              layoutReversed ? "" : "cstmr:h-[12rem]"
            } rounded-[1rem] flex flex-col items-center justify-around hover:scale-[105%] duration-100`}
          >
            <div className="h-[4.7rem] w-[4.7rem]">
              <img src={data[2].imgUrl} className="h-[4.7rem] w-[4.7rem]" />
            </div>
            <div className="font-poppins font-medium text-[1.1rem] text-center px-4">
              {data[2].title}
            </div>
          </div>
          <div
            className={` w-full h-[10rem] ${downColor} ${
              layoutReversed ? "" : "cstmr:h-[8rem]"
            } rounded-[1rem] flex flex-col items-center justify-around hover:scale-[105%] duration-100`}
          >
            <div className="h-[4.7rem] w-[4.7rem]">
              <img src={data[3].imgUrl} className="h-[4.7rem] w-[4.7rem]" />
            </div>
            <div className="font-poppins font-medium text-[1.1rem] text-center px-4">
              {data[3].title}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OptionCard;
