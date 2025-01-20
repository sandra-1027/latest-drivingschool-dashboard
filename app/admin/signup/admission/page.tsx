// 'use client'
// import React, { useState } from 'react'
// import { FaEdit } from 'react-icons/fa';
// import Create from './Create';

// const Admission = () => {

//       const [attendanceData, setAttendanceData] = useState([
//         {
//           id: 1,
//           name: "john",
//           date: "2024-11-01",
//           gender:"male",
//           bloodgrp:"A+",
//           email:"john@gmail.com",
//           paymentDetails: [
//             { term: "1st Term", status: "Paid" },
//             { term: "2nd Term", status: "Pending" },
//           ],
//           status: "active",
//         },
//         {
//           id: 2,
//           name: "Riya",
//           date: "2024-11-02",
//           gender:"female",
//           bloodgrp:"A+",
//           email:"riya@gmail.com",
//           paymentDetails: [
//             { term: "1st Term", status: "Pending" },
//             { term: "2nd Term", status: "Pending" },
//           ],
//           status: "inactive",
//         },
//         {
//           id: 3,
//           name: "Smith",
//           date: "2024-11-03",
//           gender:"male",
//           bloodgrp:"o+",
//           email:"smith@gmail.com",
//           paymentDetails: [
//             { term: "1st Term", status: "Paid" },
//             { term: "2nd Term", status: "Paid" },
//           ],
//           status: "completed",
//         },
//       ]);
//       const [showModal, setShowModal] = useState(false);
//       const [editModal, seteditModal] = useState(false);
//       const toggleModal = () => {
//         setShowModal((prev) => !prev);
//       };
//       const toggleEditModal = () => {
//         seteditModal((prev) => !prev);
//       };
//       const [filterStatus, setFilterStatus] = useState("all");
//       const filteredData =
//       filterStatus === "all"
//         ? attendanceData
//         : attendanceData.filter((item) => item.status === filterStatus);
//           const [currentPage,setCurrentPage] = useState(1);
//   const [entriesPerPage] = useState(10);
  
 
 

  
//     // Calculate pagination
//     const indexOfLastEntry = currentPage * entriesPerPage;
//     const indexOfFirstEntry = indexOfLastEntry - entriesPerPage;
//     const currentEntries = filteredData.slice(indexOfFirstEntry, indexOfLastEntry);
//     const totalEntries = filteredData.length;
  
//     // Pagination logic
//     const totalPages = Math.ceil(totalEntries / entriesPerPage);
//   return (
//     <div className=" w-full  pb-8">

//     <div className="flex items-center space-x-4 py-5 lg:py-6">
//     <h2 className="text-xl font-medium text-slate-800 dark:text-navy-50 lg:text-2xl">
//     Admission
//     </h2>
//     <div className="hidden h-full py-1 sm:flex">
//       <div className="h-full w-px bg-slate-300 dark:bg-navy-600" />
//     </div>
//     <ul className="hidden flex-wrap items-center space-x-2 sm:flex">
//       <li className="flex items-center space-x-2">
//         <a className="text-primary transition-colors hover:text-primary-focus dark:text-accent-light dark:hover:text-accent" href="#">Home
//         </a>
//         <svg xmlns="http://www.w3.org/2000/svg" className="size-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
//         </svg>
//       </li>
//       <li>Admission</li>
//     </ul>
//   </div>
//   {/* <div className="flex justify-end mb-4">

//            <select
//             value={filterStatus}
//             onChange={(e) => setFilterStatus(e.target.value)}
//             className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-300"

//           >
//             <option value="all">All</option>
//             <option value="active">Active</option>
//             <option value="inactive">Inactive</option>
//             <option value="completed">Completed</option>
//           </select>
//         </div> */}

// <div className="flex justify-end mb-4">
// <button
//  onClick={toggleModal}
//  className="btn bg-primary font-medium text-white hover:bg-primary-focus focus:bg-primary-focus active:bg-primary-focus/90 dark:bg-accent dark:hover:bg-accent-focus dark:focus:bg-accent-focus dark:active:bg-accent/90">
//   Add Admission
// </button>
// <Create showModal={showModal} toggleModal={toggleModal} />
// </div>
// {/* {showModal && (
//         <Create showModal={showModal}  toggleModal={ toggleModal}/>
//       )} */}
//   <div className="grid grid-cols-1 gap-4 sm:gap-5 lg:gap-6" >
//   <div className="card px-4 pb-4 sm:px-5">
//   <div className="mt-5">

 

