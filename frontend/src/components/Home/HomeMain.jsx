import React from 'react';
import mainImage from '../../assets/main-img (1).jpg';
import mainImage1 from '../../assets/main-img-2.jpg';

const HomeMain = () => {
  return (
    <div>
      <div clasName='relative'>
    <div className="w-full h-screen flex">
      <img
        src={mainImage}
        alt=""
        className="w-1/2 h-full object-cover"
      />
      <img
        src={mainImage1}
        alt=""
        className="w-1/2 h-full object-cover"
      />
      
    </div>
    <div className="absolute inset-0 flex items-center justify-center">
        <p className="text-[#fffbeb] text-9xl lg:text-9xl font-['MonsieurLaDoulaise'] font-bold tracking-wide">
          Predara
        </p>
      </div>
    </div>
    </div>
  );
}

export default HomeMain;
