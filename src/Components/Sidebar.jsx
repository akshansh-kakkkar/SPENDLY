import React from 'react'

const Sidebar = () => {
  return (
            <div className="h-[100vh] lg:w-[15vw] bg-white ">
          <div className="flex justify-center mt-6 items-center  gap-3">
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
            <div className="ml-5 mt-5 flex  flex-col gap-5">
              <button className="roboto text-xl text-purple-800 flex gap-3"><img width={20} src="/assets/dasboard.svg" alt="" />Dashboard</button>
              <button className="roboto text-xl text-purple-800 flex gap-3"><img width={20} src="/assets/pie-chart.svg" alt="" />Stats</button>
            </div>
          </div>
        </div>
  )
}

export default Sidebar