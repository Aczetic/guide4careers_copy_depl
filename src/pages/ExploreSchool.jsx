import React from 'react';
import BannerExplore from "../components/Explore/BannerExplore";
import HowWeAreHelping from "../components/Explore/HowWeAreHelping";
import OurCounselors from "../components/Explore/OurCounselors";
import FAQ from "../components/FAQ";
import PriceCard from "../components/ForStudents/PriceCard";
import Reviewcard from "../components/reviewcard";
import { SchoolBanner,CollegeBanner, BgImage, GroupImage, Rectanglogo} from '../assets/images/images';

const ExploreSchool = () => {
  const bannerData = {
    heading1: "Take control of your future.",
    heading2: "Get the support you deserve.",
    subheading: "Discover their Areas of Interest and Consult with Expert Counselors!",
    banner: SchoolBanner,
    bgBanner: Rectanglogo,
    headingColor: '#FFFFFF',
    floatText1: 'Stream?',
    floatText2: 'School?',
  };
  const bannerData2 = {
    bgImage : BgImage,
    mainImage : GroupImage
  }

  return (
    <>
      <div>
        <BannerExplore bannerData={bannerData} />
        <HowWeAreHelping bannerData={bannerData2}/>
        <OurCounselors />
        <Reviewcard explore={true} />
        <PriceCard />
        <FAQ explore={true} />
      </div>
    </>
  );
}

export default ExploreSchool;
