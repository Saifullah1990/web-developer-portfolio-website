import React from 'react'

const AboutMeText = () => {
  return (
    <div className='w-full md:w-1/2 flex flex-col justify-center items-center my-4 pr-4'>
        <h2 className='text-center md:text-left text-4xl md:text-6xl text-cyan-700 py-3 md:mb-2'>About Me</h2>
        <p className='text-center md:text-justify text-xl md:text-2xl leading-8 lg:leading-9 py-2 mb-5 '>Certified MERN Stack developer with a background of Bachelor in Industrial Engineering and an MBA from IBA, University of Dhaka, transitioning from a well-established career in public procurement to software development. Experienced in building real-world applications like an Emergency Doctor Finder app, with skills in JavaScript, MongoDB, Express.js, React.js, and Node.js. Interested to apply the acquired problem-solving skills, build real-world experience in modern web technologies, and contribute to a collaborative development team in a remote internship or entry-level role.</p>
        <button className='border-1 rounded-full border-orange-300 px-4 md:px-5 py-2 md:py-3 text-lg md:text-2xl font-bold hover:bg-amber-500 hover:text-white transition-all duration-500 cursor-pointer'>
            <a href="#projects">My Projects</a>
        </button>
    </div>
  )
}

export default AboutMeText