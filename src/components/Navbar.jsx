import React, { useState } from "react";
import image from "../assets/youtube-svgrepo-com.svg";
import { RxHamburgerMenu } from "react-icons/rx";
import { AiOutlineSearch } from "react-icons/ai";
import { MdOutlineVideoCall } from "react-icons/md";
import { CiBellOn } from "react-icons/ci";
import profile from '../assets/profile.png'
import Sidebar from "./Sidebar";

const Navbar = () => {
    const [visbleComponent,setVisibleComponent] = useState(null);
    return (
        <div className="flex justify-between items-center bg-[#212121] opacity-95 h-16 px-3 sticky">
            <div className="flex gap-8 items-center text-2xl text-white">
                <div className="h-13 w-15">
                    <RxHamburgerMenu className="text-white" onClick={()=> setVisibleComponent('A')}/>
                        {visbleComponent === 'A' && <Sidebar/>}
                </div>
                <div className="h-10 w-14 flex">
                    <img src={image} alt=""/>
                    <span className="text-3xl mx-4 font-bold">YOUTUBE</span>
                </div>
            </div>
            <div className="flex items-center justify-center flex-grow">
                <form>
                    <div className="flex items-center justify-center">
                        <div className="flex gap-5 items-center pr-5 h-5">
                            <input type="text" placeholder="Search" className="bg-transparent border-stone-600 border-2 h-10 text-[30px] rounded-[15px] p-4" />
                        </div>
                        <button>
                            <AiOutlineSearch className="text-[30px] text-white flex items-center" />
                        </button>
                    </div>
                </form>
            </div>
            <div className="ml-3">
                <MdOutlineVideoCall className="text-white text-[30px]"  />
            </div>
            <div className="ml-3">
                <CiBellOn className="text-white text-[30px]"/>
            </div>
            <div className="w-8 h-8 ml-3">
                <img src={profile} alt="" />
            </div>
        </div>
    );
};

export default Navbar;
