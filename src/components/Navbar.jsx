import React from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { LiaCalendarSolid } from "react-icons/lia";
import { RiQuestionnaireLine } from "react-icons/ri";
import { VscBellDot } from "react-icons/vsc";
import { GiCharacter } from "react-icons/gi";
import { IoIosArrowDown } from "react-icons/io";


const Navbar = () => {
    return (

        <div className="pt-2 pl-32 flex shadow-[0_1px_0px_0px_rgba(0,0,0,0.3)] w-full h-16">
            <div className="bg-gray-100 p-4 h-10 w-[200px] sm:w-[400px] lg:w-[320px] rounded-lg items-center flex">
                <AiOutlineSearch size={20} />
                <input className="bg-transparent p-2 w-[200px] sm:w-[400px] lg:w-[320px] focus:outline-none"
                    type="text" placeholder="Search for anything..." />
            </div>
            <div className=" ml-72 flex ">
                <button className="opacity-60"><LiaCalendarSolid size={25} /></button>
                <button className="opacity-60 pl-8"><RiQuestionnaireLine size={25} /></button>
                <button className="opacity-60 pl-8"><VscBellDot size={25} /></button>
                <div className="flex ml-20 ">
                    <div className="">
                        <h3 className="text-lg m-0 p-0 font-semibold font-sans opacity-90">A R Sai Tejas</h3>
                        <p className="text-sm m-0 p-0 opacity-60 font-medium relative -top-2 ">Admin</p>
                    </div>
                    <div className="m-3">
                        <button className=" opacity-75 pl-1"><GiCharacter size={25} /></button>
                        <button className="opacity-60 " ><IoIosArrowDown size={25} /></button>
                    </div>
                </div>

            </div>
        </div>



    );
};

export default Navbar;