import React from "react";
import { navLinks } from "../constants/index";
import logo from "../assets/logo1.png";
import HeroGradients from "./HeroGradients";
import { FiArrowDownRight } from "react-icons/fi";
import { GiHamburgerMenu } from "react-icons/gi"; 
import { IoCloseSharp } from "react-icons/io5";
import { useState } from "react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div>
      <nav className="w-full flex flex-col gap-2 md:flex-row justify-between items-center px-5 py-5">
        <img
          src={logo}
          alt="site-logo"
          className="w-auto h-20 cursor-pointer contrast-150 border-2"
        />
        <div className={`w-1/2 hidden ${menuOpen ? "sm:block" : "sm:hidden"} lg:block border-2`}>
            <ul className="flex flex-col md:flex-row justify-evenly">
            {navLinks.map((item, index) => (
                <li key={index} className="font-semibold group">
                <a
                    href={`#${item.id}`}
                    className=" text-xl cursor-pointer text-gray-900 hover:text-cyan-600 transition-all duration-500"
                >
                    {item.title}
                </a>
                <div className="mx-auto bg-cyan-600 w-0 group-hover:w-full h-[2px] transition-all duration-500"></div>
                </li>
            ))}
            </ul>
        </div>
        
        <div className="flex p-6 bg-black items-center rounded-4xl border-[1px] border-orange-300 lg:hidden">
          <button className="text-2xl p-3 border border-orange-300 rounded-full text-white cursor-pointer" onClick={toggleMenu} >
            {menuOpen ? <IoCloseSharp /> : <GiHamburgerMenu /> }            
          </button>
        </div>

        <button className="justify-start cursor-pointer flex items-center text-lg text-white font-bold border border-cyan-700 rounded-full px-4 py-2 gap-1 bg-gradient-to-r from-cyan-700 to-purple-700 hover:bg-gradient-to-l from-cyan-700 to-purple-700">
          Hire Me <FiArrowDownRight />
        </button>
      </nav>

      <HeroGradients />
    </div>
  );
};

export default Navbar;
