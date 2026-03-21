import "../index.css"
const Dashboard = () => {
  return (
    <>
      <div className="w-screen h-screen flex">
        <div className="h-[100vh] lg:w-[15vw] border-r-[0.7px solid-black] bg-white ">
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
        <div className=" lg:w-[85vw] w-[100vw] bg-purple-50 h-full">
          <div className="m-12 mx-15 flex justify-between">
            <div className="text-2xl tracking-widest font-medium text-purple-800">Dashboard</div>
            <div><button className="flex justify-center gap-1  items-center font-medium text-center text-md text-white px-3 py-2 rounded-xl bg-purple-800 poppins" ><img width={30} src="/assets/add.svg" alt="add" />Add Expense</button></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
