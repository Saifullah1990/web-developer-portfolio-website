import React from "react";
import { navLinks } from "../../constants/index";
import logo from "../../assets/logo1.png";
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
      <nav className="w-full flex flex-row gap-2 justify-between items-center px-5 py-5">
        <img
          src={logo}
          alt="site-logo"
          className="w-auto h-10 md:h-15 cursor-pointer contrast-150"
        />
        <div className={`w-1/2 ${menuOpen ? "sm:max-lg:block" : "sm:max-lg:hidden"} lg:block z-99`}>
            <ul className="sm:max-lg:w-full flex flex-col lg:flex-row py-4 gap-2 text-center lg:justify-around sm:absolute sm:top-[10%] left-[50%] -translate-x-[50%] lg:relative lg:text-md sm:text-lg lg:bg-inherit sm:bg-cyan-700/50 backdrop-blur-lg">
            {navLinks.map((item, index) => (
                <li key={index} className="font-medium group">
                <a
                    href={`#${item.id}`}
                    className=" text-xl cursor-pointer text-gray-900 hover:text-white transition-all duration-500"
                >
                    {item.title}
                </a>
                <div className="mx-auto bg-cyan-600 w-0 group-hover:w-full h-[2px] transition-all duration-500"></div>
                </li>
            ))}
            </ul>
        </div>
        
        <div className="lg:hidden p-3 bg-black items-center border-[1px] rounded-full border-orange-300 float-end">
          <button className="text-lg hover:text-xl transition-all duration-500 p-2 border border-orange-300 rounded-full text-white cursor-pointer" onClick={toggleMenu} >
            {menuOpen ? <IoCloseSharp /> : <GiHamburgerMenu /> }            
          </button>
        </div>

        <button className="justify-start cursor-pointer flex items-center text-md lg:text-lg text-white font-normal lg:font-medium border border-cyan-700 rounded-full px-3 md:px-4 py-1 md:py-2 gap-1 bg-gradient-to-r from-cyan-700 to-purple-700 hover:bg-gradient-to-l from-cyan-700 to-purple-700">
          Hire Me 
          <div className="sm:hidden">
            <FiArrowDownRight />
          </div>
        </button>
      </nav>

      <HeroGradients />
    </div>
  );
};

export default Navbar;
