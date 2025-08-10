import React from 'react'

const SubHeroSection = () => {
  return (
    <div className='w-full flex gap-3 justify-around items-center my-3 py-2 md:py-4 border-y border-gray-600 text-gray-300 text-2xl uppercase bg-purple-700'>
        <p className='hidden md:block'>Fast Learner</p> 
        <p className='hidden md:block'>Team Work</p> 
        <p>Detail Master</p> 
    </div>
  )
}

export default SubHeroSection