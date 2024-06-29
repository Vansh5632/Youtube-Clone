import React from "react";
import image from "../assets/youtube-svgrepo-com.svg";
import { RxHamburgerMenu } from "react-icons/rx";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center bg-[#212121] opacity-95 h-13 py-8 px-3 sticky">
      <div className="flex gap-8 items-center text-2xl text-white">
        <div className="h-13 w-15">
          <RxHamburgerMenu/>
        </div>
        <div className="h-10 w-14 flex">
          <img src={image} alt=""/>
          <span className="text-3xl mx-4 font-bold">YOUTUBE</span>
        </div>
        <div>
            
        </div>
      </div>
    </div>
  );
};

export default Navbar;
