import { useState } from "react";
import { studentBanner, Caplogo } from "../../assets/images/images";
import ModalDialog from "./ModalDialog ";

const BannerExplore = ({bannerData}) => {

    
    const [isModalOpen, setModalOpen] = useState(false);
  return (
    <div className=" mt-[64px] w-full bg-[#FFFFFF] flex flex-wrap items-center justify-between p-4 md:p-10 md:h-[80vh] ">

        <div className="flex flex-col justify-center items-start gap-y-4 md:gap-y-14 w-full md:w-auto">
            <div className="flex flex-col gap-y-2 z-10" style={{color:bannerData.bgBanner?'white':'black'}}>
                <span className="text-2xl md:text-4xl font-bold">
                   {bannerData?.heading1}
                </span>
                
                <span className="text-3xl md:text-5xl font-bold text-[#F66F52]"               style={{color:bannerData?.headingColor}}
>
                  {bannerData.heading2}
                </span>
                <p className="text-base md:text-lg font-bold w-[346px] ">
                    {bannerData.subheading}
                </p>
            </div> 
            <button 
              className="bg-[#2975F5] w-full md:w-[220px] h-[48px] text-white font-bold text-lg md:text-xl rounded-lg z-10"
              onClick={() => setModalOpen(true)} // Set state to open modal
            >
             Speak to Expert</button>

             {bannerData.bgBanner&& <img className="absolute z-0 left-0" src={bannerData.bgBanner}/>}
        </div>

        <div className="flex flex-wrap justify-center items-center gap-4 w-full md:w-auto">
            <div className="w-full md:w-[155px] h-[58px] bg-[#E8F1FF] shadow-sm flex justify-center items-center rounded-full">
                <span className="text-lg md:text-xl font-bold justify-center items-center">
                   {bannerData.floatText2}
                </span>
            </div>
            <div>
                <span className="flex gap-2 justify-center items-center bg-[#E8F1FF] shadow-sm w-full md:w-[164px] h-[58px] rounded-full">
                    <img src={Caplogo} className="h-10 w-10" alt="Cap logo"/>
                    <span className="font-bold text-[#121D2F] text-lg md:text-xl">{bannerData.floatText1}</span>
                </span>
                <img src={bannerData.banner} alt="Student banner"/>
            </div>
        </div>

        <ModalDialog isOpen={isModalOpen} onClose={() => setModalOpen(false)} />
    </div>
  )
}

export default BannerExplore;
