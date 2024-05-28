import { useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { BiChevronsLeft } from "react-icons/bi";
import { RxDashboard } from "react-icons/rx";
import { MdStorage } from "react-icons/md";
import { BsStars } from "react-icons/bs";
import { PiStudent } from "react-icons/pi";
import { LiaCalendarSolid } from "react-icons/lia";
import { TbReportSearch } from "react-icons/tb";
import { IoSettingsOutline } from "react-icons/io5";
import { BiSupport } from "react-icons/bi";
import { CgProfile } from "react-icons/cg";
import { AiOutlineLogout } from "react-icons/ai";
import { useNavigate } from "react-router-dom";


const Sidebar = () => {
  const [showSidebar, setShowSidebar] = useState(false);
  const navigate = useNavigate()

  return (
    
      <div className="flex pt-2 w-40 shadow-[0_1px_0px_0px_rgba(0,0,0,0.3)] ">
      {showSidebar ? (
        <button
          className="flex text-4xl text-black items-center cursor-pointer fixed left-52 top-6 z-50"
          onClick={() => setShowSidebar(!showSidebar)}
        >      
          
          <div className="mt-2 text-gray-600">
            <BiChevronsLeft />
          </div>
          
        </button>
        
      ) : (
        <svg
          onClick={() => setShowSidebar(!showSidebar)}
          className=" flex cursor-pointer items-center "
          width={40}
          height={40}
        >
          <AiOutlineMenu size={30} />
        </svg>
        
      )}
      <h1 className="text-xl font-semibold flex">AMS</h1>
      <div
        className={`top-0 left-0 w-[20vw] bg-white  p-10 text-black fixed h-full z-40 shadow-2xl ease-in-out duration-300 ${
          showSidebar ? "translate-x-0 " : "-translate-x-full"
        }`}
      >
        <button className="text-xl font-extrabold text-black">AMS-Admin</button>
        <div className="mt-5 text-base font-semibold text-gray-600">
          <div className="p-2 flex space-x-1 hover:bg-sky-100 rounded-md">
          <button><RxDashboard /></button><button>Dashboard</button>
          </div>
          <div className="p-2 flex space-x-1 hover:bg-sky-100 rounded-md">
          <button onClick={()=>{navigate("/department")}}><MdStorage /></button><button onClick={()=>{navigate("/department")}}>Departments</button>
          </div>
          <div className="p-1.5 flex space-x-1 hover:bg-sky-100 rounded-md">
          <button onClick={()=>{navigate("/faculty")}}><BsStars /></button><button onClick={()=>{navigate("/faculty")}}>Faculty / Employees</button>
          </div>
          <div className="p-2 flex space-x-1 hover:bg-sky-100 rounded-md">
          <button><PiStudent /></button><button>Students</button>
          </div>
          <div className="p-2 flex space-x-1 hover:bg-sky-100 rounded-md">
          <button><LiaCalendarSolid /></button><button>Holiday Calender</button>
          </div>
          <div className="p-2 flex space-x-1 hover:bg-sky-100 rounded-md">
          <button><TbReportSearch /></button><button>Reports</button>
          </div>
          <div className="p-2 flex space-x-1 hover:bg-sky-100 rounded-md">
          <button><IoSettingsOutline /></button><button>Settings</button>
          </div>
          <div className="p-2 flex space-x-1 hover:bg-sky-100 rounded-md">
          <button><BiSupport /></button><button>Support</button>
          </div>
          <div className="p-2 flex space-x-1 hover:bg-sky-100 rounded-md">
          <button><CgProfile /></button><button>Profile</button>
          </div>
          <div className=" p-2 flex space-x-1 hover:bg-sky-100 rounded-md">
          <button><AiOutlineLogout /></button><button>Log Out</button>
          </div>
        </div>
        
      </div>
    </div>
  
  );
};

export default Sidebar;