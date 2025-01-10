

import React, { useState } from 'react';

type CreateProps = {
  showmodal: boolean;
  togglemodal: () => void;
}

const Add: React.FC<CreateProps> = ({ showmodal, togglemodal }) => {
  const [accountType, setAccountType] = useState('expense');
  const [expenseType, setExpenseType] = useState('');
  const [amount, setAmount] = useState('');

  if (!showmodal) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({ accountType, expenseType, amount });
    setExpenseType('');
    setAmount('');
  };

  return (
    <div>
      <div
        className="fixed inset-0 z-[100] flex flex-col items-center justify-center overflow-hidden px-4 py-6 sm:px-5"
        role="dialog"
        onKeyDown={(e) => e.key === "Escape" && togglemodal()}
      >
        <div
          className="absolute inset-0 bg-slate-900/60 transition-opacity duration-300"
          onClick={togglemodal}
        ></div>

        <div className="relative flex w-full max-w-3xl origin-top flex-col overflow-hidden rounded-lg bg-white transition-all duration-300 dark:bg-navy-700">
          <div className="flex justify-between rounded-t-lg bg-slate-200 px-4 py-3 dark:bg-navy-800 sm:px-5">
            <h3 className="text-xl font-medium text-slate-700 dark:text-navy-100">
              Add License Cost
            </h3>
            <button
              onClick={togglemodal}
              className="btn -mr-1.5 size-7 rounded-full p-0 hover:bg-slate-300/20 focus:bg-slate-300/20 active:bg-slate-300/25 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="size-4.5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          <form onSubmit={handleSubmit} className="p-4">
            

            <div className="flex mb-4">
              <select
                value={expenseType}
                onChange={(e) => setExpenseType(e.target.value)}
                className="w-1/2 mr-2 border rounded p-2 bg-white"
              >
                <option value="">Select a Service</option>
                <option value="food">Food</option>
                <option value="transport">Transport</option>
                <option value="entertainment">Entertainment</option>
              </select>

              <select
                value={expenseType}
                onChange={(e) => setExpenseType(e.target.value)}
                className="w-1/2 mr-2 border rounded p-2 bg-white"
              >
                <option value="">Please select Vehicle Type</option>
                <option value="food">Food</option>
                <option value="transport">Transport</option>
                <option value="entertainment">Entertainment</option>
              </select>
            </div>
            <div className="flex mb-4">
              <input
                type="text"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                placeholder="Female cost"
                className="w-1/2 border rounded p-2 mr-2"
              />
               <input
                type="text"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                placeholder="Male cost"
                className="w-1/2 border rounded p-2 mr-2"
              />
            </div>
            <button
              type="submit"
              className="bg-primary text-white rounded p-2 w-1/5"
            >
              Add
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Add;