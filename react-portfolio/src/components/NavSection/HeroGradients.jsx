import React from 'react'

const HeroGradients = () => {
  return (
    <div>
        <div className='rounded-full gradient1 absolute -top-[40px] right-[calc(100vw-300px)] -z-10 animate-pulse'></div>
        <div className='rounded-full gradient2 absolute top-0 right-0 -z-10 animate-pulse'></div>
        <div className='rounded-full gradient3 absolute top-[300px] left-0 -z-10 animate-pulse'></div>
    </div>
  )
}

export default HeroGradients