// "use client";

// import { useState } from "react";
// import "./list.css";


// const StudentList = () => {
//   const [attendanceData, setAttendanceData] = useState([
//     {
//       id: 1,
//       name: "john",
//       date: "2024-11-01",
//       checkinTime: "08:30 AM",
//       checkoutTime: "10:30 AM",
//       paymentDetails: [
//         { term: "1st Term", status: "Paid" },
//         { term: "2nd Term", status: "Pending" },
//       ],
//       status: "active",
//     },
//     {
//       id: 2,
//       name: "Riya",
//       date: "2024-11-02",
//       checkinTime: "09:00 AM",
//       checkoutTime: "11:00 AM",
//       paymentDetails: [
//         { term: "1st Term", status: "Pending" },
//         { term: "2nd Term", status: "Pending" },
//       ],
//       status: "inactive",
//     },
//     {
//       id: 3,
//       name: "Smith",
//       date: "2024-11-03",
//       checkinTime: "08:45 AM",
//       checkoutTime: "10:45 AM",
//       paymentDetails: [
//         { term: "1st Term", status: "Paid" },
//         { term: "2nd Term", status: "Paid" },
//       ],
//       status: "completed",
//     },
//   ]);

//   const [filterStatus, setFilterStatus] = useState("all");

//   const handlePaymentStatusChange = (
//     id: number,
//     term: string,
//     newStatus: string
//   ) => {
//     setAttendanceData((prevData) =>
//       prevData.map((item) =>
//         item.id === id
//           ? {
//               ...item,
//               paymentDetails: item.paymentDetails.map((payment) =>
//                 payment.term === term
//                   ? { ...payment, status: newStatus }
//                   : payment
//               ),
//             }
//           : item
//       )
//     );
//   };

//   const filteredData =
//     filterStatus === "all"
//       ? attendanceData
//       : attendanceData.filter((item) => item.status === filterStatus);

//   return (
//     <div className="dark:bg-[#292e37] pl-4">
//       <div className="flex items-center space-x-4 py-5 lg:py-6">
//         <h2 className="text-xl font-medium text-slate-800 dark:text-navy-50 lg:text-2xl">
//           Student List
//         </h2>
//         <div className="hidden h-full py-1 sm:flex">
//           <div className="h-full w-px bg-slate-300 dark:bg-navy-600" />
//         </div>
//         <ul className="hidden flex-wrap items-center space-x-2 sm:flex">
//           <li className="flex items-center space-x-2">
//             <a
//               className="text-primary transition-colors hover:text-primary-focus dark:text-accent-light dark:hover:text-accent"
//               href="#"
//             >
//               Student
//             </a>
//             <svg
//               x-ignore
//               xmlns="http://www.w3.org/2000/svg"
//               className="size-4"
//               fill="none"
//               viewBox="0 0 24 24"
//               stroke="currentColor"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth={2}
//                 d="M9 5l7 7-7 7"
//               />
//             </svg>
//           </li>
//           <li>Student List</li>
//         </ul>
//       </div>
//       <div className="max-w-full sm:max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl mx-auto p-4">
//         <div className="flex justify-end mb-4">
//           {/* Dropdown filter */}
//           <select
//             value={filterStatus}
//             onChange={(e) => setFilterStatus(e.target.value)}
//             className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-300"
//             // className={`btn bg-default/10 font-medium text-default hover:bg-default/20 focus:bg-default/20 active:bg-default/25 dark:bg-default-light/10 dark:text-default-light dark:hover:bg-default-light/20 dark:focus:bg-default-light/20 dark:active:bg-default-light/25`}
//           >
//             <option value="all">All</option>
//             <option value="active">Active</option>
//             <option value="inactive">Inactive</option>
//             <option value="completed">Completed</option>
//           </select>
//         </div>
//         <div className="overflow-x-auto w-full">
//           <table className="min-w-full bg-white border border-gray-200 dark:bg-[#292e37]">
//             <thead>
//               <tr className="bg-gray-200 text-gray-600 text-left text-sm leading-normal dark:bg-[#292e37] dark:text-[#FFFFFFCC] border-b border-gray-400">
//                 <th className="py-3 px-6 font-semibold">SL No</th>
//                 <th className="py-3 px-6 font-semibold">Date</th>
//                 <th className="py-3 px-6 font-semibold">Name</th>
//                 <th className="py-3 px-6 font-semibold">Check-In Time</th>
//                 <th className="py-3 px-6 font-semibold">Check-Out Time</th>
//                 <th className="py-3 px-6 font-semibold">Payment Details</th>
//                 <th className="py-3 px-6 font-semibold">Status</th>
//               </tr>
//             </thead>
//             <tbody className="text-gray-700 text-sm dark:text-[#FFFFFFCC]">
//               {filteredData.map((item, index) => (
//                 <tr key={item.id} className="border-b border-gray-200">
//                   <td className="py-3 px-6">{index + 1}</td>
//                   <td className="py-3 px-6">{item.date}</td>
//                   <td className="py-3 px-6">{item.name}</td>
//                   <td className="py-3 px-6">{item.checkinTime}</td>
//                   <td className="py-3 px-6">{item.checkoutTime}</td>
//                   <td className="py-3 px-6">
//                     <div>
//                       {item.paymentDetails.map((payment, idx) => (
//                         <div
//                           key={idx}
//                           className="flex justify-between items-center py-2"
//                         >
//                           {/* Status Label */}
//                           <span className="font-semibold text-gray-700">
//                             {payment.term}
//                           </span>
//                           {/* Status Button */}
//                           <button
//                             className={`px-4 py-2 rounded font-semibold ${
//                               payment.status === "Paid"
//                                 ? "bg-green-500 text-white"
//                                 : "bg-red-500 text-white"
//                             }`}
//                             onClick={() =>
//                               handlePaymentStatusChange(
//                                 item.id,
//                                 payment.term,
//                                 payment.status === "Paid" ? "Pending" : "Paid"
//                               )
//                             }
//                           >
//                             {payment.status}
//                           </button>
//                         </div>
//                       ))}
//                     </div>
//                   </td>
//                   <td className="py-3 px-6">{item.status}</td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default StudentList;


