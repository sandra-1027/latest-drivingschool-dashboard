

import { useAuth } from '@/app/context/AuthContext';
import React, { useState, useEffect } from 'react';

type CreateProps = {
  showmodal: boolean;
  togglemodal: () => void;
  formData?: {
    daily_status: string;
    amount: string;
    type: string;
    expense_name: string;
    id?: string; // Optional for updating
  };
  isEditing?: boolean;
};
// type CreateProps = {
//   showmodal: boolean;
//   togglemodal: () => void;
// }
 const Add: React.FC<CreateProps> = ({ showmodal, togglemodal }) => {
// const Add: React.FC<CreateProps> = ({ showmodal, togglemodal, formData, isEditing = false }) => {
  const { state } = useAuth();
  // const [accountType, setAccountType] = useState(formData?.daily_status || 'expense');
  // const [expenseType, setExpenseType] = useState(formData?.type || '');
  // const [expenseName, setExpenseName] = useState(formData?.expense_name || '');
  // const [amount, setAmount] = useState(formData?.amount || '');
  const [type, settype] = useState('');
  const [dstatus, setdstatus] = useState('expense');
  const [expenseName, setExpenseName] = useState('');
  const [amount, setAmount] = useState('');
 

  if (!showmodal) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Prepare the data object
    const data: any = {
      daily_status: dstatus,
      // amount: parseFloat(amount), // Ensure amount is a number
      amount:amount,
      type: type || '',
      // expense_name: expenseName === 'others' ? 'others' : '', // Adjust based on your logic
      expense_name: expenseName, 
    };
    console.log('Sending data to server:', data);
  
    try {
      const response = await fetch('/api/staff/accounts/add_accounts',{
        method: "POST",
        headers: {
          authorizations: state?.accessToken ?? '',
          api_key: '10f052463f485938d04ac7300de7ec2b',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
  
      if (!response.ok) {
        const errorData = await response.json();
        console.error(`Error adding account:`, errorData.message || 'Unknown error');
        alert(`Failed to add account`);
      } else {
        const responseData = await response.json();
        console.log(`Account added successfully:`, responseData);
        alert(`Account added successfully!`);
      }
    } catch (error) {
      console.error(`Network error:`, error);
      alert(`An error occurred while adding'} the account.`);
    } finally {
      togglemodal(); // Close the modal
    }
  };

  return (
    <div>
      <div
        className="fixed inset-0 z-[100] flex flex-col items-center justify-center overflow-hidden px-4 py-6 sm:px-5"
        role="dialog"
        onKeyDown={(e) => e.key === 'Escape' && togglemodal()}
      >
        <div
          className="absolute inset-0 bg-slate-900/60 transition-opacity duration-300"
          onClick={togglemodal}
        ></div>

        <div className="relative flex w-full max-w-3xl origin-top flex-col overflow-hidden rounded-lg bg-white transition-all duration-300 dark:bg-navy-700">
          <div className="flex justify-between rounded-t-lg bg-slate-200 px-4 py-3 dark:bg-navy-800 sm:px-5">
            <h3 className="text-xl font-medium text-slate-700 dark:text-navy-100">
             Add Account
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
            {/* Radio buttons for account type */}
            <div className="flex items-center mb-4 ml-6">
              <label className="mr-4">
                <input
                  className="form-radio is-basic size-4 rounded-full border-slate-400/70 checked:border-primary checked:bg-primary hover:border-primary focus:border-primary dark:border-navy-400 dark:checked:border-accent dark:checked:bg-accent dark:hover:border-accent dark:focus:border-accent"
                  name="basic"
                  type="radio"
                  value="expense"
                  checked={dstatus === 'expense'}
                  onChange={() => setdstatus('expense')}
                />
                <span className="ml-2">Expense</span>
              </label>
              <label>
                <input
                  className="form-radio is-basic size-4 rounded-full border-slate-400/70 checked:border-primary checked:bg-primary hover:border-primary focus:border-primary dark:border-navy-400 dark:checked:border-accent dark:checked:bg-accent dark:hover:border-accent dark:focus:border-accent"
                  name="basic"
                  type="radio"
                  value="income"
                  checked={dstatus === 'income'}
                  onChange={() => setdstatus('income')}
                />
                <span className="ml-2">Income</span>
              </label>
            </div>

          

{dstatus === 'expense' && (
  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
    {/* Expense Type Dropdown */}
    <label className="block">
      <select
        value={expenseName}
        onChange={(e) => setExpenseName(e.target.value)}
        className="mt-1 block w-full rounded-md border border-slate-300 bg-white py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm dark:border-navy-600 dark:bg-navy-700 dark:text-navy-100"
      >
        <option value="">Please select Expense type</option>
        <option value="petrol">Petrol</option>
        <option value="Salary">Salary</option>
        <option value="workshop">Workshop</option>
        <option value="others">Others</option>
      </select>
    </label>

  
    {expenseName === 'others' ? (
  // Render Name field when expenseType is 'others'
  <label className="block">
    <input
      type="text"
      placeholder="Name"
      value={type}
      onChange={(e) => settype(e.target.value)}
      className="form-input peer w-full rounded-lg border border-slate-300 bg-transparent px-3 py-2 pl-9 placeholder:text-slate-400/70 hover:border-slate-400 focus:border-primary dark:border-navy-450 dark:hover:border-navy-400 dark:focus:border-accent"
    />
  </label>
) : (

  <label className="block">
    <input
      type="text"
      placeholder="Amount"
      value={amount}
      onChange={(e) => setAmount(e.target.value)}
      className="form-input peer w-full rounded-lg border border-slate-300 bg-transparent px-3 py-2 pl-9 placeholder:text-slate-400/70 hover:border-slate-400 focus:border-primary dark:border-navy-450 dark:hover:border-navy-400 dark:focus:border-accent"
    />
  </label>
)}

 
    {expenseName === 'others' && (
      <label className="block">
        <input
          type="text"
          placeholder="Amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          className="form-input peer w-full rounded-lg border border-slate-300 bg-transparent px-3 py-2 pl-9 placeholder:text-slate-400/70 hover:border-slate-400 focus:border-primary dark:border-navy-450 dark:hover:border-navy-400 dark:focus:border-accent"
        />
      </label>
    )}
  </div>
)}
{dstatus === 'income' && (
  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
    {/* Name Field */}
    <label className="block">
      <input
        type="text"
        placeholder="Name"
        value={type}
        onChange={(e) => settype(e.target.value)}
        className="form-input peer w-full rounded-lg border border-slate-300 bg-transparent px-3 py-2 pl-9 placeholder:text-slate-400/70 hover:border-slate-400 focus:border-primary dark:border-navy-450 dark:hover:border-navy-400 dark:focus:border-accent"
      />
    </label>

    {/* Amount Field */}
    <label className="block">
      <input
        type="text"
        placeholder="Amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        className="form-input peer w-full rounded-lg border border-slate-300 bg-transparent px-3 py-2 pl-9 placeholder:text-slate-400/70 hover:border-slate-400 focus:border-primary dark:border-navy-450 dark:hover:border-navy-400 dark:focus:border-accent"
      />
    </label>
  </div>
)}
            {/* Submit Button */}
            <button
              type="submit"
              className="bg-primary text-white rounded p-2 w-1/5 mt-4"
            >
             Add
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Add;