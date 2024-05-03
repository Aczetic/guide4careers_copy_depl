import Slider from 'react-slick';
// Slick carousel CSS
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { Avtar1,Avtar2,Avtar3,Avtar4 } from '../../assets/images/images';

const cardData = [
  { title: 'Android Development', description: '“Best product. Ever! Very easy to use. I strongly recommend plateform to every one involved in running a restaurant business!”', buttonText: 'Ana Wilson, Head of',
  img:  {path:Avtar1}
},
  { title: '24/7 Support', description: '“Best product. Ever! Very easy to use. I strongly recommend plateform to every one involved in running a restaurant business!”', buttonText: 'Mark Churry',
  img:  {path:Avtar2}
 },
  { title: 'Free Consulting', description: '“Best product. Ever! Very easy to use. I strongly recommend plateform to every one involved in running a restaurant business!”', buttonText: 'Dirk Michon',
  img:  {path:Avtar3}
 },
  { title: 'Web Development', description: '“Best product. Ever! Very easy to use. I strongly recommend plateform to every one involved in running a restaurant business!”', buttonText: 'Derpina Wickers',
  img:  {path:Avtar4}
 },
  { title: 'Marketing Services', description: '“Best product. Ever! Very easy to use. I strongly recommend plateform to every one involved in running a restaurant business!”', buttonText: 'Ana Wilson',
  img:  {path:Avtar1}
 },
  { title: 'Graphic Design', description: '“Best product. Ever! Very easy to use. I strongly recommend plateform to every one involved in running a restaurant business!”', buttonText: 'Mark Churry',
  img:  {path:Avtar2}
 }
];



const ExploreSlider = () => {
  // Settings for the slider
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  };

  return (
    <div className="w-[100vw] bg-[#F7FAFF] h-full flex flex-col justify-center items-center py-10  lg:px-20 lg:py-20 gap-6">
      <div className="w-full h-fit p-8">

      <div className="flex items-center justify-center flex-col gap-y-7">
        <div className="w-full md:w-[500px] text-center text-2xl md:text-4xl font-bold px-5">
          <h1>Our Counselors sculpting</h1>
          <h1>student success</h1>
        </div>

        <div className="w-[100vw]  flex justify-center items-center flex-col text-center text-sm md:text-base font-bold px-5 gap-4">
          <p>50+ Counselors with 20+ years of experience in our team</p>
          <p>who have helped 1 Laksh+ students to kick start their</p>
          <p>Career Journey.</p>
        </div>
      </div>
        <Slider {...settings}>
          {cardData.map((card, index) => (
            <div key={index} className="bg-[#F7FAFF]rounded-lg p-4 flex flex-col items-center justify-between h-[472px] m-2" style={{ width: '300px' }}>
             <div className='bg-white shadow-md h-[408px] relative rounded-xl flex flex-col justify-center items-center' style={{top:Number(index)%2 !== 0? 50:2}}>

            
             <div className="text-center">
                <div className="flex  ml-10 mb-3">
                  <img src={card.img.path}/> {/* Placeholder for icons */}
                </div>

                {/* <h2 className="text-xl font-bold">{card.title}</h2> */}
               <div className='p-4'>
               <p>{card.description}</p>
               </div>
              </div>

              <div className='flex w-full  relative top-10 left-10'>
              <p className='text-[#8D96A6]'>--{card.buttonText}</p>
              </div>
              {/* <button className="mt-4 bg-yellow-500 text-white px-6 py-2 rounded-full">{card.buttonText}</button> */}
             </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default ExploreSlider;
