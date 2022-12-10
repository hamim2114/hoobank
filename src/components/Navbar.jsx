import React, { useState } from "react";
import { close, logo, menu } from "../assets";
import { navLinks } from "../constants/index";
import 'animate.css';

export const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <nav className="w-full flex py-6 justify-between items-center navbar">
      <img src={logo} alt="hoobank" className="w-[124px] h-[32px] animate__animated animate__fadeInBottomLeft" />
      {/* DEXTOP VIEW */}
      <ul className="list-none sm:flex hidden justify-end items-center flex-1">
        {navLinks.map((nav, index) => (
          <li
            className={`font-poppins font-normal text-[16px] 
          ml-10 text-white`}
            key={nav.id}
          >
            <a href={`nav.id`}>{nav.title}</a>
          </li>
        ))}
      </ul>
      {/* MOBILE VIEW */}
      <div className="sm:hidden flex flex-1 justify-end items-center z-10">
        <img
          className="w-[28px] h-[28px] object-contain"
          onClick={() => setToggle((prev) => !prev)}
          src={toggle ? close : menu}
          alt=""
        />
        <div className={`${toggle? 'flex' : 'hidden'} p-6 bg-black-gradient
        absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl 
        animate__animated animate__fadeInTopRight animate__faster`}>
          <ul className="justify-end items-center flex-1">
            {navLinks.map((nav, index) => (
              <li
                className={`font-poppins font-normal text-[16px] 
          mb-4 text-white`}
                key={nav.id}
              >
                <a href={`nav.id`}>{nav.title}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};