//   <div className="gridjs-head">
//             <div className="gridjs-search">
//               <input
//                 type="search"
//                 placeholder="Type a keyword..."
//                 aria-label="Type a keyword..."
//                 className="gridjs-input gridjs-search-input"
                
//               />
//             </div>
//           </div>
    
         

//         {/* <div className="is-scrollbar-hidden min-w-full overflow-x-auto"> */}
//         <div className="overflow-x-auto w-full">
//   <table className="is-hoverable w-full text-left">
//             <thead>
//               <tr>
//                 <th className="whitespace-nowrap rounded-l-lg bg-slate-200 px-3 py-3 font-semibold uppercase text-slate-800 dark:bg-navy-800 dark:text-navy-100 lg:px-5">
//                 SL No
//                 </th>
//                 <th className="whitespace-nowrap bg-slate-200 px-4 py-3 font-semibold uppercase text-slate-800 dark:bg-navy-800 dark:text-navy-100 lg:px-5">
//                 User Name
//                 </th>
//                 <th className="whitespace-nowrap bg-slate-200 px-4 py-3 font-semibold uppercase text-slate-800 dark:bg-navy-800 dark:text-navy-100 lg:px-5">
//                 Email
//                 </th>
//                 <th className="whitespace-nowrap bg-slate-200 px-4 py-3 font-semibold uppercase text-slate-800 dark:bg-navy-800 dark:text-navy-100 lg:px-5">
//                 Blood_Group
//                 </th>
//                 <th className="whitespace-nowrap bg-slate-200 px-4 py-3 font-semibold uppercase text-slate-800 dark:bg-navy-800 dark:text-navy-100 lg:px-5">
//                 Gender
//                 </th>
//                 <th className="whitespace-nowrap bg-slate-200 px-4 py-3 font-semibold uppercase text-slate-800 dark:bg-navy-800 dark:text-navy-100 lg:px-5">
//                 Date
//                 </th>
//                 <th className="whitespace-nowrap rounded-r-lg bg-slate-200 px-3 py-3 font-semibold uppercase text-slate-800 dark:bg-navy-800 dark:text-navy-100 lg:px-5">
//                Action
//                 </th>

//               </tr>
//             </thead>
//             <tbody>
//             {filteredData.map((item, index) => (
//               <tr key={item.id} className="border-y border-transparent border-b-slate-200 dark:border-b-navy-500">
//                 <td className="whitespace-nowrap rounded-l-lg px-4 py-3 sm:px-5">
//                 {index + 1}
//                 </td>
//                 <td className="whitespace-nowrap px-4 py-3 sm:px-5">
//                 {item.name}
//                 </td>
//                 <td className="whitespace-nowrap px-4 py-3 sm:px-5">
//                 {item.email}
//                 </td>
//                 <td className="whitespace-nowrap rounded-r-lg px-4 py-3 sm:px-5">
//                 {item.bloodgrp}
//                 </td>
//                 <td className="whitespace-nowrap rounded-r-lg px-4 py-3 sm:px-5">
//                 {item.gender}
//                 </td>
//                 <td className="whitespace-nowrap rounded-r-lg px-4 py-3 sm:px-5">
//                 {item.date}
//                 </td>
//                 <td className="whitespace-nowrap rounded-r-lg px-4 py-3 sm:px-5">
//                 {/* <FaEdit className='btn size-8 p-0 text-info hover:bg-info/20 focus:bg-info/20 active:bg-info/25'/> */}
//                 <button 
//                 className="btn size-8 p-0 text-info hover:bg-info/20 focus:bg-info/20 active:bg-info/25">
//   <i className="fa fa-edit" />
// </button>
// <button className="btn size-8 p-0 text-error hover:bg-error/20 focus:bg-error/20 active:bg-error/25">
//   <i className="fa fa-trash-alt" />
// </button>

//                 </td>
//               </tr>

