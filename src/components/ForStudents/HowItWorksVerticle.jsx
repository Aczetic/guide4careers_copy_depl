import  { useState, useEffect } from 'react';
import './HowItWorks.css'; // Make sure your CSS path is correct

const HowItWorksVertical = () => {
    const [items, setItems] = useState([]);

    const data = [
        { id: '01', label: 'Advance Assessment & Best-Fit Matches', position: 'bottom' },
        { id: '02', label: 'Report As per Exam & Best suited options for you', position: 'top' },
        { id: '03', label: 'Talk to a Career Coach: Book your 1-on-1 session today!', position: 'bottom' },
        { id: '04', label: 'Personalized Guidance from Expert', position: 'top' },
        { id: '05', label: 'Career Roadmap Planner', position: 'bottom' },
      ];
    useEffect(() => {
        const timelineItems = document.querySelectorAll(".timeline li");
        setItems(timelineItems);

        const isElementInViewport = (el) => {
            const rect = el.getBoundingClientRect();
            return (
                rect.top >= 0 &&
                rect.left >= 0 &&
                rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
                rect.right <= (window.innerWidth || document.documentElement.clientWidth)
            );
        };

        const callbackFunc = () => {
            timelineItems.forEach(item => {
                if (isElementInViewport(item)) {
                    if (!item.classList.contains("in-view")) {
                        item.classList.add("in-view");
                    }
                } else if (item.classList.contains("in-view")) {
                    item.classList.remove("in-view");
                }
            });
        };

        window.addEventListener("load", callbackFunc);
        window.addEventListener("scroll", callbackFunc);

        return () => {
            window.removeEventListener("load", callbackFunc);
            window.removeEventListener("scroll", callbackFunc);
        };
    }, []);

    return (
        <section className="timeline flex justify-center w-full items-center ">
            <ul>
                {data.map((event, index) => (
                    <li key={index}>
                        <div className='' style={{background:'#00bfff',paddingBottom:'10px',paddingTop:20}}>
                            <time className='text-white'>{event.id}</time>
                            <div className="discovery">
                                <p className='text-white'>{event.label}</p>
                            </div>
                     
                        </div>
                    </li>
                ))}
            </ul>
        </section>
    );
};

export default HowItWorksVertical;
