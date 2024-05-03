import { useState } from "react";
import { BgImage, GroupImage, ScollerLogo, chatLogo } from "../../assets/images/images";
import ExploreCard from "./ExploreCard";

const HowWeAreHelping = ({bannerData}) => {

  const [activeCard, setActiveCard] = useState(1);
  const cardsData = [
    {
      title: "Get to Know yourself",
      content: "✅ Areas of Interest, Aptitude Level and Personality Type\n✅ Strengths & weaknesses\n✅ 16-page in-depth career report",
      bg: '#FCE4EC',
      image: ScollerLogo
    },
    {
      title: "Counselling",
      content: "✅ Industry Best Counselor\n✅ Experience across various Domains\n✅ Personalized 1 on 1 Counselling to help find the right fit",
      bg: '#FFF0CB',
      image: chatLogo
    },
    {
      title: "Career Encyclopedia",
      content: "✅ Explore 250+ Career Path\n✅ Career Dashboard to Map Progress & weaknesses \n✅ List of colleges, Entrance Exams and Scholarships",
      bg: '#EBF2FF',
      image:ScollerLogo
    }
  ];
  return (
    <div className=" py-10 flex flex-col justify-center items-center">

      
      <div className="flex flex-col gap-x-10 justify-center items-center">
        <span className="text-3xl font-bold mb-2">How we are helping</span>
        <span className="text-4xl font-bold text-[#3E66DF]">
          1 Lakh+ Students like you!
        </span>
      </div>

      <div className="flex items-center justify-between w-[100vw] px-10 flex-wrap ">
        {/* images div */}

        <div
          className="relative mt-10 "
          style={{ width: "492px", height: "378px" }}
        >
          {/* Background image */}
          <img
            src={bannerData?.bgImage}
            alt="Background"
            style={{
              width: "492px",
              height: "378px",
              position: "absolute",
              top: 0,
              left: 0,
            }}
          />

          {/* Overlay image positioned absolutely to overlay on top of the first image */}
          <img
            src={bannerData?.mainImage}
            alt="Group"
            style={{
              width: "300px",
              height: "200px",
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
            }}
          />
        </div>

        {/* conatainer div  */}
        <div className="flex justify-center items-center flex-wrap gap-4">
        {cardsData.map((card, index) => (
          <ExploreCard
            key={index}
            title={card.title}
            content={card.content}
            bg = {card.bg}
            index={index}
            isActive={activeCard === index}
            onClick={() => setActiveCard(index)}
          />
        ))}
      </div>


      </div>

    </div>
  );
};

export default HowWeAreHelping;
