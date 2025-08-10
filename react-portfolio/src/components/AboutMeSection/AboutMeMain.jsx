import React from 'react'
import AboutMeText from './AboutMeText'
import AboutMeImage from './AboutMeImage'

const AboutMeMain = () => {
  return (
    <div className='flex flex-col md:flex-row gap-12 px-4 max-w-full mx-auto items-center justify-between'>
        <AboutMeText />
        <AboutMeImage />
    </div>
  )
}

export default AboutMeMain