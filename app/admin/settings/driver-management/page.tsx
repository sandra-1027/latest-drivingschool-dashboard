
'use client'
import withAuth from '@/hoc/withAuth';
import React, { useState } from 'react'
import { FaFilter } from 'react-icons/fa';
import { IoMdRefresh } from 'react-icons/io';
import { LuRefreshCw } from 'react-icons/lu';
import Add from './add';

const page = () => {
  const [showmodal,setShowmodal]=useState(false);
  const togglemodal =()=>{
    setShowmodal((prev)=> !prev)
  }

    const [attendanceData, setAttendanceData] = useState([
    {
      id: 1,
      name: "john",
      date: "2024-11-01",
      checkinTime: "08:30 AM",
      checkoutTime: "10:30 AM",
      paymentDetails: [
        { term: "1st Term", status: "Paid" },
        { term: "2nd Term", status: "Pending" },
      ],
      status: "active",
    },
    {
      id: 2,
      name: "Riya",
      date: "2024-11-02",
      checkinTime: "09:00 AM",
      checkoutTime: "11:00 AM",
      paymentDetails: [
        { term: "1st Term", status: "Pending" },
        { term: "2nd Term", status: "Pending" },
      ],
      status: "inactive",
    },
    {
      id: 3,
      name: "Smith",
      date: "2024-11-03",
      checkinTime: "08:45 AM",
      checkoutTime: "10:45 AM",
      paymentDetails: [
        { term: "1st Term", status: "Paid" },
        { term: "2nd Term", status: "Paid" },
      ],
      status: "completed",
    },
  ]);

  const [filterStatus,setFilterStatus] = useState("all");
  
  const [currentPage,setCurrentPage] = useState(1);
  const [entriesPerPage] = useState(10);
  const [filters, setFilters] = useState({ driverName: '', status: '' });
  
 
  const handlePaymentStatusChange = (
    id: number,
    term: string,
    newStatus: string
  ) => {
    setAttendanceData((prevData) =>
      prevData.map((item) =>
        item.id === id
          ? {
              ...item,
              paymentDetails: item.paymentDetails.map((payment) =>
                payment.term === term
                  ? { ...payment, status: newStatus }
                  : payment
              ),
            }
          : item
      )
    );
  };

  const filteredData =
    filterStatus === "all"
      ? attendanceData
      : attendanceData.filter((item) => item.status === filterStatus);

  
    // Calculate pagination
    const indexOfLastEntry = currentPage * entriesPerPage;
    const indexOfFirstEntry = indexOfLastEntry - entriesPerPage;
    const currentEntries = filteredData.slice(indexOfFirstEntry, indexOfLastEntry);
    const totalEntries = filteredData.length;
  
    // Pagination logic
    const totalPages = Math.ceil(totalEntries / entriesPerPage);

    
    
  
  return (
    <div className=" w-full  pb-8">
 
        
    <div className="flex items-center space-x-4 py-5 lg:py-6">
    <h2 className="text-xl font-medium text-slate-800 dark:text-navy-50 lg:text-2xl">
    Driver Management
    </h2>
    <div className="hidden h-full py-1 sm:flex">
      <div className="h-full w-px bg-slate-300 dark:bg-navy-600" />
    </div>
    <ul className="hidden flex-wrap items-center space-x-2 sm:flex">
      <li className="flex items-center space-x-2">
        <a className="text-primary transition-colors hover:text-primary-focus dark:text-accent-light dark:hover:text-accent" href="#">Home
        </a>
        <svg xmlns="http://www.w3.org/2000/svg" className="size-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </li>
      <li>Settings</li>
      <svg xmlns="http://www.w3.org/2000/svg" className="size-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      <li>Driver Management</li>
    </ul>
  </div>


  <div className="grid grid-cols-1 gap-4 sm:gap-5 lg:gap-6 mb-4" >
  <div className="card px-4 pb-4 sm:px-5 pt-4">
  <div className="p-4 rounded-lg bg-slate-100 dark:bg-navy-800">
    <form>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        {/* Driver Name Select */}
        <div>
          <label
            htmlFor="driverName"
            className="block text-sm font-medium text-slate-700 dark:text-navy-100"
          >
            Driver Name
          </label>
          <select
            id="driverName"
            name="driverName"
            value={filters.driverName}
            onChange={(e) => setFilters({ ...filters, driverName: e.target.value })}
            className="mt-1 block w-full rounded-md border border-slate-300 bg-white py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm dark:border-navy-600 dark:bg-navy-700 dark:text-navy-100"
          >
            <option value="">All Drivers</option>
          
          </select>
        </div>
        {/* Status Select */}
        <div>
          <label
            htmlFor="status"
            className="block text-sm font-medium text-slate-700 dark:text-navy-100"
          >
            Status
          </label>
          <select
            id="status"
            name="status"
            value={filters.status}
            onChange={(e) => setFilters({ ...filters, status: e.target.value })}
            className="mt-1 block w-full rounded-md border border-slate-300 bg-white py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm dark:border-navy-600 dark:bg-navy-700 dark:text-navy-100"
          >
            <option value="">All Status</option>
            <option value="active">Active</option>
            <option value="inactive">Inactive</option>
          </select>
        </div>
      </div>
      {/* Buttons */}
      <div className="mt-4 flex space-x-4">
        <button
          type="submit"
          className="inline-flex justify-center rounded-md border border-transparent bg-primary py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
        ><i className='fa fa-filter' style={{marginTop:'3px',marginRight:'3px'}}></i>
          Filter
        </button>
        <button
          type="button"
          className="inline-flex justify-center rounded-md border border-gray-300 bg-warning py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-warningfocus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
        ><i className='fa fa-refresh' style={{marginTop:'3px',marginRight:'3px'}}></i>
          Reset
        </button>
      </div>
    </form>
  </div>
    </div>
  </div>

  <div className="flex items-center justify-between py-5 lg:py-6">
                <span className="text-lg font-medium text-slate-800 dark:text-navy-50">
                   Driver Details
                </span>
             
                <button className="px-4 py-2 bg-[#4f46e5] text-white rounded-md" onClick={togglemodal}>  
          Add Driver
                </button>
                <Add showmodal={showmodal} togglemodal={togglemodal}/>
            </div>

                             
  <div className="grid grid-cols-1 gap-4 sm:gap-5 lg:gap-6" >
  <div className="card px-4 pb-4 sm:px-5">
  <div className="mt-5">

  {/* <div className="flex items-center justify-between py-5 lg:py-6"> */}
  <div className="gridjs-head">
            <div className="gridjs-search">
              <input
                type="search"
                placeholder="Type a keyword..."
                aria-label="Type a keyword..."
                className="gridjs-input gridjs-search-input"
                
              />
            </div>
          </div>
          
        <div className="overflow-x-auto w-full">
  <table className="is-hoverable w-full text-left">
            <thead>
              <tr>
                <th className="whitespace-nowrap rounded-l-lg bg-slate-200 px-3 py-3 font-semibold uppercase text-slate-800 dark:bg-navy-800 dark:text-navy-100 lg:px-5">
                SL No
                </th>
                <th className="whitespace-nowrap bg-slate-200 px-4 py-3 font-semibold uppercase text-slate-800 dark:bg-navy-800 dark:text-navy-100 lg:px-5">
                Driver Name
                </th>
                <th className="whitespace-nowrap bg-slate-200 px-4 py-3 font-semibold uppercase text-slate-800 dark:bg-navy-800 dark:text-navy-100 lg:px-5">
                Mobile
                </th>
                <th className="whitespace-nowrap bg-slate-200 px-4 py-3 font-semibold uppercase text-slate-800 dark:bg-navy-800 dark:text-navy-100 lg:px-5">
                Place
                </th>
                <th className="whitespace-nowrap bg-slate-200 px-4 py-3 font-semibold uppercase text-slate-800 dark:bg-navy-800 dark:text-navy-100 lg:px-5">
                Driving Licence No
                </th>            
                <th className="whitespace-nowrap bg-slate-200 px-4 py-3 font-semibold uppercase text-slate-800 dark:bg-navy-800 dark:text-navy-100 lg:px-5">
                Date
                </th> 
                <th className="whitespace-nowrap rounded-r-lg bg-slate-200 px-3 py-3 font-semibold uppercase text-slate-800 dark:bg-navy-800 dark:text-navy-100 lg:px-5">
                Action
                </th> 
          
              </tr>
            </thead>
            <tbody>
            {filteredData.map((item, index) => (
              <tr key={item.id} className="border-y border-transparent border-b-slate-200 dark:border-b-navy-500">
                <td className="whitespace-nowrap rounded-l-lg px-4 py-3 sm:px-5">
                {index + 1}
                </td>
                <td className="whitespace-nowrap px-4 py-3 sm:px-5">
                {item.date}
                </td>
                <td className="whitespace-nowrap px-4 py-3 sm:px-5">
                {item.name}
                </td>
                <td className="whitespace-nowrap rounded-r-lg px-4 py-3 sm:px-5">
                {item.checkinTime}
                </td>
                <td className="whitespace-nowrap rounded-r-lg px-4 py-3 sm:px-5">
                {item.checkinTime}
                </td>
                <td className="whitespace-nowrap rounded-r-lg px-4 py-3 sm:px-5">
                {item.date}
                </td>
                <td className="whitespace-nowrap rounded-r-lg px-4 py-3 sm:px-5">
                <span>
                      <div className="flex justify-center space-x-2">
                        <button className="btn size-8 p-0 text-info hover:bg-info/20 focus:bg-info/20 active:bg-info/25">
                          <i className="fa fa-edit" />
                        </button>
                        <button className="btn size-8 p-0 text-error hover:bg-error/20 focus:bg-error/20 active:bg-error/25">
                          <i className="fa fa-trash-alt" />
                        </button>
                      </div>
                    </span>
                </td>
              </tr>
  
               ))}
            </tbody>
          </table>
        </div>

        <div className="flex justify-between items-center mt-4">
        <div>
          Showing {indexOfFirstEntry + 1} to {Math.min(indexOfLastEntry, totalEntries)} of {totalEntries} entries
        </div>
        <div>
          <button
            onClick={() => setCurrentPage(1)}
            disabled={currentPage === 1}
            className="px-4 py-2 border rounded-md"
          >
            First
          </button>
          <button
            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
            disabled={currentPage === 1}
            className="px-4 py-2 border rounded-md"
          >
            Previous
          </button>
          {Array.from({ length: totalPages }, (_, i) => (
            <button
              key={i + 1}
              onClick={() => setCurrentPage(i + 1)}
              className={`px-4 py-2 border rounded-md ${currentPage === i + 1 ? 'bg-[#4f46e5] text-white' : ''}`}
            >
              {i + 1}
            </button>
          ))}
          <button
            onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
            disabled={currentPage === totalPages}
            className="px-4 py-2 border rounded-md"
          >
            Next
          </button>
          <button
            onClick={() => setCurrentPage(totalPages)}
            disabled={currentPage === totalPages}
            className="px-4 py-2 border rounded-md"
          >
            Last
          </button>
        </div>
      </div>
      </div>
  </div>
  </div>
  </div>
  
  )
}

export default page