import React from "react";
import wavyBackground from "../../assets/images/resources/wavyBackground.svg";

const Header = () => {
  return (
    <>
      <div className="h-[4rem] relative top-[0]"></div>
      <div className="h-[30rem] w-full flex flex-col relative gap-4 items-center">
        <div
          className="absolute z-0 scale-x-[1] scale-y-[2] top-[-33%] bg-contain tbl:scale-x-[1.2] w-full h-full"
          style={{
            backgroundImage: `url("${wavyBackground}"`,
            backgroundRepeat: "no-repeat",
            backgroundPosition: "left",
            transformOrigin: "left",
          }}
        ></div>
        <div className="relative z-10 w-full flex flex-col items-center justify-between h-[80%]">
          <div className="text-[2rem] mbl:text-[3rem] text-[poppins] font-semibold w-fit py-4">
            Career Guidance
          </div>
          <div className="font-poppins text-center  text-[1.2rem] mbl:text-[1.5rem] text-black px-8 font-medium">
            What new areas of expertise can I be trained on to be more helpful?
          </div>
        </div>
        <div className="relative  w-full h-[50%] mbl:h-[40%] mbl:w-[70%] ">
          <form className="w-full  h-full flex min-h-[4.45rem] items-center flex-col cstmr:flex-row gap-4 justify-around px-4">
            <input
              id="search"
              type="text"
              placeholder="Search"
              className="border-2 border-solid w-[90%] min-w-[16rem] border-gray-300 p-4 h-[40%] max-h-[8rem] font-poppins rounded-lg font-medium outline-none focus:border-4"
            />
            <input
              for="search"
              type="submit"
              value="Search"
              className="px-16 py-3 mbl:py-0 scale-[80%] min-h-[4.45rem] font-poppins active:scale-[76%] duration-100 origin-center-top bg-[#4a76f6] rounded-lg text-white text-[1.2rem] shadow-[0_5px_7px_rgba(120,120,120,0.5)]"
            />
          </form>
        </div>
      </div>
    </>
  );
};

export default Header;
