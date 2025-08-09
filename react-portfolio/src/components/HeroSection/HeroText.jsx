import React from 'react'

const HeroText = () => {
  return (
    <div className='flex flex-col gap-4 h-full justify-center text-center md:text-left'>
        <h2 className='text-xl lg:text-2xl uppercase text-cyan-700'>Full-stack Web Developer</h2>
        <h1 className='text-[2.8rem] lg:text-6xl font-bold text-purple-900 font-philosopher'>Saifullah Al Munsur</h1>
        <p className='text-lg'>A Passionate Web Developer with Years of Experience. <br /> Specialized in <span className='text-purple-900 font-semibold'>Front-End</span> Development.</p>
    </div>
  )
}

export default HeroText