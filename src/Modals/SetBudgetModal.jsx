import React, { useState, useEffect } from "react";
import "../index.css";

const SetBudgetModal = ({ onOpen, onClose, budget, setBudget }) => {
  const [newBudget, setNewBudget] = useState(budget);

  useEffect(() => {
    setNewBudget(budget);
  }, [budget]);

  if (!onOpen) return null;

  const handleSave = () => {
    if (!newBudget || newBudget <= 0) {
      alert("Please enter a valid budget amount");
      return;
    }
    setBudget(Number(newBudget));
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex justify-center items-center ">
      <div 
        className="absolute inset-0 bg-[#00000045] " 
        onClick={onClose}
      ></div>
      <div className="relative bg-white h-[280px] w-[350px] sm:w-[450px] rounded-2xl shadow-2xl p-8 animate-scaleIn flex flex-col justify-between">
        <div>
          <div className="flex poppins justify-between items-center mb-6">
            <div className="text-xl sm:text-2xl flex items-center gap-2 sm:gap-3 capitalize font-semibold">
              <span>
                <img
                  width={40}
                  className="-translate-y-1"
                  src="/assets/piggy.svg"
                  alt="budget"
                />
              </span>
              Set Budget
            </div>
            <div
              className="cursor-pointer hover:scale-[101%] transition-all duration-300"
              onClick={onClose}
            >
              <img src="/assets/cross.svg" width={24} alt="close" />
            </div>
          </div>
          
          <div className="flex flex-col roboto gap-2 ">
            <label
              htmlFor="budgetInput"
              className="text-sm text-purple-600 font-semibold"
            >
              Monthly Budget Amount ($)
            </label>
            <input
              id="budgetInput"
              className="outline-none border-2 placeholder:text-purple-300 text-purple-600 border-purple-500 w-full p-3 rounded-xl text-lg font-bold"
              type="number"
              value={newBudget}
              onChange={(e) => setNewBudget(e.target.value)}
              placeholder="e.g. 5000"
              autoFocus
            />
          </div>
        </div>

        <div className="flex justify-end gap-4 mt-6">
          <button
            onClick={onClose}
            className="px-6 py-2 rounded-xl font-medium text-gray-600 bg-gray-100 hover:bg-gray-200 transition-all duration-300 roboto"
          >
            Cancel
          </button>
          <button
            onClick={handleSave}
            className="bg-purple-700 flex items-center gap-2 text-white roboto text-lg px-6 py-2 rounded-xl hover:bg-purple-800 transition-all duration-300 shadow-lg shadow-purple-200"
          >
            Save Budget
          </button>
        </div>
      </div>
    </div>
  );
};

export default SetBudgetModal;
