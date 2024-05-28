import React from "react";
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import { IoIosArrowForward } from "react-icons/io";
import { AiOutlineSearch } from "react-icons/ai";
import { IoIosArrowDown } from "react-icons/io";
import { GoDot } from "react-icons/go";
import { LiaEdit } from "react-icons/lia";
import { RiDeleteBinLine } from "react-icons/ri";






const Faculty = () => {
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
                    <button className="flex">Faculty</button>
                </div>
                <div className="flex w-1/2 justify-end text-xs pr-32 font-medium">
                    <button className="p-1.5 text-xs border border-gray-900 rounded-md mr-3 border-opacity-80">import from excel file</button>
                    <button className="p-1.5 text-xs border border-gray-900 rounded-md mr-3 border-opacity-80">import from excel file</button>
                    <button className="p-1.5 text-xs border bg-sky-100 border-sky-400 rounded-md border-opacity-80">Add Faculty</button>
                </div>
            </div>
            <div className="flex w-screen p-1">
                <div className=" pl-72 flex w-1/2 font-bold text-2xl" >
                    <h1>Faculty</h1>
                </div>
                <div className="flex w-1/2 justify-end text-xs pr-20 font-medium">
                    <div className="bg-gray-100 p-4 h-5 mr-8 rounded-lg items-center border border-gray-900 border-opacity-60  text-gray-600 opacity-60 flex">
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
            <p className="pl-72  text-gray-500 text-xs font-medium m-1">Faculty Information</p>
            <div className="pl-72 flex text-xs p-2">
                <button className=" flex items-center border font-semibold opacity-75 text-black rounded-md border-opacity-60 border-gray-900 p-1 m-1 hover:bg-sky-100">Bulk Action<IoIosArrowDown size={16} /></button>
                <button className="border font-semibold opacity-75 text-black ml-3 rounded-md border-opacity-60 border-gray-900 p-1 hover:bg-sky-100">Apply</button>
            </div>
            <div className="pl-72 m-1 p-2 w-11/12">
                <table class="w-full text-left">
                    <thead>
                        <tr className="border border-l-0 border-r-0 border-t-0">
                            <th className="text-md p-2 font-bold flex items-center"><GoDot />ID</th>
                            <th className="text-md p-2 font-bold">Name</th>
                            <th className="text-md p-2 font-bold">Department</th>
                            <th className="text-md p-2 font-bold">Subject</th>
                            <th className="text-md p-2 font-bold">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="border border-l-0 border-r-0 border-t-0 ">
                            <td className="text-md p-2 flex items-center"><GoDot />001</td>
                            <td className="text-md p-2 text-green-600 ">Dr. John Doe</td>
                            <td className="text-md p-2 text-green-600"> B.E. -CSE</td>
                            <td className="text-md p-2 font-medium">Mathematics</td>
                            <td className="text-md p-2 flex"><LiaEdit /><RiDeleteBinLine /></td>

                        </tr>
                        <tr className="border border-l-0 border-r-0 border-t-0">
                            <td className="text-md p-2 flex items-center"><GoDot />002</td>
                            <td className="text-md p-2 text-green-600">Dr. John Doe</td>
                            <td className="text-md p-2 text-green-600"> B.E. -CSE</td>
                            <td className="text-md p-2 font-medium">Mathematics</td>
                            <td className="text-md p-2 flex"><LiaEdit /><RiDeleteBinLine /></td>

                        </tr>
                        <tr className="border border-l-0 border-r-0 border-t-0">
                            <td className="text-md p-2 flex items-center"><GoDot />003</td>
                            <td className="text-md p-2 text-green-600">Dr. John Doe</td>
                            <td className="text-md p-2 text-green-600"> B.E. -CSE</td>
                            <td className="text-md p-2 font-medium">Mathematics</td>
                            <td className="text-md p-2 flex"><LiaEdit /><RiDeleteBinLine /></td>

                        </tr>
                        <tr className="border border-l-0 border-r-0 border-t-0">
                            <td className="text-md p-2 flex items-center"><GoDot />004</td>
                            <td className="text-md p-2 text-green-600">Dr. John Doe</td>
                            <td className="text-md p-2 text-green-600"> B.E. -CSE</td>
                            <td className="text-md p-2 font-medium">Mathematics</td>
                            <td className="text-md p-2 flex"><LiaEdit /><RiDeleteBinLine /></td>

                        </tr>
                        <tr className="border border-l-0 border-r-0 border-t-0">
                            <td className="text-md p-2  flex items-center"><GoDot />005</td>
                            <td className="text-md p-2  text-green-600">Dr. John Doe</td>
                            <td className="text-md p-2  text-green-600"> B.E. -CSE</td>
                            <td className="text-md p-2  font-medium">Mathematics</td>
                            <td className="text-md p-2  flex"><LiaEdit /><RiDeleteBinLine /></td>

                        </tr>
                        <tr className="border border-l-0 border-r-0 border-t-0">
                            <td className="text-md p-2 flex items-center"><GoDot />006</td>
                            <td className="text-md p-2 text-green-600">Dr. John Doe</td>
                            <td className="text-md p-2 text-green-600"> B.E. -CSE</td>
                            <td className="text-md p-2 font-medium">Mathematics</td>
                            <td className="text-md p-2 flex"><LiaEdit /><RiDeleteBinLine /></td>

                        </tr>
                    </tbody>
                </table>
            </div>
            </div>
            <div className="pl-72  text-sm font-medium p-6 flex items-center">
                <p className="opacity-50">showing data 1 to 8 of 256k entries</p>
                <div className="justify-end flex w-1/2 opacity-90">
                <button className="justify-center flex ml-2 text-xs items-center bg-gray-300 rounded-sm size-5">&lt;</button>
                <button className="justify-center flex ml-2 text-xs items-center bg-blue-500 rounded-sm size-5">1</button>
                <button className="justify-center flex ml-2 text-xs items-center bg-gray-300 rounded-sm size-5">2</button>
                <button className="justify-center flex ml-2 text-xs items-center bg-gray-300 rounded-sm size-5">3</button>
                <button className="justify-center flex ml-2 text-xs items-center bg-gray-300 rounded-sm size-5">4</button>
                <p className="pl-2">...</p>
                <button className="justify-center flex ml-2 text-xs items-center bg-gray-300 rounded-sm size-5">40</button>
                <button className="justify-center flex ml-2 text-xs items-center bg-gray-300 rounded-sm size-5">&gt;</button>
                </div>
                
            </div>
        </div>
    );
};

export default Faculty;