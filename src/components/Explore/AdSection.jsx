import { BgIamge2, HeroImg } from "../../assets/images/images";

const AdSection = () => {
  return (
    <div className="flex flex-col  md:px-2 py-10 gap-10 justify-center items-center relative">

        <div  className="flex flex-col md:flex-row justify-center items-center z-10 " >
          {/* Text section */}
          <div className="flex flex-col gap-10 w-full md:w-5/12 px-5">
        <span className="text-xl md:text-2xl font-bold">
          Feeling overwhelmed by the intricate college application process for your children?
        </span>

        <span className="text-lg md:text-xl font-bold">
          Relieve yourself of the burden of researching and selecting the ideal colleges, as well as completing the tedious task of individually filling out applications.
        </span>

        <span className="text-2xl md:text-4xl font-bold underline text-[#3E66DF] cursor-pointer">
          {`Talk to our Experts ->`}
        </span>
      </div>

      {/* Image section */}
      <div className="w-full md:w-auto md:h-auto rounded-[28px] overflow-hidden flex items-center justify-center z-10">
        <img src={HeroImg} alt="Hero Image" className="w-10/12  h-auto md:w-[500px] md:h-[333px]" />
      </div>
        </div>

      <img src={BgIamge2} className="absolute bottom-0 w-[100vw] z-0" />
    </div>
  )
}

export default AdSection;
