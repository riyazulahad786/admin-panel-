import {useState} from 'react'
import {
    FiHome,
    FiSettings,
    FiUser,
    FiMessageSquare,
  } from "react-icons/fi";
  import { RiAdminLine } from "react-icons/ri";
  import { IoIosHelpCircleOutline } from "react-icons/io";
  import { TbTransactionDollar } from "react-icons/tb";
  import { FaHistory } from "react-icons/fa";
  import { IoCallOutline } from "react-icons/io5";
  import { FaUsersCog } from "react-icons/fa";
  import { MdAssuredWorkload } from "react-icons/md";
function Sidebar() {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const toggleSidebar = () => {
      setIsSidebarOpen(!isSidebarOpen);
    };
  return (
    <div>
          <div
        className={`transition-all duration-300 bg-gray-100 text-black ${
          isSidebarOpen ? "w-64" : "w-16"
        }  overflow-y-auto custom-scrollbar min-h-full`}
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
          <li className="p-4 hover:bg-gray-200 flex items-center">
            <FiHome className="w-6 h-6" />
            <span
              className={`ml-4 ${isSidebarOpen ? "inline-block" : "hidden"}`}
            >
              Home
            </span>
          </li>
          <li className="p-4 hover:bg-gray-200 flex items-center">
            <FiUser className="w-6 h-6" />
            <span
              className={`ml-4 ${isSidebarOpen ? "inline-block" : "hidden"}`}
            >
              Profile
            </span>
          </li>
          <li className="p-4 hover:bg-gray-200 flex items-center">
            <FiSettings className="w-6 h-6" />
            <span
              className={`ml-4 ${isSidebarOpen ? "inline-block" : "hidden"}`}
            >
              Settings
            </span>
          </li>
          <li className="p-4 hover:bg-gray-200 flex items-center">
            <FiMessageSquare className="w-6 h-6" />
            <span
              className={`ml-4 ${isSidebarOpen ? "inline-block" : "hidden"}`}
            >
              Messages
            </span>
          </li>
          <li className="p-4 hover:bg-gray-200 flex items-center">
            <RiAdminLine className="w-6 h-6" />
            <span
              className={`ml-4 ${isSidebarOpen ? "inline-block" : "hidden"}`}
            >
              Admin
            </span>
          </li>

          <li className="p-4 hover:bg-gray-200 flex items-center">
            <IoIosHelpCircleOutline className="w-6 h-6" />
            <span
              className={`ml-4 ${isSidebarOpen ? "inline-block" : "hidden"}`}
            >
              Help
            </span>
          </li>
          <li className="p-4 hover:bg-gray-200 flex items-center">
            <TbTransactionDollar className="w-6 h-6" />
            <span
              className={`ml-4 ${isSidebarOpen ? "inline-block" : "hidden"}`}
            >
              Transactions
            </span>
          </li>
          <li className="p-4 hover:bg-gray-200 flex items-center">
            <FaHistory className="w-6 h-6" />
            <span
              className={`ml-4 ${isSidebarOpen ? "inline-block" : "hidden"}`}
            >
              History
            </span>
          </li>
          <li className="p-4 hover:bg-gray-200 flex items-center">
            <IoCallOutline className="w-6 h-6" />
            <span
              className={`ml-4 ${isSidebarOpen ? "inline-block" : "hidden"}`}
            >
              Call
            </span>
          </li>
          <li className="p-4 hover:bg-gray-200 flex items-center">
            <FaUsersCog className="w-6 h-6" />
            <span
              className={`ml-4 ${isSidebarOpen ? "inline-block" : "hidden"}`}
            >
              Members
            </span>
          </li>
          <li className="p-4 hover:bg-gray-200 flex items-center">
            <MdAssuredWorkload className="w-6 h-6" />
            <span
              className={`ml-4 ${isSidebarOpen ? "inline-block" : "hidden"}`}
            >
              Work Load
            </span>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Sidebar