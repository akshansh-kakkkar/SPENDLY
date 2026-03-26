import React from "react";
import { NavLink } from "react-router-dom";

export const SideBarModal = ({ isOpen, setIsOpen }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 sm:w-[35vw] md:w-[30vw] flex justify-start items-center ">
      <div
        className="absolute inset-0 bg-[#00000045] "
        onClick={() => setIsOpen(false)}
      ></div>

      <div className="relative w-[75vw] h-screen bg-white shadow-2xl animate-slideRight flex flex-col p-6 border-r border-purple-100">
        <div className="flex justify-between items-center mb-10">
          <div className="flex items-center gap-3">
            <img src="/assets/Image.svg" width={40} alt="" />
            <p className="text-2xl poppins font-bold text-purple-800 tracking-tight"></p>
          </div>
          <button
            onClick={() => setIsOpen(false)}
            className="p-2 hover:bg-purple-50 rounded-xl transition-all active:scale-90"
          >
            <img src="/assets/cross.svg" width={20} alt="close" />
          </button>
        </div>

        <div className="mb-6">
          <p className="text-purple-400 text-xs font-bold uppercase tracking-wider bg-purple-50 px-3 py-2 rounded-lg inline-block">
            Menu
          </p>
        </div>

        <div className="flex flex-col gap-3">
          <NavLink
            to="/"
            onClick={() => setIsOpen(false)}
            className={({ isActive }) =>
              `roboto text-lg flex items-center gap-4 px-5 py-4 rounded-2xl transition-all ${
                isActive
                  ? "bg-purple-800 text-white shadow-lg shadow-purple-200"
                  : "text-purple-700 hover:bg-purple-50"
              }`
            }
          >
            <img
              width={20}
              src="/assets/dasboard.svg"
              alt=""
            />
            Dashboard
          </NavLink>
          <NavLink
            to="/stats"
            onClick={() => setIsOpen(false)}
            className={({ isActive }) =>
              `roboto text-lg flex items-center gap-4 px-5 py-4 rounded-2xl transition-all ${
                isActive
                  ? "bg-purple-800 text-white shadow-lg shadow-purple-200"
                  : "text-purple-700 hover:bg-purple-50"
              }`
            }
          >
            <img
              width={20}
              src="/assets/pie-chart.svg"
              alt=""
              className=""
            />
            Stats
          </NavLink>
        </div>

        <div className="mt-auto pb-4">

        </div>
      </div>
    </div>
  );
};
