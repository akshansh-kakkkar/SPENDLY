import React from "react";
import "../index.css";

export const DeleteModaal = ({ open, onClose, onConfirm }) => {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex justify-center items-center ">
      <div className="absolute inset-0 bg-[#00000045] " onClick={onClose}></div>
      <div className="relative bg-white h-[300px] w-[500px] rounded-2xl shadow-2xl p-6 animate-scaleIn flex flex-col justify-between">
        <div>
          <div className="flex poppins justify-between items-center mb-6">
            <div className="text-2xl flex items-center justify-center gap-3 capitalize font-semibold">
              <span>
                <img
                  width={20}
                  className="brightness-1"
                  src="/assets/bin.png"
                  alt="cart"
                />
              </span>
              Delete Expense
            </div>
            <div
              className="cursor-pointer hover:scale-[101%] transition-all duration-300"
              onClick={onClose}
            >
              <img src="/assets/cross.svg" width={24} alt="cross" />
            </div>
          </div>
          <p className="text-gray-600 roboto text-lg">
            Are you sure you want to delete this item? This is an irreversible
            action and cannot be undone.
          </p>
        </div>

        <div className="flex justify-end gap-4">
          <button
            onClick={onClose}
            className="px-6 py-2 rounded-xl font-medium text-gray-600 bg-gray-100 hover:bg-gray-200 transition-all duration-300 roboto"
          >
            Cancel
          </button>
          <button
            onClick={onConfirm}
            className="px-6 py-2 rounded-xl font-medium text-white bg-red-600 hover:bg-red-700 shadow-lg shadow-red-200 transition-all duration-300 roboto flex items-center gap-2"
          >
            <img
              src="/assets/bin.png"
              width={20}
              className="invert brightness-0"
              alt=""
            />
            Confirm Delete
          </button>
        </div>
      </div>
    </div>
  );
};



