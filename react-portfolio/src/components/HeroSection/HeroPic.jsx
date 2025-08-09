import React from 'react';
import heroImage from "../../assets/hero-image.png";
import { PiTriangleThin } from "react-icons/pi";

const HeroPic = () => {
  return (
    <div className='h-full flex justify-center items-center py-4'>
        <img src={heroImage} alt="hero-image" className='max-h-[350px] lg:max-h-[450px] w-auto' />
        <div className='absolute -z-10 justify-center items-center animate-pulse'>
            <PiTriangleThin className='min-h-[420px] sm:h-[120%] md:h-[450px] lg:h-[500px] w-auto text-cyan-600 blur-md animate-[spin_5s_radial_infinite]'/>
        </div>
    </div>
  )
}

export default HeroPic