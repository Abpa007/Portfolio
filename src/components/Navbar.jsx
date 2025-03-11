import React, { useState } from "react";
import {Link} from "react-scroll"


import NavPic from "../Images/photo.avif";
import { IoMdMenu, IoMdClose } from "react-icons/io";

const Navbar = () => {
  const [menu, setMenu] = useState(false);

  const navItem = [
    { id: 1, text: "Home" },
    { id: 2, text: "About" },
    { id: 3, text: "Portfolio" },
    { id: 4, text: "Experience" },
    { id: 5, text: "Contact" },
  ];

  return (
    <div className="max-w-screen-2xl container fixed top-0 right-0 left-0 mx-auto px-4 md:px-20 shadow-md bg-white h-16 z-50">
      <div className="flex justify-between items-center h-16">
        {/* Logo Section */}
        <div className="flex items-center space-x-2">
          <img src={NavPic} alt="Profile Pic" className="h-12 w-12 rounded-full" />
          <h1 className="font-semibold text-xl cursor-pointer">
            Abha<span className="text-green-500 text-2xl">y</span>
            <p className="text-sm">MERN Stack Developer</p>
          </h1>
        </div>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex space-x-8">
          {navItem.map(({ id, text }) => (
            <li
              key={id}
              className="hover:scale-105 transition-transform duration-200 text-xl cursor-pointer list-none inline-block"
            >
              <Link to={text}
                smooth={true}
                duration={500}
                offset={-70}
                activeClass="active"
               >{text}</Link>
              
            </li>
          ))}
        </ul>

        {/* Mobile Menu Icon */}
        <div className="md:hidden cursor-pointer" onClick={() => setMenu(!menu)}>
          {menu ? <IoMdClose size={24} /> : <IoMdMenu size={24} />}
        </div>
      </div>

      {/* Mobile Menu */}
      {menu && (
        <div className="absolute top-16 left-0 w-full bg-white shadow-md md:hidden">
          <ul className="flex flex-col items-center py-6 space-y-4">
            {navItem.map(({ id, text }) => (
              <li
                key={id}
                className="hover:scale-105 transition-transform duration-200 font-semibold text-xl cursor-pointer block"
              >
                 <Link to={text}
                  onClick={() => setMenu(!menu)}
                smooth={true}
                duration={500}
                offset={-70}
                activeClass="active"
               >{text}</Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Navbar;