// ))}
//             </tbody>
//           </table>
//         </div>
//  {/* <div className="flex justify-between items-center mt-4">
// <div>
//   Showing {indexOfFirstEntry + 1} to {Math.min(indexOfLastEntry, totalEntries)} of {totalEntries} entries
// </div>
// <div>
//   <button
//     onClick={() => setCurrentPage(1)}
//     disabled={currentPage === 1}
//     className="px-4 py-2 border rounded-md"
//   >
//     First
//   </button>
//   <button
//     onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
//     disabled={currentPage === 1}
//     className="px-4 py-2 border rounded-md"
//   >
//     Previous
//   </button>
//   {Array.from({ length: totalPages }, (_, i) => (
//     <button
//       key={i + 1}
//       onClick={() => setCurrentPage(i + 1)}
//       className={`px-4 py-2 border rounded-md ${currentPage === i + 1 ? 'bg-[#4f46e5] text-white' : ''}`}
//     >
//       {i + 1}
//     </button>
//   ))}
//   <button
//     onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
//     disabled={currentPage === totalPages}
//     className="px-4 py-2 border rounded-md"
//   >
//     Next
//   </button>
//   <button
//     onClick={() => setCurrentPage(totalPages)}
//     disabled={currentPage === totalPages}
//     className="px-4 py-2 border rounded-md"
//   >
//     Last
//   </button>
// </div>
// </div>  */}
// <div className="flex justify-between items-center mt-4 flex-wrap">
//   <div className="flex-1">
//     Showing {indexOfFirstEntry + 1} to {Math.min(indexOfLastEntry, totalEntries)} of {totalEntries} entries
//   </div>
//   <div className="flex flex-wrap items-center space-x-2">
//     <button
//       onClick={() => setCurrentPage(1)}
//       disabled={currentPage === 1}
//       className="px-3 py-2 border rounded-md text-sm"
//     >
//       First
//     </button>
//     <button
//       onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
//       disabled={currentPage === 1}
//       className="px-3 py-2 border rounded-md text-sm"
//     >
//       Previous
//     </button>
//     {Array.from({ length: totalPages }, (_, i) => (
//       <button
//         key={i + 1}
//         onClick={() => setCurrentPage(i + 1)}
//         className={`px-3 py-2 border rounded-md text-sm ${currentPage === i + 1 ? 'bg-[#4f46e5] text-white' : ''}`}
//       >
//         {i + 1}
//       </button>
//     ))}
//     <button
//       onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
//       disabled={currentPage === totalPages}
//       className="px-3 py-2 border rounded-md text-sm"
//     >
//       Next
//     </button>
//     <button
//       onClick={() => setCurrentPage(totalPages)}
//       disabled={currentPage === totalPages}
//       className="px-3 py-2 border rounded-md text-sm"
//     >
//       Last
//     </button>
//   </div>
// </div>
//        </div>
//    </div>
//    </div>
//    </div>



//   )
// }

// export default Admission















'use client';
import React, { useState, useEffect } from 'react';

