import React from "react";
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import { IoIosArrowForward } from "react-icons/io";

const Addfaculty = () => {
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
                        <p ><IoIosArrowForward size={20} /></p>
                        <button className="flex">Add Faculty</button>
                    </div>
                    <div className="flex w-1/2 justify-end text-xs pr-20 font-medium">
                        <button className="p-1 border border-gray-900 rounded-md mr-3 border-opacity-80">import from excel file</button>
                        <button className="p-1 border border-gray-900 rounded-md border-opacity-80">import from excel file</button>
                    </div>
                </div>
                <div className="flex w-screen p-1">
                    <div className=" pl-72 flex w-1/2 font-bold text-2xl" >
                        <h1>Add Faculty</h1>
                    </div>
                </div>
                <p className="pl-72  text-gray-500 text-xs font-medium m-1">Add new faculty here</p>
            </div>
            <div className="pl-72 mt-6 m-1">
                <form class="w-full max-w-sm">
                    <div class="md:flex md:items-center mb-6">    
                            <label class="pr-4 text-sm font-medium w-1/4">
                                Name
                            </label>
                        <div class="md:w-1/2">
                            <input class="bg-gray-100 ml-4 rounded-lg items-center border border-gray-900 border-opacity-50  text-gray-600 opacity-60 w-full py-1 px-2 bg-transparent focus:outline-none text-sm" id="inline-full-name" type="text" placeholder="Enter name" />
                        </div>
                    </div>
                    <div class="md:flex md:items-center mb-6">    
                            <label class="pr-4 text-sm font-medium w-1/4">
                                Email
                            </label>
                        <div class="md:w-1/2">
                            <input class="bg-gray-100 ml-4 rounded-lg items-center border border-gray-900 border-opacity-50  text-gray-600 opacity-60 w-full py-1 px-2 bg-transparent focus:outline-none text-sm" id="inline-full-name" type="text" placeholder="Enter Email" />
                        </div>
                    </div>
                    <div class="md:flex md:items-center mb-6">    
                            <label class="pr-4 text-sm font-medium w-1/4">
                                Phone No.
                            </label>
                        <div class="md:w-1/2">
                            <input class="bg-gray-100 ml-4 rounded-lg items-center border border-gray-900 border-opacity-50  text-gray-600 opacity-60 w-full py-1 px-2 bg-transparent focus:outline-none text-sm" id="inline-full-name" type="text" placeholder="Enter Phone no." />
                        </div>
                    </div>
                    <div class="md:flex md:items-center mb-6">    
                            <label class="pr-4 text-sm font-medium w-1/4">
                                Department
                            </label>
                        <div class="md:w-1/2">
                            <input class="bg-gray-100 ml-4 rounded-lg items-center border border-gray-900 border-opacity-50  text-gray-600 opacity-60 w-full py-1 px-2 bg-transparent focus:outline-none text-sm" id="inline-full-name" type="text" placeholder="Choose Department" />
                        </div>
                    </div>
                    <div class="md:flex md:items-center mb-6">    
                            <label class="pr-4 text-sm font-medium w-1/4">
                                Status
                            </label>
                        <div class="md:w-1/2">
                            <input class="bg-gray-100 ml-4 rounded-lg items-center border border-gray-900 border-opacity-50  text-gray-600 opacity-60 w-full py-1 px-2 bg-transparent focus:outline-none text-sm" id="inline-full-name" type="text" placeholder="Set Status" />
                        </div>
                    </div>
                    <div class="md:flex md:items-center mb-6">
                            <label class="pr-4 text-sm font-medium w-1/4">
                                Password
                            </label>
                        <div class="md:w-1/2">
                            <input class="bg-gray-100 ml-4 rounded-lg items-center border border-gray-900 border-opacity-50  text-gray-600 opacity-60 w-full py-1 px-2 bg-transparent focus:outline-none text-sm" type="password" placeholder="Enter Password" />
                        </div>
                    </div>
                </form>
            </div>
            <div className="pl-72">
            <button className="border font-semibold opacity-85 text-black m-1 rounded-md border-opacity-60 border-gray-900 p-1 px-2 hover:bg-sky-100 text-sm">Add</button>
                <button className="border font-semibold opacity-85 text-black ml-3 rounded-md border-opacity-60 border-gray-900 p-1 px-3 hover:bg-sky-100 text-sm">Cancle</button>
            </div>

        </div>
    );
};

export default Addfaculty;