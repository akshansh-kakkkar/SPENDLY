import React, { useState } from "react";
import "../index.css";
const AddExpenseModal = ({ onOpen, onClose, addExpense }) => {
  const [title , settitle ] = useState('')
  const [Amount, setAmount] = useState('')
  const [category, setCategory] = useState('food')
  const [date, setDate] = useState('')
  if (!onOpen) return null;
  const handleAdd = ()=>{
    if(!title|| !Amount || !date || !category){
      alert("Please fill all the fields");
      return;
    }
    const newExpense  = {
      id : Date.now(),
      title, 
      amount : Number(Amount),
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
      <div>
        <div className=" relative bg-white h-[330px] w-[500px] rounded-2xl shadow-2xl p-6 animate-scaleIn">
          <div className="flex poppins justify-between">
            <div className="text-2xl flex items-center justify-center gap-3 capitalize font-semibold">
              <span>
                <img
                  width={40}
                  className="-translate-y-2"
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
          <div className="flex gap-7 p-4 justify-center">
            <div className="flex flex-col roboto gap-1 ">
              <label
                htmlFor=""
                className="text-sm  text-purple-600 font-semibold"
              >
                Title
              </label>
              <input
                className="outline-none border-2 placeholder:text-purple-300 text-purple-600 border-purple-500 w-50 p-2 rounded-xl"
                type="text"
                value={title}
                onChange={(e)=>{settitle(e.target.value)}}
                placeholder="eg. Grocery"
              />
            </div>
            <div className="flex flex-col roboto gap-1 ">
              <label
             
                htmlFor=""
                className="text-sm  text-purple-600 font-semibold"
              >
                Amount($)
              </label>
              <input
               value={Amount}
              onChange={(e)=>{setAmount(e.target.value)}}
                className="outline-none border-2 placeholder:text-purple-300 text-purple-600 border-purple-500 w-50 p-2 rounded-xl"
                type="number"
                placeholder="$ 0.00"
              />
            </div>

          </div>
          <div className="flex gap-7 p-2 justify-center">
            <div className="flex flex-col roboto gap-1 ">
              <label
                htmlFor=""
                className="text-sm  text-purple-600 font-semibold"
              >
                category
              </label>
              <select
                className="outline-none border-2 placeholder:text-purple-300 text-purple-300 border-purple-500 w-50 p-2 rounded-xl"
                type="text" value={category} onChange={(e)=>{setCategory(e.target.value)}} >
                <option value="food">Food</option>
                <option value="transport">Transport</option>
                <option value="entertainment">Entertainment</option>
                <option value="shopping">Shopping</option>
                <option value="recharge">Recharge & Bills</option>
                <option value="health">Health</option>
                <option value="others">Others</option>
              </select>
            </div>
            <div className="flex flex-col roboto gap-1 ">
              <label
                htmlFor=""
                className="text-sm  text-purple-600 font-semibold"
              >
                Date
              </label>
              <input
                className="outline-none border-2 placeholder:text-purple-300 text-purple-600 border-purple-500 w-50 p-2 rounded-xl"
                type="date"
               value={date}
               onChange={(e)=> {setDate(e.target.value)}}
              />
            </div>

          </div>
          <div className="flex justify-end mx-3 items-center text-xl font-bold rounded-xl"   >
            <button onClick={handleAdd} className="bg-purple-700 flex items-center gap-1 text-white roboto text-xl px-3 py-1 rounded-xl "><img width={30} src="/assets/add.svg" alt="add" />ADD</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddExpenseModal;
