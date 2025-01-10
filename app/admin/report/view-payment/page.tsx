
'use client'
import withAuth from '@/hoc/withAuth';
import React, { useState } from 'react'

const page = () => {
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
    
      const [filterStatus, setFilterStatus] = useState("all");
    
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
  return (
    <div className=" w-full  pb-8">
 
        
    <div className="flex items-center space-x-4 py-5 lg:py-6">
    <h2 className="text-xl font-medium text-slate-800 dark:text-navy-50 lg:text-2xl">
    View Payment Details
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
      <li>Report</li>
      <svg xmlns="http://www.w3.org/2000/svg" className="size-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      <li>View Payment Details</li>
    </ul>
  </div>

  <div className="grid grid-cols-1 gap-4 sm:gap-5 lg:gap-6" >
  <div className="card px-4 pb-4 sm:px-5">
  <div className="mt-5">
        {/* <div className="is-scrollbar-hidden min-w-full overflow-x-auto"> */}
        <div className="overflow-x-auto w-full">
  <table className="is-hoverable w-full text-left">
            <thead>
              <tr>
                <th className="whitespace-nowrap rounded-l-lg bg-slate-200 px-3 py-3 font-semibold uppercase text-slate-800 dark:bg-navy-800 dark:text-navy-100 lg:px-5">
                SL No
                </th>
                <th className="whitespace-nowrap bg-slate-200 px-4 py-3 font-semibold uppercase text-slate-800 dark:bg-navy-800 dark:text-navy-100 lg:px-5">
                Total Amount
                </th>
                <th className="whitespace-nowrap bg-slate-200 px-4 py-3 font-semibold uppercase text-slate-800 dark:bg-navy-800 dark:text-navy-100 lg:px-5">
                Pay Amount
                </th>
                <th className="whitespace-nowrap bg-slate-200 px-4 py-3 font-semibold uppercase text-slate-800 dark:bg-navy-800 dark:text-navy-100 lg:px-5">
                Due Amount
                </th>
                <th className="whitespace-nowrap bg-slate-200 px-4 py-3 font-semibold uppercase text-slate-800 dark:bg-navy-800 dark:text-navy-100 lg:px-5">
                Payment Status
                </th>            
                <th className="whitespace-nowrap bg-slate-200 px-4 py-3 font-semibold uppercase text-slate-800 dark:bg-navy-800 dark:text-navy-100 lg:px-5">
                Payment Method
                </th> 
                <th className="whitespace-nowrap rounded-r-lg bg-slate-200 px-3 py-3 font-semibold uppercase text-slate-800 dark:bg-navy-800 dark:text-navy-100 lg:px-5">
                Date
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
                {item.checkoutTime}
                </td>
                <td className="whitespace-nowrap rounded-r-lg px-4 py-3 sm:px-5">
                <div>
                       {item.paymentDetails.map((payment, idx) => (
                        <div
                          key={idx}
                          className="flex justify-between items-center py-2"
                        >
                          {/* Status Label */}
                          <span className="font-semibold text-gray-700">
                            {payment.term}
                          </span>
                          {/* Status Button */}
                          <button
                            className={`px-4 py-2 rounded font-semibold ${
                              payment.status === "Paid"
                                ? "bg-green-500 text-white"
                                : "bg-red-500 text-white"
                            }`}
                            onClick={() =>
                              handlePaymentStatusChange(
                                item.id,
                                payment.term,
                                payment.status === "Paid" ? "Pending" : "Paid"
                              )
                            }
                          >
                            {payment.status}
                          </button>
                        </div>
                      ))}
                    </div>
                </td>
                <td className="whitespace-nowrap rounded-r-lg px-4 py-3 sm:px-5">
                {item.status}
                </td>
              </tr>
  
               ))}
            </tbody>
          </table>
        </div>
      </div>
  </div>
  </div>
  </div>
  
  )
}

export default page

