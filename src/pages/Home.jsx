import React from "react";
import Content from "../components/Content";
import CardData from "../components/cardData";
import CardData2 from "../components/cardData2";
import GetReport from "../components/GetReport";
import Reviewcard from "../components/reviewcard";
import ContactForm from "../components/ContactForm";
import FAQ from "../components/FAQ";
import CustomerService from "../components/CustomerService";

const Home = () => {
  return (
    <>
      {/* <div className='relative h-[100px]'>
      
    </div> */}
      <div className="">
        <Content />
      </div>
      <div>
        <CardData />
      </div>
      <div>
        <CardData2 />
      </div>
      <div>
        <GetReport />
      </div>
      <div>
        <Reviewcard />
      </div>
      <div>
        <ContactForm />
      </div>
      <div>
        <FAQ />
      </div>
      <div>
        <CustomerService />
      </div>
    </>
  );
};

export default Home;
