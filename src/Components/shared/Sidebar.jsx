/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import {
  RiHome4Fill,
  RiPercentLine,
  RiPieChartLine,
  RiNotification2Line,
  RiSettings5Line,
  RiLogoutBoxLine,
} from "react-icons/ri";
const Sidebar = (props) => {
  const { showMenu } = props;

  return (
    <div
      className={`bg-[#1F1D2B] fixed lg:left-0 top-0 py-6 w-28  h-full flex flex-col justify-between rounded-tr-xl rounded-br-xl z-50 transition-all ${
        showMenu ? "left-0" : "-left-full "
      }`}
    >
      <div>
        <ul className=" pl-4">
          <li>
            <h1 className="text-2xl text-gray-300 uppercase font-bold text-center my-5">
              Logo
            </h1>
          </li>
          <li className=" bg-[#262837] p-4 rounded-tl-xl rounded-bl-xl ">
            <a
              className="bg-[#ec7c6a]  rounded-xl text-center flex justify-center text-white"
              href="#"
            >
              <RiHome4Fill className="text-2xl " />
            </a>
          </li>
          <li className="hover:bg-[#262837] p-4 rounded-tl-xl rounded-bl-xl group transition-colors">
            <a
              className="group-hover:bg-red-400 group-hover:text-white p-4  rounded-xl text-center flex justify-center text-[#ec7c6a] transition-colors"
              href="#"
            >
              <RiPercentLine className="text-2xl " />
            </a>
          </li>
          <li className="hover:bg-[#262837] p-4 rounded-tl-xl rounded-bl-xl group transition-colors">
            <a
              className="group-hover:bg-red-400 group-hover:text-white p-4  rounded-xl text-center flex justify-center text-[#ec7c6a] transition-colors"
              href="#"
            >
              <RiPieChartLine className="text-2xl " />
            </a>
          </li>
          <li className="hover:bg-[#262837] p-4 rounded-tl-xl rounded-bl-xl group transition-colors">
            <a
              className="group-hover:bg-red-400 group-hover:text-white p-4  rounded-xl text-center flex justify-center text-[#ec7c6a] transition-colors"
              href="#"
            >
              <RiNotification2Line className="text-2xl " />
            </a>
          </li>
          <li className="hover:bg-[#262837] p-4 rounded-tl-xl rounded-bl-xl group transition-colors">
            <a
              className="group-hover:bg-red-400 group-hover:text-white p-4  rounded-xl text-center flex justify-center text-[#ec7c6a] transition-colors"
              href="#"
            >
              <RiSettings5Line className="text-2xl " />
            </a>
          </li>
        </ul>
      </div>
      <div>
        <ul className=" pl-4">
          <li className="hover:bg-[#262837] p-4 rounded-tl-xl rounded-bl-xl group transition-colors">
            <a
              className="group-hover:bg-red-400 group-hover:text-white p-4  rounded-xl text-center flex justify-center text-[#ec7c6a] transition-colors"
              href="#"
            >
              <RiLogoutBoxLine className="text-2xl " />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};
export default Sidebar;
