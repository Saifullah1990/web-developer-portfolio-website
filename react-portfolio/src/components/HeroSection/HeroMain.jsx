import React from 'react'
import HeroText from './HeroText';
import HeroPic from './HeroPic';

const HeroMain = () => {
  return (
    <div className='pt-10 lg:pt-5 pb-4'>
        <div className='flex flex-col md:flex-row max-w-[1200px] mx-auto items-center justify-around relative'>
            <HeroText /> 
            <HeroPic />
        </div>

    </div>
  )
}

export default HeroMain