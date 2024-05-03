import { TickLogo, chatLogo } from "../../assets/images/images";
import { ScollerLogo } from "../../assets/images/images";

const ExploreCard = ({ title, content, onClick, isActive, bg,index }) => {
    const activeClass = isActive ? "scale-110 shadow-lg" : "";
    const formattedContent = content.split('\n').map((line, index) => (
      <div key={index}>
              <p key={index} className="text-sm md:text-base">{line}</p>
        <br/>
      </div>
  
    ));

    return (
      <div style={{background: bg}} className={`h-auto md:h-[310px] w-full md:w-[250px] p-2 md:p-4 rounded-lg transition-transform duration-300 cursor-pointer ${activeClass}`} onClick={onClick}>
        <div className="flex items-center gap-2">
          <img src={index === 1? ScollerLogo: chatLogo}/>
        <h2 className="text-base md:text-lg font-bold">{title}</h2>
          </div>
       
        <div className="flex flex-col justify-between">
           {formattedContent}
        </div>
        
      </div>
    );
};

export default ExploreCard;
