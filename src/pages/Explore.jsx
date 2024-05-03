import { studentBanner } from "../assets/images/images"
import AdSection from "../components/Explore/AdSection"
import BannerExplore from "../components/Explore/BannerExplore"
import HowWeAreHelping from "../components/Explore/HowWeAreHelping"
import OurCounselors from "../components/Explore/OurCounselors"
import FAQ from "../components/FAQ"
import PriceCard from "../components/ForStudents/PriceCard"
import Reviewcard from "../components/reviewcard"
import { GroupImage,BgImage } from "../assets/images/images"

const Explore = () => {

  const bannerData = {
    heading1: "Want to pace up your",
    heading2: "career journey? But how?",
    subheading: "Seek clarity to get the best job after graduation Pursue an In-demand course for postgraduation in India",
    banner: studentBanner,
    headingColor: '#F66F52',
    floatText1: 'Stream?',
    floatText2: 'What Next?',

  };

  const bannerData2 = {
    bgImage : BgImage,
    mainImage : GroupImage
  }
  return (
    <>
    <div>
    <BannerExplore bannerData={bannerData} />
        <HowWeAreHelping bannerData ={bannerData2}/>
        <OurCounselors/>
        <Reviewcard explore={true}/>
        <PriceCard />
        <AdSection/>
        <FAQ explore={true}/>
    </div>
    </>
  )
}

export default Explore