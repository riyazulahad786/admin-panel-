import { useState } from "react";
import {
  FiHome,
  FiSettings,
  FiUser,
  FiMessageSquare,
  FiBell,
} from "react-icons/fi";
import { AiOutlineSearch } from "react-icons/ai";
import { RiAdminLine } from "react-icons/ri";
import { IoIosHelpCircleOutline } from "react-icons/io";
import { TbTransactionDollar } from "react-icons/tb";
import { FaHistory } from "react-icons/fa";
import { IoCallOutline } from "react-icons/io5";
import { FaUsersCog } from "react-icons/fa";
import { MdAssuredWorkload } from "react-icons/md";
import Chart from "./Chart";
import LoinsAdvisor from "./LoinsAdvisor";
import Messages from "./Messages";
import Revenue from "./Revenue";
import Report from "./Report";
import Tooltip from "./ToolTip";
import Header from "./Header";

export default function DashboardLayouts() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
  const sidebarItems = [
    { icon: <FiHome className="w-6 h-6" />, label: "Home" },
    { icon: <FiUser className="w-6 h-6" />, label: "Profile" },
    { icon: <FiSettings className="w-6 h-6" />, label: "Settings" },
    { icon: <FiMessageSquare className="w-6 h-6" />, label: "Messages" },
    { icon: <RiAdminLine className="w-6 h-6" />, label: "Admin" },
    { icon: <IoIosHelpCircleOutline className="w-6 h-6" />, label: "Help" },
    { icon: <TbTransactionDollar className="w-6 h-6" />, label: "Transactions" },
    { icon: <FaHistory className="w-6 h-6" />, label: "History" },
    { icon: <IoCallOutline className="w-6 h-6" />, label: "Call" },
    { icon: <FaUsersCog className="w-6 h-6" />, label: "Members" },
    { icon: <MdAssuredWorkload className="w-6 h-6" />, label: "Work Load" },
    { icon: <IoCallOutline className="w-6 h-6" />, label: "Call" },
    { icon: <FaUsersCog className="w-6 h-6" />, label: "Members" },
  ];
  const [activeItem, setActiveItem] = useState("Home");
  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <div
      className={`transition-all duration-300 bg-gray-100 text-black ${
        isSidebarOpen ? "w-64" : "w-16"
      } overflow-y-auto custom-scrollbar min-h-full`}
    >
      {/* Sidebar menu */}
      <button onClick={toggleSidebar} className="p-4 focus:outline-none">
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h16m-7 6h7"
          ></path>
        </svg>
      </button>

      {/* Sidebar items */}
      <ul className="mt-4">
        {sidebarItems.map((item, index) => (
          <li
            key={index}
            className={`p-1 m-3 flex items-center cursor-pointer hover:bg-gray-200 
              ${activeItem === item.label ? "bg-gray-300" : ""} 
              ${isSidebarOpen ? "" : "rounded-full"} 
              ${!isSidebarOpen ? "border border-gray-300" : ""}
            `}
            onClick={() => setActiveItem(item.label)} 
          >
            <Tooltip title={item.label}>
              {item.icon}
            </Tooltip>
            <span className={`ml-4 ${isSidebarOpen ? "inline-block" : "hidden"}`}>
              {item.label}
            </span>
          </li>
        ))}
      </ul>
    </div>

      {/* Main content */}
      <div className="flex-1 bg-gray-100 overflow-y-auto">
        {/* Header */}
    <Header/>


        {/* Main content section */}
        <div className="p-6">
          <h1 className="text-2xl border-l-4 border-red-500 pl-3 mb-6">
            Overview
          </h1>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            <div className="bg-white shadow-md p-4 rounded-lg">
              <h1 className="text-xl  bg-blue-500 px-1 py-2 my-2 font-semibold">
                Registration
              </h1>
              <p>Sellers : #</p>
              <p>Buyers : #</p>
              <p>Subscription : #</p>
              <p>Total week : # </p>
              <p>Total Month : #</p>
              <p className="bg-blue-500 px-1 py-2  mt-4">
                Date : 16th October 2024
              </p>
            </div>
            <div className="bg-white shadow-md p-4 rounded-lg">
              <h1 className="text-xl  bg-blue-500 px-1 py-2 my-2 font-semibold">
                Messages
              </h1>
              <p>Sellers : #</p>
              <p>Buyers : #</p>
              <p>Subscription : #</p>
              <p>Total week : # </p>
              <p>Total Month : #</p>
              <p className="bg-blue-500 px-1 py-2  mt-4">
                Date : 16th October 2024
              </p>
            </div>

            <div className="bg-white shadow-md p-4 rounded-lg ">
              <h1 className="text-xl bg-blue-500 px-1 py-2 my-2 font-semibold">
                Sales Income
              </h1>
              <p>Sellers : #</p>
              <p>Buyers : #</p>
              <p>Subscription : #</p>
              <p>Total week : # </p>
              <p>Total Month : #</p>
              <p className="bg-blue-500 px-1 py-2  mt-4">
                Date : 16th October 2024
              </p>
            </div>
            <div className="bg-white shadow-md p-4 rounded-lg">
              <h1 className="text-xl  bg-blue-500 px-1 py-2 my-2 font-semibold">
                Sales Progress
              </h1>
              <p>Sellers : #</p>
              <p>Buyers : #</p>
              <p>Subscription : #</p>
              <p>Total week : # </p>
              <p>Total Month : #</p>
              <p className="bg-blue-500 px-1 py-2  mt-4">
                Date : 16th October 2024
              </p>
            </div>
          </div>

          <Chart />

          <LoinsAdvisor />

          <Messages />

          <Revenue />

          <Report />
        </div>
      </div>
    </div>
  );
}