'use client'
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
    Student List
    </h2>
    <div className="hidden h-full py-1 sm:flex">
      <div className="h-full w-px bg-slate-300 dark:bg-navy-600" />
    </div>
    <ul className="hidden flex-wrap items-center space-x-2 sm:flex">
      <li className="flex items-center space-x-2">
        <a className="text-primary transition-colors hover:text-primary-focus dark:text-accent-light dark:hover:text-accent" href="#">Student
        </a>
        <svg xmlns="http://www.w3.org/2000/svg" className="size-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </li>
      <li>Student List</li>
    </ul>
  </div>
  <div className="flex justify-end mb-4">
           {/* Dropdown filter */}
           <select
            value={filterStatus}
            onChange={(e) => setFilterStatus(e.target.value)}
            className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-300"
            // className={`btn bg-default/10 font-medium text-default hover:bg-default/20 focus:bg-default/20 active:bg-default/25 dark:bg-default-light/10 dark:text-default-light dark:hover:bg-default-light/20 dark:focus:bg-default-light/20 dark:active:bg-default-light/25`}
          >
            <option value="all">All</option>
            <option value="active">Active</option>
            <option value="inactive">Inactive</option>
            <option value="completed">Completed</option>
          </select>
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
                Date
                </th>
                <th className="whitespace-nowrap bg-slate-200 px-4 py-3 font-semibold uppercase text-slate-800 dark:bg-navy-800 dark:text-navy-100 lg:px-5">
                Name
                </th>
                <th className="whitespace-nowrap bg-slate-200 px-4 py-3 font-semibold uppercase text-slate-800 dark:bg-navy-800 dark:text-navy-100 lg:px-5">
                Check-In Time
                </th>
                <th className="whitespace-nowrap bg-slate-200 px-4 py-3 font-semibold uppercase text-slate-800 dark:bg-navy-800 dark:text-navy-100 lg:px-5">
                Check-Out Time
                </th>            
                <th className="whitespace-nowrap bg-slate-200 px-4 py-3 font-semibold uppercase text-slate-800 dark:bg-navy-800 dark:text-navy-100 lg:px-5">
                Payment Details
                </th> 
                <th className="whitespace-nowrap rounded-r-lg bg-slate-200 px-3 py-3 font-semibold uppercase text-slate-800 dark:bg-navy-800 dark:text-navy-100 lg:px-5">
                Status
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
