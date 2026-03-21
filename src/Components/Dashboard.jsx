import "../index.css";
const Dashboard = () => {
  return (
    <>
      <div>
        <div className=" lg:w-[85vw] h-[86vh]  w-[100vw] ">
          <div className=" p-8 px-12 flex justify-between">
            <div className="text-2xl tracking-widest font-medium text-purple-800">
              Dashboard
            </div>
            <div>
              <button className="flex  justify-center gap-1  items-center font-medium text-center text-md text-white px-3 py-2 rounded-xl bg-purple-800 poppins">
                <img width={30} src="/assets/add.svg" alt="add" />
                Add Expense
              </button>
            </div>
          </div>
          <div className="grid gap-5 grid-cols-4 mx-8">
            <div className="col-span-1 flex flex-col gap-8 py-1 justify-between bg-white min-w-20 min-h-35 rounded-xl">
              <div className="flex justify-between mt-6 mx-6">
               <div className="text-xl font-medium uppercase text-purple-500">Total Spending</div>
               <div><img src="/assets/bill.svg" alt="bill"  width={30}/></div>
              </div>
              <div className="mx-6 roboto font-bold text-2xl">
                $0
              </div>
            </div>
                        <div className="col-span-1 flex flex-col gap-8 py-1 justify-center bg-white min-w-20 min-h-35 rounded-xl">
              <div className="flex justify-between mt-6 mx-6">
               <div className="text-xl font-medium uppercase text-purple-500">This Month</div>
               <div><img src="/assets/calendar.svg" alt="bill"  width={30}/></div>
              </div>
              <div className="mx-6 roboto font-bold text-2xl">
                $0
              </div>
            </div>
                        <div className="col-span-1 flex flex-col gap-8 py-1 justify-center bg-white min-w-20 min-h-35 rounded-xl">
              <div className="flex justify-between  mt-6 mx-6">
               <div className="text-xl font-medium uppercase text-purple-500">Total Enteries</div>
               <div><img src="/assets/rise.svg" alt="bill"  width={30}/></div>
              </div>
              <div className="mx-6 roboto font-bold text-2xl">
                $0
              </div>
            </div>
                        <div className="col-span-1 flex flex-col gap-8 py-1 justify-center bg-white min-w-20 min-h-35 rounded-xl">
              <div className="flex justify-between mt-6 mx-6">
               <div className="text-xl font-medium uppercase text-purple-500">Budget</div>
               <div><img src="/assets/piggy.svg" alt="bill"  width={30}/></div>
              </div>
              <div className="mx-6 roboto font-bold text-2xl">
                $0/<span className="text-sm font-light">$1599</span>
              </div>
            </div>
          </div>
          <div className="flex gap-4 m-5 justify-start mx-8 items-center">
            <div className="bg-purple-100 px-8 py-2  rounded-2xl  text-purple-400 font-medium text-md">All</div>
            <div className="bg-purple-100 px-8 py-2  rounded-2xl  text-purple-400 font-medium text-md">Food</div>
            <div className="bg-purple-100 px-8 py-2  rounded-2xl  text-purple-400 font-medium text-md">Transport</div>
            <div className="bg-purple-100 px-8 py-2  rounded-2xl  text-purple-400 font-medium text-md">Entertainment</div>
            <div className="bg-purple-100 px-8 py-2  rounded-2xl  text-purple-400 font-medium text-md">Shopping</div>
            <div className="bg-purple-100 px-8 py-2  rounded-2xl  text-purple-400 font-medium text-md">Recharge & Bills</div>
            <div className="bg-purple-100 px-8 py-2  rounded-2xl  text-purple-400 font-medium text-md">Health</div>
            <div className="bg-purple-100 px-8 py-2  rounded-2xl  text-purple-400 font-medium text-md">Other</div>
          </div>
          <div className="flex gap-3 bg-white m-8 rounded-xl p-3">
            <div className="flex gap-3 border-1 border-gray-200 p-2 rounded-xl w-full">
              <img src="/assets/search.svg" width={20} alt="search" />
            <input type="text" placeholder="Search expenses... " className="outline-none " />
            </div>
            <input type="date" className="outline-none border-1 p-2 border-gray-200 rounded-xl" />
            <input type="date" className="outline-none border-1 p-2 border-gray-200 rounded-xl" />            
            <button className="bg-purple-800  px-3 text-white poppins rounded-xl font-medium">Amount</button>
            <button className="bg-purple-800 font-medium rounded-xl px-3 text-white poppins flex items-center gap-3 "><img src="/assets/reset.svg" width={20} alt="reset" />Reset</button>
          </div>
          <div>
            <img src="" alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
