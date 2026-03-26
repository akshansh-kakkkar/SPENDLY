import React from 'react'
import { NavLink } from 'react-router-dom'
const Sidebar = () => {
  return (
    <div className="h-screen sticky top-0 hidden lg:block w-[17vw] bg-white border-r border-purple-100">
      <div className="flex justify-center mt-6 items-center gap-3">
        <img src="/assets/Image.svg" width={40} alt="" />
        <p className="text-3xl poppins font-semibold text-purple-800">
          SPENDLY
        </p>
      </div>
      <div className="flex mt-12 ml-5">
        <p className="text-purple-400 text-sm font-medium bg-purple-100 px-2 py-1 rounded-lg">
          MAIN
        </p>
      </div>
      <div>
        <div className="ml-5 mt-5 flex flex-col gap-3 mr-5">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `roboto text-xl flex gap-3 px-4 py-3 rounded-xl transition-all ${isActive
                ? "bg-purple-800 text-white shadow-lg"
                : "text-purple-800 hover:bg-purple-50"
              }`
            }
          >
            <img width={20} src="/assets/dasboard.svg" alt="" className="active:invert" />
            Dashboard
          </NavLink>
          <NavLink
            to="/stats"
            className={({ isActive }) =>
              `roboto text-xl flex gap-3 px-4 py-3 rounded-xl transition-all ${isActive
                ? "bg-purple-800 text-white shadow-lg"
                : "text-purple-800 hover:bg-purple-50"
              }`
            }
          >
            <img width={20} src="/assets/pie-chart.svg" alt="" />
            Stats
          </NavLink>
        </div>
      </div>
    </div>
  )
}

export default Sidebar