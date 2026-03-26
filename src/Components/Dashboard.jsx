import { useState } from "react";
import "../index.css";
import AddExpenseModal from "../Modals/AddExpenseModal";
import { useExpenses } from "../Hooks/useExpenses";
import { TableWithoutBorder } from "./Table";
import SetBudgetModal from "../Modals/SetBudgetModal";
const Dashboard = () => {
  const [open, setOpen] = useState(false);
  const [budgetOpen, setBudgetOpen] = useState(false);

  const {
    addExpense,
    editExpense,
    deleteExpense,
    filteredExpense,
    totalSpending,
    monthlyExpenses,
    totalEntries,
    budget,
    setBudget,
    searchExpenses,
    setSearchExpenses,
    category,
    setCategory,
    fromDate,
    setFromDate,
    toDate,
    setToDate,
  } = useExpenses();

  const handleReset = () => {
    setSearchExpenses("");
    setCategory("All");
    setFromDate("");
    setToDate("");
  };
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
          <AddExpenseModal
            onOpen={open}
            onClose={() => setOpen(false)}
            addExpense={addExpense}
          />
          <SetBudgetModal
            onOpen={budgetOpen}
            onClose={() => setBudgetOpen(false)}
            budget={budget}
            setBudget={setBudget}
          />
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
              <div className="mx-6 roboto font-bold text-2xl">${totalSpending}</div>
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
              <div className="mx-6 roboto font-bold text-2xl">${monthlyExpenses}</div>
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
              <div className="mx-6 roboto font-bold text-2xl">{totalEntries}</div>
            </div>
            <div className="col-span-1 shadow-[0_4px_12px_rgba(168,85,247,0.12)] flex flex-col gap-8 py-1 justify-between bg-white min-w-20 min-h-35 rounded-xl">
              <div className="flex justify-between mt-6 mx-6">
                <div className="text-xl font-medium uppercase text-purple-500">
                  Budget
                </div>
                <div 
                  className="cursor-pointer hover:scale-110 transition-all duration-300 bg-purple-50 p-1 rounded-lg"
                  onClick={() => setBudgetOpen(true)}
                >
                  <img src="/assets/edit.svg" alt="edit budget" width={24} />
                </div>
              </div>
              <div className="mx-6 roboto font-bold text-2xl">
                ${totalSpending}/<span className="text-sm font-light">${budget}</span>
              </div>
            </div>
          </div>
          <div className="flex gap-4 m-5 justify-start  md:justify-start flex-row  mx-8 flex-wrap items-center">
            <div
              onClick={() => setCategory("All")}
              className={`px-8 py-2 rounded-2xl cursor-pointer font-medium text-sm
    ${
      category === "All"
        ? "bg-purple-700 text-white"
        : "bg-purple-100 text-purple-400"
    }`}
            >
              All
            </div>
            <div
              onClick={() => setCategory("food")}
              className={`px-8 py-2 rounded-2xl cursor-pointer font-medium text-sm
    ${
      category === "food"
        ? "bg-purple-700 text-white"
        : "bg-purple-100 text-purple-400"
    }`}
            >
              Food
            </div>
            <div
              onClick={() => setCategory("transport")}
              className={`px-8 py-2 rounded-2xl cursor-pointer font-medium text-sm
    ${
      category === "transport"
        ? "bg-purple-700 text-white"
        : "bg-purple-100 text-purple-400"
    }`}
            >
              Transport
            </div>
            <div
              onClick={() => setCategory("entertainment")}
              className={`px-8 py-2 rounded-2xl cursor-pointer font-medium text-sm
    ${
      category === "entertainment"
        ? "bg-purple-700 text-white"
        : "bg-purple-100 text-purple-400"
    }`}
            >
              Entertainment
            </div>
            <div
              onClick={() => setCategory("shopping")}
              className={`px-8 py-2 rounded-2xl cursor-pointer font-medium text-sm
    ${
      category === "shopping"
        ? "bg-purple-700 text-white"
        : "bg-purple-100 text-purple-400"
    }`}
            >
              Shopping
            </div>
            <div
              onClick={() => setCategory("recharge")}
              className={`px-8 py-2 rounded-2xl cursor-pointer font-medium text-sm
    ${
      category === "recharge"
        ? "bg-purple-700 text-white"
        : "bg-purple-100 text-purple-400"
    }`}
            >
              Recharge & Bills
            </div>
            <div
              onClick={() => setCategory("health")}
              className={`px-8 py-2 rounded-2xl cursor-pointer font-medium text-sm
    ${
      category === "health"
        ? "bg-purple-700 text-white"
        : "bg-purple-100 text-purple-400"
    }`}
            >
              Health
            </div>
            <div
              onClick={() => setCategory("others")}
              className={`px-8 py-2 rounded-2xl cursor-pointer font-medium text-sm
    ${
      category === "others"
        ? "bg-purple-700 text-white"
        : "bg-purple-100 text-purple-400"
    }`}
            >
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
                value={searchExpenses}
                onChange={(e) => setSearchExpenses(e.target.value)}
              />
            </div>
            <input
              type="date"
              value={fromDate}
              onChange={(e) => setFromDate(e.target.value)}
              className="outline-none border-1 p-2 border-gray-200 rounded-xl"
            />
            <input
              type="date"
              value={toDate}
              onChange={(e) => setToDate(e.target.value)}
              className="outline-none border-1 p-2 border-gray-200 rounded-xl"
            />
            <button 
              onClick={handleReset}
              className="bg-purple-800 py-1 font-medium rounded-xl px-3 text-white justify-center items-center poppins flex "
            >
              <img src="/assets/reset.svg" width={40} alt="reset" />
            </button>
          </div>
          {filteredExpense.length === 0 ? (
            <div className="flex justify-center items-center mb-9 shadow-[0_4px_12px_rgba(168,85,247,0.12)] m-6 bg-white h-[40vw] xl:h-[20vw] rounded-xl flex-col">
              <div>
                <img src="/assets/empty.png" className="h-[15vw]" alt="" />
              </div>
              <p className="text-md poppins text-gray-400">
                No expenses yet. Start adding one.
              </p>
            </div>
          ) : (
            <div className="flex justify-center items-center mb-9 shadow-[0_4px_12px_rgba(168,85,247,0.12)] m-6 bg-white h-[40vw] xl:h-[20vw] rounded-xl flex-col">
              <TableWithoutBorder
                expenses={filteredExpense}
                editExpense={editExpense}
                deleteExpense={deleteExpense}
              />
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Dashboard;
