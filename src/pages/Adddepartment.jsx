import React from "react";
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import { IoIosArrowForward } from "react-icons/io";
import { AiOutlineSearch } from "react-icons/ai";
import { IoIosArrowDown } from "react-icons/io";
import { GoDot } from "react-icons/go";
import { LiaEdit } from "react-icons/lia";
import { RiDeleteBinLine } from "react-icons/ri";




const Adddepartment = () => {
    return (
        <div >
            <div className='flex'>
                <Sidebar />
                <Navbar />
            </div>
            <div>
                <div className="flex w-screen py-5 text-gray-600 p-1">
                <div className=" pl-72 flex w-1/2 font-bold text-sm" >

                    <button className="flex">Dashboard </button>
                    <p className="flex"><IoIosArrowForward size={20} /></p>
                    <button className="flex">Department</button>
                    <p ><IoIosArrowForward size={20} /></p>
                    <button className="flex">Add Department</button>
                </div>
                <div className="flex w-1/2 justify-end text-xs pr-20 font-medium">
                    <button className="p-1 border border-gray-900 rounded-md mr-3 border-opacity-80">import from excel file</button>
                    <button className="p-1 border border-gray-900 rounded-md border-opacity-80">import from excel file</button>
                </div>
            </div>
            <div className="flex w-screen p-1">
                <div className=" pl-72 flex w-1/2 font-bold text-2xl" >
                    <h1>Add Department</h1>
                </div>
                <div className="flex w-1/2 justify-end text-xs pr-20 font-medium">
                    <div className="bg-gray-100 p-4 h-5 mr-16 rounded-lg items-center border border-gray-900 border-opacity-60  text-gray-600 opacity-60 flex">
                        <AiOutlineSearch size={20} />
                        <input className="bg-transparent focus:outline-none "
                            type="text" placeholder="Search for anything..." />
                    </div>
                    <div className=" w-fit border p-4 h-5 mr-5 border-gray-900 rounded-md border-opacity-60 items-center flex">
                        <p className="text-gray-600 opacity-60">Sort by: </p>
                        <button className="font-bold opacity-85 text-black flex pr-2">Newest</button>
                        <button className="opacity-85"><IoIosArrowDown size={16} /></button>
                    </div>
                </div>
            </div>
            <p className="pl-72  text-gray-500 text-xs font-medium m-1">Add new department here</p>

            {/* department name */}
            <div className="pl-72 w-fit flex p-5 items-center m-1">
                <p className="text-gray-500 text-sm font-medium">Department Name</p>
                <div className="bg-gray-100 p-4 h-5 ml-2 rounded-lg items-center border border-gray-900 border-opacity-50  text-gray-600 opacity-60 flex">
                    <input className="bg-transparent focus:outline-none opacity-70"
                        type="text" placeholder="Enter Department Name" />
                </div>
                <p className="text-gray-500 text-sm font-medium ml-5">Head of Department</p>
                <div className="bg-gray-100 p-4 h-5 ml-2 rounded-lg items-center border border-gray-900 border-opacity-50  text-gray-600 opacity-60 flex ">
                    <input className="bg-transparent focus:outline-none opacity-70 text-xs"
                        type="text" placeholder="Choose Employee" />
                    <button className="opacity-85"><IoIosArrowDown size={16} /></button>
                </div>
                <button className="border font-semibold opacity-85 text-black ml-8 rounded-md border-opacity-60 border-gray-900 p-1 px-2 hover:bg-sky-100">Add</button>
                <button className="border font-semibold opacity-85 text-black ml-3 rounded-md border-opacity-60 border-gray-900 p-1 px-3 hover:bg-sky-100">Cancle</button>
            </div>
            <div className="pl-72 flex text-xs">
                <button className=" flex items-center border font-semibold opacity-75 text-black rounded-md border-opacity-60 border-gray-900 p-1 m-1 hover:bg-sky-100">Bulk Action<IoIosArrowDown size={16} /></button>
                <button className="border font-semibold opacity-75 text-black ml-3 rounded-md border-opacity-60 border-gray-900 p-1 hover:bg-sky-100">Apply</button>
            </div>
            <div className="pl-72 m-1 p-2 w-11/12">
                <table class="w-full text-left">
                    <thead>
                        <tr className="border border-l-0 border-r-0 border-t-0">
                            <th className="text-md p-2 font-bold flex items-center"><GoDot />Department</th>
                            <th className="text-md p-2 font-bold">Head of Department</th>
                            <th className="text-md p-2 font-bold">No. of Employees</th>
                            <th className="text-md p-2 font-bold">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="border border-l-0 border-r-0 border-t-0">
                            <td className="text-md p-2 flex items-center"> <GoDot /> B.E. -CSE</td>
                            <td className="text-md p-2 text-green-600">Dr. John Doe</td>
                            <td className="text-md p-2">20</td>
                            <td className="text-md p-2 flex"><LiaEdit /><RiDeleteBinLine /></td>

                        </tr>
                        <tr className="border border-l-0 border-r-0 border-t-0">
                            <td className="text-md p-2 flex items-center"><GoDot />B.E. -ISE</td>
                            <td className="text-md p-2 text-green-600">Dr. Doe John</td>
                            <td className="text-md p-2">18</td>
                            <td className="text-md p-2 flex"><LiaEdit /><RiDeleteBinLine /></td>

                        </tr>
                        <tr className="border border-l-0 border-r-0 border-t-0">
                            <td className="text-md p-2 flex items-center"><GoDot />B.E. -EEE</td>
                            <td className="text-md p-2 text-green-600">Dr. Nhoj Eod</td>
                            <td className="text-md p-2">17</td>
                            <td className="text-md p-2 flex"><LiaEdit /><RiDeleteBinLine /></td>

                        </tr>
                        <tr className="border border-l-0 border-r-0 border-t-0">
                            <td className="text-md p-2 flex items-center"><GoDot />B.E. -Mtech</td>
                            <td className="text-md p-2 text-green-600">Dr. Blablu</td>
                            <td className="text-md p-2">5</td>
                            <td className="text-md p-2 flex"><LiaEdit /><RiDeleteBinLine /></td>
                        </tr>
                        <tr className="border border-l-0 border-r-0 border-t-0">
                            <td className="text-md p-2 flex items-center"><GoDot />MCA</td>
                            <td className="text-md p-2 text-green-600">Dr. Carlos Sainz</td>
                            <td className="text-md p-2">6</td>
                            <td className="text-md p-2 flex"><LiaEdit /><RiDeleteBinLine /></td>
                        </tr>
                        <tr className="border border-l-0 border-r-0 border-t-0">
                            <td className="text-md p-2 flex items-center"><GoDot />MBA</td>
                            <td className="text-md p-2 text-green-600">Dr. Max Verstappen</td>
                            <td className="text-md p-2">10</td>
                            <td className="text-md p-2 flex"><LiaEdit /><RiDeleteBinLine /></td>
                        </tr>
                    </tbody>
                </table>
            </div>
            </div>
        </div>
    );
};

export default Adddepartment;