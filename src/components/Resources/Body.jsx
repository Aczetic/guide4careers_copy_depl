import React from "react";
import OptionCard from "./OptionCard.jsx";

const Body = () => {
  const data = [
    [
      {
        title: "Engineering",
        imgUrl: "/assets/resources/engineering.png",
      },

      {
        title: "Architecture",
        imgUrl: "src/assets/images/resources/architecture.svg",
      },

      {
        title: "Computer Application & IT",
        imgUrl: "src/assets/images/resources/computerApplicationsAndIt.svg",
      },

      {
        title: "Law",
        imgUrl: "src/assets/images/resources/law.svg",
      },
    ],
    [
      {
        title: "Sales",
        imgUrl: "/src/assets/images/resources/sales.svg",
      },
      {
        title: "Life Science & Environment",
        imgUrl: "src/assets/images/resources/lifeScienceAndEnvironment.svg",
      },
      {
        title: "Ethical Hacking",
        imgUrl: "src/assets/images/resources/ethicalHacking.svg",
      },
      {
        title: "Physical Science",
        imgUrl: "src/assets/images/resources/physicalScience.svg",
      },
    ],
    [
      {
        title: "Merchant Navy",
        imgUrl: "/src/assets/images/resources/merchantNavy.svg",
      },
      {
        title: "Animation & Graphics",
        imgUrl: "src/assets/images/resources/animationAndGraphics.svg",
      },
      {
        title: "Food and Agriculture",
        imgUrl: "src/assets/images/resources/foodAndAgriculture.svg",
      },
      {
        title: "Design",
        imgUrl: "src/assets/images/resources/Design.svg",
      },
    ],
    [
      {
        title: "Aviation",
        imgUrl: "/src/assets/images/resources/aviation.svg",
      },
      {
        title: "Medicine",
        imgUrl: "src/assets/images/resources/medicine.svg",
      },
      {
        title: "Maths & Statistics",
        imgUrl: "src/assets/images/resources/mathsAndStatistics.svg",
      },
      {
        title: "Defense",
        imgUrl: "src/assets/images/resources/defense.svg",
      },
    ],
  ];

  const backgroundColors = [
    { upColor: "bg-purple-300", downColor: "bg-red-300" },
    { upColor: "bg-yellow-200", downColor: "bg-orange-200" },
  ];

  return (
    <div className="h-fit pb-8 w-full relative flex flex-col items-center gap-8">
      {/* flex flex-col items-center justify-center mbl:content-start mbl:flex-row mbl:items-start */}
      <div className="box-border grid grid-cols-1 cstmr:grid-cols-2 relative gap-8 w-[95%] px-8 py-8">
        {data.map((data, index) => {
          console.log(Math.floor(index / 2), index);
          return (
            <OptionCard
              key={index}
              data={data}
              layoutReversed={index % 2 == 0 ? false : true}
              upColor={backgroundColors[Math.floor(index / 2)].upColor}
              downColor={backgroundColors[Math.floor(index / 2)].downColor}
            />
          );
        })}
        {/* another box */}
      </div>
    </div>
  );
};

export default Body;
