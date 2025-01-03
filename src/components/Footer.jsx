import React from "react";
import emailFormSubmitButton from "../assets/images/emailFormSubmitButton.svg";
import randomShape from "../assets/images/randomShape.svg";
import chatBoxImg from "../assets/images/chatBoxImg.svg";
import Logo from "../assets/images/Logo.png";
import mailIcon from "../assets/images/mailIcon.svg";
import phoneIcon from "../assets/images/phoneIcon.svg";
import locationIcon from "../assets/images/locationIcon.svg";
import "../components/style.css";
import { Link } from "react-router-dom";

const Footer = () => {
  const fontStyle = {
    fontFamily: "poppins",
    color: "white",
    fontSize: "0.9rem",
    fontWeight: "lighter",
  };
  return (
    <div>
      <div className="relative bg-[#4069D5] w-full z-10 flex flex-col justify-end items-center gap-[1.1rem] py-16">
        <div className="h-4/5 w-full flex flex-col justify-between gap-8 tbl:gap-0 mbl:flex-row mbl:flex-wrap tbl:flex-row tbl:flex-nowrap">
          <div className="h-full w-full px-8 mbl:flex mbl:justify-center mbl:gap-16 tbl:8">
            <div className="flex flex-col gap-6 mbl:w-[17rem] mbl:h-[16rem] tbl:w-[21.5rem] ">
              <div>
                <img
                  src={Logo}
                  alt="Logo"
                  className="h-full w-[10rem] mbl:w-[11rem]"
                />
              </div>
              <div style={fontStyle}>
                {/* A Guide4Careers acts as a compass, providing valuable insights
                and direction for those seeking professional fulfillment. It
                begins with self-reflection, encouraging individuals to identify
                their strengths, interests, and aspirations. Setting
                well-defined goals and continually developing relevant skills.
                Networking and seeking mentorship offer opportunities for
                growth. */}
                Guide4Careers provides direction for professional fulfillment,
                promoting self-reflection, goal-setting, skill enhancement, and
                networking. It helps individuals identify their strengths and
                aspirations, offering growth opportunities through mentorship.
              </div>
            </div>
            <div className="hidden mbl:flex flex-col justify-between items-start gap-8 mbl:w-[14rem] mbl:justify-start tbl:hidden">
              <div className="text-white text-[1.5rem] font-poppins relative w-fit font-extrabold">
                Contact Us
                <div className="w-full h-1 bg-white"></div>
              </div>
              <div className="flex flex-col w-full gap-2 mbl:gap-6">
                <div className="flex gap-2 w-full">
                  {/* Assuming mailIcon is a component or an image path */}
                  <img src={mailIcon} alt="mail" />
                  <p className="fontStyle">info@templeoflearning.in</p>
                </div>
                <div className="flex gap-2 w-full">
                  {/* Assuming phoneIcon is a component or an image path */}
                  <img src={phoneIcon} alt="phone" />
                  <div className="flex flex-col">
                    <p className="fontStyle">+91 98100 33459</p>
                    <p className="fontStyle">+011 45 019 365</p>
                  </div>
                </div>
                <div className="flex gap-2 w-full">
                  {/* Assuming locationIcon is a component or an image path */}
                  <img src={locationIcon} alt="location" />
                  <p className="fontStyle">
                    Head Office - L-3, Kanchanjunga Building Barakhamba Road,
                    Connaught Place
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="h-full w-full px-8 flex flex-col justify-between items-start gap-16 font-bold mbl:flex-row mbl:justify-center tbl:gap-8">
            <div className="flex flex-col gap-6 h-5/6 justify-around mbl:w-[17rem]">
              <div className="text-white text-[1.3rem] cstmr:text-[1.5rem] font-poppins relative w-fit">
                COMPANY
                <div className="w-full h-1 bg-white"></div>
              </div>
              <div className="flex flex-col h-5/6 justify-around gap-4">
              <Link to={'/'}>
              <div style={fontStyle}>Home</div>
              </Link>
              <Link to={'/students'}>
               <div style={fontStyle}>For Students</div>
              </Link>
               <Link  to={'/institutes'}>
               <div style={fontStyle}>For Institutions</div>
               </Link>
               <Link to={'/resourcesv'}>
               <div style={fontStyle}>Resource Treasure</div>
               </Link>
               <Link to={'/contact'}>
               <div style={fontStyle}>Contact Us</div>
               </Link>
              </div>
            </div>
            <div className="flex flex-col gap-6 h-5/6 justify-around mbl:w-[14rem]">
              <div className="text-white text-[1.3rem] cstmr:text-[1.5rem]  font-poppins relative w-fit">
                WHOM WE SERVE
                <div className="w-full h-1 bg-white"></div>
              </div>
              <div className="flex flex-col h-5/6 justify-around gap-4 ">
                <div style={fontStyle}>School Students</div>
                <div style={fontStyle}>College Students</div>
                <div style={fontStyle}>Education Institutions</div>
                <div style={fontStyle}>Private Schools</div>
                <div style={fontStyle}>Private Colleges</div>
              </div>
            </div>
          </div>
          <div className="w-full flex flex-col items-start px-8 gap-8  mbl:hidden tbl:flex">
            <div className="flex flex-col justify-between items-start gap-8">
              <div className="text-white text-[1.3rem] cstmr:text-[1.5rem] font-poppins relative w-fit font-extrabold">
                Contact Us
                <div className="w-full h-1 bg-white"></div>
              </div>
              <div className="flex flex-col w-full gap-2">
                <div className="flex gap-2 w-full">
                  {/* Assuming mailIcon is a component or an image path */}
                  <img src={mailIcon} alt="mail" />
                  <p className="fontStyle">
    <a href="mailto:info@templeoflearning.in">info@templeoflearning.in</a>
</p>

                </div>
                <div className="flex gap-2 w-full">
                  {/* Assuming phoneIcon is a component or an image path */}
                  <img src={phoneIcon} alt="phone" />
                  <div className="flex flex-col">
    <a href="tel:+919810033459" className="fontStyle">+91 98100 33459</a>
    <a href="tel:+01145019365" className="fontStyle">+011 45 019 365</a>
</div>
                </div>
                <div className="flex gap-2 w-full">
                  {/* Assuming locationIcon is a component or an image path */}
                  <img src={locationIcon} alt="location" />
                  <a  href="https://www.google.com/maps?q=Kanchanjunga+Building+Barakhamba+Road,+Connaught+Place"
        target="_blank"
        rel="noopener noreferrer" className="fontStyle cursor-pointer">
    Head Office - L-3, Kanchanjunga Building Barakhamba Road,
    Connaught Place{" "}

</a>
                </div>
              </div>
            </div>
            <div className="flex flex-col justify-between items-start gap-8 mbl:hidden ">
              <div className="text-white text-[1.5rem] font-poppins relative w-fit font-extrabold">
                Support
                <div className="w-full h-1 bg-white"></div>
              </div>
              <div className="flex flex-col w-full gap-2">
                <div className="flex gap-2 w-full">
                  <p className="fontStyle">Terms and Conditions</p>
                </div>
                <div className="flex gap-2 w-full">
                  <div className="flex flex-col">
                    <p className="fontStyle">Privacy</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="hidden h-10 w-full justify-between border-t-4 border-white pt-2">
          <div style={fontStyle}>&#169;2024 Guid4Careers</div>
          <div style={fontStyle}>
            <a href="#">All Rights Reserved</a>
          </div>
          <div style={fontStyle}>
            <a href="#">Terms & Condition </a>| <a href="#">Privacy Policy</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
