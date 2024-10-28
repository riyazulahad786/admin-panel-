import { useState } from 'react';
import { FiMessageSquare, FiBell, FiUser } from 'react-icons/fi';
import { AiOutlineSearch } from 'react-icons/ai';

const Header = () => {
  const [isNotificationDropdownOpen, setIsNotificationDropdownOpen] = useState(false);
  const [isMessageDropdownOpen, setIsMessageDropdownOpen] = useState(false);

  const toggleNotificationDropdown = () => {
    setIsNotificationDropdownOpen(!isNotificationDropdownOpen);
    setIsMessageDropdownOpen(false); // Close message dropdown if it's open
  };

  const toggleMessageDropdown = () => {
    setIsMessageDropdownOpen(!isMessageDropdownOpen);
    setIsNotificationDropdownOpen(false); // Close notification dropdown if it's open
  };

  return (
    <header className="bg-white shadow-md p-4 flex justify-between items-center ">
      <h1 className="text-xl font-semibold">Dashboard</h1>

      <div className="flex items-center space-x-4">
        {/* Search input */}
        <div className="relative">
          <AiOutlineSearch className="absolute left-3 top-3 text-gray-400" />
          <input
            type="text"
            className="w-full pl-10 p-2 border rounded-full focus:outline-none focus:ring-1 focus:ring-blue-300"
            placeholder="Search..."
          />
        </div>

        {/* User profile with border */}
        <div className="relative flex justify-between items-center w-32 border rounded-full mx-5 mr-2 py-1">
          <FiUser className="w-8 h-8 text-gray-600 border-2 border-gray-400 rounded-full" />
          <span className="ml-2 mr-4">Riyaz</span>
        </div>

        {/* Message Icon */}
        <div className="relative flex items-center">
          <div
            className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-200 p-1 cursor-pointer"
            onClick={toggleMessageDropdown}
          >
            <FiMessageSquare className="w-6 h-6 text-gray-600" />
          </div>
          <span className="absolute top-[-4px] right-0 inline-flex items-center justify-center px-1 py-1 text-xs font-bold leading-none text-red-100 bg-red-600 rounded-full">
            2
          </span>

          {/* Message Dropdown */}
          {isMessageDropdownOpen && (
            <div className="absolute right-0 mt-5 notifications_message w-72 bg-white rounded-lg shadow-lg z-20">
              <div className="px-4 py-2 text-gray-700 font-semibold">Messages</div>
              <div className="divide-y divide-gray-100">
                {/* Message items */}
                <a href="#" className="flex px-4 py-3 hover:bg-gray-100">
                  <div className="flex-shrink-0">
                    <img
                      className="rounded-full w-11 h-11"
                      src="/profile-picture-1.jpg"
                      alt="Profile"
                    />
                  </div>
                  <div className="ml-3">
                    <p className="text-gray-500 text-sm">
                      New message from <span className="font-semibold">Jese</span>
                    </p>
                    <p className="text-xs text-blue-600">a few moments ago</p>
                  </div>
                </a>
                <a href="#" className="flex px-4 py-3 hover:bg-gray-100">
                  <div className="flex-shrink-0">
                    <img
                      className="rounded-full w-11 h-11"
                      src="/profile-picture-2.jpg"
                      alt="Profile"
                    />
                  </div>
                  <div className="ml-3">
                    <p className="text-gray-500 text-sm">
                      You received a message from <span className="font-semibold">Joseph</span>
                    </p>
                    <p className="text-xs text-blue-600">10 minutes ago</p>
                  </div>
                </a>
              </div>
            </div>
          )}
        </div>

        {/* Notification Icon */}
        <div className="relative flex items-center">
          <div
            className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-200 p-1 cursor-pointer"
            onClick={toggleNotificationDropdown}
          >
            <FiBell className="w-6 h-6 text-gray-600" />
          </div>
          <span className="absolute top-[-4px] right-0 inline-flex items-center justify-center px-1 py-1 text-xs font-bold leading-none text-red-100 bg-red-600 rounded-full">
            3
          </span>

          {/* Notification Dropdown */}
          {isNotificationDropdownOpen && (
            <div className="absolute right-0 mt-5 notifications_message w-72 bg-white rounded-lg shadow-lg z-20">
              <div className="px-4 py-2 text-gray-700 font-semibold">
                Notifications
              </div>
              <div className="p-4">
                <input
                  type="text"
                  className="w-full p-2 border rounded-full focus:outline-none focus:ring-1 focus:ring-blue-300"
                  placeholder="Search notifications..."
                />
              </div>
              <div className="divide-y divide-gray-100">
                {/* Notification items */}
                <a href="#" className="flex px-4 py-3 hover:bg-gray-100">
                  <div className="flex-shrink-0">
                    <img
                      className="rounded-full w-11 h-11"
                      src="/profile-picture-1.jpg"
                      alt="Profile"
                    />
                  </div>
                  <div className="ml-3">
                    <p className="text-gray-500 text-sm">
                      New notification from <span className="font-semibold">Jese</span>
                    </p>
                    <p className="text-xs text-blue-600">a few moments ago</p>
                  </div>
                </a>
                <a href="#" className="flex px-4 py-3 hover:bg-gray-100">
                  <div className="flex-shrink-0">
                    <img
                      className="rounded-full w-11 h-11"
                      src="/profile-picture-2.jpg"
                      alt="Profile"
                    />
                  </div>
                  <div className="ml-3">
                    <p className="text-gray-500 text-sm">
                      <span className="font-semibold">Joseph</span> started following you.
                    </p>
                    <p className="text-xs text-blue-600">10 minutes ago</p>
                  </div>
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
