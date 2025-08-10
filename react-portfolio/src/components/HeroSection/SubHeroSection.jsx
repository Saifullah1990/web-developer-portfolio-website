import React from 'react'

const SubHeroSection = () => {
  return (
    <div className='w-full flex gap-3 justify-around items-center my-3 py-2 md:py-3 border-y border-gray-600 text-[var(--bg-color)] text-3xl bg-purple-900'>
        <p className='hidden md:block'>Fast Learner</p> 
        <p className='hidden md:block'>Team Work</p> 
        <p>Detail Master</p> 
    </div>
  )
}

export default SubHeroSection