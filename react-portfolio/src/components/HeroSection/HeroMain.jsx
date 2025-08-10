import React from 'react'
import HeroText from './HeroText';
import HeroPic from './HeroPic';
import SubHeroSection from './SUbHeroSection';

const HeroMain = () => {
  return (
    <div className='pt-10 lg:pt-5 pb-4'>
        <div className='flex flex-col md:flex-row max-w-full mx-auto items-center justify-around relative'>
            <HeroText /> 
            <HeroPic />
        </div>
        <SubHeroSection />
    </div>
  )
}

export default HeroMain