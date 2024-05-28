import React from "react";
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import { PiHandWavingThin } from "react-icons/pi";
import { PiStudent } from "react-icons/pi";
import { GiTeacher } from "react-icons/gi";
import { PiGitBranchFill } from "react-icons/pi";
import { LiaCalendarSolid } from "react-icons/lia";
import { BsBuildingAdd } from "react-icons/bs";
import { MdAddCircleOutline } from "react-icons/md";
import { TbReportSearch } from "react-icons/tb";
import { GoDotFill } from "react-icons/go";
import { FaBuildingColumns } from "react-icons/fa6";
import { BsThreeDotsVertical } from "react-icons/bs";
import { IoIosArrowDropright } from "react-icons/io";
import { useNavigate } from "react-router-dom";

const Landingpage = () => {
    const navigate = useNavigate()
    return (
        <div>
            <div className='flex'>
                <Sidebar />
                <Navbar />
            </div>
            <div>
                <div className="flex pl-32 p-4">
                    <span className="pl-36 ">
                        <PiHandWavingThin size={40} />
                    </span>
                    <h6 className="font-light text-2xl pl-1">Hello,</h6>
                    <h6 className="font-bold text-2xl pl-1">Sai Tejas</h6>
                </div>
                <div className="flex pl-64 ml-5">
                    <div className="w-48 h-16 shadow-[0_0px_10px_5px_rgba(0,0,0,0.2)] rounded-2xl">
                        <div className="m-4 flex">
                            <PiStudent size={50} />
                            <h3 className="size-10 absolute ml-20 text-lg font-bold">450</h3>
                            <p className="ml-14 mt-6 absolute text-xs text-gray-600">Total Students</p>
                        </div>
                    </div>
                    <div className="w-48 h-16 shadow-[0_0px_10px_5px_rgba(0,0,0,0.2)] rounded-2xl ml-4">
                        <div className="m-4 flex">
                            <GiTeacher size={40} />
                            <h3 className="size-10 absolute ml-20 text-lg font-bold">50</h3>
                            <p className="ml-12 mt-6 absolute text-xs text-gray-600">Total Active Faculty</p>
                        </div>
                    </div>
                    <div className="w-48 h-16 shadow-[0_0px_10px_5px_rgba(0,0,0,0.2)] rounded-2xl ml-4">
                        <div className="m-4 flex">
                            <PiGitBranchFill size={45} />
                            <h3 className="size-10 absolute ml-20 text-lg font-bold">10</h3>
                            <p className="ml-12 mt-6 absolute text-xs text-gray-600">Total Departments</p>
                        </div>
                    </div>
                    <div className="w-48 h-16 shadow-[0_0px_10px_5px_rgba(0,0,0,0.2)] rounded-2xl ml-4">
                        <div className="m-4 flex">
                            <LiaCalendarSolid size={45} />
                            <h3 className="size-10 absolute ml-20 text-lg font-bold">90</h3>
                            <p className="ml-12 mt-6 absolute text-xs text-gray-600">Holidays This year</p>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="flex pl-64 mt-5 ml-5">
                        <button className="w-48 h-12 border-2 border-gray-300 rounded-2xl " onClick={()=>{navigate("/Adddepartment")}}>
                            <div className="m-3 flex">
                                <BsBuildingAdd size={20} />
                                <p className="ml-8  absolute font-semibold ">Add Department</p>
                            </div>
                        </button>
                        <button className="w-48 h-12 border-2 border-gray-300 rounded-2xl ml-4" onClick={()=>{navigate("/Addfaculty")}}>
                            <div className="m-3 flex">
                                <GiTeacher size={20} />
                                <MdAddCircleOutline size={10} />
                                <p className="ml-8 font-semibold absolute">Add Faculty</p>
                            </div>
                        </button>
                        <button className="w-48 h-12 border-2 border-gray-300 rounded-2xl ml-4">
                            <div className="m-3 flex">
                                <PiStudent size={20} />
                                <MdAddCircleOutline size={10} />
                                <p className="ml-8 font-semibold absolute">Add Student</p>
                            </div>
                        </button>
                        <button className="w-48 h-12 border-2 border-gray-300 rounded-2xl ml-4">
                            <div className="m-3 flex">
                                <TbReportSearch size={20} />
                                <p className="ml-8 font-semibold absolute">View Reports</p>
                            </div>
                        </button>
                    </div>
                </div>
                <div className="flex pl-64 mt-5 ml-1 ">

                    <div className="w-fit h-fit border-gray-300 rounded-2xl ml-5 shadow-[0_0px_10px_5px_rgba(0,0,0,0.2)]">
                        <div className="m-3 flex min-w-96">
                            <p className="ml-2 text-2xl absolute font-bold ">Events</p>
                        </div>
                        <p className="ml-[95px] pl-1 text-xs">01 may 2024</p>
                        <div className="flex shadow-[0_1px_0px_0px_rgba(0,0,0,0.3)]">
                            <button className="ml-5 mt-2 font-semibold">Activities</button>
                            <button className="ml-5 mt-2 font-semibold">Reminders</button>
                        </div>
                        <div className="ml-4 mt-3 ">
                            <div className="mx-2 p-1 bg-sky-100 rounded-md">
                                <p className="text-xs text font-thin flex"> <GoDotFill size={16} />01:00 PM to 01:45 PM</p>
                                <h3 className="font-medium text-sm ml-1">NSS Roadshow</h3>
                                <p className="text-xs text font-light ml-1 flex">Venue: Auditorium</p>
                            </div>
                            <div className="mx-2 mt-2 p-1 bg-sky-100 rounded-md">
                                <p className="text-xs text font-thin flex"> <GoDotFill size={16} />01:00 PM to 01:45 PM</p>
                                <h3 className="font-medium text-sm ml-1">NSS Roadshow</h3>
                                <p className="text-xs text font-light ml-1 flex">Venue: Auditorium</p>
                            </div>
                            <div className="mx-2 my-2 p-1 bg-sky-100 rounded-md">
                                <p className="text-xs text font-thin flex"> <GoDotFill size={16} />01:00 PM to 01:45 PM</p>
                                <h3 className="font-medium text-sm ml-1">NSS Roadshow</h3>
                                <p className="text-xs text font-light ml-1 flex">Venue: Auditorium</p>
                            </div>
                        </div>
                    </div>


                    <div className="w-96 h-72 shadow-[0_0px_10px_5px_rgba(0,0,0,0.2)] border-gray-300 rounded-2xl ml-5 ">
                        <div className="m-3 flex">
                            <p className="ml-2 text-2xl absolute font-bold">Timetable</p>
                        </div>
                        <p className="ml-[135px] pl-1  text-xs">01 may 2024</p>
                        <div className="flex shadow-[0_1px_0px_0px_rgba(0,0,0,0.3)]">
                            <button className="ml-5 mt-2 font-semibold">Departments</button>
                        </div>
                        <div className="ml-4 mt-3 ">
                            <div className="mx-1 p-1 bg-sky-100 rounded-md">
                                <div className=" flex">
                                    <span><FaBuildingColumns size={16} /></span>
                                    <h3 className="font-medium text-sm ml-1">B.E (CSE)-1st Year</h3>
                                    <button className=" absolute right-52"> <BsThreeDotsVertical size={14} /></button>
                                </div>
                                <div className="flex space-x-5">
                                    <button className="w-24 h-10 border-2 border-blue-300 rounded-lg" >
                                        <p className="flex text-[7px]">
                                            <GoDotFill size={14} />
                                            <p className="mt-0.5 text-gray-600">09:00 AM to 09:45 AM </p>
                                        </p>
                                        <h3 className="text-[10px] -mt-1 ml-2 font-bold">Maths</h3>
                                        <p className="text-[8px] text-gray-600 ml-2">Venue: LH-301</p>
                                    </button>
                                    <button className="w-24 h-10 border-2 border-blue-300 rounded-lg" >
                                        <p className="flex text-[7px]">
                                            <GoDotFill size={14} />
                                            <p className="mt-0.5 text-gray-600">10:00 AM to 10:45 AM </p>
                                        </p>
                                        <h3 className="text-[10px] -mt-1 ml-2 font-bold">Python</h3>
                                        <p className="text-[8px] text-gray-600 ml-2">Venue: LH-301</p>
                                    </button>
                                    <button className="w-24 h-10 border-2 border-blue-300 rounded-lg" >
                                        <p className="flex text-[7px]">
                                            <GoDotFill size={14} />
                                            <p className="mt-0.5 text-gray-600">11:00 AM to 11:45 AM </p>
                                        </p>
                                        <h3 className="text-[10px] -mt-1 ml-2 font-bold">Java</h3>
                                        <p className="text-[8px] text-gray-600 ml-2">Venue: LH-301</p>
                                    </button>
                                    <button className="m-2">
                                        <IoIosArrowDropright />
                                    </button>
                                </div>

                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>

    );
};

export default Landingpage;