

import { BgCollege, BgIamge2, CollegeBanner, groupImg2 } from "../assets/images/images"
import AdSection from "../components/Explore/AdSection"
import BannerExplore from "../components/Explore/BannerExplore"
import HowWeAreHelping from "../components/Explore/HowWeAreHelping"
import OurCounselors from "../components/Explore/OurCounselors"
import FAQ from "../components/FAQ"
import PriceCard from "../components/ForStudents/PriceCard"
import Reviewcard from "../components/reviewcard"
const ExploreCollege = () => {

  const bannerData = {
    heading1: "Want to pace up your",
    heading2: "career journey? But how?",
    subheading: "Seek clarity to get the best job after graduation Pursue an In-demand course for postgraduation in India",
    banner: CollegeBanner,
    headingColor: '#4CCD99',
    floatText1: 'PG?',
    floatText2: 'JOB?',
  };

  const bannerData2 = {
    bgImage : BgCollege,
    mainImage : groupImg2
  }

  return (
    <>
    <div>
       <BannerExplore bannerData={bannerData} />
        <HowWeAreHelping bannerData={bannerData2}/>
        <OurCounselors/>
        <Reviewcard explore={true}/>
        <PriceCard />
        <FAQ explore={true}/>
    </div>
    </>
  )
}

export default ExploreCollege