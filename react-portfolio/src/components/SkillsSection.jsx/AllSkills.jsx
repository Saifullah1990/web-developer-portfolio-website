import React from 'react';
import { FaHtml5, FaCss3Alt, FaReact,  } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { SiTypescript, SiNextdotjs  } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";
import SingleSkill from './SingleSkill';

const skills = [
    {
        skill: "HTML",
        icon: FaHtml5
    },
    {
        skill: "CSS",
        icon: FaCss3Alt
    },
    {
        skill: "JavaScript",
        icon: IoLogoJavascript
    },
    {
        skill: "Typescript",
        icon: SiTypescript
    },
    {
        skill: "ReactJS",
        icon: FaReact
    },
    {
        skill: "NextJS",
        icon: SiNextdotjs
    },
    {
        skill: "TailwindCSS",
        icon: RiTailwindCssFill
    },
]

const AllSkills = () => {
  return (
    <div>
        <div className='flex'>
            {skills.map((item, index)=>{
                return (
                    <SingleSkill key={index} text={item.skill} imgSvg={<item.icon />} />
                )
            })}
        </div>
    </div>
  )
}

export default AllSkills