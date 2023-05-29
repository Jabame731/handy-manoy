import React, { useState } from "react";

import { HiOutlineMenu, HiOutlineX } from "react-icons/hi";
import { MdDashboard } from "react-icons/md";
import { AiOutlineHome } from "react-icons/ai";
import { BsPerson } from "react-icons/bs";
import { CgProfile } from "react-icons/cg";
import { HiOutlineLogout } from "react-icons/hi";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const handleToggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <>
      {/* Sidebar Toggle Button */}
      <button
        className="fixed top-4 left-4 md:hidden bg-gray-800 text-white p-2 rounded-md"
        onClick={handleToggleSidebar}
      >
        {isCollapsed ? <HiOutlineMenu size={24} /> : <HiOutlineX size={24} />}
      </button>

      {/* Sidebar */}
      <aside
        className={`bg-gray-800 text-white h-screen w-60 flex-shrink-0 transition-all duration-300 ease-in-out ${
          isCollapsed ? "-ml-60" : "ml-0"
        }`}
      >
        <div className="py-6">
          {/* Logo */}
          <div className="flex items-center justify-center mb-8">
            <span className="text-white font-poppins font-normal xs:text-[20px] text-[15px] xs:leading-[26px] leading-[21px] text-gradient uppercase ml-3   block lg:hidden h-8 w-auto">
              HandyManoy.
            </span>
            <span className="text-white font-poppins font-normal xs:text-[20px] text-[15px] xs:leading-[26px] leading-[21px] text-gradient uppercase ml-3 hidden lg:block h-8 w-auto">
              HandyManoy.
            </span>
          </div>

          {/* Menu */}
          <nav>
            <ul>
              <li className="mb-2">
                <Link
                  to="/"
                  className="flex items-center px-4 py-2 text-gray-400 hover:bg-gray-700 rounded"
                >
                  <span className="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400">
                    <AiOutlineHome />
                  </span>
                  <span className="text-sm font-medium">HomePage</span>
                </Link>
              </li>
              <li className="mb-2">
                <Link
                  to="/admin"
                  className="flex items-center px-4 py-2 text-gray-400 hover:bg-gray-700 rounded"
                >
                  <span className="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400">
                    <MdDashboard />
                  </span>
                  <span className="text-sm font-medium">Dashboard</span>
                </Link>
              </li>
              <li className="mb-2">
                <Link
                  to="/users"
                  className="flex items-center px-4 py-2 text-gray-400 hover:bg-gray-700 rounded"
                >
                  <span className="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400">
                    <BsPerson />
                  </span>
                  <span className="text-sm font-medium">Customers</span>
                </Link>
              </li>
              <li className="mb-2">
                <Link
                  to="/profile"
                  className="flex items-center px-4 py-2 text-gray-400 hover:bg-gray-700 rounded"
                >
                  <span className="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400">
                    <CgProfile />
                  </span>
                  <span className="text-sm font-medium">Profile</span>
                </Link>
              </li>
              <li className="mb-2">
                <Link
                  to=""
                  className="flex items-center px-4 py-2 text-gray-400 hover:bg-gray-700 rounded"
                >
                  <span className="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400">
                    <HiOutlineLogout />
                  </span>
                  <span className="text-sm font-medium">Logout</span>
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
