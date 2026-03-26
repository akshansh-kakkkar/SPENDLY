import { useState } from "react";
import "../index.css";
import AddExpenseModal from "../Modals/AddExpenseModal";
import { useExpenses } from "../Hooks/useExpenses";
import { TableWithoutBorder } from "./Table";
const Dashboard = () => {
  const [open, setOpen] = useState(false);

  const {addExpense, filteredExpense, totalSpending} = useExpenses()
  return (
    <>
      <div>
        <div className=" lg:w-[85vw] h-[86vh]  w-[100vw] ">
          <div className=" p-8 px-12 flex items-center  justify-between">
            <div className="text-2xl tracking-widest font-medium text-purple-800">
              Dashboard
            </div>


            <div className="">
              <button
                onClick={() => setOpen(true)} 
                className="flex  justify-center gap-1 shadow-[0_6px_18px_rgba(147,51,234,0.35)] items-center font-medium text-center text-md text-white px-3 py-2 rounded-xl bg-purple-800 poppins"
              >
                <img width={30} src="/assets/add.svg" alt="add" />
                <span className="hidden sm:block">Add Expense</span>
              </button>
            </div>
          </div>
          <AddExpenseModal onOpen={open} onClose={() => setOpen(false)} addExpense={addExpense}/>
          <div className="grid gap-5 sm:grid-cols-2 2xl:grid-cols-4 mx-8">
            <div className="col-span-1 flex flex-col gap-8 py-1 shadow-[0_4px_12px_rgba(168,85,247,0.12)] justify-between bg-white min-w-20 min-h-35 rounded-xl">
              <div className="flex justify-between mt-6 mx-6">
                <div className="text-xl font-medium uppercase text-purple-500">
                  Total Spending
                </div>
                <div>
                  <img src="/assets/bill.svg" alt="bill" width={30} />
                </div>
              </div>
              <div className="mx-6 roboto font-bold text-2xl">$0</div>
            </div>
            <div className="col-span-1 flex shadow-[0_4px_12px_rgba(168,85,247,0.12)] flex-col gap-8 py-1 justify-between bg-white min-w-20 min-h-35 rounded-xl">
              <div className="flex justify-between mt-6 mx-6">
                <div className="text-xl font-medium uppercase text-purple-500">
                  This Month
                </div>
                <div>
                  <img src="/assets/calendar.svg" alt="bill" width={30} />
                </div>
              </div>
              <div className="mx-6 roboto font-bold text-2xl">$0</div>
            </div>
            <div className="col-span-1 flex flex-col shadow-[0_4px_12px_rgba(168,85,247,0.12)] gap-8 py-1 justify-between bg-white min-w-20 min-h-35 rounded-xl">
              <div className="flex justify-between  mt-6 mx-6">
                <div className="text-xl font-medium uppercase text-purple-500">
                  Total Enteries
                </div>
                <div>
                  <img src="/assets/rise.svg" alt="bill" width={30} />
                </div>
              </div>
              <div className="mx-6 roboto font-bold text-2xl">$0</div>
            </div>
            <div className="col-span-1 shadow-[0_4px_12px_rgba(168,85,247,0.12)] flex flex-col gap-8 py-1 justify-between bg-white min-w-20 min-h-35 rounded-xl">
              <div className="flex justify-between mt-6 mx-6">
                <div className="text-xl font-medium uppercase text-purple-500">
                  Budget
                </div>
                <div>
                  <img src="/assets/piggy.svg" alt="bill" width={30} />
                </div>
              </div>
              <div className="mx-6 roboto font-bold text-2xl">
                $0/<span className="text-sm font-light">$1599</span>
              </div>
            </div>
          </div>
          <div className="flex gap-4 m-5 justify-start  md:justify-start flex-row  mx-8 flex-wrap items-center">
            <div className="bg-purple-100 px-8 py-2  rounded-2xl  text-purple-400 font-medium text-sm sm:text-md">
              All
            </div>
            <div className="bg-purple-100 px-8 py-2  rounded-2xl  text-purple-400 font-medium text-sm sm:text-md">
              Food
            </div>
            <div className="bg-purple-100 px-8 py-2  rounded-2xl  text-purple-400 font-medium text-sm sm:text-md">
              Transport
            </div>
            <div className="bg-purple-100 px-8 py-2  rounded-2xl  text-purple-400 font-medium text-sm sm:text-md">
              Entertainment
            </div>
            <div className="bg-purple-100 px-8 py-2  rounded-2xl  text-purple-400 font-medium text-sm sm:text-md">
              Shopping
            </div>
            <div className="bg-purple-100 px-8 py-2  rounded-2xl  text-purple-400 font-medium text-sm sm:text-md">
              Recharge & Bills
            </div>
            <div className="bg-purple-100 px-8 py-2  rounded-2xl  text-purple-400 font-medium text-sm sm:text-md">
              Health
            </div>
            <div className="bg-purple-100 px-8 py-2  rounded-2xl  text-purple-400 font-medium text-sm sm:text-md">
              Other
            </div>
          </div>
          <div className="lg:flex flex flex-col sm:justify-center gap-3 md:grid md:justify-center md:grid-cols-2 shadow-[0_4px_12px_rgba(168,85,247,0.12)] flex-col lg:flex-row bg-white m-6 rounded-xl p-3">
            <div className="flex gap-3 border-1 border-gray-200 p-2  rounded-xl w-full">
              <img src="/assets/search.svg" width={20} alt="search" />
              <input
                type="text"
                placeholder="Search expenses... "
                className="outline-none "
              />
            </div>
            <input
              type="date"
              className="outline-none border-1 p-2 border-gray-200 rounded-xl"
            />
            <input
              type="date"
              className="outline-none border-1 p-2 border-gray-200 rounded-xl"
            />
            <button className="bg-purple-800  px-3 text-white poppins rounded-xl p-1 font-medium">
              Amount
            </button>
            <button className="bg-purple-800 py-1 font-medium rounded-xl px-3 text-white justify-center items-center poppins flex ">
              <img src="/assets/reset.svg" width={40} alt="reset" />
            </button>
          </div>
          {filteredExpense.length=== 0 ?(
          <div className="flex justify-center items-center mb-9 shadow-[0_4px_12px_rgba(168,85,247,0.12)] m-6 bg-white h-[40vw] xl:h-[20vw] rounded-xl flex-col">
            <div>

              <img src="/assets/empty.png" className="h-[15vw]" alt="" />
            </div>
           <p className="text-md poppins text-gray-400">
              No expenses yet. Start adding one.
            </p>
          </div>):(
            <div  className="flex justify-center items-center mb-9 shadow-[0_4px_12px_rgba(168,85,247,0.12)] m-6 bg-white h-[40vw] xl:h-[20vw] rounded-xl flex-col">
            <TableWithoutBorder expenses={filteredExpense} />
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Dashboard;
