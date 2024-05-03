import React from 'react';

const Cards = ({ image, description, bgColor, color }) => {
  return (
    <div className="max-w-lg rounded-lg overflow-hidden shadow-lg m-10 -mt-5 hover:shadow-xl transform hover:scale-105 transition duration-300"
      style={{ width: '225px', height: '230px', backgroundColor: bgColor }}>

      <div className="flex justify-center items-center h-3/5">
        {/* Centered image with custom size */}
        <img src={image} alt="card" className="w-3/5 h-5/5 object-cover" />
      </div>

      <div className="px-8 py-0">
        <p className="font-semibold text-base" style={{ color: color }}>{description}</p>
      </div>
    </div>
  );
};

export default Cards;
