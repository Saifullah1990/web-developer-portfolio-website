import React from 'react'

const SingleSkill = ({imgSvg, text}) => {
  return (
    <div className='flex hover:translate-y-10 transition-all duration-500'>
        <div className='flex flex-col items-center gap-2 relative'>
            <div className='bg-white text-cyan-600 w-[100px] h-[100px] rounded-full text-5xl border-4 border-orange-500 flex items-center justify-center hover:scale-105 transform transition-all duration-500'>{imgSvg}</div>
            <p className='text-white font-bold'>{text}</p>
        </div>
        <div className='w-[100px] h-[200px] bg-orange-500 absolute top-[50px] -z-10'></div>
    </div>
  )
}

export default SingleSkill