import Create from './Create';
import { useAuth } from '@/app/context/AuthContext';
interface Admission {
  id: number;
  user_name: string;
  date_of_joining: string;
  gender: string;
  blood_group: string;
  email: string;
  paymentDetails: { term: string; status: string }[];
  status: string;
}
const Admission = () => {
   const {state}=useAuth();
  const [admissions, setAdmissions] = useState<Admission[]>([]);
  const [filteredData, setFilteredData] = useState<Admission[]>([]);
  const [showModal, setShowModal] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [entriesPerPage] = useState(10);
  const [loading, setLoading] = useState(false);
 const [search, setSearch] = useState("");
 const [filters, setFilters] = useState({
  user_name: "",
  status: "",
  gender: "",
  blood_group: "",
});

  // Toggle Modal
  const toggleModal = () => {
    setShowModal((prev) => !prev);
  };

  // Fetch Admissions
 

    const fetchAdmissions = async () => {
      try {
        setLoading(true);
        const response = await fetch("/api/admin/signup/get_admission_details", {
          method: 'POST',
        headers: {
           'authorizations': state?.accessToken ?? '', 
          // 'authorizations': token ?? '',
          'api_key': '10f052463f485938d04ac7300de7ec2b',  // Make sure the API key is correct
        },
        body: JSON.stringify({ /* request body */ }),
      });
      if (!response.ok) {
        const errorData = await response.json();
        // console.error('API error:', errorData);
        throw new Error(`HTTP error! Status: ${response.status} - ${errorData.message || 'Unknown error'}`);
      }
        const data = await response.json();
        setAdmissions(data.data || []);
        setFilteredData(data.data || []);

      } catch (error) {
        console.error("Error fetching admissions:", error);
      } finally {
        setLoading(false);
      }
    };
    
    useEffect(() => {
      fetchAdmissions();
     
    }, [state]);
    
  const handleFilter = () => {
    const { user_name, status, gender, blood_group } = filters; // Extract relevant filters from the state
  
    const filtered = admissions.filter((admission) => {
      const statusMatch = !status || admission.status.toLowerCase() === status.toLowerCase();
      const nameMatch = !user_name || admission.user_name.toLowerCase().includes(user_name.toLowerCase());
      const genderMatch = !gender || admission.gender.toLowerCase() === gender.toLowerCase();
      const bloodGroupMatch = !blood_group || admission.blood_group.toLowerCase() === blood_group.toLowerCase();
      const searchMatch = !search || 
        admission.user_name.toLowerCase().includes(search.toLowerCase()) || 
        admission.email.toLowerCase().includes(search.toLowerCase()) || 
        admission.blood_group.toLowerCase().includes(search.toLowerCase()) || 
        admission.gender.toLowerCase().includes(search.toLowerCase());
  
      return statusMatch && nameMatch && genderMatch && bloodGroupMatch && searchMatch;
    });
    console.log("Filtered Data:", filteredData);
    setFilteredData(filtered);
    setCurrentPage(1); // Reset pagination to the first page
  };
  
  

 

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
    Admission
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
      <li>Admission</li>
    </ul>
  </div>
 

<div className="flex justify-end mb-4">
<button
 onClick={toggleModal}
 className="btn bg-primary font-medium text-white hover:bg-primary-focus focus:bg-primary-focus active:bg-primary-focus/90 dark:bg-accent dark:hover:bg-accent-focus dark:focus:bg-accent-focus dark:active:bg-accent/90">
  Add Admission
</button>
<Create showModal={showModal} toggleModal={toggleModal} />
</div>
{/* {showModal && (
        <Create showModal={showModal}  toggleModal={ toggleModal}/>
      )} */}
  <div className="grid grid-cols-1 gap-4 sm:gap-5 lg:gap-6" >
  <div className="card px-4 pb-4 sm:px-5">
  <div className="mt-5">

 
  <div className="gridjs-head">
           
           <div className="gridjs-search">
<input type="search" 
placeholder="Type a keyword..." 
aria-label="Type a keyword..." 
className="gridjs-input gridjs-search-input" 
defaultValue="" 
value={search}
onChange={(e) => {
  setSearch(e.target.value);
  handleFilter();
}}/>
</div>
        </div>
    
         

        {/* <div className="is-scrollbar-hidden min-w-full overflow-x-auto"> */}
        <div className="overflow-x-auto w-full">
  <table className="is-hoverable w-full text-left">
            <thead>
              <tr>
                <th className="whitespace-nowrap rounded-l-lg bg-slate-200 px-3 py-3 font-semibold uppercase text-slate-800 dark:bg-navy-800 dark:text-navy-100 lg:px-5">
                SL No
                </th>
                <th className="whitespace-nowrap bg-slate-200 px-4 py-3 font-semibold uppercase text-slate-800 dark:bg-navy-800 dark:text-navy-100 lg:px-5">
                User Name
                </th>
                <th className="whitespace-nowrap bg-slate-200 px-4 py-3 font-semibold uppercase text-slate-800 dark:bg-navy-800 dark:text-navy-100 lg:px-5">
                Email
                </th>
                <th className="whitespace-nowrap bg-slate-200 px-4 py-3 font-semibold uppercase text-slate-800 dark:bg-navy-800 dark:text-navy-100 lg:px-5">
                Blood_Group
                </th>
                <th className="whitespace-nowrap bg-slate-200 px-4 py-3 font-semibold uppercase text-slate-800 dark:bg-navy-800 dark:text-navy-100 lg:px-5">
                Gender
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
                {item.user_name}
                </td>
                <td className="whitespace-nowrap px-4 py-3 sm:px-5">
                {item.email}
                </td>
                <td className="whitespace-nowrap rounded-r-lg px-4 py-3 sm:px-5">
                {item.blood_group}
                </td>
                <td className="whitespace-nowrap rounded-r-lg px-4 py-3 sm:px-5">
                {item.gender}
                </td>
                <td className="whitespace-nowrap rounded-r-lg px-4 py-3 sm:px-5">
                {item.date_of_joining}
                </td>
                <td className="whitespace-nowrap rounded-r-lg px-4 py-3 sm:px-5">
                {/* <FaEdit className='btn size-8 p-0 text-info hover:bg-info/20 focus:bg-info/20 active:bg-info/25'/> */}
                <button 
                className="btn size-8 p-0 text-info hover:bg-info/20 focus:bg-info/20 active:bg-info/25">
  <i className="fa fa-edit" />
</button>
<button className="btn size-8 p-0 text-error hover:bg-error/20 focus:bg-error/20 active:bg-error/25">
  <i className="fa fa-trash-alt" />
</button>

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

export default Admission
