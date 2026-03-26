import React, { useState } from "react";
import "../index.css";
const AddExpenseModal = ({ onOpen, onClose, addExpense }) => {
  const [title, settitle] = useState('')
  const [Amount, setAmount] = useState('')
  const [category, setCategory] = useState('food')
  const [date, setDate] = useState('')
  if (!onOpen) return null;
  const handleAdd = () => {
    if (!title || !Amount || !date || !category) {
      alert("Please fill all the fields");
      return;
    }
    const newExpense = {
      id: Date.now(),
      title,
      amount: Number(Amount),
      date,
      category
    }
    addExpense(newExpense);
    settitle(""),
      setAmount(""),
      setCategory("food")
    setDate("")

    onClose()
  }
  return (
    <div className="fixed inset-0 z-50 flex justify-center items-center ">
      <div className="absolute inset-0 bg-[#00000045] " onClick={onClose}></div>
      <div className="relative bg-white w-[92%] max-w-lg rounded-2xl shadow-2xl p-4 sm:p-8 animate-scaleIn max-h-[90vh] overflow-y-auto">
        <div className="flex poppins justify-between items-center mb-4">
          <div className="text-xl sm:text-2xl flex items-center gap-2 sm:gap-3 capitalize font-semibold">
              <span>
                <img
                  width={32}
                  className="sm:w-10"
                  src="/assets/cart.png"
                  alt="cart"
                />
              </span>
              Add Expense
            </div>
            <div
              className="cursor-pointer hover:scale-[101%] transition-all duration-300"
              onClick={onClose}
            >
              <img src="/assets/cross.svg" width={24} alt="cross" />
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-7 mb-4">
            <div className="flex justify-start flex-col roboto gap-1 ">
              <label
                htmlFor=""
                className="text-sm  text-purple-600 font-semibold"
              >
                Title
              </label>
              <input
                className="outline-none border-2 placeholder:text-purple-300 text-purple-600 w-full border-purple-500 sm:w-50 p-2 rounded-xl"
                type="text"
                value={title}
                onChange={(e) => { settitle(e.target.value) }}
                placeholder="eg. Grocery"
              />
            </div>
            <div className="flex flex-col flex-1 roboto gap-1">
              <label

                htmlFor=""
                className="text-sm  text-purple-600 font-semibold"
              >
                Amount($)
              </label>
              <input
                value={Amount}
                onChange={(e) => { setAmount(e.target.value) }}
                className="outline-none border-2 placeholder:text-purple-300 text-purple-600 w-full border-purple-500 sm:w-50 p-2 rounded-xl"
                type="number"
                placeholder="$ 0.00"
              />
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-7 mb-6">
            <div className="flex flex-col flex-1 roboto gap-1">
              <label
                htmlFor=""
                className="text-sm  text-purple-600 font-semibold"
              >
                category
              </label>
              <select
                className="outline-none border-2 placeholder:text-purple-300 text-purple-300 border-purple-500 sm:w-50 p-2 w-full rounded-xl"
                type="text" value={category} onChange={(e) => { setCategory(e.target.value) }} >
                <option value="food">Food</option>
                <option value="transport">Transport</option>
                <option value="entertainment">Entertainment</option>
                <option value="shopping">Shopping</option>
                <option value="recharge">Recharge & Bills</option>
                <option value="health">Health</option>
                <option value="others">Others</option>
              </select>
            </div>
            <div className="flex flex-col flex-1 roboto gap-1">
              <label
                htmlFor=""
                className="text-sm  text-purple-600 font-semibold"
              >
                Date
              </label>
              <input
                className="outline-none border-2 placeholder:text-purple-300 text-purple-600 border-purple-500 w-full sm:w-50 p-2 rounded-xl"
                type="date"
                value={date}
                onChange={(e) => { setDate(e.target.value) }}
              />
            </div>
          </div>
          <div className="flex justify-center sm:justify-end mt-4">
            <button 
              onClick={handleAdd} 
              className="w-full sm:w-auto bg-purple-700 hover:bg-purple-800 transition-colors flex items-center justify-center gap-2 text-white roboto text-lg sm:text-xl px-6 py-2.5 rounded-xl shadow-lg"
            >
              <img width={24} src="/assets/add.svg" alt="add" className="sm:w-7" />
              ADD EXPENSE
            </button>
          </div>
      </div>
    </div>
  );
};

export default AddExpenseModal;
