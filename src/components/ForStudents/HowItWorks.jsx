import  { useState, useEffect } from 'react';
import WorkingSteps from "../WorkingSteps";
import HowItWorksVertical from './HowItWorksVerticle';

const HowItWorks = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    // Add event listener
    window.addEventListener('resize', handleResize);

    // Clean up
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div>
      <div className="w-full flex justify-center items-center mt-10">
        <h1 className="text-4xl font-bold">How It Works</h1>
      </div>
      {windowWidth < 780 ? <HowItWorksVertical/> : <WorkingSteps/>}
    </div>
  );
}

export default HowItWorks;
