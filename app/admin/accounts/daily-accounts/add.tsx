


import { useAuth } from '@/app/context/AuthContext';
import React, { useState, useEffect, useRef } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

type Account = {
  id: string;
  status: string;
  daily_status: string; 
  type: string;
  expense_name: string;
  email: string;
  branch_id: string;
  branch_name:string;
  added_date:string;
  staff_name:string;
  amount:string;
  total_income:string;
  total_expense:string;
  added_by:string;
  text: string;
};
type CreateProps = {
  showmodal: boolean;
  togglemodal: () => void;
  formData?: {
    daily_status: string;
    amount: string;
    type: string;
    expense_name: string;
    branch_id:string;
    id?: string; 
  };
  isEditing?: boolean;
};

const Add: React.FC<CreateProps> = ({ showmodal, togglemodal, formData, isEditing = false }) => {
  const { state } = useAuth();
  const [accountType, setAccountType] = useState(formData?.daily_status || 'expense');
  const [expenseType, setExpenseType] = useState(formData?.type || '');
  const [expenseName, setExpenseName] = useState(formData?.expense_name || '');

  const [amount, setAmount] = useState(formData?.amount || '');
  const [ BranchData,  setBranchData] = useState<Account []>([]);
  const [branch_id, setbranch_id] = useState(formData?.branch_id || '');

 const [selectedBranch, setSelectedBranch] = useState<string>("");
  const [searchBranch, setSearchBranch] = useState("");
    const[searchBranchData,setSearchBranchData] =useState<Account []>([]);
    const[filteredBranch,setFilteredBranch]=useState<Account []>([]);
     const [isDropdownOpen, setIsDropdownOpen] = useState(false);
      const dropdownRef = useRef(null);



  if (!showmodal) return null;

  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const formDataToSend = { ...FormData, branch_id: branch_id };



    if (!branch_id) {
      toast.error("Please select a branch.");
      return;
    }
  
    if (!amount || isNaN(Number(amount))) {
      toast.error("Please enter a valid amount.");
      return;
    }
  
    const data: any = {
      daily_status: accountType,
      amount: parseFloat(amount), 
      type: expenseType || 'general',
      expense_name: expenseType === 'others' ? expenseName : expenseType, // Ensuring correct name
      branch_id: branch_id,
    };
  
    console.log('Sending data:', data);
  
    try {
      const response = await fetch('/api/admin/accounts/add_accounts', {
        method: "POST",
        headers: {
          Authorizations: state?.accessToken ?? '',
          api_key: '10f052463f485938d04ac7300de7ec2b',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
  
      const responseData = await response.json();
      if (!response.ok) {
        console.error(`Error adding account:`, responseData.message || 'Unknown error');
        toast.error(responseData.message || 'Failed to add account');
        return;
      }
  
      console.log('Account added successfully:', responseData);
      toast.success('Account added successfully');
  
    } catch (error: any) {
      console.error("Network error:", error);
      toast.error(error.message || 'An error occurred while adding the account.');
    } finally {
      // togglemodal(); 
    }
  };
  
const fetchSearchBranch = async () => {
      try {
        const response = await fetch("/api/admin/report/get_branch_autocomplete", {
          method: "POST",
          headers: {
            authorizations: state?.accessToken ?? "",
            api_key: "10f052463f485938d04ac7300de7ec2b",
          },
          body: JSON.stringify({}),
        });
  
        if (!response.ok) {
          const errorData = await response.json();
          throw new Error(`HTTP error! Status: ${response.status} - ${errorData.message || "Unknown error"}`);
        }
  
        const data = await response.json();
        console.log("Search mobile data", data.data);
  
        if (data.success) {
          setSearchBranchData(data.data.branch_details || []);
          setFilteredBranch(data.data.branch_details || []);
        }
      } catch (error) {
        console.error("Fetch error:", error);
      }
    };
  
    useEffect(() => {
      fetchSearchBranch();
    }, [state]);
  
    const handleSearchBranch = (e : any) => {
      const value = e.target.value;
      setSearchBranch(value);
  
      const searchData = searchBranchData.filter(
        (item) =>
          item.text.toLowerCase().includes(value.toLowerCase())
         
      );
  
      setFilteredBranch(searchData);
    };
  
    
    const handleSelectBranch = (branch: { id: string; text: string }) => {
      setSelectedBranch(branch.text);
      setbranch_id(branch.id);
      
      setSearchBranch("");
      setIsDropdownOpen(false); 
    };
  
    // Close dropdown when clicking outside
    // useEffect(() => {
    //   const handleClickOutside = (event) => {
    //     if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
    //       setIsDropdownOpen(false);
    //     }
    //   };
    //   document.addEventListener("mousedown", handleClickOutside);
    //   return () => document.removeEventListener("mousedown", handleClickOutside);
    // }, []);
    useEffect(() => {
      const handleClickOutside = (event: MouseEvent) => {
        if (dropdownRef.current && !(dropdownRef.current as HTMLElement).contains(event.target as Node)) {
          setIsDropdownOpen(false);
        }
      };
      document.addEventListener("mousedown", handleClickOutside);
      return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);
    
   



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

        <div className="relative flex w-full max-w-3xl origin-top flex-col  rounded-lg bg-white transition-all duration-300 dark:bg-navy-700">
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
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              {/* Radio buttons for account type */}
            <div className="flex items-center mb-4 ml-6">
              <label className="mr-4">
                <input
                  className="form-radio is-basic size-4 rounded-full border-slate-400/70 checked:border-primary checked:bg-primary hover:border-primary focus:border-primary dark:border-navy-400 dark:checked:border-accent dark:checked:bg-accent dark:hover:border-accent dark:focus:border-accent"
                  name="basic"
                  type="radio"
                  value="expense"
                  checked={accountType === 'expense'}
                  onChange={() => setAccountType('expense')}
                />
                <span className="ml-2">Expense</span>
              </label>
              <label>
                <input
                  className="form-radio is-basic size-4 rounded-full border-slate-400/70 checked:border-primary checked:bg-primary hover:border-primary focus:border-primary dark:border-navy-400 dark:checked:border-accent dark:checked:bg-accent dark:hover:border-accent dark:focus:border-accent"
                  name="basic"
                  type="radio"
                  value="income"
                  checked={accountType === 'income'}
                  onChange={() => setAccountType('income')}
                />
                <span className="ml-2">Income</span>
              </label>
            </div>

<div>
{( accountType === 'expense') && (
 
  // {/* type */}
<label className="block">
  <label>Expense Type</label>
      <select
        value={expenseType}
        onChange={(e) => setExpenseType(e.target.value)}
        className="mt-1 block w-full rounded-md border border-slate-300 bg-white py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm dark:border-navy-600 dark:bg-navy-700 dark:text-navy-100"
      >
        <option value="">Please select Expense type</option>
        <option value="petrol">Petrol</option>
        <option value="Salary">Salary</option>
        <option value="workshop">Workshop</option>
        <option value="others">Others</option>
      </select>
    </label>

                 )}

{( accountType === 'income') && (
<label className="block">
  <span>Name</span>
      <input
        type="text"
        placeholder="Name"
        value={expenseName}
        onChange={(e) => setExpenseName(e.target.value)}
        className="form-input peer w-full rounded-lg border border-slate-300 bg-transparent px-3 py-2 pl-9 placeholder:text-slate-400/70 hover:border-slate-400 focus:border-primary dark:border-navy-450 dark:hover:border-navy-400 dark:focus:border-accent"
      />
    </label>
    )}
</div>


                 
</div>
          

<div className="grid grid-cols-1 gap-4 sm:grid-cols-2 mt-4">
{( accountType === 'expense') && (
  <>
{( expenseType === 'others') && (
              <label className="block">
                <span>Name</span>
                   <input
                    type="text"
                    placeholder="Name"
                    value={expenseName}
                    onChange={(e) => setExpenseName(e.target.value)}
                    className="form-input peer w-full rounded-lg border border-slate-300 bg-transparent px-3 py-2 pl-9 placeholder:text-slate-400/70 hover:border-slate-400 focus:border-primary dark:border-navy-450 dark:hover:border-navy-400 dark:focus:border-accent"
                  />
                </label>
            )}      
<label className="block">
  <span>Amount</span>
      <input
        type="text"
        placeholder="Amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        className="form-input peer w-full rounded-lg border border-slate-300 bg-transparent px-3 py-2 pl-9 placeholder:text-slate-400/70 hover:border-slate-400 focus:border-primary dark:border-navy-450 dark:hover:border-navy-400 dark:focus:border-accent"
      />
    </label>
    {/* <label className="block ">
    <span>Branch Name</span>
  
           <select
            id="branch_id"
            name="branch_id"
           value={branch_id}
           onChange={(e) => setbranch_id(e.target.value)}
            // onChange={(e) => setSelectedBranches(e.target.value)}
            className=" block w-full rounded-md border border-slate-300 bg-white py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm dark:border-navy-600 dark:bg-navy-700 dark:text-navy-100"
          >
            <option value="">Select a Branch</option>
            {BranchData.map((branch) => (
    <option key={branch.id} value={branch.branch_id}>
      {branch.branch_name}
    </option>
  ))}
          </select>
 </label> */}
  <div className="relative w-full" ref={dropdownRef}>
      <label htmlFor="mobile" className="block text-sm font-medium text-slate-700 dark:text-navy-100">
       Branch Name
      </label>

      {/* Dropdown Button */}
      <div
        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
        className="mt-1 flex w-full items-center justify-between rounded-md border border-slate-300 bg-white py-2 px-3 shadow-sm cursor-pointer focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm dark:border-navy-600 dark:bg-navy-700 dark:text-navy-100"
      >
        {branch_id || "Select a branch"}
        <span className="ml-2">&#9662;</span> {/* Down arrow */}
      </div>

      {/* Dropdown Content */}
      {isDropdownOpen && (
        <div className="absolute z-10 mt-1 w-full rounded-md border border-gray-300 bg-white shadow-lg dark:border-navy-600 dark:bg-navy-700">
          {/* Search Bar Inside Dropdown */}
          <input
            type="text"
            value={searchBranch}
            onChange={handleSearchBranch}
            placeholder="Search..."
            className="w-full border-b border-gray-300 px-3 py-2 text-sm focus:outline-none dark:border-navy-600 dark:bg-navy-700 dark:text-navy-100"
          />

          {/* Dropdown Options */}
          <ul className="max-h-48 overflow-y-auto">
            {filteredBranch.length > 0 ? (
              filteredBranch.map((branch) => (
                <li
                  key={branch.id}
                  onClick={() => handleSelectBranch(branch)}
                  className="cursor-pointer px-3 py-2 hover:bg-indigo-500 hover:text-white dark:hover:bg-navy-500"
                >
                   {branch.text}
                </li>
              ))
            ) : (
              <li className="px-3 py-2 text-gray-500 dark:text-gray-400">No results found</li>
            )}
          </ul>
        </div>
      )}
    </div>

 </>
)}
{( accountType === 'income') && (
  <>
  <label className="block">
  <span>Amount</span>
      <input
        type="text"
        placeholder="Amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        className="form-input peer w-full rounded-lg border border-slate-300 bg-transparent px-3 py-2 pl-9 placeholder:text-slate-400/70 hover:border-slate-400 focus:border-primary dark:border-navy-450 dark:hover:border-navy-400 dark:focus:border-accent"
      />
    </label>
    {/* <label className="block ">
    <span>Branch Name</span>
  
           <select
            id="branch_id"
            name="branch_id"
           value={branch_id}
           onChange={(e) => setbranch_id(e.target.value)}
            // onChange={(e) => setSelectedBranches(e.target.value)}
            className=" block w-full rounded-md border border-slate-300 bg-white py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm dark:border-navy-600 dark:bg-navy-700 dark:text-navy-100"
          >
            <option value="">Select a Branch</option>
            {BranchData.map((branch) => (
    <option key={branch.id} value={branch.branch_id}>
      {branch.branch_name}
    </option>
    
  ))}
          </select>
 </label> */}
  <div className="relative w-full" ref={dropdownRef}>
      <label htmlFor="mobile" className="block text-sm font-medium text-slate-700 dark:text-navy-100">
       Branch Name
      </label>

      {/* Dropdown Button */}
      <div
        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
        className="mt-1 flex w-full items-center justify-between rounded-md border border-slate-300 bg-white py-2 px-3 shadow-sm cursor-pointer focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm dark:border-navy-600 dark:bg-navy-700 dark:text-navy-100"
      >
        {/* {selectedBranch || "Select a branch"} */}
        {branch_id || "Select a branch"}
        <span className="ml-2">&#9662;</span> {/* Down arrow */}
      </div>

      {/* Dropdown Content */}
      {isDropdownOpen && (
        <div className="absolute z-10 mt-1 w-full rounded-md border border-gray-300 bg-white shadow-lg dark:border-navy-600 dark:bg-navy-700">
          {/* Search Bar Inside Dropdown */}
          <input
            type="text"
            value={searchBranch}
            onChange={handleSearchBranch}
            placeholder="Search..."
            className="w-full border-b border-gray-300 px-3 py-2 text-sm focus:outline-none dark:border-navy-600 dark:bg-navy-700 dark:text-navy-100"
          />

          {/* Dropdown Options */}
          <ul className="max-h-48 overflow-y-auto">
            {filteredBranch.length > 0 ? (
              filteredBranch.map((branch) => (
                <li
                  key={branch.id}
                  onClick={() => handleSelectBranch(branch)}
                  className="cursor-pointer px-3 py-2 hover:bg-indigo-500 hover:text-white dark:hover:bg-navy-500"
                >
                   {branch.text}
                </li>
              ))
            ) : (
              <li className="px-3 py-2 text-gray-500 dark:text-gray-400">No results found</li>
            )}
          </ul>
        </div>
      )}
    </div>

 </>
)}
    </div>

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



