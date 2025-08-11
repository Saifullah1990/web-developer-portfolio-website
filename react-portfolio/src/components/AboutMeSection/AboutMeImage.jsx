import React from 'react';
import aboutMeImage from "../../assets/about-me-image.png";

const AboutMeImage = () => {
  return (
    <div className='w-full md:w-1/2 relative'>
        <div className='max-w-[650px] h-auto border-r-4 border-b-4 border-orange-400  rounded-[50px] mask-l-from-60% mask-l-to-95% mask-t-from-80% mask-t-to-95% object-cover'>
            <img src={aboutMeImage} alt="about-me-image" />
        </div>
    </div>

  )
}

export default AboutMeImage